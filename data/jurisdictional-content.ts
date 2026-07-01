export type JurisdictionalTopic = {
  id: string;
  title: string;
  duration: string;
  block: string;
  objective: string;
  didYouKnow: string;
};

export type JurisdictionalRole = {
  id: string;
  name: string;
  sicsej: JurisdictionalTopic[];
  sjl2: JurisdictionalTopic[];
};

export const jurisdictionalSystems = [
  {
    id: "sicsej",
    name: "SICSEJ",
    title: "SICSEJ",
    description:
      "Consulta contenidos y recursos relacionados con el Sistema Integral de Control y Seguimiento de Expedientes Jurisdiccionales.",
    logo: "/course-assets/sistemas-jurisdiccionales/sicsej-logo.png",
  },
  {
    id: "sjl2",
    name: "Juicio en Línea 2.0",
    title: "Juicio en Línea 2.0",
    description:
      "Consulta contenidos y recursos relacionados con la operación de Juicio en Línea 2.0.",
    logo: "/systems/sjl2-logo.png",
  },
] as const;

export const consultationTopics = {
  "sicsej": [
    {
      "id": "sicsej-temario-general-de-sicsej-1",
      "title": "Recepción, envío y cancelación de envío de expedientes",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-2",
      "title": "Firmar acuerdos y oficios",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-3",
      "title": "Votar sentencias",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-4",
      "title": "Generación de otros oficios",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-5",
      "title": "Invalidar expediente",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-6",
      "title": "Consulta general",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-7",
      "title": "Reportes",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-8",
      "title": "Agenda",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-9",
      "title": "Recepción de expedientes, promociones y exhortos",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-10",
      "title": "Envío y cancelación de envío de expedientes, promociones y exhortos",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-11",
      "title": "Validar expedientes, promociones y exhortos",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-12",
      "title": "Validar carpetas de amparo directo, amparo indirecto, revisión y queja",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-13",
      "title": "Generación de documentos: acuerdos, sentencias y oficios, y personalizar plantillas",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-14",
      "title": "Incluir acuerdos, sentencias y oficios",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-15",
      "title": "Asignación y consulta de perito tercero",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-16",
      "title": "Envío de expedientes, promociones y exhortos",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-17",
      "title": "Revisión y modificación de datos en áreas específicas",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-18",
      "title": "Preparar notificación de documentos",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-19",
      "title": "Elaborar minutas",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-20",
      "title": "Consultar minutas",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-21",
      "title": "Baja de minutas",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-22",
      "title": "Reimprimir notificaciones",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-23",
      "title": "Consulta de perito tercero",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-24",
      "title": "Cancelación de envíos",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-25",
      "title": "Consulta de número de oficios",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-26",
      "title": "Impresión de Boletín electrónico",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-27",
      "title": "Consulta de Boletín Jurisdiccional",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-28",
      "title": "Generación de razón actuarial",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-29",
      "title": "Actas de apersonamiento y entrega de traslado",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-30",
      "title": "Registro de demandas nuevas",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-31",
      "title": "Registro de promociones",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-32",
      "title": "Registro de exhorto",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-33",
      "title": "Registro de queja improcedente",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-34",
      "title": "Completar captura de expedientes, promociones y exhortos",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sicsej-temario-general-de-sicsej-35",
      "title": "Generación de plantillas para carátulas",
      "duration": "3 min",
      "block": "Temario general de SICSEJ",
      "objective": "",
      "didYouKnow": ""
    }
  ],
  "sjl2": [
    {
      "id": "sjl2-temario-general-de-sjl2-1",
      "title": "Solicitud de perfil",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-2",
      "title": "Expediente Digital / Reportes",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-3",
      "title": "Estructura de número de expediente",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-4",
      "title": "Actualización y validación de demanda",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-5",
      "title": "Funcionamiento del catálogo de tipos y subtipos",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-6",
      "title": "Registro de promoción física por oficialía de partes",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-7",
      "title": "Actualización de promoción",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-8",
      "title": "Integrar promoción al expediente",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-9",
      "title": "Validación de promoción",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-10",
      "title": "Elaboración de acuerdos",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-11",
      "title": "Vinculación",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-12",
      "title": "Elaboración de acta / certificación",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-13",
      "title": "Elaboración de oficio",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-14",
      "title": "Baja y recuperación de documentos",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-15",
      "title": "Asignación y solicitud de asignación de perito tercero al expediente",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-16",
      "title": "Alta de incidente",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-17",
      "title": "Baja de incidente",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-18",
      "title": "Elaboración de sentencia / voto particular",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-19",
      "title": "Emisión de sentido de sentencia",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-20",
      "title": "Baja de expediente",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-21",
      "title": "Preparación de notificación",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-22",
      "title": "Registrar notificación",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-23",
      "title": "Emisión de razón de notificación",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-24",
      "title": "Realizar baja de notificación",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-25",
      "title": "Copiar archivos del expediente a partes notificadas",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-26",
      "title": "Firma de documentos",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    },
    {
      "id": "sjl2-temario-general-de-sjl2-27",
      "title": "Elaboración de voto particular",
      "duration": "3 min",
      "block": "Temario general de SJL2",
      "objective": "",
      "didYouKnow": ""
    }
  ]
} as const;

export const jurisdictionalRoles: JurisdictionalRole[] = [
  {
    "id": "magistrados",
    "name": "Magistrados",
    "sicsej": [
      {
        "id": "sicsej-magistrado-1",
        "title": "Recepción, envío y cancelación de envío de expedientes",
        "duration": "3 min",
        "block": "1. Perfil: Magistrados",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-magistrado-2",
        "title": "Firmar acuerdos y oficios",
        "duration": "3 min",
        "block": "1. Perfil: Magistrados",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-magistrado-3",
        "title": "Votar sentencias",
        "duration": "3 min",
        "block": "1. Perfil: Magistrados",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-magistrado-4",
        "title": "Generación de otros oficios",
        "duration": "3 min",
        "block": "1. Perfil: Magistrados",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-magistrado-5",
        "title": "Invalidar expediente",
        "duration": "3 min",
        "block": "1. Perfil: Magistrados",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-magistrado-6",
        "title": "Consulta general",
        "duration": "3 min",
        "block": "1. Perfil: Magistrados",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-magistrado-7",
        "title": "Reportes",
        "duration": "3 min",
        "block": "1. Perfil: Magistrados",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-magistrado-8",
        "title": "Agenda",
        "duration": "3 min",
        "block": "1. Perfil: Magistrados",
        "objective": "",
        "didYouKnow": ""
      }
    ],
    "sjl2": [
      {
        "id": "sjl2-magistrados-1",
        "title": "Solicitud de perfil",
        "duration": "3 min",
        "block": "1. Perfil: Magistrados",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-magistrados-2",
        "title": "Expediente Digital / Reportes",
        "duration": "3 min",
        "block": "1. Perfil: Magistrados",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-magistrados-3",
        "title": "Estructura de número de expediente",
        "duration": "3 min",
        "block": "1. Perfil: Magistrados",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-magistrados-4",
        "title": "Alta de incidente",
        "duration": "3 min",
        "block": "1. Perfil: Magistrados",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-magistrados-5",
        "title": "Baja de incidente",
        "duration": "3 min",
        "block": "1. Perfil: Magistrados",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-magistrados-6",
        "title": "Firma de documentos",
        "duration": "3 min",
        "block": "1. Perfil: Magistrados",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-magistrados-7",
        "title": "Elaboración de voto particular",
        "duration": "3 min",
        "block": "1. Perfil: Magistrados",
        "objective": "",
        "didYouKnow": ""
      }
    ]
  },
  {
    "id": "secretarios-de-acuerdos",
    "name": "Secretarios de Acuerdos",
    "sicsej": [
      {
        "id": "sicsej-secretario-particular-1",
        "title": "Recepción, envío y cancelación de envío de expedientes",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios Particulares",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretario-particular-2",
        "title": "",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios Particulares",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretario-particular-3",
        "title": "Votar sentencias",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios Particulares",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretario-particular-4",
        "title": "Generación de otros oficios",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios Particulares",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretario-particular-5",
        "title": "Invalidar expediente",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios Particulares",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretario-particular-6",
        "title": "Consulta general",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios Particulares",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretario-particular-7",
        "title": "Reportes",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios Particulares",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretario-particular-8",
        "title": "Agenda",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios Particulares",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-acuerdos-1",
        "title": "Recepción de expedientes, promociones y exhortos",
        "duration": "3 min",
        "block": "3. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-acuerdos-2",
        "title": "Envío y cancelación de envío de expedientes, promociones y exhortos",
        "duration": "3 min",
        "block": "3. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-acuerdos-3",
        "title": "Validar expedientes, promociones y exhortos",
        "duration": "3 min",
        "block": "3. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-acuerdos-4",
        "title": "Validar carpetas de amparo directo, amparo indirecto, revisión y queja",
        "duration": "3 min",
        "block": "3. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-acuerdos-5",
        "title": "Generación de documentos: acuerdos, sentencias y oficios, y personalizar plantillas",
        "duration": "3 min",
        "block": "3. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-acuerdos-6",
        "title": "Incluir acuerdos, sentencias y oficios",
        "duration": "3 min",
        "block": "3. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-acuerdos-7",
        "title": "Asignación y consulta de perito tercero",
        "duration": "3 min",
        "block": "3. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-acuerdos-8",
        "title": "Generación de otros oficios",
        "duration": "3 min",
        "block": "3. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-acuerdos-9",
        "title": "Consulta general",
        "duration": "3 min",
        "block": "3. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-acuerdos-10",
        "title": "Reportes",
        "duration": "3 min",
        "block": "3. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-acuerdos-11",
        "title": "Agenda",
        "duration": "3 min",
        "block": "3. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      }
    ],
    "sjl2": [
      {
        "id": "sjl2-secretarios-de-acuerdos-1",
        "title": "Solicitud de perfil",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-acuerdos-2",
        "title": "Expediente Digital / Reportes",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-acuerdos-3",
        "title": "Estructura de número de expediente",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-acuerdos-4",
        "title": "Actualización y validación de demanda",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-acuerdos-5",
        "title": "Funcionamiento del catálogo de tipos y subtipos",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-acuerdos-6",
        "title": "Registro de promoción física por oficialía de partes",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-acuerdos-7",
        "title": "Actualización de promoción",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-acuerdos-8",
        "title": "Integrar promoción al expediente",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-acuerdos-9",
        "title": "Validación de promoción",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-acuerdos-10",
        "title": "Elaboración de acuerdos",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-acuerdos-11",
        "title": "Vinculación",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-acuerdos-12",
        "title": "Elaboración de acta / certificación",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-acuerdos-13",
        "title": "Elaboración de oficio",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-acuerdos-14",
        "title": "Baja y recuperación de documentos",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-acuerdos-15",
        "title": "Asignación y solicitud de asignación de perito tercero al expediente",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-acuerdos-16",
        "title": "Alta de incidente",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-acuerdos-17",
        "title": "Baja de incidente",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-acuerdos-18",
        "title": "Elaboración de sentencia / voto particular",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-acuerdos-19",
        "title": "Emisión de sentido de sentencia",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-acuerdos-20",
        "title": "Baja de expediente",
        "duration": "3 min",
        "block": "2. Perfil: Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      }
    ]
  },
  {
    "id": "oficiales-jurisdiccionales",
    "name": "Oficiales Jurisdiccionales",
    "sicsej": [
      {
        "id": "sicsej-oficiales-jurisdiccionales-1",
        "title": "Recepción de expedientes, promociones y exhortos",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-jurisdiccionales-2",
        "title": "Envío y cancelación de envío de expedientes, promociones y exhortos",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-jurisdiccionales-3",
        "title": "Validar expedientes, promociones y exhortos",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-jurisdiccionales-4",
        "title": "Validar carpetas de amparo directo, amparo indirecto, revisión y queja",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-jurisdiccionales-5",
        "title": "Generación de documentos: acuerdos, sentencias y oficios, y personalizar plantillas",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-jurisdiccionales-6",
        "title": "Incluir acuerdos, sentencias y oficios",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-jurisdiccionales-7",
        "title": "Asignación y consulta de perito tercero",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-jurisdiccionales-8",
        "title": "Generación de otros oficios",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-jurisdiccionales-9",
        "title": "Consulta general",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-jurisdiccionales-10",
        "title": "Reportes",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-jurisdiccionales-11",
        "title": "Agenda",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      }
    ],
    "sjl2": [
      {
        "id": "sjl2-oficiales-jurisdiccionales-1",
        "title": "Solicitud de perfil",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-jurisdiccionales-2",
        "title": "Expediente Digital / Reportes",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-jurisdiccionales-3",
        "title": "Estructura de número de expediente",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-jurisdiccionales-4",
        "title": "Actualización y validación de demanda",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-jurisdiccionales-5",
        "title": "Funcionamiento del catálogo de tipos y subtipos",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-jurisdiccionales-6",
        "title": "Registro de promoción física por oficialía de partes",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-jurisdiccionales-7",
        "title": "Actualización de promoción",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-jurisdiccionales-8",
        "title": "Integrar promoción al expediente",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-jurisdiccionales-9",
        "title": "Validación de promoción",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-jurisdiccionales-10",
        "title": "Elaboración de acuerdos",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-jurisdiccionales-11",
        "title": "Vinculación",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-jurisdiccionales-12",
        "title": "Elaboración de acta / certificación",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-jurisdiccionales-13",
        "title": "Elaboración de oficio",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-jurisdiccionales-14",
        "title": "Baja y recuperación de documentos",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-jurisdiccionales-15",
        "title": "Asignación y solicitud de asignación de perito tercero al expediente",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-jurisdiccionales-16",
        "title": "Alta de incidente",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-jurisdiccionales-17",
        "title": "Baja de incidente",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-jurisdiccionales-18",
        "title": "Elaboración de sentencia / voto particular",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-jurisdiccionales-19",
        "title": "Emisión de sentido de sentencia",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-jurisdiccionales-20",
        "title": "Baja de expediente",
        "duration": "3 min",
        "block": "3. Perfil: Oficiales Jurisdiccionales",
        "objective": "",
        "didYouKnow": ""
      }
    ]
  },
  {
    "id": "oficiales-de-partes",
    "name": "Oficiales de Partes",
    "sicsej": [
      {
        "id": "sicsej-oficiales-de-partes-1",
        "title": "Registro de demandas nuevas",
        "duration": "3 min",
        "block": "7. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-de-partes-2",
        "title": "Registro de promociones",
        "duration": "3 min",
        "block": "7. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-de-partes-3",
        "title": "Registro de exhorto",
        "duration": "3 min",
        "block": "7. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-de-partes-4",
        "title": "Registro de queja improcedente",
        "duration": "3 min",
        "block": "7. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-de-partes-5",
        "title": "Envío de expedientes, promociones y exhortos",
        "duration": "3 min",
        "block": "7. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-de-partes-6",
        "title": "Recepción de expedientes, promociones y exhortos",
        "duration": "3 min",
        "block": "7. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-de-partes-7",
        "title": "Cancelación de envíos",
        "duration": "3 min",
        "block": "7. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-de-partes-8",
        "title": "Consulta general",
        "duration": "3 min",
        "block": "7. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-de-partes-9",
        "title": "Generación de otros oficios",
        "duration": "3 min",
        "block": "7. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-de-partes-10",
        "title": "Consulta de número de oficios",
        "duration": "3 min",
        "block": "7. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-oficiales-de-partes-11",
        "title": "Reportes",
        "duration": "3 min",
        "block": "7. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      }
    ],
    "sjl2": [
      {
        "id": "sjl2-oficiales-de-partes-1",
        "title": "Solicitud de perfil",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-de-partes-2",
        "title": "Expediente Digital / Reportes",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-de-partes-3",
        "title": "Estructura de número de expediente",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-de-partes-4",
        "title": "Actualización y validación de demanda",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-de-partes-5",
        "title": "Funcionamiento del catálogo de tipos y subtipos",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-de-partes-6",
        "title": "Registro de promoción física por oficialía de partes",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-de-partes-7",
        "title": "Actualización de promoción",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-de-partes-8",
        "title": "Integrar promoción al expediente",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-oficiales-de-partes-9",
        "title": "Validación de promoción",
        "duration": "3 min",
        "block": "4. Perfil: Oficiales de Partes",
        "objective": "",
        "didYouKnow": ""
      }
    ]
  },
  {
    "id": "archivistas",
    "name": "Archivistas",
    "sicsej": [
      {
        "id": "sicsej-archivistas-1",
        "title": "Recepción de expedientes, promociones y exhortos",
        "duration": "3 min",
        "block": "8. Perfil: Archivistas",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-archivistas-2",
        "title": "Envío de expedientes, promociones y exhortos",
        "duration": "3 min",
        "block": "8. Perfil: Archivistas",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-archivistas-3",
        "title": "Completar captura de expedientes, promociones y exhortos",
        "duration": "3 min",
        "block": "8. Perfil: Archivistas",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-archivistas-4",
        "title": "Generación de plantillas para carátulas",
        "duration": "3 min",
        "block": "8. Perfil: Archivistas",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-archivistas-5",
        "title": "Cancelación de envíos",
        "duration": "3 min",
        "block": "8. Perfil: Archivistas",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-archivistas-6",
        "title": "Reportes",
        "duration": "3 min",
        "block": "8. Perfil: Archivistas",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-archivistas-7",
        "title": "Consulta general",
        "duration": "3 min",
        "block": "8. Perfil: Archivistas",
        "objective": "",
        "didYouKnow": ""
      }
    ],
    "sjl2": [
      {
        "id": "sjl2-archivistas-1",
        "title": "Solicitud de perfil",
        "duration": "3 min",
        "block": "5. Perfil: Archivistas",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-archivistas-2",
        "title": "Expediente Digital / Reportes",
        "duration": "3 min",
        "block": "5. Perfil: Archivistas",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-archivistas-3",
        "title": "Estructura de número de expediente",
        "duration": "3 min",
        "block": "5. Perfil: Archivistas",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-archivistas-4",
        "title": "Actualización de promoción",
        "duration": "3 min",
        "block": "5. Perfil: Archivistas",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-archivistas-5",
        "title": "Integrar promoción al expediente",
        "duration": "3 min",
        "block": "5. Perfil: Archivistas",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-archivistas-1",
        "title": "Solicitud de perfil",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-archivistas-2",
        "title": "Expediente Digital / Reportes",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-archivistas-3",
        "title": "Estructura de número de expediente",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-archivistas-4",
        "title": "Preparación de notificación",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-archivistas-5",
        "title": "Registrar notificación",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-archivistas-6",
        "title": "Emisión de razón de notificación",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-archivistas-7",
        "title": "Realizar baja de notificación",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-archivistas-8",
        "title": "Copiar archivos del expediente a partes notificadas",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      }
    ]
  },
  {
    "id": "actuarios",
    "name": "Actuarios",
    "sicsej": [
      {
        "id": "sicsej-actuarios-1",
        "title": "Recepción de expedientes, promociones y exhortos",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-actuarios-2",
        "title": "Envío de expedientes, promociones y exhortos",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-actuarios-3",
        "title": "Revisión y modificación de datos en áreas específicas",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-actuarios-4",
        "title": "Preparar notificación de documentos",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-actuarios-5",
        "title": "Elaborar minutas",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-actuarios-6",
        "title": "Consultar minutas",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-actuarios-7",
        "title": "Baja de minutas",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-actuarios-8",
        "title": "Reimprimir notificaciones",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-actuarios-9",
        "title": "Consulta de perito tercero",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-actuarios-10",
        "title": "Cancelación de envíos",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-actuarios-11",
        "title": "Consulta de número de oficios",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-actuarios-12",
        "title": "Impresión de Boletín electrónico",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-actuarios-13",
        "title": "Consulta de Boletín Jurisdiccional",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-actuarios-14",
        "title": "Generación de razón actuarial",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-actuarios-15",
        "title": "Actas de apersonamiento y entrega de traslado",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-actuarios-16",
        "title": "Reportes",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-actuarios-17",
        "title": "Consulta general",
        "duration": "3 min",
        "block": "6. Perfil: Actuarios",
        "objective": "",
        "didYouKnow": ""
      }
    ],
    "sjl2": []
  },
  {
    "id": "secretarios-de-secretarios-de-acuerdos",
    "name": "Secretarios de Secretarios de Acuerdos",
    "sicsej": [
      {
        "id": "sicsej-secretarios-de-secretarios-de-acuerdos-1",
        "title": "Recepción de expedientes, promociones y exhortos",
        "duration": "3 min",
        "block": "5. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-secretarios-de-acuerdos-2",
        "title": "Envío y cancelación de envío de expedientes, promociones y exhortos",
        "duration": "3 min",
        "block": "5. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-secretarios-de-acuerdos-3",
        "title": "Validar expedientes, promociones y exhortos",
        "duration": "3 min",
        "block": "5. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-secretarios-de-acuerdos-4",
        "title": "Validar carpetas de amparo directo, amparo indirecto, revisión y queja",
        "duration": "3 min",
        "block": "5. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-secretarios-de-acuerdos-5",
        "title": "Generación de documentos: acuerdos, sentencias y oficios, y personalizar plantillas",
        "duration": "3 min",
        "block": "5. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-secretarios-de-acuerdos-6",
        "title": "Incluir acuerdos, sentencias y oficios",
        "duration": "3 min",
        "block": "5. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-secretarios-de-acuerdos-7",
        "title": "Asignación y consulta de perito tercero",
        "duration": "3 min",
        "block": "5. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-secretarios-de-acuerdos-8",
        "title": "Generación de otros oficios",
        "duration": "3 min",
        "block": "5. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-secretarios-de-acuerdos-9",
        "title": "Consulta general",
        "duration": "3 min",
        "block": "5. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-secretarios-de-acuerdos-10",
        "title": "Reportes",
        "duration": "3 min",
        "block": "5. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-secretarios-de-secretarios-de-acuerdos-11",
        "title": "Agenda",
        "duration": "3 min",
        "block": "5. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      }
    ],
    "sjl2": [
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-1",
        "title": "Solicitud de perfil",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-2",
        "title": "Expediente Digital / Reportes",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-3",
        "title": "Estructura de número de expediente",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-4",
        "title": "Actualización y validación de demanda",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-5",
        "title": "Funcionamiento del catálogo de tipos y subtipos",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-6",
        "title": "Registro de promoción física por oficialía de partes",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-7",
        "title": "Actualización de promoción",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-8",
        "title": "Integrar promoción al expediente",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-9",
        "title": "Validación de promoción",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-10",
        "title": "Elaboración de acuerdos",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-11",
        "title": "Vinculación",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-12",
        "title": "Elaboración de acta / certificación",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-13",
        "title": "Elaboración de oficio",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-14",
        "title": "Baja y recuperación de documentos",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-15",
        "title": "Asignación y solicitud de asignación de perito tercero al expediente",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-16",
        "title": "Alta de incidente",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-17",
        "title": "Baja de incidente",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-18",
        "title": "Elaboración de sentencia / voto particular",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-19",
        "title": "Emisión de sentido de sentencia",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-secretarios-de-secretarios-de-acuerdos-20",
        "title": "Baja de expediente",
        "duration": "3 min",
        "block": "7. Perfil: Secretarios de Secretarios de Acuerdos",
        "objective": "",
        "didYouKnow": ""
      }
    ]
  },
  {
    "id": "auxiliares-de-sala",
    "name": "Auxiliares de Sala",
    "sicsej": [
      {
        "id": "sicsej-auxiliares-de-sala-1",
        "title": "Recepción de expedientes, promociones y exhortos",
        "duration": "3 min",
        "block": "9. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-auxiliares-de-sala-2",
        "title": "Envío y cancelación de envío de expedientes, promociones y exhortos",
        "duration": "3 min",
        "block": "9. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-auxiliares-de-sala-3",
        "title": "Validar expedientes, promociones y exhortos",
        "duration": "3 min",
        "block": "9. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-auxiliares-de-sala-4",
        "title": "Validar carpetas de amparo directo, amparo indirecto, revisión y queja",
        "duration": "3 min",
        "block": "9. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-auxiliares-de-sala-5",
        "title": "Generación de documentos: acuerdos, sentencias y oficios, y personalizar plantillas",
        "duration": "3 min",
        "block": "9. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-auxiliares-de-sala-6",
        "title": "Incluir acuerdos, sentencias y oficios",
        "duration": "3 min",
        "block": "9. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-auxiliares-de-sala-7",
        "title": "Asignación y consulta de perito tercero",
        "duration": "3 min",
        "block": "9. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-auxiliares-de-sala-8",
        "title": "Generación de otros oficios",
        "duration": "3 min",
        "block": "9. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-auxiliares-de-sala-9",
        "title": "Consulta general",
        "duration": "3 min",
        "block": "9. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-auxiliares-de-sala-10",
        "title": "Reportes",
        "duration": "3 min",
        "block": "9. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sicsej-auxiliares-de-sala-11",
        "title": "Agenda",
        "duration": "3 min",
        "block": "9. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      }
    ],
    "sjl2": [
      {
        "id": "sjl2-auxiliares-de-sala-1",
        "title": "Solicitud de perfil",
        "duration": "3 min",
        "block": "8. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-auxiliares-de-sala-2",
        "title": "Expediente Digital / Reportes",
        "duration": "3 min",
        "block": "8. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-auxiliares-de-sala-3",
        "title": "Estructura de número de expediente",
        "duration": "3 min",
        "block": "8. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-auxiliares-de-sala-4",
        "title": "Actualización y validación de demanda",
        "duration": "3 min",
        "block": "8. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-auxiliares-de-sala-5",
        "title": "Funcionamiento del catálogo de tipos y subtipos",
        "duration": "3 min",
        "block": "8. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-auxiliares-de-sala-6",
        "title": "Registro de promoción física por oficialía de partes",
        "duration": "3 min",
        "block": "8. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-auxiliares-de-sala-7",
        "title": "Actualización de promoción",
        "duration": "3 min",
        "block": "8. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-auxiliares-de-sala-8",
        "title": "Integrar promoción al expediente",
        "duration": "3 min",
        "block": "8. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-auxiliares-de-sala-9",
        "title": "Validación de promoción",
        "duration": "3 min",
        "block": "8. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-auxiliares-de-sala-10",
        "title": "Elaboración de acuerdos",
        "duration": "3 min",
        "block": "8. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-auxiliares-de-sala-11",
        "title": "Vinculación",
        "duration": "3 min",
        "block": "8. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-auxiliares-de-sala-12",
        "title": "Elaboración de acta / certificación",
        "duration": "3 min",
        "block": "8. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-auxiliares-de-sala-13",
        "title": "Elaboración de oficio",
        "duration": "3 min",
        "block": "8. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-auxiliares-de-sala-14",
        "title": "Baja y recuperación de documentos",
        "duration": "3 min",
        "block": "8. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      },
      {
        "id": "sjl2-auxiliares-de-sala-15",
        "title": "Asignación y solicitud de asignación de perito tercero al expediente",
        "duration": "3 min",
        "block": "8. Perfil: Auxiliares de Sala",
        "objective": "",
        "didYouKnow": ""
      }
    ]
  }
];
