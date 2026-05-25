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
    video: "/course-assets/onedrive/videos/intro-onedrive-oficina-nube.mp4",
  },
},
{
  id: "paso-1",
  number: 1,
  title: "Tu oficina en la nube",
  shortDescription:
    "Comprende OneDrive como un espacio institucional para trabajar con archivos sin depender de copias o adjuntos.",
  block: 1,
  type: "content",
  estimatedTime: "3 min",
  content: {
    eyebrow: "Descubrimiento inicial",
    title: "OneDrive: tu oficina en la nube institucional",
    description:
      "OneDrive permite transformar la forma de trabajar con archivos: en lugar de enviar múltiples copias por correo, puedes mantener un archivo maestro en la nube y compartir accesos seguros con las personas autorizadas.",
    bullets: [
      "Comprende que OneDrive funciona como un espacio institucional en la nube para guardar y consultar archivos desde dispositivos autorizados.",
      "Identifica la diferencia entre enviar copias de un archivo y compartir un vínculo de acceso controlado.",
      "Reconoce que puedes administrar permisos, como solo lectura o edición, y retirar el acceso cuando sea necesario.",
      "Comprende que trabajar en la nube ayuda a evitar duplicados, versiones confusas y archivos llamados final, final2 o final definitivo.",
      "Visualiza OneDrive como una herramienta para colaborar en tiempo real manteniendo un solo archivo maestro actualizado.",
    ],
    image: "/course-assets/onedrive/images/paso-1-onedrive.png",
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
    "Aprende a ingresar a OneDrive con tu cuenta institucional y reconocer los elementos principales de la pantalla.",
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
    title: "OneDrive en el TFJA",
    shortDescription:
      "Crea una estructura básica para encontrar tus archivos más rápido.",
    block: 1,
    type: "content",
    estimatedTime: "4 min",
    content: {
      eyebrow: "Reto breve",
      title: "Ordena tus archivos por tema o actividad",
      description:
        "Una buena organización reduce tiempo de búsqueda y evita confusión entre versiones de documentos.",
      bullets: [
        "Crea carpetas con nombres claros.",
        "Agrupa documentos relacionados.",
        "Evita nombres genéricos como 'nuevo' o 'archivo final'.",
      ],
    },
  },
{
  id: "paso-4",
  number: 4,
  title: "Comparte un archivo",
  shortDescription:
    "Aprende a compartir un archivo mediante vínculo o destinatarios específicos, cuidando los permisos de acceso.",
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
      "Identifica quién puede consultar o editar tus documentos.",
    block: 1,
    type: "content",
    estimatedTime: "4 min",
    content: {
      eyebrow: "Punto clave",
      title: "Los permisos protegen la información",
      description:
        "Antes de compartir un documento, es importante revisar si la otra persona podrá verlo, editarlo o reenviarlo.",
      bullets: [
        "Revisa destinatarios.",
        "Confirma el tipo de permiso.",
        "Evita compartir información sensible sin validación.",
      ],
    },
  },
{
  id: "evaluacion-1",
  number: 6,
  title: "Evaluación 1",
  shortDescription:
    "Valida lo aprendido en los primeros cinco pasos.",
  block: 1,
  type: "evaluation",
  estimatedTime: "3 min",
  content: {
    eyebrow: "Evaluación rápida",
    title: "Checkpoint 1: primeros pasos con OneDrive",
    description:
      "Confirma que identificas el uso básico de OneDrive, la carga de archivos, la organización y los permisos.",
    bullets: [
      "Qué es OneDrive.",
      "Cómo subir archivos.",
      "Cómo compartir con permisos adecuados.",
    ],
    evaluation: {
      question: "¿Cuál es el uso principal de OneDrive dentro del trabajo institucional?",
      options: [
        "Guardar y compartir archivos en la nube de forma segura.",
        "Crear contraseñas para los sistemas internos.",
        "Enviar mensajes instantáneos como Teams.",
        "Diseñar presentaciones animadas.",
      ],
      correctAnswer: "Guardar y compartir archivos en la nube de forma segura.",
    },
  },
},

  {
    id: "paso-6",
    number: 7,
    title: "Distingue archivo y carpeta",
    shortDescription:
      "Reconoce cuándo usar archivos individuales y cuándo organizar por carpetas.",
    block: 2,
    type: "content",
    estimatedTime: "3 min",
    content: {
      eyebrow: "Microcontenido",
      title: "Archivo o carpeta: elige la mejor organización",
      description:
        "Separar correctamente archivos y carpetas ayuda a consultar información de forma más rápida y ordenada.",
      bullets: [
        "Usa carpetas para agrupar temas.",
        "Usa nombres claros para documentos.",
        "Evita mezclar documentos de asuntos distintos.",
      ],
    },
  },
  {
    id: "paso-7",
    number: 8,
    title: "Identifica archivos recientes",
    shortDescription:
      "Consulta documentos usados recientemente sin buscarlos manualmente.",
    block: 2,
    type: "content",
    estimatedTime: "3 min",
    content: {
      eyebrow: "Descubrimiento práctico",
      title: "Encuentra rápido lo que usaste recientemente",
      description:
        "La vista de archivos recientes permite regresar rápidamente a documentos abiertos o modificados hace poco.",
      bullets: [
        "Ubica la sección de recientes.",
        "Distingue documentos propios y compartidos.",
        "Evita descargar documentos innecesariamente.",
      ],
    },
  },
  {
    id: "paso-8",
    number: 9,
    title: "Consulta archivos compartidos contigo",
    shortDescription:
      "Aprende a encontrar documentos que otras personas te compartieron.",
    block: 2,
    type: "content",
    estimatedTime: "4 min",
    content: {
      eyebrow: "Ruta rápida",
      title: "Ubica documentos compartidos",
      description:
        "OneDrive permite consultar archivos compartidos por otras personas sin tener que buscarlos en el correo.",
      bullets: [
        "Entra a la sección de compartidos.",
        "Identifica quién compartió el documento.",
        "Confirma si tienes permiso de lectura o edición.",
      ],
    },
  },
  {
    id: "paso-9",
    number: 10,
    title: "Evita duplicados",
    shortDescription:
      "Aprende buenas prácticas para no crear varias versiones del mismo archivo.",
    block: 2,
    type: "content",
    estimatedTime: "4 min",
    content: {
      eyebrow: "Buena práctica",
      title: "Menos copias, más orden",
      description:
        "Trabajar sobre una sola versión compartida evita confusiones y reduce errores en documentos colaborativos.",
      bullets: [
        "Evita enviar el mismo archivo varias veces.",
        "Trabaja desde el vínculo compartido.",
        "Revisa la fecha de modificación antes de duplicar.",
      ],
    },
  },
  {
    id: "paso-10",
    number: 11,
    title: "Recupera versiones anteriores",
    shortDescription:
      "Conoce la utilidad del historial de versiones.",
    block: 2,
    type: "content",
    estimatedTime: "5 min",
    content: {
      eyebrow: "Función útil",
      title: "Consulta versiones anteriores de un documento",
      description:
        "El historial de versiones permite revisar cambios previos y recuperar información cuando sea necesario.",
      bullets: [
        "Identifica si el archivo tiene versiones previas.",
        "Consulta quién modificó el documento.",
        "Recupera una versión solo cuando sea necesario.",
      ],
    },
  },
{
  id: "evaluacion-2",
  number: 12,
  title: "Checkpoint 2",
  shortDescription:
    "Valida organización, archivos compartidos y versiones.",
  block: 2,
  type: "evaluation",
  estimatedTime: "3 min",
  content: {
    eyebrow: "Evaluación rápida",
    title: "Checkpoint 2: organización y colaboración",
    description:
      "Confirma que puedes ubicar documentos recientes, compartidos y evitar duplicados.",
    bullets: [
      "Cómo encontrar archivos recientes.",
      "Cómo consultar archivos compartidos.",
      "Cómo evitar múltiples versiones del mismo documento.",
    ],
    evaluation: {
      question: "¿Qué práctica ayuda más a evitar duplicados en OneDrive?",
      options: [
        "Trabajar desde el vínculo compartido en lugar de reenviar copias.",
        "Descargar todos los archivos antes de revisarlos.",
        "Cambiar el nombre del archivo cada vez que se abre.",
        "Guardar el mismo documento en varias carpetas.",
      ],
      correctAnswer: "Trabajar desde el vínculo compartido en lugar de reenviar copias.",
    },
  },
},

  {
    id: "paso-11",
    number: 13,
    title: "Trabaja desde el navegador",
    shortDescription:
      "Identifica cuándo abrir documentos directamente desde Microsoft 365.",
    block: 3,
    type: "content",
    estimatedTime: "4 min",
    content: {
      eyebrow: "Uso cotidiano",
      title: "Abre documentos sin descargarlos",
      description:
        "Trabajar desde el navegador permite consultar y editar archivos sin llenar el equipo con copias locales.",
      bullets: [
        "Abre documentos desde OneDrive.",
        "Usa Word, Excel o PowerPoint en línea cuando sea suficiente.",
        "Descarga solo cuando sea necesario.",
      ],
    },
  },
  {
    id: "paso-12",
    number: 14,
    title: "Sincroniza con tu equipo",
    shortDescription:
      "Conoce de forma general cómo funciona la sincronización.",
    block: 3,
    type: "content",
    estimatedTime: "5 min",
    content: {
      eyebrow: "Productividad",
      title: "Accede a tus archivos desde el explorador",
      description:
        "La sincronización permite consultar archivos de OneDrive desde el explorador del equipo, manteniendo conexión con la nube.",
      bullets: [
        "Reconoce el icono de OneDrive en el equipo.",
        "Diferencia archivos disponibles en línea y en el dispositivo.",
        "Evita mover carpetas institucionales sin entender el impacto.",
      ],
    },
  },
  {
    id: "paso-13",
    number: 15,
    title: "Identifica estados de sincronización",
    shortDescription:
      "Reconoce los indicadores visuales más comunes de sincronización.",
    block: 3,
    type: "content",
    estimatedTime: "4 min",
    content: {
      eyebrow: "Punto visual",
      title: "Comprende los iconos de estado",
      description:
        "Los indicadores de sincronización ayudan a saber si un archivo está disponible en línea, descargado o pendiente de sincronizar.",
      bullets: [
        "Identifica archivos disponibles en línea.",
        "Reconoce archivos descargados en el equipo.",
        "Detecta posibles errores de sincronización.",
      ],
    },
  },
  {
    id: "paso-14",
    number: 16,
    title: "Aplica buenas prácticas",
    shortDescription:
      "Repasa recomendaciones para el uso institucional de OneDrive.",
    block: 3,
    type: "content",
    estimatedTime: "4 min",
    content: {
      eyebrow: "Buenas prácticas",
      title: "Usa OneDrive de forma clara y segura",
      description:
        "El uso ordenado de OneDrive facilita la colaboración y reduce riesgos de pérdida o duplicidad de información.",
      bullets: [
        "Nombra archivos con claridad.",
        "Comparte solo con personas necesarias.",
        "Mantén carpetas ordenadas por tema o actividad.",
      ],
    },
  },
  {
    id: "paso-15",
    number: 17,
    title: "Cierra tu ruta Descubre",
    shortDescription:
      "Repasa lo aprendido antes de la evaluación final.",
    block: 3,
    type: "content",
    estimatedTime: "3 min",
    content: {
      eyebrow: "Cierre de ruta",
      title: "Ya conoces lo esencial de OneDrive",
      description:
        "En esta ruta revisaste las acciones principales para guardar, organizar, compartir y consultar archivos en OneDrive.",
      bullets: [
        "Guardar archivos en la nube.",
        "Organizar documentos por carpetas.",
        "Compartir con permisos adecuados.",
        "Consultar documentos recientes y compartidos.",
        "Reconocer buenas prácticas de sincronización.",
      ],
    },
  },
{
  id: "evaluacion-final",
  number: 18,
  title: "Evaluación final",
  shortDescription:
    "Cierre de la ruta Descubre de OneDrive.",
  block: 3,
  type: "evaluation",
  estimatedTime: "10 min",
  content: {
    eyebrow: "Evaluación final",
    title: "Evaluación final: OneDrive Descubre",
    description:
      "Valida los conceptos principales de la ruta y confirma que puedes usar OneDrive en tareas básicas del trabajo diario.",
    bullets: [
      "Tendrás un límite de tiempo.",
      "Solo contarás con dos intentos.",
      "Necesitas al menos 7 respuestas correctas para aprobar.",
      "La insignia dependerá de tu resultado.",
    ],
    finalEvaluation: {
      timeLimitMinutes: 10,
      minimumCorrectAnswers: 7,
      maxAttempts: 2,
      questions: [
        {
          question:
            "¿Cuál es el objetivo principal de OneDrive dentro del trabajo institucional?",
          options: [
            "Guardar, organizar y compartir archivos en la nube.",
            "Crear reuniones virtuales con el equipo.",
            "Diseñar presentaciones con animaciones.",
            "Administrar contraseñas de sistemas internos.",
          ],
          correctAnswer:
            "Guardar, organizar y compartir archivos en la nube.",
        },
        {
          question:
            "¿Qué ventaja tiene trabajar con un archivo compartido desde OneDrive?",
          options: [
            "Evita generar múltiples copias del mismo documento.",
            "Impide que otras personas vean el archivo.",
            "Convierte automáticamente el archivo a PDF.",
            "Elimina la necesidad de revisar permisos.",
          ],
          correctAnswer:
            "Evita generar múltiples copias del mismo documento.",
        },
        {
          question:
            "Antes de compartir un documento, ¿qué se debe revisar principalmente?",
          options: [
            "Los permisos de acceso.",
            "El color del archivo.",
            "El tamaño del monitor.",
            "La cantidad de carpetas del equipo.",
          ],
          correctAnswer: "Los permisos de acceso.",
        },
        {
          question:
            "¿Qué práctica ayuda a mantener ordenados los archivos en OneDrive?",
          options: [
            "Crear carpetas con nombres claros.",
            "Guardar todos los documentos en una sola carpeta.",
            "Nombrar los archivos como copia, copia2 y final.",
            "Descargar todos los archivos al escritorio.",
          ],
          correctAnswer: "Crear carpetas con nombres claros.",
        },
        {
          question:
            "¿Para qué sirve la sección de archivos recientes?",
          options: [
            "Para ubicar rápidamente documentos usados hace poco.",
            "Para eliminar documentos automáticamente.",
            "Para cambiar la contraseña institucional.",
            "Para crear nuevos usuarios.",
          ],
          correctAnswer:
            "Para ubicar rápidamente documentos usados hace poco.",
        },
        {
          question:
            "¿Qué permite consultar la sección de archivos compartidos?",
          options: [
            "Documentos que otras personas compartieron contigo.",
            "Únicamente archivos descargados en el equipo.",
            "Solo documentos eliminados.",
            "El historial de navegación del navegador.",
          ],
          correctAnswer:
            "Documentos que otras personas compartieron contigo.",
        },
        {
          question:
            "¿Para qué sirve el historial de versiones?",
          options: [
            "Para consultar o recuperar versiones anteriores de un documento.",
            "Para cambiar el nombre del usuario.",
            "Para bloquear permanentemente un archivo.",
            "Para convertir cualquier documento en imagen.",
          ],
          correctAnswer:
            "Para consultar o recuperar versiones anteriores de un documento.",
        },
        {
          question:
            "¿Qué significa trabajar con archivos en la nube?",
          options: [
            "Que los archivos pueden consultarse desde la cuenta institucional conectada.",
            "Que los archivos solo existen en una memoria USB.",
            "Que los archivos se eliminan al cerrar sesión.",
            "Que no se pueden compartir con nadie.",
          ],
          correctAnswer:
            "Que los archivos pueden consultarse desde la cuenta institucional conectada.",
        },
        {
          question:
            "¿Cuál es una buena práctica al nombrar documentos?",
          options: [
            "Usar nombres claros relacionados con el contenido.",
            "Usar nombres como documento1, nuevo o finalfinal.",
            "No poner nombre a los archivos.",
            "Cambiar el nombre cada vez que se abre el documento.",
          ],
          correctAnswer:
            "Usar nombres claros relacionados con el contenido.",
        },
        {
          question:
            "¿Cuál opción resume mejor el uso adecuado de OneDrive?",
          options: [
            "Guardar, organizar, compartir y revisar permisos de los archivos.",
            "Compartir todos los archivos con edición libre.",
            "Usarlo solo para archivos personales.",
            "Crear muchas copias para evitar perder información.",
          ],
          correctAnswer:
            "Guardar, organizar, compartir y revisar permisos de los archivos.",
        },
      ],
    },
  },
},
];