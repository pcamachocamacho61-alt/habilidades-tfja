import Link from "next/link";
import { LearningStep } from "@/types/learning";
import { ProgressBar } from "@/components/progress-bar";
import { isStepLocked } from "@/lib/course-locks";
type CourseStepSidebarProps = {
  steps: LearningStep[];
  currentStepId?: string;
  completedIds: string[];
  progress: number;
};

export function CourseStepSidebar({
  steps,
  currentStepId,
  completedIds,
  progress,
}: CourseStepSidebarProps) {
  const blocks = [1, 2, 3] as const;

  function getStepIndicator(step: LearningStep, completed: boolean) {
    if (completed) {
      return "✓";
    }

    if (step.type === "welcome") {
      return "★";
    }

    if (step.type === "evaluation") {
      return "★";
    }

    return step.number;
  }

  function getStepLabel(step: LearningStep) {
  if (step.type === "welcome") {
    return "Bienvenida";
  }

  if (step.type === "evaluation") {
    if (step.id === "evaluacion-1" || step.id === "evaluacion-1") {
      return "Evaluación 1";
    }

    if (step.id === "evaluacion-2" || step.id === "evaluacion-2") {
      return "Evaluación 2";
    }

    if (step.id === "evaluacion-final") {
      return "Evaluación final";
    }

    return "Evaluación";
  }

  return step.estimatedTime;
}
function getStepTitle(step: LearningStep) {
  if (step.id === "evaluacion-1" || step.id === "evaluacion-1") {
    return "Evaluación 1";
  }

  if (step.id === "evaluacion-2" || step.id === "evaluacion-2") {
    return "Evaluación 2";
  }

  if (step.id === "evaluacion-final") {
    return "Evaluación final";
  }

  return step.title;
}
  function getIndicatorClass(step: LearningStep, completed: boolean) {
    if (completed) {
      return "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b376d] text-[10px] font-bold text-white";
    }

    if (step.type === "welcome") {
      return "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-700";
    }

    if (step.type === "evaluation") {
      return "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c78b3a] text-[10px] font-bold text-white";
    }

    return "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold text-slate-500";
  }

  return (
    <aside className="sticky top-6 max-h-[calc(100vh-48px)] overflow-y-auto rounded-[28px] border border-white bg-white/90 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent]">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
        Ruta Descubre
      </p>

      <h2 className="mt-2 text-2xl font-bold text-[#061b3a]">OneDrive</h2>

      <div className="mt-5">
        <div className="mb-2 flex justify-between text-xs font-bold text-slate-600">
          <span>Avance general</span>
          <span>{progress}%</span>
        </div>

        <ProgressBar value={progress} variant="blue" />
      </div>

      <div className="mt-6 space-y-6">
        {blocks.map((block) => {
          const blockSteps = steps.filter((step) => step.block === block);

          return (
            <div key={block}>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Bloque {block}
              </h3>

              <div className="mt-3 space-y-2">
                {blockSteps.map((step) => {
                  const active = step.id === currentStepId;
                  const completed = completedIds.includes(step.id);
                  const locked = isStepLocked(step, steps, completedIds);
           return locked ? (
  <div
    key={step.id}
    className="block cursor-not-allowed rounded-2xl border border-slate-100 bg-slate-100 p-3 opacity-60"
  >
    <div className="flex gap-3">
      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-300 text-[10px] font-bold text-slate-500">
        🔒
      </span>

      <div>
        <p className="text-sm font-bold text-slate-500">{getStepTitle(step)}</p>

        <p className="mt-1 text-xs text-slate-400">Bloqueado</p>
      </div>
    </div>
  </div>
) : (
  <Link
    key={step.id}
    href={`/herramientas-digitales/onedrive/descubre/${step.id}`}
    className={
      active
        ? "block rounded-2xl border border-blue-200 bg-blue-50 p-3"
        : "block rounded-2xl border border-slate-100 bg-slate-50 p-3 hover:bg-white"
    }
  >
    <div className="flex gap-3">
      <span className={getIndicatorClass(step, completed)}>
        {getStepIndicator(step, completed)}
      </span>

      <div>
        <p className="text-sm font-bold text-[#061b3a]">{getStepTitle(step)}</p>

        <p className="mt-1 text-xs text-slate-500">
          {getStepLabel(step)}
        </p>
      </div>
    </div>
  </Link>
);
                })}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}