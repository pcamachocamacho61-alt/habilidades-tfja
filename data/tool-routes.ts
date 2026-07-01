import { LearningStep } from "@/types/learning";

export type ToolRouteConfig = {
  toolId: string;
  toolName: string;
  levelId: string;
  levelName: string;
  routeId: string;
  steps: LearningStep[];
};

export const toolRoutes: Record<string, ToolRouteConfig> = {
  "teams-descubre": {
    "toolId": "teams",
    "toolName": "Teams",
    "levelId": "descubre",
    "levelName": "Descubre",
    "routeId": "teams-descubre",
    "steps": [
      {
        "id": "bloque-1-paso-1",
        "number": 1,
        "title": "Teams en el TFJA",
        "shortDescription": "Reconocer Teams como herramienta institucional de comunicación, colaboración y acceso a información de trabajo.",
        "block": 1,
        "type": "welcome",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Conociendo Microsoft Teams en el TFJA",
          "title": "Teams en el TFJA",
          "description": "Reconocer Teams como herramienta institucional de comunicación, colaboración y acceso a información de trabajo.",
          "bullets": [],
          "didYouKnow": "Teams no solo sirve para reuniones de teletrabajo. También permite administrar archivos, colaborar en documentos, crear flujos de trabajo, integrar aplicaciones de terceros y centralizar procesos organizacionales en una sola plataforma.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-2",
        "number": 2,
        "title": "Navegación básica en Teams",
        "shortDescription": "Ubicar las funciones principales de la aplicación para moverse con seguridad dentro de la plataforma.",
        "block": 1,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Conociendo Microsoft Teams en el TFJA",
          "title": "Navegación básica en Teams",
          "description": "Ubicar las funciones principales de la aplicación para moverse con seguridad dentro de la plataforma.",
          "bullets": [],
          "didYouKnow": "La barra lateral de Teams es configurable: puedes anclar las aplicaciones que más usas y reordenar Actividad, Chat, Equipos, Calendario y Archivos para tenerlas siempre a la mano.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-3",
        "number": 3,
        "title": "Búsqueda de personas servidoras públicas",
        "shortDescription": "Buscar a una persona dentro del Tribunal y consultar su tarjeta de contacto para identificar correo, cargo, ubicación o extensión disponible.",
        "block": 1,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Conociendo Microsoft Teams en el TFJA",
          "title": "Búsqueda de personas servidoras públicas",
          "description": "Buscar a una persona dentro del Tribunal y consultar su tarjeta de contacto para identificar correo, cargo, ubicación o extensión disponible.",
          "bullets": [],
          "didYouKnow": "La tarjeta de contacto de Teams se alimenta del directorio institucional, por lo que muestra el cargo, el área y los datos de la persona sin que tú tengas que capturarlos.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-4",
        "number": 4,
        "title": "Contacto desde Teams (chats)",
        "shortDescription": "Utilizar la tarjeta de contacto para iniciar comunicación por chat.",
        "block": 1,
        "type": "content",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Conociendo Microsoft Teams en el TFJA",
          "title": "Contacto desde Teams (chats)",
          "description": "Utilizar la tarjeta de contacto para iniciar comunicación por chat.",
          "bullets": [],
          "didYouKnow": "Desde la misma tarjeta de contacto puedes iniciar un chat, una llamada o un correo institucional sin salir de Teams, evitando buscar de nuevo los datos de la persona en otra aplicación. En un chat puedes marcar un mensaje como Importante o Urgente; este último vuelve a notificar cada cierto tiempo hasta que la persona lo lee.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-5",
        "number": 5,
        "title": "Estados, disponibilidad y comunicación básica",
        "shortDescription": "Comprender el significado de los estados de presencia y su uso correcto en el entorno laboral.",
        "block": 1,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Conociendo Microsoft Teams en el TFJA",
          "title": "Estados, disponibilidad y comunicación básica",
          "description": "Comprender el significado de los estados de presencia y su uso correcto en el entorno laboral.",
          "bullets": [],
          "didYouKnow": "Tu estado de presencia se actualiza solo según tu actividad y tu calendario: por ejemplo, aparece \"En una reunión\" de forma automática cuando tienes un evento en curso.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "evaluacion-1",
        "number": 6,
        "title": "Evaluación 1",
        "shortDescription": "Checkpoint obligatorio del Bloque 1.",
        "block": 1,
        "type": "evaluation",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Evaluación Bloque 1",
          "title": "Evaluación 1",
          "description": "Responde las tres preguntas clave para desbloquear el siguiente bloque.",
         
          "checkpointEvaluation": {
            "id": "teams-descubre-evaluacion-1",
            "type": "checkpoint-1",
            "title": "Evaluación 1",
            "minimumCorrectAnswers": 2,
            "maxAttempts": 2,
            "questions": [
              {
                "id": "H-01-01-01",
                "question": "¿Cuál es el propósito principal de Teams dentro del TFJA?",
                "options": [
                  "Sustituir todos los sistemas institucionales",
                  "Centralizar comunicación, colaboración y acceso a información de trabajo",
                  "Guardar únicamente archivos personales",
                  "Crear documentos sin conexión a internet"
                ],
                "correctAnswer": "Centralizar comunicación, colaboración y acceso a información de trabajo"
              },
              {
                "id": "H-01-01-02",
                "question": "¿Qué permite la barra lateral de Teams?",
                "options": [
                  "Acceder a funciones como Actividad, Chat, Equipos, Calendario y Archivos",
                  "Modificar el sistema operativo del equipo",
                  "Eliminar reuniones de otros usuarios",
                  "Cambiar los permisos de red institucional"
                ],
                "correctAnswer": "Acceder a funciones como Actividad, Chat, Equipos, Calendario y Archivos"
              },
              {
                "id": "H-01-01-03",
                "question": "¿Para qué sirve consultar la tarjeta de contacto en Teams?",
                "options": [
                  "Para ver únicamente la fotografía de una persona",
                  "Para identificar datos como correo, cargo, área o medios de contacto disponibles",
                  "Para crear una contraseña nueva",
                  "Para descargar todos los archivos de un usuario"
                ],
                "correctAnswer": "Para identificar datos como correo, cargo, área o medios de contacto disponibles"
              }
            ]
          }
        }
      },
      {
        "id": "bloque-2-paso-1",
        "number": 1,
        "title": "Calendario de Microsoft en Teams",
        "shortDescription": "Consultar reuniones programadas, unirse desde el calendario y reconocer la información básica de una invitación.",
        "block": 2,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Calendario y Reuniones",
          "title": "Calendario de Microsoft en Teams",
          "description": "Consultar reuniones programadas, unirse desde el calendario y reconocer la información básica de una invitación.",
          "bullets": [],
          "didYouKnow": "El Calendario de Teams se sincroniza con Outlook: las reuniones que agendas en uno aparecen automáticamente en el otro.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-2",
        "number": 2,
        "title": "Crear una reunión (como organizador)",
        "shortDescription": "Generar una sesión de teams como organizar e invitar a los asistentes, detectando disponibilidad y determinando si la sesió es a distancia o presencial.",
        "block": 2,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Calendario y Reuniones",
          "title": "Crear una reunión (como organizador)",
          "description": "Generar una sesión de teams como organizar e invitar a los asistentes, detectando disponibilidad y determinando si la sesió es a distancia o presencial.",
          "bullets": [],
          "didYouKnow": "Cuando programas una reunión en Teams, puedes configurar la sala de espera (lobby) para controlar quién entra directamente y quién debe ser admitido. Esto es muy útil para evitar interrupciones o accesos no autorizados, especialmente en reuniones con externos.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-3",
        "number": 3,
        "title": "Acceso correcto a una reunión de Teams",
        "shortDescription": "Ingresar a una reunión cuidando audio, micrófono, cámara, nombre de usuario y entorno de participación.",
        "block": 2,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Calendario y Reuniones",
          "title": "Acceso correcto a una reunión de Teams",
          "description": "Ingresar a una reunión cuidando audio, micrófono, cámara, nombre de usuario y entorno de participación.",
          "bullets": [],
          "didYouKnow": "La pantalla de espera previa a una reunión te permite revisar y ajustar micrófono, cámara y fondo antes de entrar, para no interrumpir una vez dentro de la sesión.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-4",
        "number": 4,
        "title": "Participación básica durante una reunión",
        "shortDescription": "Utilizar las funciones esenciales de reunión: silenciar micrófono, activar cámara, levantar la mano, usar chat y compartir pantalla cuando corresponda.",
        "block": 2,
        "type": "content",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Calendario y Reuniones",
          "title": "Participación básica durante una reunión",
          "description": "Utilizar las funciones esenciales de reunión: silenciar micrófono, activar cámara, levantar la mano, usar chat y compartir pantalla cuando corresponda.",
          "bullets": [],
          "didYouKnow": "La función \"Levantar la mano\" deja registrado el orden en que las personas pidieron la palabra, lo que ayuda a moderar de forma ordenada las reuniones con muchos participantes.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-5",
        "number": 5,
        "title": "Grabaciones y transcripciones",
        "shortDescription": "Identificar dónde consultar grabaciones y transcripciones cuando estén habilitadas o disponibles para la reunión.",
        "block": 2,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Calendario y Reuniones",
          "title": "Grabaciones y transcripciones",
          "description": "Identificar dónde consultar grabaciones y transcripciones cuando estén habilitadas o disponibles para la reunión.",
          "bullets": [],
          "didYouKnow": "En Microsoft Teams, la grabación puede ser iniciada por varios participantes internos, pero la transcripción solo puede activarse por el organizador o por quienes tengan permisos previamente definidos por él.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "evaluacion-2",
        "number": 6,
        "title": "Evaluación 2",
        "shortDescription": "Checkpoint obligatorio del Bloque 2.",
        "block": 2,
        "type": "evaluation",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Evaluación Bloque 2",
          "title": "Evaluación 2",
          "description": "Responde las tres preguntas clave para desbloquear el siguiente bloque.",
          
          "checkpointEvaluation": {
            "id": "teams-descubre-evaluacion-2",
            "type": "checkpoint-2",
            "title": "Evaluación 2",
            "minimumCorrectAnswers": 2,
            "maxAttempts": 2,
            "questions": [
              {
                "id": "H-01-01-04",
                "question": "¿Qué información básica debe revisarse en una invitación de reunión?",
                "options": [
                  "Solo el color del evento",
                  "Fecha, hora, participantes, vínculo o ubicación y asunto",
                  "El número de archivos personales del organizador",
                  "La configuración del navegador"
                ],
                "correctAnswer": "Fecha, hora, participantes, vínculo o ubicación y asunto"
              },
              {
                "id": "H-01-01-05",
                "question": "Al crear una reunión en Teams, ¿qué debe cuidar el organizador?",
                "options": [
                  "Invitar a los asistentes correctos, revisar disponibilidad y definir si será remota o presencial",
                  "Enviar la reunión sin título",
                  "Compartir la contraseña institucional",
                  "Cerrar el calendario de Outlook"
                ],
                "correctAnswer": "Invitar a los asistentes correctos, revisar disponibilidad y definir si será remota o presencial"
              },
              {
                "id": "H-01-01-06",
                "question": "Antes de entrar a una reunión de Teams, ¿qué conviene revisar?",
                "options": [
                  "El fondo de pantalla del celular",
                  "Audio, micrófono, cámara y nombre con el que se ingresará",
                  "La papelera de reciclaje",
                  "El historial completo de chats"
                ],
                "correctAnswer": "Audio, micrófono, cámara y nombre con el que se ingresará"
              }
            ]
          }
        }
      },
      {
        "id": "bloque-3-paso-1",
        "number": 1,
        "title": "Archivos compartidos en chats y equipos",
        "shortDescription": "Acceder a documentos compartidos dentro de Teams sin perder el contexto de la conversación.",
        "block": 3,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Archivos y colaboración básica",
          "title": "Archivos compartidos en chats y equipos",
          "description": "Acceder a documentos compartidos dentro de Teams sin perder el contexto de la conversación.",
          "bullets": [],
          "didYouKnow": "Los archivos que compartes en un chat o canal se guardan en la nube (OneDrive o SharePoint), no en tu equipo, por lo que siguen disponibles aunque cambies de dispositivo.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-2",
        "number": 2,
        "title": "Consulta de documentos desde Teams",
        "shortDescription": "Visualizar documentos de Word, Excel o PowerPoint dentro de Teams sin tratarlos como cursos independientes.",
        "block": 3,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Archivos y colaboración básica",
          "title": "Consulta de documentos desde Teams",
          "description": "Visualizar documentos de Word, Excel o PowerPoint dentro de Teams sin tratarlos como cursos independientes.",
          "bullets": [],
          "didYouKnow": "Teams abre documentos de Word, Excel y PowerPoint dentro de la misma ventana, sin necesidad de descargarlos, lo que reduce las versiones duplicadas en tu computadora.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-3",
        "number": 3,
        "title": "Compartir archivos de forma segura",
        "shortDescription": "Compartir documentos cuidando destinatarios, contexto y pertinencia institucional.",
        "block": 3,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Archivos y colaboración básica",
          "title": "Compartir archivos de forma segura",
          "description": "Compartir documentos cuidando destinatarios, contexto y pertinencia institucional.",
          "bullets": [],
          "didYouKnow": "Al compartir un archivo puedes elegir si el destinatario solo puede verlo o también editarlo, controlando así quién modifica la información institucional.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-4",
        "number": 4,
        "title": "Colaboración simultánea en documentos",
        "shortDescription": "Reconocer cómo varias personas pueden revisar o editar un documento compartido desde Teams.",
        "block": 3,
        "type": "content",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Archivos y colaboración básica",
          "title": "Colaboración simultánea en documentos",
          "description": "Reconocer cómo varias personas pueden revisar o editar un documento compartido desde Teams.",
          "bullets": [],
          "didYouKnow": "Varias personas pueden editar el mismo documento al mismo tiempo desde Teams y ver los cambios en vivo, identificados con el nombre de cada quien.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-5",
        "number": 5,
        "title": "Buenas prácticas básicas de uso institucional",
        "shortDescription": "Aplicar criterios de orden, respeto, claridad y cuidado de la información al usar Teams.",
        "block": 3,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Archivos y colaboración básica",
          "title": "Buenas prácticas básicas de uso institucional",
          "description": "Aplicar criterios de orden, respeto, claridad y cuidado de la información al usar Teams.",
          "bullets": [],
          "didYouKnow": "Un mensaje claro, breve y con el contexto suficiente reduce las cadenas de respuestas y evita malentendidos en la comunicación institucional.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "evaluacion-final",
        "number": 6,
        "title": "Evaluación final",
        "shortDescription": "Evaluación final de la ruta.",
        "block": 3,
        "type": "evaluation",
        "estimatedTime": "10 min",
        "content": {
          "eyebrow": "Evaluación final",
          "title": "Evaluación final",
          "description": "Responde diez preguntas del banco de la herramienta y ruta.",
          "bullets": [
            "10 preguntas sin repetir.",
            "Aprobación mínima: 7 respuestas correctas.",
            "Máximo 2 intentos."
          ],
          "finalEvaluation": {
            "id": "teams-descubre-evaluacion-final",
            "type": "final",
            "title": "Evaluación final",
            "timeLimitMinutes": 10,
            "minimumCorrectAnswers": 7,
            "maxAttempts": 2,
            "questions": [
              {
                "id": "H-01-01-01",
                "question": "¿Cuál es el propósito principal de Teams dentro del TFJA?",
                "options": [
                  "Sustituir todos los sistemas institucionales",
                  "Centralizar comunicación, colaboración y acceso a información de trabajo",
                  "Guardar únicamente archivos personales",
                  "Crear documentos sin conexión a internet"
                ],
                "correctAnswer": "Centralizar comunicación, colaboración y acceso a información de trabajo"
              },
              {
                "id": "H-01-01-02",
                "question": "¿Qué permite la barra lateral de Teams?",
                "options": [
                  "Acceder a funciones como Actividad, Chat, Equipos, Calendario y Archivos",
                  "Modificar el sistema operativo del equipo",
                  "Eliminar reuniones de otros usuarios",
                  "Cambiar los permisos de red institucional"
                ],
                "correctAnswer": "Acceder a funciones como Actividad, Chat, Equipos, Calendario y Archivos"
              },
              {
                "id": "H-01-01-03",
                "question": "¿Para qué sirve consultar la tarjeta de contacto en Teams?",
                "options": [
                  "Para ver únicamente la fotografía de una persona",
                  "Para identificar datos como correo, cargo, área o medios de contacto disponibles",
                  "Para crear una contraseña nueva",
                  "Para descargar todos los archivos de un usuario"
                ],
                "correctAnswer": "Para identificar datos como correo, cargo, área o medios de contacto disponibles"
              },
              {
                "id": "H-01-01-04",
                "question": "¿Qué información básica debe revisarse en una invitación de reunión?",
                "options": [
                  "Solo el color del evento",
                  "Fecha, hora, participantes, vínculo o ubicación y asunto",
                  "El número de archivos personales del organizador",
                  "La configuración del navegador"
                ],
                "correctAnswer": "Fecha, hora, participantes, vínculo o ubicación y asunto"
              },
              {
                "id": "H-01-01-05",
                "question": "Al crear una reunión en Teams, ¿qué debe cuidar el organizador?",
                "options": [
                  "Invitar a los asistentes correctos, revisar disponibilidad y definir si será remota o presencial",
                  "Enviar la reunión sin título",
                  "Compartir la contraseña institucional",
                  "Cerrar el calendario de Outlook"
                ],
                "correctAnswer": "Invitar a los asistentes correctos, revisar disponibilidad y definir si será remota o presencial"
              },
              {
                "id": "H-01-01-06",
                "question": "Antes de entrar a una reunión de Teams, ¿qué conviene revisar?",
                "options": [
                  "El fondo de pantalla del celular",
                  "Audio, micrófono, cámara y nombre con el que se ingresará",
                  "La papelera de reciclaje",
                  "El historial completo de chats"
                ],
                "correctAnswer": "Audio, micrófono, cámara y nombre con el que se ingresará"
              },
              {
                "id": "H-01-01-07",
                "question": "Teams debe utilizarse institucionalmente para:",
                "options": [
                  "Centralizar comunicación y colaboración de trabajo",
                  "Enviar cadenas informales sin contexto",
                  "Reemplazar el correo en todos los casos",
                  "Modificar expedientes sin autorización"
                ],
                "correctAnswer": "Centralizar comunicación y colaboración de trabajo"
              },
              {
                "id": "H-01-01-08",
                "question": "¿Qué acción ayuda a moverse con mayor seguridad en Teams?",
                "options": [
                  "Reconocer las áreas principales de navegación",
                  "Usar solo enlaces externos",
                  "Ignorar las notificaciones",
                  "Cerrar sesión en cada cambio de pantalla"
                ],
                "correctAnswer": "Reconocer las áreas principales de navegación"
              },
              {
                "id": "H-01-01-09",
                "question": "La búsqueda de personas en Teams ayuda a:",
                "options": [
                  "Localizar datos de contacto institucionales",
                  "Cambiar el cargo de una persona",
                  "Eliminar contactos del directorio",
                  "Consultar archivos privados sin permiso"
                ],
                "correctAnswer": "Localizar datos de contacto institucionales"
              },
              {
                "id": "H-01-01-10",
                "question": "Desde una tarjeta de contacto se puede iniciar principalmente:",
                "options": [
                  "Un chat institucional con la persona",
                  "Un respaldo del sistema",
                  "Una evaluación de desempeño",
                  "Una instalación de software"
                ],
                "correctAnswer": "Un chat institucional con la persona"
              },
              {
                "id": "H-01-01-11",
                "question": "¿Qué indica el estado de presencia en Teams?",
                "options": [
                  "La disponibilidad aproximada de una persona",
                  "La contraseña de acceso",
                  "El nivel jerárquico obligatorio",
                  "La antigüedad laboral exacta"
                ],
                "correctAnswer": "La disponibilidad aproximada de una persona"
              },
              {
                "id": "H-01-01-12",
                "question": "Una buena práctica al enviar mensajes por Teams es:",
                "options": [
                  "Ser claro, breve y aportar contexto suficiente",
                  "Escribir todo en mayúsculas",
                  "Enviar el mismo mensaje repetidamente",
                  "Usar canales sin relación con el tema"
                ],
                "correctAnswer": "Ser claro, breve y aportar contexto suficiente"
              },
              {
                "id": "H-01-01-13",
                "question": "El calendario de Teams resulta útil porque permite:",
                "options": [
                  "Consultar reuniones programadas y unirse desde el evento",
                  "Modificar nóminas institucionales",
                  "Cambiar contraseñas de usuarios",
                  "Ver únicamente días festivos"
                ],
                "correctAnswer": "Consultar reuniones programadas y unirse desde el evento"
              },
              {
                "id": "H-01-01-14",
                "question": "¿Cuál es un dato indispensable al programar una reunión?",
                "options": [
                  "Objetivo o asunto claro de la reunión",
                  "El color favorito del organizador",
                  "El número de serie del equipo",
                  "La lista de archivos personales"
                ],
                "correctAnswer": "Objetivo o asunto claro de la reunión"
              },
              {
                "id": "H-01-01-15",
                "question": "Ingresar con micrófono apagado cuando no se habla ayuda a:",
                "options": [
                  "Reducir ruido e interrupciones",
                  "Bloquear la reunión",
                  "Eliminar la grabación",
                  "Cambiar el organizador"
                ],
                "correctAnswer": "Reducir ruido e interrupciones"
              },
              {
                "id": "H-01-01-16",
                "question": "¿Para qué sirve la función Levantar la mano?",
                "options": [
                  "Para solicitar la palabra de forma ordenada",
                  "Para cerrar la sesión de todos",
                  "Para modificar el calendario",
                  "Para ocultar asistentes"
                ],
                "correctAnswer": "Para solicitar la palabra de forma ordenada"
              },
              {
                "id": "H-01-01-17",
                "question": "El chat de reunión debe usarse para:",
                "options": [
                  "Aportar mensajes o enlaces relacionados con la sesión",
                  "Enviar información ajena al tema",
                  "Sustituir el acta oficial siempre",
                  "Compartir contraseñas personales"
                ],
                "correctAnswer": "Aportar mensajes o enlaces relacionados con la sesión"
              },
              {
                "id": "H-01-01-18",
                "question": "Las grabaciones y transcripciones deben consultarse:",
                "options": [
                  "Solo cuando estén habilitadas y disponibles para la reunión",
                  "Sin autorización y desde cualquier cuenta",
                  "Aunque no exista reunión",
                  "Para modificar permisos de otros usuarios"
                ],
                "correctAnswer": "Solo cuando estén habilitadas y disponibles para la reunión"
              },
              {
                "id": "H-01-01-19",
                "question": "Los archivos compartidos en Teams suelen almacenarse:",
                "options": [
                  "En servicios de nube asociados como OneDrive o SharePoint",
                  "Únicamente en el escritorio local",
                  "En la papelera de Windows",
                  "En una carpeta sin permisos"
                ],
                "correctAnswer": "En servicios de nube asociados como OneDrive o SharePoint"
              },
              {
                "id": "H-01-01-20",
                "question": "Consultar documentos desde Teams permite:",
                "options": [
                  "Revisarlos sin descargarlos necesariamente al equipo",
                  "Convertirlos siempre en PDF",
                  "Eliminar el historial de versiones",
                  "Cambiar su autor automáticamente"
                ],
                "correctAnswer": "Revisarlos sin descargarlos necesariamente al equipo"
              },
              {
                "id": "H-01-01-21",
                "question": "Al compartir un archivo es importante definir:",
                "options": [
                  "Destinatarios y permisos de acceso",
                  "El color del icono del archivo",
                  "La marca del equipo",
                  "El tamaño del monitor"
                ],
                "correctAnswer": "Destinatarios y permisos de acceso"
              },
              {
                "id": "H-01-01-22",
                "question": "La colaboración simultánea permite que varias personas:",
                "options": [
                  "Editen o revisen un documento compartido al mismo tiempo",
                  "Usen la misma contraseña",
                  "Eliminen el archivo original",
                  "Desactiven el correo institucional"
                ],
                "correctAnswer": "Editen o revisen un documento compartido al mismo tiempo"
              },
              {
                "id": "H-01-01-23",
                "question": "Una buena práctica al manejar archivos en Teams es:",
                "options": [
                  "Mantener nombres claros y compartir solo con quien corresponda",
                  "Subir duplicados sin control",
                  "Guardar todo sin carpetas",
                  "Compartir documentos sensibles públicamente"
                ],
                "correctAnswer": "Mantener nombres claros y compartir solo con quien corresponda"
              },
              {
                "id": "H-01-01-24",
                "question": "¿Qué riesgo se reduce al trabajar con vínculos en lugar de muchas copias adjuntas?",
                "options": [
                  "La existencia de versiones duplicadas o desactualizadas",
                  "La necesidad de leer el documento",
                  "La posibilidad de nombrar archivos",
                  "La sincronización del calendario"
                ],
                "correctAnswer": "La existencia de versiones duplicadas o desactualizadas"
              },
              {
                "id": "H-01-01-25",
                "question": "Cuando Teams abre un documento dentro de la aplicación, el usuario puede:",
                "options": [
                  "Visualizarlo sin salir del contexto de trabajo",
                  "Cambiar su extensión a sistema",
                  "Eliminar todas las versiones anteriores",
                  "Desactivar las reuniones"
                ],
                "correctAnswer": "Visualizarlo sin salir del contexto de trabajo"
              },
              {
                "id": "H-01-01-26",
                "question": "¿Qué permiso conviene usar si solo se requiere consulta?",
                "options": [
                  "Solo lectura",
                  "Edición total",
                  "Propietario del sitio",
                  "Administrador global"
                ],
                "correctAnswer": "Solo lectura"
              },
              {
                "id": "H-01-01-27",
                "question": "La edición simultánea requiere que el archivo esté:",
                "options": [
                  "Compartido en la nube con permisos adecuados",
                  "Oculto en una carpeta local sin acceso",
                  "Impreso en papel",
                  "Comprimido con contraseña desconocida"
                ],
                "correctAnswer": "Compartido en la nube con permisos adecuados"
              },
              {
                "id": "H-01-01-28",
                "question": "Para evitar confusiones en un canal, conviene:",
                "options": [
                  "Responder dentro del hilo correspondiente cuando aplique",
                  "Abrir un tema nuevo por cada respuesta",
                  "Eliminar el asunto del mensaje",
                  "Usar títulos ajenos al contenido"
                ],
                "correctAnswer": "Responder dentro del hilo correspondiente cuando aplique"
              },
              {
                "id": "H-01-01-29",
                "question": "Antes de compartir un documento institucional se debe verificar:",
                "options": [
                  "Que el destinatario sea correcto y que el permiso sea pertinente",
                  "Que el archivo tenga un nombre informal",
                  "Que no exista asunto del mensaje",
                  "Que el chat esté silenciado"
                ],
                "correctAnswer": "Que el destinatario sea correcto y que el permiso sea pertinente"
              },
              {
                "id": "H-01-01-30",
                "question": "El uso adecuado de Teams contribuye a:",
                "options": [
                  "Un trabajo más ordenado, claro y colaborativo",
                  "Duplicar documentos sin seguimiento",
                  "Evitar toda comunicación escrita",
                  "Eliminar controles institucionales"
                ],
                "correctAnswer": "Un trabajo más ordenado, claro y colaborativo"
              }
            ],
            "questionCount": 10
          }
        }
      }
    ]
  },
  "teams-potencia": {
    "toolId": "teams",
    "toolName": "Teams",
    "levelId": "potencia",
    "levelName": "Potencia",
    "routeId": "teams-potencia",
    "steps": [
      {
        "id": "bloque-1-paso-1",
        "number": 1,
        "title": "Diferencia entre chat, equipo y canal",
        "shortDescription": "Distinguir cuándo conviene usar chat, equipo o canal según el tipo de comunicación o colaboración institucional.",
        "block": 1,
        "type": "welcome",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Organización del trabajo en equipos y canales",
          "title": "Diferencia entre chat, equipo y canal",
          "description": "Distinguir cuándo conviene usar chat, equipo o canal según el tipo de comunicación o colaboración institucional.",
          "bullets": [],
          "didYouKnow": "Un chat es para conversaciones informales o entre pocas personas; un equipo agrupa a un área, y sus canales organizan los temas o proyectos de ese equipo.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-2",
        "number": 2,
        "title": "Canales para organizar asuntos de trabajo",
        "shortDescription": "Utilizar canales para ordenar conversaciones, documentos y seguimiento de temas por área, proyecto o proceso.",
        "block": 1,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Organización del trabajo en equipos y canales",
          "title": "Canales para organizar asuntos de trabajo",
          "description": "Utilizar canales para ordenar conversaciones, documentos y seguimiento de temas por área, proyecto o proceso.",
          "bullets": [],
          "didYouKnow": "Cada canal tiene su propio espacio de conversaciones y de archivos, lo que permite separar la información por proyecto o proceso sin mezclarla.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-3",
        "number": 3,
        "title": "Publicaciones y respuestas en canales",
        "shortDescription": "Publicar mensajes en canales de forma ordenada, usando títulos, respuestas en hilo y contexto suficiente.",
        "block": 1,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Organización del trabajo en equipos y canales",
          "title": "Publicaciones y respuestas en canales",
          "description": "Publicar mensajes en canales de forma ordenada, usando títulos, respuestas en hilo y contexto suficiente.",
          "bullets": [],
          "didYouKnow": "Responder dentro del hilo (y no con un mensaje nuevo) mantiene juntas todas las respuestas de un mismo tema y facilita su seguimiento posterior.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-4",
        "number": 4,
        "title": "Menciones, etiquetas y avisos dirigidos",
        "shortDescription": "Usar menciones de forma estratégica para llamar la atención de personas o grupos sin saturar la comunicación.",
        "block": 1,
        "type": "content",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Organización del trabajo en equipos y canales",
          "title": "Menciones, etiquetas y avisos dirigidos",
          "description": "Usar menciones de forma estratégica para llamar la atención de personas o grupos sin saturar la comunicación.",
          "bullets": [],
          "didYouKnow": "Puedes crear etiquetas para mencionar a un grupo completo con una sola palabra (por ejemplo @Secretarios), en lugar de escribir a cada persona por separado.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-5",
        "number": 5,
        "title": "Gestión documental dentro de canales",
        "shortDescription": "Organizar archivos compartidos en canales para facilitar consulta, colaboración y seguimiento.",
        "block": 1,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Organización del trabajo en equipos y canales",
          "title": "Gestión documental dentro de canales",
          "description": "Organizar archivos compartidos en canales para facilitar consulta, colaboración y seguimiento.",
          "bullets": [],
          "didYouKnow": "La pestaña Archivos de un canal es en realidad una biblioteca de SharePoint, por lo que admite carpetas, control de versiones y permisos como cualquier repositorio institucional.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "evaluacion-1",
        "number": 6,
        "title": "Evaluación 1",
        "shortDescription": "Checkpoint obligatorio del Bloque 1.",
        "block": 1,
        "type": "evaluation",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Evaluación Bloque 1",
          "title": "Evaluación 1",
          "description": "Responde las tres preguntas clave para desbloquear el siguiente bloque.",
        
          "checkpointEvaluation": {
            "id": "teams-potencia-evaluacion-1",
            "type": "checkpoint-1",
            "title": "Evaluación 1",
            "minimumCorrectAnswers": 2,
            "maxAttempts": 2,
            "questions": [
              {
                "id": "H-01-02-01",
                "question": "¿Cuándo conviene usar un canal en Teams?",
                "options": [
                  "Cuando el tema corresponde a un proyecto o proceso que debe quedar organizado para un equipo",
                  "Cuando se quiere enviar un mensaje aislado sin seguimiento",
                  "Cuando se requiere apagar notificaciones de todo Teams",
                  "Cuando se desea borrar archivos institucionales"
                ],
                "correctAnswer": "Cuando el tema corresponde a un proyecto o proceso que debe quedar organizado para un equipo"
              },
              {
                "id": "H-01-02-02",
                "question": "¿Por qué es recomendable responder dentro del hilo correcto?",
                "options": [
                  "Porque mantiene juntas las respuestas de un mismo tema",
                  "Porque elimina la necesidad de asunto",
                  "Porque bloquea a otros participantes",
                  "Porque cambia automáticamente los permisos"
                ],
                "correctAnswer": "Porque mantiene juntas las respuestas de un mismo tema"
              },
              {
                "id": "H-01-02-03",
                "question": "¿Qué ventaja tiene organizar archivos dentro de canales?",
                "options": [
                  "Facilita consulta, colaboración y seguimiento por tema",
                  "Impide que otros vean las conversaciones",
                  "Sustituye todas las aprobaciones",
                  "Borra versiones anteriores siempre"
                ],
                "correctAnswer": "Facilita consulta, colaboración y seguimiento por tema"
              }
            ]
          }
        }
      },
      {
        "id": "bloque-2-paso-1",
        "number": 1,
        "title": "Campanita de actividad y notificaciones relevantes",
        "shortDescription": "Usar la sección de Actividad para revisar menciones, respuestas, avisos, reuniones y movimientos importantes.",
        "block": 2,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Notificaciones y aprobaciones institucionales",
          "title": "Campanita de actividad y notificaciones relevantes",
          "description": "Usar la sección de Actividad para revisar menciones, respuestas, avisos, reuniones y movimientos importantes.",
          "bullets": [],
          "didYouKnow": "La sección Actividad reúne en un solo lugar tus menciones, respuestas y avisos, de modo que puedes ponerte al día sin revisar chat por chat.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-2",
        "number": 2,
        "title": "Configuración y priorización de notificaciones",
        "shortDescription": "Ajustar o interpretar notificaciones para no perder avisos relevantes y reducir distracciones.",
        "block": 2,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Notificaciones y aprobaciones institucionales",
          "title": "Configuración y priorización de notificaciones",
          "description": "Ajustar o interpretar notificaciones para no perder avisos relevantes y reducir distracciones.",
          "bullets": [],
          "didYouKnow": "Puedes silenciar un chat o canal específico sin desconectarte de Teams: dejas de recibir alertas, pero conservas el acceso a la información cuando la necesites.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-3",
        "number": 3,
        "title": "Aprobaciones recibidas desde flujos institucionales",
        "shortDescription": "Reconocer aprobaciones generadas por flujos de Power Automate y revisadas desde Teams.",
        "block": 2,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Notificaciones y aprobaciones institucionales",
          "title": "Aprobaciones recibidas desde flujos institucionales",
          "description": "Reconocer aprobaciones generadas por flujos de Power Automate y revisadas desde Teams.",
          "bullets": [],
          "didYouKnow": "El módulo Aprobaciones puede conectarse con flujos de Power Automate, lo que permite atender solicitudes institucionales sin salir de Teams.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-4",
        "number": 4,
        "title": "Aprobar, rechazar o responder una solicitud",
        "shortDescription": "Atender una aprobación desde Teams con criterio institucional, verificando información antes de decidir.",
        "block": 2,
        "type": "content",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Notificaciones y aprobaciones institucionales",
          "title": "Aprobar, rechazar o responder una solicitud",
          "description": "Atender una aprobación desde Teams con criterio institucional, verificando información antes de decidir.",
          "bullets": [],
          "didYouKnow": "Cada aprobación deja registrado quién decidió, cuándo y con qué comentario, lo que aporta trazabilidad a los trámites internos.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-5",
        "number": 5,
        "title": "Seguimiento de aprobaciones y trazabilidad",
        "shortDescription": "Consultar aprobaciones enviadas, recibidas o pendientes para dar seguimiento a solicitudes institucionales.",
        "block": 2,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Notificaciones y aprobaciones institucionales",
          "title": "Seguimiento de aprobaciones y trazabilidad",
          "description": "Consultar aprobaciones enviadas, recibidas o pendientes para dar seguimiento a solicitudes institucionales.",
          "bullets": [],
          "didYouKnow": "Desde Aprobaciones puedes consultar en pestañas separadas las solicitudes recibidas, enviadas y pendientes, para dar seguimiento puntual a cada una.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "evaluacion-2",
        "number": 6,
        "title": "Evaluación 2",
        "shortDescription": "Checkpoint obligatorio del Bloque 2.",
        "block": 2,
        "type": "evaluation",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Evaluación Bloque 2",
          "title": "Evaluación 2",
          "description": "Responde las tres preguntas clave para desbloquear el siguiente bloque.",
         
          "checkpointEvaluation": {
            "id": "teams-potencia-evaluacion-2",
            "type": "checkpoint-2",
            "title": "Evaluación 2",
            "minimumCorrectAnswers": 2,
            "maxAttempts": 2,
            "questions": [
              {
                "id": "H-01-02-04",
                "question": "¿Para qué sirve la sección Actividad en Teams?",
                "options": [
                  "Para revisar menciones, respuestas, avisos y movimientos relevantes",
                  "Para crear contraseñas temporales",
                  "Para instalar sistemas externos",
                  "Para cambiar la estructura orgánica"
                ],
                "correctAnswer": "Para revisar menciones, respuestas, avisos y movimientos relevantes"
              },
              {
                "id": "H-01-02-05",
                "question": "Una aprobación recibida desde un flujo institucional debe atenderse:",
                "options": [
                  "Verificando la información antes de aprobar o rechazar",
                  "Aceptándola siempre de forma automática",
                  "Reenviándola sin revisar",
                  "Eliminando el historial de solicitud"
                ],
                "correctAnswer": "Verificando la información antes de aprobar o rechazar"
              },
              {
                "id": "H-01-02-06",
                "question": "La trazabilidad de una aprobación permite conocer:",
                "options": [
                  "Estado, responsable, decisión y seguimiento de la solicitud",
                  "La contraseña del solicitante",
                  "El salario de los asistentes",
                  "El contenido de todos los chats privados"
                ],
                "correctAnswer": "Estado, responsable, decisión y seguimiento de la solicitud"
              }
            ]
          }
        }
      },
      {
        "id": "bloque-3-paso-1",
        "number": 1,
        "title": "Planeación de reuniones efectivas",
        "shortDescription": "Programar reuniones con objetivo, participantes, horario, agenda y documentos de apoyo.",
        "block": 3,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Reuniones efectivas, acuerdos y tareas",
          "title": "Planeación de reuniones efectivas",
          "description": "Programar reuniones con objetivo, participantes, horario, agenda y documentos de apoyo.",
          "bullets": [],
          "didYouKnow": "Al programar una reunión puedes adjuntar la agenda y los documentos de apoyo en la propia invitación, de modo que todas las personas lleguen preparadas.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-2",
        "number": 2,
        "title": "Uso avanzado durante reuniones",
        "shortDescription": "Usar funciones de reunión para coordinar mejor: compartir pantalla, chat, grabación, transcripción y control de participación.",
        "block": 3,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Reuniones efectivas, acuerdos y tareas",
          "title": "Uso avanzado durante reuniones",
          "description": "Usar funciones de reunión para coordinar mejor: compartir pantalla, chat, grabación, transcripción y control de participación.",
          "bullets": [],
          "didYouKnow": "Las Opciones de reunión permiten definir quién puede presentar o saltarse la sala de espera, algo útil para sesiones formales o con personas externas.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-3",
        "number": 3,
        "title": "Seguimiento de acuerdos posteriores a la reunión",
        "shortDescription": "Organizar acuerdos, responsables y fechas compromiso después de una reunión.",
        "block": 3,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Reuniones efectivas, acuerdos y tareas",
          "title": "Seguimiento de acuerdos posteriores a la reunión",
          "description": "Organizar acuerdos, responsables y fechas compromiso después de una reunión.",
          "bullets": [],
          "didYouKnow": "Las Notas de la reunión quedan ligadas al evento, por lo que los acuerdos registrados ahí se pueden consultar antes, durante y después de la sesión.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-4",
        "number": 4,
        "title": "Tareas integradas con Planner/Tasks en Teams",
        "shortDescription": "Crear y dar seguimiento a tareas desde Teams para organizar actividades, responsables y fechas.",
        "block": 3,
        "type": "content",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Reuniones efectivas, acuerdos y tareas",
          "title": "Tareas integradas con Planner/Tasks en Teams",
          "description": "Crear y dar seguimiento a tareas desde Teams para organizar actividades, responsables y fechas.",
          "bullets": [],
          "didYouKnow": "Tasks por Planner agrupa en una sola vista las tareas asignadas en todos tus equipos, ayudándote a no perder de vista los pendientes.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-5",
        "number": 5,
        "title": "Productividad institucional con Teams",
        "shortDescription": "Integrar canales, archivos, reuniones, aprobaciones y tareas para dar seguimiento ordenado al trabajo.",
        "block": 3,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Reuniones efectivas, acuerdos y tareas",
          "title": "Productividad institucional con Teams",
          "description": "Integrar canales, archivos, reuniones, aprobaciones y tareas para dar seguimiento ordenado al trabajo.",
          "bullets": [],
          "didYouKnow": "Integrar canales, archivos, reuniones, aprobaciones y tareas en Teams reduce el salto entre aplicaciones y concentra la trazabilidad del trabajo en un solo lugar.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "evaluacion-final",
        "number": 6,
        "title": "Evaluación final",
        "shortDescription": "Evaluación final de la ruta.",
        "block": 3,
        "type": "evaluation",
        "estimatedTime": "10 min",
        "content": {
          "eyebrow": "Evaluación final",
          "title": "Evaluación final",
          "description": "Responde diez preguntas del banco de la herramienta y ruta.",
          "bullets": [
            "10 preguntas sin repetir.",
            "Aprobación mínima: 7 respuestas correctas.",
            "Máximo 2 intentos."
          ],
          "finalEvaluation": {
            "id": "teams-potencia-evaluacion-final",
            "type": "final",
            "title": "Evaluación final",
            "timeLimitMinutes": 10,
            "minimumCorrectAnswers": 7,
            "maxAttempts": 2,
            "questions": [
              {
                "id": "H-01-02-01",
                "question": "¿Cuándo conviene usar un canal en Teams?",
                "options": [
                  "Cuando el tema corresponde a un proyecto o proceso que debe quedar organizado para un equipo",
                  "Cuando se quiere enviar un mensaje aislado sin seguimiento",
                  "Cuando se requiere apagar notificaciones de todo Teams",
                  "Cuando se desea borrar archivos institucionales"
                ],
                "correctAnswer": "Cuando el tema corresponde a un proyecto o proceso que debe quedar organizado para un equipo"
              },
              {
                "id": "H-01-02-02",
                "question": "¿Por qué es recomendable responder dentro del hilo correcto?",
                "options": [
                  "Porque mantiene juntas las respuestas de un mismo tema",
                  "Porque elimina la necesidad de asunto",
                  "Porque bloquea a otros participantes",
                  "Porque cambia automáticamente los permisos"
                ],
                "correctAnswer": "Porque mantiene juntas las respuestas de un mismo tema"
              },
              {
                "id": "H-01-02-03",
                "question": "¿Qué ventaja tiene organizar archivos dentro de canales?",
                "options": [
                  "Facilita consulta, colaboración y seguimiento por tema",
                  "Impide que otros vean las conversaciones",
                  "Sustituye todas las aprobaciones",
                  "Borra versiones anteriores siempre"
                ],
                "correctAnswer": "Facilita consulta, colaboración y seguimiento por tema"
              },
              {
                "id": "H-01-02-04",
                "question": "¿Para qué sirve la sección Actividad en Teams?",
                "options": [
                  "Para revisar menciones, respuestas, avisos y movimientos relevantes",
                  "Para crear contraseñas temporales",
                  "Para instalar sistemas externos",
                  "Para cambiar la estructura orgánica"
                ],
                "correctAnswer": "Para revisar menciones, respuestas, avisos y movimientos relevantes"
              },
              {
                "id": "H-01-02-05",
                "question": "Una aprobación recibida desde un flujo institucional debe atenderse:",
                "options": [
                  "Verificando la información antes de aprobar o rechazar",
                  "Aceptándola siempre de forma automática",
                  "Reenviándola sin revisar",
                  "Eliminando el historial de solicitud"
                ],
                "correctAnswer": "Verificando la información antes de aprobar o rechazar"
              },
              {
                "id": "H-01-02-06",
                "question": "La trazabilidad de una aprobación permite conocer:",
                "options": [
                  "Estado, responsable, decisión y seguimiento de la solicitud",
                  "La contraseña del solicitante",
                  "El salario de los asistentes",
                  "El contenido de todos los chats privados"
                ],
                "correctAnswer": "Estado, responsable, decisión y seguimiento de la solicitud"
              },
              {
                "id": "H-01-02-07",
                "question": "El chat es más adecuado para:",
                "options": [
                  "Conversaciones directas o de pocas personas",
                  "Organizar todo un proceso permanente",
                  "Crear una biblioteca documental formal",
                  "Sustituir una ruta de aprendizaje"
                ],
                "correctAnswer": "Conversaciones directas o de pocas personas"
              },
              {
                "id": "H-01-02-08",
                "question": "Los canales ayudan a separar información por:",
                "options": [
                  "Tema, área, proyecto o proceso",
                  "Tamaño del monitor",
                  "Color de la aplicación",
                  "Tipo de teclado"
                ],
                "correctAnswer": "Tema, área, proyecto o proceso"
              },
              {
                "id": "H-01-02-09",
                "question": "Una publicación clara en un canal debe incluir:",
                "options": [
                  "Contexto suficiente y, cuando aplique, título descriptivo",
                  "Solo emojis",
                  "Mensajes repetidos",
                  "Archivos sin explicación"
                ],
                "correctAnswer": "Contexto suficiente y, cuando aplique, título descriptivo"
              },
              {
                "id": "H-01-02-10",
                "question": "Las menciones deben usarse de forma estratégica para:",
                "options": [
                  "Llamar la atención de personas o grupos relevantes sin saturar",
                  "Notificar a toda la institución en cada mensaje",
                  "Evitar que alguien responda",
                  "Borrar publicaciones anteriores"
                ],
                "correctAnswer": "Llamar la atención de personas o grupos relevantes sin saturar"
              },
              {
                "id": "H-01-02-11",
                "question": "Un archivo de canal debe guardarse de manera que:",
                "options": [
                  "Sea fácil de localizar y esté relacionado con el tema del canal",
                  "Quede duplicado en varias carpetas sin control",
                  "No tenga nombre descriptivo",
                  "Solo exista en el equipo local"
                ],
                "correctAnswer": "Sea fácil de localizar y esté relacionado con el tema del canal"
              },
              {
                "id": "H-01-02-12",
                "question": "¿Qué práctica evita mezclar asuntos distintos dentro de Teams?",
                "options": [
                  "Usar canales o hilos según el tema de trabajo",
                  "Responder siempre en chats individuales",
                  "Cambiar de nombre los archivos cada día",
                  "Enviar todo como mensaje urgente"
                ],
                "correctAnswer": "Usar canales o hilos según el tema de trabajo"
              },
              {
                "id": "H-01-02-13",
                "question": "La campanita de actividad permite identificar:",
                "options": [
                  "Avisos y menciones que requieren revisión",
                  "El historial de impresión",
                  "La velocidad de internet",
                  "El calendario de vacaciones de todos"
                ],
                "correctAnswer": "Avisos y menciones que requieren revisión"
              },
              {
                "id": "H-01-02-14",
                "question": "Priorizar notificaciones ayuda a:",
                "options": [
                  "Reducir distracciones sin perder avisos importantes",
                  "Desactivar todos los sistemas institucionales",
                  "Eliminar reuniones futuras",
                  "Bloquear mensajes de superiores"
                ],
                "correctAnswer": "Reducir distracciones sin perder avisos importantes"
              },
              {
                "id": "H-01-02-15",
                "question": "Las aprobaciones en Teams pueden estar vinculadas a:",
                "options": [
                  "Flujos de trabajo institucionales",
                  "Juegos instalados",
                  "Contactos personales externos",
                  "Fondos de pantalla"
                ],
                "correctAnswer": "Flujos de trabajo institucionales"
              },
              {
                "id": "H-01-02-16",
                "question": "Antes de decidir sobre una aprobación, se debe:",
                "options": [
                  "Revisar el contenido y la pertinencia de la solicitud",
                  "Aceptar para ahorrar tiempo",
                  "Pedir la contraseña del solicitante",
                  "Eliminar comentarios previos"
                ],
                "correctAnswer": "Revisar el contenido y la pertinencia de la solicitud"
              },
              {
                "id": "H-01-02-17",
                "question": "Dar seguimiento a una aprobación permite:",
                "options": [
                  "Conocer si está pendiente, enviada, recibida o resuelta",
                  "Convertirla en reunión automáticamente",
                  "Cambiar el área de adscripción",
                  "Ocultar todos los comentarios"
                ],
                "correctAnswer": "Conocer si está pendiente, enviada, recibida o resuelta"
              },
              {
                "id": "H-01-02-18",
                "question": "Silenciar un chat o canal específico puede ser útil para:",
                "options": [
                  "Reducir ruido sin dejar de usar Teams",
                  "Eliminar todos sus archivos",
                  "Desactivar la cuenta institucional",
                  "Cancelar reuniones de otros usuarios"
                ],
                "correctAnswer": "Reducir ruido sin dejar de usar Teams"
              },
              {
                "id": "H-01-02-19",
                "question": "Una reunión efectiva debe programarse con:",
                "options": [
                  "Objetivo, participantes, horario, agenda y documentos de apoyo",
                  "Solo un título genérico",
                  "Todos los usuarios de la institución",
                  "Archivos sin relación con el tema"
                ],
                "correctAnswer": "Objetivo, participantes, horario, agenda y documentos de apoyo"
              },
              {
                "id": "H-01-02-20",
                "question": "Las opciones de reunión ayudan a definir:",
                "options": [
                  "Quién puede presentar o participar de ciertas formas",
                  "Quién puede ver la nómina",
                  "Qué navegador debe usarse siempre",
                  "Qué archivos serán eliminados"
                ],
                "correctAnswer": "Quién puede presentar o participar de ciertas formas"
              },
              {
                "id": "H-01-02-21",
                "question": "Después de una reunión, los acuerdos deben quedar con:",
                "options": [
                  "Responsables y fechas compromiso",
                  "Solo comentarios informales",
                  "Mensajes sin asunto",
                  "Archivos duplicados"
                ],
                "correctAnswer": "Responsables y fechas compromiso"
              },
              {
                "id": "H-01-02-22",
                "question": "Tasks o Planner en Teams permite:",
                "options": [
                  "Crear y dar seguimiento a tareas con responsables y fechas",
                  "Modificar permisos de red",
                  "Reemplazar el correo institucional completo",
                  "Eliminar el calendario"
                ],
                "correctAnswer": "Crear y dar seguimiento a tareas con responsables y fechas"
              },
              {
                "id": "H-01-02-23",
                "question": "Integrar canales, archivos, reuniones y tareas permite:",
                "options": [
                  "Dar seguimiento ordenado al trabajo institucional",
                  "Ocultar información relevante",
                  "Duplicar esfuerzos sin control",
                  "Trabajar sin responsables"
                ],
                "correctAnswer": "Dar seguimiento ordenado al trabajo institucional"
              },
              {
                "id": "H-01-02-24",
                "question": "¿Qué debe evitarse al convocar una reunión?",
                "options": [
                  "Invitar personas sin relación con el objetivo",
                  "Incluir agenda",
                  "Adjuntar documentos de apoyo",
                  "Definir horario claro"
                ],
                "correctAnswer": "Invitar personas sin relación con el objetivo"
              },
              {
                "id": "H-01-02-25",
                "question": "Compartir pantalla debe hacerse:",
                "options": [
                  "Solo cuando aporte al objetivo de la reunión y cuidando la información visible",
                  "Siempre con información personal abierta",
                  "Sin avisar al grupo",
                  "Para mostrar documentos ajenos al tema"
                ],
                "correctAnswer": "Solo cuando aporte al objetivo de la reunión y cuidando la información visible"
              },
              {
                "id": "H-01-02-26",
                "question": "El seguimiento posterior evita que los acuerdos:",
                "options": [
                  "Queden sin responsable o fecha definida",
                  "Se integren a tareas",
                  "Sean consultables por el equipo",
                  "Tengan contexto"
                ],
                "correctAnswer": "Queden sin responsable o fecha definida"
              },
              {
                "id": "H-01-02-27",
                "question": "Una tarea bien registrada debe incluir al menos:",
                "options": [
                  "Actividad, responsable y fecha de vencimiento",
                  "Solo un emoji",
                  "Una contraseña",
                  "Un archivo vacío"
                ],
                "correctAnswer": "Actividad, responsable y fecha de vencimiento"
              },
              {
                "id": "H-01-02-28",
                "question": "Teams aporta más valor cuando se usa para:",
                "options": [
                  "Conectar conversaciones, archivos, acuerdos y seguimiento",
                  "Enviar mensajes aislados sin orden",
                  "Guardar duplicados sin permisos",
                  "Evitar toda documentación"
                ],
                "correctAnswer": "Conectar conversaciones, archivos, acuerdos y seguimiento"
              },
              {
                "id": "H-01-02-29",
                "question": "La agenda previa de una reunión ayuda a:",
                "options": [
                  "Alinear expectativas y preparar la participación",
                  "Cambiar permisos de OneDrive",
                  "Eliminar la lista de asistentes",
                  "Hacer innecesario el objetivo"
                ],
                "correctAnswer": "Alinear expectativas y preparar la participación"
              },
              {
                "id": "H-01-02-30",
                "question": "Una señal de uso productivo de Teams es:",
                "options": [
                  "Que los asuntos tengan contexto, archivos relacionados y seguimiento",
                  "Que existan múltiples copias contradictorias",
                  "Que nadie sepa dónde está la información",
                  "Que todas las notificaciones estén apagadas"
                ],
                "correctAnswer": "Que los asuntos tengan contexto, archivos relacionados y seguimiento"
              }
            ],
            "questionCount": 10
          }
        }
      }
    ]
  },
  "word-descubre": {
    "toolId": "word",
    "toolName": "Word",
    "levelId": "descubre",
    "levelName": "Descubre",
    "routeId": "word-descubre",
    "steps": [
      {
        "id": "bloque-1-paso-1",
        "number": 1,
        "title": "Word en el TFJA",
        "shortDescription": "Reconocer Word como herramienta institucional para elaborar, revisar y compartir documentos de trabajo del Tribunal.",
        "block": 1,
        "type": "welcome",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Introducción a Microsoft Word en el TFJA",
          "title": "Word en el TFJA",
          "description": "Reconocer Word como herramienta institucional para elaborar, revisar y compartir documentos de trabajo del Tribunal.",
          "bullets": [],
          "didYouKnow": "Word permite estructurar documentos, aplicar formato, revisar cambios, colaborar y preparar archivos para impresión o PDF.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-2",
        "number": 2,
        "title": "Versiones web y escritorio",
        "shortDescription": "Distinguir las principales diferencias entre Word para la Web y Word de escritorio, identificando cuándo conviene usar cada versión.",
        "block": 1,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Introducción a Microsoft Word en el TFJA",
          "title": "Versiones web y escritorio",
          "description": "Distinguir las principales diferencias entre Word para la Web y Word de escritorio, identificando cuándo conviene usar cada versión.",
          "bullets": [],
          "didYouKnow": "Word para la Web facilita la colaboración y el acceso desde el navegador; Word de escritorio ofrece más herramientas avanzadas de edición, diseño, revisión e impresión.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-3",
        "number": 3,
        "title": "Interfaz, cinta de opciones y navegación básica",
        "shortDescription": "Ubicar la barra de título, barra de acceso rápido, cinta de opciones, pestañas, grupos de comandos, barra de estado, vistas y zoom.",
        "block": 1,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Introducción a Microsoft Word en el TFJA",
          "title": "Interfaz, cinta de opciones y navegación básica",
          "description": "Ubicar la barra de título, barra de acceso rápido, cinta de opciones, pestañas, grupos de comandos, barra de estado, vistas y zoom.",
          "bullets": [],
          "didYouKnow": "La cinta de opciones organiza los comandos por pestañas, y algunas pestañas solo aparecen cuando el elemento seleccionado las necesita.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-4",
        "number": 4,
        "title": "Creación, guardado y uso de plantillas",
        "shortDescription": "Crear documentos en blanco o desde una plantilla, guardar correctamente el archivo y reconocer cuándo conviene reutilizar una estructura predefinida.",
        "block": 1,
        "type": "content",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Introducción a Microsoft Word en el TFJA",
          "title": "Creación, guardado y uso de plantillas",
          "description": "Crear documentos en blanco o desde una plantilla, guardar correctamente el archivo y reconocer cuándo conviene reutilizar una estructura predefinida.",
          "bullets": [],
          "didYouKnow": "Una plantilla permite conservar una estructura base y generar un documento nuevo sin modificar el archivo original.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-5",
        "number": 5,
        "title": "Escritura, selección e inserción básica",
        "shortDescription": "Escribir, seleccionar e insertar texto, símbolos o ecuaciones sencillas dentro de un documento de Word.",
        "block": 1,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Introducción a Microsoft Word en el TFJA",
          "title": "Escritura, selección e inserción básica",
          "description": "Escribir, seleccionar e insertar texto, símbolos o ecuaciones sencillas dentro de un documento de Word.",
          "bullets": [],
          "didYouKnow": "El cursor marca el punto exacto donde se insertará el texto o elemento dentro del documento.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "evaluacion-1",
        "number": 6,
        "title": "Evaluación 1",
        "shortDescription": "Checkpoint obligatorio del Bloque 1.",
        "block": 1,
        "type": "evaluation",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Evaluación Bloque 1",
          "title": "Evaluación 1",
          "description": "Responde las tres preguntas clave para desbloquear el siguiente bloque.",
          
          "checkpointEvaluation": {
            "id": "word-descubre-evaluacion-1",
            "type": "checkpoint-1",
            "title": "Evaluación 1",
            "minimumCorrectAnswers": 2,
            "maxAttempts": 2,
            "questions": [
              {
                "id": "H-02-01-01",
                "question": "¿Para qué se utiliza Word en el entorno institucional del TFJA?",
                "options": [
                  "Para elaborar, revisar y compartir documentos de trabajo",
                  "Para programar sistemas jurisdiccionales",
                  "Para administrar contraseñas de red",
                  "Para sustituir todas las firmas oficiales"
                ],
                "correctAnswer": "Para elaborar, revisar y compartir documentos de trabajo"
              },
              {
                "id": "H-02-01-02",
                "question": "¿Cuál es una diferencia general entre Word web y Word de escritorio?",
                "options": [
                  "La versión de escritorio suele ofrecer funciones más completas; la web facilita acceso y colaboración rápida desde el navegador",
                  "La versión web no permite abrir documentos",
                  "La versión de escritorio solo sirve para leer archivos PDF",
                  "Ambas eliminan la necesidad de guardar documentos"
                ],
                "correctAnswer": "La versión de escritorio suele ofrecer funciones más completas; la web facilita acceso y colaboración rápida desde el navegador"
              },
              {
                "id": "H-02-01-03",
                "question": "¿Qué función tiene la cinta de opciones en Word?",
                "options": [
                  "Organizar comandos por pestañas y grupos",
                  "Mostrar únicamente el nombre del archivo",
                  "Cerrar documentos automáticamente",
                  "Convertir todo el texto a imagen"
                ],
                "correctAnswer": "Organizar comandos por pestañas y grupos"
              }
            ]
          }
        }
      },
      {
        "id": "bloque-2-paso-1",
        "number": 1,
        "title": "Hagamos un oficio p.1: Copiar, cortar, pegar y deshacer cambios",
        "shortDescription": "Aplicar acciones básicas de edición para mover, duplicar o corregir contenido sin perder información del documento.",
        "block": 2,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Generación de documentos",
          "title": "Hagamos un oficio p.1: Copiar, cortar, pegar y deshacer cambios",
          "description": "Aplicar acciones básicas de edición para mover, duplicar o corregir contenido sin perder información del documento.",
          "bullets": [],
          "didYouKnow": "Los atajos Ctrl + C, Ctrl + X, Ctrl + V y Ctrl + Z agilizan la edición de documentos y reducen acciones repetitivas.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-2",
        "number": 2,
        "title": "Hagamos un oficio p.2: Formato de fuente y cambio de mayúsculas/minúsculas",
        "shortDescription": "Modificar tipo de letra, tamaño, color, negrita, cursiva, subrayado y uso de mayúsculas o minúsculas de forma controlada.",
        "block": 2,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Generación de documentos",
          "title": "Hagamos un oficio p.2: Formato de fuente y cambio de mayúsculas/minúsculas",
          "description": "Modificar tipo de letra, tamaño, color, negrita, cursiva, subrayado y uso de mayúsculas o minúsculas de forma controlada.",
          "bullets": [],
          "didYouKnow": "Antes de aplicar formato a un texto, primero debe seleccionarse el fragmento que se desea modificar.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-3",
        "number": 3,
        "title": "Hagamos un oficio p.3: Formato de párrafo: alineación, sangrías y espaciado",
        "shortDescription": "Ordenar visualmente el contenido mediante alineación, sangrías, interlineado y espaciado entre párrafos.",
        "block": 2,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Generación de documentos",
          "title": "Hagamos un oficio p.3: Formato de párrafo: alineación, sangrías y espaciado",
          "description": "Ordenar visualmente el contenido mediante alineación, sangrías, interlineado y espaciado entre párrafos.",
          "bullets": [],
          "didYouKnow": "El espaciado entre párrafos suele dar un resultado más limpio que insertar líneas en blanco manualmente.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-4",
        "number": 4,
        "title": "Hagamos un oficio p.4: Listas con viñetas y numeración",
        "shortDescription": "Usar listas con viñetas o numeradas para presentar pasos, requisitos o elementos de manera clara y secuencial.",
        "block": 2,
        "type": "content",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Generación de documentos",
          "title": "Hagamos un oficio p.4: Listas con viñetas y numeración",
          "description": "Usar listas con viñetas o numeradas para presentar pasos, requisitos o elementos de manera clara y secuencial.",
          "bullets": [],
          "didYouKnow": "Las listas numeradas ayudan a explicar procedimientos porque muestran el orden exacto de las acciones.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-5",
        "number": 5,
        "title": "Hagamos un oficio p.5: Configuración de página: márgenes, orientación y tamaño",
        "shortDescription": "Ajustar márgenes, orientación y tamaño de página para preparar el documento conforme a su finalidad de lectura, impresión o entrega.",
        "block": 2,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Generación de documentos",
          "title": "Hagamos un oficio p.5: Configuración de página: márgenes, orientación y tamaño",
          "description": "Ajustar márgenes, orientación y tamaño de página para preparar el documento conforme a su finalidad de lectura, impresión o entrega.",
          "bullets": [],
          "didYouKnow": "Configurar la página antes de finalizar el documento evita ajustes de último momento al imprimir o exportar.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "evaluacion-2",
        "number": 6,
        "title": "Evaluación 2",
        "shortDescription": "Checkpoint obligatorio del Bloque 2.",
        "block": 2,
        "type": "evaluation",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Evaluación Bloque 2",
          "title": "Evaluación 2",
          "description": "Responde las tres preguntas clave para desbloquear el siguiente bloque.",
          
          "checkpointEvaluation": {
            "id": "word-descubre-evaluacion-2",
            "type": "checkpoint-2",
            "title": "Evaluación 2",
            "minimumCorrectAnswers": 2,
            "maxAttempts": 2,
            "questions": [
              {
                "id": "H-02-01-04",
                "question": "¿Qué acción permite corregir un cambio reciente en Word?",
                "options": [
                  "Deshacer",
                  "Imprimir",
                  "Insertar portada",
                  "Cerrar sesión"
                ],
                "correctAnswer": "Deshacer"
              },
              {
                "id": "H-02-01-05",
                "question": "Antes de aplicar formato a una parte del texto, ¿qué debe hacerse?",
                "options": [
                  "Seleccionar el fragmento que se desea modificar",
                  "Cerrar el documento",
                  "Cambiar el idioma del sistema",
                  "Insertar una tabla"
                ],
                "correctAnswer": "Seleccionar el fragmento que se desea modificar"
              },
              {
                "id": "H-02-01-06",
                "question": "¿Para qué sirve configurar márgenes, orientación y tamaño de página?",
                "options": [
                  "Para preparar el documento conforme a su lectura, impresión o entrega",
                  "Para cambiar el correo del autor",
                  "Para eliminar comentarios",
                  "Para bloquear el teclado"
                ],
                "correctAnswer": "Para preparar el documento conforme a su lectura, impresión o entrega"
              }
            ]
          }
        }
      },
      {
        "id": "bloque-3-paso-1",
        "number": 1,
        "title": "Trabaja con un un documentoEncabezados, pies de página y número de página",
        "shortDescription": "Insertar y editar encabezados, pies de página y numeración para identificar y ordenar documentos extensos.",
        "block": 3,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Formato, revisión y entrega de documentos",
          "title": "Trabaja con un un documentoEncabezados, pies de página y número de página",
          "description": "Insertar y editar encabezados, pies de página y numeración para identificar y ordenar documentos extensos.",
          "bullets": [],
          "didYouKnow": "El número de página se actualiza automáticamente aunque se agreguen o eliminen páginas.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-2",
        "number": 2,
        "title": "Inserción y ajuste de imágenes",
        "shortDescription": "Insertar imágenes desde el dispositivo, imágenes de archivo o imágenes en línea, y ajustar su relación con el texto.",
        "block": 3,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Formato, revisión y entrega de documentos",
          "title": "Inserción y ajuste de imágenes",
          "description": "Insertar imágenes desde el dispositivo, imágenes de archivo o imágenes en línea, y ajustar su relación con el texto.",
          "bullets": [],
          "didYouKnow": "Las opciones de diseño permiten controlar cómo una imagen se acomoda junto al texto del documento.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-3",
        "number": 3,
        "title": "Tablas básicas para organizar información",
        "shortDescription": "Crear, ajustar y dar formato a tablas sencillas para organizar información en filas, columnas y celdas.",
        "block": 3,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Formato, revisión y entrega de documentos",
          "title": "Tablas básicas para organizar información",
          "description": "Crear, ajustar y dar formato a tablas sencillas para organizar información en filas, columnas y celdas.",
          "bullets": [],
          "didYouKnow": "Una tabla bien diseñada puede sustituir párrafos largos y facilitar la comparación de información.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-4",
        "number": 4,
        "title": "Revisión ortográfica, comentarios y control de cambios",
        "shortDescription": "Usar herramientas de revisión para detectar errores, insertar comentarios y dar seguimiento a modificaciones en un documento.",
        "block": 3,
        "type": "content",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Formato, revisión y entrega de documentos",
          "title": "Revisión ortográfica, comentarios y control de cambios",
          "description": "Usar herramientas de revisión para detectar errores, insertar comentarios y dar seguimiento a modificaciones en un documento.",
          "bullets": [],
          "didYouKnow": "Control de cambios permite identificar las modificaciones realizadas en el documento y facilita la revisión colaborativa.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-5",
        "number": 5,
        "title": "Exportación a PDF, impresión y buenas prácticas institucionales",
        "shortDescription": "Exportar documentos a PDF o imprimirlos verificando vista previa, configuración de salida, nombre de archivo y cuidado de la información institucional.",
        "block": 3,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Formato, revisión y entrega de documentos",
          "title": "Exportación a PDF, impresión y buenas prácticas institucionales",
          "description": "Exportar documentos a PDF o imprimirlos verificando vista previa, configuración de salida, nombre de archivo y cuidado de la información institucional.",
          "bullets": [],
          "didYouKnow": "El formato PDF conserva la apariencia del documento en la mayoría de los equipos y ayuda a compartirlo para consulta o validación.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "evaluacion-final",
        "number": 6,
        "title": "Evaluación final",
        "shortDescription": "Evaluación final de la ruta.",
        "block": 3,
        "type": "evaluation",
        "estimatedTime": "10 min",
        "content": {
          "eyebrow": "Evaluación final",
          "title": "Evaluación final",
          "description": "Responde diez preguntas del banco de la herramienta y ruta.",
          "bullets": [
            "10 preguntas sin repetir.",
            "Aprobación mínima: 7 respuestas correctas.",
            "Máximo 2 intentos."
          ],
          "finalEvaluation": {
            "id": "word-descubre-evaluacion-final",
            "type": "final",
            "title": "Evaluación final",
            "timeLimitMinutes": 10,
            "minimumCorrectAnswers": 7,
            "maxAttempts": 2,
            "questions": [
              {
                "id": "H-02-01-01",
                "question": "¿Para qué se utiliza Word en el entorno institucional del TFJA?",
                "options": [
                  "Para elaborar, revisar y compartir documentos de trabajo",
                  "Para programar sistemas jurisdiccionales",
                  "Para administrar contraseñas de red",
                  "Para sustituir todas las firmas oficiales"
                ],
                "correctAnswer": "Para elaborar, revisar y compartir documentos de trabajo"
              },
              {
                "id": "H-02-01-02",
                "question": "¿Cuál es una diferencia general entre Word web y Word de escritorio?",
                "options": [
                  "La versión de escritorio suele ofrecer funciones más completas; la web facilita acceso y colaboración rápida desde el navegador",
                  "La versión web no permite abrir documentos",
                  "La versión de escritorio solo sirve para leer archivos PDF",
                  "Ambas eliminan la necesidad de guardar documentos"
                ],
                "correctAnswer": "La versión de escritorio suele ofrecer funciones más completas; la web facilita acceso y colaboración rápida desde el navegador"
              },
              {
                "id": "H-02-01-03",
                "question": "¿Qué función tiene la cinta de opciones en Word?",
                "options": [
                  "Organizar comandos por pestañas y grupos",
                  "Mostrar únicamente el nombre del archivo",
                  "Cerrar documentos automáticamente",
                  "Convertir todo el texto a imagen"
                ],
                "correctAnswer": "Organizar comandos por pestañas y grupos"
              },
              {
                "id": "H-02-01-04",
                "question": "¿Qué acción permite corregir un cambio reciente en Word?",
                "options": [
                  "Deshacer",
                  "Imprimir",
                  "Insertar portada",
                  "Cerrar sesión"
                ],
                "correctAnswer": "Deshacer"
              },
              {
                "id": "H-02-01-05",
                "question": "Antes de aplicar formato a una parte del texto, ¿qué debe hacerse?",
                "options": [
                  "Seleccionar el fragmento que se desea modificar",
                  "Cerrar el documento",
                  "Cambiar el idioma del sistema",
                  "Insertar una tabla"
                ],
                "correctAnswer": "Seleccionar el fragmento que se desea modificar"
              },
              {
                "id": "H-02-01-06",
                "question": "¿Para qué sirve configurar márgenes, orientación y tamaño de página?",
                "options": [
                  "Para preparar el documento conforme a su lectura, impresión o entrega",
                  "Para cambiar el correo del autor",
                  "Para eliminar comentarios",
                  "Para bloquear el teclado"
                ],
                "correctAnswer": "Para preparar el documento conforme a su lectura, impresión o entrega"
              },
              {
                "id": "H-02-01-07",
                "question": "Un documento institucional en Word debe elaborarse cuidando:",
                "options": [
                  "Claridad, estructura y finalidad del documento",
                  "Solo el color del fondo",
                  "La cantidad de emojis",
                  "El tamaño del monitor"
                ],
                "correctAnswer": "Claridad, estructura y finalidad del documento"
              },
              {
                "id": "H-02-01-08",
                "question": "La versión web de Word es especialmente útil para:",
                "options": [
                  "Acceder y colaborar desde el navegador",
                  "Instalar controladores del equipo",
                  "Administrar redes locales",
                  "Eliminar plantillas institucionales"
                ],
                "correctAnswer": "Acceder y colaborar desde el navegador"
              },
              {
                "id": "H-02-01-09",
                "question": "La barra de estado de Word puede mostrar información como:",
                "options": [
                  "Páginas, palabras, idioma o vista del documento",
                  "El sueldo del usuario",
                  "Contraseñas guardadas",
                  "Permisos de red"
                ],
                "correctAnswer": "Páginas, palabras, idioma o vista del documento"
              },
              {
                "id": "H-02-01-10",
                "question": "Guardar correctamente un documento implica:",
                "options": [
                  "Asignar nombre y ubicación adecuados",
                  "Dejarlo siempre como Documento1",
                  "Cerrar sin guardar",
                  "Copiarlo solo en el portapapeles"
                ],
                "correctAnswer": "Asignar nombre y ubicación adecuados"
              },
              {
                "id": "H-02-01-11",
                "question": "Una plantilla sirve para:",
                "options": [
                  "Reutilizar una estructura base sin modificar el archivo original",
                  "Eliminar la necesidad de revisar el contenido",
                  "Convertir texto en contraseña",
                  "Crear archivos sin nombre"
                ],
                "correctAnswer": "Reutilizar una estructura base sin modificar el archivo original"
              },
              {
                "id": "H-02-01-12",
                "question": "El cursor en Word indica:",
                "options": [
                  "El punto donde se insertará texto o un elemento",
                  "El número de usuarios conectados",
                  "La calidad de impresión",
                  "La ubicación del archivo en la nube"
                ],
                "correctAnswer": "El punto donde se insertará texto o un elemento"
              },
              {
                "id": "H-02-01-13",
                "question": "¿Qué combinación de acciones ayuda a mover contenido sin reescribirlo?",
                "options": [
                  "Cortar y pegar",
                  "Imprimir y cerrar",
                  "Insertar y bloquear",
                  "Zoom y vista"
                ],
                "correctAnswer": "Cortar y pegar"
              },
              {
                "id": "H-02-01-14",
                "question": "El formato de fuente permite modificar:",
                "options": [
                  "Tipo de letra, tamaño, color y estilos como negrita",
                  "Los permisos del sistema",
                  "El nombre de usuario institucional",
                  "La conexión de red"
                ],
                "correctAnswer": "Tipo de letra, tamaño, color y estilos como negrita"
              },
              {
                "id": "H-02-01-15",
                "question": "La alineación, sangrías e interlineado pertenecen al formato de:",
                "options": [
                  "Párrafo",
                  "Archivo",
                  "Cuenta",
                  "Impresora"
                ],
                "correctAnswer": "Párrafo"
              },
              {
                "id": "H-02-01-16",
                "question": "Las listas numeradas son útiles para:",
                "options": [
                  "Presentar pasos en orden secuencial",
                  "Ocultar texto",
                  "Cambiar el autor del documento",
                  "Bloquear una página"
                ],
                "correctAnswer": "Presentar pasos en orden secuencial"
              },
              {
                "id": "H-02-01-17",
                "question": "La orientación de página puede ser principalmente:",
                "options": [
                  "Vertical u horizontal",
                  "Borrador o final",
                  "Pública o privada",
                  "Interna o externa"
                ],
                "correctAnswer": "Vertical u horizontal"
              },
              {
                "id": "H-02-01-18",
                "question": "Usar espaciado entre párrafos en lugar de líneas en blanco ayuda a:",
                "options": [
                  "Mantener un diseño más limpio y controlado",
                  "Aumentar el tamaño del archivo sin razón",
                  "Ocultar errores ortográficos",
                  "Eliminar encabezados"
                ],
                "correctAnswer": "Mantener un diseño más limpio y controlado"
              },
              {
                "id": "H-02-01-19",
                "question": "El número de página en Word se actualiza:",
                "options": [
                  "Automáticamente al agregar o eliminar páginas",
                  "Solo si se escribe a mano",
                  "Al cambiar la contraseña",
                  "Cuando se imprime en color"
                ],
                "correctAnswer": "Automáticamente al agregar o eliminar páginas"
              },
              {
                "id": "H-02-01-20",
                "question": "Al insertar una imagen, las opciones de diseño permiten:",
                "options": [
                  "Controlar cómo se acomoda con el texto",
                  "Cambiar la cuenta institucional",
                  "Eliminar tablas",
                  "Bloquear comentarios"
                ],
                "correctAnswer": "Controlar cómo se acomoda con el texto"
              },
              {
                "id": "H-02-01-21",
                "question": "Una tabla en Word sirve para:",
                "options": [
                  "Organizar información en filas, columnas y celdas",
                  "Enviar correos automáticos",
                  "Proteger la red",
                  "Convertir todo a audio"
                ],
                "correctAnswer": "Organizar información en filas, columnas y celdas"
              },
              {
                "id": "H-02-01-22",
                "question": "La revisión ortográfica ayuda a:",
                "options": [
                  "Detectar posibles errores de escritura",
                  "Aumentar automáticamente el rango jerárquico",
                  "Crear contraseñas seguras",
                  "Eliminar imágenes"
                ],
                "correctAnswer": "Detectar posibles errores de escritura"
              },
              {
                "id": "H-02-01-23",
                "question": "Los comentarios son útiles para:",
                "options": [
                  "Realizar observaciones sin modificar directamente el texto principal",
                  "Ocultar el documento",
                  "Cambiar el tipo de archivo a sistema",
                  "Borrar todas las versiones"
                ],
                "correctAnswer": "Realizar observaciones sin modificar directamente el texto principal"
              },
              {
                "id": "H-02-01-24",
                "question": "Exportar a PDF ayuda a:",
                "options": [
                  "Conservar la apariencia del documento para consulta o entrega",
                  "Modificar automáticamente el contenido",
                  "Eliminar la necesidad de revisar",
                  "Crear una reunión"
                ],
                "correctAnswer": "Conservar la apariencia del documento para consulta o entrega"
              },
              {
                "id": "H-02-01-25",
                "question": "Antes de imprimir conviene revisar:",
                "options": [
                  "Vista previa, páginas, orientación y configuración de salida",
                  "El estado de Teams",
                  "El historial de navegación completo",
                  "Los contactos personales"
                ],
                "correctAnswer": "Vista previa, páginas, orientación y configuración de salida"
              },
              {
                "id": "H-02-01-26",
                "question": "Una buena práctica al entregar un documento es:",
                "options": [
                  "Verificar nombre del archivo, contenido y datos sensibles",
                  "Guardar versiones con nombres confusos",
                  "Imprimir sin revisar",
                  "Enviar el archivo a destinatarios incorrectos"
                ],
                "correctAnswer": "Verificar nombre del archivo, contenido y datos sensibles"
              },
              {
                "id": "H-02-01-27",
                "question": "Una tabla bien diseñada puede mejorar:",
                "options": [
                  "La comparación y lectura de información",
                  "La velocidad del procesador",
                  "La cantidad de reuniones",
                  "La contraseña del archivo"
                ],
                "correctAnswer": "La comparación y lectura de información"
              },
              {
                "id": "H-02-01-28",
                "question": "Control de cambios permite:",
                "options": [
                  "Identificar modificaciones realizadas durante una revisión",
                  "Eliminar la autoría del documento",
                  "Crear carpetas en OneDrive",
                  "Cambiar el idioma del sistema"
                ],
                "correctAnswer": "Identificar modificaciones realizadas durante una revisión"
              },
              {
                "id": "H-02-01-29",
                "question": "Los encabezados y pies de página se utilizan para:",
                "options": [
                  "Identificar documentos con información repetida en páginas",
                  "Cambiar permisos del archivo",
                  "Desactivar la revisión ortográfica",
                  "Enviar mensajes por Teams"
                ],
                "correctAnswer": "Identificar documentos con información repetida en páginas"
              },
              {
                "id": "H-02-01-30",
                "question": "Antes de compartir un documento institucional se debe confirmar:",
                "options": [
                  "Que sea la versión correcta y esté listo para consulta o validación",
                  "Que tenga el nombre más corto posible sin contexto",
                  "Que no se haya guardado",
                  "Que incluya información ajena"
                ],
                "correctAnswer": "Que sea la versión correcta y esté listo para consulta o validación"
              }
            ],
            "questionCount": 10
          }
        }
      }
    ]
  },
  "word-potencia": {
    "toolId": "word",
    "toolName": "Word",
    "levelId": "potencia",
    "levelName": "Potencia",
    "routeId": "word-potencia",
    "steps": [
      {
        "id": "bloque-1-paso-1",
        "number": 1,
        "title": "Plantillas y formatos institucionales",
        "shortDescription": "Panel de navegación",
        "block": 1,
        "type": "welcome",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Documentos institucionales bien estructurados",
          "title": "Plantillas y formatos institucionales",
          "description": "Panel de navegación",
          "bullets": [],
          "didYouKnow": "¿Sabías que Word puede mostrar tu documento como si fuera el índice de un libro? Puedes saltar entre capítulos e incluso reorganizarlos arrastrándolos con el mouse.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-2",
        "number": 2,
        "title": "Uso de estilos para títulos y contenido",
        "shortDescription": "Estilos profesionales",
        "block": 1,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Documentos institucionales bien estructurados",
          "title": "Uso de estilos para títulos y contenido",
          "description": "Estilos profesionales",
          "bullets": [],
          "didYouKnow": "¿Sabías que los estilos son el \"esqueleto\" del documento? Gracias a ellos Word entiende qué es un título, un subtítulo o un apartado.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-3",
        "number": 3,
        "title": "Tabla de contenido automática",
        "shortDescription": "Tabla de contenido automática",
        "block": 1,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Documentos institucionales bien estructurados",
          "title": "Tabla de contenido automática",
          "description": "Tabla de contenido automática",
          "bullets": [],
          "didYouKnow": "¿Sabías que puedes actualizar un índice completo con un solo clic, aunque el documento haya cambiado de tamaño?",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-4",
        "number": 4,
        "title": "Secciones, saltos y numeración avanzada",
        "shortDescription": "Saltos de página y de sección",
        "block": 1,
        "type": "content",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Documentos institucionales bien estructurados",
          "title": "Secciones, saltos y numeración avanzada",
          "description": "Saltos de página y de sección",
          "bullets": [],
          "didYouKnow": "¿Sabías que presionar Enter varias veces es uno de los errores más comunes en Word? Los documentos profesionales utilizan saltos de página y de sección.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-5",
        "number": 5,
        "title": "Encabezados y pies diferenciados",
        "shortDescription": "Encabezados, pies y numeración por sección",
        "block": 1,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Documentos institucionales bien estructurados",
          "title": "Encabezados y pies diferenciados",
          "description": "Encabezados, pies y numeración por sección",
          "bullets": [],
          "didYouKnow": "¿Sabías que un documento puede tener una portada sin número, un índice con números romanos y el contenido con numeración tradicional?",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "evaluacion-1",
        "number": 6,
        "title": "Evaluación 1",
        "shortDescription": "Checkpoint obligatorio del Bloque 1.",
        "block": 1,
        "type": "evaluation",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Evaluación Bloque 1",
          "title": "Evaluación 1",
          "description": "Responde las tres preguntas clave para desbloquear el siguiente bloque.",
         
          "checkpointEvaluation": {
            "id": "word-potencia-evaluacion-1",
            "type": "checkpoint-1",
            "title": "Evaluación 1",
            "minimumCorrectAnswers": 2,
            "maxAttempts": 2,
            "questions": [
              {
                "id": "H-02-02-01",
                "question": "¿Por qué conviene usar plantillas o formatos institucionales?",
                "options": [
                  "Porque ayudan a mantener estructura, consistencia y presentación homogénea",
                  "Porque eliminan la revisión del contenido",
                  "Porque impiden guardar el documento",
                  "Porque sustituyen todo proceso de autorización"
                ],
                "correctAnswer": "Porque ayudan a mantener estructura, consistencia y presentación homogénea"
              },
              {
                "id": "H-02-02-02",
                "question": "¿Qué aportan los estilos en Word?",
                "options": [
                  "Permiten estructurar títulos y contenido de forma uniforme",
                  "Crean contraseñas para el documento",
                  "Eliminan tablas automáticamente",
                  "Bloquean la impresión"
                ],
                "correctAnswer": "Permiten estructurar títulos y contenido de forma uniforme"
              },
              {
                "id": "H-02-02-03",
                "question": "¿De qué depende una tabla de contenido automática?",
                "options": [
                  "De que los títulos usen estilos correctamente",
                  "De escribir el índice a mano",
                  "De insertar imágenes en cada página",
                  "De guardar el archivo como imagen"
                ],
                "correctAnswer": "De que los títulos usen estilos correctamente"
              }
            ]
          }
        }
      },
      {
        "id": "bloque-2-paso-1",
        "number": 1,
        "title": "Comentarios para revisión",
        "shortDescription": "Buscar, reemplazar y búsqueda avanzada",
        "block": 2,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Revisión, colaboración y control documental",
          "title": "Comentarios para revisión",
          "description": "Buscar, reemplazar y búsqueda avanzada",
          "bullets": [],
          "didYouKnow": "¿Sabías que Word puede encontrar y reemplazar cientos de palabras o incluso formatos completos en cuestión de segundos?",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-2",
        "number": 2,
        "title": "Control de cambios",
        "shortDescription": "Referencias cruzadas",
        "block": 2,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Revisión, colaboración y control documental",
          "title": "Control de cambios",
          "description": "Referencias cruzadas",
          "bullets": [],
          "didYouKnow": "¿Sabías que Word puede actualizar automáticamente referencias como \"véase la página...\" cuando el documento cambia?",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-3",
        "number": 3,
        "title": "Comparar y combinar documentos",
        "shortDescription": "Hipervínculos internos y navegación",
        "block": 2,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Revisión, colaboración y control documental",
          "title": "Comparar y combinar documentos",
          "description": "Hipervínculos internos y navegación",
          "bullets": [],
          "didYouKnow": "¿Sabías que un documento de Word puede navegarse casi igual que una página web? Puedes ir de un apartado a otro con un solo clic.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-4",
        "number": 4,
        "title": "Historial de versiones en documentos compartidos",
        "shortDescription": "Plantillas institucionales y Elementos rápidos",
        "block": 2,
        "type": "content",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Revisión, colaboración y control documental",
          "title": "Historial de versiones en documentos compartidos",
          "description": "Plantillas institucionales y Elementos rápidos",
          "bullets": [],
          "didYouKnow": "¿Sabías que puedes guardar párrafos completos, firmas o textos institucionales para insertarlos cuando los necesites?",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-5",
        "number": 5,
        "title": "Protección y permisos básicos del documento",
        "shortDescription": "Inspector de documentos y metadatos",
        "block": 2,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Revisión, colaboración y control documental",
          "title": "Protección y permisos básicos del documento",
          "description": "Inspector de documentos y metadatos",
          "bullets": [],
          "didYouKnow": "¿Sabías que un documento puede conservar comentarios, autores, revisiones o información oculta aunque no la veas? Word puede detectarla antes de que compartas el archivo.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "evaluacion-2",
        "number": 6,
        "title": "Evaluación 2",
        "shortDescription": "Checkpoint obligatorio del Bloque 2.",
        "block": 2,
        "type": "evaluation",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Evaluación Bloque 2",
          "title": "Evaluación 2",
          "description": "Responde las tres preguntas clave para desbloquear el siguiente bloque.",
          
          "checkpointEvaluation": {
            "id": "word-potencia-evaluacion-2",
            "type": "checkpoint-2",
            "title": "Evaluación 2",
            "minimumCorrectAnswers": 2,
            "maxAttempts": 2,
            "questions": [
              {
                "id": "H-02-02-04",
                "question": "¿Para qué sirven los comentarios en un proceso de revisión?",
                "options": [
                  "Para dejar observaciones sin alterar directamente el texto final",
                  "Para ocultar el documento",
                  "Para eliminar estilos",
                  "Para cambiar el autor institucional"
                ],
                "correctAnswer": "Para dejar observaciones sin alterar directamente el texto final"
              },
              {
                "id": "H-02-02-05",
                "question": "¿Qué permite el control de cambios?",
                "options": [
                  "Registrar inserciones, eliminaciones y modificaciones realizadas",
                  "Crear una reunión en Teams",
                  "Convertir texto en tabla automáticamente",
                  "Eliminar la necesidad de guardar"
                ],
                "correctAnswer": "Registrar inserciones, eliminaciones y modificaciones realizadas"
              },
              {
                "id": "H-02-02-06",
                "question": "Comparar documentos ayuda a:",
                "options": [
                  "Identificar diferencias entre versiones",
                  "Cambiar los permisos de red",
                  "Insertar imágenes sin revisar",
                  "Eliminar comentarios de otros usuarios siempre"
                ],
                "correctAnswer": "Identificar diferencias entre versiones"
              }
            ]
          }
        }
      },
      {
        "id": "bloque-3-paso-1",
        "number": 1,
        "title": "Referencias, notas al pie y citas",
        "shortDescription": "Comentarios y menciones",
        "block": 3,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Automatización y productividad con Word",
          "title": "Referencias, notas al pie y citas",
          "description": "Comentarios y menciones",
          "bullets": [],
          "didYouKnow": "¿Sabías que puedes mencionar a un compañero con @ para que Word le notifique automáticamente que tiene una revisión pendiente?",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-2",
        "number": 2,
        "title": "Marcadores, vínculos internos y navegación",
        "shortDescription": "Control de cambios",
        "block": 3,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Automatización y productividad con Word",
          "title": "Marcadores, vínculos internos y navegación",
          "description": "Control de cambios",
          "bullets": [],
          "didYouKnow": "¿Sabías que Word puede decirte quién cambió una palabra, cuándo lo hizo y cuál era el texto original?",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-3",
        "number": 3,
        "title": "Combinación de correspondencia",
        "shortDescription": "Comparar y combinar documentos",
        "block": 3,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Automatización y productividad con Word",
          "title": "Combinación de correspondencia",
          "description": "Comparar y combinar documentos",
          "bullets": [],
          "didYouKnow": "¿Sabías que Word puede comparar automáticamente dos documentos de cientos de páginas y mostrar únicamente lo que cambió?",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-4",
        "number": 4,
        "title": "Formularios básicos y controles de contenido",
        "shortDescription": "Historial de versiones y recuperación",
        "block": 3,
        "type": "content",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Automatización y productividad con Word",
          "title": "Formularios básicos y controles de contenido",
          "description": "Historial de versiones y recuperación",
          "bullets": [],
          "didYouKnow": "¿Sabías que muchas veces ya no necesitas guardar archivos llamados \"Final\", \"Final2\" o \"AhoraSíFinal\"? Word y Microsoft 365 pueden ayudarte a recuperar versiones anteriores.",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-5",
        "number": 5,
        "title": "Cierre de documentos listos para validación",
        "shortDescription": "Flujo completo de revisión documental",
        "block": 3,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Automatización y productividad con Word",
          "title": "Cierre de documentos listos para validación",
          "description": "Flujo completo de revisión documental",
          "bullets": [],
          "didYouKnow": "¿Sabías que Word puede acompañar todo el ciclo de vida de un documento, desde el primer borrador hasta la versión final aprobada, sin perder el control de los cambios?",
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "evaluacion-final",
        "number": 6,
        "title": "Evaluación final",
        "shortDescription": "Evaluación final de la ruta.",
        "block": 3,
        "type": "evaluation",
        "estimatedTime": "10 min",
        "content": {
          "eyebrow": "Evaluación final",
          "title": "Evaluación final",
          "description": "Responde diez preguntas del banco de la herramienta y ruta.",
          "bullets": [
            "10 preguntas sin repetir.",
            "Aprobación mínima: 7 respuestas correctas.",
            "Máximo 2 intentos."
          ],
          "finalEvaluation": {
            "id": "word-potencia-evaluacion-final",
            "type": "final",
            "title": "Evaluación final",
            "timeLimitMinutes": 10,
            "minimumCorrectAnswers": 7,
            "maxAttempts": 2,
            "questions": [
              {
                "id": "H-02-02-01",
                "question": "¿Por qué conviene usar plantillas o formatos institucionales?",
                "options": [
                  "Porque ayudan a mantener estructura, consistencia y presentación homogénea",
                  "Porque eliminan la revisión del contenido",
                  "Porque impiden guardar el documento",
                  "Porque sustituyen todo proceso de autorización"
                ],
                "correctAnswer": "Porque ayudan a mantener estructura, consistencia y presentación homogénea"
              },
              {
                "id": "H-02-02-02",
                "question": "¿Qué aportan los estilos en Word?",
                "options": [
                  "Permiten estructurar títulos y contenido de forma uniforme",
                  "Crean contraseñas para el documento",
                  "Eliminan tablas automáticamente",
                  "Bloquean la impresión"
                ],
                "correctAnswer": "Permiten estructurar títulos y contenido de forma uniforme"
              },
              {
                "id": "H-02-02-03",
                "question": "¿De qué depende una tabla de contenido automática?",
                "options": [
                  "De que los títulos usen estilos correctamente",
                  "De escribir el índice a mano",
                  "De insertar imágenes en cada página",
                  "De guardar el archivo como imagen"
                ],
                "correctAnswer": "De que los títulos usen estilos correctamente"
              },
              {
                "id": "H-02-02-04",
                "question": "¿Para qué sirven los comentarios en un proceso de revisión?",
                "options": [
                  "Para dejar observaciones sin alterar directamente el texto final",
                  "Para ocultar el documento",
                  "Para eliminar estilos",
                  "Para cambiar el autor institucional"
                ],
                "correctAnswer": "Para dejar observaciones sin alterar directamente el texto final"
              },
              {
                "id": "H-02-02-05",
                "question": "¿Qué permite el control de cambios?",
                "options": [
                  "Registrar inserciones, eliminaciones y modificaciones realizadas",
                  "Crear una reunión en Teams",
                  "Convertir texto en tabla automáticamente",
                  "Eliminar la necesidad de guardar"
                ],
                "correctAnswer": "Registrar inserciones, eliminaciones y modificaciones realizadas"
              },
              {
                "id": "H-02-02-06",
                "question": "Comparar documentos ayuda a:",
                "options": [
                  "Identificar diferencias entre versiones",
                  "Cambiar los permisos de red",
                  "Insertar imágenes sin revisar",
                  "Eliminar comentarios de otros usuarios siempre"
                ],
                "correctAnswer": "Identificar diferencias entre versiones"
              },
              {
                "id": "H-02-02-07",
                "question": "Una plantilla institucional reduce el riesgo de:",
                "options": [
                  "Usar formatos distintos o inconsistentes",
                  "Revisar el contenido",
                  "Guardar el archivo",
                  "Crear títulos"
                ],
                "correctAnswer": "Usar formatos distintos o inconsistentes"
              },
              {
                "id": "H-02-02-08",
                "question": "Si se modifican los estilos, el documento puede actualizar:",
                "options": [
                  "La apariencia de múltiples títulos o párrafos relacionados",
                  "La contraseña del equipo",
                  "El correo institucional",
                  "La configuración de red"
                ],
                "correctAnswer": "La apariencia de múltiples títulos o párrafos relacionados"
              },
              {
                "id": "H-02-02-09",
                "question": "El panel de navegación permite:",
                "options": [
                  "Moverse entre apartados del documento",
                  "Enviar mensajes por Teams",
                  "Cambiar el formato de todos los archivos del equipo",
                  "Consultar nómina"
                ],
                "correctAnswer": "Moverse entre apartados del documento"
              },
              {
                "id": "H-02-02-10",
                "question": "Una ventaja de la tabla de contenido automática es que puede:",
                "options": [
                  "Actualizar páginas y apartados cuando cambia el documento",
                  "Eliminar todos los encabezados",
                  "Crear imágenes externas",
                  "Modificar permisos de OneDrive"
                ],
                "correctAnswer": "Actualizar páginas y apartados cuando cambia el documento"
              },
              {
                "id": "H-02-02-11",
                "question": "Los saltos de sección permiten:",
                "options": [
                  "Aplicar configuraciones distintas dentro del mismo documento",
                  "Sustituir la revisión ortográfica",
                  "Cambiar la cuenta del usuario",
                  "Eliminar la vista previa"
                ],
                "correctAnswer": "Aplicar configuraciones distintas dentro del mismo documento"
              },
              {
                "id": "H-02-02-12",
                "question": "Un documento con secciones puede tener:",
                "options": [
                  "Encabezados, pies o numeraciones distintas por parte del documento",
                  "Un solo margen obligatorio en todas las hojas",
                  "Imágenes bloqueadas sin relación",
                  "Contraseñas por párrafo"
                ],
                "correctAnswer": "Encabezados, pies o numeraciones distintas por parte del documento"
              },
              {
                "id": "H-02-02-13",
                "question": "Una observación de revisión debe escribirse de forma:",
                "options": [
                  "Clara, específica y relacionada con el texto",
                  "Ambigua y sin contexto",
                  "En mayúsculas únicamente",
                  "Fuera del documento siempre"
                ],
                "correctAnswer": "Clara, específica y relacionada con el texto"
              },
              {
                "id": "H-02-02-14",
                "question": "Al aceptar o rechazar cambios se debe:",
                "options": [
                  "Revisar cada modificación con criterio documental",
                  "Aceptar todo sin leer",
                  "Eliminar el archivo original",
                  "Cambiar el idioma del sistema"
                ],
                "correctAnswer": "Revisar cada modificación con criterio documental"
              },
              {
                "id": "H-02-02-15",
                "question": "La comparación de documentos es útil cuando existen:",
                "options": [
                  "Dos versiones que deben revisarse para detectar diferencias",
                  "Archivos de audio externos",
                  "Mensajes de chat sin relación",
                  "Carpetas vacías"
                ],
                "correctAnswer": "Dos versiones que deben revisarse para detectar diferencias"
              },
              {
                "id": "H-02-02-16",
                "question": "El historial de versiones ayuda a:",
                "options": [
                  "Recuperar o revisar estados anteriores de un documento compartido",
                  "Eliminar todos los permisos automáticamente",
                  "Crear tablas de contenido sin estilos",
                  "Cambiar el dispositivo de impresión"
                ],
                "correctAnswer": "Recuperar o revisar estados anteriores de un documento compartido"
              },
              {
                "id": "H-02-02-17",
                "question": "Proteger un documento puede ser útil para:",
                "options": [
                  "Evitar cambios no autorizados o limitar la edición",
                  "Hacerlo ilegible",
                  "Borrar comentarios siempre",
                  "Convertirlo en presentación"
                ],
                "correctAnswer": "Evitar cambios no autorizados o limitar la edición"
              },
              {
                "id": "H-02-02-18",
                "question": "El inspector de documentos permite revisar:",
                "options": [
                  "Metadatos, comentarios o información oculta antes de compartir",
                  "La velocidad de internet",
                  "La asistencia a reuniones",
                  "Las contraseñas de otros usuarios"
                ],
                "correctAnswer": "Metadatos, comentarios o información oculta antes de compartir"
              },
              {
                "id": "H-02-02-19",
                "question": "Las notas al pie sirven para:",
                "options": [
                  "Agregar aclaraciones o referencias sin interrumpir el texto principal",
                  "Cambiar márgenes automáticamente",
                  "Enviar correos masivos",
                  "Bloquear imágenes"
                ],
                "correctAnswer": "Agregar aclaraciones o referencias sin interrumpir el texto principal"
              },
              {
                "id": "H-02-02-20",
                "question": "Un vínculo interno permite:",
                "options": [
                  "Ir rápidamente a otra parte del mismo documento",
                  "Eliminar el documento original",
                  "Cambiar la extensión del archivo",
                  "Cerrar Word automáticamente"
                ],
                "correctAnswer": "Ir rápidamente a otra parte del mismo documento"
              },
              {
                "id": "H-02-02-21",
                "question": "La combinación de correspondencia permite:",
                "options": [
                  "Generar documentos personalizados a partir de una fuente de datos",
                  "Comparar imágenes",
                  "Crear carpetas en Teams",
                  "Eliminar registros institucionales"
                ],
                "correctAnswer": "Generar documentos personalizados a partir de una fuente de datos"
              },
              {
                "id": "H-02-02-22",
                "question": "Los controles de contenido en formularios ayudan a:",
                "options": [
                  "Guiar la captura de información en campos definidos",
                  "Aumentar el brillo de pantalla",
                  "Enviar mensajes urgentes",
                  "Eliminar estilos"
                ],
                "correctAnswer": "Guiar la captura de información en campos definidos"
              },
              {
                "id": "H-02-02-23",
                "question": "Los elementos rápidos permiten:",
                "options": [
                  "Insertar textos o fragmentos reutilizables",
                  "Cambiar la contraseña institucional",
                  "Eliminar encabezados de todos los documentos",
                  "Bloquear la barra de herramientas"
                ],
                "correctAnswer": "Insertar textos o fragmentos reutilizables"
              },
              {
                "id": "H-02-02-24",
                "question": "Buscar y reemplazar es útil para:",
                "options": [
                  "Modificar términos repetidos de forma controlada",
                  "Cambiar permisos de red",
                  "Imprimir sin revisar",
                  "Crear reuniones automáticamente"
                ],
                "correctAnswer": "Modificar términos repetidos de forma controlada"
              },
              {
                "id": "H-02-02-25",
                "question": "Las referencias cruzadas ayudan a:",
                "options": [
                  "Remitir a títulos, figuras, tablas o páginas dentro del documento",
                  "Guardar archivos en la papelera",
                  "Crear usuarios nuevos",
                  "Cerrar comentarios"
                ],
                "correctAnswer": "Remitir a títulos, figuras, tablas o páginas dentro del documento"
              },
              {
                "id": "H-02-02-26",
                "question": "Mencionar a una persona en un comentario puede servir para:",
                "options": [
                  "Llamar su atención sobre una revisión específica",
                  "Cambiar su cargo",
                  "Eliminar su acceso institucional",
                  "Crear una contraseña temporal"
                ],
                "correctAnswer": "Llamar su atención sobre una revisión específica"
              },
              {
                "id": "H-02-02-27",
                "question": "Un flujo completo de revisión debe conservar:",
                "options": [
                  "Cambios, comentarios, versiones y criterios de entrega",
                  "Solo copias sin nombre",
                  "Mensajes separados del documento",
                  "Archivos impresos sin control"
                ],
                "correctAnswer": "Cambios, comentarios, versiones y criterios de entrega"
              },
              {
                "id": "H-02-02-28",
                "question": "Antes de validar o entregar un documento final conviene:",
                "options": [
                  "Revisar formato, cambios, comentarios, datos sensibles y versión correcta",
                  "Aceptar cambios sin leer",
                  "Eliminar índice y referencias",
                  "Guardar solo en el escritorio sin respaldo"
                ],
                "correctAnswer": "Revisar formato, cambios, comentarios, datos sensibles y versión correcta"
              },
              {
                "id": "H-02-02-29",
                "question": "Una fuente de datos en combinación de correspondencia puede alimentar:",
                "options": [
                  "Nombres, cargos, direcciones u otros campos variables",
                  "El color del monitor",
                  "La contraseña del sistema",
                  "La asistencia a Teams"
                ],
                "correctAnswer": "Nombres, cargos, direcciones u otros campos variables"
              },
              {
                "id": "H-02-02-30",
                "question": "Un formulario bien diseñado ayuda a:",
                "options": [
                  "Estandarizar la captura de información",
                  "Duplicar errores de formato",
                  "Eliminar la revisión",
                  "Ocultar campos obligatorios"
                ],
                "correctAnswer": "Estandarizar la captura de información"
              }
            ],
            "questionCount": 10
          }
        }
      }
    ]
  },
  "onedrive-descubre": {
    "toolId": "onedrive",
    "toolName": "OneDrive",
    "levelId": "descubre",
    "levelName": "Descubre",
    "routeId": "onedrive-descubre",
    "steps": [
      {
        "id": "bienvenida",
        "number": 1,
        "title": "Bienvenida a Onedrive",
        "shortDescription": "Reconocer OneDrive como herramienta institucional de almacenamiento personal en la nube para conservar, consultar y compartir archivos de trabajo.",
        "block": 1,
        "type": "welcome",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Conociendo One Drive en el TFJA",
          "title": "Bienvenida a Onedrive",
          "description": "Reconocer OneDrive como herramienta institucional de almacenamiento personal en la nube para conservar, consultar y compartir archivos de trabajo.",
          "bullets": [],
          "embedUrl": "https://tfjfagobmx-my.sharepoint.com/personal/buzon_sotic_tfja_gob_mx/_layouts/15/embed.aspx?UniqueId=8a365ee8-63a5-4868-9b0a-e5a5921b351f&nav=%7B%22playbackOptions%22%3A%7B%22startTimeInSeconds%22%3A0%7D%7D&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
        }
      },
      {
        "id": "paso-1",
        "number": 2,
        "title": "Tu oficina en la nube",
        "shortDescription": "Comprender cómo OneDrive permite acceder a documentos institucionales desde la web, el escritorio o dispositivos móviles usando la cuenta institucional.",
        "block": 1,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Conociendo One Drive en el TFJA",
          "title": "Tu oficina en la nube",
          "description": "Comprender cómo OneDrive permite acceder a documentos institucionales desde la web, el escritorio o dispositivos móviles usando la cuenta institucional.",
          "bullets": [],
          "image": "/course-assets/onedrive/images/paso-1-onedrive.png",
          "imageFirst": false
        }
      },
      {
        "id": "paso-2",
        "number": 3,
        "title": "Entra a tu espacio One Drive",
        "shortDescription": "Ingresar al espacio institucional de OneDrive e identificar archivos, carpetas, elementos recientes, compartidos y papelera de reciclaje.",
        "block": 1,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Conociendo One Drive en el TFJA",
          "title": "Entra a tu espacio One Drive",
          "description": "Ingresar al espacio institucional de OneDrive e identificar archivos, carpetas, elementos recientes, compartidos y papelera de reciclaje.",
          "bullets": [],
          "embedUrl": "https://tfjfagobmx-my.sharepoint.com/personal/buzon_sotic_tfja_gob_mx/_layouts/15/embed.aspx?UniqueId=5113eb52-c5a5-41da-9e0b-fd054112b092&nav=%7B%22playbackOptions%22%3A%7B%22startTimeInSeconds%22%3A0%7D%7D&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
        }
      },
      {
        "id": "paso-3",
        "number": 4,
        "title": "Comparte un archivo",
        "shortDescription": "Compartir un archivo desde OneDrive mediante vínculo o invitación, definiendo destinatarios y permisos básicos de acceso.",
        "block": 1,
        "type": "content",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Conociendo One Drive en el TFJA",
          "title": "Comparte un archivo",
          "description": "Compartir un archivo desde OneDrive mediante vínculo o invitación, definiendo destinatarios y permisos básicos de acceso.",
          "bullets": [],
          "embedUrl": "https://tfjfagobmx-my.sharepoint.com/personal/buzon_sotic_tfja_gob_mx/_layouts/15/embed.aspx?UniqueId=a085dab4-ecd8-4af6-a81d-c54e520a39e2&nav=%7B%22playbackOptions%22%3A%7B%22startTimeInSeconds%22%3A0%7D%7D&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
        }
      },
      {
        "id": "paso-4",
        "number": 5,
        "title": "Adjuntar archivos vs compartir vínculos",
        "shortDescription": "Distinguir entre adjuntar una copia de un archivo y compartir un vínculo para trabajar sobre una versión actualizada y controlada.",
        "block": 1,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Conociendo One Drive en el TFJA",
          "title": "Adjuntar archivos vs compartir vínculos",
          "description": "Distinguir entre adjuntar una copia de un archivo y compartir un vínculo para trabajar sobre una versión actualizada y controlada.",
          "bullets": [],
          "embedUrl": "https://tfjfagobmx-my.sharepoint.com/personal/buzon_sotic_tfja_gob_mx/_layouts/15/embed.aspx?UniqueId=bbeb5a40-f2ba-4a76-bd8e-4bd51b3afe2a&nav=%7B%22playbackOptions%22%3A%7B%22startTimeInSeconds%22%3A0%7D%7D&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
        }
      },
      {
        "id": "evaluacion-1",
        "number": 6,
        "title": "Evaluación 1",
        "shortDescription": "Checkpoint obligatorio del Bloque 1.",
        "block": 1,
        "type": "evaluation",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Evaluación Bloque 1",
          "title": "Evaluación 1",
          "description": "Responde las tres preguntas clave para desbloquear el siguiente bloque.",
        
          "checkpointEvaluation": {
            "id": "onedrive-descubre-evaluacion-1",
            "type": "checkpoint-1",
            "title": "Evaluación 1",
            "minimumCorrectAnswers": 2,
            "maxAttempts": 2,
            "questions": [
              {
                "id": "H-03-01-01",
                "question": "¿Cuál es la función principal de OneDrive en el entorno institucional?",
                "options": [
                  "Guardar, consultar y compartir archivos de trabajo en la nube institucional",
                  "Reemplazar todos los sistemas jurisdiccionales",
                  "Crear reuniones presenciales automáticamente",
                  "Modificar el organigrama del Tribunal"
                ],
                "correctAnswer": "Guardar, consultar y compartir archivos de trabajo en la nube institucional"
              },
              {
                "id": "H-03-01-02",
                "question": "¿Qué ventaja ofrece trabajar con OneDrive?",
                "options": [
                  "Acceder a documentos desde distintos dispositivos con la cuenta institucional",
                  "Guardar archivos solo en una memoria USB",
                  "Imprimir documentos sin revisarlos",
                  "Eliminar la necesidad de permisos"
                ],
                "correctAnswer": "Acceder a documentos desde distintos dispositivos con la cuenta institucional"
              },
              {
                "id": "H-03-01-03",
                "question": "¿Qué ventaja tiene compartir un vínculo en lugar de enviar muchas copias adjuntas?",
                "options": [
                  "Permite trabajar sobre una versión actualizada y con permisos controlados",
                  "Impide que el archivo se actualice",
                  "Duplica automáticamente documentos sin control",
                  "Oculta el archivo al propietario"
                ],
                "correctAnswer": "Permite trabajar sobre una versión actualizada y con permisos controlados"
              }
            ]
          }
        }
      },
      {
        "id": "paso-5",
        "number": 1,
        "title": "Estructura de carpetas jerárquicas y mejores prácticas de nomenclatura.",
        "shortDescription": "Organizar archivos mediante carpetas jerárquicas y nombres claros que faciliten la búsqueda, consulta y seguimiento documental.",
        "block": 2,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Organización eficiente y sincronización",
          "title": "Estructura de carpetas jerárquicas y mejores prácticas de nomenclatura.",
          "description": "Organizar archivos mediante carpetas jerárquicas y nombres claros que faciliten la búsqueda, consulta y seguimiento documental.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "paso-6",
        "number": 2,
        "title": "Cómo usar la sincronización local (Cliente de escritorio) vs. uso exclusivo en web.",
        "shortDescription": "Diferenciar el uso de OneDrive en la web y mediante el cliente de sincronización de escritorio, identificando cuándo conviene cada modalidad.",
        "block": 2,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Organización eficiente y sincronización",
          "title": "Cómo usar la sincronización local (Cliente de escritorio) vs. uso exclusivo en web.",
          "description": "Diferenciar el uso de OneDrive en la web y mediante el cliente de sincronización de escritorio, identificando cuándo conviene cada modalidad.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "paso-7",
        "number": 3,
        "title": "Uso de la papelera de reciclaje y recuperación de versiones anteriores de archivos (sin importar el formato).",
        "shortDescription": "Recuperar archivos eliminados y restaurar versiones anteriores para corregir errores o regresar a un estado previo del documento.",
        "block": 2,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Organización eficiente y sincronización",
          "title": "Uso de la papelera de reciclaje y recuperación de versiones anteriores de archivos (sin importar el formato).",
          "description": "Recuperar archivos eliminados y restaurar versiones anteriores para corregir errores o regresar a un estado previo del documento.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "paso-8",
        "number": 4,
        "title": "Configuración de archivos \"Siempre disponibles en este dispositivo\" vs. \"Liberar espacio\".",
        "shortDescription": "Configurar la disponibilidad de archivos en el dispositivo para equilibrar acceso sin conexión, espacio local y consulta en la nube.",
        "block": 2,
        "type": "content",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Organización eficiente y sincronización",
          "title": "Configuración de archivos \"Siempre disponibles en este dispositivo\" vs. \"Liberar espacio\".",
          "description": "Configurar la disponibilidad de archivos en el dispositivo para equilibrar acceso sin conexión, espacio local y consulta en la nube.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "paso-9",
        "number": 5,
        "title": "Uso de etiquetas y búsqueda avanzada dentro de OneDrive.",
        "shortDescription": "Localizar documentos mediante búsqueda, filtros, etiquetas o palabras clave dentro de OneDrive para agilizar la consulta de información.",
        "block": 2,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Organización eficiente y sincronización",
          "title": "Uso de etiquetas y búsqueda avanzada dentro de OneDrive.",
          "description": "Localizar documentos mediante búsqueda, filtros, etiquetas o palabras clave dentro de OneDrive para agilizar la consulta de información.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "evaluacion-2",
        "number": 6,
        "title": "Evaluación 2",
        "shortDescription": "Checkpoint obligatorio del Bloque 2.",
        "block": 2,
        "type": "evaluation",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Evaluación Bloque 2",
          "title": "Evaluación 2",
          "description": "Responde las tres preguntas clave para desbloquear el siguiente bloque.",
         
          "checkpointEvaluation": {
            "id": "onedrive-descubre-evaluacion-2",
            "type": "checkpoint-2",
            "title": "Evaluación 2",
            "minimumCorrectAnswers": 2,
            "maxAttempts": 2,
            "questions": [
              {
                "id": "H-03-01-04",
                "question": "¿Qué permite el cliente de sincronización de OneDrive?",
                "options": [
                  "Trabajar con archivos de la nube desde el explorador local cuando esté configurado",
                  "Cambiar la contraseña institucional",
                  "Eliminar todos los vínculos compartidos",
                  "Crear canales de Teams"
                ],
                "correctAnswer": "Trabajar con archivos de la nube desde el explorador local cuando esté configurado"
              },
              {
                "id": "H-03-01-05",
                "question": "¿Para qué sirve el historial de versiones en OneDrive?",
                "options": [
                  "Para recuperar o revisar estados anteriores de un archivo",
                  "Para cambiar el nombre del usuario",
                  "Para borrar permisos institucionales",
                  "Para crear reuniones de Teams"
                ],
                "correctAnswer": "Para recuperar o revisar estados anteriores de un archivo"
              },
              {
                "id": "H-03-01-06",
                "question": "La opción de liberar espacio ayuda a:",
                "options": [
                  "Mantener el archivo en la nube y reducir uso de almacenamiento local",
                  "Eliminar definitivamente el archivo",
                  "Compartirlo con usuarios externos sin permiso",
                  "Convertirlo en imagen"
                ],
                "correctAnswer": "Mantener el archivo en la nube y reducir uso de almacenamiento local"
              }
            ]
          }
        }
      },
      {
        "id": "paso-10",
        "number": 1,
        "title": "Diferencia entre compartir enlace de edición vs. solo lectura",
        "shortDescription": "Elegir entre permisos de edición y solo lectura al compartir archivos, de acuerdo con el nivel de colaboración requerido.",
        "block": 3,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Seguridad y Colaboración Avanzada",
          "title": "Diferencia entre compartir enlace de edición vs. solo lectura",
          "description": "Elegir entre permisos de edición y solo lectura al compartir archivos, de acuerdo con el nivel de colaboración requerido.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "paso-11",
        "number": 2,
        "title": "Gestión de caducidad de enlaces y contraseñas para invitados externos",
        "shortDescription": "Aplicar controles de seguridad en vínculos compartidos, como caducidad o restricciones de acceso, cuando se trabaje con personas externas autorizadas.",
        "block": 3,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Seguridad y Colaboración Avanzada",
          "title": "Gestión de caducidad de enlaces y contraseñas para invitados externos",
          "description": "Aplicar controles de seguridad en vínculos compartidos, como caducidad o restricciones de acceso, cuando se trabaje con personas externas autorizadas.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "paso-12",
        "number": 3,
        "title": "Uso de la carpeta \"Compartido conmigo\" (organización de archivos ajenos)",
        "shortDescription": "Consultar y organizar archivos recibidos en la sección Compartido conmigo sin alterar la ubicación original del documento.",
        "block": 3,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Seguridad y Colaboración Avanzada",
          "title": "Uso de la carpeta \"Compartido conmigo\" (organización de archivos ajenos)",
          "description": "Consultar y organizar archivos recibidos en la sección Compartido conmigo sin alterar la ubicación original del documento.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "paso-13",
        "number": 4,
        "title": "Notificaciones de actividad: Cómo monitorear cambios en tus documentos compartidos",
        "shortDescription": "Monitorear cambios y actividad en documentos compartidos para dar seguimiento a modificaciones relevantes.",
        "block": 3,
        "type": "content",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Seguridad y Colaboración Avanzada",
          "title": "Notificaciones de actividad: Cómo monitorear cambios en tus documentos compartidos",
          "description": "Monitorear cambios y actividad en documentos compartidos para dar seguimiento a modificaciones relevantes.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "paso-14",
        "number": 5,
        "title": "Solución de conflictos de sincronización (qué hacer cuando hay dos versiones de un archivo",
        "shortDescription": "Identificar y resolver conflictos de sincronización cuando existan versiones duplicadas o cambios no conciliados en un archivo.",
        "block": 3,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Seguridad y Colaboración Avanzada",
          "title": "Solución de conflictos de sincronización (qué hacer cuando hay dos versiones de un archivo",
          "description": "Identificar y resolver conflictos de sincronización cuando existan versiones duplicadas o cambios no conciliados en un archivo.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "evaluacion-final",
        "number": 6,
        "title": "Evaluación final",
        "shortDescription": "Evaluación final de la ruta.",
        "block": 3,
        "type": "evaluation",
        "estimatedTime": "10 min",
        "content": {
          "eyebrow": "Evaluación final",
          "title": "Evaluación final",
          "description": "Responde diez preguntas del banco de la herramienta y ruta.",
          "bullets": [
            "10 preguntas sin repetir.",
            "Aprobación mínima: 7 respuestas correctas.",
            "Máximo 2 intentos."
          ],
          "finalEvaluation": {
            "id": "onedrive-descubre-evaluacion-final",
            "type": "final",
            "title": "Evaluación final",
            "timeLimitMinutes": 10,
            "minimumCorrectAnswers": 7,
            "maxAttempts": 2,
            "questions": [
              {
                "id": "H-03-01-01",
                "question": "¿Cuál es la función principal de OneDrive en el entorno institucional?",
                "options": [
                  "Guardar, consultar y compartir archivos de trabajo en la nube institucional",
                  "Reemplazar todos los sistemas jurisdiccionales",
                  "Crear reuniones presenciales automáticamente",
                  "Modificar el organigrama del Tribunal"
                ],
                "correctAnswer": "Guardar, consultar y compartir archivos de trabajo en la nube institucional"
              },
              {
                "id": "H-03-01-02",
                "question": "¿Qué ventaja ofrece trabajar con OneDrive?",
                "options": [
                  "Acceder a documentos desde distintos dispositivos con la cuenta institucional",
                  "Guardar archivos solo en una memoria USB",
                  "Imprimir documentos sin revisarlos",
                  "Eliminar la necesidad de permisos"
                ],
                "correctAnswer": "Acceder a documentos desde distintos dispositivos con la cuenta institucional"
              },
              {
                "id": "H-03-01-03",
                "question": "¿Qué ventaja tiene compartir un vínculo en lugar de enviar muchas copias adjuntas?",
                "options": [
                  "Permite trabajar sobre una versión actualizada y con permisos controlados",
                  "Impide que el archivo se actualice",
                  "Duplica automáticamente documentos sin control",
                  "Oculta el archivo al propietario"
                ],
                "correctAnswer": "Permite trabajar sobre una versión actualizada y con permisos controlados"
              },
              {
                "id": "H-03-01-04",
                "question": "¿Qué permite el cliente de sincronización de OneDrive?",
                "options": [
                  "Trabajar con archivos de la nube desde el explorador local cuando esté configurado",
                  "Cambiar la contraseña institucional",
                  "Eliminar todos los vínculos compartidos",
                  "Crear canales de Teams"
                ],
                "correctAnswer": "Trabajar con archivos de la nube desde el explorador local cuando esté configurado"
              },
              {
                "id": "H-03-01-05",
                "question": "¿Para qué sirve el historial de versiones en OneDrive?",
                "options": [
                  "Para recuperar o revisar estados anteriores de un archivo",
                  "Para cambiar el nombre del usuario",
                  "Para borrar permisos institucionales",
                  "Para crear reuniones de Teams"
                ],
                "correctAnswer": "Para recuperar o revisar estados anteriores de un archivo"
              },
              {
                "id": "H-03-01-06",
                "question": "La opción de liberar espacio ayuda a:",
                "options": [
                  "Mantener el archivo en la nube y reducir uso de almacenamiento local",
                  "Eliminar definitivamente el archivo",
                  "Compartirlo con usuarios externos sin permiso",
                  "Convertirlo en imagen"
                ],
                "correctAnswer": "Mantener el archivo en la nube y reducir uso de almacenamiento local"
              },
              {
                "id": "H-03-01-07",
                "question": "OneDrive debe usarse para resguardar documentos de trabajo de forma:",
                "options": [
                  "Ordenada, accesible y controlada",
                  "Improvisada y sin nombres claros",
                  "Exclusivamente impresa",
                  "Sin relación con la cuenta institucional"
                ],
                "correctAnswer": "Ordenada, accesible y controlada"
              },
              {
                "id": "H-03-01-08",
                "question": "Trabajar en la nube facilita que el usuario:",
                "options": [
                  "Consulte archivos desde web, escritorio o móvil según disponibilidad",
                  "Pierda toda trazabilidad",
                  "Evite guardar documentos",
                  "Comparta sin permisos"
                ],
                "correctAnswer": "Consulte archivos desde web, escritorio o móvil según disponibilidad"
              },
              {
                "id": "H-03-01-09",
                "question": "En OneDrive se pueden consultar secciones como:",
                "options": [
                  "Archivos, carpetas, recientes, compartidos y papelera",
                  "Solo contactos telefónicos",
                  "Únicamente fondos de pantalla",
                  "Exclusivamente reuniones vencidas"
                ],
                "correctAnswer": "Archivos, carpetas, recientes, compartidos y papelera"
              },
              {
                "id": "H-03-01-10",
                "question": "Al compartir un archivo se debe definir:",
                "options": [
                  "Quién accede y con qué permiso",
                  "El color del icono",
                  "El tamaño del monitor",
                  "La contraseña de otro usuario"
                ],
                "correctAnswer": "Quién accede y con qué permiso"
              },
              {
                "id": "H-03-01-11",
                "question": "Enviar un archivo como adjunto genera principalmente:",
                "options": [
                  "Una copia independiente del documento",
                  "Un vínculo actualizado siempre",
                  "Un permiso de solo lectura automático",
                  "Un historial compartido completo"
                ],
                "correctAnswer": "Una copia independiente del documento"
              },
              {
                "id": "H-03-01-12",
                "question": "Si otra persona solo debe consultar el archivo, conviene asignar:",
                "options": [
                  "Permiso de visualización o solo lectura",
                  "Permiso de propietario",
                  "Edición sin restricciones",
                  "Acceso público obligatorio"
                ],
                "correctAnswer": "Permiso de visualización o solo lectura"
              },
              {
                "id": "H-03-01-13",
                "question": "Una estructura jerárquica de carpetas ayuda a:",
                "options": [
                  "Encontrar información y mantener orden documental",
                  "Duplicar archivos sin control",
                  "Cambiar el contenido automáticamente",
                  "Ocultar documentos institucionales"
                ],
                "correctAnswer": "Encontrar información y mantener orden documental"
              },
              {
                "id": "H-03-01-14",
                "question": "Un nombre de archivo claro debe incluir:",
                "options": [
                  "Datos que permitan identificar contenido, fecha o versión cuando aplique",
                  "Solo palabras genéricas como final",
                  "Caracteres confusos sin contexto",
                  "El nombre de otra herramienta"
                ],
                "correctAnswer": "Datos que permitan identificar contenido, fecha o versión cuando aplique"
              },
              {
                "id": "H-03-01-15",
                "question": "El uso web de OneDrive es conveniente cuando se requiere:",
                "options": [
                  "Acceso desde navegador sin depender del explorador local",
                  "Instalar impresoras",
                  "Cambiar permisos de red",
                  "Eliminar la cuenta institucional"
                ],
                "correctAnswer": "Acceso desde navegador sin depender del explorador local"
              },
              {
                "id": "H-03-01-16",
                "question": "La papelera de OneDrive puede ayudar a:",
                "options": [
                  "Recuperar archivos eliminados dentro del periodo disponible",
                  "Crear archivos sin nombre",
                  "Reemplazar la revisión documental",
                  "Ocultar permisos"
                ],
                "correctAnswer": "Recuperar archivos eliminados dentro del periodo disponible"
              },
              {
                "id": "H-03-01-17",
                "question": "Marcar un archivo como siempre disponible permite:",
                "options": [
                  "Conservar una copia local para acceso sin conexión",
                  "Eliminarlo de la nube",
                  "Compartirlo con toda la institución",
                  "Convertirlo en correo"
                ],
                "correctAnswer": "Conservar una copia local para acceso sin conexión"
              },
              {
                "id": "H-03-01-18",
                "question": "La búsqueda en OneDrive se facilita mediante:",
                "options": [
                  "Palabras clave, filtros o etiquetas cuando estén disponibles",
                  "Cambiar de monitor",
                  "Cerrar sesión constantemente",
                  "Crear copias sin nombre"
                ],
                "correctAnswer": "Palabras clave, filtros o etiquetas cuando estén disponibles"
              },
              {
                "id": "H-03-01-19",
                "question": "Un enlace de edición permite al destinatario:",
                "options": [
                  "Modificar el archivo si tiene permiso",
                  "Solo imprimirlo sin verlo",
                  "Eliminar la cuenta del propietario",
                  "Cambiar la estructura de OneDrive"
                ],
                "correctAnswer": "Modificar el archivo si tiene permiso"
              },
              {
                "id": "H-03-01-20",
                "question": "La caducidad de un enlace compartido sirve para:",
                "options": [
                  "Limitar temporalmente el acceso al archivo",
                  "Cambiar el contenido automáticamente",
                  "Crear carpetas de Teams",
                  "Eliminar el documento original"
                ],
                "correctAnswer": "Limitar temporalmente el acceso al archivo"
              },
              {
                "id": "H-03-01-21",
                "question": "Al compartir con externos autorizados, se debe cuidar:",
                "options": [
                  "Que el acceso sea limitado y pertinente",
                  "Que el vínculo sea público sin control",
                  "Que el documento no tenga nombre",
                  "Que todos puedan editar por defecto"
                ],
                "correctAnswer": "Que el acceso sea limitado y pertinente"
              },
              {
                "id": "H-03-01-22",
                "question": "La sección Compartido conmigo muestra:",
                "options": [
                  "Archivos que otras personas compartieron con el usuario",
                  "Únicamente archivos eliminados",
                  "Contraseñas guardadas",
                  "Todos los documentos del Tribunal"
                ],
                "correctAnswer": "Archivos que otras personas compartieron con el usuario"
              },
              {
                "id": "H-03-01-23",
                "question": "Las notificaciones de actividad ayudan a:",
                "options": [
                  "Monitorear cambios relevantes en documentos compartidos",
                  "Cambiar el formato del archivo",
                  "Eliminar permisos automáticamente",
                  "Crear evaluaciones"
                ],
                "correctAnswer": "Monitorear cambios relevantes en documentos compartidos"
              },
              {
                "id": "H-03-01-24",
                "question": "Un conflicto de sincronización puede ocurrir cuando:",
                "options": [
                  "Existen cambios no conciliados o versiones duplicadas",
                  "Se imprime un documento",
                  "Se cambia el color de una carpeta",
                  "Se cierra el navegador"
                ],
                "correctAnswer": "Existen cambios no conciliados o versiones duplicadas"
              },
              {
                "id": "H-03-01-25",
                "question": "Para revisar un documento sin modificarlo, el permiso más adecuado es:",
                "options": [
                  "Solo lectura",
                  "Edición total",
                  "Propietario",
                  "Administrador global"
                ],
                "correctAnswer": "Solo lectura"
              },
              {
                "id": "H-03-01-26",
                "question": "Un enlace sin control puede generar riesgo porque:",
                "options": [
                  "Mantiene acceso más allá de lo necesario",
                  "Mejora automáticamente la seguridad",
                  "Elimina todos los metadatos",
                  "Bloquea al propietario"
                ],
                "correctAnswer": "Mantiene acceso más allá de lo necesario"
              },
              {
                "id": "H-03-01-27",
                "question": "Organizar archivos compartidos implica:",
                "options": [
                  "Ubicarlos y consultarlos sin romper el acceso original",
                  "Mover archivos ajenos sin permiso",
                  "Cambiar sus propietarios siempre",
                  "Eliminar la sección compartida"
                ],
                "correctAnswer": "Ubicarlos y consultarlos sin romper el acceso original"
              },
              {
                "id": "H-03-01-28",
                "question": "Si un documento compartido cambia, una buena práctica es:",
                "options": [
                  "Revisar la actividad o versión para entender la modificación",
                  "Crear una copia final nueva sin verificar",
                  "Ignorar el cambio",
                  "Eliminar el archivo original"
                ],
                "correctAnswer": "Revisar la actividad o versión para entender la modificación"
              },
              {
                "id": "H-03-01-29",
                "question": "Ante dos versiones de un archivo, conviene:",
                "options": [
                  "Comparar, conservar la versión correcta y resolver el conflicto",
                  "Borrar ambas sin revisar",
                  "Compartir ambas como finales",
                  "Cambiar solo el color de la carpeta"
                ],
                "correctAnswer": "Comparar, conservar la versión correcta y resolver el conflicto"
              },
              {
                "id": "H-03-01-30",
                "question": "La colaboración segura en OneDrive requiere:",
                "options": [
                  "Permisos adecuados, destinatarios correctos y seguimiento de cambios",
                  "Compartir todo públicamente",
                  "Eliminar historial de versiones",
                  "Usar nombres ambiguos"
                ],
                "correctAnswer": "Permisos adecuados, destinatarios correctos y seguimiento de cambios"
              }
            ],
            "questionCount": 10
          }
        }
      }
    ]
  },
  "onedrive-potencia": {
    "toolId": "onedrive",
    "toolName": "OneDrive",
    "levelId": "potencia",
    "levelName": "Potencia",
    "routeId": "onedrive-potencia",
    "steps": [
      {
        "id": "bloque-1-paso-1",
        "number": 1,
        "title": "OneDrive vs. SharePoint: La gran diferencia (el enfoque personal/equipo vs. el enfoque documental institucional).",
        "shortDescription": "Distinguir cuándo utilizar OneDrive y cuándo utilizar SharePoint, considerando el enfoque personal, colaborativo o documental institucional.",
        "block": 1,
        "type": "welcome",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Integración y Contexto",
          "title": "OneDrive vs. SharePoint: La gran diferencia (el enfoque personal/equipo vs. el enfoque documental institucional).",
          "description": "Distinguir cuándo utilizar OneDrive y cuándo utilizar SharePoint, considerando el enfoque personal, colaborativo o documental institucional.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-2",
        "number": 2,
        "title": "Movimiento fluido: Cómo mover archivos de tu OneDrive personal a un sitio de SharePoint sin perder los permisos.",
        "shortDescription": "Mover archivos desde OneDrive hacia un sitio de SharePoint cuando el documento deba gestionarse como parte de un equipo o proceso institucional.",
        "block": 1,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Integración y Contexto",
          "title": "Movimiento fluido: Cómo mover archivos de tu OneDrive personal a un sitio de SharePoint sin perder los permisos.",
          "description": "Mover archivos desde OneDrive hacia un sitio de SharePoint cuando el documento deba gestionarse como parte de un equipo o proceso institucional.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-3",
        "number": 3,
        "title": "Uso de OneDrive en dispositivos móviles (escaneo de documentos con la app).",
        "shortDescription": "Utilizar la aplicación móvil de OneDrive para capturar, escanear y guardar documentos directamente en la nube institucional.",
        "block": 1,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Integración y Contexto",
          "title": "Uso de OneDrive en dispositivos móviles (escaneo de documentos con la app).",
          "description": "Utilizar la aplicación móvil de OneDrive para capturar, escanear y guardar documentos directamente en la nube institucional.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-4",
        "number": 4,
        "title": "Integración con Microsoft Teams: Dónde residen realmente los archivos que subes al chat.",
        "shortDescription": "Comprender dónde se almacenan los archivos compartidos en chats y equipos de Teams y su relación con OneDrive o SharePoint.",
        "block": 1,
        "type": "content",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Integración y Contexto",
          "title": "Integración con Microsoft Teams: Dónde residen realmente los archivos que subes al chat.",
          "description": "Comprender dónde se almacenan los archivos compartidos en chats y equipos de Teams y su relación con OneDrive o SharePoint.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-1-paso-5",
        "number": 5,
        "title": "Acceso sin conexión en dispositivos móviles y tablets.",
        "shortDescription": "Configurar el acceso sin conexión a archivos en dispositivos móviles o tabletas para consultarlos cuando no exista conectividad disponible.",
        "block": 1,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Integración y Contexto",
          "title": "Acceso sin conexión en dispositivos móviles y tablets.",
          "description": "Configurar el acceso sin conexión a archivos en dispositivos móviles o tabletas para consultarlos cuando no exista conectividad disponible.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "evaluacion-1",
        "number": 6,
        "title": "Evaluación 1",
        "shortDescription": "Checkpoint obligatorio del Bloque 1.",
        "block": 1,
        "type": "evaluation",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Evaluación Bloque 1",
          "title": "Evaluación 1",
          "description": "Responde las tres preguntas clave para desbloquear el siguiente bloque.",
        
          "checkpointEvaluation": {
            "id": "onedrive-potencia-evaluacion-1",
            "type": "checkpoint-1",
            "title": "Evaluación 1",
            "minimumCorrectAnswers": 2,
            "maxAttempts": 2,
            "questions": [
              {
                "id": "H-03-02-01",
                "question": "¿Cuál es una diferencia práctica entre OneDrive y SharePoint?",
                "options": [
                  "OneDrive se orienta al espacio personal de trabajo; SharePoint al trabajo documental de equipos o sitios",
                  "OneDrive solo sirve para imprimir",
                  "SharePoint solo guarda fotografías personales",
                  "No existe diferencia de uso"
                ],
                "correctAnswer": "OneDrive se orienta al espacio personal de trabajo; SharePoint al trabajo documental de equipos o sitios"
              },
              {
                "id": "H-03-02-02",
                "question": "¿Dónde suelen residir los archivos compartidos en un chat de Teams?",
                "options": [
                  "En OneDrive del remitente o en almacenamiento asociado según el contexto",
                  "En la papelera local siempre",
                  "En una memoria USB del destinatario",
                  "En una carpeta sin permisos"
                ],
                "correctAnswer": "En OneDrive del remitente o en almacenamiento asociado según el contexto"
              },
              {
                "id": "H-03-02-03",
                "question": "¿Qué puede facilitar la app móvil de OneDrive?",
                "options": [
                  "Escanear, capturar y guardar documentos en la nube institucional",
                  "Cambiar la nómina institucional",
                  "Crear usuarios de red",
                  "Eliminar todas las versiones"
                ],
                "correctAnswer": "Escanear, capturar y guardar documentos en la nube institucional"
              }
            ]
          }
        }
      },
      {
        "id": "bloque-2-paso-1",
        "number": 1,
        "title": "Introducción a Power Automate básico: \"Guardar adjuntos de Outlook automáticamente en una carpeta de OneDrive\". (Esto no es Word/Excel, es pura gestión).",
        "shortDescription": "Reconocer una automatización básica para guardar adjuntos de Outlook en una carpeta de OneDrive y reducir tareas repetitivas de gestión documental.",
        "block": 2,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Automatización y Flujo de Trabajo",
          "title": "Introducción a Power Automate básico: \"Guardar adjuntos de Outlook automáticamente en una carpeta de OneDrive\". (Esto no es Word/Excel, es pura gestión).",
          "description": "Reconocer una automatización básica para guardar adjuntos de Outlook en una carpeta de OneDrive y reducir tareas repetitivas de gestión documental.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-2",
        "number": 2,
        "title": "Flujos de aprobación: Solicitar que alguien firme o apruebe un archivo directamente en OneDrive.",
        "shortDescription": "Identificar cómo solicitar revisión, firma o aprobación de un archivo almacenado en OneDrive dentro de un flujo de trabajo institucional.",
        "block": 2,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Automatización y Flujo de Trabajo",
          "title": "Flujos de aprobación: Solicitar que alguien firme o apruebe un archivo directamente en OneDrive.",
          "description": "Identificar cómo solicitar revisión, firma o aprobación de un archivo almacenado en OneDrive dentro de un flujo de trabajo institucional.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-3",
        "number": 3,
        "title": "Uso de \"Solicitar archivos\": Cómo crear un enlace para que personas externas te envíen archivos sin que ellos vean tu carpeta.",
        "shortDescription": "Usar la función de solicitud de archivos para recibir documentos de terceros sin exponer el contenido de una carpeta completa.",
        "block": 2,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Automatización y Flujo de Trabajo",
          "title": "Uso de \"Solicitar archivos\": Cómo crear un enlace para que personas externas te envíen archivos sin que ellos vean tu carpeta.",
          "description": "Usar la función de solicitud de archivos para recibir documentos de terceros sin exponer el contenido de una carpeta completa.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-4",
        "number": 4,
        "title": "Gestión de archivos en la nube y limpieza de almacenamiento (análisis de qué ocupa más espacio).",
        "shortDescription": "Revisar el uso de almacenamiento en la nube y aplicar criterios de limpieza documental para mantener un espacio ordenado y funcional.",
        "block": 2,
        "type": "content",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Automatización y Flujo de Trabajo",
          "title": "Gestión de archivos en la nube y limpieza de almacenamiento (análisis de qué ocupa más espacio).",
          "description": "Revisar el uso de almacenamiento en la nube y aplicar criterios de limpieza documental para mantener un espacio ordenado y funcional.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-2-paso-5",
        "number": 5,
        "title": "Uso de \"Colecciones\" o vistas personalizadas para administrar grandes volúmenes de documentos.",
        "shortDescription": "Utilizar colecciones o vistas personalizadas para administrar grandes volúmenes de documentos y facilitar su consulta.",
        "block": 2,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Automatización y Flujo de Trabajo",
          "title": "Uso de \"Colecciones\" o vistas personalizadas para administrar grandes volúmenes de documentos.",
          "description": "Utilizar colecciones o vistas personalizadas para administrar grandes volúmenes de documentos y facilitar su consulta.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "evaluacion-2",
        "number": 6,
        "title": "Evaluación 2",
        "shortDescription": "Checkpoint obligatorio del Bloque 2.",
        "block": 2,
        "type": "evaluation",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Evaluación Bloque 2",
          "title": "Evaluación 2",
          "description": "Responde las tres preguntas clave para desbloquear el siguiente bloque.",
          
          "checkpointEvaluation": {
            "id": "onedrive-potencia-evaluacion-2",
            "type": "checkpoint-2",
            "title": "Evaluación 2",
            "minimumCorrectAnswers": 2,
            "maxAttempts": 2,
            "questions": [
              {
                "id": "H-03-02-04",
                "question": "¿Qué busca una automatización básica con OneDrive y Outlook?",
                "options": [
                  "Reducir tareas repetitivas, por ejemplo guardar adjuntos en una carpeta",
                  "Eliminar todos los correos",
                  "Cambiar el cargo del usuario",
                  "Crear documentos sin permisos"
                ],
                "correctAnswer": "Reducir tareas repetitivas, por ejemplo guardar adjuntos en una carpeta"
              },
              {
                "id": "H-03-02-05",
                "question": "Un flujo de aprobación sobre un archivo sirve para:",
                "options": [
                  "Solicitar revisión o autorización con seguimiento",
                  "Compartir documentos sin control",
                  "Eliminar la trazabilidad",
                  "Cambiar el contenido sin registro"
                ],
                "correctAnswer": "Solicitar revisión o autorización con seguimiento"
              },
              {
                "id": "H-03-02-06",
                "question": "La función de solicitar archivos permite:",
                "options": [
                  "Recibir documentos sin mostrar el contenido de la carpeta al remitente",
                  "Dar acceso total a toda la carpeta",
                  "Eliminar permisos del propietario",
                  "Convertir archivos en reuniones"
                ],
                "correctAnswer": "Recibir documentos sin mostrar el contenido de la carpeta al remitente"
              }
            ]
          }
        }
      },
      {
        "id": "bloque-3-paso-1",
        "number": 1,
        "title": "Gestión avanzada de PDF: Lectura y anotación en el visor nativo de OneDrive",
        "shortDescription": "Consultar, leer y realizar anotaciones básicas en archivos PDF desde el visor de OneDrive cuando la función esté disponible.",
        "block": 3,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Herramientas Pro y PDF",
          "title": "Gestión avanzada de PDF: Lectura y anotación en el visor nativo de OneDrive",
          "description": "Consultar, leer y realizar anotaciones básicas en archivos PDF desde el visor de OneDrive cuando la función esté disponible.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-2",
        "number": 2,
        "title": "Tu idea: Cómo separar o combinar PDFs usando herramientas integradas en el flujo de OneDrive",
        "shortDescription": "Identificar alternativas de flujo para separar, combinar u organizar archivos PDF desde herramientas integradas o compatibles con OneDrive.",
        "block": 3,
        "type": "content",
        "estimatedTime": "3 min",
        "content": {
          "eyebrow": "Herramientas Pro y PDF",
          "title": "Tu idea: Cómo separar o combinar PDFs usando herramientas integradas en el flujo de OneDrive",
          "description": "Identificar alternativas de flujo para separar, combinar u organizar archivos PDF desde herramientas integradas o compatibles con OneDrive.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-3",
        "number": 3,
        "title": "Conversión rápida de archivos (imágenes a PDF) usando la app móvil sincronizada con OneDrive",
        "shortDescription": "Convertir imágenes o capturas en archivos PDF mediante la aplicación móvil sincronizada con OneDrive.",
        "block": 3,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Herramientas Pro y PDF",
          "title": "Conversión rápida de archivos (imágenes a PDF) usando la app móvil sincronizada con OneDrive",
          "description": "Convertir imágenes o capturas en archivos PDF mediante la aplicación móvil sincronizada con OneDrive.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-4",
        "number": 4,
        "title": "Auditoría de archivos: Revisar quién ha accedido y cuándo a un documento sensible",
        "shortDescription": "Revisar actividad, accesos y permisos de un documento sensible para verificar quién ha interactuado con el archivo.",
        "block": 3,
        "type": "content",
        "estimatedTime": "5 min",
        "content": {
          "eyebrow": "Herramientas Pro y PDF",
          "title": "Auditoría de archivos: Revisar quién ha accedido y cuándo a un documento sensible",
          "description": "Revisar actividad, accesos y permisos de un documento sensible para verificar quién ha interactuado con el archivo.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "bloque-3-paso-5",
        "number": 5,
        "title": "Cierre: Buenas prácticas de \"higiene digital\" para el servidor público",
        "shortDescription": "Aplicar buenas prácticas de higiene digital en OneDrive mediante nomenclatura clara, limpieza periódica, permisos correctos y resguardo responsable de la información.",
        "block": 3,
        "type": "content",
        "estimatedTime": "4 min",
        "content": {
          "eyebrow": "Herramientas Pro y PDF",
          "title": "Cierre: Buenas prácticas de \"higiene digital\" para el servidor público",
          "description": "Aplicar buenas prácticas de higiene digital en OneDrive mediante nomenclatura clara, limpieza periódica, permisos correctos y resguardo responsable de la información.",
          "bullets": [],
          "contentPlaceholder": "Contenido multimedia por integrar"
        }
      },
      {
        "id": "evaluacion-final",
        "number": 6,
        "title": "Evaluación final",
        "shortDescription": "Evaluación final de la ruta.",
        "block": 3,
        "type": "evaluation",
        "estimatedTime": "10 min",
        "content": {
          "eyebrow": "Evaluación final",
          "title": "Evaluación final",
          "description": "Responde diez preguntas del banco de la herramienta y ruta.",
          "bullets": [
            "10 preguntas sin repetir.",
            "Aprobación mínima: 7 respuestas correctas.",
            "Máximo 2 intentos."
          ],
          "finalEvaluation": {
            "id": "onedrive-potencia-evaluacion-final",
            "type": "final",
            "title": "Evaluación final",
            "timeLimitMinutes": 10,
            "minimumCorrectAnswers": 7,
            "maxAttempts": 2,
            "questions": [
              {
                "id": "H-03-02-01",
                "question": "¿Cuál es una diferencia práctica entre OneDrive y SharePoint?",
                "options": [
                  "OneDrive se orienta al espacio personal de trabajo; SharePoint al trabajo documental de equipos o sitios",
                  "OneDrive solo sirve para imprimir",
                  "SharePoint solo guarda fotografías personales",
                  "No existe diferencia de uso"
                ],
                "correctAnswer": "OneDrive se orienta al espacio personal de trabajo; SharePoint al trabajo documental de equipos o sitios"
              },
              {
                "id": "H-03-02-02",
                "question": "¿Dónde suelen residir los archivos compartidos en un chat de Teams?",
                "options": [
                  "En OneDrive del remitente o en almacenamiento asociado según el contexto",
                  "En la papelera local siempre",
                  "En una memoria USB del destinatario",
                  "En una carpeta sin permisos"
                ],
                "correctAnswer": "En OneDrive del remitente o en almacenamiento asociado según el contexto"
              },
              {
                "id": "H-03-02-03",
                "question": "¿Qué puede facilitar la app móvil de OneDrive?",
                "options": [
                  "Escanear, capturar y guardar documentos en la nube institucional",
                  "Cambiar la nómina institucional",
                  "Crear usuarios de red",
                  "Eliminar todas las versiones"
                ],
                "correctAnswer": "Escanear, capturar y guardar documentos en la nube institucional"
              },
              {
                "id": "H-03-02-04",
                "question": "¿Qué busca una automatización básica con OneDrive y Outlook?",
                "options": [
                  "Reducir tareas repetitivas, por ejemplo guardar adjuntos en una carpeta",
                  "Eliminar todos los correos",
                  "Cambiar el cargo del usuario",
                  "Crear documentos sin permisos"
                ],
                "correctAnswer": "Reducir tareas repetitivas, por ejemplo guardar adjuntos en una carpeta"
              },
              {
                "id": "H-03-02-05",
                "question": "Un flujo de aprobación sobre un archivo sirve para:",
                "options": [
                  "Solicitar revisión o autorización con seguimiento",
                  "Compartir documentos sin control",
                  "Eliminar la trazabilidad",
                  "Cambiar el contenido sin registro"
                ],
                "correctAnswer": "Solicitar revisión o autorización con seguimiento"
              },
              {
                "id": "H-03-02-06",
                "question": "La función de solicitar archivos permite:",
                "options": [
                  "Recibir documentos sin mostrar el contenido de la carpeta al remitente",
                  "Dar acceso total a toda la carpeta",
                  "Eliminar permisos del propietario",
                  "Convertir archivos en reuniones"
                ],
                "correctAnswer": "Recibir documentos sin mostrar el contenido de la carpeta al remitente"
              },
              {
                "id": "H-03-02-07",
                "question": "Conviene mover un archivo a SharePoint cuando:",
                "options": [
                  "Debe gestionarse como parte de un equipo, proceso o sitio institucional",
                  "Solo lo usará una persona de forma temporal",
                  "Debe ocultarse sin permisos",
                  "Ya no se va a consultar nunca"
                ],
                "correctAnswer": "Debe gestionarse como parte de un equipo, proceso o sitio institucional"
              },
              {
                "id": "H-03-02-08",
                "question": "Mover archivos de OneDrive a SharePoint debe hacerse cuidando:",
                "options": [
                  "Ubicación, permisos y continuidad del acceso",
                  "Cambiar nombres al azar",
                  "Eliminar el historial sin revisar",
                  "Crear múltiples copias finales"
                ],
                "correctAnswer": "Ubicación, permisos y continuidad del acceso"
              },
              {
                "id": "H-03-02-09",
                "question": "El escaneo móvil resulta útil para:",
                "options": [
                  "Digitalizar documentos físicos y guardarlos ordenadamente",
                  "Cambiar la configuración de Teams",
                  "Generar contraseñas",
                  "Eliminar archivos compartidos"
                ],
                "correctAnswer": "Digitalizar documentos físicos y guardarlos ordenadamente"
              },
              {
                "id": "H-03-02-10",
                "question": "Los archivos subidos a un chat o equipo deben entenderse como:",
                "options": [
                  "Archivos alojados en la nube con permisos según el contexto",
                  "Copias impresas obligatorias",
                  "Archivos sin propietario",
                  "Documentos sin control de acceso"
                ],
                "correctAnswer": "Archivos alojados en la nube con permisos según el contexto"
              },
              {
                "id": "H-03-02-11",
                "question": "El acceso sin conexión en móvil permite:",
                "options": [
                  "Consultar archivos seleccionados aunque no haya conexión disponible",
                  "Eliminar la versión en la nube",
                  "Compartir sin permisos",
                  "Cambiar la cuenta del usuario"
                ],
                "correctAnswer": "Consultar archivos seleccionados aunque no haya conexión disponible"
              },
              {
                "id": "H-03-02-12",
                "question": "OneDrive es más adecuado cuando el archivo está en etapa de:",
                "options": [
                  "Trabajo personal o preparación individual",
                  "Gestión formal de un equipo completo",
                  "Publicación institucional definitiva siempre",
                  "Administración de usuarios"
                ],
                "correctAnswer": "Trabajo personal o preparación individual"
              },
              {
                "id": "H-03-02-13",
                "question": "Un flujo que guarda adjuntos automáticamente ayuda a:",
                "options": [
                  "Reducir omisiones y ordenar documentos recibidos",
                  "Eliminar la revisión del contenido",
                  "Dar acceso público al buzón",
                  "Crear respuestas sin autorización"
                ],
                "correctAnswer": "Reducir omisiones y ordenar documentos recibidos"
              },
              {
                "id": "H-03-02-14",
                "question": "Una aprobación documental debe conservar:",
                "options": [
                  "Evidencia de solicitud, decisión y comentarios relevantes",
                  "Solo un mensaje informal",
                  "Contraseñas de participantes",
                  "Archivos sin nombre"
                ],
                "correctAnswer": "Evidencia de solicitud, decisión y comentarios relevantes"
              },
              {
                "id": "H-03-02-15",
                "question": "Solicitar archivos es útil cuando se necesita que alguien externo:",
                "options": [
                  "Cargue documentos sin ver otros archivos de la carpeta",
                  "Edite todos los documentos existentes",
                  "Acceda como propietario",
                  "Cambie permisos del sitio"
                ],
                "correctAnswer": "Cargue documentos sin ver otros archivos de la carpeta"
              },
              {
                "id": "H-03-02-16",
                "question": "Revisar qué ocupa más espacio ayuda a:",
                "options": [
                  "Liberar almacenamiento y ordenar información",
                  "Eliminar documentos vigentes sin criterio",
                  "Cambiar el correo institucional",
                  "Instalar aplicaciones externas"
                ],
                "correctAnswer": "Liberar almacenamiento y ordenar información"
              },
              {
                "id": "H-03-02-17",
                "question": "Las vistas personalizadas ayudan a:",
                "options": [
                  "Administrar grandes volúmenes de documentos según criterios de consulta",
                  "Borrar el historial de versiones",
                  "Cambiar las reglas del sistema",
                  "Ocultar todos los archivos compartidos"
                ],
                "correctAnswer": "Administrar grandes volúmenes de documentos según criterios de consulta"
              },
              {
                "id": "H-03-02-18",
                "question": "Un criterio de limpieza documental correcto es:",
                "options": [
                  "Conservar lo vigente, depurar duplicados y cuidar permisos",
                  "Borrar todo lo antiguo sin revisar",
                  "Guardar todo como final",
                  "Compartir todo con edición"
                ],
                "correctAnswer": "Conservar lo vigente, depurar duplicados y cuidar permisos"
              },
              {
                "id": "H-03-02-19",
                "question": "El visor de PDF de OneDrive puede servir para:",
                "options": [
                  "Consultar y anotar documentos cuando la función esté disponible",
                  "Modificar expedientes sin autorización",
                  "Crear usuarios nuevos",
                  "Cambiar metadatos de todos los archivos"
                ],
                "correctAnswer": "Consultar y anotar documentos cuando la función esté disponible"
              },
              {
                "id": "H-03-02-20",
                "question": "Separar o combinar PDF debe hacerse cuidando:",
                "options": [
                  "Orden, integridad y versión correcta del documento",
                  "Cambiar el contenido sin revisión",
                  "Eliminar páginas al azar",
                  "Compartir sin permisos"
                ],
                "correctAnswer": "Orden, integridad y versión correcta del documento"
              },
              {
                "id": "H-03-02-21",
                "question": "Convertir imágenes a PDF desde móvil ayuda a:",
                "options": [
                  "Generar archivos más fáciles de enviar, archivar o consultar",
                  "Cambiar el área del usuario",
                  "Eliminar el archivo original siempre",
                  "Crear una reunión automática"
                ],
                "correctAnswer": "Generar archivos más fáciles de enviar, archivar o consultar"
              },
              {
                "id": "H-03-02-22",
                "question": "La auditoría o actividad de un archivo permite revisar:",
                "options": [
                  "Quién ha accedido o modificado el documento, según permisos y disponibilidad",
                  "La contraseña de cada usuario",
                  "El contenido de correos privados",
                  "La nómina institucional"
                ],
                "correctAnswer": "Quién ha accedido o modificado el documento, según permisos y disponibilidad"
              },
              {
                "id": "H-03-02-23",
                "question": "La higiene digital en OneDrive implica:",
                "options": [
                  "Nombres claros, limpieza periódica, permisos correctos y resguardo responsable",
                  "Guardar duplicados sin revisar",
                  "Compartir todos los archivos públicamente",
                  "Usar carpetas sin criterio"
                ],
                "correctAnswer": "Nombres claros, limpieza periódica, permisos correctos y resguardo responsable"
              },
              {
                "id": "H-03-02-24",
                "question": "Una anotación en PDF debe usarse para:",
                "options": [
                  "Señalar observaciones relevantes sin perder contexto",
                  "Ocultar información sin autorización",
                  "Cambiar el propietario",
                  "Eliminar permisos"
                ],
                "correctAnswer": "Señalar observaciones relevantes sin perder contexto"
              },
              {
                "id": "H-03-02-25",
                "question": "Antes de combinar documentos PDF conviene validar:",
                "options": [
                  "Orden de páginas, versión y pertinencia de los archivos",
                  "El color de la carpeta",
                  "La foto de perfil del usuario",
                  "El número de chats abiertos"
                ],
                "correctAnswer": "Orden de páginas, versión y pertinencia de los archivos"
              },
              {
                "id": "H-03-02-26",
                "question": "Al convertir imágenes a PDF se debe cuidar:",
                "options": [
                  "Legibilidad, orientación y nombre del archivo",
                  "Que el archivo no tenga dueño",
                  "Que se eliminen versiones anteriores",
                  "Que se comparta públicamente"
                ],
                "correctAnswer": "Legibilidad, orientación y nombre del archivo"
              },
              {
                "id": "H-03-02-27",
                "question": "Revisar accesos a un documento sensible ayuda a:",
                "options": [
                  "Detectar actividad y confirmar permisos adecuados",
                  "Cambiar el contenido sin autorización",
                  "Eliminar el documento de inmediato",
                  "Crear una copia sin nombre"
                ],
                "correctAnswer": "Detectar actividad y confirmar permisos adecuados"
              },
              {
                "id": "H-03-02-28",
                "question": "Un ejemplo de mala higiene digital es:",
                "options": [
                  "Conservar múltiples archivos llamados Final sin control de versión",
                  "Nombrar archivos con contexto",
                  "Depurar duplicados",
                  "Revisar permisos periódicamente"
                ],
                "correctAnswer": "Conservar múltiples archivos llamados Final sin control de versión"
              },
              {
                "id": "H-03-02-29",
                "question": "Si un archivo sensible ya no debe compartirse, se debe:",
                "options": [
                  "Revisar y ajustar o retirar permisos según corresponda",
                  "Dejar el vínculo activo indefinidamente",
                  "Cambiar solo el color del archivo",
                  "Crear más copias compartidas"
                ],
                "correctAnswer": "Revisar y ajustar o retirar permisos según corresponda"
              },
              {
                "id": "H-03-02-30",
                "question": "La buena gestión de OneDrive contribuye a:",
                "options": [
                  "Mayor orden, seguridad y disponibilidad de la información institucional",
                  "Más duplicados y menor control",
                  "Eliminar toda colaboración",
                  "Evitar el uso de permisos"
                ],
                "correctAnswer": "Mayor orden, seguridad y disponibilidad de la información institucional"
              }
            ],
            "questionCount": 10
          }
        }
      }
    ]
  }
} as Record<string, ToolRouteConfig>;

export function getToolRoute(toolId: string, levelId: string): ToolRouteConfig | null {
  return toolRoutes[`${toolId}-${levelId}`] ?? null;
}
