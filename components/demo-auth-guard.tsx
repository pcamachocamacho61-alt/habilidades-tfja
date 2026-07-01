"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { registerDemoUser } from "@/lib/demo-user";
import { hydrateLearningCacheFromDatabase } from "@/lib/learning-api";

type DemoUser = {
  name: string;
  email: string;
  initials: string;
  role: "user" | "admin";
};

type DemoAuthGuardProps = {
  children: ReactNode;
};

const DEMO_USER_KEY = "habilidades-tfja:demo-user";
const LAST_ACTIVITY_KEY = "habilidades-tfja:last-activity";
const SESSION_CHANGED_EVENT = "habilidades-tfja:session-changed";
const INACTIVITY_LIMIT_MS = 10 * 60 * 1000;
const WARNING_SECONDS = 30;

const DEMO_USER: DemoUser = {
  name: "Miguel Ángel",
  email: "miguel.bernalg@tfja.gob.mx",
  initials: "MA",
  role: "user",
};

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

async function syncUserWithDatabase(user: DemoUser) {
  try {
    await registerDemoUser(user);
    await hydrateLearningCacheFromDatabase();
  } catch (error) {
    console.error("No fue posible sincronizar el usuario con MongoDB:", error);
  }
}

export function DemoAuthGuard({ children }: DemoAuthGuardProps) {
  const [loaded, setLoaded] = useState(false);
  const [hasSession, setHasSession] = useState(false);
  const [warningOpen, setWarningOpen] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(WARNING_SECONDS);
  const warningIntervalRef = useRef<number | null>(null);

  function persistActivity() {
    window.localStorage.setItem(LAST_ACTIVITY_KEY, String(Date.now()));
  }

  function closeSession() {
    window.localStorage.removeItem(DEMO_USER_KEY);
    window.localStorage.removeItem(LAST_ACTIVITY_KEY);
    setHasSession(false);
    setWarningOpen(false);
    window.dispatchEvent(new CustomEvent(SESSION_CHANGED_EVENT));
  }

  function continueSession() {
    persistActivity();
    setWarningOpen(false);
    setSecondsRemaining(WARNING_SECONDS);
  }

  useEffect(() => {
    const user = readStoredUser();

    setHasSession(Boolean(user));
    setLoaded(true);

    if (!user) {
      return;
    }

    if (!window.localStorage.getItem(LAST_ACTIVITY_KEY)) {
      persistActivity();
    }

    // La interfaz se muestra inmediatamente. La sincronización con MongoDB
    // continúa en segundo plano para no detener la navegación en "Rendering...".
    void syncUserWithDatabase(user);
  }, []);

  useEffect(() => {
    if (!hasSession) {
      return;
    }

    const activityEvents: Array<keyof WindowEventMap> = [
      "click",
      "keydown",
      "mousemove",
      "scroll",
      "touchstart",
    ];

    function registerActivity() {
      if (!warningOpen) {
        persistActivity();
      }
    }

    activityEvents.forEach((eventName) => {
      window.addEventListener(eventName, registerActivity, { passive: true });
    });

    const inactivityCheck = window.setInterval(() => {
      const savedActivity = Number(
        window.localStorage.getItem(LAST_ACTIVITY_KEY) ?? Date.now()
      );
      const inactiveFor = Date.now() - savedActivity;

      if (inactiveFor >= INACTIVITY_LIMIT_MS && !warningOpen) {
        setWarningOpen(true);
        setSecondsRemaining(WARNING_SECONDS);
      }
    }, 1000);

    return () => {
      activityEvents.forEach((eventName) => {
        window.removeEventListener(eventName, registerActivity);
      });
      window.clearInterval(inactivityCheck);
    };
  }, [hasSession, warningOpen]);

  useEffect(() => {
    if (!warningOpen) {
      if (warningIntervalRef.current) {
        window.clearInterval(warningIntervalRef.current);
        warningIntervalRef.current = null;
      }

      return;
    }

    warningIntervalRef.current = window.setInterval(() => {
      setSecondsRemaining((currentSeconds) =>
        Math.max(currentSeconds - 1, 0)
      );
    }, 1000);

    return () => {
      if (warningIntervalRef.current) {
        window.clearInterval(warningIntervalRef.current);
        warningIntervalRef.current = null;
      }
    };
  }, [warningOpen]);

  useEffect(() => {
    if (!warningOpen || secondsRemaining > 0) {
      return;
    }

    closeSession();
  }, [secondsRemaining, warningOpen]);

  function handleSignIn() {
    window.localStorage.setItem(DEMO_USER_KEY, JSON.stringify(DEMO_USER));
    persistActivity();
    setHasSession(true);
    window.dispatchEvent(new CustomEvent(SESSION_CHANGED_EVENT));
    void syncUserWithDatabase(DEMO_USER);
  }

  if (!loaded) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-3xl bg-white p-6 text-center shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
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
      <div className="flex min-h-[70vh] items-center justify-center px-4 py-6 sm:px-5">
        <section className="w-full max-w-2xl rounded-[28px] border border-white bg-white/90 p-5 text-center shadow-[0_20px_70px_rgba(15,23,42,0.10)] sm:p-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-3xl">
            🔐
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Acceso institucional
          </p>

          <h1 className="mt-4 text-2xl font-black tracking-tight text-[#061b3a] sm:text-3xl">
            Inicia sesión para continuar
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600">
            Para consultar contenidos, rutas, avance e insignias, inicia sesión
            con tu cuenta institucional.
          </p>

          <button
            type="button"
            onClick={handleSignIn}
            className="mt-6 w-full rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#061b3a] sm:w-auto"
          >
            Iniciar sesión con Microsoft 365
          </button>
        </section>
      </div>
    );
  }

  return (
    <>
      {children}

      {warningOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="session-warning-title"
        >
          <div className="w-full max-w-md rounded-[24px] bg-white p-5 text-center shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c78b3a]">
              Sesión por expirar
            </p>

            <h2
              id="session-warning-title"
              className="mt-3 text-2xl font-black text-[#061b3a]"
            >
              ¿Deseas continuar?
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              La sesión se cerrará en{" "}
              <strong>{secondsRemaining} segundos</strong> por inactividad.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={closeSession}
                className="w-full rounded-2xl border border-slate-200 px-5 py-3 text-sm font-bold text-[#061b3a]"
              >
                Cerrar sesión
              </button>

              <button
                type="button"
                onClick={continueSession}
                className="w-full rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white"
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
