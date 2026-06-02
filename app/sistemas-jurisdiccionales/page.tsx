import Link from "next/link";

const consultationVideos = [
  {
    id: "registro-unico",
    title: "Registro único",
    label: "Consulta inicial",
    duration: "Video de apoyo",
    video: "/course-assets/sistemas-jurisdiccionales/videos/registro-unico1.mp4",
    description:
      "Conoce el proceso mediante el cual la CURP se registra por única vez en el Sistema de Justicia en Línea 2.0, asociando el correo institucional y la contraseña de acceso.",
    bullets: [
      "Identifica el registro inicial de usuario dentro del SJL 2.0.",
      "Reconoce el uso del correo institucional como medio de acceso.",
      "Comprende que una CURP puede asociarse posteriormente con diversos perfiles.",
    ],
  },
  {
    id: "solicitud-perfil",
    title: "Solicitud de perfil",
    label: "Perfiles jurisdiccionales",
    duration: "Video de apoyo",
    video: "/course-assets/sistemas-jurisdiccionales/videos/solicitud-perfil1.mp4",
    description:
      "Revisa cómo se solicita un perfil dentro del Sistema de Justicia en Línea 2.0 después del registro y activación de cuenta.",
    bullets: [
      "Comprende la finalidad de la opción Completar Registro.",
      "Identifica que una persona puede solicitar uno o varios perfiles.",
      "Reconoce que el cambio de puesto o adscripción requiere solicitar un nuevo perfil.",
    ],
  },
];

const jurisdictionalProfiles = [
  {
    id: "magistrados",
    name: "Magistrados",
    description:
      "Rutas enfocadas en consulta, revisión de asuntos, seguimiento jurisdiccional y toma de decisiones dentro del expediente.",
  },
  {
    id: "secretarios-acuerdo",
    name: "Secretarios de Acuerdo",
    description:
      "Capacitación orientada a la elaboración, validación, firma, integración y seguimiento de acuerdos, sentencias y actuaciones.",
  },
  {
    id: "oficiales-jurisdiccionales",
    name: "Oficiales Jurisdiccionales",
    description:
      "Rutas para apoyar la gestión diaria de expedientes, promociones, validaciones y elaboración de documentos jurisdiccionales.",
  },
  {
    id: "oficiales-partes",
    name: "Oficiales de Partes",
    description:
      "Contenido enfocado en registro, recepción, integración inicial y canalización de promociones o documentos dentro del sistema.",
  },
  {
    id: "archivistas",
    name: "Archivistas",
    description:
      "Capacitación para organización, consulta, integración, control documental y seguimiento de expedientes digitales.",
  },
  {
    id: "actuarios",
    name: "Actuarios",
    description:
      "Rutas relacionadas con preparación, registro, seguimiento y control de notificaciones dentro del Juicio en Línea 2.0.",
  },
  {
    id: "secretarios-secretarios-acuerdos",
    name: "Secretarios de Secretarios de Acuerdos",
    description:
      "Contenido de apoyo para seguimiento operativo, revisión de tareas, coordinación documental y acompañamiento a procesos de acuerdo.",
  },
  {
    id: "auxiliares-sala",
    name: "Auxiliares de Sala",
    description:
      "Rutas introductorias para consulta, apoyo administrativo, control de información y acompañamiento en tareas de sala.",
  },
];

function ProfileIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      aria-hidden="true"
    >
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

function VideoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 6h10a2 2 0 0 1 2 2v1.5l3-2v9l-3-2V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SistemasJurisdiccionalesPage() {
  return (
    <main className="min-h-screen bg-[#f5f8fd] px-6 py-8">
      <section className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="text-sm font-bold text-[#0b376d] hover:underline"
        >
          ← Regresar al inicio
        </Link>

        <section className="mt-8 overflow-hidden rounded-[36px] border border-white bg-white/85 shadow-[0_20px_70px_rgba(15,23,42,0.10)]">
          <div className="grid gap-8 p-8 lg:grid-cols-[1fr_360px] lg:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#c78b3a]">
                Sistemas y aplicaciones jurisdiccionales
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-[#061b3a] md:text-5xl">
                Consulta, práctica y aprendizaje para cada función
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                Este módulo concentrará recursos de consulta y rutas de
                capacitación asociadas a sistemas jurisdiccionales del Tribunal.
                En esta primera etapa se muestran materiales iniciales de apoyo
                y una propuesta de aprendizaje por perfil.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-[#f5f8fd] p-5">
                  <p className="text-3xl font-black text-[#061b3a]">2</p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    videos de consulta inicial
                  </p>
                </div>

                <div className="rounded-3xl bg-[#f5f8fd] p-5">
                  <p className="text-3xl font-black text-[#061b3a]">8</p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    perfiles contemplados
                  </p>
                </div>

                <div className="rounded-3xl bg-[#fff8ef] p-5">
                  <p className="text-3xl font-black text-[#c78b3a]">MVP</p>
                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    estructura visual inicial
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#ead7b8] bg-[#fff8ef] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a66f24]">
                Enfoque del módulo
              </p>

              <h2 className="mt-4 text-2xl font-black text-[#061b3a]">
                Consulta ahora, enseñanza por perfiles después
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                La primera versión permite mostrar materiales de consulta y
                anticipar una futura organización de cursos según las funciones
                que realiza cada perfil dentro del Tribunal.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
                Consulta rápida
              </p>

              <h2 className="mt-2 text-3xl font-black text-[#061b3a]">
                Material inicial del SJL 2.0
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-500">
              Estos videos funcionan como recursos de apoyo para comprender el
              acceso inicial y la solicitud de perfiles dentro del sistema.
            </p>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {consultationVideos.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-[32px] border border-white bg-white/90 shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
              >
                <div className="bg-[#061b3a] p-4">
                  <video
                    className="aspect-video w-full rounded-2xl bg-black object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src={item.video} type="video/mp4" />
                    Tu navegador no puede reproducir video MP4.
                  </video>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-[#0b376d]">
                      <VideoIcon />
                    </span>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c78b3a]">
                        {item.label}
                      </p>

                      <h3 className="text-2xl font-black text-[#061b3a]">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-5 rounded-3xl bg-[#f5f8fd] p-5">
                    <p className="text-sm font-bold text-[#061b3a]">
                      En este recurso revisarás:
                    </p>

                    <ul className="mt-3 space-y-3">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-sm leading-6 text-slate-600"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c78b3a]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[36px] border border-white bg-white/80 p-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
                Enseñanza por perfiles
              </p>

              <h2 className="mt-2 text-3xl font-black text-[#061b3a]">
                Rutas específicas según función
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-500">
              En una siguiente etapa, cada perfil podrá tener cursos,
              simulaciones y guías específicas de acuerdo con las tareas que
              realiza dentro de los sistemas jurisdiccionales.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {jurisdictionalProfiles.map((profile) => (
              <article
                key={profile.id}
                className="rounded-3xl border border-slate-100 bg-[#f8fafc] p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_40px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#0b376d] shadow-sm">
                  <ProfileIcon />
                </div>

                <h3 className="mt-4 text-lg font-black text-[#061b3a]">
                  {profile.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {profile.description}
                </p>

                <p className="mt-5 inline-flex rounded-full bg-[#fff8ef] px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#a66f24]">
                  Próximamente
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}