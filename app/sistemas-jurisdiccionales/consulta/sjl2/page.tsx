import Link from "next/link";
import { SjlVideoLibrary } from "@/components/sjl-video-library";

export default function ConsultaSjl2Page() {
  return (
    <section className="mx-auto max-w-7xl">
      <Link href="/sistemas-jurisdiccionales/consulta" className="inline-flex text-sm font-bold text-[#0b376d] hover:underline">← Regresar a Consulta Jurisdiccional</Link>
      <section className="mt-6 rounded-[28px] border border-white bg-white/95 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:p-8"><p className="text-sm font-black uppercase tracking-[0.28em] text-[#c78b3a]">Consulta jurisdiccional</p><h1 className="mt-3 text-3xl font-black text-[#061b3a] md:text-4xl">Juicio en Línea 2.0</h1><p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">Consulta videos, ligas y materiales de apoyo relacionados con funciones, procesos y apartados del Sistema de Justicia en Línea 2.0.</p></section>
      <SjlVideoLibrary />
    </section>
  );
}
