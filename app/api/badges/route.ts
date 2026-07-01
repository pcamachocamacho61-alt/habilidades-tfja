import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
function email(value: unknown) { return typeof value === "string" ? value.trim().toLowerCase() : ""; }
function serialize(document: Record<string, unknown> | null) { if (!document) return null; const { _id, ...rest } = document; return { ...rest, mongoId: _id ? String(_id) : undefined }; }

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userEmail = email(searchParams.get("userEmail"));
    const routeId = searchParams.get("routeId")?.trim();
    if (!userEmail) return NextResponse.json({ ok: false, message: "Falta userEmail." }, { status: 400 });
    const filter: Record<string, unknown> = { userEmail };
    if (routeId) filter.routeId = routeId;
    const database = await getDatabase();
    if (routeId) {
      const badge = await database.collection("badges").findOne(filter);
      return NextResponse.json({ ok: true, badge: serialize(badge as Record<string, unknown> | null) });
    }
    const documents = await database.collection("badges").find(filter).sort({ earnedAt: -1 }).toArray();
    return NextResponse.json({ ok: true, badges: documents.map((item) => serialize(item as Record<string, unknown>)) });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "No fue posible consultar las insignias.", error: error instanceof Error ? error.message : "Error desconocido." }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const payload = await request.json() as Record<string, unknown>;
    const userEmail = email(payload.userEmail);
    const routeId = typeof payload.routeId === "string" ? payload.routeId.trim() : "";
    const badgeType = typeof payload.badgeType === "string" ? payload.badgeType : "";
    if (!userEmail || !routeId || !["gold","silver","bronze"].includes(badgeType)) {
      return NextResponse.json({ ok: false, message: "Datos de insignia no válidos." }, { status: 400 });
    }
    const now = new Date();
    const database = await getDatabase();
    await database.collection("badges").updateOne(
      { userEmail, routeId },
      { $set: { toolId: payload.toolId ?? "onedrive", level: payload.level ?? "descubre", badgeType, score: Number(payload.score) || 0, updatedAt: now }, $setOnInsert: { earnedAt: now, createdAt: now } },
      { upsert: true }
    );
    await database.collection("audit_logs").insertOne({ action: "BADGE_AWARDED", userEmail, routeId, badgeType, score: Number(payload.score) || 0, createdAt: now });
    const badge = await database.collection("badges").findOne({ userEmail, routeId });
    return NextResponse.json({ ok: true, badge: serialize(badge as Record<string, unknown> | null) });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "No fue posible guardar la insignia.", error: error instanceof Error ? error.message : "Error desconocido." }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userEmail = email(searchParams.get("userEmail"));
    const routeId = searchParams.get("routeId")?.trim();
    if (!userEmail || !routeId) return NextResponse.json({ ok: false, message: "Faltan userEmail o routeId." }, { status: 400 });
    const database = await getDatabase();
    await database.collection("badges").deleteOne({ userEmail, routeId });
    return NextResponse.json({ ok: true, message: "Insignia eliminada." });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "No fue posible eliminar la insignia.", error: error instanceof Error ? error.message : "Error desconocido." }, { status: 500 });
  }
}
