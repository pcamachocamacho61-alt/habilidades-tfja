import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_NOTE_LENGTH = 2000;

type SaveNotePayload = {
  userEmail?: string;
  content?: string;
};

function serializeNote(document: Record<string, unknown> | null) {
  if (!document) {
    return null;
  }

  const { _id, ...rest } = document;

  return {
    ...rest,
    mongoId: _id ? String(_id) : undefined,
  };
}

function normalizeEmail(value: string | null | undefined): string {
  return value?.trim().toLowerCase() ?? "";
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userEmail = normalizeEmail(searchParams.get("userEmail"));

    if (!userEmail) {
      return NextResponse.json(
        { ok: false, message: "El correo del usuario es obligatorio." },
        { status: 400 }
      );
    }

    const database = await getDatabase();
    const note = await database.collection("notes").findOne({ userEmail });

    return NextResponse.json({ ok: true, note: serializeNote(note) });
  } catch (error) {
    console.error("Error al consultar la nota:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "No fue posible consultar la nota.",
        error: error instanceof Error ? error.message : "Error desconocido.",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const payload = (await request.json()) as SaveNotePayload;
    const userEmail = normalizeEmail(payload.userEmail);
    const content = payload.content ?? "";
    const trimmedContent = content.trim();

    if (!userEmail) {
      return NextResponse.json(
        { ok: false, message: "El correo del usuario es obligatorio." },
        { status: 400 }
      );
    }

    if (!trimmedContent) {
      return NextResponse.json(
        { ok: false, message: "La nota no puede estar vacía." },
        { status: 400 }
      );
    }

    if (content.length > MAX_NOTE_LENGTH) {
      return NextResponse.json(
        {
          ok: false,
          message: `La nota no puede superar los ${MAX_NOTE_LENGTH} caracteres.`,
        },
        { status: 400 }
      );
    }

    const database = await getDatabase();
    const now = new Date();
    const collection = database.collection("notes");
    const previousNote = await collection.findOne({ userEmail });

    await collection.updateOne(
      { userEmail },
      {
        $set: { userEmail, content, updatedAt: now },
        $setOnInsert: { createdAt: now },
      },
      { upsert: true }
    );

    await database.collection("audit_logs").insertOne({
      action: previousNote ? "NOTE_UPDATED" : "NOTE_CREATED",
      userEmail,
      createdAt: now,
    });

    const savedNote = await collection.findOne({ userEmail });

    return NextResponse.json({
      ok: true,
      message: previousNote
        ? "La nota se actualizó correctamente."
        : "La nota se guardó correctamente.",
      note: serializeNote(savedNote),
    });
  } catch (error) {
    console.error("Error al guardar la nota:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "No fue posible guardar la nota.",
        error: error instanceof Error ? error.message : "Error desconocido.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userEmail = normalizeEmail(searchParams.get("userEmail"));

    if (!userEmail) {
      return NextResponse.json(
        { ok: false, message: "El correo del usuario es obligatorio." },
        { status: 400 }
      );
    }

    const database = await getDatabase();
    const result = await database.collection("notes").deleteOne({ userEmail });
    const now = new Date();

    if (result.deletedCount > 0) {
      await database.collection("audit_logs").insertOne({
        action: "NOTE_DELETED",
        userEmail,
        createdAt: now,
      });
    }

    return NextResponse.json({
      ok: true,
      message:
        result.deletedCount > 0
          ? "La nota fue eliminada correctamente."
          : "No había una nota guardada para eliminar.",
    });
  } catch (error) {
    console.error("Error al eliminar la nota:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "No fue posible eliminar la nota.",
        error: error instanceof Error ? error.message : "Error desconocido.",
      },
      { status: 500 }
    );
  }
}
