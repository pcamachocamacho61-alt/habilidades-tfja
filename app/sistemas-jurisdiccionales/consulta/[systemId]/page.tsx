import Link from "next/link";
import { notFound } from "next/navigation";
import { consultationTopics, jurisdictionalSystems } from "@/data/jurisdictional-content";

export default async function ConsultaSistemaPage({ params, searchParams }: { params: Promise<{ systemId: string }>; searchParams: Promise<{ topic?: string }> }) {
  const { systemId } = await params;
  const { topic } = await searchParams;
  if (systemId !== "sicsej" && systemId !== "sjl2") notFound();
  const system = jurisdictionalSystems.find((item) => item.id === systemId)!;
  const topics = consultationTopics[systemId];
  const current = topics.find((item) => item.id === topic) ?? topics[0];
  return (
    <div>
      <Link href="/sistemas-jurisdiccionales/consulta" className="text-sm font-bold text-[#0b376d]">← Regresar a Consulta jurisdiccional</Link>
      <section className="mt-6 grid gap-5 xl:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="max-h-[calc(100dvh-140px)] overflow-y-auto rounded-[26px] border border-white bg-white/95 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c78b3a]">Consulta jurisdiccional</p>
          <h1 className="mt-2 text-2xl font-black text-[#061b3a]">{system.name}</h1>
          <div className="mt-5 space-y-2">
            {topics.map((item) => <Link key={item.id} href={`?topic=${item.id}`} className={item.id===current.id ? "block rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-bold text-[#061b3a]" : "block rounded-2xl bg-[#f5f8fd] px-4 py-3 text-sm font-semibold text-[#061b3a]"}>{item.title}<span className="mt-1 block text-xs font-normal text-slate-500">{item.duration}</span></Link>)}
          </div>
        </aside>
        <article className="rounded-[28px] border border-white bg-white/95 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:p-6">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0b376d]">Temario general de {system.name}</p>
          <h2 className="mt-4 text-2xl font-black text-[#061b3a]">{current.title}</h2>
          <p className="mt-3 text-sm font-semibold text-slate-500">Recurso de consulta · {current.duration}</p>
          <div className="mt-7 flex aspect-video items-center justify-center rounded-3xl bg-black text-center text-white"><p className="max-w-lg px-5 text-sm leading-7">El espacio está preparado para integrar el video institucional correspondiente a este tema.</p></div>
          <div className="mt-6 flex gap-4 rounded-3xl border border-[#ead7b8] bg-[#fff8ef] p-5"><img src="/brand/sabias-que-habilidades-tfja.png" alt="¿Sabías que?" className="h-auto w-28 object-contain"/><p className="text-sm leading-7 text-[#061b3a]">Los recursos de consulta no generan progreso, evaluación ni insignia; pueden revisarse libremente cuando se necesiten.</p></div>
        </article>
      </section>
    </div>
  );
}
