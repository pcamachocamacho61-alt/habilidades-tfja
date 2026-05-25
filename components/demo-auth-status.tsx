"use client";

import { useEffect, useState } from "react";

type DemoUser = {
  name: string;
  email: string;
  initials: string;
};

const DEMO_USER_KEY = "habilidades-tfja:demo-user";

const DEMO_USER: DemoUser = {
  name: "Pedro Camacho",
  email: "pedro.camacho@tfja.gob.mx",
  initials: "PC",
};

export function DemoAuthStatus() {
  const [user, setUser] = useState<DemoUser | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedUser = window.localStorage.getItem(DEMO_USER_KEY);

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    setLoaded(true);
  }, []);

  function handleSignIn() {
   window.localStorage.setItem(DEMO_USER_KEY, JSON.stringify(DEMO_USER));
  setUser(DEMO_USER);
  window.location.reload();
  }

  function handleSignOut() {
  window.localStorage.removeItem(DEMO_USER_KEY);
  setUser(null);
  window.location.reload();
}

  if (!loaded) {
    return (
      <div className="h-12 w-32 animate-pulse rounded-2xl bg-slate-100" />
    );
  }

  if (!user) {
  return null;
}

  return (
    <div className="flex items-center gap-3">
      <div className="hidden text-right md:block">
        <p className="text-sm font-bold text-[#061b3a]">
          {user.name}
        </p>

        <p className="text-xs text-slate-500">
          {user.email}
        </p>
      </div>

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b376d] text-sm font-black text-white">
        {user.initials}
      </div>

      <button
        type="button"
        onClick={handleSignOut}
        className="hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-[#061b3a] hover:bg-slate-50 md:inline-flex"
      >
        Cerrar sesión
      </button>
    </div>
  );
}