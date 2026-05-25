import { LearningStep } from "@/types/learning";

type StepContentPanelProps = {
  step: LearningStep;
};

export function StepContentPanel({ step }: StepContentPanelProps) {
  const isEvaluation = step.type === "evaluation";

  return (
    <article className="rounded-[32px] border border-white bg-white/90 p-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
      <p
        className={
          isEvaluation
            ? "text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]"
            : "text-sm font-bold uppercase tracking-[0.25em] text-blue-700"
        }
      >
        {step.content.eyebrow}
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#061b3a]">
        {step.content.title}
      </h1>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        {step.content.description}
      </p>

      <div className="mt-8 rounded-3xl bg-[#f5f8fd] p-6">
        <h2 className="text-lg font-bold text-[#061b3a]">
          {isEvaluation ? "Antes de continuar, confirma:" : "En este paso lograrás:"}
        </h2>

        <ul className="mt-4 space-y-3">
          {step.content.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-slate-700">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#c78b3a]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {isEvaluation ? (
        <div className="mt-8 rounded-3xl border border-[#ead7b8] bg-[#fff8ef] p-6">
          <h3 className="text-xl font-bold text-[#061b3a]">
            Evaluación simple del MVP
          </h3>

          <p className="mt-3 text-slate-600">
            En esta etapa se puede simular una pregunta de opción múltiple,
            validación rápida o reto práctico. El objetivo es probar la
            experiencia, no calificar formalmente al usuario.
          </p>

          <button className="mt-5 rounded-2xl bg-[#c78b3a] px-6 py-3 text-sm font-bold text-white hover:bg-[#a66f24]">
            Iniciar checkpoint
          </button>
        </div>
      ) : (
        <button className="mt-8 rounded-2xl bg-[#0b376d] px-6 py-3 text-sm font-bold text-white hover:bg-[#061b3a]">
          Marcar paso como completado
        </button>
      )}
    </article>
  );
}