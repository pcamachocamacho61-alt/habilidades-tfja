import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RouteContext = {
  params: Promise<{
    requestId: string;
  }>;
};

type UpdatePayload = {
  status?: "approved" | "rejected" | "executed";
  rejectionReason?: string;
  reviewerEmail?: string;
  reviewerName?: string;
  userEmail?: string;
};

function serializeDocument(document: Record<string, unknown>) {
  const { _id, ...rest } = document;
  return {
    ...rest,
    mongoId: _id ? String(_id) : undefined,
  };
}

export async function PATCH(request: Request, context: RouteContext) {
  try {
    const { requestId } = await context.params;
    const payload = (await request.json()) as UpdatePayload;
    const database = await getDatabase();
    const collection = database.collection("reset_requests");
    const current = await collection.findOne({ id: requestId });

    if (!current) {
      return NextResponse.json(
        { ok: false, message: "La solicitud no existe." },
        { status: 404 }
      );
    }

    if (payload.status === "approved" || payload.status === "rejected") {
      if (current.status !== "pending") {
        return NextResponse.json(
          {
            ok: false,
            message: "La solicitud ya fue revisada.",
          },
          { status: 409 }
        );
      }

      const reviewerEmail = payload.reviewerEmail?.trim().toLowerCase();
      const reviewerName = payload.reviewerName?.trim();

      if (!reviewerEmail || !reviewerName) {
        return NextResponse.json(
          {
            ok: false,
            message: "Faltan los datos de la persona administradora.",
          },
          { status: 400 }
        );
      }

      const rejectionReason = payload.rejectionReason?.trim();

      if (payload.status === "rejected" && !rejectionReason) {
        return NextResponse.json(
          {
            ok: false,
            message: "El motivo del rechazo es obligatorio.",
          },
          { status: 400 }
        );
      }

      const reviewedAt = new Date();
      const update = {
        status: payload.status,
        reviewedAt,
        reviewerEmail,
        reviewerName,
        rejectionReason:
          payload.status === "rejected" ? rejectionReason : undefined,
        updatedAt: reviewedAt,
      };

      await collection.updateOne({ id: requestId }, { $set: update });

      await database.collection("audit_logs").insertOne({
        action:
          payload.status === "approved"
            ? "RESET_REQUEST_APPROVED"
            : "RESET_REQUEST_REJECTED",
        requestId,
        userEmail: current.userEmail,
        reviewerEmail,
        reviewerName,
        rejectionReason:
          payload.status === "rejected" ? rejectionReason : undefined,
        createdAt: reviewedAt,
      });
    } else if (payload.status === "executed") {
      const userEmail = payload.userEmail?.trim().toLowerCase();

      if (!userEmail || userEmail !== current.userEmail) {
        return NextResponse.json(
          {
            ok: false,
            message: "La solicitud no pertenece a la sesión actual.",
          },
          { status: 403 }
        );
      }

      if (current.status !== "approved") {
        return NextResponse.json(
          {
            ok: false,
            message: "La solicitud debe estar autorizada antes de ejecutarse.",
          },
          { status: 409 }
        );
      }

      const executedAt = new Date();

      await collection.updateOne(
        { id: requestId },
        {
          $set: {
            status: "executed",
            executedAt,
            updatedAt: executedAt,
          },
        }
      );

      const routeId = `${current.toolId}-${current.level}`;
      await Promise.all([
        database.collection("route_progress").deleteOne({ userEmail, routeId }),
        database.collection("evaluation_attempts").deleteMany({ userEmail, routeId }),
        database.collection("badges").deleteOne({ userEmail, routeId }),
      ]);

      await database.collection("audit_logs").insertOne({
        action: "RESET_REQUEST_EXECUTED",
        requestId,
        userEmail,
        createdAt: executedAt,
      });
    } else {
      return NextResponse.json(
        { ok: false, message: "Estado de solicitud no válido." },
        { status: 400 }
      );
    }

    const updated = await collection.findOne({ id: requestId });

    return NextResponse.json({
      ok: true,
      message: "Solicitud actualizada correctamente.",
      request: updated ? serializeDocument(updated) : null,
    });
  } catch (error) {
    console.error("Error al actualizar solicitud:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "No fue posible actualizar la solicitud.",
        error: error instanceof Error ? error.message : "Error desconocido.",
      },
      { status: 500 }
    );
  }
}
