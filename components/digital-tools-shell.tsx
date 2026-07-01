"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

import { DemoAuthGuard } from "@/components/demo-auth-guard";
import { DemoAuthStatus } from "@/components/demo-auth-status";
import { SidebarAlertCount } from "@/components/sidebar-alert-count";
import { SidebarBadgeCount } from "@/components/sidebar-badge-count";

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
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
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
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

function FaqIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M9.8 9.4a2.4 2.4 0 0 1 4.5 1.2c0 1.8-2.3 2-2.3 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 17.3h.01"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AdminIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
      <path
        d="M12 3 5 6v5c0 4.6 2.9 8.7 7 10 4.1-1.3 7-5.4 7-10V6l-7-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12h5M12 9.5v5"
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
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const isCourseRoute =
    pathname.includes("/descubre") || pathname.includes("/potencia");

  useEffect(() => {
    if (isCourseRoute) {
      setSidebarOpen(false);
    }
  }, [isCourseRoute, pathname]);

  useEffect(() => {
    function syncRole() {
      try {
        const storedUser = window.localStorage.getItem(
          "habilidades-tfja:demo-user"
        );

        if (!storedUser) {
          setIsAdmin(false);
          return;
        }

        const parsedUser = JSON.parse(storedUser) as { role?: string };
        setIsAdmin(parsedUser.role === "admin");
      } catch {
        setIsAdmin(false);
      }
    }

    syncRole();
    window.addEventListener("habilidades-tfja:session-changed", syncRole);
    window.addEventListener("storage", syncRole);

    return () => {
      window.removeEventListener("habilidades-tfja:session-changed", syncRole);
      window.removeEventListener("storage", syncRole);
    };
  }, []);


  const isHomeActive =
    pathname === "/herramientas-digitales" ||
    pathname === "/herramientas-digitales/onedrive";

  const isBadgesActive =
    pathname === "/herramientas-digitales/insignias";

  const isNotesActive =
    pathname === "/herramientas-digitales/notas";

  const isAlertsActive =
    pathname === "/herramientas-digitales/alertas";

  const isProfileActive =
    pathname === "/herramientas-digitales/perfil";

  const isFaqActive =
    pathname === "/herramientas-digitales/preguntas-frecuentes";

  const isAdminActive = pathname.startsWith(
    "/herramientas-digitales/administracion"
  );


  function getMenuItemClass(active: boolean) {
    return active
      ? "flex min-h-[46px] items-center gap-3 rounded-xl bg-blue-50 px-3.5 py-2.5 text-blue-700"
      : "flex min-h-[46px] items-center gap-3 rounded-xl px-3.5 py-2.5 transition hover:bg-blue-50 hover:text-blue-700";
  }


  const menuContent = (
    <>
      <nav className="space-y-1.5 text-[13px] font-semibold text-slate-600">
        <Link
          href="/herramientas-digitales"
          className={getMenuItemClass(isHomeActive)}
        >
          <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
            <HomeIcon />
          </span>
          <span>Inicio</span>
        </Link>

        <Link
          href="/herramientas-digitales/insignias"
          className={getMenuItemClass(isBadgesActive)}
        >
          <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-2xl bg-[#fff8ef] text-[#c78b3a]">
            <BadgeIcon />
          </span>
          <span>Mis insignias</span>
          <SidebarBadgeCount />
        </Link>

        <Link
          href="/herramientas-digitales/notas"
          className={getMenuItemClass(isNotesActive)}
        >
          <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
            <NotesIcon />
          </span>
          <span>Bloc de notas</span>
        </Link>

        <Link
          href="/herramientas-digitales/alertas"
          className={getMenuItemClass(isAlertsActive)}
        >
          <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#0b376d]">
            <AlertIcon />
          </span>
          <span>Alertas</span>
          <SidebarAlertCount />
        </Link>

        <Link
          href="/herramientas-digitales/perfil"
          className={getMenuItemClass(isProfileActive)}
        >
          <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-[#061b3a]">
            <ProfileIcon />
          </span>
          <span>Mi perfil</span>
        </Link>

        <Link
          href="/herramientas-digitales/preguntas-frecuentes"
          className={getMenuItemClass(isFaqActive)}
        >
          <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-2xl bg-[#fff8ef] text-[#c78b3a]">
            <FaqIcon />
          </span>
          <span>Preguntas frecuentes</span>
        </Link>

        {isAdmin && (
          <Link
            href="/herramientas-digitales/administracion/reinicios"
            className={getMenuItemClass(isAdminActive)}
          >
            <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-700">
              <AdminIcon />
            </span>
            <span>Administración</span>
          </Link>
        )}
      </nav>

      <div className="mt-auto shrink-0 border-t border-slate-200 px-2 pb-2 pt-4">
        <div className="flex w-full flex-col items-center justify-center text-center">
          <Image
            src="/brand/menos-clics-mas-justicia-sinfondo.png"
            alt="Menos clics, más justicia"
            width={58}
            height={58}
            className="mx-auto block w-[58px]"
            style={{ height: "auto" }}
          />

          <p className="mt-3 text-center text-[11px] font-black uppercase leading-[1.55] tracking-[0.23em] text-[#061b3a]">
            Menos clics,
            <br />
            <span className="text-[#c78b3a]">más justicia.</span>
          </p>
        </div>
      </div>
    </>
  );

  return (
    <main className="min-h-screen bg-[#f5f8fd]">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="flex w-full items-center justify-between gap-3 px-4 py-3 sm:px-5 xl:px-8 2xl:px-12">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() =>
                setSidebarOpen((currentValue) => !currentValue)
              }
              className="rounded-xl p-2.5 text-xl text-[#061b3a] transition hover:bg-blue-50 hover:text-blue-700"
              aria-label={
                sidebarOpen
                  ? "Ocultar menú lateral"
                  : "Mostrar menú lateral"
              }
              aria-expanded={sidebarOpen}
              aria-controls={
                isCourseRoute
                  ? "digital-tools-course-menu"
                  : "digital-tools-sidebar digital-tools-mobile-menu"
              }
            >
              ☰
            </button>

            <Link href="/" className="inline-flex shrink-0 items-center">
              <Image
                src="/brand/logo-habilidades-tfja.png"
                alt="Ir al inicio de Habilidades TFJA"
                width={104}
                height={44}
                className="w-[104px] sm:w-[126px]"
                style={{ height: "auto" }}
                priority
              />
            </Link>

            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-[#061b3a]">
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
          <section className="w-full px-4 py-5 sm:px-5 sm:py-6 xl:px-8 2xl:px-14">
            {children}
          </section>
        ) : (
          <section
            className={
              sidebarOpen
                ? "grid w-full gap-6 py-0 pr-4 pl-0 sm:pr-6 lg:grid-cols-[270px_minmax(0,1fr)] xl:pr-10 2xl:pr-14"
                : "grid w-full gap-5 px-4 py-5 sm:px-5 sm:py-6 lg:grid-cols-[minmax(0,1fr)] xl:px-8 2xl:px-14"
            }
          >
            {sidebarOpen && (
              <aside
                id="digital-tools-sidebar"
                className="sticky top-[82px] hidden h-[calc(100dvh-82px)] min-h-0 self-start overflow-y-auto overscroll-contain rounded-r-[24px] border border-l-0 border-white bg-white/90 p-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)] lg:flex lg:flex-col"
                aria-label="Menú de herramientas digitales"
              >
                {menuContent}
              </aside>
            )}

            <div className="min-w-0">{children}</div>
          </section>
        )}
      </DemoAuthGuard>

      {isCourseRoute && (
        <aside
          id="digital-tools-course-menu"
          className={
            sidebarOpen
              ? "fixed inset-y-0 left-0 z-[100] flex w-[86%] max-w-[300px] translate-x-0 flex-col overflow-y-auto overscroll-contain bg-white p-5 shadow-[18px_0_55px_rgba(15,23,42,0.18)] transition-transform duration-300 ease-out sm:w-[300px]"
              : "pointer-events-none fixed inset-y-0 left-0 z-[100] flex w-[86%] max-w-[300px] -translate-x-full flex-col overflow-y-auto overscroll-contain bg-white p-5 shadow-[18px_0_55px_rgba(15,23,42,0.18)] transition-transform duration-300 ease-out sm:w-[300px]"
          }
          aria-label="Menú general de herramientas digitales"
          aria-hidden={!sidebarOpen}
        >
          <div className="mb-5 flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c78b3a]">
                Navegación general
              </p>
              <h2 className="mt-1 text-lg font-black text-[#061b3a]">
                Herramientas digitales
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-xl font-black text-[#061b3a] transition hover:bg-slate-200"
              aria-label="Cerrar menú"
            >
              ×
            </button>
          </div>

          {menuContent}
        </aside>
      )}

      {!isCourseRoute && (
        <aside
          id="digital-tools-mobile-menu"
          className={
            sidebarOpen
              ? "fixed inset-y-0 left-0 z-[100] flex w-[86%] max-w-[300px] translate-x-0 flex-col overflow-y-auto bg-white p-5 shadow-[18px_0_55px_rgba(15,23,42,0.18)] transition-transform duration-300 lg:hidden"
              : "pointer-events-none fixed inset-y-0 left-0 z-[100] flex w-[86%] max-w-[300px] -translate-x-full flex-col overflow-y-auto bg-white p-5 shadow-[18px_0_55px_rgba(15,23,42,0.18)] transition-transform duration-300 lg:hidden"
          }
          aria-label="Menú de herramientas digitales"
          aria-hidden={!sidebarOpen}
        >
          {menuContent}
        </aside>
      )}
    </main>
  );
}
