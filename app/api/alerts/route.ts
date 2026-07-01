import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
function email(value: unknown) { return typeof value === "string" ? value.trim().toLowerCase() : ""; }
function serialize(document: Record<string, unknown>) { const { _id, ...rest } = document; return { ...rest, mongoId: _id ? String(_id) : undefined }; }

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userEmail = email(searchParams.get("userEmail"));
    if (!userEmail) return NextResponse.json({ ok: false, message: "Falta userEmail." }, { status: 400 });
    const database = await getDatabase();
    const documents = await database.collection("alerts").find({ userEmail }).sort({ createdAt: -1 }).toArray();
    return NextResponse.json({ ok: true, alerts: documents.map((item) => serialize(item as Record<string, unknown>)) });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "No fue posible consultar las alertas.", error: error instanceof Error ? error.message : "Error desconocido." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json() as Record<string, unknown>;
    const userEmail = email(payload.userEmail);
    const id = typeof payload.id === "string" ? payload.id.trim() : "";
    if (!userEmail || !id) return NextResponse.json({ ok: false, message: "Faltan userEmail o id." }, { status: 400 });
    const now = new Date();
    const database = await getDatabase();
    await database.collection("alerts").updateOne(
      { userEmail, id },
      { $set: { title: payload.title, description: payload.description, tone: payload.tone, routeId: payload.routeId, relatedRequestId: payload.relatedRequestId, updatedAt: now }, $setOnInsert: { status: payload.status ?? "new", createdAt: new Date(typeof payload.createdAt === "string" ? payload.createdAt : now) } },
      { upsert: true }
    );
    const alert = await database.collection("alerts").findOne({ userEmail, id });
    return NextResponse.json({ ok: true, alert: alert ? serialize(alert as Record<string, unknown>) : null });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "No fue posible guardar la alerta.", error: error instanceof Error ? error.message : "Error desconocido." }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const payload = await request.json() as Record<string, unknown>;
    const userEmail = email(payload.userEmail);
    const id = typeof payload.id === "string" ? payload.id.trim() : "";
    const status = typeof payload.status === "string" ? payload.status : "";
    if (!userEmail || !id || !["new","read","attended","archived"].includes(status)) return NextResponse.json({ ok: false, message: "Datos de alerta no válidos." }, { status: 400 });
    const database = await getDatabase();
    await database.collection("alerts").updateOne({ userEmail, id }, { $set: { status, updatedAt: new Date() } });
    return NextResponse.json({ ok: true, message: "Estado actualizado." });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "No fue posible actualizar la alerta.", error: error instanceof Error ? error.message : "Error desconocido." }, { status: 500 });
  }
}
