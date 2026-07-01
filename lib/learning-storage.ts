"use client";

import {
  AlertStatus,
  LearningAlert,
  ResetRequest,
} from "@/types/learning";
import { saveAlertInDatabase, updateAlertStatusInDatabase } from "@/lib/learning-api";

export const LEARNING_KEYS = {
  alerts: "habilidades-tfja:alerts",
  completed: "habilidades-tfja:onedrive-descubre:completed",
  exhausted: "habilidades-tfja:onedrive-descubre:exhausted-evaluations",
  resetRequest: "habilidades-tfja:onedrive-descubre:reset-request",
  badge: "habilidades-tfja:onedrive-descubre:badge",
  finalResult: "htfja-final-onedrive-descubre-evaluacion-final-result",
  finalProgress: "htfja-final-onedrive-descubre-evaluacion-final",
  checkpointOne: "htfja-checkpoint-onedrive-descubre-evaluacion-1",
  checkpointTwo: "htfja-checkpoint-onedrive-descubre-evaluacion-2",
  celebrated: "habilidades-tfja:onedrive-descubre:completion-celebrated",
} as const;

export const LEARNING_EVENTS = {
  alertsUpdated: "habilidades-tfja:alerts-updated",
  resetUpdated: "habilidades-tfja:reset-request-updated",
  courseUpdated: "habilidades-tfja:course-updated",
  badgeUpdated: "habilidades-tfja:badge-updated",
} as const;

function safeParse<T>(value: string | null, fallback: T): T {
  if (!value) return fallback;

  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function getLearningAlerts(): LearningAlert[] {
  const alerts = safeParse<LearningAlert[]>(
    window.localStorage.getItem(LEARNING_KEYS.alerts),
    []
  );

  return Array.isArray(alerts) ? alerts : [];
}

export function saveLearningAlerts(alerts: LearningAlert[]) {
  window.localStorage.setItem(LEARNING_KEYS.alerts, JSON.stringify(alerts));
  window.dispatchEvent(new CustomEvent(LEARNING_EVENTS.alertsUpdated));
}

export function upsertLearningAlert(
  alert: Omit<LearningAlert, "createdAt" | "status"> & {
    createdAt?: string;
    status?: AlertStatus;
  }
) {
  const alerts = getLearningAlerts();
  const existingIndex = alerts.findIndex((item) => item.id === alert.id);
  const normalized: LearningAlert = {
    ...alert,
    createdAt: alert.createdAt ?? new Date().toISOString(),
    status: alert.status ?? "new",
  };

  if (existingIndex >= 0) {
    alerts[existingIndex] = {
      ...alerts[existingIndex],
      ...normalized,
      status: alerts[existingIndex].status,
      createdAt: alerts[existingIndex].createdAt,
    };
  } else {
    alerts.unshift(normalized);
  }

  saveLearningAlerts(alerts);
  void saveAlertInDatabase(normalized).catch((error) => console.error("No fue posible guardar la alerta en MongoDB:", error));
}

export function updateLearningAlertStatus(
  alertId: string,
  status: AlertStatus
) {
  saveLearningAlerts(
    getLearningAlerts().map((alert) =>
      alert.id === alertId ? { ...alert, status } : alert
    )
  );
  void updateAlertStatusInDatabase(alertId, status).catch((error) =>
    console.error("No fue posible actualizar la alerta en MongoDB:", error)
  );
}

function getResetRequestStorageKey(routeId = "onedrive-descubre"): string {
  return `habilidades-tfja:${routeId}:reset-request`;
}

export function getResetRequest(
  routeId = "onedrive-descubre"
): ResetRequest | null {
  return safeParse<ResetRequest | null>(
    window.localStorage.getItem(getResetRequestStorageKey(routeId)),
    null
  );
}

export function saveResetRequest(
  request: ResetRequest | null,
  routeId = "onedrive-descubre"
) {
  const storageKey = getResetRequestStorageKey(routeId);

  if (request) {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify(request)
    );
  } else {
    window.localStorage.removeItem(storageKey);
  }

  window.dispatchEvent(new CustomEvent(LEARNING_EVENTS.resetUpdated));
}

export function executeOneDriveDescubreReset(request: ResetRequest) {
  const keysToRemove = [
    LEARNING_KEYS.completed,
    LEARNING_KEYS.exhausted,
    LEARNING_KEYS.badge,
    LEARNING_KEYS.finalResult,
    LEARNING_KEYS.finalProgress,
    LEARNING_KEYS.checkpointOne,
    LEARNING_KEYS.checkpointTwo,
  ];

  keysToRemove.forEach((key) => window.localStorage.removeItem(key));
  window.sessionStorage.removeItem(LEARNING_KEYS.celebrated);

  const executedRequest: ResetRequest = {
    ...request,
    status: "executed",
    executedAt: new Date().toISOString(),
  };

  saveResetRequest(executedRequest, "onedrive-descubre");
  upsertLearningAlert({
    id: `reset-executed-${request.id}`,
    title: "Reinicio de ruta ejecutado",
    description:
      "La ruta OneDrive Descubre fue reiniciada. Ya puedes comenzar nuevamente. Tu Bloc de notas se conservó.",
    tone: "success",
    routeId: "onedrive-descubre",
    relatedRequestId: request.id,
  });

  window.dispatchEvent(new CustomEvent(LEARNING_EVENTS.courseUpdated));
  window.dispatchEvent(new CustomEvent(LEARNING_EVENTS.badgeUpdated));
}
