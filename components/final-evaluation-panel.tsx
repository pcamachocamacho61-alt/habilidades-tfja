"use client";

import { useEffect, useMemo, useState } from "react";
import { BadgeType, FinalEvaluation } from "@/types/learning";

type FinalEvaluationPanelProps = {
  finalEvaluation: FinalEvaluation;
  currentStepCompleted: boolean;
  canStartFinalEvaluation: boolean;
  routeProgressBeforeFinal: number;
  onApproved: () => void;
};

type FinalResult = {
  correctAnswers: number;
  wrongAnswers: number;
  approved: boolean;
  badge: BadgeType | null;
  attemptNumber: number;
};

type EvaluationView = "intro" | "questions" | "summary" | "result";

const ATTEMPTS_KEY = "habilidades-tfja:onedrive-descubre:final-attempts";
const RESULT_KEY = "habilidades-tfja:onedrive-descubre:final-result";
const BADGE_KEY = "habilidades-tfja:onedrive-descubre:badge";

export function FinalEvaluationPanel({
  finalEvaluation,
  currentStepCompleted,
  canStartFinalEvaluation,
  routeProgressBeforeFinal,
  onApproved,
}: FinalEvaluationPanelProps) {
  const totalSeconds = finalEvaluation.timeLimitMinutes * 60;

  const [view, setView] = useState<EvaluationView>("intro");
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);
  const [attemptsUsed, setAttemptsUsed] = useState(0);
  const [result, setResult] = useState<FinalResult | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const savedAttempts = window.localStorage.getItem(ATTEMPTS_KEY);
    const savedResult = window.localStorage.getItem(RESULT_KEY);

    if (savedAttempts) {
      setAttemptsUsed(Number(savedAttempts));
    }

    if (savedResult) {
      const parsedResult = JSON.parse(savedResult) as FinalResult;
      setResult(parsedResult);
      setView("result");
    }
  }, []);

  useEffect(() => {
    if (view !== "questions") {
      return;
    }

    if (remainingSeconds <= 0) {
      finishEvaluation();
      return;
    }

    const intervalId = window.setInterval(() => {
      setRemainingSeconds((currentValue) => currentValue - 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [view, remainingSeconds]);

  const answeredQuestions = useMemo(() => {
    return Object.keys(selectedAnswers).length;
  }, [selectedAnswers]);

  const pendingQuestions =
    finalEvaluation.questions.length - answeredQuestions;

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  const attemptsRemaining = finalEvaluation.maxAttempts - attemptsUsed;
  const canStart =
  attemptsRemaining > 0 &&
  !currentStepCompleted &&
  canStartFinalEvaluation;

  const currentQuestion = finalEvaluation.questions[currentQuestionIndex];
  const selectedCurrentAnswer = selectedAnswers[currentQuestionIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion =
    currentQuestionIndex === finalEvaluation.questions.length - 1;

  function getBadge(correctAnswers: number, attemptNumber: number): BadgeType | null {
    if (correctAnswers === 10 && attemptNumber === 1) {
      return "gold";
    }

    if (correctAnswers >= 8) {
      return "silver";
    }

    if (correctAnswers >= 7) {
      return "bronze";
    }

    return null;
  }

  function getBadgeLabel(badge: BadgeType | null): string {
    if (badge === "gold") {
      return "OneDrive Oro";
    }

    if (badge === "silver") {
      return "OneDrive Plata";
    }

    if (badge === "bronze") {
      return "OneDrive Bronce";
    }

    return "Sin insignia";
  }

  function getBadgeStyles(badge: BadgeType | null): string {
    if (badge === "gold") {
      return "border-yellow-300 bg-yellow-50 text-yellow-700";
    }

    if (badge === "silver") {
      return "border-slate-300 bg-slate-50 text-slate-700";
    }

    if (badge === "bronze") {
      return "border-orange-300 bg-orange-50 text-orange-700";
    }

    return "border-slate-200 bg-white text-slate-500";
  }

  function handleStart() {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
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

    setCurrentQuestionIndex((currentIndex) => currentIndex - 1);
  }

  function handleNextQuestion() {
    if (isLastQuestion) {
      return;
    }

    setCurrentQuestionIndex((currentIndex) => currentIndex + 1);
  }

  function handleGoToSummary() {
    if (answeredQuestions < finalEvaluation.questions.length) {
      return;
    }

    setView("summary");
  }

  function finishEvaluation() {
    const correctAnswers = finalEvaluation.questions.reduce(
      (totalCorrect, question, index) => {
        const selectedAnswer = selectedAnswers[index];

        if (selectedAnswer === question.correctAnswer) {
          return totalCorrect + 1;
        }

        return totalCorrect;
      },
      0
    );

    const wrongAnswers = finalEvaluation.questions.length - correctAnswers;
    const nextAttemptNumber = attemptsUsed + 1;
    const approved = correctAnswers >= finalEvaluation.minimumCorrectAnswers;
    const badge = approved ? getBadge(correctAnswers, nextAttemptNumber) : null;

    const finalResult: FinalResult = {
      correctAnswers,
      wrongAnswers,
      approved,
      badge,
      attemptNumber: nextAttemptNumber,
    };

    setAttemptsUsed(nextAttemptNumber);
    setResult(finalResult);
    setView("result");

    window.localStorage.setItem(ATTEMPTS_KEY, String(nextAttemptNumber));
    window.localStorage.setItem(RESULT_KEY, JSON.stringify(finalResult));

    if (badge) {
      window.localStorage.setItem(BADGE_KEY, badge);
    }

    if (approved) {
      onApproved();
    }
  }

  function handleRetry() {
    if (attemptsUsed >= finalEvaluation.maxAttempts) {
      return;
    }

    window.localStorage.removeItem(RESULT_KEY);
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setRemainingSeconds(totalSeconds);
    setResult(null);
    setView("intro");
  }

  function handleResetFinalEvaluation() {
    window.localStorage.removeItem(ATTEMPTS_KEY);
    window.localStorage.removeItem(RESULT_KEY);
    window.localStorage.removeItem(BADGE_KEY);

    setAttemptsUsed(0);
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setRemainingSeconds(totalSeconds);
    setResult(null);
    setView("intro");
  }

  return (
    <div className="mt-8 rounded-3xl border border-[#ead7b8] bg-[#fff8ef] p-6">
      <div className="flex flex-col gap-4 border-b border-[#ead7b8] pb-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#061b3a]">
            Evaluación final
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Responde 10 preguntas. Apruebas con al menos{" "}
            <strong>{finalEvaluation.minimumCorrectAnswers}</strong> correctas.
            Tienes máximo <strong>{finalEvaluation.maxAttempts}</strong> intentos.
          </p>
        </div>

        <div className="rounded-2xl bg-white px-5 py-4 text-center shadow-sm">
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

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Intentos usados
          </p>
          <p className="mt-1 text-xl font-black text-[#061b3a]">
            {attemptsUsed}/{finalEvaluation.maxAttempts}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Contestadas
          </p>
          <p className="mt-1 text-xl font-black text-[#061b3a]">
            {answeredQuestions}/{finalEvaluation.questions.length}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Estado
          </p>
          <p className="mt-1 text-xl font-black text-[#061b3a]">
            {currentStepCompleted ? "Aprobada" : "Pendiente"}
          </p>
        </div>
      </div>
{!canStartFinalEvaluation && (
  <div className="mb-6 rounded-3xl border border-amber-200 bg-amber-50 p-5">
    <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
      Evaluación bloqueada
    </p>

    <h4 className="mt-2 text-xl font-black text-[#061b3a]">
      Completa primero tu ruta
    </h4>

    <p className="mt-3 text-sm leading-7 text-slate-600">
      Para iniciar la evaluación final necesitas tener el 100% de avance en los
      pasos y checkpoints previos. Tu avance actual antes de la evaluación final
      es de <strong>{routeProgressBeforeFinal}%</strong>.
    </p>

    <a
      href="/herramientas-digitales/onedrive/descubre/paso-1"
      className="mt-5 inline-flex rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white hover:bg-[#061b3a]"
    >
      Continuar ruta
    </a>
  </div>
)}
      {view === "intro" && (
        <div className="mt-6 rounded-3xl bg-white p-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Antes de iniciar
          </p>

          <h4 className="mt-3 text-2xl font-black text-[#061b3a]">
            Reglas de la evaluación
          </h4>

          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <li>• Tendrás {finalEvaluation.timeLimitMinutes} minutos.</li>
            <li>• Son {finalEvaluation.questions.length} preguntas.</li>
            <li>• Solo tienes {finalEvaluation.maxAttempts} intentos.</li>
            <li>
              • Apruebas con {finalEvaluation.minimumCorrectAnswers} respuestas
              correctas.
            </li>
            <li>• La insignia dependerá de tu resultado.</li>
          </ul>

         <button
  type="button"
  onClick={handleStart}
  disabled={!canStart}
  className={
    canStart
      ? "mt-6 rounded-2xl bg-[#0b376d] px-6 py-3 text-sm font-bold text-white hover:bg-[#061b3a]"
      : "mt-6 cursor-not-allowed rounded-2xl bg-slate-300 px-6 py-3 text-sm font-bold text-white"
  }
>
  {!canStartFinalEvaluation
    ? "Completa la ruta para iniciar"
    : attemptsRemaining > 0
      ? "Iniciar evaluación final"
      : "Intentos agotados"}
</button>
        </div>
      )}

      {view === "questions" && currentQuestion && (
        <div className="mt-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-5">
            <div className="flex flex-col gap-4 border-b border-slate-200 pb-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c78b3a]">
                  Pregunta {currentQuestionIndex + 1} de{" "}
                  {finalEvaluation.questions.length}
                </p>

                <h4 className="mt-2 text-xl font-bold leading-8 text-[#061b3a]">
                  {currentQuestion.question}
                </h4>
              </div>

              <div className="rounded-2xl bg-[#f5f8fd] px-4 py-3 text-sm font-bold text-[#061b3a]">
                Contestadas: {answeredQuestions}/{finalEvaluation.questions.length}
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
                      handleSelectAnswer(currentQuestionIndex, option)
                    }
                    className={
                      selected
                        ? "w-full rounded-2xl border border-[#0b376d] bg-blue-50 p-4 text-left text-sm font-bold text-[#061b3a]"
                        : "w-full rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 text-left text-sm font-semibold text-slate-600 hover:bg-blue-50"
                    }
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-5 md:flex-row md:items-center md:justify-between">
              <button
                type="button"
                onClick={handlePreviousQuestion}
                disabled={isFirstQuestion}
                className={
                  isFirstQuestion
                    ? "rounded-2xl border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-bold text-slate-400"
                    : "rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#061b3a] hover:bg-slate-50"
                }
              >
                ← Anterior
              </button>

              <div className="flex flex-col gap-3 sm:flex-row">
                {!isLastQuestion ? (
                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white hover:bg-[#061b3a]"
                  >
                    Siguiente →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleGoToSummary}
                    disabled={answeredQuestions < finalEvaluation.questions.length}
                    className={
                      answeredQuestions < finalEvaluation.questions.length
                        ? "cursor-not-allowed rounded-2xl bg-slate-300 px-6 py-3 text-sm font-bold text-white"
                        : "rounded-2xl bg-[#c78b3a] px-6 py-3 text-sm font-bold text-white hover:bg-[#a66f24]"
                    }
                  >
                    {answeredQuestions < finalEvaluation.questions.length
                      ? "Responde todas"
                      : "Revisar y enviar"}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-10 gap-2">
            {finalEvaluation.questions.map((_, index) => {
              const answered = Boolean(selectedAnswers[index]);
              const active = index === currentQuestionIndex;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={
                    active
                      ? "h-3 rounded-full bg-[#0b376d]"
                      : answered
                        ? "h-3 rounded-full bg-[#c78b3a]"
                        : "h-3 rounded-full bg-slate-300"
                  }
                  aria-label={`Ir a pregunta ${index + 1}`}
                />
              );
            })}
          </div>
        </div>
      )}

      {view === "summary" && (
        <div className="mt-6 rounded-3xl bg-white p-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Resumen antes de enviar
          </p>

          <h4 className="mt-3 text-2xl font-black text-[#061b3a]">
            Confirma tu evaluación
          </h4>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
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
            Al enviar, este intento quedará registrado. No se mostrarán las
            respuestas correctas para conservar la validez del segundo intento.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setView("questions")}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#061b3a] hover:bg-slate-50"
            >
              Regresar a revisar
            </button>

            <button
              type="button"
              onClick={finishEvaluation}
              className="rounded-2xl bg-[#c78b3a] px-6 py-3 text-sm font-bold text-white hover:bg-[#a66f24]"
            >
              Enviar evaluación
            </button>
          </div>
        </div>
      )}

      {view === "result" && result && (
        <div className="mt-6 rounded-3xl bg-white p-6">
          <p
            className={
              result.approved
                ? "text-sm font-bold uppercase tracking-[0.25em] text-emerald-600"
                : "text-sm font-bold uppercase tracking-[0.25em] text-red-600"
            }
          >
            {result.approved ? "Evaluación aprobada" : "Evaluación no aprobada"}
          </p>

          <h4 className="mt-3 text-2xl font-black text-[#061b3a]">
            Resultado: {result.correctAnswers} correctas y{" "}
            {result.wrongAnswers} incorrectas
          </h4>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Intento registrado: {result.attemptNumber} de{" "}
            {finalEvaluation.maxAttempts}.
          </p>

          <div
            className={`mt-5 rounded-3xl border p-5 ${getBadgeStyles(
              result.badge
            )}`}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em]">
              Insignia obtenida
            </p>

            <p className="mt-2 text-2xl font-black">
              {getBadgeLabel(result.badge)}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {!result.approved && attemptsUsed < finalEvaluation.maxAttempts && (
              <button
                type="button"
                onClick={handleRetry}
                className="rounded-2xl bg-[#0b376d] px-6 py-3 text-sm font-bold text-white hover:bg-[#061b3a]"
              >
                Intentar nuevamente
              </button>
            )}

            {!result.approved && attemptsUsed >= finalEvaluation.maxAttempts && (
              <a
                href="/herramientas-digitales/onedrive/descubre/paso-1"
                className="rounded-2xl bg-[#0b376d] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#061b3a]"
              >
                Repasar ruta
              </a>
            )}

            <button
              type="button"
              onClick={handleResetFinalEvaluation}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-500 hover:bg-slate-50"
            >
              Reiniciar evaluación final
            </button>
          </div>
        </div>
      )}
    </div>
  );
}