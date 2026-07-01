"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ONEDRIVE_BADGES, getOneDriveBadgeInfo } from "@/lib/badges";
import { BadgeType } from "@/types/learning";

type FinalResult = { correctAnswers: number; wrongAnswers: number; approved: boolean; badge: BadgeType; attemptNumber: number; bestCorrectAnswers?: number; accumulatedCorrectAnswers?: number; completedAt?: string };
const RESULT_KEY = "htfja-final-onedrive-descubre-evaluacion-final-result";
const BADGE_KEY = "habilidades-tfja:onedrive-descubre:badge";
function isBadge(value: unknown): value is BadgeType { return value === "gold" || value === "silver" || value === "bronze" || value === "repeat"; }

export function BadgesPanel() {
  const [result, setResult] = useState<FinalResult | null>(null);
  const [badgeValue, setBadgeValue] = useState<BadgeType | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    try {
      const storedResult = window.localStorage.getItem(RESULT_KEY);
      const storedBadge = window.localStorage.getItem(BADGE_KEY);
      if (storedResult) setResult(JSON.parse(storedResult));
      if (isBadge(storedBadge)) setBadgeValue(storedBadge);
    } catch { setResult(null); setBadgeValue(null); } finally { setLoaded(true); }
  }, []);
  if (!loaded) return <section className="rounded-[28px] bg-white/60 p-5"><p className="text-sm font-bold text-slate-600">Cargando insignias...</p></section>;
  const badge = result?.badge ?? badgeValue;
  const earned = badge && badge !== "repeat" ? getOneDriveBadgeInfo(badge) : null;
  const bestScore = result?.bestCorrectAnswers ?? result?.accumulatedCorrectAnswers ?? result?.correctAnswers ?? 0;
  return (
    <section className="rounded-[28px] bg-white/60 p-4 sm:p-5">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">Reconocimientos</p><h1 className="mt-3 text-2xl font-black text-[#061b3a]">Mis insignias</h1><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">Consulta los reconocimientos obtenidos al completar las rutas de aprendizaje.</p>
      {earned ? <div className="mt-6 grid gap-5 rounded-[28px] border border-[#ead7b8] bg-[#fff8ef] p-5 md:grid-cols-[240px_1fr] md:items-center"><Image src={earned.image} alt={earned.title} width={230} height={230} className="mx-auto h-auto w-[230px]" /><div><p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">Insignia obtenida</p><h2 className="mt-3 text-3xl font-black text-[#061b3a]">{earned.title}</h2><p className="mt-4 text-base leading-8 text-slate-600">{earned.description}</p><p className="mt-4 text-lg font-black text-[#061b3a]">Mejor resultado final: {bestScore}/10</p><Link href="/herramientas-digitales/onedrive/descubre/finalizado" className="mt-6 inline-flex rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white">Ver ruta completada</Link></div></div> : <div className="mt-6 rounded-[28px] border border-dashed border-slate-300 bg-white p-6 text-center"><h2 className="text-2xl font-black text-[#061b3a]">{badge === "repeat" ? "Ruta por repetir" : "Aún no tienes insignias"}</h2><p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">{badge === "repeat" ? `Tu mejor resultado final fue ${bestScore}/10. Se requiere mínimo 7/10 para obtener Bronce.` : "Completa la ruta y presenta la evaluación final de 10 preguntas."}</p></div>}
      <div className="mt-10 grid gap-5 md:grid-cols-3">{Object.values(ONEDRIVE_BADGES).map((item) => { const selected = earned?.type === item.type; return <article key={item.type} className={selected ? "rounded-3xl border border-[#c78b3a] bg-white p-5" : "rounded-3xl border border-white bg-white/70 p-5"}><Image src={item.image} alt={item.title} width={180} height={180} className={selected ? "mx-auto h-auto w-[180px]" : "mx-auto h-auto w-[180px] opacity-55 grayscale"} /><h3 className="mt-4 text-center text-lg font-black text-[#061b3a]">{item.title}</h3><p className="mt-3 text-center text-sm leading-6 text-slate-500">{item.description}</p><div className={selected ? "mt-4 rounded-full bg-emerald-50 px-3 py-2 text-center text-xs font-bold text-emerald-700" : "mt-4 rounded-full bg-slate-100 px-3 py-2 text-center text-xs font-bold text-slate-500"}>{selected ? "Obtenida" : "No obtenida"}</div></article>; })}</div>
    </section>
  );
}
