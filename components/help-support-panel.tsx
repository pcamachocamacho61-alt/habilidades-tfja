export function HelpSupportPanel() {
  return (
    <section className="rounded-[28px] border border-white bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-8">
      <div className="grid gap-6 lg:grid-cols-[280px_1fr] lg:items-start">
        <div className="flex flex-col items-center justify-center rounded-[24px] bg-[#f6f9ff] p-6 text-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#0b376d] to-[#2b6cb0] shadow-[0_18px_40px_rgba(11,55,109,0.22)]">
            <svg
              viewBox="0 0 64 64"
              className="h-16 w-16 text-white"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 31V27C18 19.268 24.268 13 32 13C39.732 13 46 19.268 46 27V31"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <rect
                x="12"
                y="29"
                width="10"
                height="16"
                rx="4"
                fill="currentColor"
              />
              <rect
                x="42"
                y="29"
                width="10"
                height="16"
                rx="4"
                fill="currentColor"
              />
              <path
                d="M46 43C46 47.418 42.418 51 38 51H34"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <rect
                x="28"
                y="48"
                width="12"
                height="6"
                rx="3"
                fill="currentColor"
              />
            </svg>
          </div>

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.28em] text-[#c78b3a]">
            Ayuda y soporte
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#061b3a]">
            Atención a usuarios
          </h2>

          <p className="mt-3 max-w-[220px] text-sm leading-6 text-slate-500">
            Soporte para dudas relacionadas con el Sistema de Justicia en Línea
            2.0.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#c78b3a]">
            Canal de atención
          </p>

          <h3 className="mt-2 text-3xl font-bold leading-tight text-[#061b3a]">
            ¿Necesita apoyo?
          </h3>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Para cualquier duda, comuníquese con la Dirección de Registro y
            Atención a Usuarios. El área brinda apoyo al personal jurisdiccional
            del Tribunal y atención al público en general.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Ubicación
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Av. México 710 Piso 7, Col. San Jerónimo Lídice, Alcaldía
                Magdalena Contreras, Ciudad de México, C.P. 10200.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Extensiones internas
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Atención al personal jurisdiccional del Tribunal:
                <br />
                <span className="font-semibold text-[#061b3a]">67 7800</span> y{" "}
                <span className="font-semibold text-[#061b3a]">67 7801</span>
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Teléfonos
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Atención al público en general:
                <br />
                <span className="font-semibold text-[#061b3a]">5580005674</span>{" "}
                y{" "}
                <span className="font-semibold text-[#061b3a]">5550037507</span>
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#f8fbff] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Correo electrónico
              </p>
              <p className="mt-3 break-all text-sm leading-7 text-slate-600">
                <a
                  href="mailto:atencion.usuarios@tfja.gob.mx"
                  className="font-semibold text-[#0b376d] hover:underline"
                >
                  atencion.usuarios@tfja.gob.mx
                </a>
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:atencion.usuarios@tfja.gob.mx"
              className="inline-flex items-center rounded-full bg-[#0b376d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0a2f5d]"
            >
              Enviar correo
            </a>

            <a
              href="tel:5580005674"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-[#061b3a] transition hover:bg-slate-50"
            >
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}