import Link from "next/link";
import { notFound } from "next/navigation";
import { RouteCompletedCelebration } from "@/components/route-completed-celebration";
import { FinalBadgeCard } from "@/components/final-badge-card";
import { FinalRouteSummary } from "@/components/final-route-summary";
type FinalizedPageProps = {
  params: Promise<{
    toolId: string;
    levelId: string;
  }>;
};

export default async function FinalizedPage({ params }: FinalizedPageProps) {
  const { toolId, levelId } = await params;

  if (toolId !== "onedrive" || levelId !== "descubre") {
    notFound();
  }

  return (
    <>
    <RouteCompletedCelebration />

    <section className="mx-auto max-w-4xl">
      <div className="rounded-[36px] border border-white bg-white/90 p-10 text-center shadow-[0_20px_70px_rgba(15,23,42,0.10)]">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50 text-5xl text-emerald-600">
          ✓
        </div>

        <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
          Ruta completada
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#061b3a]">
          Finalizaste OneDrive Descubre
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Has concluido la ruta inicial de OneDrive. En este recorrido revisaste
          cómo guardar, organizar, compartir y consultar archivos desde tu
          espacio institucional en la nube.
        </p>

        <div className="mt-8 rounded-3xl bg-[#f5f8fd] p-6 text-left">
          <h2 className="text-lg font-bold text-[#061b3a]">
            Lo que ya puedes aplicar
            <FinalRouteSummary />
          </h2>

          <ul className="mt-4 space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#c78b3a]" />
              Guardar archivos en OneDrive.
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#c78b3a]" />
              Organizar documentos mediante carpetas.
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#c78b3a]" />
              Compartir archivos con permisos adecuados.
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#c78b3a]" />
              Consultar archivos recientes, compartidos y versiones anteriores.
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/herramientas-digitales"
            className="rounded-2xl bg-[#0b376d] px-6 py-3 text-sm font-bold text-white hover:bg-[#061b3a]"
          >
            Regresar a herramientas digitales
          </Link>

          <Link
            href="/herramientas-digitales/onedrive"
            className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#061b3a] hover:bg-slate-50"
          >
            Ver ruta de OneDrive
          </Link>
        </div>
      </div>
    </section>
  </>
);
}