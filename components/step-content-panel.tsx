import { LearningStep } from "@/types/learning";

type StepContentPanelProps = {
  step: LearningStep;
};

export function StepContentPanel({ step }: StepContentPanelProps) {
  const isEvaluation = step.type === "evaluation";

  return (
    <article className="rounded-[28px] border border-white bg-white/90 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:p-6">
      <p
        className={
          isEvaluation
            ? "text-xs font-bold uppercase tracking-[0.22em] text-[#c78b3a] sm:text-sm"
            : "text-xs font-bold uppercase tracking-[0.22em] text-blue-700 sm:text-sm"
        }
      >
        {step.content.eyebrow}
      </p>

      <h1 className="mt-4 text-2xl font-bold tracking-tight text-[#061b3a] sm:text-3xl">
        {step.content.title}
      </h1>

      <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
        {step.content.description}
      </p>

      <div className="mt-6 rounded-3xl bg-[#f5f8fd] p-5 sm:p-5">
        <h2 className="text-lg font-bold text-[#061b3a]">
          {isEvaluation ? "Antes de iniciar:" : "En este paso lograrás:"}
        </h2>

        <ul className="mt-4 space-y-3">
          {step.content.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c78b3a]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {isEvaluation && (
        <div className="mt-6 rounded-3xl border border-[#ead7b8] bg-[#fff8ef] p-5 sm:p-5">
          <h3 className="text-xl font-bold text-[#061b3a]">
            Checkpoint obligatorio
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            Responde las preguntas del checkpoint que aparece a continuación.
            Debes obtener al menos 2 aciertos de 3 y cuentas con un máximo de 2
            intentos. Este resultado no se suma para determinar la insignia final.
          </p>
        </div>
      )}
    </article>
  );
}
