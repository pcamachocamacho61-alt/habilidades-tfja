"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";

type StoredUser = {
  role?: "user" | "admin";
};

type AdminRouteGuardProps = {
  children: ReactNode;
};

const DEMO_USER_KEY = "habilidades-tfja:demo-user";
const SESSION_CHANGED_EVENT = "habilidades-tfja:session-changed";

function readAdminAccess(): boolean {
  try {
    const storedUser = window.localStorage.getItem(DEMO_USER_KEY);

    if (!storedUser) {
      return false;
    }

    const parsedUser = JSON.parse(storedUser) as StoredUser;
    return parsedUser.role === "admin";
  } catch {
    return false;
  }
}

export function AdminRouteGuard({ children }: AdminRouteGuardProps) {
  const [loaded, setLoaded] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    function syncAccess() {
      setIsAdmin(readAdminAccess());
      setLoaded(true);
    }

    syncAccess();
    window.addEventListener(SESSION_CHANGED_EVENT, syncAccess);
    window.addEventListener("storage", syncAccess);

    return () => {
      window.removeEventListener(SESSION_CHANGED_EVENT, syncAccess);
      window.removeEventListener("storage", syncAccess);
    };
  }, []);

  if (!loaded) {
    return (
      <section className="rounded-[28px] bg-white p-6 text-center shadow-sm">
        <p className="text-sm font-bold text-slate-500">
          Validando permisos de administración...
        </p>
      </section>
    );
  }

  if (!isAdmin) {
    return (
      <section className="mx-auto max-w-2xl rounded-[28px] border border-white bg-white p-6 text-center shadow-sm">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-3xl">
          🔒
        </div>

        <p className="mt-6 text-sm font-black uppercase tracking-[0.22em] text-red-600">
          Acceso restringido
        </p>

        <h1 className="mt-3 text-2xl font-black text-[#061b3a]">
          Se requiere el rol Administrador
        </h1>

        <p className="mt-4 text-sm leading-7 text-slate-600">
          Esta pantalla permite revisar, autorizar o rechazar solicitudes de
          reinicio. Las personas con rol Usuario no pueden acceder.
        </p>

        <Link
          href="/herramientas-digitales"
          className="mt-6 inline-flex rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white"
        >
          Regresar a herramientas digitales
        </Link>
      </section>
    );
  }

  return <>{children}</>;
}
