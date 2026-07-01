"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { onedriveDescubreSteps } from "@/data/onedrive-descubre";
import { ProgressBar } from "@/components/progress-bar";
import { getOneDriveBadgeInfo } from "@/lib/badges";
import { BadgeType, LearningAlert, ResetRequest } from "@/types/learning";
import {
  getLearningAlerts,
  getResetRequest,
  LEARNING_EVENTS,
  LEARNING_KEYS,
} from "@/lib/learning-storage";

type DemoUser = {
  name: string;
  email: string;
  initials: string;
  role?: "user" | "admin";
};

type FinalResult = {
  correctAnswers: number;
  wrongAnswers: number;
  approved: boolean;
  badge: BadgeType;
  attemptNumber: number;
  bestCorrectAnswers?: number;
  accumulatedCorrectAnswers?: number;
  completedAt?: string;
};

const DEMO_USER_KEY = "habilidades-tfja:demo-user";
const NOTES_KEY = "habilidades-tfja:notes";

function isBadge(value: unknown): value is BadgeType {
  return (
    value === "gold" ||
    value === "silver" ||
    value === "bronze" ||
    value === "repeat"
  );
}

function requestStatusLabel(request: ResetRequest | null) {
  if (!request) return "Sin solicitud";
  if (request.status === "pending") return "Pendiente de revisión";
  if (request.status === "approved") return "Autorizada";
  if (request.status === "rejected") return "Rechazada";
  return "Ejecutada";
}

function requestStatusStyles(request: ResetRequest | null) {
  if (!request) {
    return "border-slate-200 bg-slate-50 text-slate-600";
  }

  if (request.status === "pending") {
    return "border-amber-200 bg-amber-50 text-amber-800";
  }

  if (request.status === "approved") {
    return "border-blue-200 bg-blue-50 text-blue-700";
  }

  if (request.status === "rejected") {
    return "border-red-200 bg-red-50 text-red-700";
  }

  return "border-emerald-200 bg-emerald-50 text-emerald-700";
}

export function ProfilePanel() {
  const [user, setUser] = useState<DemoUser | null>(null);
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [result, setResult] = useState<FinalResult | null>(null);
  const [badgeValue, setBadgeValue] = useState<BadgeType | null>(null);
  const [hasNote, setHasNote] = useState(false);
  const [alerts, setAlerts] = useState<LearningAlert[]>([]);
  const [resetRequest, setResetRequest] = useState<ResetRequest | null>(null);
  const [loaded, setLoaded] = useState(false);

  const load = useCallback(() => {
    try {
      const storedUser = window.localStorage.getItem(DEMO_USER_KEY);
      const completed = window.localStorage.getItem(
        LEARNING_KEYS.completed
      );
      const storedResult = window.localStorage.getItem(
        LEARNING_KEYS.finalResult
      );
      const storedBadge = window.localStorage.getItem(
        LEARNING_KEYS.badge
      );
      const note = window.localStorage.getItem(NOTES_KEY);

      setUser(
        storedUser
          ? (JSON.parse(storedUser) as DemoUser)
          : null
      );
      setCompletedIds(
        completed
          ? (JSON.parse(completed) as string[])
          : []
      );
      setResult(
        storedResult
          ? (JSON.parse(storedResult) as FinalResult)
          : null
      );
      setBadgeValue(
        isBadge(storedBadge) ? storedBadge : null
      );
      setHasNote(Boolean(note?.trim()));
      setAlerts(getLearningAlerts());
      setResetRequest(getResetRequest());
    } catch {
      setCompletedIds([]);
      setResult(null);
      setBadgeValue(null);
      setAlerts([]);
      setResetRequest(null);
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    load();

    window.addEventListener(
      LEARNING_EVENTS.alertsUpdated,
      load
    );
    window.addEventListener(
      LEARNING_EVENTS.resetUpdated,
      load
    );
    window.addEventListener(
      LEARNING_EVENTS.courseUpdated,
      load
    );
    window.addEventListener(
      LEARNING_EVENTS.badgeUpdated,
      load
    );
    window.addEventListener("storage", load);

    return () => {
      window.removeEventListener(
        LEARNING_EVENTS.alertsUpdated,
        load
      );
      window.removeEventListener(
        LEARNING_EVENTS.resetUpdated,
        load
      );
      window.removeEventListener(
        LEARNING_EVENTS.courseUpdated,
        load
      );
      window.removeEventListener(
        LEARNING_EVENTS.badgeUpdated,
        load
      );
      window.removeEventListener("storage", load);
    };
  }, [load]);

  const progress = useMemo(() => {
    const routeIds = new Set(
      onedriveDescubreSteps.map((step) => step.id)
    );

    const completed = [
      ...new Set(completedIds),
    ].filter((id) => routeIds.has(id)).length;

    return onedriveDescubreSteps.length
      ? Math.min(
          100,
          Math.round(
            (completed /
              onedriveDescubreSteps.length) *
              100
          )
        )
      : 0;
  }, [completedIds]);

  if (!loaded) {
    return (
      <section className="rounded-[28px] bg-white/70 p-5">
        <p className="text-sm font-bold text-slate-600">
          Cargando perfil...
        </p>
      </section>
    );
  }

  const badge = result?.badge ?? badgeValue;
  const badgeInfo =
    badge && badge !== "repeat"
      ? getOneDriveBadgeInfo(badge)
      : null;

  const bestScore =
    result?.bestCorrectAnswers ??
    result?.accumulatedCorrectAnswers ??
    result?.correctAnswers ??
    0;

  const routeCompleted = Boolean(result?.approved);
  const pendingAlerts = alerts.filter(
    (alert) =>
      alert.status === "new" ||
      alert.status === "read"
  ).length;
  const recentAlerts = alerts.slice(0, 4);

  return (
    <section className="rounded-[28px] bg-white/65 p-4 sm:p-5">
      <div className="overflow-hidden rounded-[26px] border border-white bg-white shadow-[0_14px_45px_rgba(15,23,42,0.07)]">
        <div className="grid gap-5 bg-gradient-to-r from-[#f8fbff] to-white p-5 sm:p-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c78b3a]">
              Cuenta institucional
            </p>

            <h1 className="mt-2 text-2xl font-black text-[#061b3a] sm:text-3xl">
              Mi perfil
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Consulta tu avance, resultados,
              insignias y actividad reciente.
            </p>
          </div>

          <div className="flex min-w-0 items-center gap-4 rounded-[22px] border border-slate-100 bg-white px-4 py-3 shadow-sm">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0b376d] text-lg font-black text-white">
              {user?.initials ?? "TF"}
            </div>

            <div className="min-w-0">
              <h2 className="truncate text-lg font-black text-[#061b3a]">
                {user?.name ?? "Persona usuaria"}
              </h2>

              <p className="truncate text-xs text-slate-500 sm:text-sm">
                {user?.email ??
                  "usuario@tfja.gob.mx"}
              </p>

              <span className="mt-1 inline-flex rounded-full bg-[#fff8ef] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#a66f24]">
                {user?.role === "admin"
                  ? "Administrador"
                  : "Usuario"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)]">
        <article className="rounded-[26px] border border-white bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.07)] sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c78b3a]">
                Ruta actual
              </p>

              <h2 className="mt-2 text-2xl font-black text-[#061b3a]">
                OneDrive Descubre
              </h2>
            </div>

            <span
              className={
                routeCompleted
                  ? "inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-black text-emerald-700"
                  : progress > 0
                    ? "inline-flex w-fit rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black text-blue-700"
                    : "inline-flex w-fit rounded-full bg-slate-100 px-3 py-1.5 text-xs font-black text-slate-600"
              }
            >
              {routeCompleted
                ? "Completada"
                : progress > 0
                  ? "En curso"
                  : "No iniciada"}
            </span>
          </div>

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-sm font-bold text-slate-600">
              <span>Avance de contenidos</span>
              <span>{progress}%</span>
            </div>

            <ProgressBar
              value={progress}
              variant="blue"
              label="Avance de OneDrive Descubre"
            />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-[#f7f9fc] p-4">
              <p className="text-[11px] font-black uppercase tracking-[0.14em] text-slate-400">
                Evaluación final
              </p>

              <p className="mt-2 text-lg font-black text-[#061b3a]">
                {result
                  ? `${bestScore}/10`
                  : "Pendiente"}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-[#f7f9fc] p-4">
              <p className="text-[11px] font-black uppercase tracking-[0.14em] text-slate-400">
                Intento
              </p>

              <p className="mt-2 text-lg font-black text-[#061b3a]">
                {result?.attemptNumber ?? "-"}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-[#f7f9fc] p-4">
              <p className="text-[11px] font-black uppercase tracking-[0.14em] text-slate-400">
                Insignia
              </p>

              <p className="mt-2 text-lg font-black text-[#061b3a]">
                {badgeInfo?.title ??
                  (badge === "repeat"
                    ? "Repetir"
                    : "Sin insignia")}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={
                routeCompleted
                  ? "/herramientas-digitales/onedrive/descubre/finalizado"
                  : "/herramientas-digitales/onedrive/descubre"
              }
              className="inline-flex rounded-2xl bg-[#0b376d] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#061b3a]"
            >
              {routeCompleted
                ? "Ver cierre de ruta"
                : "Continuar ruta"}
            </Link>

            <Link
              href="/herramientas-digitales/insignias"
              className="inline-flex rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-[#061b3a] transition hover:bg-slate-50"
            >
              Ver insignias
            </Link>
          </div>
        </article>

        <div className="grid gap-5">
          <article className="rounded-[26px] border border-white bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.07)]">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c78b3a]">
              Resumen personal
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              <Link
                href="/herramientas-digitales/notas"
                className="group flex items-center justify-between rounded-2xl border border-slate-100 bg-[#f7f9fc] p-4 transition hover:border-blue-100 hover:bg-blue-50"
              >
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.14em] text-slate-400">
                    Bloc de notas
                  </p>

                  <p className="mt-1 font-black text-[#061b3a]">
                    {hasNote
                      ? "Nota guardada"
                      : "Sin nota"}
                  </p>
                </div>

                <span className="text-lg text-blue-700 transition group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/herramientas-digitales/alertas"
                className="group flex items-center justify-between rounded-2xl border border-slate-100 bg-[#f7f9fc] p-4 transition hover:border-blue-100 hover:bg-blue-50"
              >
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.14em] text-slate-400">
                    Alertas
                  </p>

                  <p className="mt-1 font-black text-[#061b3a]">
                    {pendingAlerts} pendientes
                  </p>
                </div>

                <span className="text-lg text-blue-700 transition group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </article>

          <article className="rounded-[26px] border border-white bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.07)]">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c78b3a]">
              Reinicio de ruta
            </p>

            <div
              className={`mt-4 rounded-2xl border px-4 py-3 ${requestStatusStyles(
                resetRequest
              )}`}
            >
              <p className="text-sm font-black">
                {requestStatusLabel(resetRequest)}
              </p>

              {resetRequest?.rejectionReason && (
                <p className="mt-2 text-xs font-semibold leading-5">
                  Motivo:{" "}
                  {resetRequest.rejectionReason}
                </p>
              )}
            </div>
          </article>
        </div>
      </div>

      <article className="mt-5 rounded-[26px] border border-white bg-white p-5 shadow-[0_14px_45px_rgba(15,23,42,0.07)] sm:p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c78b3a]">
              Actividad reciente
            </p>

            <h2 className="mt-2 text-xl font-black text-[#061b3a]">
              Últimos movimientos
            </h2>
          </div>

          <Link
            href="/herramientas-digitales/alertas"
            className="text-sm font-bold text-blue-700 hover:text-[#061b3a]"
          >
            Ver todas las alertas
          </Link>
        </div>

        <div className="mt-4">
          {recentAlerts.length ? (
            <div className="grid gap-3 md:grid-cols-2">
              {recentAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="relative rounded-2xl border border-slate-100 bg-[#f8fafc] p-4 pl-5"
                >
                  <span className="absolute left-0 top-4 h-8 w-1 rounded-r-full bg-[#c78b3a]" />

                  <p className="font-black text-[#061b3a]">
                    {alert.title}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {alert.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-[#f8fafc] px-5 py-6 text-center">
              <p className="text-sm font-semibold text-slate-500">
                Todavía no hay actividad registrada.
              </p>
            </div>
          )}
        </div>
      </article>
    </section>
  );
}
