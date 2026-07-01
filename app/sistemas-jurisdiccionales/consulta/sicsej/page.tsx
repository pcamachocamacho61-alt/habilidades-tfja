import Link from "next/link";
import { consultationTopics } from "@/data/jurisdictional-content";

export default function ConsultaSicsejPage() {
  return <section className="mx-auto max-w-7xl"><Link href="/sistemas-jurisdiccionales/consulta" className="inline-flex text-sm font-bold text-[#0b376d] hover:underline">← Regresar a Consulta Jurisdiccional</Link><div className="mt-6 rounded-[28px] border border-white bg-white/95 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:p-8"><p className="text-sm font-black uppercase tracking-[0.28em] text-[#c78b3a]">Consulta jurisdiccional</p><h1 className="mt-3 text-3xl font-black text-[#061b3a]">SICSEJ</h1><p className="mt-4 text-base leading-8 text-slate-600">Consulta videos de apoyo sobre el Sistema de Control y Seguimiento de Juicios.</p><div className="mt-7 grid gap-3 md:grid-cols-2">{consultationTopics.sicsej.map((topic,index)=><article key={topic.id} className="rounded-2xl border border-slate-100 bg-[#f5f8fd] p-4"><p className="text-xs font-black uppercase tracking-[0.16em] text-[#c78b3a]">Tema {index+1}</p><h2 className="mt-2 font-bold text-[#061b3a]">{topic.title}</h2></article>)}</div></div></section>;
}
