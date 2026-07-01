export type QuestionBankItem = {
  id: string; toolId: "teams" | "word"; route: string; block: string; topic: string; usage: string; question: string; options: string[]; correctAnswer: string;
};

export const questionBank: QuestionBankItem[] = [
  {
    "id": "H-01-01-01",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 1",
    "topic": "Teams en el TFJA",
    "usage": "Clave Bloque 1",
    "question": "¿Para qué sirve principalmente Microsoft Teams en el TFJA?",
    "options": [
      "Para almacenar fotos personales",
      "Solo para videollamadas",
      "Para comunicación, colaboración y acceso a información de trabajo",
      "Para navegar por internet"
    ],
    "correctAnswer": "Para comunicación, colaboración y acceso a información de trabajo"
  },
  {
    "id": "H-01-01-02",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 1",
    "topic": "Búsqueda de personas servidoras públicas",
    "usage": "Clave Bloque 1",
    "question": "¿Qué datos puedes obtener de la tarjeta de contacto de una persona servidora pública?",
    "options": [
      "Correo, cargo, área y extensión",
      "Su historial de chats",
      "Su domicilio particular",
      "Su contraseña"
    ],
    "correctAnswer": "Correo, cargo, área y extensión"
  },
  {
    "id": "H-01-01-03",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 1",
    "topic": "Estados, disponibilidad y comunicación",
    "usage": "Clave Bloque 1",
    "question": "El estado \"Disponible\" en Teams indica que la persona:",
    "options": [
      "Está ausente",
      "Puede ser contactada",
      "Está de vacaciones",
      "No desea ser molestada"
    ],
    "correctAnswer": "Puede ser contactada"
  },
  {
    "id": "H-01-01-04",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 2",
    "topic": "Acceso correcto a una reunión",
    "usage": "Clave Bloque 2",
    "question": "¿Qué debes revisar antes de ingresar a una reunión de Teams?",
    "options": [
      "Audio, micrófono, cámara y entorno de participación",
      "Tu correo personal",
      "El número de participantes",
      "Nada en particular"
    ],
    "correctAnswer": "Audio, micrófono, cámara y entorno de participación"
  },
  {
    "id": "H-01-01-05",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 2",
    "topic": "Calendario de Teams",
    "usage": "Clave Bloque 2",
    "question": "¿Dónde consultas las reuniones programadas?",
    "options": [
      "En el Calendario de Teams",
      "En Archivos",
      "En la sección Actividad",
      "En el Chat"
    ],
    "correctAnswer": "En el Calendario de Teams"
  },
  {
    "id": "H-01-01-06",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 2",
    "topic": "Participación básica durante una reunión",
    "usage": "Clave Bloque 2",
    "question": "La función \"Levantar la mano\" durante una reunión sirve para:",
    "options": [
      "Salir de la reunión",
      "Iniciar la grabación",
      "Apagar la cámara de todos",
      "Pedir la palabra de forma ordenada"
    ],
    "correctAnswer": "Pedir la palabra de forma ordenada"
  },
  {
    "id": "H-01-01-07",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 1",
    "topic": "Navegación básica",
    "usage": "Banco final",
    "question": "¿Qué secciones principales encuentras en la barra lateral de Teams?",
    "options": [
      "Solo Chat",
      "Actividad, Chat, Equipos, Calendario y Archivos",
      "Solo Calendario",
      "Configuración e impresión"
    ],
    "correctAnswer": "Actividad, Chat, Equipos, Calendario y Archivos"
  },
  {
    "id": "H-01-01-08",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 1",
    "topic": "Navegación básica",
    "usage": "Banco final",
    "question": "Para tener a la mano las aplicaciones que más usas en Teams puedes:",
    "options": [
      "Imprimirlas",
      "Anclarlas en la barra lateral",
      "No es posible hacerlo",
      "Eliminarlas"
    ],
    "correctAnswer": "Anclarlas en la barra lateral"
  },
  {
    "id": "H-01-01-09",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 1",
    "topic": "Contacto institucional",
    "usage": "Banco final",
    "question": "Desde la tarjeta de contacto de una persona puedes iniciar:",
    "options": [
      "Chat, llamada o correo institucional",
      "Solo un correo externo",
      "Una transferencia de archivos masiva",
      "Solo una llamada al teléfono fijo"
    ],
    "correctAnswer": "Chat, llamada o correo institucional"
  },
  {
    "id": "H-01-01-10",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 1",
    "topic": "Búsqueda de personas servidoras públicas",
    "usage": "Banco final",
    "question": "La información que muestra la tarjeta de contacto proviene de:",
    "options": [
      "Lo que tú captures manualmente",
      "Redes sociales",
      "El directorio institucional",
      "Una búsqueda en internet"
    ],
    "correctAnswer": "El directorio institucional"
  },
  {
    "id": "H-01-01-11",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 1",
    "topic": "Estados, disponibilidad y comunicación",
    "usage": "Banco final",
    "question": "El estado de presencia en Teams puede actualizarse:",
    "options": [
      "De forma automática según tu actividad y calendario",
      "Solo lo cambia el administrador",
      "Solo de forma manual",
      "Nunca cambia"
    ],
    "correctAnswer": "De forma automática según tu actividad y calendario"
  },
  {
    "id": "H-01-01-12",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 1",
    "topic": "Estados, disponibilidad y comunicación",
    "usage": "Banco final",
    "question": "Para evitar interrupciones durante una tarea importante conviene poner el estado:",
    "options": [
      "Conectado",
      "Disponible",
      "No molestar",
      "Ausente"
    ],
    "correctAnswer": "No molestar"
  },
  {
    "id": "H-01-01-13",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 2",
    "topic": "Comunicación mediante chats",
    "usage": "Banco final",
    "question": "Para destacar un mensaje que requiere atención inmediata puedes marcarlo como:",
    "options": [
      "Importante o Urgente",
      "Privado",
      "Normal",
      "Oculto"
    ],
    "correctAnswer": "Importante o Urgente"
  },
  {
    "id": "H-01-01-14",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 2",
    "topic": "Comunicación mediante chats",
    "usage": "Banco final",
    "question": "Un chat grupal es adecuado para:",
    "options": [
      "Publicar comunicados oficiales",
      "Coordinar tareas con un grupo reducido de personas",
      "Almacenar archivos definitivos",
      "Difundir avisos a toda la institución"
    ],
    "correctAnswer": "Coordinar tareas con un grupo reducido de personas"
  },
  {
    "id": "H-01-01-15",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 2",
    "topic": "Participación básica durante una reunión",
    "usage": "Banco final",
    "question": "Durante una reunión, para presentar información a los demás usas:",
    "options": [
      "Abandonar la sesión",
      "Silenciar a todos",
      "Compartir pantalla",
      "Levantar la mano"
    ],
    "correctAnswer": "Compartir pantalla"
  },
  {
    "id": "H-01-01-16",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 2",
    "topic": "Participación básica durante una reunión",
    "usage": "Banco final",
    "question": "Cuando no estás hablando en una reunión conviene:",
    "options": [
      "Salir de la reunión",
      "Levantar la mano",
      "Apagar la cámara de los demás",
      "Silenciar tu micrófono"
    ],
    "correctAnswer": "Silenciar tu micrófono"
  },
  {
    "id": "H-01-01-17",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 2",
    "topic": "Grabaciones y transcripciones",
    "usage": "Banco final",
    "question": "Cuando una reunión se graba, la grabación y la transcripción:",
    "options": [
      "Se pierden al terminar",
      "Quedan disponibles para las personas invitadas",
      "Solo las ve el organizador",
      "Se borran sin aviso al día siguiente"
    ],
    "correctAnswer": "Quedan disponibles para las personas invitadas"
  },
  {
    "id": "H-01-01-18",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 2",
    "topic": "Calendario de Teams",
    "usage": "Banco final",
    "question": "El Calendario de Teams se sincroniza con:",
    "options": [
      "WhatsApp",
      "Outlook",
      "Ninguna otra aplicación",
      "Excel"
    ],
    "correctAnswer": "Outlook"
  },
  {
    "id": "H-01-01-19",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Archivos compartidos en chats y equipos",
    "usage": "Banco final",
    "question": "¿Dónde se guardan los archivos que compartes en Teams?",
    "options": [
      "En la nube (OneDrive o SharePoint)",
      "En una memoria USB",
      "En tu bandeja de correo",
      "Solo en tu computadora"
    ],
    "correctAnswer": "En la nube (OneDrive o SharePoint)"
  },
  {
    "id": "H-01-01-20",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Consulta de documentos desde Teams",
    "usage": "Banco final",
    "question": "Teams permite abrir documentos de Word, Excel y PowerPoint:",
    "options": [
      "Únicamente en el celular",
      "No permite abrirlos",
      "Dentro de la misma ventana, sin descargarlos",
      "Solo después de descargarlos"
    ],
    "correctAnswer": "Dentro de la misma ventana, sin descargarlos"
  },
  {
    "id": "H-01-01-21",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Compartir archivos de forma segura",
    "usage": "Banco final",
    "question": "Al compartir un archivo puedes definir si el destinatario:",
    "options": [
      "Solo puede borrarlo",
      "Solo puede verlo o también editarlo",
      "Solo puede imprimirlo",
      "No puede hacer nada"
    ],
    "correctAnswer": "Solo puede verlo o también editarlo"
  },
  {
    "id": "H-01-01-22",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Compartir archivos de forma segura",
    "usage": "Banco final",
    "question": "Para proteger información sensible al compartir un archivo debes cuidar:",
    "options": [
      "Los destinatarios, el contexto y los permisos",
      "La hora del envío",
      "El color del archivo",
      "El tamaño del archivo"
    ],
    "correctAnswer": "Los destinatarios, el contexto y los permisos"
  },
  {
    "id": "H-01-01-23",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Colaboración simultánea en documentos",
    "usage": "Banco final",
    "question": "Cuando varias personas editan un mismo documento, los cambios:",
    "options": [
      "Se ven en vivo, identificados con el nombre de cada quien",
      "Se ven en versiones separadas",
      "Solo los ve el propietario",
      "No se ven hasta cerrar el archivo"
    ],
    "correctAnswer": "Se ven en vivo, identificados con el nombre de cada quien"
  },
  {
    "id": "H-01-01-24",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Colaboración simultánea en documentos",
    "usage": "Banco final",
    "question": "La edición colaborativa en Teams evita:",
    "options": [
      "Compartir el documento",
      "Tener múltiples versiones enviadas por correo",
      "Poder comentar",
      "Guardar el archivo"
    ],
    "correctAnswer": "Tener múltiples versiones enviadas por correo"
  },
  {
    "id": "H-01-01-25",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Archivos compartidos en chats y equipos",
    "usage": "Banco final",
    "question": "La sección Archivos de Teams sirve para:",
    "options": [
      "Hacer llamadas",
      "Cambiar tu estado",
      "Localizar documentos compartidos y recientes",
      "Programar reuniones"
    ],
    "correctAnswer": "Localizar documentos compartidos y recientes"
  },
  {
    "id": "H-01-01-26",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Buenas prácticas básicas de uso",
    "usage": "Banco final",
    "question": "Un buen mensaje institucional debe ser:",
    "options": [
      "Largo y detallado siempre",
      "De tono informal",
      "Enviado sin asunto",
      "Claro, breve y con el contexto suficiente"
    ],
    "correctAnswer": "Claro, breve y con el contexto suficiente"
  },
  {
    "id": "H-01-01-27",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Buenas prácticas básicas de uso",
    "usage": "Banco final",
    "question": "Antes de compartir un documento conviene verificar:",
    "options": [
      "El clima del día",
      "Que sea la versión correcta y los destinatarios adecuados",
      "Nada en particular",
      "Solo el nombre del archivo"
    ],
    "correctAnswer": "Que sea la versión correcta y los destinatarios adecuados"
  },
  {
    "id": "H-01-01-28",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Archivos compartidos en chats y equipos",
    "usage": "Banco final",
    "question": "Una ventaja de guardar los archivos en la nube de Teams es que:",
    "options": [
      "Ocupan tu disco duro",
      "Solo se ven sin conexión",
      "Están disponibles desde cualquier dispositivo",
      "Se borran solos"
    ],
    "correctAnswer": "Están disponibles desde cualquier dispositivo"
  },
  {
    "id": "H-01-01-29",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Consulta de documentos desde Teams",
    "usage": "Banco final",
    "question": "Abrir los documentos dentro de Teams ayuda a:",
    "options": [
      "Borrar el chat",
      "No perder el contexto de la conversación",
      "Cerrar la sesión",
      "Duplicar versiones"
    ],
    "correctAnswer": "No perder el contexto de la conversación"
  },
  {
    "id": "H-01-01-30",
    "toolId": "teams",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Buenas prácticas básicas de uso",
    "usage": "Banco final",
    "question": "El cuidado de la información institucional implica:",
    "options": [
      "Compartir solo con quien corresponde y con los permisos adecuados",
      "Compartir con cualquier persona",
      "No compartir nunca nada",
      "Publicar todo de forma abierta"
    ],
    "correctAnswer": "Compartir solo con quien corresponde y con los permisos adecuados"
  },
  {
    "id": "H-01-02-01",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 1",
    "topic": "Diferencia entre chat, equipo y canal",
    "usage": "Clave Bloque 1",
    "question": "¿Cuál es la diferencia entre un equipo y un canal en Teams?",
    "options": [
      "El equipo agrupa a un área y los canales organizan sus temas o proyectos",
      "Son exactamente lo mismo",
      "El canal es mayor que el equipo",
      "Solo cambia el nombre"
    ],
    "correctAnswer": "El equipo agrupa a un área y los canales organizan sus temas o proyectos"
  },
  {
    "id": "H-01-02-02",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 1",
    "topic": "Publicaciones y respuestas en canales",
    "usage": "Clave Bloque 1",
    "question": "Para mantener ordenadas las respuestas a un tema en un canal conviene:",
    "options": [
      "Crear un mensaje nuevo cada vez",
      "Responder por correo",
      "Responder dentro del hilo de la publicación",
      "Borrar los mensajes anteriores"
    ],
    "correctAnswer": "Responder dentro del hilo de la publicación"
  },
  {
    "id": "H-01-02-03",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 1",
    "topic": "Menciones, etiquetas y avisos",
    "usage": "Clave Bloque 1",
    "question": "Las menciones (@) en un canal sirven para:",
    "options": [
      "Dirigir la atención de personas o grupos",
      "Silenciar a alguien",
      "Eliminar a una persona",
      "Cambiar el nombre del canal"
    ],
    "correctAnswer": "Dirigir la atención de personas o grupos"
  },
  {
    "id": "H-01-02-04",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 2",
    "topic": "Campanita de actividad",
    "usage": "Clave Bloque 2",
    "question": "La sección Actividad (campanita) reúne:",
    "options": [
      "Tus menciones, respuestas y avisos relevantes",
      "Información sin importancia",
      "Solo reuniones canceladas",
      "Solo tus archivos"
    ],
    "correctAnswer": "Tus menciones, respuestas y avisos relevantes"
  },
  {
    "id": "H-01-02-05",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 2",
    "topic": "Aprobaciones desde flujos institucionales",
    "usage": "Clave Bloque 2",
    "question": "Las aprobaciones en Teams pueden originarse en:",
    "options": [
      "Correos externos",
      "Llamadas telefónicas",
      "Mensajes de chat",
      "Flujos de Power Automate"
    ],
    "correctAnswer": "Flujos de Power Automate"
  },
  {
    "id": "H-01-02-06",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 2",
    "topic": "Aprobar, rechazar o responder una solicitud",
    "usage": "Clave Bloque 2",
    "question": "¿Qué aporta el módulo de Aprobaciones al atender una solicitud?",
    "options": [
      "Solo el nombre del solicitante",
      "Trazabilidad: quién decidió, cuándo y con qué comentario",
      "Un archivo aleatorio",
      "No aporta nada"
    ],
    "correctAnswer": "Trazabilidad: quién decidió, cuándo y con qué comentario"
  },
  {
    "id": "H-01-02-07",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 1",
    "topic": "Canales para organizar asuntos de trabajo",
    "usage": "Banco final",
    "question": "Cada canal de un equipo cuenta con su propio:",
    "options": [
      "Espacio de conversaciones y de archivos",
      "Calendario ajeno a la institución",
      "Servidor físico",
      "Usuario y contraseña"
    ],
    "correctAnswer": "Espacio de conversaciones y de archivos"
  },
  {
    "id": "H-01-02-08",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 1",
    "topic": "Publicaciones y respuestas en canales",
    "usage": "Banco final",
    "question": "Para formalizar un aviso importante en un canal conviene usar:",
    "options": [
      "Una llamada telefónica",
      "Un mensaje sin título",
      "Un correo electrónico",
      "Una publicación con título o un anuncio"
    ],
    "correctAnswer": "Una publicación con título o un anuncio"
  },
  {
    "id": "H-01-02-09",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 1",
    "topic": "Menciones, etiquetas y avisos",
    "usage": "Banco final",
    "question": "Una etiqueta permite mencionar:",
    "options": [
      "A una sola persona",
      "A un archivo",
      "A una reunión",
      "A un grupo completo con una sola palabra"
    ],
    "correctAnswer": "A un grupo completo con una sola palabra"
  },
  {
    "id": "H-01-02-10",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 1",
    "topic": "Gestión documental dentro de canales",
    "usage": "Banco final",
    "question": "La pestaña Archivos de un canal es en realidad:",
    "options": [
      "Un chat",
      "Una grabación",
      "Un buzón de correo",
      "Una biblioteca de SharePoint"
    ],
    "correctAnswer": "Una biblioteca de SharePoint"
  },
  {
    "id": "H-01-02-11",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 1",
    "topic": "Gestión documental dentro de canales",
    "usage": "Banco final",
    "question": "Para organizar los documentos de un canal puedes:",
    "options": [
      "Imprimirlos automáticamente",
      "Crear carpetas con permisos y control de versiones",
      "Borrarlos al instante",
      "Solo subirlos sueltos"
    ],
    "correctAnswer": "Crear carpetas con permisos y control de versiones"
  },
  {
    "id": "H-01-02-12",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 1",
    "topic": "Diferencia entre chat, equipo y canal",
    "usage": "Banco final",
    "question": "Para una conversación informal entre dos personas usas:",
    "options": [
      "Una publicación",
      "Una etiqueta",
      "Un chat",
      "Un canal"
    ],
    "correctAnswer": "Un chat"
  },
  {
    "id": "H-01-02-13",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 2",
    "topic": "Configuración y priorización de notificaciones",
    "usage": "Banco final",
    "question": "Para reducir distracciones sin desconectarte de Teams puedes:",
    "options": [
      "Apagar la computadora",
      "Eliminar tu cuenta",
      "Silenciar un chat o canal específico",
      "Cerrar Teams por completo"
    ],
    "correctAnswer": "Silenciar un chat o canal específico"
  },
  {
    "id": "H-01-02-14",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 2",
    "topic": "Configuración y priorización de notificaciones",
    "usage": "Banco final",
    "question": "Configurar correctamente las notificaciones te ayuda a:",
    "options": [
      "Bloquear a otras personas",
      "No perder los avisos relevantes",
      "Recibir más correo no deseado",
      "Perder avisos importantes"
    ],
    "correctAnswer": "No perder los avisos relevantes"
  },
  {
    "id": "H-01-02-15",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 2",
    "topic": "Aprobar, rechazar o responder una solicitud",
    "usage": "Banco final",
    "question": "Antes de aprobar o rechazar una solicitud debes:",
    "options": [
      "Decidir al azar",
      "Reenviarla a todos",
      "Ignorarla por completo",
      "Verificar la información con criterio institucional"
    ],
    "correctAnswer": "Verificar la información con criterio institucional"
  },
  {
    "id": "H-01-02-16",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 2",
    "topic": "Aprobaciones desde flujos institucionales",
    "usage": "Banco final",
    "question": "Cada decisión de aprobación queda registrada con:",
    "options": [
      "Quién decidió, cuándo y con qué comentario",
      "Una fotografía",
      "Nada en absoluto",
      "Solo la fecha"
    ],
    "correctAnswer": "Quién decidió, cuándo y con qué comentario"
  },
  {
    "id": "H-01-02-17",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 2",
    "topic": "Seguimiento de aprobaciones y trazabilidad",
    "usage": "Banco final",
    "question": "Para dar seguimiento puedes consultar las solicitudes:",
    "options": [
      "Solo las enviadas",
      "Solo las recibidas",
      "Ninguna queda registrada",
      "Recibidas, enviadas y pendientes"
    ],
    "correctAnswer": "Recibidas, enviadas y pendientes"
  },
  {
    "id": "H-01-02-18",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 2",
    "topic": "Campanita de actividad",
    "usage": "Banco final",
    "question": "Revisar la sección Actividad te permite:",
    "options": [
      "Crear canales nuevos",
      "Borrar mensajes de otros",
      "Programar tareas automáticas",
      "Ponerte al día sin revisar chat por chat"
    ],
    "correctAnswer": "Ponerte al día sin revisar chat por chat"
  },
  {
    "id": "H-01-02-19",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Planeación de reuniones efectivas",
    "usage": "Banco final",
    "question": "Al planear una reunión efectiva conviene definir:",
    "options": [
      "Solamente la hora",
      "Nada en particular",
      "El color de la invitación",
      "Objetivo, participantes, agenda y documentos de apoyo"
    ],
    "correctAnswer": "Objetivo, participantes, agenda y documentos de apoyo"
  },
  {
    "id": "H-01-02-20",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Planeación de reuniones efectivas",
    "usage": "Banco final",
    "question": "Puedes adjuntar la agenda de la reunión:",
    "options": [
      "No es posible adjuntarla",
      "En la propia invitación",
      "Por teléfono",
      "En una memoria USB"
    ],
    "correctAnswer": "En la propia invitación"
  },
  {
    "id": "H-01-02-21",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Uso avanzado durante reuniones",
    "usage": "Banco final",
    "question": "Las Opciones de reunión permiten:",
    "options": [
      "Borrar la reunión",
      "Cambiar tu nombre de usuario",
      "Definir quién puede presentar o acceder sin sala de espera",
      "Apagar el internet"
    ],
    "correctAnswer": "Definir quién puede presentar o acceder sin sala de espera"
  },
  {
    "id": "H-01-02-22",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Uso avanzado durante reuniones",
    "usage": "Banco final",
    "question": "Para una sesión formal con personas externas conviene:",
    "options": [
      "Configurar la sala de espera y los permisos",
      "No invitar a nadie",
      "Dejar todo abierto",
      "No grabar nunca"
    ],
    "correctAnswer": "Configurar la sala de espera y los permisos"
  },
  {
    "id": "H-01-02-23",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Uso avanzado durante reuniones",
    "usage": "Banco final",
    "question": "Al iniciar la grabación de una reunión institucional se debe:",
    "options": [
      "Ocultarlo a los demás",
      "Avisar a los participantes",
      "Apagar todas las cámaras",
      "No hacer nada"
    ],
    "correctAnswer": "Avisar a los participantes"
  },
  {
    "id": "H-01-02-24",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Uso avanzado durante reuniones",
    "usage": "Banco final",
    "question": "La transcripción automática de una reunión sirve para:",
    "options": [
      "Apoyar la accesibilidad y la elaboración de actas",
      "Borrar la reunión",
      "Cambiar el idioma del sistema",
      "Silenciar a los participantes"
    ],
    "correctAnswer": "Apoyar la accesibilidad y la elaboración de actas"
  },
  {
    "id": "H-01-02-25",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Seguimiento de acuerdos posteriores",
    "usage": "Banco final",
    "question": "Las Notas de la reunión quedan:",
    "options": [
      "En tu correo personal",
      "Ligadas al evento, para consultarse antes, durante y después",
      "Solo en papel",
      "Se borran al terminar"
    ],
    "correctAnswer": "Ligadas al evento, para consultarse antes, durante y después"
  },
  {
    "id": "H-01-02-26",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Seguimiento de acuerdos posteriores",
    "usage": "Banco final",
    "question": "Para dar seguimiento a un acuerdo conviene registrar:",
    "options": [
      "El clima del día",
      "Nada en particular",
      "El responsable y la fecha compromiso",
      "Solo el tema"
    ],
    "correctAnswer": "El responsable y la fecha compromiso"
  },
  {
    "id": "H-01-02-27",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Tareas integradas con Planner/Tasks",
    "usage": "Banco final",
    "question": "Tasks por Planner en Teams permite:",
    "options": [
      "Programar reuniones",
      "Compartir fotografías",
      "Crear y dar seguimiento a tareas con responsables y fechas",
      "Realizar llamadas"
    ],
    "correctAnswer": "Crear y dar seguimiento a tareas con responsables y fechas"
  },
  {
    "id": "H-01-02-28",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Tareas integradas con Planner/Tasks",
    "usage": "Banco final",
    "question": "Los Depósitos (buckets) en Planner sirven para:",
    "options": [
      "No tienen ninguna función",
      "Agrupar las tareas por etapa o estatus",
      "Borrar tareas",
      "Cambiar contraseñas"
    ],
    "correctAnswer": "Agrupar las tareas por etapa o estatus"
  },
  {
    "id": "H-01-02-29",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Productividad institucional con Teams",
    "usage": "Banco final",
    "question": "Integrar canales, archivos, reuniones y tareas en Teams:",
    "options": [
      "Borra la información",
      "No tiene ninguna utilidad",
      "Complica el trabajo",
      "Concentra la trazabilidad del trabajo en un solo lugar"
    ],
    "correctAnswer": "Concentra la trazabilidad del trabajo en un solo lugar"
  },
  {
    "id": "H-01-02-30",
    "toolId": "teams",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Tareas integradas con Planner/Tasks",
    "usage": "Banco final",
    "question": "Para monitorear el avance de las tareas del equipo puedes:",
    "options": [
      "Revisar el progreso y los gráficos en Planner",
      "No hay forma de verlo",
      "Llamar a cada integrante",
      "Adivinar el estado"
    ],
    "correctAnswer": "Revisar el progreso y los gráficos en Planner"
  },
  {
    "id": "H-02-01-01",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 1",
    "topic": "Word en el TFJA",
    "usage": "Clave Bloque 1",
    "question": "¿Para qué sirve principalmente Word en el contexto institucional del TFJA?",
    "options": [
      "Para crear contraseñas",
      "Para elaborar, revisar y compartir documentos de trabajo",
      "Solo para navegar por internet",
      "Para administrar videollamadas"
    ],
    "correctAnswer": "Para elaborar, revisar y compartir documentos de trabajo"
  },
  {
    "id": "H-02-01-02",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 1",
    "topic": "Creación de un documento nuevo",
    "usage": "Clave Bloque 1",
    "question": "¿Cuándo conviene usar una plantilla en Word?",
    "options": [
      "Cuando se busca mantener una estructura uniforme",
      "Cuando no se quiere guardar el archivo",
      "Solo cuando el documento no tiene texto",
      "Para borrar el formato institucional"
    ],
    "correctAnswer": "Cuando se busca mantener una estructura uniforme"
  },
  {
    "id": "H-02-01-03",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 1",
    "topic": "Guardado, recuperación y versiones básicas",
    "usage": "Clave Bloque 1",
    "question": "Si un documento está guardado en OneDrive o SharePoint, Word puede ayudar a:",
    "options": [
      "Eliminar el archivo automáticamente",
      "Cambiar la contraseña institucional",
      "Impedir que se escriba texto",
      "Conservar o consultar versiones anteriores"
    ],
    "correctAnswer": "Conservar o consultar versiones anteriores"
  },
  {
    "id": "H-02-01-04",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 2",
    "topic": "Formato de fuente y párrafo",
    "usage": "Clave Bloque 2",
    "question": "En documentos institucionales, el formato debe priorizar:",
    "options": [
      "Colores llamativos",
      "Tamaños de letra distintos en cada párrafo",
      "Claridad, consistencia y legibilidad",
      "Efectos decorativos"
    ],
    "correctAnswer": "Claridad, consistencia y legibilidad"
  },
  {
    "id": "H-02-01-05",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 2",
    "topic": "Listas con viñetas y numeración",
    "usage": "Clave Bloque 2",
    "question": "¿Para qué sirve una lista numerada?",
    "options": [
      "Para ocultar información",
      "Para indicar pasos o elementos en orden",
      "Para cambiar el idioma del documento",
      "Para proteger el archivo"
    ],
    "correctAnswer": "Para indicar pasos o elementos en orden"
  },
  {
    "id": "H-02-01-06",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 2",
    "topic": "Revisión ortográfica y gramatical",
    "usage": "Clave Bloque 2",
    "question": "La revisión ortográfica y gramatical en Word ayuda a:",
    "options": [
      "Detectar errores de escritura y mejorar la claridad",
      "Enviar el documento automáticamente",
      "Crear reuniones",
      "Bloquear a otros usuarios"
    ],
    "correctAnswer": "Detectar errores de escritura y mejorar la claridad"
  },
  {
    "id": "H-02-01-07",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 1",
    "topic": "Interfaz y navegación básica",
    "usage": "Banco final",
    "question": "¿Qué elemento de Word agrupa pestañas y comandos como Inicio, Insertar o Revisar?",
    "options": [
      "La papelera",
      "La bandeja de entrada",
      "La cinta de opciones",
      "El calendario"
    ],
    "correctAnswer": "La cinta de opciones"
  },
  {
    "id": "H-02-01-08",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 1",
    "topic": "Interfaz y navegación básica",
    "usage": "Banco final",
    "question": "La barra de búsqueda de Word permite:",
    "options": [
      "Apagar la computadora",
      "Cambiar la cuenta bancaria",
      "Eliminar todos los documentos",
      "Buscar comandos o ayuda dentro de Word"
    ],
    "correctAnswer": "Buscar comandos o ayuda dentro de Word"
  },
  {
    "id": "H-02-01-09",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 1",
    "topic": "Escritura, selección y edición de texto",
    "usage": "Banco final",
    "question": "La función Deshacer sirve para:",
    "options": [
      "Enviar el documento a todos",
      "Revertir cambios recientes",
      "Imprimir sin vista previa",
      "Cerrar sesión"
    ],
    "correctAnswer": "Revertir cambios recientes"
  },
  {
    "id": "H-02-01-10",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 1",
    "topic": "Escritura, selección y edición de texto",
    "usage": "Banco final",
    "question": "Antes de copiar, cortar o aplicar formato a un texto, normalmente debes:",
    "options": [
      "Seleccionar el texto",
      "Cerrar el documento",
      "Exportarlo a PDF",
      "Cambiar de aplicación"
    ],
    "correctAnswer": "Seleccionar el texto"
  },
  {
    "id": "H-02-01-11",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 1",
    "topic": "Creación de un documento nuevo",
    "usage": "Banco final",
    "question": "Un documento en blanco es útil cuando:",
    "options": [
      "Ya existe una plantilla obligatoria",
      "No se debe escribir nada",
      "Se requiere iniciar contenido sin una estructura previa",
      "Se quiere borrar Word"
    ],
    "correctAnswer": "Se requiere iniciar contenido sin una estructura previa"
  },
  {
    "id": "H-02-01-12",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 1",
    "topic": "Guardado, recuperación y versiones básicas",
    "usage": "Banco final",
    "question": "Guardar correctamente un documento implica cuidar principalmente:",
    "options": [
      "El color del monitor",
      "La marca del teclado",
      "El número de ventanas abiertas",
      "El nombre, ubicación y versión del archivo"
    ],
    "correctAnswer": "El nombre, ubicación y versión del archivo"
  },
  {
    "id": "H-02-01-13",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 2",
    "topic": "Formato de fuente y párrafo",
    "usage": "Banco final",
    "question": "Una práctica adecuada de formato institucional es:",
    "options": [
      "Cambiar de letra en cada línea",
      "Usar un formato uniforme y legible",
      "Usar solo mayúsculas en todo el documento",
      "Insertar efectos decorativos sin criterio"
    ],
    "correctAnswer": "Usar un formato uniforme y legible"
  },
  {
    "id": "H-02-01-14",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 2",
    "topic": "Alineación, sangrías y espaciado",
    "usage": "Banco final",
    "question": "El espaciado entre párrafos ayuda a:",
    "options": [
      "Eliminar la revisión ortográfica",
      "Ocultar comentarios",
      "Ordenar visualmente el contenido",
      "Cambiar la contraseña"
    ],
    "correctAnswer": "Ordenar visualmente el contenido"
  },
  {
    "id": "H-02-01-15",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 2",
    "topic": "Alineación, sangrías y espaciado",
    "usage": "Banco final",
    "question": "Para ajustar la entrada visual de un párrafo se utiliza principalmente:",
    "options": [
      "La sangría",
      "La papelera",
      "El micrófono",
      "El chat"
    ],
    "correctAnswer": "La sangría"
  },
  {
    "id": "H-02-01-16",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 2",
    "topic": "Listas con viñetas y numeración",
    "usage": "Banco final",
    "question": "Las viñetas son útiles para:",
    "options": [
      "Crear contraseñas",
      "Configurar reuniones",
      "Eliminar tablas",
      "Presentar elementos sin un orden obligatorio"
    ],
    "correctAnswer": "Presentar elementos sin un orden obligatorio"
  },
  {
    "id": "H-02-01-17",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 2",
    "topic": "Tablas básicas para organizar información",
    "usage": "Banco final",
    "question": "Una tabla básica en Word sirve para:",
    "options": [
      "Grabar una reunión",
      "Organizar información en filas y columnas",
      "Cambiar la red institucional",
      "Sustituir el correo electrónico"
    ],
    "correctAnswer": "Organizar información en filas y columnas"
  },
  {
    "id": "H-02-01-18",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 2",
    "topic": "Revisión ortográfica y gramatical",
    "usage": "Banco final",
    "question": "Aunque Word marque sugerencias de corrección, siempre conviene:",
    "options": [
      "Revisar humanamente el documento antes de enviarlo",
      "Aceptar todo sin leer",
      "Borrar todo el texto",
      "Ignorar cualquier error"
    ],
    "correctAnswer": "Revisar humanamente el documento antes de enviarlo"
  },
  {
    "id": "H-02-01-19",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Inserción de imágenes y elementos simples",
    "usage": "Banco final",
    "question": "Al insertar una imagen en un documento institucional debes cuidar:",
    "options": [
      "Que sea lo más grande posible",
      "Que tape el texto",
      "Pertinencia, tamaño y ubicación",
      "Que no tenga relación con el contenido"
    ],
    "correctAnswer": "Pertinencia, tamaño y ubicación"
  },
  {
    "id": "H-02-01-20",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Inserción de imágenes y elementos simples",
    "usage": "Banco final",
    "question": "Comprimir imágenes en Word puede ayudar a:",
    "options": [
      "Eliminar el documento",
      "Cambiar el idioma del sistema",
      "Borrar el historial",
      "Reducir el tamaño del archivo"
    ],
    "correctAnswer": "Reducir el tamaño del archivo"
  },
  {
    "id": "H-02-01-21",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Encabezado, pie de página y número de página",
    "usage": "Banco final",
    "question": "El número de página en Word se actualiza:",
    "options": [
      "Solo si se escribe manualmente en cada página",
      "Automáticamente cuando cambia el contenido",
      "Únicamente por el administrador",
      "Nunca se actualiza"
    ],
    "correctAnswer": "Automáticamente cuando cambia el contenido"
  },
  {
    "id": "H-02-01-22",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Encabezado, pie de página y número de página",
    "usage": "Banco final",
    "question": "El encabezado y pie de página sirven para:",
    "options": [
      "Agregar información repetida como identificación o numeración",
      "Borrar el texto principal",
      "Crear una reunión",
      "Cambiar el propietario del archivo"
    ],
    "correctAnswer": "Agregar información repetida como identificación o numeración"
  },
  {
    "id": "H-02-01-23",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Diseño de página, márgenes y orientación",
    "usage": "Banco final",
    "question": "Los márgenes de un documento definen:",
    "options": [
      "La contraseña del archivo",
      "El idioma del teclado",
      "El espacio entre el contenido y los bordes de la página",
      "La velocidad de impresión"
    ],
    "correctAnswer": "El espacio entre el contenido y los bordes de la página"
  },
  {
    "id": "H-02-01-24",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Diseño de página, márgenes y orientación",
    "usage": "Banco final",
    "question": "La orientación horizontal puede ser útil cuando:",
    "options": [
      "El documento no tiene texto",
      "Se quiere borrar el encabezado",
      "Se va a cerrar sesión",
      "Se trabaja con tablas o contenido ancho"
    ],
    "correctAnswer": "Se trabaja con tablas o contenido ancho"
  },
  {
    "id": "H-02-01-25",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Exportar a PDF e imprimir",
    "usage": "Banco final",
    "question": "Exportar un documento a PDF ayuda a:",
    "options": [
      "Eliminar los márgenes",
      "Conservar el formato al compartirlo para consulta",
      "Crear una nueva cuenta",
      "Quitar todas las páginas"
    ],
    "correctAnswer": "Conservar el formato al compartirlo para consulta"
  },
  {
    "id": "H-02-01-26",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Exportar a PDF e imprimir",
    "usage": "Banco final",
    "question": "Antes de imprimir un documento conviene revisar:",
    "options": [
      "Solo el color del icono",
      "El clima",
      "Vista previa, páginas, márgenes y configuración de salida",
      "El nombre de la impresora sin abrir el archivo"
    ],
    "correctAnswer": "Vista previa, páginas, márgenes y configuración de salida"
  },
  {
    "id": "H-02-01-27",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Buenas prácticas para documentos institucionales",
    "usage": "Banco final",
    "question": "Un nombre de archivo claro permite:",
    "options": [
      "Localizar el documento y evitar confundir versiones",
      "Ocultar información",
      "Borrar versiones anteriores",
      "Cambiar el contenido automáticamente"
    ],
    "correctAnswer": "Localizar el documento y evitar confundir versiones"
  },
  {
    "id": "H-02-01-28",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Buenas prácticas para documentos institucionales",
    "usage": "Banco final",
    "question": "Antes de enviar un documento institucional debes verificar:",
    "options": [
      "Que tenga muchos colores",
      "Que no tenga nombre",
      "Que esté en blanco",
      "Destinatarios, versión y contenido adecuado"
    ],
    "correctAnswer": "Destinatarios, versión y contenido adecuado"
  },
  {
    "id": "H-02-01-29",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Buenas prácticas para documentos institucionales",
    "usage": "Banco final",
    "question": "El cuidado de la información institucional implica:",
    "options": [
      "Publicar todo sin revisar",
      "Compartir documentos solo con quien corresponde",
      "Enviar archivos a cuentas personales",
      "Quitar los permisos sin criterio"
    ],
    "correctAnswer": "Compartir documentos solo con quien corresponde"
  },
  {
    "id": "H-02-01-30",
    "toolId": "word",
    "route": "descubre",
    "block": "Bloque 3",
    "topic": "Buenas prácticas para documentos institucionales",
    "usage": "Banco final",
    "question": "Una versión preliminar de un documento debe identificarse para:",
    "options": [
      "Evitar que se confunda con la versión final",
      "Hacerla obligatoriamente pública",
      "Impedir cualquier revisión",
      "Eliminar los comentarios"
    ],
    "correctAnswer": "Evitar que se confunda con la versión final"
  },
  {
    "id": "H-02-02-01",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 1",
    "topic": "Uso de estilos para títulos y contenido",
    "usage": "Clave Bloque 1",
    "question": "¿Cuál es una ventaja principal de usar estilos en Word?",
    "options": [
      "Eliminan todo el texto",
      "Permiten estructurar títulos y generar tablas de contenido",
      "Impiden guardar el documento",
      "Sustituyen la revisión del contenido"
    ],
    "correctAnswer": "Permiten estructurar títulos y generar tablas de contenido"
  },
  {
    "id": "H-02-02-02",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 1",
    "topic": "Tabla de contenido automática",
    "usage": "Clave Bloque 1",
    "question": "La tabla de contenido automática se genera correctamente cuando:",
    "options": [
      "Se aplican estilos a títulos y subtítulos",
      "Se escriben números manualmente",
      "Se imprime el documento",
      "Se eliminan las secciones"
    ],
    "correctAnswer": "Se aplican estilos a títulos y subtítulos"
  },
  {
    "id": "H-02-02-03",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 1",
    "topic": "Secciones, saltos y numeración avanzada",
    "usage": "Clave Bloque 1",
    "question": "Los saltos de sección permiten:",
    "options": [
      "Eliminar la revisión ortográfica",
      "Cerrar Word",
      "Cambiar el usuario de red",
      "Controlar formato distinto en partes del documento"
    ],
    "correctAnswer": "Controlar formato distinto en partes del documento"
  },
  {
    "id": "H-02-02-04",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 2",
    "topic": "Comentarios para revisión",
    "usage": "Clave Bloque 2",
    "question": "Los comentarios en Word sirven para:",
    "options": [
      "Borrar el documento",
      "Aceptar todos los cambios",
      "Dejar observaciones sin modificar directamente el texto principal",
      "Cambiar el formato de la computadora"
    ],
    "correctAnswer": "Dejar observaciones sin modificar directamente el texto principal"
  },
  {
    "id": "H-02-02-05",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 2",
    "topic": "Control de cambios",
    "usage": "Clave Bloque 2",
    "question": "El control de cambios permite:",
    "options": [
      "Ocultar quién revisó",
      "Identificar inserciones, eliminaciones y ajustes realizados",
      "Eliminar el historial de versiones",
      "Crear una tabla automáticamente sin estilos"
    ],
    "correctAnswer": "Identificar inserciones, eliminaciones y ajustes realizados"
  },
  {
    "id": "H-02-02-06",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 2",
    "topic": "Protección y permisos básicos del documento",
    "usage": "Clave Bloque 2",
    "question": "Antes de compartir un documento con información institucional debes cuidar:",
    "options": [
      "Los permisos y destinatarios correctos",
      "Que todos puedan editarlo sin límite",
      "Que no tenga nombre",
      "Que esté sin guardar"
    ],
    "correctAnswer": "Los permisos y destinatarios correctos"
  },
  {
    "id": "H-02-02-07",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 1",
    "topic": "Plantillas y formatos institucionales",
    "usage": "Banco final",
    "question": "Una plantilla institucional puede incluir:",
    "options": [
      "Contraseñas personales",
      "Chats privados",
      "Estilos, márgenes, encabezados y estructura base",
      "Calendarios externos"
    ],
    "correctAnswer": "Estilos, márgenes, encabezados y estructura base"
  },
  {
    "id": "H-02-02-08",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 1",
    "topic": "Plantillas y formatos institucionales",
    "usage": "Banco final",
    "question": "Usar una plantilla ayuda principalmente a:",
    "options": [
      "Impedir la escritura",
      "Eliminar toda revisión",
      "Ocultar el archivo",
      "Mantener consistencia y reducir errores de formato"
    ],
    "correctAnswer": "Mantener consistencia y reducir errores de formato"
  },
  {
    "id": "H-02-02-09",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 1",
    "topic": "Uso de estilos para títulos y contenido",
    "usage": "Banco final",
    "question": "Los estilos de título también facilitan:",
    "options": [
      "La eliminación del archivo",
      "La navegación por documentos extensos",
      "El envío automático a terceros",
      "La desactivación de Word"
    ],
    "correctAnswer": "La navegación por documentos extensos"
  },
  {
    "id": "H-02-02-10",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 1",
    "topic": "Tabla de contenido automática",
    "usage": "Banco final",
    "question": "Cuando cambian títulos o páginas, una tabla de contenido automática debe:",
    "options": [
      "Actualizarse",
      "Borrarse manualmente",
      "Convertirse en imagen",
      "Desactivarse"
    ],
    "correctAnswer": "Actualizarse"
  },
  {
    "id": "H-02-02-11",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 1",
    "topic": "Secciones, saltos y numeración avanzada",
    "usage": "Banco final",
    "question": "Un salto de página se usa para:",
    "options": [
      "Cambiar la contraseña",
      "Eliminar comentarios",
      "Iniciar contenido en una nueva página",
      "Bloquear el documento"
    ],
    "correctAnswer": "Iniciar contenido en una nueva página"
  },
  {
    "id": "H-02-02-12",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 1",
    "topic": "Encabezados y pies diferenciados",
    "usage": "Banco final",
    "question": "Para que un encabezado sea distinto en una sección puedes:",
    "options": [
      "Borrar todo el documento",
      "Convertirlo a imagen",
      "Cambiar el teclado",
      "Desvincularlo de la sección anterior"
    ],
    "correctAnswer": "Desvincularlo de la sección anterior"
  },
  {
    "id": "H-02-02-13",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 2",
    "topic": "Comentarios para revisión",
    "usage": "Banco final",
    "question": "Un comentario debe colocarse preferentemente:",
    "options": [
      "Al azar en cualquier página",
      "En el punto específico que se desea revisar",
      "Solo en el nombre del archivo",
      "En una imagen externa"
    ],
    "correctAnswer": "En el punto específico que se desea revisar"
  },
  {
    "id": "H-02-02-14",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 2",
    "topic": "Comentarios para revisión",
    "usage": "Banco final",
    "question": "Responder un comentario ayuda a:",
    "options": [
      "Eliminar la numeración",
      "Cambiar de aplicación",
      "Dar seguimiento a una observación dentro del documento",
      "Crear una tabla de contenido"
    ],
    "correctAnswer": "Dar seguimiento a una observación dentro del documento"
  },
  {
    "id": "H-02-02-15",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 2",
    "topic": "Control de cambios",
    "usage": "Banco final",
    "question": "Antes de consolidar una versión final con control de cambios conviene:",
    "options": [
      "Aceptar o rechazar las modificaciones pendientes",
      "Ignorar todas las marcas",
      "Imprimir sin revisar",
      "Borrar el documento"
    ],
    "correctAnswer": "Aceptar o rechazar las modificaciones pendientes"
  },
  {
    "id": "H-02-02-16",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 2",
    "topic": "Control de cambios",
    "usage": "Banco final",
    "question": "El control de cambios es útil cuando:",
    "options": [
      "Solo se quiere cambiar el color de pantalla",
      "No existe texto",
      "Se quiere eliminar el archivo",
      "Varias personas revisan o ajustan el mismo documento"
    ],
    "correctAnswer": "Varias personas revisan o ajustan el mismo documento"
  },
  {
    "id": "H-02-02-17",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 2",
    "topic": "Comparar y combinar documentos",
    "usage": "Banco final",
    "question": "La función Comparar en Word ayuda a:",
    "options": [
      "Crear una cuenta nueva",
      "Detectar diferencias entre dos versiones",
      "Borrar las tablas",
      "Desactivar los comentarios"
    ],
    "correctAnswer": "Detectar diferencias entre dos versiones"
  },
  {
    "id": "H-02-02-18",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 2",
    "topic": "Historial de versiones en documentos compartidos",
    "usage": "Banco final",
    "question": "El historial de versiones permite:",
    "options": [
      "Revisar o restaurar una versión anterior",
      "Eliminar todos los permisos",
      "Cambiar el monitor",
      "Quitar la ortografía"
    ],
    "correctAnswer": "Revisar o restaurar una versión anterior"
  },
  {
    "id": "H-02-02-19",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Referencias, notas al pie y citas",
    "usage": "Banco final",
    "question": "Las notas al pie se usan para:",
    "options": [
      "Borrar párrafos",
      "Crear una reunión",
      "Agregar aclaraciones o referencias sin interrumpir el texto principal",
      "Cambiar el nombre del usuario"
    ],
    "correctAnswer": "Agregar aclaraciones o referencias sin interrumpir el texto principal"
  },
  {
    "id": "H-02-02-20",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Referencias, notas al pie y citas",
    "usage": "Banco final",
    "question": "Una ventaja de las notas al pie en Word es que:",
    "options": [
      "No pueden editarse",
      "Eliminan la página",
      "Bloquean el archivo",
      "Se renumeran automáticamente"
    ],
    "correctAnswer": "Se renumeran automáticamente"
  },
  {
    "id": "H-02-02-21",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Marcadores, vínculos internos y navegación",
    "usage": "Banco final",
    "question": "Los vínculos internos sirven para:",
    "options": [
      "Mandar correos personales",
      "Saltar a otro apartado del mismo documento",
      "Cambiar el idioma del sistema",
      "Borrar el índice"
    ],
    "correctAnswer": "Saltar a otro apartado del mismo documento"
  },
  {
    "id": "H-02-02-22",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Marcadores, vínculos internos y navegación",
    "usage": "Banco final",
    "question": "Un marcador en Word ayuda a:",
    "options": [
      "Identificar un punto específico para crear navegación interna",
      "Eliminar encabezados",
      "Ocultar cambios",
      "Crear una contraseña"
    ],
    "correctAnswer": "Identificar un punto específico para crear navegación interna"
  },
  {
    "id": "H-02-02-23",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Combinación de correspondencia",
    "usage": "Banco final",
    "question": "La combinación de correspondencia es útil para:",
    "options": [
      "Eliminar todos los destinatarios",
      "Editar imágenes",
      "Generar documentos repetitivos con datos variables",
      "Cambiar los márgenes automáticamente sin revisar"
    ],
    "correctAnswer": "Generar documentos repetitivos con datos variables"
  },
  {
    "id": "H-02-02-24",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Combinación de correspondencia",
    "usage": "Banco final",
    "question": "Un ejemplo de uso de combinación de correspondencia es:",
    "options": [
      "Borrar el historial",
      "Crear una reunión por chat",
      "Convertir Word en Excel",
      "Generar oficios o cartas con datos de una lista"
    ],
    "correctAnswer": "Generar oficios o cartas con datos de una lista"
  },
  {
    "id": "H-02-02-25",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Formularios básicos y controles de contenido",
    "usage": "Banco final",
    "question": "Los controles de contenido ayudan a:",
    "options": [
      "Desordenar el documento",
      "Capturar información estandarizada en campos definidos",
      "Ocultar todas las páginas",
      "Enviar el archivo automáticamente"
    ],
    "correctAnswer": "Capturar información estandarizada en campos definidos"
  },
  {
    "id": "H-02-02-26",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Formularios básicos y controles de contenido",
    "usage": "Banco final",
    "question": "En un formato reutilizable, los campos definidos sirven para:",
    "options": [
      "Eliminar el encabezado",
      "Cambiar la impresora",
      "Evitar que se altere la estructura principal",
      "Crear un chat"
    ],
    "correctAnswer": "Evitar que se altere la estructura principal"
  },
  {
    "id": "H-02-02-27",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Cierre de documentos listos para validación",
    "usage": "Banco final",
    "question": "Antes de enviar una versión final se debe verificar que:",
    "options": [
      "No queden comentarios o cambios pendientes sin resolver",
      "El archivo no tenga nombre",
      "Todas las páginas estén en blanco",
      "No pueda abrirse"
    ],
    "correctAnswer": "No queden comentarios o cambios pendientes sin resolver"
  },
  {
    "id": "H-02-02-28",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Cierre de documentos listos para validación",
    "usage": "Banco final",
    "question": "Revisar vínculos internos antes del cierre sirve para:",
    "options": [
      "Borrar el documento",
      "Cambiar la cuenta de acceso",
      "Quitar la numeración",
      "Confirmar que llevan al apartado correcto"
    ],
    "correctAnswer": "Confirmar que llevan al apartado correcto"
  },
  {
    "id": "H-02-02-29",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Cierre de documentos listos para validación",
    "usage": "Banco final",
    "question": "Una versión final institucional debe estar:",
    "options": [
      "Llena de comentarios sin atender",
      "Revisada en formato, contenido, cambios, enlaces y numeración",
      "Sin guardar",
      "Enviada a destinatarios incorrectos"
    ],
    "correctAnswer": "Revisada en formato, contenido, cambios, enlaces y numeración"
  },
  {
    "id": "H-02-02-30",
    "toolId": "word",
    "route": "potencia",
    "block": "Bloque 3",
    "topic": "Cierre de documentos listos para validación",
    "usage": "Banco final",
    "question": "Eliminar datos internos visibles antes de compartir una versión final ayuda a:",
    "options": [
      "Proteger la información y presentar un documento limpio",
      "Impedir la lectura",
      "Cambiar el contenido sin revisar",
      "Borrar el archivo original"
    ],
    "correctAnswer": "Proteger la información y presentar un documento limpio"
  }
];

export function getCheckpointQuestions(toolId: "teams" | "word", route: string, block: 1 | 2) {
  return questionBank.filter((item) => item.toolId === toolId && item.route === route && item.usage === `Clave Bloque ${block}`).slice(0, 3);
}

export function getRandomFinalQuestions(toolId: "teams" | "word", route: string, count = 10) {
  const candidates = questionBank.filter((item) => item.toolId === toolId && item.route === route);
  return [...candidates].sort(() => Math.random() - 0.5).slice(0, Math.min(count, candidates.length));
}
