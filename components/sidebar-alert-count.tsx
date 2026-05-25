"use client";

import { useEffect, useMemo, useState } from "react";
import { onedriveDescubreSteps } from "@/data/onedrive-descubre";
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

export function SidebarAlertCount() {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [finalResult, setFinalResult] = useState<FinalResult | null>(null);
  const [badgeValue, setBadgeValue] = useState<string | null>(null);

  useEffect(() => {
    const savedCompleted = window.localStorage.getItem(COMPLETED_KEY);
    const savedResult = window.localStorage.getItem(RESULT_KEY);
    const savedBadge = window.localStorage.getItem(BADGE_KEY);

    if (savedCompleted) {
      setCompletedIds(JSON.parse(savedCompleted));
    }

    if (savedResult) {
      setFinalResult(JSON.parse(savedResult));
    }

    if (savedBadge) {
      setBadgeValue(savedBadge);
    }
  }, []);

  const alertCount = useMemo(() => {
    let count = 1; // Próximamente Outlook Descubre

    const totalProgress =
      onedriveDescubreSteps.length === 0
        ? 0
        : Math.round((completedIds.length / onedriveDescubreSteps.length) * 100);

    const stepsBeforeFinal = onedriveDescubreSteps.filter(
      (step) => step.id !== "evaluacion-final"
    );

    const completedBeforeFinal = stepsBeforeFinal.filter((step) =>
      completedIds.includes(step.id)
    ).length;

    const progressBeforeFinal =
      stepsBeforeFinal.length === 0
        ? 0
        : Math.round((completedBeforeFinal / stepsBeforeFinal.length) * 100);

    const badgeInfo = getOneDriveBadgeInfo(badgeValue);

    if (totalProgress === 0) {
      count += 1;
    }

    if (totalProgress > 0 && totalProgress < 100) {
      count += 1;
    }

    if (progressBeforeFinal < 100) {
      count += 1;
    }

    if (progressBeforeFinal === 100 && !finalResult?.approved) {
      count += 1;
    }

    if (finalResult && !finalResult.approved) {
      count += 1;
    }

    if (badgeInfo) {
      count += 1;
    }

    return count;
  }, [badgeValue, completedIds, finalResult]);

  if (alertCount === 0) {
    return null;
  }

  return (
    <span className="ml-auto rounded-full bg-[#c78b3a] px-2 py-0.5 text-xs font-black text-white">
      {alertCount}
    </span>
  );
}