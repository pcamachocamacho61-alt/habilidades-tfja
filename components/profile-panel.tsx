"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { onedriveDescubreSteps } from "@/data/onedrive-descubre";
import { ProgressBar } from "@/components/progress-bar";
import { getOneDriveBadgeInfo } from "@/lib/badges";

type DemoUser = {
  name: string;
  email: string;
  initials: string;
};

type FinalResult = {
  correctAnswers: number;
  wrongAnswers: number;
  approved: boolean;
  badge: "gold" | "silver" | "bronze" | null;
  attemptNumber: number;
};

const DEMO_USER_KEY = "habilidades-tfja:demo-user";
const COMPLETED_KEY = "habilidades-tfja:onedrive-descubre:completed";
const RESULT_KEY = "habilidades-tfja:onedrive-descubre:final-result";
const BADGE_KEY = "habilidades-tfja:onedrive-descubre:badge";

export function ProfilePanel() {
  const [user, setUser] = useState<DemoUser | null>(null);
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [finalResult, setFinalResult] = useState<FinalResult | null>(null);
  const [badgeValue, setBadgeValue] = useState<string | null>(null);

  useEffect(() => {
    const savedUser = window.localStorage.getItem(DEMO_USER_KEY);
    const savedCompleted = window.localStorage.getItem(COMPLETED_KEY);
    const savedResult = window.localStorage.getItem(RESULT_KEY);
    const savedBadge = window.localStorage.getItem(BADGE_KEY);

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    if (savedCompleted) {
      setCompletedIds(JSON.parse(savedCompleted));
    }

    if (savedResult) {
      setFinalResult(JSON.parse(savedResult));
    }

    if (savedBadge) {
      setBadgeValue(savedBadge);
    }
  }, []);

  const progress = useMemo(() => {
    if (onedriveDescubreSteps.length === 0) {
      return 0;
    }

    return Math.round(
      (completedIds.length / onedriveDescubreSteps.length) * 100
    );
  }, [completedIds.length]);

  const badgeInfo = getOneDriveBadgeInfo(badgeValue);
  const completedRoute = progress === 100;

  return (
    <section className="rounded-[32px] bg-white/60 p-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Cuenta institucional
          </p>

          <h1 className="mt-3 text-3xl font-black text-[#061b3a]">
            Mi perfil
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Consulta tu avance, ruta actual, resultado de evaluación e
            insignias obtenidas dentro de Habilidades TFJA.
          </p>
        </div>

        <div className="rounded-3xl border border-white bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0b376d] text-xl font-black text-white">
              {user?.initials ?? "PC"}
            </div>

            <div>
              <h2 className="text-lg font-black text-[#061b3a]">
                {user?.name ?? "Pedro Camacho"}
              </h2>

              <p className="text-sm text-slate-500">
                {user?.email ?? "pedro.camacho@tfja.gob.mx"}
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-[#f5f8fd] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Estado
            </p>

            <p className="mt-1 text-lg font-black text-[#061b3a]">
              Sesión simulada MVP
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[32px] border border-white bg-white/90 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
                Ruta actual
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#061b3a]">
                OneDrive Descubre
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                Ruta inicial para conocer el uso básico de OneDrive en el
                trabajo institucional.
              </p>
            </div>

            <span
              className={
                completedRoute
                  ? "rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700"
                  : "rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700"
              }
            >
              {completedRoute ? "Ruta completada" : "En progreso"}
            </span>
          </div>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-sm font-bold text-slate-600">
              <span>Avance de ruta</span>
              <span>{progress}%</span>
            </div>

            <ProgressBar value={progress} variant="blue" />
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-[#f5f8fd] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Pasos completados
              </p>

              <p className="mt-1 text-2xl font-black text-[#061b3a]">
                {completedIds.length}/{onedriveDescubreSteps.length}
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f8fd] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Evaluación
              </p>

              <p
                className={
                  finalResult?.approved
                    ? "mt-1 text-2xl font-black text-emerald-600"
                    : "mt-1 text-2xl font-black text-slate-500"
                }
              >
                {finalResult?.approved ? "Aprobada" : "Pendiente"}
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f8fd] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Insignia
              </p>

              <p className="mt-1 text-lg font-black text-[#061b3a]">
                {badgeInfo ? badgeInfo.title : "Sin insignia"}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/herramientas-digitales/onedrive/descubre"
              className="rounded-2xl bg-[#0b376d] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#061b3a]"
            >
              Continuar ruta
            </Link>

            <Link
              href="/herramientas-digitales/onedrive"
              className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-center text-sm font-bold text-[#061b3a] hover:bg-slate-50"
            >
              Ver OneDrive
            </Link>
          </div>
        </div>

        <div className="rounded-[32px] border border-white bg-white/90 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Insignia destacada
          </p>

          {badgeInfo ? (
            <div className="mt-5 text-center">
              <Image
                src={badgeInfo.image}
                alt={badgeInfo.title}
                width={220}
                height={220}
                loading="eager"
                className="mx-auto h-auto w-[220px]"
              />

              <h2 className="mt-4 text-2xl font-black text-[#061b3a]">
                {badgeInfo.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {badgeInfo.description}
              </p>

              <Link
                href="/herramientas-digitales/insignias"
                className="mt-6 inline-flex rounded-2xl bg-[#c78b3a] px-6 py-3 text-sm font-bold text-white hover:bg-[#a66f24]"
              >
                Ver mis insignias
              </Link>
            </div>
          ) : (
            <div className="mt-5 rounded-3xl border border-dashed border-slate-300 bg-[#f5f8fd] p-6 text-center">
              <p className="text-sm leading-7 text-slate-600">
                Aún no tienes una insignia. Completa la ruta y aprueba la
                evaluación final para obtenerla.
              </p>

              <Link
                href="/herramientas-digitales/onedrive/descubre/evaluacion-final"
                className="mt-6 inline-flex rounded-2xl bg-[#c78b3a] px-6 py-3 text-sm font-bold text-white hover:bg-[#a66f24]"
              >
                Ir a evaluación final
              </Link>
            </div>
          )}
        </div>
      </div>

      {finalResult && (
        <div className="mt-8 rounded-[32px] border border-white bg-white/90 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Última evaluación final
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl bg-[#f5f8fd] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Resultado
              </p>

              <p
                className={
                  finalResult.approved
                    ? "mt-1 text-xl font-black text-emerald-600"
                    : "mt-1 text-xl font-black text-red-600"
                }
              >
                {finalResult.approved ? "Aprobado" : "No aprobado"}
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f8fd] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Correctas
              </p>

              <p className="mt-1 text-xl font-black text-emerald-600">
                {finalResult.correctAnswers}
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f8fd] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Incorrectas
              </p>

              <p className="mt-1 text-xl font-black text-red-600">
                {finalResult.wrongAnswers}
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f8fd] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Intento
              </p>

              <p className="mt-1 text-xl font-black text-[#061b3a]">
                {finalResult.attemptNumber}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}