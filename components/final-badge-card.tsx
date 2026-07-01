"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getOneDriveBadgeInfo } from "@/lib/badges";

const BADGE_KEY = "habilidades-tfja:onedrive-descubre:badge";
const FINAL_RESULT_KEY =
  "htfja-final-onedrive-descubre-evaluacion-final-result";

export function FinalBadgeCard() {
  const [badgeValue, setBadgeValue] = useState<string | null>(null);
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    try {
      const savedBadge = window.localStorage.getItem(BADGE_KEY);
      const savedResult = window.localStorage.getItem(FINAL_RESULT_KEY);

      if (!savedResult) {
        return;
      }

      const parsedResult = JSON.parse(savedResult) as { approved?: boolean };

      setApproved(Boolean(parsedResult.approved));
      setBadgeValue(savedBadge);
    } catch {
      setApproved(false);
      setBadgeValue(null);
    }
  }, []);

  const badgeInfo = getOneDriveBadgeInfo(badgeValue);

  if (!approved || !badgeInfo) {
    return null;
  }

  return (
    <div className="mt-6 rounded-3xl border border-[#ead7b8] bg-[#fff8ef] p-5 sm:p-5">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
        Insignia obtenida
      </p>

      <div className="mt-5 grid gap-5 md:grid-cols-[180px_1fr] md:items-center">
        <Image
          src={badgeInfo.image}
          alt={badgeInfo.title}
          width={180}
          height={180}
          className="mx-auto h-auto w-[150px] sm:w-[180px]"
        />

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-black text-[#061b3a] sm:text-2xl">
            {badgeInfo.title}
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            {badgeInfo.description}
          </p>

          <Link
            href="/herramientas-digitales/insignias"
            className="mt-5 inline-flex rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#061b3a]"
          >
            Ver mis insignias
          </Link>
        </div>
      </div>
    </div>
  );
}
