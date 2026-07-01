"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ResetRequest } from "@/types/learning";
import {
  getAllResetRequests,
  reviewResetRequestInDatabase,
} from "@/lib/learning-api";

function formatDate(value?: string) {
  if (!value) {
    return "Fecha no disponible";
  }

  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? "Fecha no disponible"
    : date.toLocaleString("es-MX", {
        dateStyle: "medium",
        timeStyle: "short",
      });
}

function getStatusLabel(status: ResetRequest["status"]) {
  switch (status) {
    case "pending":
      return "Pendiente";
    case "approved":
      return "Autorizada";
    case "rejected":
      return "Rechazada";
    case "executed":
      return "Ejecutada";
    default:
      return status;
  }
}

function getStatusStyles(status: ResetRequest["status"]) {
  switch (status) {
    case "pending":
      return "bg-amber-50 text-amber-700";
    case "approved":
      return "bg-blue-50 text-blue-700";
    case "rejected":
      return "bg-red-50 text-red-700";
    case "executed":
      return "bg-emerald-50 text-emerald-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
}

export function ResetRequestsAdminPanel() {
  const [requests, setRequests] = useState<ResetRequest[]>([]);
  const [selectedRequestId, setSelectedRequestId] = useState<string | null>(
    null
  );
  const [rejectionReason, setRejectionReason] = useState("");
  const [showReject, setShowReject] = useState(false);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const load = useCallback(async () => {
    try {
      setErrorMessage("");
      const databaseRequests = await getAllResetRequests();
      setRequests(databaseRequests);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No fue posible consultar las solicitudes."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();

    const intervalId = window.setInterval(() => {
      void load();
    }, 15000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [load]);

  const pendingCount = useMemo(
    () => requests.filter((request) => request.status === "pending").length,
    [requests]
  );

  async function approve(request: ResetRequest) {
    if (request.status !== "pending") return;

    setProcessingId(request.id);
    setErrorMessage("");

    try {
      await reviewResetRequestInDatabase(request.id, "approved");
      await load();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No fue posible autorizar la solicitud."
      );
    } finally {
      setProcessingId(null);
    }
  }

  function openReject(request: ResetRequest) {
    setSelectedRequestId(request.id);
    setRejectionReason("");
    setShowReject(true);
    setErrorMessage("");
  }

  function cancelReject() {
    if (processingId) return;
    setShowReject(false);
    setSelectedRequestId(null);
    setRejectionReason("");
  }

  async function reject() {
    if (!selectedRequestId || !rejectionReason.trim()) {
      return;
    }

    setProcessingId(selectedRequestId);
    setErrorMessage("");

    try {
      await reviewResetRequestInDatabase(
        selectedRequestId,
        "rejected",
        rejectionReason.trim()
      );
      setShowReject(false);
      setSelectedRequestId(null);
      setRejectionReason("");
      await load();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No fue posible rechazar la solicitud."
      );
    } finally {
      setProcessingId(null);
    }
  }

  return (
    <section className="rounded-[28px] bg-white p-5 shadow-sm sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Administración
          </p>
          <h1 className="mt-3 text-2xl font-black text-[#061b3a]">
            Solicitudes de reinicio
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Las solicitudes se consultan directamente desde MongoDB. Al
            autorizar, el reinicio se aplicará cuando la persona usuaria vuelva
            a entrar a la ruta o la mantenga abierta.
          </p>
        </div>

        <div className="rounded-2xl bg-[#f5f8fd] px-5 py-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            Pendientes
          </p>
          <p className="mt-1 text-2xl font-black text-[#061b3a]">
            {pendingCount}
          </p>
        </div>
      </div>

      {errorMessage && (
        <div className="mt-6 rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
          {errorMessage}
        </div>
      )}

      {loading ? (
        <div className="mt-6 rounded-3xl border border-dashed border-slate-300 p-6 text-center">
          <p className="font-bold text-slate-500">
            Consultando solicitudes...
          </p>
        </div>
      ) : requests.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-dashed border-slate-300 p-6 text-center">
          <p className="font-bold text-slate-500">No existen solicitudes.</p>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {requests.map((request) => (
            <article
              key={request.id}
              className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-5"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.15em] ${getStatusStyles(
                      request.status
                    )}`}
                  >
                    {getStatusLabel(request.status)}
                  </span>

                  <h2 className="mt-3 text-xl font-black text-[#061b3a]">
                    OneDrive Descubre
                  </h2>

                  <div className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                    <p>
                      <strong>Persona:</strong>{" "}
                      {request.userName ?? "No disponible"}
                    </p>
                    <p>
                      <strong>Correo:</strong>{" "}
                      {request.userEmail ?? "No disponible"}
                    </p>
                    <p>
                      <strong>Evaluación:</strong> {request.evaluationId}
                    </p>
                    <p>
                      <strong>Solicitada:</strong>{" "}
                      {formatDate(request.requestedAt)}
                    </p>
                    {request.reviewedAt && (
                      <p>
                        <strong>Revisada:</strong>{" "}
                        {formatDate(request.reviewedAt)}
                      </p>
                    )}
                    {request.reviewerName && (
                      <p>
                        <strong>Revisó:</strong> {request.reviewerName}
                      </p>
                    )}
                    {request.executedAt && (
                      <p>
                        <strong>Ejecutada:</strong>{" "}
                        {formatDate(request.executedAt)}
                      </p>
                    )}
                  </div>

                  {request.rejectionReason && (
                    <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
                      Motivo: {request.rejectionReason}
                    </p>
                  )}
                </div>

                {request.status === "pending" && (
                  <div className="flex shrink-0 flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => void approve(request)}
                      disabled={processingId === request.id}
                      className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
                    >
                      {processingId === request.id
                        ? "Procesando..."
                        : "Autorizar"}
                    </button>
                    <button
                      type="button"
                      onClick={() => openReject(request)}
                      disabled={Boolean(processingId)}
                      className="rounded-2xl border border-red-200 px-5 py-3 text-sm font-bold text-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Rechazar
                    </button>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      {showReject && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#061b3a]/45 px-4 backdrop-blur-[1px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reject-reset-title"
        >
          <div className="w-full max-w-lg rounded-[24px] bg-white p-5 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
              Rechazo de solicitud
            </p>
            <h2
              id="reject-reset-title"
              className="mt-2 text-2xl font-black text-[#061b3a]"
            >
              Indica el motivo
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              El motivo es obligatorio y quedará registrado en la solicitud y
              en la bitácora administrativa.
            </p>

            <textarea
              value={rejectionReason}
              onChange={(event) => setRejectionReason(event.target.value)}
              className="mt-4 min-h-32 w-full rounded-2xl border border-red-200 bg-white p-4 text-sm outline-none focus:border-red-400"
              maxLength={500}
              placeholder="Escribe el motivo del rechazo..."
            />

            <div className="mt-2 text-right text-xs font-bold text-slate-400">
              {rejectionReason.length}/500
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={cancelReject}
                disabled={Boolean(processingId)}
                className="w-full rounded-2xl border border-slate-200 px-5 py-3 text-sm font-bold text-[#061b3a] disabled:opacity-50"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => void reject()}
                disabled={!rejectionReason.trim() || Boolean(processingId)}
                className="w-full rounded-2xl bg-red-600 px-5 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {processingId ? "Procesando..." : "Confirmar rechazo"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
