"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { SidebarBadgeCount } from "@/components/sidebar-badge-count";
import { DemoAuthStatus } from "@/components/demo-auth-status";
import { DemoAuthGuard } from "@/components/demo-auth-guard";
import { SidebarAlertCount } from "@/components/sidebar-alert-count";

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-8.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 3 15 8.5l6 .8-4.4 4.3 1.1 6-5.7-2.9-5.7 2.9 1.1-6L3 9.3l6-.8L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NotesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M7 4h8l4 4v12H7V4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M15 4v5h4M10 13h6M10 17h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 4a6 6 0 0 0-6 6v3.5L4.5 16h15L18 13.5V10a6 6 0 0 0-6-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 19a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.5 20c1.2-3.5 4-5.5 7.5-5.5s6.3 2 7.5 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
type DigitalToolsShellProps = {
  children: ReactNode;
};

export function DigitalToolsShell({ children }: DigitalToolsShellProps) {
  const pathname = usePathname();
const [sidebarOpen, setSidebarOpen] = useState(false);
  const isCourseRoute =
    pathname.includes("/descubre") || pathname.includes("/potencia");
const isHomeActive =
  pathname === "/herramientas-digitales" ||
  pathname === "/herramientas-digitales/onedrive";
const isBadgesActive = pathname === "/herramientas-digitales/insignias";

function getMenuItemClass(active: boolean) {
  return active
    ? "flex items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 text-blue-700"
    : "flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-blue-50 hover:text-blue-700";
}
  return (
    <main className="min-h-screen bg-[#f5f8fd]">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="flex w-full items-center justify-between px-6 py-5 xl:px-10 2xl:px-14">
          <div className="flex items-center gap-4">
            <button
  type="button"
  onClick={() => setSidebarOpen((currentValue) => !currentValue)}
  className="rounded-2xl p-3 text-2xl text-[#061b3a] transition hover:bg-blue-50 hover:text-blue-700"
  aria-label="Mostrar u ocultar menú lateral"
>
  ☰
</button>

           <Link href="/" className="inline-flex items-center">
  <Image
    src="/brand/logo-habilidades-tfja.png"
    alt="Ir al inicio de Habilidades TFJA"
    width={120}
    height={50}
    className="w-[150px]"
    style={{ height: "auto" }}
    priority
  />
</Link>

            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-[#061b3a]">
                Herramientas digitales
              </h1>

              <p className="text-xs text-slate-500">
                Inicio &gt; Herramientas digitales
              </p>
            </div>
          </div>

          <DemoAuthStatus />
        </div>
      </header>
<DemoAuthGuard>
     {isCourseRoute ? (
  <section className="w-full px-6 py-8 xl:px-10 2xl:px-14">
    {children}
  </section>
) : (
       <section
  className={
    sidebarOpen
      ? "grid w-full gap-6 px-6 py-8 lg:grid-cols-[240px_minmax(0,1fr)] xl:px-10 2xl:px-14"
      : "grid w-full gap-6 px-6 py-8 lg:grid-cols-[minmax(0,1fr)] xl:px-10 2xl:px-14"
  }
>
    {sidebarOpen && (
          <aside className="sticky top-28 hidden h-[calc(100vh-140px)] overflow-y-auto rounded-3xl border border-white bg-white/90 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] lg:flex lg:flex-col">
<nav className="space-y-2 text-sm font-semibold text-slate-600">
  <Link
    href="/herramientas-digitales"
    className={getMenuItemClass(isHomeActive)}
  >
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
      <HomeIcon />
    </span>
    <span>Inicio</span>
  </Link>

  <Link
    href="/herramientas-digitales/insignias"
    className={getMenuItemClass(isBadgesActive)}
  >
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#fff8ef] text-[#c78b3a]">
      <BadgeIcon />
    </span>
    <span>Mis insignias</span>
    <SidebarBadgeCount />
  </Link>

  <Link
    href="/herramientas-digitales/notas"
    className={getMenuItemClass(pathname === "/herramientas-digitales/notas")}
  >
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
      <NotesIcon />
    </span>
    <span>Block de notas</span>
  </Link>

  <Link
    href="/herramientas-digitales/alertas"
    className={getMenuItemClass(pathname === "/herramientas-digitales/alertas")}
  >
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0b376d]">
      <AlertIcon />
    </span>
    <span>Alertas</span>
    <SidebarAlertCount />
  </Link>

  <Link
    href="/herramientas-digitales/perfil"
    className={getMenuItemClass(pathname === "/herramientas-digitales/perfil")}
  >
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[#061b3a]">
      <ProfileIcon />
    </span>
    <span>Mi perfil</span>
  </Link>
</nav>

            <div className="mt-auto">
              <div className="border-t border-slate-200 pt-6 text-sm font-semibold text-slate-500">
                
                 </div>

               <div className="mt-10 flex w-full flex-col items-center justify-center text-center">
  <Image
    src="/brand/menos-clics-mas-justicia.png"
    alt="Menos clics, más justicia"
    width={70}
    height={70}
    className="mx-auto block w-[70px]"
    style={{ height: "auto" }}
  />

  <p className="mt-5 text-center text-xs font-black uppercase leading-5 tracking-[0.35em] text-[#061b3a]">
    Menos clics,
    <br />
    <span className="text-[#c78b3a]">más justicia.</span>
  </p>
</div>
              </div>
             </aside>
)}
              <div className="min-w-0">{children}</div>
              </section>
      )}
      </DemoAuthGuard>
    </main>
  );
}