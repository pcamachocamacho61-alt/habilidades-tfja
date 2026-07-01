"use client";

import { useCallback, useEffect, useState } from "react";
import { BadgeType } from "@/types/learning";

type FinalResult = { badge: BadgeType };
const BADGE_KEY = "habilidades-tfja:onedrive-descubre:badge";
const RESULT_KEY = "htfja-final-onedrive-descubre-evaluacion-final-result";
const UPDATED_EVENT = "habilidades-tfja:badge-updated";
function earned(value: unknown): boolean { return value === "gold" || value === "silver" || value === "bronze"; }

export function SidebarBadgeCount() {
  const [count, setCount] = useState(0);
  const load = useCallback(() => {
    try {
      const result = window.localStorage.getItem(RESULT_KEY);
      if (result) { const parsed = JSON.parse(result) as FinalResult; setCount(earned(parsed.badge) ? 1 : 0); return; }
      setCount(earned(window.localStorage.getItem(BADGE_KEY)) ? 1 : 0);
    } catch { setCount(0); }
  }, []);
  useEffect(() => {
    load();
    window.addEventListener(UPDATED_EVENT, load);
    window.addEventListener("focus", load);
    function storage(event: StorageEvent) { if (event.key === BADGE_KEY || event.key === RESULT_KEY) load(); }
    window.addEventListener("storage", storage);
    return () => { window.removeEventListener(UPDATED_EVENT, load); window.removeEventListener("focus", load); window.removeEventListener("storage", storage); };
  }, [load]);
  if (!count) return null;
  return <span className="ml-auto min-w-6 rounded-full bg-[#c78b3a] px-2 py-0.5 text-center text-xs font-black text-white" aria-label="1 insignia obtenida">1</span>;
}
