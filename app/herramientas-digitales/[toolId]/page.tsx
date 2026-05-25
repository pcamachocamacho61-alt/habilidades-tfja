import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { digitalTools } from "@/data/digital-tools";
import { OneDriveStatusCard } from "@/components/onedrive-status-card";
type ToolPageProps = {
  params: Promise<{
    toolId: string;
  }>;
};

export default async function ToolPage({ params }: ToolPageProps) {
  const { toolId } = await params;

  const tool = digitalTools.find((item) => item.id === toolId);

  if (!tool) {
    notFound();
  }

  return (
    <section>
      <Link
        href="/herramientas-digitales"
        className="text-sm font-bold text-[#0b376d] hover:underline"
      >
        ← Regresar a herramientas digitales
      </Link>

      <div className="mt-8 rounded-[36px] border border-white bg-white/85 p-10 shadow-[0_20px_70px_rgba(15,23,42,0.10)]">
        <div className="grid gap-8 md:grid-cols-[220px_1fr] md:items-center">
          <div className="flex justify-center">
            <Image
              src={tool.icon}
              alt={tool.name}
              width={180}
              height={180}
              className="h-auto w-[180px]"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
              Herramienta digital
            </p>

            <h1 className="mt-3 text-5xl font-bold text-[#061b3a]">
              {tool.name}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {tool.description}
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Link
                href={`/herramientas-digitales/${tool.id}/descubre`}
                className="rounded-3xl border border-blue-100 bg-blue-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                  Nivel inicial
                </p>

                <h2 className="mt-3 text-2xl font-bold text-[#061b3a]">
                  Descubre
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Microcontenidos para conocer las funciones esenciales.
                </p>
              </Link>

              <div className="rounded-3xl border border-[#ead7b8] bg-[#fff8ef] p-6 opacity-70">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a66f24]">
                  Próximamente
                </p>

                <h2 className="mt-3 text-2xl font-bold text-[#061b3a]">
                  Potencia
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Retos avanzados para fortalecer el uso productivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
            {tool.id === "onedrive" && <OneDriveStatusCard />}
    </section>
  );
}