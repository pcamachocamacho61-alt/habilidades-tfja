"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type DemoUser = {
  name: string;
  email: string;
  initials: string;
  role: "user" | "admin";
};

const DEMO_USER_KEY = "habilidades-tfja:demo-user";
const LAST_ACTIVITY_KEY = "habilidades-tfja:last-activity";
const SESSION_CHANGED_EVENT = "habilidades-tfja:session-changed";

function readStoredUser(): DemoUser | null {
  try {
    const storedUser = window.localStorage.getItem(DEMO_USER_KEY);

    if (!storedUser) {
      return null;
    }

    const parsedUser = JSON.parse(storedUser) as Partial<DemoUser>;

    if (!parsedUser.name || !parsedUser.email || !parsedUser.initials) {
      return null;
    }

    return {
      name: parsedUser.name,
      email: parsedUser.email,
      initials: parsedUser.initials,
      role: parsedUser.role === "admin" ? "admin" : "user",
    };
  } catch {
    return null;
  }
}

export function DemoAuthStatus() {
  const [user, setUser] = useState<DemoUser | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    function syncSession() {
      setUser(readStoredUser());
      setLoaded(true);
    }

    syncSession();
    window.addEventListener(SESSION_CHANGED_EVENT, syncSession);
    window.addEventListener("storage", syncSession);

    return () => {
      window.removeEventListener(SESSION_CHANGED_EVENT, syncSession);
      window.removeEventListener("storage", syncSession);
    };
  }, []);

  function handleSignOut() {
    window.localStorage.removeItem(DEMO_USER_KEY);
    window.localStorage.removeItem(LAST_ACTIVITY_KEY);
    setUser(null);
    window.dispatchEvent(new CustomEvent(SESSION_CHANGED_EVENT));
    window.location.assign("/");
  }

  if (!loaded) {
    return <div className="h-12 w-32 animate-pulse rounded-2xl bg-slate-100" />;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <Link
        href="/herramientas-digitales/perfil"
        className="group hidden rounded-xl px-2 py-1 text-right transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200 lg:block"
        aria-label="Ir a Mi perfil"
        title="Ir a Mi perfil"
      >
        <p className="text-sm font-bold text-[#061b3a] transition group-hover:text-blue-700">
          {user.name}
        </p>
        <p className="text-xs text-slate-500 transition group-hover:text-blue-600">
          {user.email}
        </p>
      </Link>

      <Link
        href="/herramientas-digitales/perfil"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0b376d] text-sm font-black text-white transition hover:bg-[#061b3a] focus:outline-none focus:ring-2 focus:ring-blue-200 sm:h-12 sm:w-12"
        title={`${user.name} · Ir a Mi perfil`}
        aria-label="Ir a Mi perfil"
      >
        {user.initials}
      </Link>

      <button
        type="button"
        onClick={handleSignOut}
        className="rounded-2xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-bold text-[#061b3a] transition hover:bg-slate-50 sm:px-4 sm:py-3 sm:text-sm"
      >
        Cerrar sesión
      </button>
    </div>
  );
}
