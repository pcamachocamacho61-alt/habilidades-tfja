import Image from "next/image";
import { HomeRouteCard } from "@/components/home-route-card";

export default function HomePage() {
return (
<main className="relative min-h-screen overflow-hidden bg-[#f5f8fd]">
<div
className="absolute inset-0 bg-cover bg-center bg-no-repeat"
style={{
backgroundImage: "url('/backgrounds/home-bg.png')",
}}
/>

  <div className="absolute inset-0 bg-white/10" />

  <section className="relative z-10 flex min-h-screen justify-center px-4 py-6 sm:px-6 sm:py-7">
    <div className="mx-auto w-full max-w-6xl text-center">
      <div className="mx-auto flex max-w-[320px] justify-center">
        <Image
          src="/brand/logo-habilidades-tfja.png"
          alt="Habilidades TFJA"
          width={320}
          height={133}
          priority
          className="h-auto w-full"
        />
      </div>

      <div className="-mt-5">
        <h1 className="text-[35px] font-bold tracking-tight text-[#061b3a] md:text-[44px]">
          ¿Qué quieres potenciar hoy?
        </h1>

        <p className="mt-3 text-[17px] text-slate-600">
          Rutas rápidas para simplificar tu trabajo diario en el Tribunal.
        </p>

        <div className="mx-auto mt-7 grid max-w-[880px] gap-6 md:grid-cols-2">
          <HomeRouteCard
            title="Herramientas digitales"
            description="Teams, Outlook, OneDrive y productividad diaria."
            href="/herramientas-digitales"
            label="Domina herramientas que simplifican tu día."
            variant="blue"
            iconSrc="/home-icons/herramientas-digitales.png"
          />

          <HomeRouteCard
            title="Sistemas y aplicaciones jurisdiccionales"
            description="SICSEJ, Juicio Línea 2.0 y flujos operativos."
            href="/sistemas-jurisdiccionales"
            label="Fortalece tus habilidades en sistemas jurisdiccionales."
            variant="bronze"
            iconSrc="/home-icons/herramientas-jurisdiccionales.png"
          />
        </div>

        <div className="mt-6 flex items-center justify-center gap-2.5 pb-3 text-[13px] font-bold uppercase tracking-[0.35em] text-[#061b3a]">
          <Image
            src="/brand/menos-clics-mas-justicia-sinfondo.png"
            alt="Menos clics, más justicia"
            width={46}
            height={46}
            className="h-9 w-9 object-contain"
          />

          <span>
            Menos clics,{" "}
            <span className="text-[#c78b3a]">más justicia.</span>
          </span>
        </div>

        <p className="mt-1 text-center text-xs font-semibold leading-5 text-slate-500">
          Colección de recursos SOTIC para el personal del TFJA. Consulta y
          aprendizaje institucional | Derechos reservados.
        </p>
      </div>
    </div>
  </section>
</main>

);
}