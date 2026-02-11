import { METADATA } from "@/constants/metadata";

const dictionary = {
  baseUrl: "https://sparkmemos.com",
  websiteName: "Spark Memos",
  appName: "Spark Memos",
  appSummary: "Captura rápidamente tu inspiración.",
  titleTemplate: "%s - Spark Memos",
  defaultTitle: "Spark Memos - Captura rápidamente tu inspiración.",
  defaultDescription:
    "¡La herramienta perfecta para capturar tu inspiración en cualquier lugar! Puedes anotar rápidamente tus pensamientos, ideas y creatividad dondequiera que estés. O úsala para leer más tarde, llevar un diario o incluso organizar tu día. La interfaz intuitiva facilita el seguimiento de tus ideas y mantenerte organizado.",
  defaultKeywords: [
    "Spark Memos",
    "Tana",
    "Tana Capture",
    "Flomo",
    "iOS",
    "App",
    "iOS App",
    "Nota breve",
    "Inspiración",
    "Toma de notas",
    "Diario",
    "Leer más tarde",
    "Notas rápidas",
    "Captura de inspiración",
    "Diario de ideas",
    "Toma de notas móvil",
    "Herramienta de creatividad",
    "Organizador de pensamientos",
    "Memos instantáneos",
    "Aplicación de lluvia de ideas",
    "Escritura en movimiento",
    "Herramienta de productividad",
  ],
  urls: {
    home: "/es",
    blog: "/es/blog",
    terms: "/es/terms",
    privacy: "/es/privacy",
  },
  labels: {
    features: "Características",
    reviews: "Reseñas",
    pricing: "Precios",
    faq: "Preguntas frecuentes",
    terms: "Términos",
    privacy: "Privacidad",
    download: "Descargar",
    userTerms: "Términos de usuario",
    privacyPolicy: "Política de privacidad",
    downloadTheApp: "Descarga la aplicación",
    scanTheQrCode:
      "Escanea el código QR para descargar la aplicación desde la App Store.",

    blog: "Blog",
  },
  blog: {
    title: "Blog de Spark Memos",
    description: "Lee nuestro blog para aprender más sobre Spark Memos.",
    toc: "Tabla de contenidos",
    categories: "Categorías",
    tags: "Etiquetas",
  },
  homeSections: {
    hero: {
      title: "Captura rápidamente tu inspiración.",
      description:
        "¡La herramienta perfecta para capturar tu inspiración en cualquier lugar! Puedes anotar rápidamente tus pensamientos, ideas y creatividad dondequiera que estés. O úsala para leer más tarde, llevar un diario o incluso organizar tu día.",
    },
    primaryFeatures: {
      title: "Captura rápidamente tu inspiración. Pruébalo ahora mismo.",
      description:
        "¡La herramienta perfecta para capturar tu inspiración en cualquier lugar! Puedes anotar rápidamente tus pensamientos, ideas y creatividad dondequiera que estés. O úsala para leer más tarde, llevar un diario o incluso organizar tu día. La interfaz intuitiva facilita el seguimiento de tus ideas y mantenerte organizado.",
      inspiration: {
        title: "Captura rápidamente tu inspiración",
        description:
          "Abre la aplicación, escribe tus pensamientos y guarda. Así de fácil. Incluso puedes añadir imágenes y enlaces a tus memos.",
      },
      collections: {
        title: "Reúne tus pensamientos en un solo lugar",
        description:
          "Puedes organizar tus memos en colecciones para mantener todo ordenado.",
      },
      sync: {
        title: "Sincronización con iCloud",
        description:
          "Tus memos se almacenan en el almacenamiento local de tu teléfono. También puedes activar la sincronización con iCloud para mantener tus datos en todos tus dispositivos.",
      },
    },
    secondaryFeatures: {
      title: "Ahora es el momento de empezar.",
      description:
        "Con Spark Memos, puedes capturar rápidamente tu inspiración y mantener todo en un solo lugar.",
      types: {
        title: "Memos de múltiples tipos",
        description:
          "Crea memos con texto, imágenes o enlaces para mantener todos tus pensamientos en un solo lugar.",
      },
      collections: {
        title: "Colecciones personalizadas",
        description:
          "Organiza tus memos en colecciones para mantener tus pensamientos en orden.",
      },
      share: {
        title: "Extensión para compartir",
        description:
          "Con la extensión para compartir, puedes guardar cualquier enlace, texto o imagen desde cualquier aplicación.",
      },
      theme: {
        title: "Tema personalizado",
        description:
          "Puedes personalizar la aplicación para que coincida con tu estilo con temas personalizados.",
      },
      review: {
        title: "Revisión rápida",
        description:
          "Puedes revisar rápidamente tus memos para mantener tus pensamientos en orden.",
      },
      privacy: {
        title: "Privacidad primero",
        description:
          "Tus memos se almacenan en el almacenamiento local de tu teléfono. También puedes activar la sincronización con iCloud para mantener tus datos en todos tus dispositivos.",
      },
    },
    callToAction: {
      title: "Descarga ahora para empezar",
      description:
        "Puedes empezar inmediatamente después de descargar desde la App Store. No se necesita iniciar sesión ni registrarse.",
    },
    reviews: {
      title: "Todos están cambiando sus hábitos con Spark Memos.",
      description: "Mira lo que nuestros usuarios tienen que decir.",
    },
    pricing: {
      title: "Precios fijos, sin tarifas de gestión.",
      description:
        "Ya seas una persona que intenta avanzar o una gran empresa que intenta conquistar el mundo, tenemos un plan para ti.",
      monthlyLabel: "Mensual",
      annuallyLabel: "Anual",
      plans: [
        {
          name: "Freemium",
          featured: false,
          price: { Monthly: "$0", Annually: "$0" },
          description:
            "Quieres experimentar la aplicación ahora mismo. Comienza gratis.",
          button: {
            label: "Comienza gratis",
            href: METADATA.appStoreLink,
          },
          features: ["Limitado a 5 colecciones", "Memos ilimitados"],
          logomarkClassName: "fill-stone-300",
        },
        {
          name: "Premium",
          featured: true,
          price: { Monthly: "€1.99", Annually: "€9.99" },
          description:
            "Suscríbete a la aplicación para recibir actualizaciones y soporte continuos.",
          button: {
            label: "Suscribirse",
            href: METADATA.appStoreLink,
          },
          features: [
            "Todas las funciones de Freemium",
            "Sincronización con iCloud",
            "Colecciones ilimitadas",
            "Personalización de temas",
          ],
          logomarkClassName: "fill-stone-500",
        },
        {
          name: "Lifetime",
          featured: false,
          price: { Monthly: "€59.99", Annually: "€59.99" },
          description:
            "Compra una vez, usa para siempre. Obtén todas las características y actualizaciones de por vida.",
          button: {
            label: "Comprar ahora",
            href: METADATA.appStoreLink,
          },
          features: [
            "Sincronización con iCloud",
            "Colecciones ilimitadas",
            "Personalización de temas",
          ],
          logomarkClassName: "fill-orange-500",
        },
      ],
    },
    faq: {
      title: "Preguntas frecuentes",
      description: "Si tienes alguna pregunta, no dudes en contactarnos.",
      items: [
        [
          {
            question: "¿Qué puedo hacer con Spark Memos?",
            answer:
              "¡Puedes usarlo para capturar tu inspiración en cualquier lugar! Puedes anotar rápidamente tus pensamientos, ideas y creatividad dondequiera que estés. O úsalo para leer más tarde, llevar un diario o incluso organizar tu día. La interfaz intuitiva facilita el seguimiento de tus ideas y mantenerte organizado.",
          },
          {
            question: "¿Qué tipo de memos puedo crear?",
            answer:
              "Puedes crear memos de texto, imágenes, citas, enlaces e incluso grabaciones de audio. También puedes organizar tus memos en colecciones para mantener todo ordenado.",
          },
        ],
        [
          {
            question: "¿Puedo usar Spark Memos sin conexión?",
            answer:
              "Sí, puedes usar Spark Memos sin conexión. Puedes crear, editar y eliminar memos sin conexión a internet. Tus cambios se sincronizarán una vez que vuelvas a estar en línea.",
          },
          {
            question: "¿Dónde almacena Spark Memos mis datos?",
            answer:
              "Spark Memos almacena tus datos en el almacenamiento local de tu teléfono. También puedes activar la sincronización con iCloud para mantener tus datos en todos tus dispositivos.",
          },
        ],
        [
          {
            question: "¿Está Spark Memos disponible en Android?",
            answer: "Spark Memos está actualmente disponible solo para iOS.",
          },
          {
            question: "¿Cómo empiezo?",
            answer:
              "Puedes descargar la aplicación desde la App Store y luego comenzar creando tu primer memo.",
          },
        ],
      ],
    },
  },
};

export default dictionary;
