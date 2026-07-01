
"use client";

import { useMemo, useState } from "react";

type FaqCategory =
  | "all"
  | "access"
  | "routes"
  | "evaluations"
  | "badges"
  | "notes"
  | "alerts"
  | "technical";

type FaqItem = {
  id: string;
  category: Exclude<FaqCategory, "all">;
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "access-entra",
    category: "access",
    question: "¿Cómo ingreso a Habilidades TFJA?",
    answer:
      "El acceso se realiza mediante la cuenta institucional de Microsoft del TFJA. La información de la persona usuaria, sus avances y resultados se encuentran asociados a su cuenta.",
  },
  {
    id: "access-device",
    category: "access",
    question: "¿Puedo consultar mi avance desde otro dispositivo?",
    answer:
      "Sí. Al ingresar con tu cuenta institucional puedes consultar tu avance, resultados, insignias y herramientas de apoyo desde los dispositivos autorizados.",
  },
  {
    id: "routes-levels",
    category: "routes",
    question: "¿Qué significan los niveles Descubre y Potencia?",
    answer:
      "Descubre es el nivel introductorio, diseñado para conocer las funciones principales de una herramienta. Potencia incorpora contenidos, ejercicios y prácticas de mayor profundidad.",
  },
  {
    id: "routes-order",
    category: "routes",
    question: "¿Puedo saltarme pasos de una ruta?",
    answer:
      "No. Los pasos, checkpoints y evaluaciones deben completarse en el orden establecido. Puedes regresar en cualquier momento a consultar los pasos que ya hayas completado.",
  },
  {
    id: "routes-progress",
    category: "routes",
    question: "¿Cómo se calcula el porcentaje de avance?",
    answer:
      "Cada paso, checkpoint y evaluación obligatoria cuenta como un elemento de la ruta. El porcentaje se calcula comparando los elementos completados con el total de elementos disponibles.",
  },
  {
    id: "evaluations-checkpoints",
    category: "evaluations",
    question: "¿Cuántas preguntas tienen las evaluaciones?",
    answer:
      "La Evaluación 1 y la Evaluación 2 contienen tres preguntas cada una. Para aprobar cada checkpoint necesitas al menos dos respuestas correctas. La evaluación final contiene cuatro preguntas.",
  },
  {
    id: "evaluations-attempts",
    category: "evaluations",
    question: "¿Cuántos intentos tengo para una evaluación?",
    answer:
      "Cada evaluación permite un máximo de dos intentos. El sistema conserva automáticamente el mejor resultado obtenido.",
  },
  {
    id: "evaluations-failed",
    category: "evaluations",
    question: "¿Qué ocurre si agoto mis dos intentos?",
    answer:
      "Podrás enviar una solicitud de reinicio de avance. La solicitud será revisada por una persona administradora y el progreso no se eliminará automáticamente.",
  },
  {
    id: "evaluations-final",
    category: "evaluations",
    question: "¿Cuándo se desbloquea la evaluación final?",
    answer:
      "La evaluación final se habilita después de completar todos los pasos obligatorios y aprobar las dos evaluaciones previas de la ruta.",
  },
  {
    id: "badges-score",
    category: "badges",
    question: "¿Cómo se determina la insignia?",
    answer:
      "Se suman los mejores resultados de la Evaluación 1, la Evaluación 2 y la evaluación final. Con 10 aciertos se obtiene Oro; con 8 o 9, Plata; con 7, Bronce; y con 6 o menos se debe repetir la ruta.",
  },
  {
    id: "badges-first-attempt",
    category: "badges",
    question: "¿Necesito aprobar en el primer intento para obtener Oro?",
    answer:
      "No. La insignia se asigna con base en el mejor resultado obtenido dentro de los intentos disponibles.",
  },
  {
    id: "badges-location",
    category: "badges",
    question: "¿Dónde puedo consultar mis insignias?",
    answer:
      "Puedes consultar tus insignias desde la opción Mis insignias del menú lateral o desde la sección Mi perfil.",
  },
  {
    id: "notes-limit",
    category: "notes",
    question: "¿Cuántos caracteres permite el bloc de notas?",
    answer:
      "El bloc permite una nota general de hasta 2,000 caracteres. Puedes actualizarla o eliminarla cuando lo necesites.",
  },
  {
    id: "notes-private",
    category: "notes",
    question: "¿Mi nota es privada?",
    answer:
      "Sí. El contenido del bloc de notas es personal y únicamente puede ser consultado y modificado desde tu cuenta institucional.",
  },
  {
    id: "alerts-counter",
    category: "alerts",
    question: "¿Qué significa el número junto a Alertas?",
    answer:
      "Representa la cantidad de alertas pendientes de lectura. Cuando marcas una alerta con la paloma, deja de contarse como pendiente.",
  },
  {
    id: "alerts-return",
    category: "alerts",
    question: "¿Puede volver a aparecer una alerta leída?",
    answer:
      "Sí. Puede generarse un nuevo aviso cuando cambia el estado de una ruta, aumenta el avance, se desbloquea una evaluación o se obtiene una insignia.",
  },
  {
    id: "technical-progress",
    category: "technical",
    question: "¿Qué hago si mi avance no se actualiza?",
    answer:
      "Actualiza la página y verifica tu conexión a internet. Si el problema continúa, cierra la sesión, vuelve a ingresar y comunícate con el área de soporte institucional.",
  },
  {
    id: "technical-incognito",
    category: "technical",
    question: "¿Puedo utilizar la plataforma en una ventana de incógnito?",
    answer:
      "No es recomendable. Algunas funciones del navegador pueden limitarse en el modo privado. Para asegurar una experiencia estable, utiliza una ventana normal y un navegador actualizado.",
  },
  {
    id: "technical-reset",
    category: "technical",
    question: "¿Qué pasa si borro los datos del navegador?",
    answer:
      "Tu información institucional permanece asociada a tu cuenta. Después de iniciar sesión nuevamente podrás consultar tu progreso, resultados, insignias y notas.",
  },
];

const CATEGORIES: Array<{
  id: FaqCategory;
  label: string;
}> = [
  {
    id: "all",
    label: "Todas",
  },
  {
    id: "access",
    label: "Acceso",
  },
  {
    id: "routes",
    label: "Rutas",
  },
  {
    id: "evaluations",
    label: "Evaluaciones",
  },
  {
    id: "badges",
    label: "Insignias",
  },
  {
    id: "notes",
    label: "Bloc de notas",
  },
  {
    id: "alerts",
    label: "Alertas",
  },
  {
    id: "technical",
    label: "Soporte técnico",
  },
];

function normalizeText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function FaqPanel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<FaqCategory>("all");
  const [openQuestionId, setOpenQuestionId] =
    useState<string | null>(null);

  const filteredQuestions = useMemo(() => {
    const normalizedSearch = normalizeText(searchTerm);

    return FAQ_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" ||
        item.category === activeCategory;

      const matchesSearch =
        normalizedSearch.length === 0 ||
        normalizeText(item.question).includes(normalizedSearch) ||
        normalizeText(item.answer).includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  function handleToggleQuestion(questionId: string) {
    setOpenQuestionId((currentQuestionId) =>
      currentQuestionId === questionId ? null : questionId
    );
  }

  function handleClearFilters() {
    setSearchTerm("");
    setActiveCategory("all");
    setOpenQuestionId(null);
  }

  return (
    <section className="rounded-[28px] bg-white/60 p-5">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c78b3a]">
          Centro de ayuda
        </p>

        <h1 className="mt-3 text-2xl font-black text-[#061b3a]">
          Preguntas frecuentes
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
          Consulta información sobre rutas de aprendizaje, evaluaciones,
          insignias, alertas y herramientas de apoyo de Habilidades TFJA.
        </p>
      </div>

      <div className="mt-6 rounded-[28px] border border-white bg-white/90 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)]">
        <label
          htmlFor="faq-search"
          className="text-sm font-bold text-[#061b3a]"
        >
          Buscar una pregunta
        </label>

        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <input
            id="faq-search"
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Ejemplo: intentos, insignias o avance..."
            className="min-h-12 flex-1 rounded-2xl border border-slate-200 bg-[#f8fafc] px-5 text-sm text-slate-700 outline-none transition focus:border-[#0b376d] focus:bg-white"
          />

          {(searchTerm || activeCategory !== "all") && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
            >
              Limpiar filtros
            </button>
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => {
                setActiveCategory(category.id);
                setOpenQuestionId(null);
              }}
              className={
                activeCategory === category.id
                  ? "rounded-full bg-[#0b376d] px-4 py-2 text-sm font-bold text-white"
                  : "rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
              }
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-black text-[#061b3a]">
            Resultados
          </h2>

          <span className="rounded-full bg-[#eaf2ff] px-3 py-1 text-xs font-bold text-[#0b376d]">
            {filteredQuestions.length}
          </span>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="rounded-[24px] border border-dashed border-slate-300 bg-white p-6 text-center">
            <h2 className="text-xl font-black text-[#061b3a]">
              No encontramos resultados
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Prueba con otra palabra o selecciona una categoría diferente.
            </p>

            <button
              type="button"
              onClick={handleClearFilters}
              className="mt-5 rounded-2xl bg-[#0b376d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#061b3a]"
            >
              Mostrar todas
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredQuestions.map((item) => {
              const isOpen = openQuestionId === item.id;

              return (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => handleToggleQuestion(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    className="flex w-full items-center justify-between gap-5 p-5 text-left transition hover:bg-[#f8fafc]"
                  >
                    <span className="text-base font-black leading-7 text-[#061b3a]">
                      {item.question}
                    </span>

                    <span
                      className={
                        isOpen
                          ? "flex h-9 w-9 shrink-0 rotate-45 items-center justify-center rounded-full bg-[#0b376d] text-xl font-bold text-white transition"
                          : "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eaf2ff] text-xl font-bold text-[#0b376d] transition"
                      }
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${item.id}`}
                      className="border-t border-slate-200 bg-[#f8fafc] px-5 py-5"
                    >
                      <p className="text-sm leading-7 text-slate-600">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>

      <div className="mt-6 rounded-[24px] border border-[#ead7b8] bg-[#fff8ef] p-5">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c78b3a]">
          ¿No encontraste la respuesta?
        </p>

        <h2 className="mt-2 text-xl font-black text-[#061b3a]">
          Consulta el material de ayuda
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Revisa el contenido disponible en cada ruta de aprendizaje o
          comunícate con el área de soporte institucional para recibir
          orientación.
        </p>
      </div>
    </section>
  );
}

