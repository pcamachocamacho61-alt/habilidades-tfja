import Link from "next/link";
import { ProgressBar } from "@/components/progress-bar";

type CourseLockedPanelProps = { routeProgressBeforeUnlock: number };

export function CourseLockedPanel({ routeProgressBeforeUnlock }: CourseLockedPanelProps) {
  return (
    <article className="min-w-0 rounded-[28px] border border-white bg-white/90 p-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:p-5 lg:p-6">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">Contenido bloqueado</p>
      <h1 className="mt-3 text-2xl font-black text-[#061b3a]">Completa los elementos anteriores</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">Los pasos deben completarse en orden. Para habilitar este contenido necesitas terminar los pasos anteriores y aprobar el checkpoint correspondiente.</p>
      <div className="mt-6 rounded-3xl bg-white p-5"><div className="mb-2 flex items-center justify-between text-sm font-bold text-slate-600"><span>Avance previo</span><span>{routeProgressBeforeUnlock}%</span></div><ProgressBar value={routeProgressBeforeUnlock} variant="bronze" /></div>
      <div className="mt-6 grid gap-4 md:grid-cols-3"><div className="rounded-2xl bg-white p-4"><p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Requisito 1</p><p className="mt-2 text-sm font-bold text-[#061b3a]">Completar los pasos en orden.</p></div><div className="rounded-2xl bg-white p-4"><p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Requisito 2</p><p className="mt-2 text-sm font-bold text-[#061b3a]">Aprobar el checkpoint previo.</p></div><div className="rounded-2xl bg-white p-4"><p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Requisito 3</p><p className="mt-2 text-sm font-bold text-[#061b3a]">No saltar elementos pendientes.</p></div></div>
      <Link href="/herramientas-digitales/onedrive/descubre" className="mt-6 inline-flex rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white">Regresar a la ruta</Link>
    </article>
  );
}
