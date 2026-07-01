"use client";

import { useCallback, useEffect, useState } from "react";
import { getLearningAlerts, LEARNING_EVENTS } from "@/lib/learning-storage";

export function SidebarAlertCount() {
  const [count, setCount] = useState(0);

  const load = useCallback(() => {
    try {
      const pending = getLearningAlerts().filter(
        (alert) => alert.status === "new" || alert.status === "read"
      ).length;
      setCount(pending);
    } catch {
      setCount(0);
    }
  }, []);

  useEffect(() => {
    load();
    window.addEventListener(LEARNING_EVENTS.alertsUpdated, load);
    window.addEventListener("storage", load);
    window.addEventListener("focus", load);
    return () => {
      window.removeEventListener(LEARNING_EVENTS.alertsUpdated, load);
      window.removeEventListener("storage", load);
      window.removeEventListener("focus", load);
    };
  }, [load]);

  if (!count) return null;

  return (
    <span
      className="ml-auto min-w-6 rounded-full bg-[#c78b3a] px-2 py-0.5 text-center text-xs font-black text-white"
      aria-label={`${count} alertas pendientes`}
    >
      {count}
    </span>
  );
}
