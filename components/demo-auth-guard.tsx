"use client";

import { useEffect, useState } from "react";

type DemoUser = {
  name: string;
  email: string;
  initials: string;
};

type DemoAuthGuardProps = {
  children: React.ReactNode;
};

const DEMO_USER_KEY = "habilidades-tfja:demo-user";

const DEMO_USER: DemoUser = {
   name: "Miguel Ángel",
  email: "miguel.bernalg@tfja.gob.mx",
  initials: "MA",
};

export function DemoAuthGuard({ children }: DemoAuthGuardProps) {
  const [loaded, setLoaded] = useState(false);
  const [hasSession, setHasSession] = useState(false);

  useEffect(() => {
    const savedUser = window.localStorage.getItem(DEMO_USER_KEY);

    setHasSession(Boolean(savedUser));
    setLoaded(true);
  }, []);

  function handleSignIn() {
    window.localStorage.setItem(DEMO_USER_KEY, JSON.stringify(DEMO_USER));
    setHasSession(true);
    window.location.reload();
  }

  if (!loaded) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-3xl bg-white p-8 text-center shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-[#0b376d]" />

          <p className="mt-5 text-sm font-bold text-slate-500">
            Validando sesión...
          </p>
        </div>
      </div>
    );
  }

  if (!hasSession) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-6">
        <section className="max-w-2xl rounded-[36px] border border-white bg-white/90 p-10 text-center shadow-[0_20px_70px_rgba(15,23,42,0.10)]">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-4xl">
            🔐
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Acceso institucional
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-[#061b3a]">
            Inicia sesión para continuar
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600">
            Para consultar herramientas digitales, rutas de aprendizaje,
            progreso e insignias, primero debes iniciar sesión con tu cuenta
            institucional.
          </p>

          <button
            type="button"
            onClick={handleSignIn}
            className="mt-8 rounded-2xl bg-[#0b376d] px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-[#061b3a]"
          >
            Iniciar sesión con Microsoft 365
          </button>

          <p className="mt-5 text-xs leading-6 text-slate-400">
            Esta es una simulación para el MVP. Posteriormente se reemplazará
            por Microsoft Entra ID real.
          </p>
        </section>
      </div>
    );
  }

  return <>{children}</>;
}