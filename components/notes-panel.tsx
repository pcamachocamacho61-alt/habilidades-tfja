"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NOTES_KEY = "habilidades-tfja:notes";

export function NotesPanel() {
  const [note, setNote] = useState("");
  const [savedNote, setSavedNote] = useState("");
  const [savedAt, setSavedAt] = useState("");

  useEffect(() => {
    const storedNote = window.localStorage.getItem(NOTES_KEY);
    const storedDate = window.localStorage.getItem(`${NOTES_KEY}:saved-at`);

    if (storedNote) {
      setNote(storedNote);
      setSavedNote(storedNote);
    }

    if (storedDate) {
      setSavedAt(storedDate);
    }
  }, []);

  function handleSaveNote() {
    const now = new Date().toLocaleString("es-MX", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    window.localStorage.setItem(NOTES_KEY, note);
    window.localStorage.setItem(`${NOTES_KEY}:saved-at`, now);

    setSavedNote(note);
    setSavedAt(now);
  }

  function handleClearNote() {
    window.localStorage.removeItem(NOTES_KEY);
    window.localStorage.removeItem(`${NOTES_KEY}:saved-at`);

    setNote("");
    setSavedNote("");
    setSavedAt("");
  }

  const hasChanges = note !== savedNote;

  return (
    <section className="rounded-[32px] bg-white/60 p-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Herramienta de apoyo
          </p>

          <h1 className="mt-3 text-3xl font-black text-[#061b3a]">
            Block de notas
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Escribe apuntes, ideas o pendientes relacionados con tus rutas de
            aprendizaje. Esta información se guarda de forma local en el
            navegador durante el MVP.
          </p>
        </div>

        <div className="rounded-3xl border border-white bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Estado
          </p>

          <h2 className="mt-2 text-xl font-black text-[#061b3a]">
            {savedNote ? "Nota guardada" : "Sin nota guardada"}
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {savedAt
              ? `Última actualización: ${savedAt}`
              : "Aún no has guardado ninguna nota."}
          </p>

          {hasChanges && (
            <div className="mt-4 rounded-2xl bg-amber-50 p-4 text-sm font-bold text-amber-700">
              Tienes cambios sin guardar.
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 rounded-[32px] border border-white bg-white/90 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-black text-[#061b3a]">
              Mis apuntes
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Puedes usar este espacio para resumir pasos, guardar dudas o
              anotar prácticas pendientes.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleSaveNote}
              className="rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white hover:bg-[#061b3a]"
            >
              Guardar nota
            </button>

            <button
              type="button"
              onClick={handleClearNote}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-500 hover:bg-slate-50"
            >
              Borrar
            </button>
          </div>
        </div>

        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Ejemplo: Recordar revisar permisos antes de compartir archivos en OneDrive..."
          className="mt-6 min-h-[360px] w-full resize-y rounded-3xl border border-slate-200 bg-[#f8fafc] p-5 text-sm leading-7 text-slate-700 outline-none transition focus:border-[#0b376d] focus:bg-white"
        />

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold text-slate-400">
            Caracteres: {note.length}
          </p>

          <Link
            href="/herramientas-digitales/onedrive/descubre"
            className="text-sm font-bold text-[#0b376d] hover:underline"
          >
            Regresar a la ruta OneDrive →
          </Link>
        </div>
      </div>
    </section>
  );
}