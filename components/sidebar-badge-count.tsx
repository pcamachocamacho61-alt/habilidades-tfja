"use client";

import { useEffect, useState } from "react";

const BADGE_KEY = "habilidades-tfja:onedrive-descubre:badge";

export function SidebarBadgeCount() {
  const [badgeCount, setBadgeCount] = useState(0);

  useEffect(() => {
    const savedBadge = window.localStorage.getItem(BADGE_KEY);

    if (savedBadge) {
      setBadgeCount(1);
    }
  }, []);

  if (badgeCount === 0) {
    return null;
  }

  return (
    <span className="ml-auto rounded-full bg-[#c78b3a] px-2 py-0.5 text-xs font-black text-white">
      {badgeCount}
    </span>
  );
}