import Image from "next/image";
import Link from "next/link";

export default function JudicialSystemsPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f8fd] px-6">
      <section className="max-w-3xl rounded-[32px] border border-white bg-white/85 p-10 text-center shadow-[0_20px_70px_rgba(15,23,42,0.10)]">
        <Image
          src="/brand/logo-habilidades-tfja.png"
          alt="Habilidades TFJA"
          width={260}
          height={120}
          className="mx-auto h-auto w-[260px]"
        />

        <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
          Próximamente
        </p>

        <h1 className="mt-4 text-4xl font-bold text-[#061b3a]">
          Sistemas y aplicaciones jurisdiccionales
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Esta sección quedará como placeholder visual durante el MVP. En una
          siguiente fase se integrarán rutas, simuladores y microcontenidos
          relacionados con sistemas internos del Tribunal.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-2xl bg-[#0b376d] px-6 py-3 text-sm font-bold text-white hover:bg-[#061b3a]"
        >
          Regresar al inicio
        </Link>
      </section>
    </main>
  );
}