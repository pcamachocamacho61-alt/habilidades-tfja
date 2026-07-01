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
    const routeId = searchParams.get("routeId")?.trim();
    const evaluationId = searchParams.get("evaluationId")?.trim();
    if (!userEmail || !routeId) return NextResponse.json({ ok: false, message: "Faltan userEmail o routeId." }, { status: 400 });
    const filter: Record<string, unknown> = { userEmail, routeId };
    if (evaluationId) filter.evaluationId = evaluationId;
    const database = await getDatabase();
    const documents = await database.collection("evaluation_attempts").find(filter).sort({ completedAt: 1 }).toArray();
    return NextResponse.json({ ok: true, attempts: documents.map((item) => serialize(item as Record<string, unknown>)) });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "No fue posible consultar los intentos.", error: error instanceof Error ? error.message : "Error desconocido." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json() as Record<string, unknown>;
    const userEmail = email(payload.userEmail);
    const routeId = typeof payload.routeId === "string" ? payload.routeId.trim() : "";
    const evaluationId = typeof payload.evaluationId === "string" ? payload.evaluationId.trim() : "";
    const attemptNumber = Number(payload.attemptNumber);
    if (!userEmail || !routeId || !evaluationId || !Number.isInteger(attemptNumber) || attemptNumber < 1) {
      return NextResponse.json({ ok: false, message: "Datos de intento incompletos." }, { status: 400 });
    }
    const now = new Date();
    const document = {
      userEmail,
      routeId,
      evaluationId,
      evaluationType: payload.evaluationType,
      attemptNumber,
      correctAnswers: Number(payload.correctAnswers) || 0,
      wrongAnswers: Number(payload.wrongAnswers) || 0,
      approved: Boolean(payload.approved),
      bestCorrectAnswers: Number(payload.bestCorrectAnswers) || Number(payload.correctAnswers) || 0,
      selectedAnswers: payload.selectedAnswers && typeof payload.selectedAnswers === "object" ? payload.selectedAnswers : {},
      durationSeconds: Number(payload.durationSeconds) || undefined,
      completedAt: new Date(typeof payload.completedAt === "string" ? payload.completedAt : now),
      updatedAt: now,
    };
    const database = await getDatabase();
    await database.collection("evaluation_attempts").updateOne(
      { userEmail, routeId, evaluationId, attemptNumber },
      { $set: document, $setOnInsert: { createdAt: now } },
      { upsert: true }
    );
    await database.collection("audit_logs").insertOne({ action: "EVALUATION_ATTEMPT_SAVED", userEmail, routeId, evaluationId, attemptNumber, approved: document.approved, createdAt: now });
    const saved = await database.collection("evaluation_attempts").findOne({ userEmail, routeId, evaluationId, attemptNumber });
    return NextResponse.json({ ok: true, attempt: saved ? serialize(saved as Record<string, unknown>) : null });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "No fue posible guardar el intento.", error: error instanceof Error ? error.message : "Error desconocido." }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userEmail = email(searchParams.get("userEmail"));
    const routeId = searchParams.get("routeId")?.trim();
    if (!userEmail || !routeId) return NextResponse.json({ ok: false, message: "Faltan userEmail o routeId." }, { status: 400 });
    const database = await getDatabase();
    await database.collection("evaluation_attempts").deleteMany({ userEmail, routeId });
    return NextResponse.json({ ok: true, message: "Intentos eliminados." });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "No fue posible eliminar los intentos.", error: error instanceof Error ? error.message : "Error desconocido." }, { status: 500 });
  }
}
