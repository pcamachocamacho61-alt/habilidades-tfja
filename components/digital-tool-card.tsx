"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { DigitalTool } from "@/types/learning";
import { ProgressBar } from "@/components/progress-bar";
import { onedriveDescubreSteps } from "@/data/onedrive-descubre";
import { getOneDriveBadgeInfo } from "@/lib/badges";

type DigitalToolCardProps = {
  tool: DigitalTool;
};

const COMPLETED_KEY = "habilidades-tfja:onedrive-descubre:completed";
const BADGE_KEY = "habilidades-tfja:onedrive-descubre:badge";
const FINAL_RESULT_KEY =
  "htfja-final-onedrive-descubre-evaluacion-final-result";
const COURSE_UPDATED_EVENT = "habilidades-tfja:course-updated";
const BADGE_UPDATED_EVENT = "habilidades-tfja:badge-updated";

function clampProgress(value: number): number {
  return Math.min(100, Math.max(0, Number.isFinite(value) ? value : 0));
}

export function DigitalToolCard({ tool }: DigitalToolCardProps) {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [badgeValue, setBadgeValue] = useState<string | null>(null);
  const [finalApproved, setFinalApproved] = useState(false);

  const isComingSoon = tool.status === "coming-soon";

  useEffect(() => {
    if (tool.id !== "onedrive") {
      return;
    }

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
  }, [tool.id]);

  const descubreProgress = useMemo(() => {
    if (tool.id !== "onedrive") {
      return clampProgress(tool.descubreProgress);
    }

    const mandatoryIds = new Set(onedriveDescubreSteps.map((step) => step.id));

    if (mandatoryIds.size === 0) {
      return 0;
    }

    const completedMandatoryIds = new Set(
      completedIds.filter((id) => mandatoryIds.has(id))
    );

    return clampProgress(
      Math.round((completedMandatoryIds.size / mandatoryIds.size) * 100)
    );
  }, [completedIds, tool.descubreProgress, tool.id]);

  const potenciaProgress = clampProgress(tool.potenciaProgress);
  const badgeInfo =
    tool.id === "onedrive" && finalApproved
      ? getOneDriveBadgeInfo(badgeValue)
      : null;

  const cardContent = (
    <div
      className={
        isComingSoon
          ? "relative h-full rounded-3xl border border-white/80 bg-white/75 p-5 text-center opacity-80 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur"
          : "relative h-full rounded-3xl border border-white/80 bg-white/85 p-5 text-center shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur transition group-hover:-translate-y-1 group-hover:shadow-[0_18px_60px_rgba(15,23,42,0.14)]"
      }
    >
      {isComingSoon && (
        <div className="absolute right-4 top-4 rounded-full bg-[#f5f8fd] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">
          Próximamente
        </div>
      )}

      <h2 className="text-sm font-extrabold uppercase tracking-wide text-[#0b376d]">
        {tool.name}
      </h2>

      <div className="mx-auto mt-5 flex h-32 items-center justify-center">
        <Image
          src={tool.icon}
          alt={tool.name}
          width={110}
          height={110}
          className="h-auto max-h-28 w-auto object-contain"
        />
      </div>

      <p className="mt-4 min-h-10 text-xs leading-5 text-slate-500">
        {tool.description}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-4 text-left">
        <div>
          <div className="mb-2 flex items-center justify-between text-xs font-semibold text-[#0b376d]">
            <span>Descubre</span>
            <span>{descubreProgress}%</span>
          </div>
          <ProgressBar
            value={descubreProgress}
            variant="blue"
            label={`Avance Descubre de ${tool.name}`}
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-xs font-semibold text-[#a66f24]">
            <span>Potencia</span>
            <span>{potenciaProgress}%</span>
          </div>
          <ProgressBar
            value={potenciaProgress}
            variant="bronze"
            label={`Avance Potencia de ${tool.name}`}
          />
        </div>
      </div>

      {badgeInfo && (
        <div className="mt-4 rounded-2xl bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
          Insignia: {badgeInfo.title}
        </div>
      )}

      {isComingSoon && (
        <p className="mt-4 text-xs font-semibold text-slate-500">
          Esta herramienta aún no tiene contenido habilitado.
        </p>
      )}
    </div>
  );

  if (isComingSoon) {
    return <div>{cardContent}</div>;
  }

  return (
    <Link href={`/herramientas-digitales/${tool.id}`} className="group block">
      {cardContent}
    </Link>
  );
}
