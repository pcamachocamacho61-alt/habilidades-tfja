import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function normalizeEmail(value: unknown) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

function serialize(document: Record<string, unknown> | null) {
  if (!document) return null;
  const { _id, ...rest } = document;
  return { ...rest, mongoId: _id ? String(_id) : undefined };
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userEmail = normalizeEmail(searchParams.get("userEmail"));
    const routeId = searchParams.get("routeId")?.trim();

    if (!userEmail || !routeId) {
      return NextResponse.json({ ok: false, message: "Faltan userEmail o routeId." }, { status: 400 });
    }

    const database = await getDatabase();
    const progress = await database.collection("route_progress").findOne({ userEmail, routeId });
    return NextResponse.json({ ok: true, progress: serialize(progress as Record<string, unknown> | null) });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "No fue posible consultar el avance.", error: error instanceof Error ? error.message : "Error desconocido." }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const payload = await request.json() as {
      userEmail?: string;
      routeId?: string;
      completedStepIds?: string[];
      exhaustedEvaluationIds?: string[];
      progress?: number;
      status?: "not-started" | "in-progress" | "completed";
      currentStepId?: string;
      startedAt?: string;
      completedAt?: string;
    };

    const userEmail = normalizeEmail(payload.userEmail);
    const routeId = payload.routeId?.trim();
    if (!userEmail || !routeId) {
      return NextResponse.json({ ok: false, message: "Faltan userEmail o routeId." }, { status: 400 });
    }

    const now = new Date();
    const completedStepIds = Array.isArray(payload.completedStepIds) ? [...new Set(payload.completedStepIds.filter((id): id is string => typeof id === "string"))] : [];
    const exhaustedEvaluationIds = Array.isArray(payload.exhaustedEvaluationIds) ? [...new Set(payload.exhaustedEvaluationIds.filter((id): id is string => typeof id === "string"))] : [];
    const normalizedProgress = Math.min(100, Math.max(0, Number(payload.progress) || 0));
    const status = payload.status === "completed" ? "completed" : normalizedProgress > 0 ? "in-progress" : "not-started";

    const database = await getDatabase();
    await database.collection("route_progress").updateOne(
      { userEmail, routeId },
      {
        $set: {
          completedStepIds,
          exhaustedEvaluationIds,
          progress: normalizedProgress,
          status,
          currentStepId: payload.currentStepId?.trim() || undefined,
          completedAt: status === "completed" ? new Date(payload.completedAt ?? now) : undefined,
          updatedAt: now,
        },
        $setOnInsert: { createdAt: now, startedAt: new Date(payload.startedAt ?? now) },
      },
      { upsert: true }
    );

    const progressDocument = await database.collection("route_progress").findOne({ userEmail, routeId });
    return NextResponse.json({ ok: true, progress: serialize(progressDocument as Record<string, unknown> | null) });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "No fue posible guardar el avance.", error: error instanceof Error ? error.message : "Error desconocido." }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userEmail = normalizeEmail(searchParams.get("userEmail"));
    const routeId = searchParams.get("routeId")?.trim();
    if (!userEmail || !routeId) return NextResponse.json({ ok: false, message: "Faltan userEmail o routeId." }, { status: 400 });
    const database = await getDatabase();
    await database.collection("route_progress").deleteOne({ userEmail, routeId });
    return NextResponse.json({ ok: true, message: "Avance eliminado." });
  } catch (error) {
    return NextResponse.json({ ok: false, message: "No fue posible eliminar el avance.", error: error instanceof Error ? error.message : "Error desconocido." }, { status: 500 });
  }
}
