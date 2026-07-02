"use client";

import Link from "next/link";
import { useState } from "react";
import { LearningStep } from "@/types/learning";
import { ProgressBar } from "@/components/progress-bar";
import { isStepLocked } from "@/lib/course-locks";

type CourseStepSidebarProps = {
  steps: LearningStep[];
  currentStepId?: string;
  completedIds: string[];
  progress: number;
  toolName?: string;
  levelName?: string;
  basePath?: string;
};

export function CourseStepSidebar({
  steps,
  currentStepId,
  completedIds,
  progress,
  toolName = "OneDrive",
  levelName = "Descubre",
  basePath = "/herramientas-digitales/onedrive/descubre",
}: CourseStepSidebarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const blocks = [1, 2, 3] as const;
  const currentStep = steps.find((step) => step.id === currentStepId);

  function title(step: LearningStep) {
    if (step.id === "evaluacion-1") return "Evaluación 1";
    if (step.id === "evaluacion-2") return "Evaluación 2";
    if (step.id === "evaluacion-final") return "Evaluación final";
    return step.title;
  }

  function label(step: LearningStep) {
    if (step.type === "evaluation") return step.estimatedTime;
    return step.estimatedTime;
  }

  return (
    <aside className="w-full rounded-[24px] border border-white bg-white/90 shadow-[0_18px_55px_rgba(15,23,42,0.08)] xl:sticky xl:top-5 xl:max-h-[calc(100vh-48px)] xl:overflow-y-auto xl:[scrollbar-color:#cbd5e1_transparent] xl:[scrollbar-width:thin]">
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c78b3a]">Ruta {levelName}</p>
            <h2 className="mt-2 text-2xl font-bold text-[#061b3a]">{toolName}</h2>
          </div>
          <button type="button" onClick={() => setMobileMenuOpen((value) => !value)} className="flex shrink-0 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-[#061b3a] hover:bg-blue-50 xl:hidden" aria-expanded={mobileMenuOpen} aria-controls="course-step-navigation">
            {mobileMenuOpen ? "Ocultar bloques" : "Ver bloques"}<span aria-hidden="true">▾</span>
          </button>
        </div>
        <div className="mt-5"><div className="mb-2 flex justify-between text-xs font-bold text-slate-600"><span>Avance general</span><span>{progress}%</span></div><ProgressBar value={progress} variant="blue" /></div>
        {!mobileMenuOpen && currentStep && <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-4 xl:hidden"><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Paso actual</p><p className="mt-1 text-sm font-bold text-[#061b3a]">{title(currentStep)}</p></div>}
      </div>

      <div id="course-step-navigation" className={mobileMenuOpen ? "max-h-[60vh] overflow-y-auto border-t border-slate-200 px-5 pb-5 pt-5 xl:block xl:max-h-none xl:overflow-visible xl:border-0 xl:pt-0" : "hidden px-5 pb-5 xl:block"}>
        <div className="space-y-6">
          {blocks.map((block) => {
            const blockSteps = steps.filter((step) => step.block === block);
            if (!blockSteps.length) return null;
            return <div key={block}><h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Bloque {block}</h3><div className="mt-3 space-y-2">{blockSteps.map((step) => {
              const active = step.id === currentStepId;
              const completed = completedIds.includes(step.id);
              const locked = isStepLocked(step, steps, completedIds);
              if (locked) return <div key={step.id} className="cursor-not-allowed rounded-2xl border border-slate-100 bg-slate-100 p-3 opacity-60"><div className="flex gap-3"><span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-300 text-[10px]">🔒</span><div><p className="text-sm font-bold text-slate-500">{title(step)}</p><p className="mt-1 text-xs text-slate-400">Bloqueado</p></div></div></div>;
              return <Link key={step.id} href={`${basePath}/${encodeURIComponent(step.id)}`} onClick={() => setMobileMenuOpen(false)} className={active ? "block rounded-2xl border border-blue-200 bg-blue-50 p-3" : "block rounded-2xl border border-slate-100 bg-slate-50 p-3 hover:bg-white"} aria-current={active ? "step" : undefined}><div className="flex gap-3"><span className={completed ? "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0b376d] text-[10px] font-bold text-white" : step.type === "evaluation" ? "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c78b3a] text-[10px] font-bold text-white" : "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold text-slate-500"}>{completed ? "✓" : step.type === "evaluation" ? "★" : step.number}</span><div><p className="text-sm font-bold text-[#061b3a]">{title(step)}</p><p className="mt-1 text-xs text-slate-500">{label(step)}</p></div></div></Link>;
            })}</div></div>;
          })}
        </div>
      </div>
    </aside>
  );
}
