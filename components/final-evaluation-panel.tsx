"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BadgeType, FinalEvaluation } from "@/types/learning";
import { getCurrentEvaluationAttempts, saveBadgeInDatabase, saveEvaluationAttemptInDatabase } from "@/lib/learning-api";

type FinalEvaluationPanelProps = {
  finalEvaluation: FinalEvaluation;
  routeId?: string;
  toolId?: string;
  levelId?: string;
  currentStepCompleted: boolean;
  canStartFinalEvaluation: boolean;
  routeProgressBeforeFinal: number;
  onApproved: () => void;
  onAttemptsExhausted?: () => void;
};

type EvaluationAttempt = {
  attemptNumber: number;
  correctAnswers: number;
  wrongAnswers: number;
  approved: boolean;
  completedAt: string;
};

type FinalResult = {
  correctAnswers: number;
  wrongAnswers: number;
  approved: boolean;
  badge: BadgeType;
  attemptNumber: number;
  accumulatedCorrectAnswers: number;
  bestCorrectAnswers: number;
  completedAt: string;
};

type StoredFinalProgress = {
  attemptsUsed: number;
  bestCorrectAnswers: number;
  approved: boolean;
  badge: BadgeType;
  accumulatedCorrectAnswers: number;
  attempts: EvaluationAttempt[];
};

type EvaluationView = "intro" | "questions" | "summary" | "result";

const BADGE_UPDATED_EVENT = "habilidades-tfja:badge-updated";

function createInitialProgress(): StoredFinalProgress {
  return {
    attemptsUsed: 0,
    bestCorrectAnswers: 0,
    approved: false,
    badge: "repeat",
    accumulatedCorrectAnswers: 0,
    attempts: [],
  };
}

function shuffleQuestionIndexes(totalQuestions: number): number[] {
  const indexes = Array.from({ length: totalQuestions }, (_, index) => index);

  for (let currentIndex = indexes.length - 1; currentIndex > 0; currentIndex--) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));

    [indexes[currentIndex], indexes[randomIndex]] = [
      indexes[randomIndex],
      indexes[currentIndex],
    ];
  }

  return indexes;
}

function getBadgeByFinalScore(correctAnswers: number): BadgeType {
  if (correctAnswers === 10) {
    return "gold";
  }

  if (correctAnswers >= 8) {
    return "silver";
  }

  if (correctAnswers === 7) {
    return "bronze";
  }

  return "repeat";
}

function getBadgeLabel(badge: BadgeType): string {
  if (badge === "gold") {
    return "OneDrive Oro";
  }

  if (badge === "silver") {
    return "OneDrive Plata";
  }

  if (badge === "bronze") {
    return "OneDrive Bronce";
  }

  return "Repetir";
}

function getBadgeStyles(badge: BadgeType): string {
  if (badge === "gold") {
    return "border-yellow-300 bg-yellow-50 text-yellow-800";
  }

  if (badge === "silver") {
    return "border-slate-300 bg-slate-50 text-slate-700";
  }

  if (badge === "bronze") {
    return "border-orange-300 bg-orange-50 text-orange-800";
  }

  return "border-red-200 bg-red-50 text-red-700";
}

function formatAttemptDate(value: string): string {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Fecha no disponible";
  }

  return date.toLocaleString("es-MX", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function FinalEvaluationPanel({
  finalEvaluation,
  routeId = "onedrive-descubre",
  toolId = "onedrive",
  levelId = "descubre",
  currentStepCompleted,
  canStartFinalEvaluation,
  routeProgressBeforeFinal,
  onApproved,
  onAttemptsExhausted,
}: FinalEvaluationPanelProps) {
  const evaluationId =
    finalEvaluation.id ?? `${routeId}-evaluacion-final`;
  const badgeStorageKey = `habilidades-tfja:${routeId}:badge`;

  const storageKey = `htfja-final-${evaluationId}`;
  const resultStorageKey = `${storageKey}-result`;

  const timeLimitMinutes = finalEvaluation.timeLimitMinutes ?? 10;
  const totalSeconds = timeLimitMinutes * 60;
  const totalQuestions = Math.min(
    finalEvaluation.questionCount ?? finalEvaluation.questions.length,
    finalEvaluation.questions.length
  );

  const [view, setView] = useState<EvaluationView>("intro");
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>(
    {}
  );
  const [questionOrder, setQuestionOrder] = useState<number[]>(() =>
    shuffleQuestionIndexes(finalEvaluation.questions.length).slice(
      0,
      totalQuestions
    )
  );
  const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);
  const [progress, setProgress] =
    useState<StoredFinalProgress>(createInitialProgress);
  const [result, setResult] = useState<FinalResult | null>(null);
  const [currentQuestionPosition, setCurrentQuestionPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const answeredQuestions = useMemo(
    () => Object.keys(selectedAnswers).length,
    [selectedAnswers]
  );

  const pendingQuestions = totalQuestions - answeredQuestions;

  const attemptsRemaining = Math.max(
    finalEvaluation.maxAttempts - progress.attemptsUsed,
    0
  );

  const attemptsExhausted =
    !progress.approved &&
    progress.attemptsUsed >= finalEvaluation.maxAttempts;

  const canStart =
    attemptsRemaining > 0 &&
    !currentStepCompleted &&
    !progress.approved &&
    canStartFinalEvaluation;

  const currentQuestionOriginalIndex =
    questionOrder[currentQuestionPosition];

  const currentQuestion =
    finalEvaluation.questions[currentQuestionOriginalIndex];

  const selectedCurrentAnswer =
    selectedAnswers[currentQuestionOriginalIndex];

  const isFirstQuestion = currentQuestionPosition === 0;
  const isLastQuestion =
    currentQuestionPosition === questionOrder.length - 1;

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  useEffect(() => {
    try {
      const storedProgress = window.localStorage.getItem(storageKey);
      const storedResult = window.localStorage.getItem(resultStorageKey);

      if (storedProgress) {
        const parsedProgress = JSON.parse(
          storedProgress
        ) as Partial<StoredFinalProgress>;

        const bestCorrectAnswers =
          Number(parsedProgress.bestCorrectAnswers) || 0;

        const badge = getBadgeByFinalScore(bestCorrectAnswers);

        setProgress({
          attemptsUsed: Number(parsedProgress.attemptsUsed) || 0,
          bestCorrectAnswers,
          approved: Boolean(parsedProgress.approved),
          badge,
          accumulatedCorrectAnswers: bestCorrectAnswers,
          attempts: Array.isArray(parsedProgress.attempts)
            ? parsedProgress.attempts
            : [],
        });
      }

      if (storedResult) {
        const parsedResult = JSON.parse(
          storedResult
        ) as Partial<FinalResult>;

        const bestCorrectAnswers =
          Number(parsedResult.bestCorrectAnswers) ||
          Number(parsedResult.accumulatedCorrectAnswers) ||
          Number(parsedResult.correctAnswers) ||
          0;

        const normalizedResult: FinalResult = {
          correctAnswers: Number(parsedResult.correctAnswers) || 0,
          wrongAnswers:
            Number(parsedResult.wrongAnswers) ||
            Math.max(totalQuestions - (Number(parsedResult.correctAnswers) || 0), 0),
          approved: Boolean(parsedResult.approved),
          badge: getBadgeByFinalScore(bestCorrectAnswers),
          attemptNumber: Number(parsedResult.attemptNumber) || 1,
          accumulatedCorrectAnswers: bestCorrectAnswers,
          bestCorrectAnswers,
          completedAt:
            typeof parsedResult.completedAt === "string"
              ? parsedResult.completedAt
              : new Date().toISOString(),
        };

        setResult(normalizedResult);
        setView("result");
      }
    } catch {
      setProgress(createInitialProgress());
      setResult(null);
      setView("intro");
    } finally {
      setIsLoaded(true);
    }
  }, [resultStorageKey, storageKey, totalQuestions]);

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    try {
      window.localStorage.setItem(storageKey, JSON.stringify(progress));
    } catch {
      // La evaluación continúa funcionando aunque localStorage falle.
    }
  }, [isLoaded, progress, storageKey]);

  useEffect(() => {
    if (currentStepCompleted && isLoaded && !progress.approved) {
      setProgress((currentProgress) => ({
        ...currentProgress,
        approved: true,
      }));
    }
  }, [currentStepCompleted, isLoaded, progress.approved]);

  useEffect(() => {
    if (attemptsExhausted) {
      onAttemptsExhausted?.();
    }
  }, [attemptsExhausted, onAttemptsExhausted]);

  useEffect(() => {
    if (view !== "questions") {
      return;
    }

    if (remainingSeconds <= 0) {
      finishEvaluation();
      return;
    }

    const intervalId = window.setInterval(() => {
      setRemainingSeconds((currentSeconds) =>
        Math.max(currentSeconds - 1, 0)
      );
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [remainingSeconds, view]);

  function handleStart() {
    if (!canStart) {
      return;
    }

    setSelectedAnswers({});
    setQuestionOrder(
      shuffleQuestionIndexes(finalEvaluation.questions.length).slice(
        0,
        totalQuestions
      )
    );
    setCurrentQuestionPosition(0);
    setRemainingSeconds(totalSeconds);
    setResult(null);
    setView("questions");
  }

  function handleSelectAnswer(questionIndex: number, answer: string) {
    if (view !== "questions") {
      return;
    }

    setSelectedAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionIndex]: answer,
    }));
  }

  function handlePreviousQuestion() {
    if (isFirstQuestion) {
      return;
    }

    setCurrentQuestionPosition(
      (currentPosition) => currentPosition - 1
    );
  }

  function handleNextQuestion() {
    if (isLastQuestion) {
      return;
    }

    setCurrentQuestionPosition(
      (currentPosition) => currentPosition + 1
    );
  }

  function handleGoToSummary() {
    if (answeredQuestions !== totalQuestions) {
      return;
    }

    setView("summary");
  }

  function finishEvaluation() {
    if (view === "result" || progress.approved || attemptsExhausted) {
      return;
    }

    const correctAnswers = questionOrder.reduce(
      (totalCorrect, questionIndex) => {
        const question = finalEvaluation.questions[questionIndex];
        const selectedAnswer = selectedAnswers[questionIndex];

        return selectedAnswer === question.correctAnswer
          ? totalCorrect + 1
          : totalCorrect;
      },
      0
    );

    const wrongAnswers = totalQuestions - correctAnswers;
    const nextAttemptNumber = progress.attemptsUsed + 1;
    const bestCorrectAnswers = Math.max(
      progress.bestCorrectAnswers,
      correctAnswers
    );
    const evaluationApproved =
      bestCorrectAnswers >= finalEvaluation.minimumCorrectAnswers;
    const badge = getBadgeByFinalScore(bestCorrectAnswers);
    const completedAt = new Date().toISOString();

    const currentAttempt: EvaluationAttempt = {
      attemptNumber: nextAttemptNumber,
      correctAnswers,
      wrongAnswers,
      approved:
        correctAnswers >= finalEvaluation.minimumCorrectAnswers,
      completedAt,
    };

    const finalResult: FinalResult = {
      correctAnswers,
      wrongAnswers,
      approved: evaluationApproved,
      badge,
      attemptNumber: nextAttemptNumber,
      accumulatedCorrectAnswers: bestCorrectAnswers,
      bestCorrectAnswers,
      completedAt,
    };

    const newProgress: StoredFinalProgress = {
      attemptsUsed: nextAttemptNumber,
      bestCorrectAnswers,
      approved: evaluationApproved,
      badge,
      accumulatedCorrectAnswers: bestCorrectAnswers,
      attempts: [...progress.attempts, currentAttempt],
    };

    setProgress(newProgress);
    setResult(finalResult);
    setView("result");

    try {
      window.localStorage.setItem(
        resultStorageKey,
        JSON.stringify(finalResult)
      );
      window.localStorage.setItem(storageKey, JSON.stringify(newProgress));

      if (badge === "repeat") {
        window.localStorage.removeItem(badgeStorageKey);
      } else {
        window.localStorage.setItem(badgeStorageKey, badge);
      }

      window.dispatchEvent(new CustomEvent(BADGE_UPDATED_EVENT));
    } catch {
      // La evaluación mantiene su resultado en memoria.
    }

    void saveEvaluationAttemptInDatabase({
      routeId,
      evaluationId,
      evaluationType: "final",
      attemptNumber: nextAttemptNumber,
      correctAnswers,
      wrongAnswers,
      approved: currentAttempt.approved,
      bestCorrectAnswers,
      selectedAnswers,
      durationSeconds: totalSeconds - remainingSeconds,
      completedAt,
    }).catch((error) => console.error("No fue posible guardar la evaluación final en MongoDB:", error));

    if (badge !== "repeat") {
      void saveBadgeInDatabase({
        routeId,
        toolId,
        level: levelId as "descubre" | "potencia",
        badgeType: badge,
        score: bestCorrectAnswers,
      }).catch((error) => console.error("No fue posible guardar la insignia en MongoDB:", error));
    }

    if (evaluationApproved) {
      onApproved();
      return;
    }

    if (nextAttemptNumber >= finalEvaluation.maxAttempts) {
      onAttemptsExhausted?.();
    }
  }

  function handleRetry() {
    if (
      progress.approved ||
      progress.attemptsUsed >= finalEvaluation.maxAttempts
    ) {
      return;
    }

    try {
      window.localStorage.removeItem(resultStorageKey);
    } catch {
      // La evaluación puede reiniciarse en memoria.
    }

    setSelectedAnswers({});
    setQuestionOrder(
      shuffleQuestionIndexes(finalEvaluation.questions.length).slice(
        0,
        totalQuestions
      )
    );
    setCurrentQuestionPosition(0);
    setRemainingSeconds(totalSeconds);
    setResult(null);
    setView("intro");
  }

  if (!isLoaded) {
    return (
      <div className="mt-6 rounded-3xl border border-[#ead7b8] bg-[#fff8ef] p-4 sm:p-5">
        <p className="text-sm font-bold text-slate-600">
          Cargando evaluación final...
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-3xl border border-[#ead7b8] bg-[#fff8ef] p-4 sm:p-5">
      <div className="flex flex-col gap-4 border-b border-[#ead7b8] pb-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c78b3a]">
            {finalEvaluation.title ?? "Evaluación final"}
          </p>

          <h3 className="mt-2 text-xl font-bold text-[#061b3a]">
            Evaluación final
          </h3>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Responde las {totalQuestions} preguntas. Para aprobar necesitas al
            menos{" "}
            <strong>
              {finalEvaluation.minimumCorrectAnswers} respuestas correctas
            </strong>
            . Tienes un máximo de{" "}
            <strong>{finalEvaluation.maxAttempts} intentos</strong>.
          </p>
        </div>

        <div className="w-full rounded-2xl bg-white px-5 py-4 text-center shadow-sm md:w-auto md:min-w-[140px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Tiempo
          </p>

          <p
            className={
              remainingSeconds <= 120
                ? "mt-1 text-2xl font-black text-red-600"
                : "mt-1 text-2xl font-black text-[#061b3a]"
            }
          >
            {formattedTime}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            Intentos usados
          </p>

          <p className="mt-1 text-xl font-black text-[#061b3a]">
            {progress.attemptsUsed}/{finalEvaluation.maxAttempts}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            Contestadas
          </p>

          <p className="mt-1 text-xl font-black text-[#061b3a]">
            {answeredQuestions}/{totalQuestions}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            Mejor resultado
          </p>

          <p className="mt-1 text-xl font-black text-[#061b3a]">
            {progress.bestCorrectAnswers}/{totalQuestions}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            Estado
          </p>

          <p className="mt-1 text-xl font-black text-[#061b3a]">
            {currentStepCompleted || progress.approved
              ? "Aprobada"
              : attemptsExhausted
                ? "Bloqueada"
                : "Pendiente"}
          </p>
        </div>
      </div>

      {!canStartFinalEvaluation && !currentStepCompleted && (
        <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
            Evaluación bloqueada
          </p>

          <h4 className="mt-2 text-xl font-black text-[#061b3a]">
            Completa primero la ruta
          </h4>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Para iniciar la evaluación final necesitas completar todos los
            pasos y aprobar las dos evaluaciones previas. Tu avance actual antes
            de la evaluación final es de{" "}
            <strong>{routeProgressBeforeFinal}%</strong>.
          </p>

          <Link
            href="/herramientas-digitales/onedrive/descubre/paso-1"
            className="mt-5 inline-flex w-full justify-center rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#061b3a] sm:w-auto"
          >
            Continuar ruta
          </Link>
        </div>
      )}

      {view === "intro" && (
        <div className="mt-6 rounded-3xl bg-white p-5 sm:p-5">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Antes de iniciar
          </p>

          <h4 className="mt-3 text-2xl font-black text-[#061b3a]">
            Reglas de la evaluación
          </h4>

          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <li>• Tendrás {timeLimitMinutes} minutos.</li>
            <li>• La evaluación contiene {totalQuestions} preguntas.</li>
            <li>
              • Debes obtener al menos{" "}
              {finalEvaluation.minimumCorrectAnswers} respuestas correctas.
            </li>
            <li>
              • Cuentas con un máximo de {finalEvaluation.maxAttempts} intentos.
            </li>
            <li>• Se conservará tu mejor número de aciertos.</li>
            <li>
              • La insignia se calcula únicamente con el mejor resultado de esta
              evaluación final.
            </li>
          </ul>

          <button
            type="button"
            onClick={handleStart}
            disabled={!canStart}
            className={
              canStart
                ? "mt-6 w-full rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#061b3a] sm:w-auto"
                : "mt-6 w-full cursor-not-allowed rounded-2xl bg-slate-300 px-5 py-3 text-sm font-bold text-white sm:w-auto"
            }
          >
            {!canStartFinalEvaluation
              ? "Completa la ruta para iniciar"
              : progress.approved
                ? "Evaluación aprobada"
                : attemptsRemaining > 0
                  ? "Iniciar evaluación final"
                  : "Intentos agotados"}
          </button>
        </div>
      )}

      {view === "questions" && currentQuestion && (
        <div className="mt-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5">
            <div className="flex flex-col gap-4 border-b border-slate-200 pb-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c78b3a]">
                  Pregunta {currentQuestionPosition + 1} de {totalQuestions}
                </p>

                <h4 className="mt-2 text-lg font-bold leading-8 text-[#061b3a] sm:text-xl">
                  {currentQuestion.question}
                </h4>
              </div>

              <div className="w-full rounded-2xl bg-[#f5f8fd] px-4 py-3 text-center text-sm font-bold text-[#061b3a] md:w-auto">
                Contestadas: {answeredQuestions}/{totalQuestions}
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {currentQuestion.options.map((option) => {
                const selected = selectedCurrentAnswer === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() =>
                      handleSelectAnswer(
                        currentQuestionOriginalIndex,
                        option
                      )
                    }
                    className={
                      selected
                        ? "w-full rounded-2xl border border-[#0b376d] bg-[#eaf2ff] p-4 text-left text-sm font-bold leading-6 text-[#061b3a]"
                        : "w-full rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 text-left text-sm font-semibold leading-6 text-slate-600 transition hover:border-[#b8c9e6] hover:bg-[#eaf2ff]"
                    }
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={handlePreviousQuestion}
                disabled={isFirstQuestion}
                className={
                  isFirstQuestion
                    ? "w-full cursor-not-allowed rounded-2xl border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-bold text-slate-400 sm:w-auto"
                    : "w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#061b3a] transition hover:bg-slate-50 sm:w-auto"
                }
              >
                ← Anterior
              </button>

              {!isLastQuestion ? (
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="w-full rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#061b3a] sm:w-auto"
                >
                  Siguiente →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleGoToSummary}
                  disabled={answeredQuestions !== totalQuestions}
                  className={
                    answeredQuestions !== totalQuestions
                      ? "w-full cursor-not-allowed rounded-2xl bg-slate-300 px-5 py-3 text-sm font-bold text-white sm:w-auto"
                      : "w-full rounded-2xl bg-[#c78b3a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#a66f24] sm:w-auto"
                  }
                >
                  {answeredQuestions !== totalQuestions
                    ? "Responde todas"
                    : "Revisar y enviar"}
                </button>
              )}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {questionOrder.map((originalIndex, position) => {
              const answered = Boolean(selectedAnswers[originalIndex]);
              const active = position === currentQuestionPosition;

              return (
                <button
                  key={originalIndex}
                  type="button"
                  onClick={() => setCurrentQuestionPosition(position)}
                  className={
                    active
                      ? "h-3 min-w-8 flex-1 rounded-full bg-[#0b376d]"
                      : answered
                        ? "h-3 min-w-8 flex-1 rounded-full bg-[#c78b3a]"
                        : "h-3 min-w-8 flex-1 rounded-full bg-slate-300"
                  }
                  aria-label={`Ir a pregunta ${position + 1}`}
                />
              );
            })}
          </div>
        </div>
      )}

      {view === "summary" && (
        <div className="mt-6 rounded-3xl bg-white p-5 sm:p-5">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Resumen antes de enviar
          </p>

          <h4 className="mt-3 text-2xl font-black text-[#061b3a]">
            Confirma tu evaluación
          </h4>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-[#f5f8fd] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Contestadas
              </p>

              <p className="mt-1 text-xl font-black text-[#061b3a]">
                {answeredQuestions}
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f8fd] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Pendientes
              </p>

              <p className="mt-1 text-xl font-black text-[#061b3a]">
                {pendingQuestions}
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f8fd] p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Tiempo restante
              </p>

              <p className="mt-1 text-xl font-black text-[#061b3a]">
                {formattedTime}
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            Al enviar, este intento quedará registrado. Se conservará el mayor
            número de aciertos obtenido entre los intentos realizados.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setView("questions")}
              className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#061b3a] transition hover:bg-slate-50 sm:w-auto"
            >
              Regresar a revisar
            </button>

            <button
              type="button"
              onClick={finishEvaluation}
              disabled={answeredQuestions !== totalQuestions}
              className={
                answeredQuestions !== totalQuestions
                  ? "w-full cursor-not-allowed rounded-2xl bg-slate-300 px-5 py-3 text-sm font-bold text-white sm:w-auto"
                  : "w-full rounded-2xl bg-[#c78b3a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#a66f24] sm:w-auto"
              }
            >
              Enviar evaluación
            </button>
          </div>
        </div>
      )}

      {view === "result" && result && (
        <div className="mt-6 rounded-3xl bg-white p-5 sm:p-5">
          <p
            className={
              result.approved
                ? "text-sm font-bold uppercase tracking-[0.25em] text-emerald-600"
                : "text-sm font-bold uppercase tracking-[0.25em] text-red-600"
            }
          >
            {result.approved
              ? "Evaluación aprobada"
              : "Evaluación no aprobada"}
          </p>

          <h4 className="mt-3 text-2xl font-black text-[#061b3a]">
            Resultado del intento: {result.correctAnswers} correctas y{" "}
            {result.wrongAnswers} incorrectas
          </h4>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Intento registrado: {result.attemptNumber} de{" "}
            {finalEvaluation.maxAttempts}. Fecha:{" "}
            {formatAttemptDate(result.completedAt)}.
          </p>

          <div className="mt-5 rounded-3xl border border-[#b8c9e6] bg-[#eaf2ff] p-5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0b376d]">
              Mejor resultado de la evaluación final
            </p>

            <p className="mt-2 text-2xl font-black text-[#061b3a]">
              {result.bestCorrectAnswers}/{totalQuestions}
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              La Evaluación 1 y la Evaluación 2 funcionan como checkpoints de
              avance y no se suman para determinar la insignia.
            </p>
          </div>

          <div
            className={`mt-5 rounded-3xl border p-5 ${getBadgeStyles(
              result.badge
            )}`}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em]">
              Resultado de insignia
            </p>

            <p className="mt-2 text-2xl font-black">
              {getBadgeLabel(result.badge)}
            </p>
          </div>

          {progress.attempts.length > 0 && (
            <div className="mt-5 rounded-3xl border border-slate-200 bg-[#f8fafc] p-5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                Historial de intentos
              </p>

              <div className="mt-4 space-y-3">
                {progress.attempts.map((attempt) => (
                  <div
                    key={`${attempt.attemptNumber}-${attempt.completedAt}`}
                    className="flex flex-col gap-2 rounded-2xl bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="font-bold text-[#061b3a]">
                        Intento {attempt.attemptNumber}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {formatAttemptDate(attempt.completedAt)}
                      </p>
                    </div>

                    <p
                      className={
                        attempt.approved
                          ? "text-sm font-black text-emerald-600"
                          : "text-sm font-black text-red-600"
                      }
                    >
                      {attempt.correctAnswers}/{totalQuestions} aciertos
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {!result.approved &&
              progress.attemptsUsed < finalEvaluation.maxAttempts && (
                <button
                  type="button"
                  onClick={handleRetry}
                  className="w-full rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#061b3a] sm:w-auto"
                >
                  Realizar segundo intento
                </button>
              )}

            {!result.approved && attemptsExhausted && (
              <>
                <Link
                  href="/herramientas-digitales/onedrive/descubre/paso-1"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-bold text-[#061b3a] transition hover:bg-slate-50 sm:w-auto"
                >
                  Repasar ruta
                </Link>

                <div className="w-full rounded-2xl bg-amber-100 px-5 py-3 text-center text-sm font-bold text-amber-800 sm:w-auto">
                  Solicitud de reinicio disponible
                </div>
              </>
            )}

            {result.approved && (
              <div className="w-full rounded-2xl bg-emerald-600 px-5 py-3 text-center text-sm font-bold text-white sm:w-auto">
                Ruta completada
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
