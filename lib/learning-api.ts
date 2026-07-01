"use client";

import { ResetRequest, ResetRequestStatus } from "@/types/learning";
import { readStoredDemoUser } from "@/lib/demo-user";

async function parseResponse<T>(response: Response): Promise<T> {
  const result = (await response.json().catch(() => null)) as
    | (T & { message?: string })
    | null;

  if (!response.ok || !result) {
    throw new Error(
      result?.message ?? "La operación con MongoDB no pudo completarse."
    );
  }

  return result;
}

export async function createResetRequestInDatabase(
  request: ResetRequest
): Promise<ResetRequest> {
  const user = readStoredDemoUser();

  if (!user) {
    throw new Error("No hay una sesión activa para registrar la solicitud.");
  }

  const response = await fetch("/api/reset-requests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...request,
      userEmail: user.email,
      userName: user.name,
    }),
  });

  const result = await parseResponse<{ request: ResetRequest }>(response);
  return result.request;
}

export async function getCurrentUserResetRequest(
  toolId: string,
  level: string
): Promise<ResetRequest | null> {
  const user = readStoredDemoUser();

  if (!user) {
    return null;
  }

  const response = await fetch(
    `/api/reset-requests?userEmail=${encodeURIComponent(
      user.email
    )}&toolId=${encodeURIComponent(toolId)}&level=${encodeURIComponent(level)}`,
    {
      cache: "no-store",
    }
  );

  const result = await parseResponse<{ request: ResetRequest | null }>(
    response
  );

  return result.request;
}

export async function getAllResetRequests(): Promise<ResetRequest[]> {
  const response = await fetch("/api/reset-requests", {
    cache: "no-store",
  });

  const result = await parseResponse<{ requests: ResetRequest[] }>(response);
  return result.requests;
}

export async function reviewResetRequestInDatabase(
  requestId: string,
  status: Extract<ResetRequestStatus, "approved" | "rejected">,
  rejectionReason?: string
): Promise<ResetRequest> {
  const reviewer = readStoredDemoUser();

  if (!reviewer || reviewer.role !== "admin") {
    throw new Error("Se requiere una sesión de Administrador.");
  }

  const response = await fetch(`/api/reset-requests/${requestId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status,
      rejectionReason,
      reviewerEmail: reviewer.email,
      reviewerName: reviewer.name,
    }),
  });

  const result = await parseResponse<{ request: ResetRequest }>(response);
  return result.request;
}

export async function markResetRequestExecutedInDatabase(
  requestId: string
): Promise<ResetRequest> {
  const user = readStoredDemoUser();

  if (!user) {
    throw new Error("No hay una sesión activa.");
  }

  const response = await fetch(`/api/reset-requests/${requestId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: "executed",
      userEmail: user.email,
    }),
  });

  const result = await parseResponse<{ request: ResetRequest }>(response);
  return result.request;
}

export type LearningNote = {
  userEmail: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
  mongoId?: string;
};

export async function getCurrentUserNote(): Promise<LearningNote | null> {
  const user = readStoredDemoUser();

  if (!user) {
    throw new Error("No hay una sesión activa para consultar la nota.");
  }

  const response = await fetch(
    `/api/notes?userEmail=${encodeURIComponent(user.email)}`,
    {
      cache: "no-store",
    }
  );

  const result = await parseResponse<{ note: LearningNote | null }>(response);
  return result.note;
}

export async function saveCurrentUserNote(
  content: string
): Promise<LearningNote> {
  const user = readStoredDemoUser();

  if (!user) {
    throw new Error("No hay una sesión activa para guardar la nota.");
  }

  const response = await fetch("/api/notes", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userEmail: user.email,
      content,
    }),
  });

  const result = await parseResponse<{ note: LearningNote }>(response);
  return result.note;
}

export async function deleteCurrentUserNote(): Promise<void> {
  const user = readStoredDemoUser();

  if (!user) {
    throw new Error("No hay una sesión activa para eliminar la nota.");
  }

  const response = await fetch(
    `/api/notes?userEmail=${encodeURIComponent(user.email)}`,
    {
      method: "DELETE",
    }
  );

  await parseResponse<{ message: string }>(response);
}



export type RouteProgressRecord = {
  userEmail: string;
  routeId: string;
  completedStepIds: string[];
  exhaustedEvaluationIds: string[];
  progress: number;
  status: "not-started" | "in-progress" | "completed";
  currentStepId?: string;
  startedAt?: string;
  completedAt?: string;
  updatedAt?: string;
};

export type EvaluationAttemptRecord = {
  userEmail?: string;
  routeId: string;
  evaluationId: string;
  evaluationType: string;
  attemptNumber: number;
  correctAnswers: number;
  wrongAnswers: number;
  approved: boolean;
  bestCorrectAnswers: number;
  selectedAnswers?: Record<number, string>;
  durationSeconds?: number;
  completedAt: string;
};

export type BadgeRecord = {
  userEmail?: string;
  routeId: string;
  toolId: string;
  level: string;
  badgeType: "gold" | "silver" | "bronze";
  score: number;
  earnedAt?: string;
};

export async function getCurrentRouteProgress(routeId: string): Promise<RouteProgressRecord | null> {
  const user = readStoredDemoUser();
  if (!user) return null;
  const response = await fetch(`/api/route-progress?userEmail=${encodeURIComponent(user.email)}&routeId=${encodeURIComponent(routeId)}`, { cache: "no-store" });
  const result = await parseResponse<{ progress: RouteProgressRecord | null }>(response);
  return result.progress;
}

export async function saveCurrentRouteProgress(progress: Omit<RouteProgressRecord, "userEmail">): Promise<RouteProgressRecord> {
  const user = readStoredDemoUser();
  if (!user) throw new Error("No hay una sesión activa.");
  const response = await fetch("/api/route-progress", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...progress, userEmail: user.email }) });
  const result = await parseResponse<{ progress: RouteProgressRecord }>(response);
  return result.progress;
}

export async function getCurrentEvaluationAttempts(routeId: string, evaluationId?: string): Promise<EvaluationAttemptRecord[]> {
  const user = readStoredDemoUser();
  if (!user) return [];
  const suffix = evaluationId ? `&evaluationId=${encodeURIComponent(evaluationId)}` : "";
  const response = await fetch(`/api/evaluation-attempts?userEmail=${encodeURIComponent(user.email)}&routeId=${encodeURIComponent(routeId)}${suffix}`, { cache: "no-store" });
  const result = await parseResponse<{ attempts: EvaluationAttemptRecord[] }>(response);
  return result.attempts;
}

export async function saveEvaluationAttemptInDatabase(attempt: EvaluationAttemptRecord): Promise<void> {
  const user = readStoredDemoUser();
  if (!user) throw new Error("No hay una sesión activa.");
  const response = await fetch("/api/evaluation-attempts", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...attempt, userEmail: user.email }) });
  await parseResponse<{ attempt: EvaluationAttemptRecord }>(response);
}

export async function getCurrentBadge(routeId: string): Promise<BadgeRecord | null> {
  const user = readStoredDemoUser();
  if (!user) return null;
  const response = await fetch(`/api/badges?userEmail=${encodeURIComponent(user.email)}&routeId=${encodeURIComponent(routeId)}`, { cache: "no-store" });
  const result = await parseResponse<{ badge: BadgeRecord | null }>(response);
  return result.badge;
}

export async function saveBadgeInDatabase(badge: Omit<BadgeRecord, "userEmail">): Promise<void> {
  const user = readStoredDemoUser();
  if (!user) throw new Error("No hay una sesión activa.");
  const response = await fetch("/api/badges", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...badge, userEmail: user.email }) });
  await parseResponse<{ badge: BadgeRecord }>(response);
}

export async function getCurrentAlerts(): Promise<import("@/types/learning").LearningAlert[]> {
  const user = readStoredDemoUser();
  if (!user) return [];
  const response = await fetch(`/api/alerts?userEmail=${encodeURIComponent(user.email)}`, { cache: "no-store" });
  const result = await parseResponse<{ alerts: import("@/types/learning").LearningAlert[] }>(response);
  return result.alerts;
}

export async function saveAlertInDatabase(alert: import("@/types/learning").LearningAlert): Promise<void> {
  const user = readStoredDemoUser();
  if (!user) return;
  const response = await fetch("/api/alerts", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...alert, userEmail: user.email }) });
  await parseResponse<{ alert: import("@/types/learning").LearningAlert }>(response);
}

export async function updateAlertStatusInDatabase(id: string, status: import("@/types/learning").AlertStatus): Promise<void> {
  const user = readStoredDemoUser();
  if (!user) return;
  const response = await fetch("/api/alerts", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ userEmail: user.email, id, status }) });
  await parseResponse<{ message: string }>(response);
}

export async function hydrateLearningCacheFromDatabase(): Promise<void> {
  const routeId = "onedrive-descubre";
  const [progress, attempts, badge, alerts] = await Promise.all([
    getCurrentRouteProgress(routeId),
    getCurrentEvaluationAttempts(routeId),
    getCurrentBadge(routeId),
    getCurrentAlerts(),
  ]);

  if (progress) {
    window.localStorage.setItem("habilidades-tfja:onedrive-descubre:completed", JSON.stringify(progress.completedStepIds ?? []));
    window.localStorage.setItem("habilidades-tfja:onedrive-descubre:exhausted-evaluations", JSON.stringify(progress.exhaustedEvaluationIds ?? []));
  }

  const grouped = new Map<string, EvaluationAttemptRecord[]>();
  attempts.forEach((attempt) => grouped.set(attempt.evaluationId, [...(grouped.get(attempt.evaluationId) ?? []), attempt]));
  grouped.forEach((items, evaluationId) => {
    const sorted = [...items].sort((a, b) => a.attemptNumber - b.attemptNumber);
    const bestCorrectAnswers = Math.max(0, ...sorted.map((item) => item.bestCorrectAnswers ?? item.correctAnswers));
    const approved = sorted.some((item) => item.approved);
    const normalizedAttempts = sorted.map(({ attemptNumber, correctAnswers, wrongAnswers, approved: itemApproved, completedAt }) => ({ attemptNumber, correctAnswers, wrongAnswers, approved: itemApproved, completedAt }));
    const isFinal = evaluationId.includes("evaluacion-final");
    const storageKey = isFinal ? `htfja-final-${evaluationId}` : `htfja-checkpoint-${evaluationId}`;
    window.localStorage.setItem(storageKey, JSON.stringify({ attemptsUsed: sorted.length, bestCorrectAnswers, approved, attempts: normalizedAttempts, badge: badge?.badgeType ?? "repeat", accumulatedCorrectAnswers: bestCorrectAnswers }));
    if (isFinal && sorted.length) {
      const last = sorted[sorted.length - 1];
      window.localStorage.setItem(`${storageKey}-result`, JSON.stringify({ correctAnswers: last.correctAnswers, wrongAnswers: last.wrongAnswers, approved, badge: badge?.badgeType ?? "repeat", attemptNumber: last.attemptNumber, bestCorrectAnswers, accumulatedCorrectAnswers: bestCorrectAnswers, completedAt: last.completedAt }));
    }
  });

  if (badge?.badgeType) window.localStorage.setItem("habilidades-tfja:onedrive-descubre:badge", badge.badgeType);
  else window.localStorage.removeItem("habilidades-tfja:onedrive-descubre:badge");
  window.localStorage.setItem("habilidades-tfja:alerts", JSON.stringify(alerts));
  window.dispatchEvent(new CustomEvent("habilidades-tfja:course-updated"));
  window.dispatchEvent(new CustomEvent("habilidades-tfja:badge-updated"));
  window.dispatchEvent(new CustomEvent("habilidades-tfja:alerts-updated"));
}
