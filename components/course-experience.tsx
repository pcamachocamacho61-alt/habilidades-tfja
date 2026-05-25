"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { LearningStep } from "@/types/learning";
import { CourseStepSidebar } from "@/components/course-step-sidebar";
import { ProgressBar } from "@/components/progress-bar";
import { FinalEvaluationPanel } from "@/components/final-evaluation-panel";
import { getProgressByCompletedIds } from "@/lib/progress";

type CourseExperienceProps = {
  steps: LearningStep[];
  currentStep: LearningStep;
};

const STORAGE_KEY = "habilidades-tfja:onedrive-descubre:completed";

export function CourseExperience({
  steps,
  currentStep,
}: CourseExperienceProps) {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answerStatus, setAnswerStatus] = useState<
    "idle" | "correct" | "incorrect"
  >("idle");

  useEffect(() => {
    const savedValue = window.localStorage.getItem(STORAGE_KEY);

    if (savedValue) {
      setCompletedIds(JSON.parse(savedValue));
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(completedIds));
    }
  }, [completedIds, loaded]);

  useEffect(() => {
    setSelectedAnswer("");
    setAnswerStatus("idle");
  }, [currentStep.id]);

  const currentIndex = steps.findIndex((step) => step.id === currentStep.id);
  const previousStep = currentIndex > 0 ? steps[currentIndex - 1] : null;
  const nextStep =
    currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null;

  const progress = useMemo(() => {
    return getProgressByCompletedIds(steps.length, completedIds);
  }, [steps.length, completedIds]);

  const currentStepCompleted = completedIds.includes(currentStep.id);

  const stepsBeforeFinalEvaluation = steps.filter(
    (step) => step.id !== "evaluacion-final"
  );

  const routeProgressBeforeFinal = Math.round(
    (stepsBeforeFinalEvaluation.filter((step) =>
      completedIds.includes(step.id)
    ).length /
      stepsBeforeFinalEvaluation.length) *
      100
  );

  const canStartFinalEvaluation = routeProgressBeforeFinal === 100;

  const evaluationSteps = steps.filter((step) => step.type === "evaluation");

  const allCheckpointsCompleted = evaluationSteps.every((step) =>
    completedIds.includes(step.id)
  );

  function handleCompleteCurrentStep() {
    if (currentStepCompleted) {
      return;
    }

    setCompletedIds((currentIds) => [...currentIds, currentStep.id]);
  }

  function handleResetProgress() {
    setCompletedIds([]);
  }

  function handleValidateAnswer() {
    const evaluation = currentStep.content.evaluation;

    if (!evaluation || !selectedAnswer) {
      return;
    }

    if (selectedAnswer === evaluation.correctAnswer) {
      setAnswerStatus("correct");

      setCompletedIds((currentIds) => {
        if (currentIds.includes(currentStep.id)) {
          return currentIds;
        }

        return [...currentIds, currentStep.id];
      });

      return;
    }

    setAnswerStatus("incorrect");
  }

  return (
    <div className="grid w-full gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
      <CourseStepSidebar
        steps={steps}
        currentStepId={currentStep.id}
        completedIds={completedIds}
        progress={progress}
      />

      <article className="min-w-0 rounded-[32px] border border-white bg-white/90 p-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col gap-5 border-b border-slate-200 pb-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p
              className={
                currentStep.type === "evaluation"
                  ? "text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]"
                  : "text-sm font-bold uppercase tracking-[0.25em] text-blue-700"
              }
            >
              {currentStep.content.eyebrow}
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#061b3a]">
              {currentStep.content.title}
            </h1>

           <p className="mt-3 text-sm font-semibold text-slate-500">
  {currentStep.type === "welcome"
    ? `Bienvenida · ${currentStep.estimatedTime}`
    : currentStep.type === "evaluation"
      ? "Checkpoint de avance"
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

        <p className="mt-7 text-lg leading-8 text-slate-600">
          {currentStep.content.description}
        </p>

        {currentStep.content.image && (
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

        {currentStep.content.video && (
          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-black shadow-sm">
            <video className="aspect-video w-full" controls preload="metadata">
              <source src={currentStep.content.video} type="video/mp4" />
              Tu navegador no puede reproducir este video.
            </video>
          </div>
        )}

        <div className="mt-8 rounded-3xl bg-[#f5f8fd] p-6">
          <h2 className="text-lg font-bold text-[#061b3a]">
  {currentStep.type === "welcome"
    ? "En esta ruta aprenderás:"
    : currentStep.type === "evaluation"
      ? "Antes de continuar, confirma:"
      : "En este paso lograrás:"}
</h2>

          <ul className="mt-4 space-y-3">
            {currentStep.content.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-slate-700">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#c78b3a]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {currentStep.content.supportMaterials &&
          currentStep.content.supportMaterials.length > 0 && (
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-bold text-[#061b3a]">
                Material de apoyo
              </h2>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {currentStep.content.supportMaterials.map((material) => (
                  <a
                    key={material.url}
                    href={material.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-slate-200 bg-[#f5f8fd] p-4 text-sm font-bold text-[#0b376d] hover:bg-blue-50"
                  >
                    {material.type === "pdf" ? "PDF · " : ""}
                    {material.title}
                  </a>
                ))}
              </div>
            </div>
          )}

        {currentStep.type === "evaluation" ? (
          currentStep.content.finalEvaluation ? (
            <FinalEvaluationPanel
              finalEvaluation={currentStep.content.finalEvaluation}
              currentStepCompleted={currentStepCompleted}
              canStartFinalEvaluation={canStartFinalEvaluation}
              routeProgressBeforeFinal={routeProgressBeforeFinal}
              onApproved={handleCompleteCurrentStep}
            />
          ) : (
            <div className="mt-8 rounded-3xl border border-[#ead7b8] bg-[#fff8ef] p-6">
              <h3 className="text-xl font-bold text-[#061b3a]">
                Evaluación rápida
              </h3>

              {currentStep.content.evaluation ? (
                <>
                  <p className="mt-4 text-base font-semibold leading-7 text-slate-700">
                    {currentStep.content.evaluation.question}
                  </p>

                  <div className="mt-5 space-y-3">
                    {currentStep.content.evaluation.options.map((option) => {
                      const selected = selectedAnswer === option;

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setSelectedAnswer(option);
                            setAnswerStatus("idle");
                          }}
                          className={
                            selected
                              ? "w-full rounded-2xl border border-[#0b376d] bg-blue-50 p-4 text-left text-sm font-bold text-[#061b3a]"
                              : "w-full rounded-2xl border border-slate-200 bg-white p-4 text-left text-sm font-semibold text-slate-600 hover:bg-blue-50"
                          }
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>

                  {answerStatus === "correct" && (
                    <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-700">
                      Respuesta correcta. Checkpoint completado.
                    </div>
                  )}

                  {answerStatus === "incorrect" && (
                    <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700">
                      Respuesta incorrecta. Revisa el contenido e intenta
                      nuevamente.
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleValidateAnswer}
                    disabled={!selectedAnswer || currentStepCompleted}
                    className={
                      currentStepCompleted
                        ? "mt-5 rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white"
                        : !selectedAnswer
                          ? "mt-5 cursor-not-allowed rounded-2xl bg-slate-300 px-6 py-3 text-sm font-bold text-white"
                          : "mt-5 rounded-2xl bg-[#c78b3a] px-6 py-3 text-sm font-bold text-white hover:bg-[#a66f24]"
                    }
                  >
                    {currentStepCompleted
                      ? "Checkpoint completado"
                      : "Validar respuesta"}
                  </button>
                </>
              ) : (
                <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-amber-700">
                  Esta evaluación aún no tiene pregunta configurada.
                </div>
              )}
            </div>
          )
        ) : (
          <button
            type="button"
            onClick={handleCompleteCurrentStep}
            className={
              currentStepCompleted
                ? "mt-8 rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white"
                : "mt-8 rounded-2xl bg-[#0b376d] px-6 py-3 text-sm font-bold text-white hover:bg-[#061b3a]"
            }
          >
            {currentStepCompleted
              ? "Paso completado"
              : "Marcar paso como completado"}
          </button>
        )}

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between">
          <div>
            {previousStep ? (
              <Link
                href={`/herramientas-digitales/onedrive/descubre/${previousStep.id}`}
                className="inline-flex rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#061b3a] hover:bg-slate-50"
              >
                ← Anterior
              </Link>
            ) : (
              <span className="inline-flex rounded-2xl border border-slate-100 bg-slate-100 px-5 py-3 text-sm font-bold text-slate-400">
                ← Anterior
              </span>
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleResetProgress}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-500 hover:bg-slate-50"
            >
              Reiniciar avance
            </button>

            {nextStep ? (
              <Link
                href={`/herramientas-digitales/onedrive/descubre/${nextStep.id}`}
                className="inline-flex rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white hover:bg-[#061b3a]"
              >
                Siguiente →
              </Link>
            ) : allCheckpointsCompleted ? (
              <Link
                href="/herramientas-digitales/onedrive/descubre/finalizado"
                className="inline-flex rounded-2xl bg-[#c78b3a] px-5 py-3 text-sm font-bold text-white hover:bg-[#a66f24]"
              >
                Finalizar ruta
              </Link>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex cursor-not-allowed rounded-2xl bg-slate-300 px-5 py-3 text-sm font-bold text-white"
              >
                Completa los checkpoints
              </button>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}