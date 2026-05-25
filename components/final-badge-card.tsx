"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getOneDriveBadgeInfo } from "@/lib/badges";

const BADGE_KEY = "habilidades-tfja:onedrive-descubre:badge";

export function FinalBadgeCard() {
  const [badgeValue, setBadgeValue] = useState<string | null>(null);

  useEffect(() => {
    const savedBadge = window.localStorage.getItem(BADGE_KEY);
    setBadgeValue(savedBadge);
  }, []);

  const badgeInfo = getOneDriveBadgeInfo(badgeValue);

  if (!badgeInfo) {
    return null;
  }

  return (
    <div className="mt-8 rounded-3xl border border-[#ead7b8] bg-[#fff8ef] p-6">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
        Insignia obtenida
      </p>

      <div className="mt-5 grid gap-5 md:grid-cols-[180px_1fr] md:items-center">
        <Image
          src={badgeInfo.image}
          alt={badgeInfo.title}
          width={180}
          height={180}
          className="mx-auto h-auto w-[180px]"
        />

        <div className="text-left">
          <h2 className="text-3xl font-black text-[#061b3a]">
            {badgeInfo.title}
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            {badgeInfo.description}
          </p>

          <Link
            href="/herramientas-digitales/insignias"
            className="mt-5 inline-flex rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white hover:bg-[#061b3a]"
          >
            Ver mis insignias
          </Link>
        </div>
      </div>
    </div>
  );
}