"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { SidebarBadgeCount } from "@/components/sidebar-badge-count";
import { DemoAuthStatus } from "@/components/demo-auth-status";
import { DemoAuthGuard } from "@/components/demo-auth-guard";
import { SidebarAlertCount } from "@/components/sidebar-alert-count";
type DigitalToolsShellProps = {
  children: ReactNode;
};

export function DigitalToolsShell({ children }: DigitalToolsShellProps) {
  const pathname = usePathname();
const [sidebarOpen, setSidebarOpen] = useState(true);
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

            <Image
              src="/brand/logo-habilidades-tfja.png"
              alt="Habilidades TFJA"
              width={150}
              height={60}
              className="h-auto w-[150px]"
            />

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
    <span className="text-base">⌂</span>
    <span>Inicio</span>
  </Link>

  <Link
    href="/herramientas-digitales/insignias"
    className={getMenuItemClass(isBadgesActive)}
  >
    <span className="text-base">◆</span>
    <span>Mis insignias</span>
    <SidebarBadgeCount />
  </Link>

  <Link
    href="/herramientas-digitales/notas"
    className={getMenuItemClass(pathname === "/herramientas-digitales/notas")}
  >
    <span className="text-base">✎</span>
    <span>Block de notas</span>
  </Link>

  <Link
    href="/herramientas-digitales/alertas"
    className={getMenuItemClass(pathname === "/herramientas-digitales/alertas")}
  >
    <span className="text-base">●</span>
    <span>Alertas</span>
    <SidebarAlertCount />
  </Link>

  <Link
    href="/herramientas-digitales/perfil"
    className={getMenuItemClass(pathname === "/herramientas-digitales/perfil")}
  >
    <span className="text-base">◉</span>
    <span>Mi perfil</span>
  </Link>
</nav>

            <div className="mt-auto">
              <div className="border-t border-slate-200 pt-6 text-sm font-semibold text-slate-500">
                Ayuda y soporte
              </div>

              <div className="mt-20 text-center text-xs font-bold uppercase tracking-[0.25em] text-[#061b3a]">
                <span className="text-[#c78b3a]">⚖</span>
                <br />
                Menos clics,
                <br />
                <span className="text-[#c78b3a]">más justicia.</span>
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