import Link from "next/link";
import { notFound } from "next/navigation";
import { RouteCompletedCelebration } from "@/components/route-completed-celebration";
import { FinalRouteSummary } from "@/components/final-route-summary";
import { FinalBadgeCard } from "@/components/final-badge-card";
import { FinalizedRouteGuard } from "@/components/finalized-route-guard";

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
    <FinalizedRouteGuard>
      <RouteCompletedCelebration />

      <section className="mx-auto max-w-4xl">
        <div className="rounded-[28px] border border-white bg-white/90 p-5 text-center shadow-[0_20px_70px_rgba(15,23,42,0.10)] sm:p-8">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50 text-4xl text-emerald-600">
            ✓
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Ruta completada
          </p>

          <h1 className="mt-4 text-2xl font-bold tracking-tight text-[#061b3a] sm:text-3xl">
            Finalizaste OneDrive Descubre
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Aprobaste la evaluación final y concluiste la ruta inicial de
            OneDrive. Ya puedes aplicar prácticas para guardar, organizar,
            compartir y consultar archivos institucionales en la nube.
          </p>

          <div className="mt-6 rounded-3xl bg-[#f5f8fd] p-5 text-left sm:p-5">
            <h2 className="text-lg font-bold text-[#061b3a]">
              Lo que ya puedes aplicar
            </h2>

            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c78b3a]" />
                Guardar archivos en OneDrive.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c78b3a]" />
                Organizar documentos mediante carpetas.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c78b3a]" />
                Compartir archivos con permisos adecuados.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c78b3a]" />
                Consultar archivos recientes, compartidos y versiones anteriores.
              </li>
            </ul>
          </div>

          <FinalRouteSummary />
          <FinalBadgeCard />

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/herramientas-digitales"
              className="rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#061b3a]"
            >
              Regresar a herramientas digitales
            </Link>

            <Link
              href="/herramientas-digitales/onedrive"
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#061b3a] transition hover:bg-slate-50"
            >
              Ver ruta de OneDrive
            </Link>
          </div>
        </div>
      </section>
    </FinalizedRouteGuard>
  );
}
