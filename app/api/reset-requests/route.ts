import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type CreateResetRequestPayload = {
  id?: string;
  toolId?: string;
  level?: string;
  evaluationId?: string;
  requestedAt?: string;
  status?: string;
  userEmail?: string;
  userName?: string;
};

function serializeDocument(document: Record<string, unknown>) {
  const { _id, ...rest } = document;
  return {
    ...rest,
    mongoId: _id ? String(_id) : undefined,
  };
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userEmail = searchParams.get("userEmail")?.trim().toLowerCase();
    const toolId = searchParams.get("toolId")?.trim();
    const level = searchParams.get("level")?.trim();
    const database = await getDatabase();
    const collection = database.collection("reset_requests");

    if (userEmail) {
      const filter: Record<string, string> = {
        userEmail,
      };

      if (toolId) {
        filter.toolId = toolId;
      }

      if (level) {
        filter.level = level;
      }

      const document = await collection.findOne(
        filter,
        { sort: { requestedAt: -1 } }
      );

      return NextResponse.json({
        ok: true,
        request: document ? serializeDocument(document) : null,
      });
    }

    const documents = await collection
      .find({})
      .sort({ requestedAt: -1 })
      .toArray();

    return NextResponse.json({
      ok: true,
      requests: documents.map((document) => serializeDocument(document)),
    });
  } catch (error) {
    console.error("Error al consultar solicitudes:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "No fue posible consultar las solicitudes de reinicio.",
        error: error instanceof Error ? error.message : "Error desconocido.",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as CreateResetRequestPayload;
    const id = payload.id?.trim();
    const toolId = payload.toolId?.trim();
    const level = payload.level?.trim();
    const evaluationId = payload.evaluationId?.trim();
    const userEmail = payload.userEmail?.trim().toLowerCase();
    const userName = payload.userName?.trim();

    if (!id || !toolId || !level || !evaluationId || !userEmail || !userName) {
      return NextResponse.json(
        {
          ok: false,
          message: "La solicitud no contiene todos los datos obligatorios.",
        },
        { status: 400 }
      );
    }

    const database = await getDatabase();
    const collection = database.collection("reset_requests");

    const existingPending = await collection.findOne({
      userEmail,
      toolId,
      level,
      status: "pending",
    });

    if (existingPending) {
      return NextResponse.json(
        {
          ok: false,
          message: "Ya existe una solicitud pendiente para esta ruta.",
          request: serializeDocument(existingPending),
        },
        { status: 409 }
      );
    }

    const requestedAt = payload.requestedAt
      ? new Date(payload.requestedAt)
      : new Date();

    const document = {
      id,
      toolId,
      level,
      evaluationId,
      userEmail,
      userName,
      requestedAt,
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await collection.insertOne(document);

    await database.collection("audit_logs").insertOne({
      action: "RESET_REQUEST_CREATED",
      requestId: id,
      userEmail,
      userName,
      toolId,
      level,
      evaluationId,
      createdAt: new Date(),
    });

    return NextResponse.json(
      {
        ok: true,
        message: "Solicitud de reinicio registrada.",
        request: serializeDocument(document),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al crear solicitud:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "No fue posible registrar la solicitud de reinicio.",
        error: error instanceof Error ? error.message : "Error desconocido.",
      },
      { status: 500 }
    );
  }
}
