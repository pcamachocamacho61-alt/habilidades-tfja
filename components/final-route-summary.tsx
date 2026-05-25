"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { onedriveDescubreSteps } from "@/data/onedrive-descubre";
import { ProgressBar } from "@/components/progress-bar";
import { getOneDriveBadgeInfo } from "@/lib/badges";

type FinalResult = {
  correctAnswers: number;
  wrongAnswers: number;
  approved: boolean;
  badge: "gold" | "silver" | "bronze" | null;
  attemptNumber: number;
};

const COMPLETED_KEY = "habilidades-tfja:onedrive-descubre:completed";
const RESULT_KEY = "habilidades-tfja:onedrive-descubre:final-result";
const BADGE_KEY = "habilidades-tfja:onedrive-descubre:badge";

export function FinalRouteSummary() {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [result, setResult] = useState<FinalResult | null>(null);
  const [badgeValue, setBadgeValue] = useState<string | null>(null);

  useEffect(() => {
    const savedCompleted = window.localStorage.getItem(COMPLETED_KEY);
    const savedResult = window.localStorage.getItem(RESULT_KEY);
    const savedBadge = window.localStorage.getItem(BADGE_KEY);

    if (savedCompleted) {
      setCompletedIds(JSON.parse(savedCompleted));
    }

    if (savedResult) {
      setResult(JSON.parse(savedResult));
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

  return (
    <div className="mt-8 rounded-[32px] border border-white bg-white/90 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
      <div className="grid gap-6 lg:grid-cols-[1fr_260px] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Resumen de cierre
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#061b3a]">
            Avance final de la ruta
          </h2>

          <div className="mt-5 max-w-xl">
            <div className="mb-2 flex items-center justify-between text-sm font-bold text-slate-600">
              <span>Progreso OneDrive Descubre</span>
              <span>{progress}%</span>
            </div>

            <ProgressBar value={progress} variant="blue" />
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-[#f5f8fd] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Correctas
              </p>
              <p className="mt-1 text-2xl font-black text-emerald-600">
                {result ? result.correctAnswers : "-"}
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f8fd] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Incorrectas
              </p>
              <p className="mt-1 text-2xl font-black text-red-600">
                {result ? result.wrongAnswers : "-"}
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f8fd] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Intento
              </p>
              <p className="mt-1 text-2xl font-black text-[#061b3a]">
                {result ? result.attemptNumber : "-"}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/herramientas-digitales/insignias"
              className="rounded-2xl bg-[#0b376d] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#061b3a]"
            >
              Ver mis insignias
            </Link>

            <Link
              href="/herramientas-digitales"
              className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-center text-sm font-bold text-[#061b3a] hover:bg-slate-50"
            >
              Regresar a herramientas digitales
            </Link>
          </div>
        </div>

        {badgeInfo ? (
          <div className="rounded-3xl bg-[#fff8ef] p-5 text-center">
            <Image
              src={badgeInfo.image}
              alt={badgeInfo.title}
              width={210}
              height={210}
              loading="eager"
              className="mx-auto h-auto w-[210px]"
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
              No se encontró insignia registrada.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}