"use client";

import { useEffect, useState } from "react";
import { ConfettiBurst } from "@/components/confetti-burst";

export function RouteCompletedCelebration() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);

    const timeoutId = window.setTimeout(() => {
      setShowConfetti(false);
    }, 2600);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return <ConfettiBurst show={showConfetti} />;
}