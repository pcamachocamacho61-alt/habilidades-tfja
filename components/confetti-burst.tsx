"use client";

import { useEffect, useState } from "react";

type ConfettiBurstProps = {
  show: boolean;
};

type ConfettiPiece = {
  id: number;
  left: string;
  size: string;
  delay: string;
  duration: string;
  rotate: string;
  colorClass: string;
};

export function ConfettiBurst({ show }: ConfettiBurstProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!show) {
      setPieces([]);
      return;
    }

    const generatedPieces = Array.from({ length: 42 }, (_, index) => {
      const colorClass =
        index % 4 === 0
          ? "bg-[#0b376d]"
          : index % 4 === 1
            ? "bg-[#c78b3a]"
            : index % 4 === 2
              ? "bg-blue-400"
              : "bg-emerald-500";

      return {
        id: index,
        left: `${Math.random() * 100}%`,
        size: `${8 + Math.random() * 8}px`,
        delay: `${Math.random() * 0.25}s`,
        duration: `${1.6 + Math.random() * 0.9}s`,
        rotate: `${Math.random() * 360}deg`,
        colorClass,
      };
    });

    setPieces(generatedPieces);
  }, [show]);

  if (!show || pieces.length === 0) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className={`absolute top-[-20px] rounded-sm ${piece.colorClass} animate-confetti`}
          style={{
            left: piece.left,
            width: piece.size,
            height: piece.size,
            animationDelay: piece.delay,
            animationDuration: piece.duration,
            transform: `rotate(${piece.rotate})`,
          }}
        />
      ))}
    </div>
  );
}