import Image from "next/image";
<<<<<<< HEAD
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
    label="Domina herramientas que simplifican tu día."
    variant="blue"
    iconSrc="/home-icons/herramientas-digitales.png"
    />

    <HomeRouteCard
    title="Sistemas y aplicaciones jurisdiccionales"
    description="SICSEJ, Juicio Línea 2.0 y flujos operativos."
    href="/sistemas-jurisdiccionales"
    label="Consulta, práctica y aprendizaje para cada función."
    variant="bronze"
    iconSrc="/home-icons/herramientas-jurisdiccionales.png"
    />
    </div>

   <div className="mt-8 flex items-center justify-center gap-3 pb-6 text-sm font-bold uppercase tracking-[0.35em] text-[#061b3a]">
  <Image
    src="/brand/menos-clics-mas-justicia-sinfondo.png"
    alt="Menos clics, más justicia"
     width={40}
  height={40}
  className="h-10 w-10 object-contain"
  />

  <span>
    Menos clics, <span className="text-[#c78b3a]">más justicia.</span>
  </span>
</div>
    <p className="mt-1 text-center text-xs font-semibold leading-6 text-slate-500">
  Colección de recursos SOTIC para el personal del TFJA. Consulta y aprendizaje
  institucional | Derechos reservados.
</p>
    </div>
          
    </div>
    
      </section>

    </main>
    
  );
}
=======

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
>>>>>>> 24078f5 (Initial commit from Create Next App)
