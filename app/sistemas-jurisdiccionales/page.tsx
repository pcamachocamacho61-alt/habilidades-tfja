import Image from "next/image";
import Link from "next/link";

export default function SistemasJurisdiccionalesPage() {
  return (
    <div className="space-y-5">
      <Link href="/" className="inline-flex text-sm font-bold text-[#0b376d] hover:underline">← Regresar al inicio</Link>
      <section className="rounded-[28px] border border-white bg-white/95 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.08)] md:p-7">
        <div className="grid gap-6 lg:grid-cols-[1fr_240px] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c78b3a]">Sistemas y aplicaciones jurisdiccionales</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-[#061b3a] md:text-[38px]">Fortalece tus habilidades en sistemas jurisdiccionales</h2>
            <p className="mt-4 max-w-3xl border-l-4 border-[#e59216] pl-4 text-base leading-7 text-slate-600">En este espacio encontrarás recursos de capacitación y consulta relacionados con los sistemas jurisdiccionales del Tribunal: videos, guías, manuales y material de apoyo para fortalecer tus conocimientos.</p>
          </div>
          <Image src="/home-icons/herramientas-jurisdiccionales.png" alt="Sistemas jurisdiccionales" width={260} height={220} className="mx-auto h-auto max-h-[210px] w-auto object-contain" priority />
        </div>
      </section>
      <section className="grid gap-5 lg:grid-cols-2">
        <Link href="/sistemas-jurisdiccionales/consulta" className="rounded-[28px] border border-white bg-white/95 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition hover:-translate-y-1">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c78b3a]">Recursos</p><h3 className="mt-2 text-xl font-black text-[#061b3a]">Consulta jurisdiccional</h3><p className="mt-3 text-sm leading-6 text-slate-600">Accede a videos, guías, manuales y material de apoyo disponible para fortalecer el uso de estas herramientas.</p><span className="mt-5 inline-flex rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white">Entrar a consulta →</span>
        </Link>
        <Link href="/sistemas-jurisdiccionales/roles" className="rounded-[28px] border border-white bg-white/95 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition hover:-translate-y-1">

          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c78b3a]">Ruta de aprendizaje</p><h3 className="mt-2 text-xl font-black text-[#061b3a]">Ruta de prendizaje por perfil</h3><p className="mt-3 text-sm leading-6 text-slate-600">Consulta el contenido específico de tu perfil, revisa el material y realiza una evaluación para identificar áreas de oportunidad.</p><span className="mt-5 inline-flex rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white">Seleccionar perfil →</span>
        </Link>
      </section>
    </div>
  );
}
