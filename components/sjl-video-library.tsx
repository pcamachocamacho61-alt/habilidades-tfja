"use client";

import { useMemo, useState } from "react";
import { sjlVideoSections } from "@/data/sjl-videos";
import { HelpSupportPanel } from "@/components/help-support-panel";

function VideoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M5 6h10a2 2 0 0 1 2 2v1.5l3-2v9l-3-2V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M7 10V8a5 5 0 0 1 10 0v2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6 10h12v10H6V10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M7 4h7l4 4v12H7V4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14 4v5h4M10 13h5M10 17h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ExcelIcon() {
  return (
    <svg viewBox="0 0 96 96" className="h-28 w-28" aria-hidden="true">
      <rect x="30" y="10" width="50" height="76" rx="8" fill="#21A366" />
      <rect x="30" y="10" width="25" height="19" fill="#33C481" opacity="0.95" />
      <rect x="55" y="10" width="25" height="19" fill="#3FD08B" opacity="0.95" />
      <rect x="30" y="29" width="25" height="19" fill="#107C41" opacity="0.95" />
      <rect x="55" y="29" width="25" height="19" fill="#21A366" opacity="0.95" />
      <rect x="30" y="48" width="25" height="19" fill="#185C37" opacity="0.95" />
      <rect x="55" y="48" width="25" height="19" fill="#107C41" opacity="0.95" />
      <rect x="30" y="67" width="25" height="19" fill="#107C41" opacity="0.95" />
      <rect x="55" y="67" width="25" height="19" fill="#185C37" opacity="0.95" />
      <rect
        x="14"
        y="26"
        width="44"
        height="44"
        rx="7"
        fill="#107C41"
        filter="url(#shadow)"
      />
      <path
        d="M28 37L35.4 48L27.5 60H35.2L39.3 53.1L43.5 60H51.5L43.2 47.7L50.8 37H43.4L39.6 43.4L35.8 37H28Z"
        fill="white"
      />
      <defs>
        <filter id="shadow" x="10" y="24" width="54" height="54">
          <feDropShadow dx="3" dy="4" stdDeviation="2" floodOpacity="0.25" />
        </filter>
      </defs>
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M14 5h5v5M19 5l-8 8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={open ? "h-5 w-5 rotate-90 transition" : "h-5 w-5 transition"}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ResourceSupportPanel({
  title,
  description,
  materials,
}: {
  title: string;
  description: string;
  materials: {
    title: string;
    type: "pdf" | "link";
    url: string;
  }[];
}) {
  return (
    <div className="mt-7 overflow-hidden rounded-[28px] border border-emerald-100 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
      <div className="grid gap-6 p-6 lg:grid-cols-[320px_1fr] lg:items-center">
        <div className="flex min-h-[280px] flex-col items-center justify-center rounded-[24px] bg-gradient-to-br from-emerald-50 to-white p-6 text-center">
          <div className="flex h-40 w-40 items-center justify-center rounded-[30px] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.10)]">
            <ExcelIcon />
          </div>

          <p className="mt-6 text-xs font-black uppercase tracking-[0.24em] text-emerald-700">
            Recurso de consulta
          </p>

          <p className="mt-2 text-sm font-semibold text-slate-500">
            Archivo externo en SharePoint
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Material de apoyo
          </p>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-[#061b3a] md:text-3xl">
            {title}
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            {description === "Click aqui para consultar"
              ? "Consulta el archivo de apoyo relacionado con este catálogo. El recurso se abrirá desde SharePoint para mantener la versión institucional actualizada."
              : description}
          </p>

          <div className="mt-7 grid gap-3">
            {materials.map((material) => (
              <a
                key={material.url}
                href={material.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-[#f8fafc] px-5 py-4 text-sm font-bold text-[#0b376d] transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
                    <FileIcon />
                  </span>

                  <span>
                    {material.type.toUpperCase()} · {material.title}
                  </span>
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0b376d] transition group-hover:translate-x-1">
                  <ExternalLinkIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SjlVideoLibrary() {
  const firstAvailableVideo = useMemo(() => {
    for (const section of sjlVideoSections) {
      const itemWithEmbed = section.items.find((item) => item.embedUrl);

      if (itemWithEmbed) {
        return itemWithEmbed;
      }

      const itemWithVideo = section.items.find((item) => item.videoUrl);

      if (itemWithVideo) {
        return itemWithVideo;
      }

      const itemWithMaterial = section.items.find(
        (item) => item.supportMaterials && item.supportMaterials.length > 0
      );

      if (itemWithMaterial) {
        return itemWithMaterial;
      }
    }

    return sjlVideoSections[0].items[0];
  }, []);

  const [selectedVideoId, setSelectedVideoId] = useState(firstAvailableVideo.id);

  const [openSections, setOpenSections] = useState<string[]>([
    "introduccion-catalogos",
  ]);

  function toggleSection(sectionId: string) {
    setOpenSections((current) =>
      current.includes(sectionId)
        ? current.filter((id) => id !== sectionId)
        : [...current, sectionId]
    );
  }

  const selectedVideo = useMemo(() => {
    return (
      sjlVideoSections
        .flatMap((section) => section.items)
        .find((item) => item.id === selectedVideoId) ?? firstAvailableVideo
    );
  }, [firstAvailableVideo, selectedVideoId]);

  const totalItems = sjlVideoSections.reduce(
    (total, section) => total + section.items.length,
    0
  );

  const availableItems = sjlVideoSections.reduce(
    (total, section) =>
      total +
      section.items.filter((item) =>
        Boolean(
          item.videoUrl ||
            item.embedUrl ||
            (item.supportMaterials && item.supportMaterials.length > 0) ||
            item.id === "0501"
        )
      ).length,
    0
  );

  const isHelpResource = selectedVideo.id === "0501";

  const isSupportOnlyResource =
    !selectedVideo.embedUrl &&
    !selectedVideo.videoUrl &&
    selectedVideo.supportMaterials &&
    selectedVideo.supportMaterials.length > 0;

  return (
    <section className="mt-6 grid gap-5 xl:grid-cols-[360px_minmax(0,1fr)]">
      <aside className="sticky top-5 max-h-[calc(100vh-48px)] overflow-y-auto rounded-[28px] border border-white bg-white/90 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] [scrollbar-width:thin] [scrollbar-color:#cbd5e1_transparent]">
        <div className="rounded-3xl bg-[#f5f8fd] p-5">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Biblioteca de consulta
          </p>

          <h3 className="mt-2 text-2xl font-black text-[#061b3a]">
            Juicio en Línea 2.0
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Selecciona un recurso del menú lateral.
          </p>

          
        </div>

        <div className="mt-6 space-y-3">
          {sjlVideoSections.map((section) => {
            const isOpen = openSections.includes(section.id);
            const sectionHasActiveItem = section.items.some(
              (item) => item.id === selectedVideo.id
            );

            return (
              <div key={section.id} className="rounded-2xl">
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                 className={
  sectionHasActiveItem
    ? "flex w-full items-center gap-2 rounded-2xl border border-[#9fb7dc] bg-[#dfeeff] px-3 py-3 text-left text-[#061b3a] shadow-sm"
    : "flex w-full items-center gap-2 rounded-2xl px-3 py-3 text-left text-[#061b3a] hover:bg-[#f1f6ff]"
}
                >
                  <span className="text-slate-500">
                    <ChevronIcon open={isOpen} />
                  </span>

                  <span className="text-base font-black">{section.title}</span>
                </button>

                {isOpen && (
                  <div className="mt-2 space-y-1 pl-8">
                    {section.items.map((item) => {
                      const active = item.id === selectedVideo.id;
                      const isHelpItem = item.id === "0501";
                      const hasPlayableVideo = Boolean(item.embedUrl);
                      const hasSharePointLink = Boolean(item.videoUrl);
                      const hasSupportMaterial = Boolean(
                        item.supportMaterials && item.supportMaterials.length > 0
                      );

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedVideoId(item.id)}
                         className={
  active
    ? "block w-full rounded-lg border border-[#d9b98d] bg-[#fff3df] px-3 py-1.5 text-left text-sm font-semibold text-[#061b3a]"
    : "block w-full rounded-lg px-3 py-1.5 text-left text-sm font-medium text-slate-700 hover:bg-[#fff8ef]"
}
                        >
                          {item.title}

                          <span className="sr-only">
                            {isHelpItem
                              ? "Ayuda y soporte"
                              : hasPlayableVideo
                                ? "Video embebido"
                                : hasSharePointLink
                                  ? "Pendiente de código embed"
                                  : hasSupportMaterial
                                    ? "Material de apoyo"
                                    : "Pendiente de URL"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </aside>

      <article className="min-w-0 rounded-[30px] border border-white bg-white/90 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
        <div className="border-b border-slate-200 pb-6">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#c78b3a]">
            Material inicial del SJL 2.0
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-[#061b3a]">
            {isHelpResource ? "Ayuda y soporte" : selectedVideo.title}
          </h1>

          {!isHelpResource && !isSupportOnlyResource && (
            <>
              <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
                {selectedVideo.descriptionParts
                  ? selectedVideo.descriptionParts.map((part, index) =>
                      part.href ? (
                        <a
                          key={`${part.text}-${index}`}
                          href={part.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-[#0b376d] underline decoration-[#c78b3a] decoration-2 underline-offset-4 hover:text-[#082a54]"
                        >
                          {part.text}
                        </a>
                      ) : (
                        <span key={`${part.text}-${index}`}>{part.text}</span>
                      )
                    )
                  : selectedVideo.description}
              </p>

              {selectedVideo.note && (
                <div className="mt-5 rounded-2xl border border-[#ead7b8] bg-[#fff8ef] px-5 py-4">
                  <p className="text-sm leading-7 text-slate-700">
                    <span className="font-black text-[#a66f24]">Nota: </span>
                    {selectedVideo.note}
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        {isHelpResource ? (
          <div className="mt-7">
            <HelpSupportPanel />
          </div>
        ) : isSupportOnlyResource ? (
          <ResourceSupportPanel
            title={selectedVideo.title}
            description={selectedVideo.description}
            materials={selectedVideo.supportMaterials ?? []}
          />
        ) : (
          <>
            <div className="mt-7 overflow-hidden rounded-[24px] border border-slate-200 bg-[#061b3a] p-4">
              {selectedVideo.embedUrl ? (
                <iframe
                  src={selectedVideo.embedUrl}
                  title={selectedVideo.title}
                  className="aspect-video w-full rounded-2xl border-0 bg-black"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : selectedVideo.videoUrl ? (
                <div className="flex aspect-video w-full flex-col items-center justify-center rounded-2xl bg-white/10 px-5 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white">
                    <VideoIcon />
                  </span>

                  <h2 className="mt-5 text-2xl font-black text-white">
                    Video pendiente de código embed
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                    Este recurso ya tiene vínculo de SharePoint, pero falta
                    agregar el código de inserción para reproducirlo dentro de
                    la plataforma.
                  </p>

                  <a
                    href={selectedVideo.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-[#061b3a] hover:bg-blue-50"
                  >
                    Abrir video en SharePoint
                  </a>
                </div>
              ) : (
                <div className="flex aspect-video w-full flex-col items-center justify-center rounded-2xl bg-white/10 px-5 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white">
                    <LockIcon />
                  </span>

                  <h2 className="mt-5 text-2xl font-black text-white">
                    Video pendiente de integrar
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
                    Este tema ya está contemplado en la estructura de consulta,
                    pero todavía falta agregar la URL del video.
                  </p>
                </div>
              )}
            </div>

            {selectedVideo.supportMaterials &&
              selectedVideo.supportMaterials.length > 0 && (
                <div className="mt-6 rounded-3xl border border-slate-200 bg-[#f8fafc] p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#0b376d] shadow-sm">
                      <FileIcon />
                    </span>

                    <div>
                      <p className="text-sm font-black text-[#061b3a]">
                        Material de apoyo
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        Documentos vinculados al recurso seleccionado.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {selectedVideo.supportMaterials.map((material) => (
                      <a
                        key={material.url}
                        href={material.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-bold text-[#0b376d] hover:bg-blue-50"
                      >
                        {material.type.toUpperCase()} · {material.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
          </>
        )}

        {selectedVideo.tags && selectedVideo.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {selectedVideo.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#fff8ef] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#a66f24]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </section>
  );
}