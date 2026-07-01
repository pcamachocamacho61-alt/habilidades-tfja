"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { onedriveDescubreSteps } from "@/data/onedrive-descubre";
import { ProgressBar } from "@/components/progress-bar";
import { getOneDriveBadgeInfo } from "@/lib/badges";
import { BadgeType } from "@/types/learning";

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

const COMPLETED_KEY = "habilidades-tfja:onedrive-descubre:completed";
const RESULT_KEY =
  "htfja-final-onedrive-descubre-evaluacion-final-result";
const BADGE_KEY = "habilidades-tfja:onedrive-descubre:badge";

function isBadge(value: unknown): value is BadgeType {
  return (
    value === "gold" ||
    value === "silver" ||
    value === "bronze" ||
    value === "repeat"
  );
}

export function FinalRouteSummary() {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [result, setResult] = useState<FinalResult | null>(null);
  const [badgeValue, setBadgeValue] = useState<BadgeType | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const completed = window.localStorage.getItem(COMPLETED_KEY);
      const storedResult = window.localStorage.getItem(RESULT_KEY);
      const storedBadge = window.localStorage.getItem(BADGE_KEY);

      if (completed) {
        const parsed = JSON.parse(completed) as unknown;

        if (Array.isArray(parsed)) {
          setCompletedIds(
            parsed.filter(
              (item): item is string => typeof item === "string"
            )
          );
        }
      }

      if (storedResult) {
        setResult(JSON.parse(storedResult) as FinalResult);
      }

      if (isBadge(storedBadge)) {
        setBadgeValue(storedBadge);
      }
    } catch {
      setCompletedIds([]);
      setResult(null);
      setBadgeValue(null);
    } finally {
      setLoaded(true);
    }
  }, []);

  const progress = useMemo(() => {
    const routeIds = new Set(
      onedriveDescubreSteps.map((step) => step.id)
    );

    const completed = [...new Set(completedIds)].filter((id) =>
      routeIds.has(id)
    ).length;

    return onedriveDescubreSteps.length
      ? Math.min(
          100,
          Math.round(
            (completed / onedriveDescubreSteps.length) * 100
          )
        )
      : 0;
  }, [completedIds]);

  if (!loaded) {
    return (
      <div className="mt-6 rounded-[28px] bg-white p-5">
        <p className="text-sm font-bold text-slate-600">
          Cargando resumen...
        </p>
      </div>
    );
  }

  const bestScore =
    result?.bestCorrectAnswers ??
    result?.accumulatedCorrectAnswers ??
    result?.correctAnswers ??
    0;

  const displayCorrectAnswers = result ? bestScore : null;
  const displayWrongAnswers = result
    ? Math.max(10 - bestScore, 0)
    : null;

  const badge = result?.badge ?? badgeValue;
  const badgeInfo =
    badge && badge !== "repeat"
      ? getOneDriveBadgeInfo(badge)
      : null;

  return (
    <div className="mt-6 rounded-[28px] border border-white bg-white/90 p-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:p-5">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center">
        <div className="min-w-0">
          <p className="text-center text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a] lg:text-left">
            Resumen de cierre
          </p>

          <h2 className="mt-3 text-center text-2xl font-black text-[#061b3a] lg:text-left">
            Avance final de la ruta
          </h2>

          <div className="mt-5 w-full">
            <div className="mb-2 flex items-center justify-between gap-4 text-sm font-bold text-slate-600">
              <span>Progreso OneDrive Descubre</span>
              <span>{progress}%</span>
            </div>

            <ProgressBar
              value={progress}
              variant="blue"
              label="Progreso final de OneDrive Descubre"
            />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="flex min-h-[112px] flex-col items-center justify-center rounded-2xl bg-[#f5f8fd] px-3 py-4 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Correctas
              </p>

              <p className="mt-2 text-2xl font-black text-emerald-600">
                {displayCorrectAnswers ?? "-"}
              </p>
            </div>

            <div className="flex min-h-[112px] flex-col items-center justify-center rounded-2xl bg-[#f5f8fd] px-3 py-4 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Incorrectas
              </p>

              <p className="mt-2 text-2xl font-black text-red-600">
                {displayWrongAnswers ?? "-"}
              </p>
            </div>

            <div className="flex min-h-[112px] flex-col items-center justify-center rounded-2xl bg-[#f5f8fd] px-3 py-4 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Intento
              </p>

              <p className="mt-2 text-2xl font-black text-[#061b3a]">
                {result ? result.attemptNumber : "-"}
              </p>
            </div>

            <div className="flex min-h-[112px] flex-col items-center justify-center rounded-2xl bg-[#f5f8fd] px-3 py-4 text-center">
              <p className="max-w-[110px] text-xs font-bold uppercase leading-5 tracking-[0.16em] text-slate-400">
                Mejor resultado
              </p>

              <p className="mt-2 text-2xl font-black text-[#061b3a]">
                {result ? `${bestScore}/10` : "-"}
              </p>
            </div>
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-6 text-slate-500 lg:mx-0 lg:text-left">
            La insignia se calcula únicamente con el mejor resultado de la
            evaluación final de 10 preguntas. Las Evaluaciones 1 y 2 solo
            funcionan como checkpoints de avance.
          </p>

        </div>

        {badgeInfo ? (
          <div className="rounded-3xl bg-[#fff8ef] p-5 text-center">
            <Image
              src={badgeInfo.image}
              alt={badgeInfo.title}
              width={210}
              height={210}
              className="mx-auto h-auto w-[210px] max-w-full"
            />

            <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-[#c78b3a]">
              Insignia obtenida
            </p>

            <h3 className="mt-2 text-2xl font-black text-[#061b3a]">
              {badgeInfo.title}
            </h3>
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-[#f5f8fd] p-5 text-center">
            <p className="text-sm font-bold text-slate-500">
              {badge === "repeat"
                ? "Resultado: Repetir ruta"
                : "No se encontró insignia registrada."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
