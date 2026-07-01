"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  deleteCurrentUserNote,
  getCurrentUserNote,
  saveCurrentUserNote,
} from "@/lib/learning-api";

const NOTES_KEY = "habilidades-tfja:notes";
const NOTES_SAVED_AT_KEY = `${NOTES_KEY}:saved-at`;
const MAX_NOTE_LENGTH = 2000;

type StatusMessage = {
  type: "success" | "error";
  text: string;
};

export function NotesPanel() {
  const [note, setNote] = useState("");
  const [savedNote, setSavedNote] = useState("");
  const [savedAt, setSavedAt] = useState("");
  const [statusMessage, setStatusMessage] =
    useState<StatusMessage | null>(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] =
    useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadNote() {
      try {
        const databaseNote = await getCurrentUserNote();

        if (cancelled) {
          return;
        }

        if (databaseNote) {
          const validNote = databaseNote.content.slice(0, MAX_NOTE_LENGTH);
          setNote(validNote);
          setSavedNote(validNote);
          setSavedAt(
            new Date(databaseNote.updatedAt ?? databaseNote.createdAt ?? "")
              .toLocaleString("es-MX", {
                dateStyle: "medium",
                timeStyle: "short",
              })
          );

          window.localStorage.removeItem(NOTES_KEY);
          window.localStorage.removeItem(NOTES_SAVED_AT_KEY);
          return;
        }

        const storedNote = window.localStorage.getItem(NOTES_KEY);

        if (storedNote?.trim()) {
          const migratedNote = await saveCurrentUserNote(
            storedNote.slice(0, MAX_NOTE_LENGTH)
          );

          if (cancelled) {
            return;
          }

          const validNote = migratedNote.content.slice(0, MAX_NOTE_LENGTH);
          setNote(validNote);
          setSavedNote(validNote);
          setSavedAt(
            new Date(migratedNote.updatedAt ?? migratedNote.createdAt ?? "")
              .toLocaleString("es-MX", {
                dateStyle: "medium",
                timeStyle: "short",
              })
          );

          window.localStorage.removeItem(NOTES_KEY);
          window.localStorage.removeItem(NOTES_SAVED_AT_KEY);
          setStatusMessage({
            type: "success",
            text: "Tu nota anterior fue migrada correctamente a MongoDB.",
          });
        }
      } catch (error) {
        if (!cancelled) {
          setStatusMessage({
            type: "error",
            text:
              error instanceof Error
                ? error.message
                : "No fue posible cargar la nota guardada.",
          });
        }
      } finally {
        if (!cancelled) {
          setIsLoaded(true);
        }
      }
    }

    void loadNote();

    return () => {
      cancelled = true;
    };
  }, []);

  const trimmedNote = note.trim();
  const hasSavedNote = savedNote.trim().length > 0;
  const hasChanges = note !== savedNote;
  const charactersRemaining = MAX_NOTE_LENGTH - note.length;

  const canSave =
    trimmedNote.length > 0 &&
    note.length <= MAX_NOTE_LENGTH &&
    hasChanges &&
    !isSaving &&
    !isDeleting;

  function handleNoteChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const newValue = event.target.value.slice(
      0,
      MAX_NOTE_LENGTH
    );

    setNote(newValue);
    setStatusMessage(null);
  }

  async function handleSaveNote() {
    if (trimmedNote.length === 0) {
      setStatusMessage({
        type: "error",
        text: "Escribe algún contenido antes de guardar la nota.",
      });
      return;
    }

    if (note.length > MAX_NOTE_LENGTH) {
      setStatusMessage({
        type: "error",
        text: `La nota no puede superar los ${MAX_NOTE_LENGTH} caracteres.`,
      });
      return;
    }

    try {
      setIsSaving(true);
      setStatusMessage(null);
      const saved = await saveCurrentUserNote(note);
      const savedContent = saved.content.slice(0, MAX_NOTE_LENGTH);

      setNote(savedContent);
      setSavedNote(savedContent);
      setSavedAt(
        new Date(saved.updatedAt ?? saved.createdAt ?? "").toLocaleString(
          "es-MX",
          { dateStyle: "medium", timeStyle: "short" }
        )
      );
      setStatusMessage({
        type: "success",
        text: hasSavedNote
          ? "La nota se actualizó correctamente en MongoDB."
          : "La nota se guardó correctamente en MongoDB.",
      });
    } catch (error) {
      setStatusMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "No fue posible guardar la nota.",
      });
    } finally {
      setIsSaving(false);
    }
  }

  function handleOpenDeleteConfirmation() {
    if (!hasSavedNote && note.length === 0) {
      return;
    }

    setShowDeleteConfirmation(true);
    setStatusMessage(null);
  }

  function handleCancelDelete() {
    setShowDeleteConfirmation(false);
  }

  async function handleConfirmDelete() {
    try {
      setIsDeleting(true);
      await deleteCurrentUserNote();
      window.localStorage.removeItem(NOTES_KEY);
      window.localStorage.removeItem(NOTES_SAVED_AT_KEY);
      setNote("");
      setSavedNote("");
      setSavedAt("");
      setShowDeleteConfirmation(false);
      setStatusMessage({
        type: "success",
        text: "La nota fue eliminada correctamente de MongoDB.",
      });
    } catch (error) {
      setStatusMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "No fue posible eliminar la nota.",
      });
    } finally {
      setIsDeleting(false);
    }
  }

  if (!isLoaded) {
    return (
      <section className="rounded-[28px] bg-white/60 p-5">
        <div className="rounded-[28px] border border-white bg-white/90 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <p className="text-sm font-bold text-slate-600">
            Cargando bloc de notas...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-[28px] bg-white/60 p-5">
      <div className="grid gap-5 lg:grid-cols-[1fr_320px] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
            Herramienta de apoyo
          </p>

          <h1 className="mt-3 text-2xl font-black text-[#061b3a]">
            Bloc de notas
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Registra apuntes, ideas o pendientes relacionados
            con tus rutas de aprendizaje. Solo tendrás una nota
            general, que podrás editar cuando lo necesites.
          </p>

          <p className="mt-2 max-w-2xl text-xs leading-6 text-slate-500">
            La nota es privada y únicamente está disponible para la persona usuaria.
          </p>
        </div>

        <div className="rounded-3xl border border-white bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Estado
          </p>

          <h2 className="mt-2 text-xl font-black text-[#061b3a]">
            {hasSavedNote
              ? "Nota guardada"
              : "Sin nota guardada"}
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {savedAt
              ? `Última actualización: ${savedAt}`
              : "Aún no has guardado ninguna nota."}
          </p>

          {hasChanges && (
            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-bold text-amber-700">
              Tienes cambios sin guardar.
            </div>
          )}

          {!hasChanges && hasSavedNote && (
            <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-700">
              Todos los cambios están guardados.
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 rounded-[28px] border border-white bg-white/90 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-black text-[#061b3a]">
              Mis apuntes
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Resume pasos, guarda dudas o registra prácticas
              pendientes.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleSaveNote}
              disabled={!canSave}
              className={
                canSave
                  ? "rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#061b3a]"
                  : "cursor-not-allowed rounded-2xl bg-slate-300 px-5 py-3 text-sm font-bold text-white"
              }
            >
              {isSaving
                ? "Guardando..."
                : hasSavedNote
                  ? "Actualizar nota"
                  : "Guardar nota"}
            </button>

            <button
              type="button"
              onClick={handleOpenDeleteConfirmation}
              disabled={isDeleting || (!hasSavedNote && note.length === 0)}
              className={
                hasSavedNote || note.length > 0
                  ? "rounded-2xl border border-red-200 bg-white px-5 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50"
                  : "cursor-not-allowed rounded-2xl border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-bold text-slate-400"
              }
            >
              {isDeleting ? "Eliminando..." : "Borrar nota"}
            </button>
          </div>
        </div>

        {statusMessage && (
          <div
            className={
              statusMessage.type === "success"
                ? "mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold text-emerald-700"
                : "mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-700"
            }
          >
            {statusMessage.text}
          </div>
        )}

        <textarea
          value={note}
          maxLength={MAX_NOTE_LENGTH}
          onChange={handleNoteChange}
          placeholder="Ejemplo: Recordar revisar los permisos antes de compartir archivos en OneDrive..."
          aria-label="Nota general de aprendizaje"
          className="mt-6 min-h-[360px] w-full resize-y rounded-3xl border border-slate-200 bg-[#f8fafc] p-5 text-sm leading-7 text-slate-700 outline-none transition focus:border-[#0b376d] focus:bg-white"
        />

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p
              className={
                charactersRemaining <= 100
                  ? "text-xs font-bold text-amber-600"
                  : "text-xs font-semibold text-slate-400"
              }
            >
              {note.length}/{MAX_NOTE_LENGTH} caracteres
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Restantes: {charactersRemaining}
            </p>
          </div>

          <Link
            href="/herramientas-digitales/onedrive/descubre"
            className="text-sm font-bold text-[#0b376d] hover:underline"
          >
            Regresar a la ruta OneDrive →
          </Link>
        </div>
      </div>

      {showDeleteConfirmation && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#061b3a]/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-note-title"
        >
          <div className="w-full max-w-md rounded-[28px] bg-white p-5 shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
              Confirmar eliminación
            </p>

            <h2
              id="delete-note-title"
              className="mt-3 text-2xl font-black text-[#061b3a]"
            >
              ¿Deseas borrar tu nota?
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Esta acción eliminará todo el contenido guardado
              en el bloc de notas y no se podrá deshacer.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={handleCancelDelete}
                disabled={isDeleting}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#061b3a] transition hover:bg-slate-50"
              >
                Cancelar
              </button>

              <button
                type="button"
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="rounded-2xl bg-red-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700"
              >
                {isDeleting ? "Eliminando..." : "Sí, borrar nota"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}