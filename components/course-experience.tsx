"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

import { LearningStep, ResetRequest } from "@/types/learning";
import { CourseStepSidebar } from "@/components/course-step-sidebar";
import { ProgressBar } from "@/components/progress-bar";
import { FinalEvaluationPanel } from "@/components/final-evaluation-panel";
import { CheckpointEvaluationPanel } from "@/components/checkpoint-evaluation-panel";
import { CourseLockedPanel } from "@/components/course-locked-panel";

import { getProgressByCompletedIds } from "@/lib/progress";
import { isStepLocked } from "@/lib/course-locks";
import {
  executeOneDriveDescubreReset,
  getResetRequest,
  LEARNING_EVENTS,
  saveResetRequest,
  upsertLearningAlert,
} from "@/lib/learning-storage";
import {
  createResetRequestInDatabase,
  getCurrentUserResetRequest,
  markResetRequestExecutedInDatabase,
  getCurrentRouteProgress,
  saveCurrentRouteProgress,
} from "@/lib/learning-api";

type CourseExperienceProps = {
  steps: LearningStep[];
  currentStep: LearningStep;
  toolId?: string;
  toolName?: string;
  levelId?: string;
  levelName?: string;
  routeId?: string;
  basePath?: string;
};

function getMaterialTypeLabel(type: string): string {
  switch (type) {
    case "pdf":
      return "PDF";
    case "excel":
      return "Excel";
    case "word":
      return "Word";
    case "powerpoint":
      return "PowerPoint";
    case "video":
      return "Video";
    case "image":
      return "Imagen";
    case "link":
      return "Enlace";
    default:
      return "Material";
  }
}

export function CourseExperience({
  steps = [],
  currentStep,
  toolId = "onedrive",
  toolName = "OneDrive",
  levelId = "descubre",
  levelName = "Descubre",
  routeId = "onedrive-descubre",
  basePath = "/herramientas-digitales/onedrive/descubre",
}: CourseExperienceProps) {
  const completedStorageKey = `habilidades-tfja:${routeId}:completed`;
  const exhaustedStorageKey = `habilidades-tfja:${routeId}:exhausted-evaluations`;
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [exhaustedEvaluationIds, setExhaustedEvaluationIds] = useState<
    string[]
  >([]);
  const [resetRequest, setResetRequest] =
    useState<ResetRequest | null>(null);
  const [resetModalOpen, setResetModalOpen] = useState(false);
  const [resetRequestError, setResetRequestError] = useState("");
  const [isSubmittingReset, setIsSubmittingReset] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const syncResetRequestFromDatabase = useCallback(async () => {
    try {
      const previousRequest = getResetRequest(routeId);
      const databaseRequest = await getCurrentUserResetRequest(toolId, levelId);

      if (!databaseRequest) {
        return;
      }

      if (databaseRequest.status === "approved") {
        if (previousRequest?.status !== "approved") {
          upsertLearningAlert({
            id: `reset-approved-${databaseRequest.id}`,
            title: "Solicitud de reinicio autorizada",
            description: `La solicitud fue autorizada. La ruta ${toolName} ${levelName} se reiniciará ahora.`,
            tone: "success",
            routeId,
            relatedRequestId: databaseRequest.id,
          });
        }

        if (routeId === "onedrive-descubre") {
          executeOneDriveDescubreReset(databaseRequest);
        }
        const executedRequest = await markResetRequestExecutedInDatabase(
          databaseRequest.id
        );
        setResetRequest(executedRequest);
        saveResetRequest(executedRequest, routeId);
        return;
      }

      if (
        databaseRequest.status === "rejected" &&
        previousRequest?.status !== "rejected"
      ) {
        upsertLearningAlert({
          id: `reset-rejected-${databaseRequest.id}`,
          title: "Solicitud de reinicio rechazada",
          description: databaseRequest.rejectionReason
            ? `Motivo: ${databaseRequest.rejectionReason}`
            : "La solicitud de reinicio fue rechazada.",
          tone: "warning",
          routeId,
          relatedRequestId: databaseRequest.id,
        });
      }

      setResetRequest(databaseRequest);
      saveResetRequest(databaseRequest, routeId);
    } catch (error) {
      console.error(
        "No fue posible sincronizar la solicitud de reinicio:",
        error
      );
    }
  }, [levelId, levelName, routeId, toolId, toolName]);

  useEffect(() => {
    let active = true;

    async function loadCourseState() {
      try {
        const databaseProgress = await getCurrentRouteProgress(routeId);
        if (databaseProgress && active) {
          setCompletedIds(databaseProgress.completedStepIds ?? []);
          setExhaustedEvaluationIds(databaseProgress.exhaustedEvaluationIds ?? []);
        } else {
          const savedCompletedIds = window.localStorage.getItem(completedStorageKey);
          const savedExhaustedIds = window.localStorage.getItem(exhaustedStorageKey);
          if (savedCompletedIds && active) setCompletedIds(JSON.parse(savedCompletedIds));
          if (savedExhaustedIds && active) setExhaustedEvaluationIds(JSON.parse(savedExhaustedIds));
        }
        const savedResetRequest = getResetRequest(routeId);
        if (savedResetRequest && active) setResetRequest(savedResetRequest);
      } catch (error) {
        console.error("No fue posible cargar el avance desde MongoDB:", error);

        if (active) {
          try {
            const savedCompletedIds = window.localStorage.getItem(completedStorageKey);
            const savedExhaustedIds = window.localStorage.getItem(exhaustedStorageKey);

            setCompletedIds(
              savedCompletedIds ? JSON.parse(savedCompletedIds) : []
            );
            setExhaustedEvaluationIds(
              savedExhaustedIds ? JSON.parse(savedExhaustedIds) : []
            );
            setResetRequest(getResetRequest(routeId));
          } catch {
            setCompletedIds([]);
            setExhaustedEvaluationIds([]);
            setResetRequest(null);
          }
        }
      } finally {
        if (active) setLoaded(true);
      }
    }

    void loadCourseState();
    return () => { active = false; };
  }, [completedStorageKey, exhaustedStorageKey, routeId]);

  useEffect(() => {
    if (!loaded) {
      return;
    }

    void syncResetRequestFromDatabase();

    const intervalId = window.setInterval(() => {
      void syncResetRequestFromDatabase();
    }, 15000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [loaded, syncResetRequestFromDatabase]);

  useEffect(() => {
    if (!loaded) {
      return;
    }

    try {
      window.localStorage.setItem(
        completedStorageKey,
        JSON.stringify(completedIds)
      );
    } catch {
      // El curso puede continuar funcionando aunque localStorage falle.
    }

    const percentage = steps.length > 0 ? Math.min(100, Math.round((new Set(completedIds).size / steps.length) * 100)) : 0;
    void saveCurrentRouteProgress({
      routeId,
      completedStepIds: completedIds,
      exhaustedEvaluationIds,
      progress: percentage,
      status: completedIds.includes("evaluacion-final") ? "completed" : percentage > 0 ? "in-progress" : "not-started",
      currentStepId: currentStep.id,
      completedAt: completedIds.includes("evaluacion-final") ? new Date().toISOString() : undefined,
    }).catch((error) => console.error("No fue posible guardar el avance en MongoDB:", error));
  }, [completedIds, exhaustedEvaluationIds, loaded, currentStep.id, steps.length]);

  useEffect(() => {
    if (!loaded) {
      return;
    }

    try {
      window.localStorage.setItem(
        exhaustedStorageKey,
        JSON.stringify(exhaustedEvaluationIds)
      );
    } catch {
      // El estado permanece disponible durante la sesión actual.
    }
  }, [exhaustedEvaluationIds, loaded]);

  useEffect(() => {
    if (!loaded) return;
    saveResetRequest(resetRequest, routeId);
  }, [loaded, resetRequest, routeId]);

  const currentIndex = steps.findIndex(
    (step) => step.id === currentStep.id
  );

  const previousStep =
    currentIndex > 0 ? steps[currentIndex - 1] : null;

  const nextStep =
    currentIndex >= 0 && currentIndex < steps.length - 1
      ? steps[currentIndex + 1]
      : null;

  const validCompletedIds = useMemo(() => {
    const routeIds = new Set(steps.map((step) => step.id));
    return [...new Set(completedIds)].filter((id) => routeIds.has(id));
  }, [completedIds, steps]);

  const progress = useMemo(() => {
    return getProgressByCompletedIds(steps.length, validCompletedIds);
  }, [steps.length, validCompletedIds]);

  const currentStepCompleted = validCompletedIds.includes(
    currentStep.id
  );

  const currentStepLocked = isStepLocked(
    currentStep,
    steps,
    validCompletedIds
  );

  const blockOneSteps = steps.filter(
    (step) => step.block === 1
  );

  const blockOneProgress =
    blockOneSteps.length > 0
      ? Math.round(
          (blockOneSteps.filter((step) =>
            validCompletedIds.includes(step.id)
          ).length /
            blockOneSteps.length) *
            100
        )
      : 0;

  const stepsBeforeFinalEvaluation = steps.filter(
    (step) => step.id !== "evaluacion-final"
  );

  const completedStepsBeforeFinal =
    stepsBeforeFinalEvaluation.filter((step) =>
      validCompletedIds.includes(step.id)
    ).length;

  const routeProgressBeforeFinal =
    stepsBeforeFinalEvaluation.length > 0
      ? Math.round(
          (completedStepsBeforeFinal /
            stepsBeforeFinalEvaluation.length) *
            100
        )
      : 0;

  const canStartFinalEvaluation =
    stepsBeforeFinalEvaluation.length > 0 &&
    completedStepsBeforeFinal ===
      stepsBeforeFinalEvaluation.length;

  const currentEvaluationExhausted =
    exhaustedEvaluationIds.includes(currentStep.id);

  const hasAnyExhaustedEvaluation =
    exhaustedEvaluationIds.length > 0;

  const hasPendingResetRequest =
    resetRequest?.status === "pending";

  const canNavigateToNextStep =
    Boolean(nextStep) && currentStepCompleted;

  const routeCompleted =
    validCompletedIds.includes("evaluacion-final");

  function handleCompleteCurrentStep() {
    setCompletedIds((currentIds) => {
      if (currentIds.includes(currentStep.id)) {
        return currentIds;
      }

      return [...currentIds, currentStep.id];
    });

    setExhaustedEvaluationIds((currentIds) =>
      currentIds.filter(
        (evaluationId) =>
          evaluationId !== currentStep.id
      )
    );
  }

  function handleAttemptsExhausted() {
    setExhaustedEvaluationIds((currentIds) => {
      if (currentIds.includes(currentStep.id)) return currentIds;
      return [...currentIds, currentStep.id];
    });

    upsertLearningAlert({
      id: `attempts-exhausted-${currentStep.id}`,
      title: "Intentos agotados",
      description: `Agotaste los intentos disponibles de ${currentStep.title}. Ya puedes solicitar el reinicio administrado de la ruta.`,
      tone: "warning",
      routeId,
    });
  }

  function handleRequestReset() {
    if (!hasAnyExhaustedEvaluation || hasPendingResetRequest) return;
    setResetRequestError("");
    setResetModalOpen(true);
  }

  function handleCancelResetRequest() {
    if (isSubmittingReset) return;
    setResetRequestError("");
    setResetModalOpen(false);
  }

  async function handleConfirmResetRequest() {
    if (!hasAnyExhaustedEvaluation || hasPendingResetRequest) {
      setResetModalOpen(false);
      return;
    }

    const evaluationId = exhaustedEvaluationIds[0] ?? currentStep.id;
    const request: ResetRequest = {
      id: `reset-${Date.now()}`,
      toolId,
      level: levelId as "descubre" | "potencia",
      evaluationId,
      requestedAt: new Date().toISOString(),
      status: "pending",
    };

    setIsSubmittingReset(true);
    setResetRequestError("");

    try {
      const savedRequest = await createResetRequestInDatabase(request);

      setResetRequest(savedRequest);
      saveResetRequest(savedRequest, routeId);
      setResetModalOpen(false);

      upsertLearningAlert({
        id: `reset-requested-${savedRequest.id}`,
        title: "Solicitud de reinicio enviada",
        description: `La solicitud de reinicio de ${toolName} ${levelName} fue registrada y está pendiente de revisión administrativa.`,
        tone: "info",
        routeId,
        relatedRequestId: savedRequest.id,
      });

      window.dispatchEvent(
        new CustomEvent(LEARNING_EVENTS.resetUpdated)
      );
    } catch (error) {
      setResetRequestError(
        error instanceof Error
          ? error.message
          : "No fue posible enviar la solicitud."
      );
    } finally {
      setIsSubmittingReset(false);
    }
  }

  function getDisplayEyebrow() {
    if (currentStep.id === "evaluacion-1") {
      return "Evaluación Módulo 1";
    }

    if (currentStep.id === "evaluacion-2") {
      return "Evaluación Módulo 2";
    }

    if (currentStep.id === "evaluacion-final") {
      return "Evaluación final";
    }

    return currentStep.content.eyebrow;
  }

  function getDisplayTitle() {
    if (currentStep.id === "evaluacion-1") {
      return "Evaluación 1";
    }

    if (currentStep.id === "evaluacion-2") {
      return "Evaluación 2";
    }

    if (currentStep.id === "evaluacion-final") {
      return "Evaluación final";
    }

    return currentStep.content.title;
  }

  const contentBullets = Array.isArray(
    currentStep.content.bullets
  )
    ? currentStep.content.bullets
    : [];

  const supportMaterials = Array.isArray(
    currentStep.content.supportMaterials
  )
    ? currentStep.content.supportMaterials
    : [];

  if (!loaded) {
    return (
      <div className="rounded-[32px] border border-white bg-white/90 p-4 sm:p-6 lg:p-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-bold text-slate-600">
          Cargando ruta de aprendizaje...
        </p>
      </div>
    );
  }

  return (
    <>
      {resetModalOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#061b3a]/45 px-4 backdrop-blur-[1px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reset-request-title"
        >
          <div className="w-full max-w-md rounded-[28px] border border-white bg-white p-6 shadow-[0_24px_80px_rgba(6,27,58,0.28)] sm:p-7">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-2xl">
              ↻
            </div>

            <p className="mt-5 text-center text-xs font-black uppercase tracking-[0.2em] text-[#c78b3a]">
              Solicitud de reinicio
            </p>

            <h2
              id="reset-request-title"
              className="mt-2 text-center text-2xl font-black text-[#061b3a]"
            >
              ¿Deseas enviar la solicitud?
            </h2>

            <p className="mt-4 text-center text-sm leading-7 text-slate-600">
              La ruta no se reiniciará automáticamente. La solicitud deberá
              ser revisada y autorizada por una persona Administradora.
            </p>

            {resetRequestError && (
              <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-center text-sm font-bold text-red-700">
                {resetRequestError}
              </p>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleCancelResetRequest}
                disabled={isSubmittingReset}
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#061b3a] transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Cancelar
              </button>

              <button
                type="button"
                onClick={handleConfirmResetRequest}
                disabled={isSubmittingReset}
                className="w-full rounded-2xl bg-[#c78b3a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#a66f24] disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {isSubmittingReset ? "Enviando..." : "Enviar solicitud"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid w-full gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
      <CourseStepSidebar
        steps={steps}
        currentStepId={currentStep.id}
        completedIds={validCompletedIds}
        progress={progress}
        toolName={toolName}
        levelName={levelName}
        basePath={basePath}
      />

      {currentStepLocked ? (
        <CourseLockedPanel
          routeProgressBeforeUnlock={blockOneProgress}
        />
      ) : (
        <article className="min-w-0 rounded-[32px] border border-white bg-white/90 p-4 sm:p-6 lg:p-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p
                className={
                  currentStep.type === "evaluation"
                    ? "text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]"
                    : "text-sm font-bold uppercase tracking-[0.25em] text-[#0b376d]"
                }
              >
                {getDisplayEyebrow()}
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#061b3a]">
                {getDisplayTitle()}
              </h1>

              <p className="mt-3 text-sm font-semibold text-slate-500">
                {currentStep.type === "evaluation"
                  ? `Evaluación · ${currentStep.estimatedTime}`
                  : `Paso ${currentStep.number} · ${currentStep.estimatedTime}`}
              </p>
            </div>

            <div className="min-w-[220px] rounded-2xl bg-[#f5f8fd] p-4">
              <div className="mb-2 flex justify-between text-xs font-bold text-slate-600">
                <span>Avance de ruta</span>
                <span>{progress}%</span>
              </div>

              <ProgressBar value={progress} variant="blue" />
            </div>
          </div>

          {currentStep.content.image &&
            currentStep.content.imageFirst && (
              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <Image
                  src={currentStep.content.image}
                  alt={currentStep.content.title}
                  width={1100}
                  height={620}
                  className="h-auto w-full object-cover"
                />
              </div>
            )}

          {!currentStep.content.hideDescription && (
            <p className="mt-7 text-lg leading-8 text-slate-600">
              {currentStep.content.description}
            </p>
          )}

          {currentStep.content.image &&
            !currentStep.content.imageFirst && (
              <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <Image
                  src={currentStep.content.image}
                  alt={currentStep.content.title}
                  width={1100}
                  height={620}
                  className="h-auto w-full object-cover"
                />
              </div>
            )}

          {currentStep.content.gif && (
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <Image
                src={currentStep.content.gif}
                alt={currentStep.content.title}
                width={1100}
                height={620}
                className="h-auto w-full object-cover"
                unoptimized
              />
            </div>
          )}

          {currentStep.content.embedUrl && (
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-black shadow-sm">
              <iframe
                src={currentStep.content.embedUrl}
                title={currentStep.content.title}
                className="aspect-video w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {currentStep.content.video && (
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-black shadow-sm">
              <video
                className="aspect-video w-full"
                controls
                preload="metadata"
              >
                <source
                  src={currentStep.content.video}
                  type="video/mp4"
                />

                Tu navegador no puede reproducir este video.
              </video>
            </div>
          )}

          {currentStep.content.contentPlaceholder &&
            !currentStep.content.embedUrl &&
            !currentStep.content.video &&
            !currentStep.content.image &&
            !currentStep.content.gif && (
              <div className="mt-8 flex aspect-video w-full items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-100 px-6 text-center">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                    Contenido en preparación
                  </p>
                  <p className="mt-3 text-base font-semibold text-slate-500">
                    {currentStep.content.contentPlaceholder}
                  </p>
                </div>
              </div>
            )}

          {currentStep.content.didYouKnow && (
            <div className="mt-8 flex flex-col gap-4 border-y border-slate-200 py-5 sm:flex-row sm:items-center">
              <img
                src="/brand/sabias-que-habilidades-tfja.png"
                alt="¿Sabías que?"
                className="h-auto w-28 shrink-0 object-contain sm:w-32"
              />
              <p className="text-sm font-semibold leading-7 text-[#061b3a] sm:text-base">
                {currentStep.content.didYouKnow}
              </p>
            </div>
          )}

          {contentBullets.length > 0 && (
            <div className="mt-8 rounded-3xl bg-[#f5f8fd] p-6">
              <h2 className="text-lg font-bold text-[#061b3a]">
                {currentStep.content.bulletsTitle ??
                  (currentStep.type === "welcome"
                    ? "En esta ruta aprenderás:"
                    : currentStep.type === "evaluation"
                      ? "Antes de continuar, confirma:"
                      : "En este paso lograrás:")}
              </h2>

              <ul className="mt-4 space-y-3">
                {contentBullets.map(
                  (bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-slate-700"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c78b3a]" />

                      <span>{bullet}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {supportMaterials.length > 0 && (
              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6">
                <h2 className="text-lg font-bold text-[#061b3a]">
                  Material de apoyo
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Consulta el material dentro de la plataforma o
                  ábrelo en una pestaña nueva.
                </p>

                <div className="mt-5 space-y-5">
                  {supportMaterials.map(
                    (material) => (
                      <div
                        key={`${material.type}-${material.url}`}
                        className="rounded-3xl border border-slate-200 bg-[#f5f8fd] p-4"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-sm font-bold text-[#061b3a]">
                              {getMaterialTypeLabel(
                                material.type
                              )}{" "}
                              · {material.title}
                            </p>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                              {material.description ??
                                "Material complementario de la ruta."}
                            </p>
                          </div>

                          <a
                            href={material.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-2xl bg-[#0b376d] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[#061b3a]"
                          >
                            Abrir material
                          </a>
                        </div>

                        {material.type === "pdf" && (
                          <iframe
                            src={material.url}
                            title={material.title}
                            className="mt-4 h-[420px] w-full rounded-2xl border border-slate-200 bg-white"
                          />
                        )}

                        {material.type === "image" && (
                          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                            <Image
                              src={material.url}
                              alt={material.title}
                              width={1100}
                              height={620}
                              className="h-auto w-full object-contain"
                            />
                          </div>
                        )}

                        {material.type === "video" && (
                          <video
                            className="mt-4 aspect-video w-full rounded-2xl bg-black"
                            controls
                            preload="metadata"
                          >
                            <source src={material.url} />
                            Tu navegador no puede reproducir este
                            video.
                          </video>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

          {currentStep.type === "evaluation" ? (
            currentStep.content.finalEvaluation ? (
              <FinalEvaluationPanel
                finalEvaluation={
                  currentStep.content.finalEvaluation
                }
                routeId={routeId}
                toolId={toolId}
                levelId={levelId}
                currentStepCompleted={
                  currentStepCompleted
                }
                canStartFinalEvaluation={
                  canStartFinalEvaluation
                }
                routeProgressBeforeFinal={
                  routeProgressBeforeFinal
                }
                onApproved={
                  handleCompleteCurrentStep
                }
                onAttemptsExhausted={
                  handleAttemptsExhausted
                }
              />
            ) : currentStep.content
                .checkpointEvaluation ? (
              <CheckpointEvaluationPanel
                checkpointEvaluation={
                  currentStep.content
                    .checkpointEvaluation
                }
                currentStepCompleted={
                  currentStepCompleted
                }
                onApproved={
                  handleCompleteCurrentStep
                }
                onAttemptsExhausted={
                  handleAttemptsExhausted
                }
              />
            ) : (
              <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <h3 className="text-xl font-bold text-[#061b3a]">
                  Evaluación sin configurar
                </h3>

                <p className="mt-3 text-sm leading-7 text-amber-800">
                  Esta evaluación todavía no tiene preguntas
                  configuradas.
                </p>
              </div>
            )
          ) : (
            <button
              type="button"
              onClick={handleCompleteCurrentStep}
              disabled={currentStepCompleted}
              className={
                currentStepCompleted
                  ? "mt-8 cursor-default rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white"
                  : "mt-8 rounded-2xl bg-[#0b376d] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#061b3a]"
              }
            >
              {currentStepCompleted
                ? "Paso completado"
                : "Completar paso"}
            </button>
          )}

          {currentEvaluationExhausted &&
            !hasPendingResetRequest && (
              <div className="mt-8 rounded-3xl border border-amber-300 bg-amber-50 p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-700">
                  Intentos agotados
                </p>

                <h3 className="mt-2 text-xl font-black text-[#061b3a]">
                  Puedes solicitar un reinicio de avance
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  La solicitud será revisada posteriormente por
                  una persona Administradora. Esta acción no
                  reinicia automáticamente la ruta.
                </p>

                <button
                  type="button"
                  onClick={handleRequestReset}
                  className="mt-5 rounded-2xl bg-[#c78b3a] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#a66f24]"
                >
                  Solicitar reinicio de avance
                </button>
              </div>
            )}

          {hasPendingResetRequest && (
            <div className="mt-8 rounded-3xl border border-[#b8c9e6] bg-[#eaf2ff] p-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0b376d]">
                Solicitud enviada
              </p>

              <h3 className="mt-2 text-xl font-black text-[#061b3a]">
                Reinicio pendiente de validación
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Ya existe una solicitud pendiente para esta
                herramienta y nivel. No se puede generar otra
                solicitud hasta que la actual sea atendida.
              </p>

              <p className="mt-3 text-xs font-semibold text-slate-500">
                Fecha de solicitud:{" "}
                {resetRequest
                  ? new Date(
                      resetRequest.requestedAt
                    ).toLocaleString("es-MX")
                  : ""}
              </p>
            </div>
          )}

          <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between">
            <div>
              {previousStep ? (
                <Link
                  href={`${basePath}/${encodeURIComponent(previousStep.id)}`}
                  className="inline-flex rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#061b3a] transition hover:bg-slate-50"
                >
                  ← Anterior
                </Link>
              ) : (
                <span className="inline-flex rounded-2xl border border-slate-100 bg-slate-100 px-5 py-3 text-sm font-bold text-slate-400">
                  ← Anterior
                </span>
              )}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              {nextStep ? (
                canNavigateToNextStep ? (
                  <Link
                    href={`${basePath}/${encodeURIComponent(nextStep.id)}`}
                    className="inline-flex justify-center rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#061b3a]"
                  >
                    Siguiente →
                  </Link>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex cursor-not-allowed justify-center rounded-2xl bg-slate-300 px-5 py-3 text-sm font-bold text-white"
                  >
                    Completa este paso
                  </button>
                )
              ) : routeCompleted ? (
                <Link
                  href={`${basePath}/finalizado`}
                  className="inline-flex justify-center rounded-2xl bg-[#c78b3a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#a66f24]"
                >
                  Finalizar ruta
                </Link>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-not-allowed justify-center rounded-2xl bg-slate-300 px-5 py-3 text-sm font-bold text-white"
                >
                  Aprueba la evaluación final
                </button>
              )}
            </div>
          </div>
        </article>
      )}
      </div>
    </>
  );
}