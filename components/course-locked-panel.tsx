import Link from "next/link";
import { ProgressBar } from "@/components/progress-bar";

type CourseLockedPanelProps = {
  routeProgressBeforeUnlock: number;
};

export function CourseLockedPanel({
  routeProgressBeforeUnlock,
}: CourseLockedPanelProps) {
  return (
    <article className="min-w-0 rounded-[32px] border border-amber-200 bg-amber-50 p-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
        Bloque bloqueado
      </p>

      <h1 className="mt-4 text-4xl font-black tracking-tight text-[#061b3a]">
        Completa primero el Bloque 1
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
        Para continuar con los siguientes bloques necesitas completar la
        bienvenida, los primeros pasos de OneDrive y aprobar el Checkpoint 1.
      </p>

      <div className="mt-8 rounded-3xl bg-white p-6">
        <div className="mb-2 flex items-center justify-between text-sm font-bold text-slate-600">
          <span>Avance requerido del Bloque 1</span>
          <span>{routeProgressBeforeUnlock}%</span>
        </div>

        <ProgressBar value={routeProgressBeforeUnlock} variant="bronze" />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Requisito 1
          </p>
          <p className="mt-2 text-sm font-bold text-[#061b3a]">
            Completar la bienvenida.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Requisito 2
          </p>
          <p className="mt-2 text-sm font-bold text-[#061b3a]">
            Completar los pasos del Bloque 1.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Requisito 3
          </p>
          <p className="mt-2 text-sm font-bold text-[#061b3a]">
            Aprobar el Checkpoint 1.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/herramientas-digitales/onedrive/descubre/bienvenida"
          className="rounded-2xl bg-[#0b376d] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#061b3a]"
        >
          Ir al inicio del Bloque 1
        </Link>

        <Link
          href="/herramientas-digitales/onedrive/descubre/evaluacion-1"
          className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-center text-sm font-bold text-[#061b3a] hover:bg-slate-50"
        >
          Ir al Checkpoint 1
        </Link>
      </div>
    </article>
  );
}