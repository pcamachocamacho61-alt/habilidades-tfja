"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { onedriveDescubreSteps } from "@/data/onedrive-descubre";
import { getOneDriveBadgeInfo } from "@/lib/badges";

type FinalResult = {
  correctAnswers: number;
  wrongAnswers: number;
  approved: boolean;
  badge: "gold" | "silver" | "bronze" | null;
  attemptNumber: number;
};

type AlertItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  tone: "info" | "warning" | "success" | "neutral";
};

const COMPLETED_KEY = "habilidades-tfja:onedrive-descubre:completed";
const RESULT_KEY = "habilidades-tfja:onedrive-descubre:final-result";
const BADGE_KEY = "habilidades-tfja:onedrive-descubre:badge";

export function AlertsPanel() {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [finalResult, setFinalResult] = useState<FinalResult | null>(null);
  const [badgeValue, setBadgeValue] = useState<string | null>(null);

  useEffect(() => {
    const savedCompleted = window.localStorage.getItem(COMPLETED_KEY);
    const savedResult = window.localStorage.getItem(RESULT_KEY);
    const savedBadge = window.localStorage.getItem(BADGE_KEY);

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

  const contentBeforeFinal = onedriveDescubreSteps.filter(
    (step) => step.id !== "evaluacion-final"
  );

  const completedBeforeFinal = contentBeforeFinal.filter((step) =>
    completedIds.includes(step.id)
  ).length;

  const progressBeforeFinal = Math.round(
    (completedBeforeFinal / contentBeforeFinal.length) * 100
  );

  const alerts: AlertItem[] = [];

  if (progress === 0) {
    alerts.push({
      id: "start-onedrive",
      title: "Comienza tu ruta OneDrive Descubre",
      description:
        "Todavía no has iniciado la ruta. Puedes comenzar con pasos breves para conocer OneDrive.",
      href: "/herramientas-digitales/onedrive/descubre",
      actionLabel: "Iniciar ruta",
      tone: "info",
    });
  }

  if (progress > 0 && progress < 100) {
    alerts.push({
      id: "continue-onedrive",
      title: "Continúa tu ruta OneDrive Descubre",
      description: `Tu avance actual es de ${progress}%. Puedes continuar desde la ruta para completar los pasos pendientes.`,
      href: "/herramientas-digitales/onedrive/descubre",
      actionLabel: "Continuar ruta",
      tone: "info",
    });
  }

  if (progressBeforeFinal < 100) {
    alerts.push({
      id: "final-locked",
      title: "Evaluación final bloqueada",
      description: `Necesitas completar el 100% de los pasos y checkpoints previos. Tu avance antes de la evaluación final es de ${progressBeforeFinal}%.`,
      href: "/herramientas-digitales/onedrive/descubre/paso-1",
      actionLabel: "Completar pasos",
      tone: "warning",
    });
  }

  if (progressBeforeFinal === 100 && !finalResult?.approved) {
    alerts.push({
      id: "final-ready",
      title: "Evaluación final disponible",
      description:
        "Ya completaste los pasos previos. Ahora puedes presentar la evaluación final de OneDrive Descubre.",
      href: "/herramientas-digitales/onedrive/descubre/evaluacion-final",
      actionLabel: "Ir a evaluación final",
      tone: "warning",
    });
  }

  if (finalResult && !finalResult.approved) {
    alerts.push({
      id: "final-not-approved",
      title: "Evaluación final no aprobada",
      description:
        "No alcanzaste el mínimo requerido. Repasa la ruta y vuelve a intentarlo si aún tienes intentos disponibles.",
      href: "/herramientas-digitales/onedrive/descubre/paso-1",
      actionLabel: "Repasar ruta",
      tone: "warning",
    });
  }

  if (badgeInfo) {
    alerts.push({
      id: "badge-earned",
      title: `Insignia obtenida: ${badgeInfo.title}`,
      description:
        "Ya tienes una insignia registrada por tu desempeño en la ruta OneDrive Descubre.",
      href: "/herramientas-digitales/insignias",
      actionLabel: "Ver insignia",
      tone: "success",
    });
  }

  alerts.push({
    id: "coming-soon-outlook",
    title: "Próximamente: Outlook Descubre",
    description:
      "Se podrá agregar una nueva ruta para fortalecer el uso de correo, calendario y organización diaria.",
    href: "/herramientas-digitales",
    actionLabel: "Ver herramientas",
    tone: "neutral",
  });

  function getAlertClass(tone: AlertItem["tone"]) {
    if (tone === "success") {
      return "border-emerald-200 bg-emerald-50";
    }

    if (tone === "warning") {
      return "border-amber-200 bg-amber-50";
    }

    if (tone === "info") {
      return "border-blue-200 bg-blue-50";
    }

    return "border-slate-200 bg-white";
  }

  function getBadgeClass(tone: AlertItem["tone"]) {
    if (tone === "success") {
      return "bg-emerald-600 text-white";
    }

    if (tone === "warning") {
      return "bg-[#c78b3a] text-white";
    }

    if (tone === "info") {
      return "bg-[#0b376d] text-white";
    }

    return "bg-slate-500 text-white";
  }

  return (
    <section className="rounded-[32px] bg-white/60 p-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Centro de avisos
          </p>

          <h1 className="mt-3 text-3xl font-black text-[#061b3a]">
            Alertas
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Consulta avisos relacionados con tu avance, evaluaciones,
            insignias y próximas rutas disponibles dentro de Habilidades TFJA.
          </p>
        </div>

        <div className="rounded-3xl border border-white bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Resumen
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#061b3a]">
            {alerts.length}
          </h2>

          <p className="mt-1 text-sm font-semibold text-slate-500">
            Alertas disponibles
          </p>

          <div className="mt-5 rounded-2xl bg-[#f5f8fd] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Avance OneDrive
            </p>

            <p className="mt-1 text-xl font-black text-[#061b3a]">
              {progress}%
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {alerts.map((alert) => (
          <article
            key={alert.id}
            className={`rounded-[28px] border p-5 shadow-sm ${getAlertClass(
              alert.tone
            )}`}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.16em] ${getBadgeClass(
                    alert.tone
                  )}`}
                >
                  {alert.tone === "success"
                    ? "Logro"
                    : alert.tone === "warning"
                      ? "Pendiente"
                      : alert.tone === "info"
                        ? "Aviso"
                        : "Próximamente"}
                </span>

                <h2 className="mt-3 text-xl font-black text-[#061b3a]">
                  {alert.title}
                </h2>

                <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                  {alert.description}
                </p>
              </div>

              <Link
                href={alert.href}
                className="shrink-0 rounded-2xl bg-white px-5 py-3 text-center text-sm font-bold text-[#061b3a] shadow-sm hover:bg-slate-50"
              >
                {alert.actionLabel}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}