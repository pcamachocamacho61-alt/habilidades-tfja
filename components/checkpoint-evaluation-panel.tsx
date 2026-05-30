"use client";

import { useEffect, useState } from "react";
import { CheckpointEvaluation } from "@/types/learning";

type CheckpointEvaluationPanelProps = {
  checkpointEvaluation: CheckpointEvaluation;
  currentStepCompleted: boolean;
  onApproved: () => void;
};

type CheckpointResult = {
  correctAnswers: number;
  wrongAnswers: number;
  approved: boolean;
};

export function CheckpointEvaluationPanel({
  checkpointEvaluation,
  currentStepCompleted,
  onApproved,
}: CheckpointEvaluationPanelProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>(
    {}
  );
  const [result, setResult] = useState<CheckpointResult | null>(null);

  useEffect(() => {
    if (currentStepCompleted && !result) {
      setResult({
        correctAnswers: checkpointEvaluation.minimumCorrectAnswers,
        wrongAnswers:
          checkpointEvaluation.questions.length -
          checkpointEvaluation.minimumCorrectAnswers,
        approved: true,
      });
    }
  }, [currentStepCompleted, checkpointEvaluation, result]);

  const answeredQuestions = Object.keys(selectedAnswers).length;
  const allAnswered = answeredQuestions === checkpointEvaluation.questions.length;

  function handleSelectAnswer(questionIndex: number, answer: string) {
    if (currentStepCompleted) {
      return;
    }

    setSelectedAnswers((currentAnswers) => ({
      ...currentAnswers,
      [questionIndex]: answer,
    }));

    setResult(null);
  }

  function handleValidateCheckpoint() {
    if (!allAnswered || currentStepCompleted) {
      return;
    }

    const correctAnswers = checkpointEvaluation.questions.reduce(
      (totalCorrect, question, index) => {
        const selectedAnswer = selectedAnswers[index];

        if (selectedAnswer === question.correctAnswer) {
          return totalCorrect + 1;
        }

        return totalCorrect;
      },
      0
    );

    const wrongAnswers = checkpointEvaluation.questions.length - correctAnswers;
    const approved =
      correctAnswers >= checkpointEvaluation.minimumCorrectAnswers;

    const checkpointResult = {
      correctAnswers,
      wrongAnswers,
      approved,
    };

    setResult(checkpointResult);

    if (approved) {
      onApproved();
    }
  }

  return (
    <div className="mt-8 rounded-3xl border border-[#ead7b8] bg-[#fff8ef] p-6">
      <div className="flex flex-col gap-4 border-b border-[#ead7b8] pb-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#061b3a]">
            Checkpoint de avance
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Responde {checkpointEvaluation.questions.length} preguntas. Para
            completar este checkpoint necesitas al menos{" "}
            <strong>{checkpointEvaluation.minimumCorrectAnswers}</strong>{" "}
            respuestas correctas.
          </p>
        </div>

        <div className="rounded-2xl bg-white px-5 py-4 text-center shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Contestadas
          </p>

          <p className="mt-1 text-2xl font-black text-[#061b3a]">
            {answeredQuestions}/{checkpointEvaluation.questions.length}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        {checkpointEvaluation.questions.map((question, questionIndex) => (
          <div
            key={question.question}
            className="rounded-3xl border border-slate-200 bg-white p-5"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c78b3a]">
              Pregunta {questionIndex + 1}
            </p>

            <h4 className="mt-2 text-lg font-bold leading-8 text-[#061b3a]">
              {question.question}
            </h4>

            <div className="mt-4 space-y-3">
              {question.options.map((option) => {
                const selected = selectedAnswers[questionIndex] === option;

                return (
                  <button
                    key={option}
                    type="button"
                    disabled={currentStepCompleted}
                    onClick={() => handleSelectAnswer(questionIndex, option)}
                    className={
                      selected
                        ? "w-full rounded-2xl border border-[#0b376d] bg-blue-50 p-4 text-left text-sm font-bold text-[#061b3a]"
                        : "w-full rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 text-left text-sm font-semibold text-slate-600 hover:bg-blue-50 disabled:cursor-not-allowed"
                    }
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {result && (
        <div
          className={
            result.approved
              ? "mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-700"
              : "mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700"
          }
        >
          {result.approved
            ? `Checkpoint completado: ${result.correctAnswers} correctas y ${result.wrongAnswers} incorrectas.`
            : `Aún no aprobado: ${result.correctAnswers} correctas y ${result.wrongAnswers} incorrectas. Revisa el bloque e intenta nuevamente.`}
        </div>
      )}

      <button
        type="button"
        onClick={handleValidateCheckpoint}
        disabled={!allAnswered || currentStepCompleted}
        className={
          currentStepCompleted
            ? "mt-6 rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white"
            : !allAnswered
              ? "mt-6 cursor-not-allowed rounded-2xl bg-slate-300 px-6 py-3 text-sm font-bold text-white"
              : "mt-6 rounded-2xl bg-[#c78b3a] px-6 py-3 text-sm font-bold text-white hover:bg-[#a66f24]"
        }
      >
        {currentStepCompleted
          ? "Checkpoint completado"
          : allAnswered
            ? "Validar checkpoint"
            : "Responde las preguntas"}
      </button>
    </div>
  );
}