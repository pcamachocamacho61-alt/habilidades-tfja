import { LearningStep } from "@/types/learning";

export const onedriveDescubreSteps: LearningStep[] = [
  {
    id: "bienvenida",
    number: 0,
    title: "Bienvenida",
    shortDescription:
      "Conoce el propósito de la ruta OneDrive Descubre y cómo cambiar la forma de trabajar con archivos.",
    block: 1,
    type: "welcome",
    estimatedTime: "2 min",
    content: {
      eyebrow: "Inicio de ruta",
      title: "Bienvenido a OneDrive Descubre",
      description:
        "En esta ruta aprenderás a utilizar OneDrive como un espacio institucional para guardar, organizar, compartir y proteger archivos de trabajo. La idea principal es dejar de depender de copias, adjuntos pesados o versiones duplicadas, y comenzar a trabajar con accesos controlados en la nube.",
      bullets: [
        "Comprenderás la diferencia entre enviar archivos y compartir accesos.",
        "Identificarás OneDrive como tu espacio institucional de trabajo en la nube.",
        "Aprenderás a reducir duplicados y versiones confusas de documentos.",
        "Reconocerás la importancia de administrar permisos antes de compartir información.",
        "Avanzarás mediante microcontenidos, pasos prácticos y checkpoints.",
      ],
      video: "/course-assets/onedrive/videos/bienvenida-onedrive.mp4",
    },
  },
  {
    id: "paso-1",
    number: 1,
    title: "Tu oficina en la nube",
    shortDescription:
      "Comprende OneDrive como la plataforma institucional para almacenar, proteger y compartir archivos.",
    block: 1,
    type: "content",
    estimatedTime: "3 min",
    content: {
      eyebrow: "Descubrimiento inicial",
      title: "OneDrive: tu oficina en la nube institucional",
      description:
        "OneDrive permite centralizar archivos institucionales en la nube y trabajar con ellos de forma segura desde dispositivos autorizados.",
      bulletsTitle: "En este paso comprenderás:",
      bullets: [
        "OneDrive es la plataforma institucional del TFJA para el almacenamiento seguro de archivos en la nube, integrada a Microsoft 365.",
        "Permite centralizar la información en un solo espacio accesible desde dispositivos autorizados, con seguridad, cumplimiento legal y control institucional.",
        "Es la base del trabajo colaborativo, facilitando compartir archivos mediante enlaces, gestionar accesos y trabajar de forma conjunta en tiempo real.",
      ],
      image: "/course-assets/onedrive/images/paso-1-onedrive.png",
      imageFirst: true,
      hideDescription: true,
      supportMaterials: [
        {
          title: "Guía rápida de OneDrive",
          type: "pdf",
          url: "/course-assets/onedrive/docs/guia-rapida-onedrive.pdf",
        },
      ],
    },
  },
  {
    id: "paso-2",
    number: 2,
    title: "Entra a tu espacio OneDrive",
    shortDescription:
      "Aprende a ingresar a OneDrive con tu cuenta institucional y reconoce los elementos principales de la pantalla.",
    block: 1,
    type: "content",
    estimatedTime: "4 min",
    content: {
      eyebrow: "Acceso institucional",
      title: "Ingresa a OneDrive y reconoce tu espacio de trabajo",
      description:
        "Para utilizar OneDrive dentro del entorno institucional, primero debes acceder con tu cuenta autorizada y ubicar las secciones principales donde consultarás carpetas, documentos recientes y archivos compartidos.",
      bullets: [
        "Ingresa a OneDrive utilizando tu correo y contraseña institucional.",
        "Identifica la pantalla principal de OneDrive y el área donde se muestran tus carpetas y documentos.",
        "Ubica las secciones de archivos recientes, compartidos y tu espacio de trabajo.",
        "Reconoce que los archivos mostrados pertenecen a tu cuenta institucional y pueden consultarse desde dispositivos autorizados.",
        "Comprende que este espacio será la base para guardar, organizar y compartir documentos de trabajo.",
      ],
      video: "/course-assets/onedrive/videos/paso-2-acceso-onedrive.mp4",
    },
  },
  {
    id: "paso-3",
    number: 3,
    title: "Organiza con carpetas",
    shortDescription:
      "Reconoce cómo estructurar archivos y carpetas para facilitar la consulta y evitar duplicados.",
    block: 1,
    type: "content",
    estimatedTime: "4 min",
    content: {
      eyebrow: "Organización inicial",
      title: "Ordena tus archivos para encontrarlos más rápido",
      description:
        "Una estructura clara de carpetas permite localizar documentos con mayor facilidad, evitar versiones duplicadas y mantener la información institucional mejor organizada.",
      bullets: [
        "Crea carpetas con nombres claros y relacionados con el asunto, área o actividad.",
        "Evita guardar múltiples versiones del mismo documento sin una nomenclatura clara.",
        "Agrupa archivos relacionados para facilitar su consulta posterior.",
        "Usa OneDrive como espacio de trabajo ordenado, no solo como depósito de archivos.",
      ],
    },
  },
  {
    id: "paso-4",
    number: 4,
    title: "Comparte un archivo",
    shortDescription:
      "Aprende a compartir un archivo mediante vínculo o destinatarios específicos.",
    block: 1,
    type: "content",
    estimatedTime: "5 min",
    content: {
      eyebrow: "Colaboración segura",
      title: "Comparte accesos, no copias innecesarias",
      description:
        "OneDrive permite compartir archivos mediante vínculos o destinatarios específicos. Esto ayuda a colaborar con un solo documento actualizado, evitando duplicados y manteniendo control sobre quién puede consultar o editar la información.",
      bullets: [
        "Selecciona un archivo o carpeta y abre la opción de compartir.",
        "Genera un vínculo de acceso cuando necesites compartir el documento de forma rápida y controlada.",
        "Busca personas específicas cuando el acceso deba limitarse a ciertos usuarios.",
        "Revisa si el permiso otorgado será de solo lectura o de edición antes de enviar el acceso.",
        "Consulta quién tiene acceso al archivo y modifica o retira permisos cuando sea necesario.",
      ],
      video: "/course-assets/onedrive/videos/paso-4-compartir-archivo.mp4",
    },
  },
{
  id: "paso-5",
  number: 5,
  title: "Compartir y permisos",
  shortDescription:
    "Comprende la diferencia entre adjuntar archivos y compartir vínculos con permisos controlados.",
  block: 1,
  type: "content",
  estimatedTime: "4 min",
  content: {
    eyebrow: "Control de acceso",
    title: "Adjuntar archivos vs compartir vínculos",
    description:
      "Compartir un vínculo desde OneDrive no es lo mismo que adjuntar un archivo. El vínculo permite dar acceso al documento centralizado en la nube, mientras que el adjunto genera una copia independiente.",
    bulletsTitle: "En este paso comprenderás:",
    bullets: [
      "Comprender la diferencia entre adjuntar un archivo (enviar una copia) y compartir un vínculo (dar acceso al archivo en OneDrive).",
      "Identificar que compartir por vínculo permite trabajar sobre un documento centralizado en la nube, con colaboración en tiempo real y una sola versión vigente.",
      "Reconocer que los vínculos permiten gestionar permisos (ver o editar) y retirar accesos, brindando mayor control que el envío de archivos adjuntos.",
    ],
    video: "/course-assets/onedrive/videos/adjuntar-vs-compartir-vinculo.mp4",
    supportMaterials: [
      {
        title: "Adjuntar vs compartir vínculo",
        type: "pdf",
        url: "/course-assets/onedrive/docs/adjuntar-vs-compartir-vinculo.pdf",
      },
    ],
  },
},
  {
    id: "checkpoint-1",
    number: 6,
    title: "Checkpoint 1",
    shortDescription:
      "Valida los conceptos principales sobre Microsoft 365, OneDrive y vínculos de acceso.",
    block: 1,
    type: "evaluation",
    estimatedTime: "Checkpoint",
    content: {
      eyebrow: "Checkpoint 1",
      title: "Valida tu comprensión inicial",
      description:
        "Antes de continuar al siguiente bloque, confirma que comprendiste los conceptos base de Microsoft 365, OneDrive y la diferencia entre adjuntar archivos y compartir vínculos.",
      bullets: [
        "Tu cuenta institucional es la llave de acceso al ecosistema Microsoft 365.",
        "OneDrive centraliza información institucional en la nube de forma segura.",
        "Compartir vínculos permite controlar permisos y mantener una sola versión actualizada.",
      ],
   checkpointEvaluation: {
  minimumCorrectAnswers: 2,
  questions: [
    {
      question:
        "¿Cuál es la función de tu correo institucional (@tfja.gob.mx) dentro del ecosistema Microsoft 365?",
      options: [
        "Es únicamente para enviar y recibir correos electrónicos.",
        "Es tu llave de acceso a los servicios de Microsoft 365 y está vinculada con la contraseña de tu equipo institucional.",
        "Sirve solo para registrar asistencia a sistemas internos.",
        "Es una cuenta independiente que no se relaciona con otras herramientas.",
      ],
      correctAnswer:
        "Es tu llave de acceso a los servicios de Microsoft 365 y está vinculada con la contraseña de tu equipo institucional.",
    },
    {
      question:
        "¿Por qué el TFJA utiliza OneDrive como plataforma institucional?",
      options: [
        "Para almacenar archivos personales sin restricciones.",
        "Para reemplazar completamente el uso del correo electrónico.",
        "Porque permite guardar información en la nube de forma segura, centralizada y accesible desde dispositivos autorizados.",
        "Porque es obligatorio guardar todos los archivos únicamente en una computadora local.",
      ],
      correctAnswer:
        "Porque permite guardar información en la nube de forma segura, centralizada y accesible desde dispositivos autorizados.",
    },
    {
      question:
        "¿Qué sucede cuando compartes un vínculo en lugar de adjuntar un archivo?",
      options: [
        "Se envía una copia independiente del documento.",
        "Se otorga acceso a un archivo en la nube con una sola versión actualizada y permisos controlados.",
        "El archivo deja de pertenecer al usuario que lo creó.",
        "El archivo se descarga automáticamente en todos los dispositivos.",
      ],
      correctAnswer:
        "Se otorga acceso a un archivo en la nube con una sola versión actualizada y permisos controlados.",
    },
  ],
},
    },
  },

  {
    id: "paso-6",
    number: 7,
    title: "Distingue archivo y carpeta",
    shortDescription:
      "Comprende la diferencia entre archivos y carpetas dentro de OneDrive.",
    block: 2,
    type: "content",
    estimatedTime: "3 min",
    content: {
      eyebrow: "Bloque 2",
      title: "Distingue archivos y carpetas",
      description:
        "En OneDrive, las carpetas sirven para organizar documentos y los archivos representan elementos específicos de trabajo, como documentos, hojas de cálculo, presentaciones o imágenes.",
      bullets: [
        "Identifica qué es una carpeta y para qué sirve.",
        "Reconoce los archivos como documentos individuales de trabajo.",
        "Comprende que una buena estructura facilita la búsqueda de información.",
      ],
    },
  },
  {
    id: "paso-7",
    number: 8,
    title: "Identifica archivos recientes",
    shortDescription:
      "Ubica documentos recientes para continuar tu trabajo con mayor rapidez.",
    block: 2,
    type: "content",
    estimatedTime: "3 min",
    content: {
      eyebrow: "Consulta rápida",
      title: "Encuentra archivos recientes",
      description:
        "La sección de archivos recientes permite localizar documentos usados recientemente sin tener que navegar manualmente por todas tus carpetas.",
      bullets: [
        "Ubica la sección de archivos recientes.",
        "Reconoce documentos abiertos o modificados recientemente.",
        "Usa esta sección para retomar actividades de trabajo con mayor rapidez.",
      ],
    },
  },
  {
    id: "paso-8",
    number: 9,
    title: "Consulta archivos compartidos contigo",
    shortDescription:
      "Aprende a identificar archivos que otras personas han compartido contigo.",
    block: 2,
    type: "content",
    estimatedTime: "4 min",
    content: {
      eyebrow: "Archivos compartidos",
      title: "Consulta lo que han compartido contigo",
      description:
        "OneDrive permite consultar documentos que otras personas han compartido contigo, sin necesidad de recibir múltiples copias por correo.",
      bullets: [
        "Ubica la sección de archivos compartidos.",
        "Distingue entre archivos propios y archivos compartidos por otras personas.",
        "Reconoce cuándo tienes permisos de lectura o edición.",
      ],
    },
  },
  {
    id: "paso-9",
    number: 10,
    title: "Evita duplicados",
    shortDescription:
      "Reconoce prácticas para reducir archivos duplicados y versiones confusas.",
    block: 2,
    type: "content",
    estimatedTime: "4 min",
    content: {
      eyebrow: "Buenas prácticas",
      title: "Evita duplicados y versiones confusas",
      description:
        "Trabajar con vínculos y documentos centralizados ayuda a evitar archivos repetidos, versiones distintas y confusión sobre cuál documento es el vigente.",
      bullets: [
        "Evita descargar y reenviar copias innecesarias.",
        "Trabaja con un archivo maestro cuando sea posible.",
        "Usa nombres claros para identificar versiones cuando realmente sean necesarias.",
      ],
    },
  },
  {
    id: "paso-10",
    number: 11,
    title: "Recupera versiones anteriores",
    shortDescription:
      "Conoce la utilidad de consultar versiones previas de un documento.",
    block: 2,
    type: "content",
    estimatedTime: "5 min",
    content: {
      eyebrow: "Control documental",
      title: "Consulta versiones anteriores",
      description:
        "Cuando un documento se trabaja en la nube, es posible consultar versiones previas para revisar cambios o recuperar información anterior.",
      bullets: [
        "Comprende que un archivo puede tener historial de versiones.",
        "Identifica cuándo puede ser útil revisar una versión anterior.",
        "Reconoce que esta función ayuda a dar seguimiento a cambios en documentos colaborativos.",
      ],
    },
  },
  {
    id: "checkpoint-2",
    number: 12,
    title: "Checkpoint 2",
    shortDescription:
      "Valida tus conocimientos sobre organización y consulta de archivos.",
    block: 2,
    type: "evaluation",
    estimatedTime: "Checkpoint",
    content: {
      eyebrow: "Checkpoint 2",
      title: "Confirma tu avance de organización",
      description:
        "Antes de avanzar al último bloque, valida que comprendes cómo organizar, consultar y distinguir documentos dentro de OneDrive.",
      bullets: [
        "Distinguir archivos y carpetas.",
        "Consultar documentos recientes.",
        "Evitar duplicados y versiones confusas.",
      ],
      evaluation: {
        question:
          "¿Cuál es una buena práctica para evitar versiones confusas de documentos?",
        options: [
          "Crear muchas copias con nombres similares.",
          "Enviar el documento por correo cada vez que se modifica.",
          "Trabajar con un archivo maestro y compartir vínculos cuando sea posible.",
          "Guardar todos los documentos únicamente en el escritorio local.",
        ],
        correctAnswer:
          "Trabajar con un archivo maestro y compartir vínculos cuando sea posible.",
      },
    },
  },

  {
    id: "paso-11",
    number: 13,
    title: "Trabaja desde distintos dispositivos",
    shortDescription:
      "Reconoce la disponibilidad de archivos institucionales desde dispositivos autorizados.",
    block: 3,
    type: "content",
    estimatedTime: "3 min",
    content: {
      eyebrow: "Bloque 3",
      title: "Accede desde dispositivos autorizados",
      description:
        "OneDrive permite consultar archivos institucionales desde distintos dispositivos autorizados, manteniendo control y disponibilidad de la información.",
      bullets: [
        "Comprende que el acceso depende de tu cuenta institucional.",
        "Identifica la importancia de utilizar dispositivos autorizados.",
        "Reconoce que la disponibilidad no elimina la responsabilidad de proteger la información.",
      ],
    },
  },
  {
    id: "paso-12",
    number: 14,
    title: "Colabora en tiempo real",
    shortDescription:
      "Comprende cómo varias personas pueden trabajar sobre un mismo documento.",
    block: 3,
    type: "content",
    estimatedTime: "4 min",
    content: {
      eyebrow: "Colaboración",
      title: "Trabaja con otras personas en tiempo real",
      description:
        "Cuando un documento se comparte desde OneDrive, varias personas autorizadas pueden colaborar sobre el mismo archivo, reduciendo duplicados y manteniendo una sola versión actualizada.",
      bullets: [
        "Reconoce la utilidad de colaborar sobre un mismo archivo.",
        "Comprende que los cambios pueden reflejarse en tiempo real.",
        "Identifica la importancia de asignar permisos adecuados.",
      ],
    },
  },
  {
    id: "paso-13",
    number: 15,
    title: "Cuida la información institucional",
    shortDescription:
      "Refuerza buenas prácticas para proteger documentos institucionales.",
    block: 3,
    type: "content",
    estimatedTime: "4 min",
    content: {
      eyebrow: "Seguridad",
      title: "Protege la información institucional",
      description:
        "El uso de OneDrive debe realizarse cuidando la confidencialidad, disponibilidad y control de la información institucional.",
      bullets: [
        "Verifica los permisos antes de compartir un archivo.",
        "Evita compartir información sensible con personas no autorizadas.",
        "Retira accesos cuando ya no sean necesarios.",
        "Usa tu cuenta institucional de forma responsable.",
      ],
    },
  },
  {
    id: "paso-14",
    number: 16,
    title: "Aplica buenas prácticas",
    shortDescription:
      "Integra recomendaciones para el uso cotidiano de OneDrive.",
    block: 3,
    type: "content",
    estimatedTime: "4 min",
    content: {
      eyebrow: "Buenas prácticas",
      title: "Usa OneDrive de forma clara y ordenada",
      description:
        "Una buena práctica digital combina organización, colaboración y seguridad. OneDrive debe utilizarse como una herramienta institucional de trabajo, no solo como un espacio de almacenamiento.",
      bullets: [
        "Organiza archivos por tema, actividad o área.",
        "Comparte vínculos en lugar de enviar copias cuando sea posible.",
        "Revisa permisos antes y después de compartir.",
        "Evita duplicados y nombres confusos.",
      ],
    },
  },
  {
    id: "paso-15",
    number: 17,
    title: "Prepara tu evaluación final",
    shortDescription:
      "Repasa los conceptos principales antes de presentar la evaluación final.",
    block: 3,
    type: "content",
    estimatedTime: "3 min",
    content: {
      eyebrow: "Cierre de ruta",
      title: "Repasa antes de evaluar",
      description:
        "Antes de presentar la evaluación final, revisa los conceptos principales: acceso institucional, nube, archivos compartidos, permisos, colaboración y protección de información.",
      bullets: [
        "Recuerda que OneDrive forma parte de Microsoft 365.",
        "Distingue entre enviar copias y compartir vínculos.",
        "Revisa la importancia de permisos y control de acceso.",
        "Relaciona OneDrive con trabajo colaborativo y archivo maestro.",
      ],
    },
  },
  {
    id: "evaluacion-final",
    number: 18,
    title: "Evaluación final",
    shortDescription:
      "Responde una evaluación final para completar la ruta OneDrive Descubre.",
    block: 3,
    type: "evaluation",
    estimatedTime: "10 min",
    content: {
      eyebrow: "Evaluación final",
      title: "Demuestra tu dominio inicial de OneDrive",
      description:
        "Esta evaluación integra los principales conceptos revisados durante la ruta OneDrive Descubre.",
      bullets: [
        "Tendrás 10 preguntas.",
        "Cuentas con máximo 2 intentos.",
        "Apruebas con 7 respuestas correctas.",
        "La insignia dependerá de tu resultado.",
      ],
      finalEvaluation: {
        timeLimitMinutes: 10,
        maxAttempts: 2,
        minimumCorrectAnswers: 7,
        questions: [
          {
            question:
              "¿Cuál es la función de tu correo institucional dentro del ecosistema Microsoft 365?",
            options: [
              "Es únicamente para enviar y recibir correos electrónicos.",
              "Es tu llave de acceso a los servicios de Microsoft 365 y está vinculada con la contraseña de tu equipo institucional.",
              "Sirve solo para registrar asistencia a sistemas internos.",
              "Es una cuenta independiente que no se relaciona con otras herramientas.",
            ],
            correctAnswer:
              "Es tu llave de acceso a los servicios de Microsoft 365 y está vinculada con la contraseña de tu equipo institucional.",
          },
          {
            question:
              "¿Por qué el TFJA utiliza OneDrive como plataforma institucional?",
            options: [
              "Para almacenar archivos personales sin restricciones.",
              "Para reemplazar completamente el uso del correo electrónico.",
              "Porque permite guardar información en la nube de forma segura, centralizada y accesible desde dispositivos autorizados.",
              "Porque es obligatorio guardar todos los archivos únicamente en una computadora local.",
            ],
            correctAnswer:
              "Porque permite guardar información en la nube de forma segura, centralizada y accesible desde dispositivos autorizados.",
          },
          {
            question:
              "¿Qué sucede cuando compartes un vínculo en lugar de adjuntar un archivo?",
            options: [
              "Se envía una copia independiente del documento.",
              "Se otorga acceso a un archivo en la nube con una sola versión actualizada y permisos controlados.",
              "El archivo deja de pertenecer al usuario que lo creó.",
              "El archivo se descarga automáticamente en todos los dispositivos.",
            ],
            correctAnswer:
              "Se otorga acceso a un archivo en la nube con una sola versión actualizada y permisos controlados.",
          },
          {
            question:
              "¿Qué ventaja ofrece trabajar con un archivo maestro en OneDrive?",
            options: [
              "Permite mantener una sola versión actualizada del documento.",
              "Impide que otras personas puedan colaborar.",
              "Obliga a descargar siempre el archivo.",
              "Elimina la necesidad de organizar carpetas.",
            ],
            correctAnswer:
              "Permite mantener una sola versión actualizada del documento.",
          },
          {
            question:
              "¿Qué permiso conviene asignar si solo quieres que una persona consulte un documento?",
            options: [
              "Edición total.",
              "Solo lectura.",
              "Propietario del archivo.",
              "Acceso público sin restricción.",
            ],
            correctAnswer: "Solo lectura.",
          },
          {
            question:
              "¿Cuál es una buena práctica al organizar archivos en OneDrive?",
            options: [
              "Usar nombres claros y agrupar documentos relacionados.",
              "Guardar todos los documentos en una sola carpeta sin clasificación.",
              "Nombrar archivos como final, final2 y final definitivo.",
              "Duplicar documentos antes de compartirlos.",
            ],
            correctAnswer:
              "Usar nombres claros y agrupar documentos relacionados.",
          },
          {
            question:
              "¿Qué sección ayuda a retomar documentos usados recientemente?",
            options: [
              "Archivos recientes.",
              "Papelera del sistema operativo.",
              "Panel de control de Windows.",
              "Configuración de red.",
            ],
            correctAnswer: "Archivos recientes.",
          },
          {
            question:
              "¿Qué debes revisar antes de compartir información institucional?",
            options: [
              "Los permisos de acceso y las personas destinatarias.",
              "El color del ícono del archivo.",
              "El tamaño del monitor.",
              "La cantidad de accesos directos del escritorio.",
            ],
            correctAnswer:
              "Los permisos de acceso y las personas destinatarias.",
          },
          {
            question:
              "¿Qué permite la colaboración en tiempo real?",
            options: [
              "Que varias personas autorizadas trabajen sobre un mismo archivo actualizado.",
              "Que cada persona tenga una copia aislada.",
              "Que el archivo se elimine automáticamente.",
              "Que no sea necesario revisar permisos.",
            ],
            correctAnswer:
              "Que varias personas autorizadas trabajen sobre un mismo archivo actualizado.",
          },
          {
            question:
              "¿Qué debes hacer si una persona ya no necesita acceso a un archivo?",
            options: [
              "Retirar o modificar su permiso de acceso.",
              "Enviar más copias del archivo.",
              "Cambiar el nombre del documento únicamente.",
              "Descargarlo en todos los equipos.",
            ],
            correctAnswer: "Retirar o modificar su permiso de acceso.",
          },
        ],
      },
    },
  },
];