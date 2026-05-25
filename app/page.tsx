import Image from "next/image";
import { HomeRouteCard } from "@/components/home-route-card";
import { redirect } from "next/navigation";
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

      <section className="relative z-10 flex min-h-screen justify-center px-6 pt-0">
        <div className="mx-auto mt-4 w-full max-w-6xl text-center">
          <div className="mx-auto flex max-w-md justify-center">
            <Image
              src="/brand/logo-habilidades-tfja.png"
              alt="Habilidades TFJA"
              width={360}
              height={150}
              priority
              className="h-auto w-full"
            />
          </div>

          <div className="-mt-10">
  <h1 className="text-4xl font-bold tracking-tight text-[#061b3a] md:text-5xl">
    ¿Qué quieres potenciar hoy?
  </h1>

  <p className="mt-4 text-lg text-slate-600">
    Rutas rápidas para simplificar tu trabajo diario en el Tribunal.
  </p>

  <div className="mx-auto mt-7 grid max-w-4xl gap-8 md:grid-cols-2">
   <HomeRouteCard
  title="Herramientas digitales"
  description="Teams, Outlook, OneDrive y productividad diaria."
  href="/herramientas-digitales"
  label="Microcontenidos de menos de 5 minutos"
  variant="blue"
  iconSrc="/home-icons/herramientas-digitales.png"
/>

<HomeRouteCard
  title="Sistemas y aplicaciones jurisdiccionales"
  description="SICSEJ, Juicio en Línea y flujos operativos."
  href="/sistemas-jurisdiccionales"
  label="Simuladores prácticos y casos reales"
  variant="bronze"
  iconSrc="/home-icons/herramientas-jurisdiccionales.png"
/>
  </div>

  <div className="mt-8 flex items-center justify-center gap-3 pb-6 text-sm font-bold uppercase tracking-[0.35em] text-[#061b3a]">
    <span className="text-[#c78b3a]">⚖</span>
    <span>
      Menos clics, <span className="text-[#c78b3a]">más justicia.</span>
    </span>
  </div>
 </div>
  </div>
      </section>
    </main>
  );
}