"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ONEDRIVE_BADGES, getOneDriveBadgeInfo } from "@/lib/badges";
import { ProgressBar } from "@/components/progress-bar";

const BADGE_KEY = "habilidades-tfja:onedrive-descubre:badge";
const COMPLETED_KEY = "habilidades-tfja:onedrive-descubre:completed";
const RESULT_KEY = "habilidades-tfja:onedrive-descubre:final-result";

type FinalResult = {
  correctAnswers: number;
  wrongAnswers: number;
  approved: boolean;
  badge: "gold" | "silver" | "bronze" | null;
  attemptNumber: number;
};

export function BadgesPanel() {
  const [badgeValue, setBadgeValue] = useState<string | null>(null);
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [finalResult, setFinalResult] = useState<FinalResult | null>(null);

  useEffect(() => {
    const savedBadge = window.localStorage.getItem(BADGE_KEY);
    const savedCompleted = window.localStorage.getItem(COMPLETED_KEY);
    const savedResult = window.localStorage.getItem(RESULT_KEY);

    if (savedBadge) {
      setBadgeValue(savedBadge);
    }

    if (savedCompleted) {
      setCompletedIds(JSON.parse(savedCompleted));
    }

    if (savedResult) {
      setFinalResult(JSON.parse(savedResult));
    }
  }, []);

  const earnedBadge = getOneDriveBadgeInfo(badgeValue);

  const earnedBadgesCount = earnedBadge ? 1 : 0;
  const totalAvailableBadges = Object.values(ONEDRIVE_BADGES).length;

  const badgesProgress = useMemo(() => {
    return Math.round((earnedBadgesCount / totalAvailableBadges) * 100);
  }, [earnedBadgesCount, totalAvailableBadges]);

  const routeProgress = useMemo(() => {
    const totalSteps = 18;

    if (completedIds.length === 0) {
      return 0;
    }

    return Math.round((completedIds.length / totalSteps) * 100);
  }, [completedIds.length]);

  return (
    <section className="rounded-[32px] bg-white/60 p-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Reconocimientos
          </p>

          <h1 className="mt-3 text-3xl font-black text-[#061b3a]">
            Mis insignias
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Consulta los reconocimientos obtenidos al completar rutas de
            aprendizaje dentro de Habilidades TFJA.
          </p>
        </div>

        <div className="rounded-3xl border border-white bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Resumen
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#061b3a]">
            {earnedBadgesCount} de {totalAvailableBadges}
          </h2>

          <p className="mt-1 text-sm font-semibold text-slate-500">
            Insignias obtenidas
          </p>

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Avance de insignias</span>
              <span>{badgesProgress}%</span>
            </div>

            <ProgressBar value={badgesProgress} variant="bronze" />
          </div>
        </div>
      </div>

      {earnedBadge ? (
        <div className="mt-8 rounded-[32px] border border-[#ead7b8] bg-[#fff8ef] p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <div className="grid gap-6 md:grid-cols-[240px_1fr] md:items-center">
            <div className="flex justify-center">
              <Image
                src={earnedBadge.image}
                alt={earnedBadge.title}
                width={230}
                height={230}
                loading="eager"
                className="h-auto w-[230px]"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
                Insignia obtenida
              </p>

              <h2 className="mt-3 text-4xl font-black text-[#061b3a]">
                {earnedBadge.title}
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                {earnedBadge.description}
              </p>

              {finalResult && (
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Correctas
                    </p>
                    <p className="mt-1 text-2xl font-black text-emerald-600">
                      {finalResult.correctAnswers}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Incorrectas
                    </p>
                    <p className="mt-1 text-2xl font-black text-red-600">
                      {finalResult.wrongAnswers}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Intento
                    </p>
                    <p className="mt-1 text-2xl font-black text-[#061b3a]">
                      {finalResult.attemptNumber}
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-6 max-w-xl">
                <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>Avance de ruta OneDrive Descubre</span>
                  <span>{routeProgress}%</span>
                </div>

                <ProgressBar value={routeProgress} variant="blue" />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/herramientas-digitales/onedrive/descubre/finalizado"
                  className="rounded-2xl bg-[#0b376d] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#061b3a]"
                >
                  Ver ruta completada
                </Link>

                <Link
                  href="/herramientas-digitales"
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-center text-sm font-bold text-[#061b3a] hover:bg-slate-50"
                >
                  Regresar a herramientas
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-8 rounded-[32px] border border-dashed border-slate-300 bg-white/70 p-8 text-center">
          <h2 className="text-2xl font-black text-[#061b3a]">
            Aún no tienes insignias
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600">
            Completa la ruta OneDrive Descubre y aprueba la evaluación final
            para obtener una insignia Oro, Plata o Bronce según tu resultado.
          </p>

          <div className="mx-auto mt-6 max-w-md">
            <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>Avance actual de ruta</span>
              <span>{routeProgress}%</span>
            </div>

            <ProgressBar value={routeProgress} variant="blue" />
          </div>

          <Link
            href="/herramientas-digitales/onedrive/descubre"
            className="mt-6 inline-flex rounded-2xl bg-[#c78b3a] px-6 py-3 text-sm font-bold text-white hover:bg-[#a66f24]"
          >
            Continuar ruta OneDrive
          </Link>
        </div>
      )}

      <div className="mt-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
              Catálogo
            </p>

            <h2 className="mt-2 text-2xl font-black text-[#061b3a]">
              Insignias disponibles
            </h2>
          </div>

          <p className="text-sm font-semibold text-slate-500">
            OneDrive Descubre
          </p>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {Object.values(ONEDRIVE_BADGES).map((badge) => {
            const earned = earnedBadge?.type === badge.type;

            return (
              <div
                key={badge.type}
                className={
                  earned
                    ? "rounded-3xl border border-[#c78b3a] bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
                    : "rounded-3xl border border-white bg-white/70 p-5 opacity-60"
                }
              >
                <Image
                  src={badge.image}
                  alt={badge.title}
                  width={180}
                  height={180}
                  className="mx-auto h-auto w-[180px]"
                />

                <h3 className="mt-4 text-center text-lg font-black text-[#061b3a]">
                  {badge.title}
                </h3>

                <p className="mt-3 text-center text-xs leading-6 text-slate-600">
                  {badge.description}
                </p>

                <div className="mt-4 text-center">
                  <span
                    className={
                      earned
                        ? "rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700"
                        : "rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500"
                    }
                  >
                    {earned ? "Obtenida" : "Pendiente"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}