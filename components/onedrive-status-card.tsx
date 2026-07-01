"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { onedriveDescubreSteps } from "@/data/onedrive-descubre";
import { ProgressBar } from "@/components/progress-bar";
import { getOneDriveBadgeInfo } from "@/lib/badges";

const COMPLETED_KEY = "habilidades-tfja:onedrive-descubre:completed";
const BADGE_KEY = "habilidades-tfja:onedrive-descubre:badge";
const FINAL_RESULT_KEY =
  "htfja-final-onedrive-descubre-evaluacion-final-result";
const COURSE_UPDATED_EVENT = "habilidades-tfja:course-updated";
const BADGE_UPDATED_EVENT = "habilidades-tfja:badge-updated";

export function OneDriveStatusCard() {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [badgeValue, setBadgeValue] = useState<string | null>(null);
  const [finalApproved, setFinalApproved] = useState(false);

  useEffect(() => {
    function loadStatus() {
      try {
        const savedCompleted = window.localStorage.getItem(COMPLETED_KEY);
        const savedBadge = window.localStorage.getItem(BADGE_KEY);
        const savedResult = window.localStorage.getItem(FINAL_RESULT_KEY);

        const parsedCompleted = savedCompleted
          ? (JSON.parse(savedCompleted) as unknown)
          : [];

        setCompletedIds(
          Array.isArray(parsedCompleted)
            ? parsedCompleted.filter(
                (value): value is string => typeof value === "string"
              )
            : []
        );
        setBadgeValue(savedBadge);

        if (savedResult) {
          const parsedResult = JSON.parse(savedResult) as {
            approved?: boolean;
          };
          setFinalApproved(Boolean(parsedResult.approved));
        } else {
          setFinalApproved(false);
        }
      } catch {
        setCompletedIds([]);
        setBadgeValue(null);
        setFinalApproved(false);
      }
    }

    loadStatus();
    window.addEventListener("storage", loadStatus);
    window.addEventListener(COURSE_UPDATED_EVENT, loadStatus);
    window.addEventListener(BADGE_UPDATED_EVENT, loadStatus);

    return () => {
      window.removeEventListener("storage", loadStatus);
      window.removeEventListener(COURSE_UPDATED_EVENT, loadStatus);
      window.removeEventListener(BADGE_UPDATED_EVENT, loadStatus);
    };
  }, []);

  const progress = useMemo(() => {
    const mandatoryIds = new Set(onedriveDescubreSteps.map((step) => step.id));

    if (mandatoryIds.size === 0) {
      return 0;
    }

    const completedMandatoryIds = new Set(
      completedIds.filter((id) => mandatoryIds.has(id))
    );

    return Math.min(
      100,
      Math.round((completedMandatoryIds.size / mandatoryIds.size) * 100)
    );
  }, [completedIds]);

  const badgeInfo = finalApproved
    ? getOneDriveBadgeInfo(badgeValue)
    : null;

  return (
    <div className="mt-6 rounded-[28px] border border-white bg-white/90 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:p-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Estado de ruta
          </p>

          <h2 className="mt-3 text-2xl font-black text-[#061b3a]">
            OneDrive Descubre
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Consulta tu avance y el resultado de la evaluación final.
          </p>

          <div className="mt-5 max-w-xl">
            <div className="mb-2 flex items-center justify-between text-sm font-bold text-slate-600">
              <span>Avance de elementos obligatorios</span>
              <span>{progress}%</span>
            </div>

            <ProgressBar
              value={progress}
              variant="blue"
              label="Avance de OneDrive Descubre"
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <span
              className={
                finalApproved
                  ? "rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700"
                  : "rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700"
              }
            >
              {finalApproved ? "Ruta completada" : "Ruta en progreso"}
            </span>

            {badgeInfo ? (
              <span className="rounded-full bg-[#fff8ef] px-4 py-2 text-xs font-bold text-[#a66f24]">
                Insignia: {badgeInfo.title}
              </span>
            ) : (
              <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-500">
                Sin insignia todavía
              </span>
            )}
          </div>
        </div>

        {badgeInfo ? (
          <div className="flex flex-col items-center rounded-3xl bg-[#f5f8fd] p-5">
            <Image
              src={badgeInfo.image}
              alt={badgeInfo.title}
              width={150}
              height={150}
              className="h-auto w-[130px] sm:w-[150px]"
            />

            <Link
              href="/herramientas-digitales/insignias"
              className="mt-4 rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#061b3a]"
            >
              Ver insignia
            </Link>
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-[#f5f8fd] p-5 text-center">
            <p className="text-sm font-bold text-slate-500">
              Completa los elementos obligatorios y aprueba la evaluación final.
            </p>

            <Link
              href="/herramientas-digitales/onedrive/descubre/evaluacion-final"
              className="mt-4 inline-flex rounded-2xl bg-[#c78b3a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#a66f24]"
            >
              Ir a evaluación
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
