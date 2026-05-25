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

export function DigitalToolCard({ tool }: DigitalToolCardProps) {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [badgeValue, setBadgeValue] = useState<string | null>(null);

  useEffect(() => {
    if (tool.id !== "onedrive") {
      return;
    }

    const savedCompleted = window.localStorage.getItem(COMPLETED_KEY);
    const savedBadge = window.localStorage.getItem(BADGE_KEY);

    if (savedCompleted) {
      setCompletedIds(JSON.parse(savedCompleted));
    }

    if (savedBadge) {
      setBadgeValue(savedBadge);
    }
  }, [tool.id]);

  const onedriveProgress = useMemo(() => {
    if (tool.id !== "onedrive") {
      return tool.descubreProgress;
    }

    if (onedriveDescubreSteps.length === 0) {
      return 0;
    }

    return Math.round(
      (completedIds.length / onedriveDescubreSteps.length) * 100
    );
  }, [completedIds.length, tool.descubreProgress, tool.id]);

  const badgeInfo = getOneDriveBadgeInfo(badgeValue);

  const href =
    tool.id === "onedrive"
      ? "/herramientas-digitales/onedrive"
      : "/herramientas-digitales";

  return (
    <Link
      href={href}
      className="group rounded-3xl border border-white/80 bg-white/85 p-5 text-center shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(15,23,42,0.14)]"
    >
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
            <span>{onedriveProgress}%</span>
          </div>
          <ProgressBar value={onedriveProgress} variant="blue" />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-xs font-semibold text-[#a66f24]">
            <span>Potencia</span>
            <span>{tool.potenciaProgress}%</span>
          </div>
          <ProgressBar value={tool.potenciaProgress} variant="bronze" />
        </div>
      </div>

      {tool.id === "onedrive" && badgeInfo && (
        <div className="mt-4 rounded-2xl bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
          Insignia: {badgeInfo.title}
        </div>
      )}
    </Link>
  );
}