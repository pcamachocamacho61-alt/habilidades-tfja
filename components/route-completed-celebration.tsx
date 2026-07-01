"use client";

import { useEffect, useState } from "react";
import { ConfettiBurst } from "@/components/confetti-burst";

const FINAL_RESULT_KEY =
  "htfja-final-onedrive-descubre-evaluacion-final-result";
const CELEBRATION_KEY =
  "habilidades-tfja:onedrive-descubre:completion-celebrated";

export function RouteCompletedCelebration() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    try {
      const storedResult = window.localStorage.getItem(FINAL_RESULT_KEY);
      const alreadyCelebrated =
        window.sessionStorage.getItem(CELEBRATION_KEY) === "true";

      if (!storedResult || alreadyCelebrated) {
        return;
      }

      const result = JSON.parse(storedResult) as { approved?: boolean };

      if (!result.approved) {
        return;
      }

      window.sessionStorage.setItem(CELEBRATION_KEY, "true");
      setShowConfetti(true);

      const timeoutId = window.setTimeout(() => {
        setShowConfetti(false);
      }, 2600);

      return () => {
        window.clearTimeout(timeoutId);
      };
    } catch {
      setShowConfetti(false);
    }
  }, []);

  return <ConfettiBurst show={showConfetti} />;
}
