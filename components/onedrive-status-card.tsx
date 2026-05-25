"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { onedriveDescubreSteps } from "@/data/onedrive-descubre";
import { ProgressBar } from "@/components/progress-bar";
import { getOneDriveBadgeInfo } from "@/lib/badges";

const COMPLETED_KEY = "habilidades-tfja:onedrive-descubre:completed";
const BADGE_KEY = "habilidades-tfja:onedrive-descubre:badge";

export function OneDriveStatusCard() {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [badgeValue, setBadgeValue] = useState<string | null>(null);

  useEffect(() => {
    const savedCompleted = window.localStorage.getItem(COMPLETED_KEY);
    const savedBadge = window.localStorage.getItem(BADGE_KEY);

    if (savedCompleted) {
      setCompletedIds(JSON.parse(savedCompleted));
    }

    if (savedBadge) {
      setBadgeValue(savedBadge);
    }
  }, []);

  const progress = useMemo(() => {
    if (onedriveDescubreSteps.length === 0) {
      return 0;
    }

    return Math.round(
      (completedIds.length / onedriveDescubreSteps.length) * 100
    );
  }, [completedIds.length]);

  const badgeInfo = getOneDriveBadgeInfo(badgeValue);

  const routeCompleted = progress === 100;

  return (
    <div className="mt-8 rounded-[32px] border border-white bg-white/90 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Estado de ruta
          </p>

          <h2 className="mt-3 text-2xl font-black text-[#061b3a]">
            OneDrive Descubre
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Consulta tu avance actual dentro de la ruta inicial de OneDrive.
          </p>

          <div className="mt-5 max-w-xl">
            <div className="mb-2 flex items-center justify-between text-sm font-bold text-slate-600">
              <span>Avance de ruta</span>
              <span>{progress}%</span>
            </div>

            <ProgressBar value={progress} variant="blue" />
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <span
              className={
                routeCompleted
                  ? "rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700"
                  : "rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700"
              }
            >
              {routeCompleted ? "Ruta completada" : "Ruta en progreso"}
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
              className="h-auto w-[150px]"
            />

            <Link
              href="/herramientas-digitales/insignias"
              className="mt-4 rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white hover:bg-[#061b3a]"
            >
              Ver insignia
            </Link>
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-[#f5f8fd] p-6 text-center">
            <p className="text-sm font-bold text-slate-500">
              Completa la evaluación final para obtener una insignia.
            </p>

            <Link
              href="/herramientas-digitales/onedrive/descubre/evaluacion-final"
              className="mt-4 inline-flex rounded-2xl bg-[#c78b3a] px-5 py-3 text-sm font-bold text-white hover:bg-[#a66f24]"
            >
              Ir a evaluación
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}