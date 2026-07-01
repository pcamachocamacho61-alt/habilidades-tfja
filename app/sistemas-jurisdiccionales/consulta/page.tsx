import Image from "next/image";
import Link from "next/link";

export default function ConsultaJurisdiccionalPage() {
  return (
    <div className="space-y-6">
      <Link href="/sistemas-jurisdiccionales" className="inline-flex text-sm font-bold text-[#0b376d] hover:underline">← Regresar a Sistemas y aplicaciones jurisdiccionales</Link>
      <section className="rounded-[28px] border border-white bg-white/95 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_390px] lg:items-center"><div><p className="text-sm font-black uppercase tracking-[0.28em] text-[#c78b3a]">Recursos</p><h1 className="mt-4 text-3xl font-black text-[#061b3a] md:text-4xl">Consulta Jurisdiccional</h1><p className="mt-5 border-l-4 border-[#e59216] pl-5 text-lg leading-8 text-slate-600">Accede a videos de apoyo para fortalecer el uso de los sistemas jurisdiccionales del Tribunal.</p></div><Image src="/home-icons/herramientas-jurisdiccionales.png" alt="Consulta jurisdiccional" width={400} height={270} className="mx-auto h-auto max-h-64 w-auto object-contain" /></div>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        <Link href="/sistemas-jurisdiccionales/consulta/sicsej" className="grid gap-5 rounded-[28px] border border-white bg-white/95 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:grid-cols-[190px_1fr] sm:items-center"><Image src="/systems/sicsej-logo.png" alt="SICSEJ" width={190} height={190} className="mx-auto h-auto max-h-44 w-auto object-contain"/><div className="border-l-4 border-[#e59216] pl-6"><h2 className="text-2xl font-black text-[#061b3a]">SICSEJ</h2><p className="mt-3 text-base leading-7 text-slate-600">Consulta videos de apoyo sobre el Sistema de Control y Seguimiento de Juicios.</p><span className="mt-6 inline-flex rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white">Entrar a SICSEJ →</span></div></Link>
        <Link href="/sistemas-jurisdiccionales/consulta/sjl2" className="grid gap-5 rounded-[28px] border border-white bg-white/95 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:grid-cols-[190px_1fr] sm:items-center"><Image src="/home-icons/herramientas-jurisdiccionales.png" alt="Juicio en Línea 2.0" width={190} height={190} className="mx-auto h-auto max-h-44 w-auto object-contain"/><div className="border-l-4 border-[#e59216] pl-6"><h2 className="text-2xl font-black text-[#061b3a]">Juicio en Línea 2.0</h2><p className="mt-3 text-base leading-7 text-slate-600">Consulta videos de apoyo para fortalecer tus conocimientos sobre Juicio en Línea 2.0.</p><span className="mt-6 inline-flex rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white">Entrar a SJL2 →</span></div></Link>
      </section>
      <div className="rounded-[24px] border border-white bg-white/95 p-5 text-sm font-semibold text-[#061b3a] shadow-sm">ⓘ <span className="ml-3">Selecciona un sistema para consultar sus recursos disponibles.</span></div>
    </div>
  );
}
