"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckpointEvaluation, EvaluationAttempt } from "@/types/learning";
import { getCurrentEvaluationAttempts, saveEvaluationAttemptInDatabase } from "@/lib/learning-api";

type CheckpointEvaluationPanelProps = {
  checkpointEvaluation: CheckpointEvaluation;
  routeId?: string;
  currentStepCompleted: boolean;
  onApproved: () => void;
  onAttemptsExhausted?: () => void;
};

type StoredCheckpointProgress = {
  attemptsUsed: number;
  bestCorrectAnswers: number;
  approved: boolean;
  attempts: EvaluationAttempt[];
};

type CheckpointResult = EvaluationAttempt;

function getInitialProgress(): StoredCheckpointProgress {
  return { attemptsUsed: 0, bestCorrectAnswers: 0, approved: false, attempts: [] };
}

function shuffleIndexes(total: number): number[] {
  const indexes = Array.from({ length: total }, (_, index) => index);
  for (let index = indexes.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [indexes[index], indexes[randomIndex]] = [indexes[randomIndex], indexes[index]];
  }
  return indexes;
}

function formatDate(value: string): string {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? "Fecha no disponible"
    : date.toLocaleString("es-MX", { dateStyle: "medium", timeStyle: "short" });
}

export function CheckpointEvaluationPanel({
  checkpointEvaluation,
  routeId = "onedrive-descubre",
  currentStepCompleted,
  onApproved,
  onAttemptsExhausted,
}: CheckpointEvaluationPanelProps) {
  const evaluationId = checkpointEvaluation.id ?? checkpointEvaluation.type;
  const storageKey = `htfja-checkpoint-${evaluationId}`;
  const totalQuestions = checkpointEvaluation.questions.length;
  const maximumAttempts = checkpointEvaluation.maxAttempts;

  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [questionOrder, setQuestionOrder] = useState<number[]>(() =>
    Array.from({ length: totalQuestions }, (_, index) => index)
  );
  const [progress, setProgress] = useState<StoredCheckpointProgress>(getInitialProgress);
  const [result, setResult] = useState<CheckpointResult | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const answeredQuestions = Object.keys(selectedAnswers).length;
  const allAnswered = totalQuestions > 0 && answeredQuestions === totalQuestions;
  const approved = currentStepCompleted || progress.approved;
  const attemptsExhausted = !approved && progress.attemptsUsed >= maximumAttempts;
  const attemptsRemaining = Math.max(maximumAttempts - progress.attemptsUsed, 0);

  useEffect(() => {
    let active = true;
    async function loadProgress() {
      try {
        const databaseAttempts = await getCurrentEvaluationAttempts(routeId, evaluationId);
        if (databaseAttempts.length && active) {
          const attempts = databaseAttempts.map(({ attemptNumber, correctAnswers, wrongAnswers, approved, completedAt }) => ({ attemptNumber, correctAnswers, wrongAnswers, approved, completedAt }));
          setProgress({
            attemptsUsed: attempts.length,
            bestCorrectAnswers: Math.max(0, ...databaseAttempts.map((item) => item.bestCorrectAnswers ?? item.correctAnswers)),
            approved: databaseAttempts.some((item) => item.approved),
            attempts,
          });
        } else {
          const stored = window.localStorage.getItem(storageKey);
          if (stored && active) {
            const parsed = JSON.parse(stored) as Partial<StoredCheckpointProgress>;
            setProgress({ attemptsUsed: Number(parsed.attemptsUsed) || 0, bestCorrectAnswers: Number(parsed.bestCorrectAnswers) || 0, approved: Boolean(parsed.approved), attempts: Array.isArray(parsed.attempts) ? parsed.attempts : [] });
          }
        }
      } catch {
        if (active) setProgress(getInitialProgress());
      } finally {
        if (active) setIsLoaded(true);
      }
    }
    void loadProgress();
    return () => { active = false; };
  }, [evaluationId, routeId, storageKey]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(progress));
    } catch {}
  }, [isLoaded, progress, storageKey]);

  useEffect(() => {
    if (currentStepCompleted && !progress.approved) {
      setProgress((current) => ({
        ...current,
        approved: true,
        bestCorrectAnswers: Math.max(current.bestCorrectAnswers, checkpointEvaluation.minimumCorrectAnswers),
      }));
    }
  }, [checkpointEvaluation.minimumCorrectAnswers, currentStepCompleted, progress.approved]);

  useEffect(() => {
    if (attemptsExhausted) onAttemptsExhausted?.();
  }, [attemptsExhausted, onAttemptsExhausted]);

  function validateCheckpoint() {
    if (!allAnswered || approved || attemptsExhausted || result) return;

    const correctAnswers = checkpointEvaluation.questions.reduce((total, question, index) => {
      return total + (selectedAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
    const wrongAnswers = totalQuestions - correctAnswers;
    const attemptNumber = progress.attemptsUsed + 1;
    const bestCorrectAnswers = Math.max(progress.bestCorrectAnswers, correctAnswers);
    const evaluationApproved = bestCorrectAnswers >= checkpointEvaluation.minimumCorrectAnswers;
    const attempt: EvaluationAttempt = {
      attemptNumber,
      correctAnswers,
      wrongAnswers,
      approved: correctAnswers >= checkpointEvaluation.minimumCorrectAnswers,
      completedAt: new Date().toISOString(),
    };

    const nextProgress: StoredCheckpointProgress = {
      attemptsUsed: attemptNumber,
      bestCorrectAnswers,
      approved: evaluationApproved,
      attempts: [...progress.attempts, attempt],
    };

    setProgress(nextProgress);
    setResult(attempt);

    void saveEvaluationAttemptInDatabase({
      routeId,
      evaluationId,
      evaluationType: checkpointEvaluation.type,
      attemptNumber,
      correctAnswers,
      wrongAnswers,
      approved: attempt.approved,
      bestCorrectAnswers,
      selectedAnswers,
      completedAt: attempt.completedAt,
    }).catch((error) => console.error("No fue posible guardar el intento en MongoDB:", error));

    if (evaluationApproved) onApproved();
    else if (attemptNumber >= maximumAttempts) onAttemptsExhausted?.();
  }

  function retry() {
    if (approved || attemptsExhausted) return;
    setSelectedAnswers({});
    setQuestionOrder(shuffleIndexes(totalQuestions));
    setResult(null);
  }

  if (!isLoaded) {
    return <div className="mt-6 rounded-3xl border border-[#ead7b8] bg-[#fff8ef] p-4 sm:p-5"><p className="text-sm font-bold text-slate-600">Cargando evaluación...</p></div>;
  }

  return (
    <div className="mt-6 rounded-3xl border border-[#ead7b8] bg-[#fff8ef] p-4 sm:p-5">
      <div className="flex flex-col gap-4 border-b border-[#ead7b8] pb-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c78b3a]">{checkpointEvaluation.title ?? "Checkpoint de avance"}</p>
          <h3 className="mt-2 text-xl font-bold text-[#061b3a]">Evaluación obligatoria de avance</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Responde {totalQuestions} preguntas. Necesitas al menos <strong>{checkpointEvaluation.minimumCorrectAnswers} respuestas correctas</strong>. Tienes máximo <strong>{maximumAttempts} intentos</strong>. Este resultado desbloquea el siguiente bloque, pero no suma para la insignia.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-3 md:w-auto">
          <div className="rounded-2xl bg-white px-4 py-3 text-center shadow-sm"><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Intentos</p><p className="mt-1 text-xl font-black text-[#061b3a]">{progress.attemptsUsed}/{maximumAttempts}</p></div>
          <div className="rounded-2xl bg-white px-4 py-3 text-center shadow-sm"><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Mejor</p><p className="mt-1 text-xl font-black text-[#061b3a]">{progress.bestCorrectAnswers}/{totalQuestions}</p></div>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        {questionOrder.map((originalIndex, position) => {
          const question = checkpointEvaluation.questions[originalIndex];
          return (
            <div key={question.id ?? question.question} className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c78b3a]">Pregunta {position + 1}</p>
              <h4 className="mt-2 text-lg font-bold leading-8 text-[#061b3a]">{question.question}</h4>
              <div className="mt-4 space-y-3">
                {question.options.map((option) => {
                  const selected = selectedAnswers[originalIndex] === option;
                  const correct = result && option === question.correctAnswer;
                  const incorrect = result && selected && option !== question.correctAnswer;
                  const className = correct
                    ? "w-full rounded-2xl border border-emerald-300 bg-emerald-50 p-4 text-left text-sm font-bold text-emerald-800"
                    : incorrect
                      ? "w-full rounded-2xl border border-red-300 bg-red-50 p-4 text-left text-sm font-bold text-red-700"
                      : selected
                        ? "w-full rounded-2xl border border-[#0b376d] bg-[#eaf2ff] p-4 text-left text-sm font-bold text-[#061b3a]"
                        : "w-full rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 text-left text-sm font-semibold text-slate-600 transition hover:bg-[#eaf2ff] disabled:cursor-not-allowed";
                  return <button key={option} type="button" disabled={approved || attemptsExhausted || Boolean(result)} onClick={() => setSelectedAnswers((current) => ({ ...current, [originalIndex]: option }))} className={className}>{option}</button>;
                })}
              </div>
            </div>
          );
        })}
      </div>

      {result && (
        <div className={result.approved ? "mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-700" : "mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700"}>
          {result.approved ? `Checkpoint aprobado con ${result.correctAnswers} de ${totalQuestions} respuestas correctas.` : `Intento ${result.attemptNumber}: ${result.correctAnswers} correctas y ${result.wrongAnswers} incorrectas.`}
        </div>
      )}

      {progress.attempts.length > 0 && (
        <div className="mt-5 rounded-2xl bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Historial de intentos</p>
          <div className="mt-3 space-y-2">
            {progress.attempts.map((attempt) => <div key={`${attempt.attemptNumber}-${attempt.completedAt}`} className="flex flex-col gap-1 rounded-xl bg-[#f8fafc] p-3 sm:flex-row sm:items-center sm:justify-between"><span className="text-sm font-bold text-[#061b3a]">Intento {attempt.attemptNumber}: {attempt.correctAnswers}/{totalQuestions}</span><span className="text-xs text-slate-500">{formatDate(attempt.completedAt)}</span></div>)}
          </div>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        {!result && <button type="button" onClick={validateCheckpoint} disabled={!allAnswered || approved || attemptsExhausted} className={!allAnswered || approved || attemptsExhausted ? "w-full cursor-not-allowed rounded-2xl bg-slate-300 px-5 py-3 text-sm font-bold text-white sm:w-auto" : "w-full rounded-2xl bg-[#c78b3a] px-5 py-3 text-sm font-bold text-white hover:bg-[#a66f24] sm:w-auto"}>{approved ? "Checkpoint aprobado" : attemptsExhausted ? "Intentos agotados" : allAnswered ? "Validar checkpoint" : "Responde las preguntas"}</button>}
        {result && !result.approved && attemptsRemaining > 0 && <button type="button" onClick={retry} className="w-full rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white hover:bg-[#061b3a] sm:w-auto">Realizar segundo intento</button>}
        {attemptsExhausted && <div className="w-full rounded-2xl bg-amber-100 px-5 py-3 text-center text-sm font-bold text-amber-800 sm:w-auto">Solicitud de reinicio disponible</div>}
      </div>
    </div>
  );
}
