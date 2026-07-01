"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";

const FINAL_RESULT_KEY =
  "htfja-final-onedrive-descubre-evaluacion-final-result";

type FinalizedRouteGuardProps = {
  children: ReactNode;
};

export function FinalizedRouteGuard({
  children,
}: FinalizedRouteGuardProps) {
  const [loaded, setLoaded] = useState(false);
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    try {
      const storedResult = window.localStorage.getItem(FINAL_RESULT_KEY);

      if (storedResult) {
        const result = JSON.parse(storedResult) as { approved?: boolean };
        setApproved(Boolean(result.approved));
      }
    } catch {
      setApproved(false);
    } finally {
      setLoaded(true);
    }
  }, []);

  if (!loaded) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-sm font-bold text-slate-500">
          Validando resultado...
        </p>
      </div>
    );
  }

  if (!approved) {
    return (
      <section className="mx-auto max-w-2xl rounded-[28px] border border-white bg-white/90 p-5 text-center shadow-[0_20px_70px_rgba(15,23,42,0.10)] sm:p-8">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-50 text-3xl">
          🔒
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
          Ruta pendiente
        </p>

        <h1 className="mt-3 text-2xl font-black text-[#061b3a]">
          La ruta todavía no está completada
        </h1>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          Para acceder a esta pantalla necesitas aprobar la evaluación final de
          OneDrive Descubre con al menos 7 respuestas correctas.
        </p>

        <Link
          href="/herramientas-digitales/onedrive/descubre/evaluacion-final"
          className="mt-6 inline-flex rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white"
        >
          Ir a evaluación final
        </Link>
      </section>
    );
  }

  return <>{children}</>;
}
