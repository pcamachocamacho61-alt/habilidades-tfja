"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { LearningAlert, AlertStatus } from "@/types/learning";
import {
  getLearningAlerts,
  LEARNING_EVENTS,
  updateLearningAlertStatus,
} from "@/lib/learning-storage";
import { getCurrentAlerts } from "@/lib/learning-api";

const FILTERS: Array<{ value: "all" | AlertStatus; label: string }> = [
  { value: "all", label: "Todas" },
  { value: "new", label: "Nuevas" },
  { value: "read", label: "Leídas" },
  { value: "attended", label: "Atendidas" },
  { value: "archived", label: "Archivadas" },
];

function statusLabel(status: AlertStatus) {
  if (status === "new") return "Nueva";
  if (status === "read") return "Leída";
  if (status === "attended") return "Atendida";
  return "Archivada";
}

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? "Fecha no disponible"
    : date.toLocaleString("es-MX", {
        dateStyle: "medium",
        timeStyle: "short",
      });
}

export function AlertsPanel() {
  const [alerts, setAlerts] = useState<LearningAlert[]>([]);
  const [filter, setFilter] = useState<"all" | AlertStatus>("all");
  const [loaded, setLoaded] = useState(false);

  const loadAlerts = useCallback(async () => {
    try {
      const databaseAlerts = await getCurrentAlerts();
      window.localStorage.setItem("habilidades-tfja:alerts", JSON.stringify(databaseAlerts));
      setAlerts(databaseAlerts);
    } catch {
      setAlerts(getLearningAlerts());
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    void loadAlerts();
    window.addEventListener(LEARNING_EVENTS.alertsUpdated, loadAlerts);
    window.addEventListener("storage", loadAlerts);
    return () => {
      window.removeEventListener(LEARNING_EVENTS.alertsUpdated, loadAlerts);
      window.removeEventListener("storage", loadAlerts);
    };
  }, [loadAlerts]);

  const filteredAlerts = useMemo(
    () =>
      filter === "all"
        ? alerts
        : alerts.filter((alert) => alert.status === filter),
    [alerts, filter]
  );

  const newCount = alerts.filter((alert) => alert.status === "new").length;
  const pendingCount = alerts.filter(
    (alert) => alert.status === "new" || alert.status === "read"
  ).length;

  function setStatus(alertId: string, status: AlertStatus) {
    updateLearningAlertStatus(alertId, status);
    void loadAlerts();
  }

  if (!loaded) {
    return (
      <section className="rounded-[28px] bg-white/60 p-5">
        <p className="text-sm font-bold text-slate-600">Cargando alertas...</p>
      </section>
    );
  }

  return (
    <section className="rounded-[28px] bg-white/60 p-4 sm:p-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Centro de avisos
          </p>
          <h1 className="mt-3 text-2xl font-black text-[#061b3a]">Alertas</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Las alertas internas se conservan y pueden pasar por los estados
            Nueva, Leída, Atendida y Archivada. No se eliminan.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-3xl bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-bold uppercase text-slate-400">Nuevas</p>
            <p className="mt-2 text-3xl font-black text-[#061b3a]">{newCount}</p>
          </div>
          <div className="rounded-3xl bg-white p-5 text-center shadow-sm">
            <p className="text-xs font-bold uppercase text-slate-400">Pendientes</p>
            <p className="mt-2 text-3xl font-black text-[#061b3a]">{pendingCount}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {FILTERS.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => setFilter(item.value)}
            className={
              filter === item.value
                ? "rounded-full bg-[#0b376d] px-4 py-2 text-sm font-bold text-white"
                : "rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600"
            }
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        {filteredAlerts.length ? (
          filteredAlerts.map((alert) => (
            <article
              key={alert.id}
              className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-[#0b376d] px-3 py-1 text-xs font-black uppercase text-white">
                      {alert.tone === "success"
                        ? "Logro"
                        : alert.tone === "warning"
                          ? "Pendiente"
                          : "Aviso"}
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase text-slate-600">
                      {statusLabel(alert.status)}
                    </span>
                  </div>
                  <h2 className="mt-3 text-xl font-black text-[#061b3a]">
                    {alert.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {alert.description}
                  </p>
                  <p className="mt-2 text-xs font-semibold text-slate-400">
                    {formatDate(alert.createdAt)}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {alert.status === "new" && (
                    <button
                      type="button"
                      onClick={() => setStatus(alert.id, "read")}
                      className="rounded-2xl border border-slate-200 px-4 py-2 text-xs font-bold"
                    >
                      Marcar leída
                    </button>
                  )}
                  {(alert.status === "new" || alert.status === "read") && (
                    <button
                      type="button"
                      onClick={() => setStatus(alert.id, "attended")}
                      className="rounded-2xl border border-emerald-200 px-4 py-2 text-xs font-bold text-emerald-700"
                    >
                      Atendida
                    </button>
                  )}
                  {alert.status !== "archived" && (
                    <button
                      type="button"
                      onClick={() => setStatus(alert.id, "archived")}
                      className="rounded-2xl border border-violet-200 px-4 py-2 text-xs font-bold text-violet-700"
                    >
                      Archivar
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="rounded-[24px] border border-dashed border-slate-300 bg-white p-6 text-center">
            <p className="font-bold text-[#061b3a]">
              No hay alertas en esta categoría.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
