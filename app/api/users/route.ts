import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type UserPayload = {
  name?: string;
  email?: string;
  initials?: string;
  role?: "user" | "admin";
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as UserPayload;
    const name = payload.name?.trim();
    const email = payload.email?.trim().toLowerCase();
    const initials = payload.initials?.trim();
    const role = payload.role === "admin" ? "admin" : "user";

    if (!name || !email || !initials) {
      return NextResponse.json(
        {
          ok: false,
          message: "Nombre, correo e iniciales son obligatorios.",
        },
        { status: 400 }
      );
    }

    const database = await getDatabase();
    const now = new Date();

    await database.collection("users").updateOne(
      { email },
      {
        $set: {
          name,
          email,
          initials,
          role,
          updatedAt: now,
          lastLoginAt: now,
        },
        $setOnInsert: {
          createdAt: now,
        },
      },
      { upsert: true }
    );

    await database.collection("audit_logs").insertOne({
      action: "USER_SESSION_REGISTERED",
      userEmail: email,
      userName: name,
      role,
      createdAt: now,
    });

    return NextResponse.json({
      ok: true,
      message: "Usuario registrado correctamente.",
      user: { name, email, initials, role },
    });
  } catch (error) {
    console.error("Error al registrar usuario:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "No fue posible registrar el usuario.",
        error: error instanceof Error ? error.message : "Error desconocido.",
      },
      { status: 500 }
    );
  }
}
