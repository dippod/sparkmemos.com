import { METADATA } from "@/constants/metadata";

const dictionary = {
  baseUrl: "https://sparkmemos.com",
  websiteName: "Spark Memos",
  appName: "Spark Memos",
  appSummary: "Capturez rapidement votre inspiration.",
  titleTemplate: "%s - Spark Memos",
  defaultTitle: "Spark Memos - Capturez rapidement votre inspiration.",
  defaultDescription:
    "L'outil parfait pour capturer votre inspiration en déplacement ! Vous pouvez rapidement noter vos pensées, idées et créativité où que vous soyez. Ou utilisez-le pour une lecture ultérieure, la tenue d'un journal, ou même pour organiser votre journée. L'interface intuitive facilite le suivi de vos idées et vous aide à rester organisé.",
  defaultKeywords: [
    "Spark Memos",
    "Tana",
    "Tana Capture",
    "Flomo",
    "iOS",
    "App",
    "iOS App",
    "Note courte",
    "Inspiration",
    "Prise de notes",
    "Journal",
    "Lecture différée",
    "Notes rapides",
    "Capture d'inspiration",
    "Journal d'idées",
    "Prise de notes mobile",
    "Outil de créativité",
    "Organisateur de pensées",
    "Mémos instantanés",
    "Application de brainstorming",
    "Écriture en déplacement",
    "Outil de productivité",
  ],
  urls: {
    home: "/fr",
    blog: "/fr/blog",
    terms: "/fr/terms",
    privacy: "/fr/privacy",
  },
  labels: {
    features: "Fonctionnalités",
    reviews: "Avis",
    pricing: "Tarifs",
    faq: "FAQ",
    terms: "Conditions",
    privacy: "Confidentialité",
    download: "Télécharger",
    userTerms: "Conditions d'utilisation",
    privacyPolicy: "Politique de confidentialité",
    downloadTheApp: "Téléchargez l'application",
    scanTheQrCode:
      "Scannez le code QR pour télécharger l'application depuis l'App Store.",

    blog: "Blog",
  },
  blog: {
    title: "Blog Spark Memos",
    description: "Lisez notre blog pour en savoir plus sur Spark Memos.",
    toc: "Table des matières",
    categories: "Catégories",
    tags: "Étiquettes",
  },
  homeSections: {
    hero: {
      title: "Capturez rapidement votre inspiration.",
      description:
        "L'outil parfait pour capturer votre inspiration en déplacement ! Vous pouvez rapidement noter vos pensées, idées et créativité où que vous soyez. Ou utilisez-le pour une lecture ultérieure, la tenue d'un journal, ou même pour organiser votre journée.",
    },
    primaryFeatures: {
      title: "Capturez rapidement votre inspiration. Essayez-le maintenant.",
      description:
        "L'outil parfait pour capturer votre inspiration en déplacement ! Vous pouvez rapidement noter vos pensées, idées et créativité où que vous soyez. Ou utilisez-le pour une lecture ultérieure, la tenue d'un journal, ou même pour organiser votre journée. L'interface intuitive facilite le suivi de vos idées et vous aide à rester organisé.",
      inspiration: {
        title: "Capturez rapidement votre inspiration",
        description:
          "Ouvrez l'application, tapez vos pensées et enregistrez. C'est aussi simple que ça. Vous pouvez même ajouter des images et des liens à vos mémos.",
      },
      collections: {
        title: "Rassemblez vos pensées en un seul endroit",
        description:
          "Vous pouvez organiser vos mémos en collections pour tout garder en ordre.",
      },
      sync: {
        title: "Synchronisation iCloud",
        description:
          "Vos mémos sont stockés dans le stockage local de votre téléphone. Vous pouvez également activer la synchronisation iCloud pour conserver vos données sur tous vos appareils.",
      },
    },
    secondaryFeatures: {
      title: "C'est le moment de commencer.",
      description:
        "Avec Spark Memos, vous pouvez rapidement capturer votre inspiration et tout garder en un seul endroit.",
      types: {
        title: "Mémos multi-types",
        description:
          "Créez des mémos avec du texte, des images ou des liens pour garder toutes vos pensées en un seul endroit.",
      },
      collections: {
        title: "Collections personnalisées",
        description:
          "Organisez vos mémos en collections pour garder vos pensées en ordre.",
      },
      share: {
        title: "Extension de partage",
        description:
          "Avec l'extension de partage, vous pouvez enregistrer n'importe quel lien, texte ou image depuis n'importe quelle application.",
      },
      theme: {
        title: "Thème personnalisé",
        description:
          "Vous pouvez personnaliser l'application pour qu'elle corresponde à votre style avec des thèmes personnalisés.",
      },
      review: {
        title: "Révision rapide",
        description:
          "Vous pouvez rapidement revoir vos mémos pour garder vos pensées en ordre.",
      },
      privacy: {
        title: "Confidentialité d'abord",
        description:
          "Vos mémos sont stockés dans le stockage local de votre téléphone. Vous pouvez également activer la synchronisation iCloud pour conserver vos données sur tous vos appareils.",
      },
    },
    callToAction: {
      title: "Téléchargez maintenant pour commencer",
      description:
        "Vous pouvez commencer immédiatement après le téléchargement depuis l'App Store. Aucune connexion ou inscription nécessaire.",
    },
    reviews: {
      title: "Tout le monde change ses habitudes avec Spark Memos.",
      description: "Voyez ce que nos utilisateurs ont à dire.",
    },
    pricing: {
      title: "Tarification simple, pas de frais de gestion.",
      description:
        "Que vous soyez une personne cherchant à progresser ou une grande entreprise cherchant à conquérir le monde, nous avons un plan pour vous.",
      monthlyLabel: "Mensuel",
      annuallyLabel: "Annuel",
      plans: [
        {
          name: "Freemium",
          featured: false,
          price: { Monthly: "0 €", Annually: "0 €" },
          description:
            "Vous voulez essayer l'application tout de suite. Commencez gratuitement.",
          button: {
            label: "Commencer gratuitement",
            href: METADATA.appStoreLink,
          },
          features: ["Limité à 5 collections", "Mémos illimités"],
          logomarkClassName: "fill-stone-300",
        },
        {
          name: "Premium",
          featured: true,
          price: { Monthly: "1,99 €", Annually: "9,99 €" },
          description:
            "Abonnez-vous à l'application pour recevoir des mises à jour et un support continus.",
          button: {
            label: "S'abonner",
            href: METADATA.appStoreLink,
          },
          features: [
            "Toutes les fonctionnalités Freemium",
            "Synchronisation iCloud",
            "Collections illimitées",
            "Personnalisation du thème",
          ],
          logomarkClassName: "fill-stone-500",
        },
        {
          name: "Lifetime",
          featured: false,
          price: { Monthly: "59,99 €", Annually: "59,99 €" },
          description:
            "Achetez une fois, utilisez pour toujours. Obtenez toutes les fonctionnalités et mises à jour à vie.",
          button: {
            label: "Acheter maintenant",
            href: METADATA.appStoreLink,
          },
          features: [
            "Synchronisation iCloud",
            "Collections illimitées",
            "Personnalisation du thème",
          ],
          logomarkClassName: "fill-orange-500",
        },
      ],
    },
    faq: {
      title: "Questions fréquemment posées",
      description:
        "Si vous avez des questions, n'hésitez pas à nous contacter.",
      items: [
        [
          {
            question: "Que puis-je faire avec Spark Memos ?",
            answer:
              "Vous pouvez l'utiliser pour capturer votre inspiration en déplacement ! Vous pouvez rapidement noter vos pensées, idées et créativité où que vous soyez. Ou l'utiliser pour une lecture ultérieure, la tenue d'un journal, ou même pour organiser votre journée. L'interface intuitive facilite le suivi de vos idées et vous aide à rester organisé.",
          },
          {
            question: "Quels types de mémos puis-je créer ?",
            answer:
              "Vous pouvez créer des mémos texte, des images, des citations, des liens et même des enregistrements audio. Vous pouvez également organiser vos mémos en collections pour tout garder en ordre.",
          },
        ],
        [
          {
            question: "Puis-je utiliser Spark Memos hors ligne ?",
            answer:
              "Oui, vous pouvez utiliser Spark Memos hors ligne. Vous pouvez créer, modifier et supprimer des mémos sans connexion Internet. Vos modifications seront synchronisées une fois que vous serez de nouveau en ligne.",
          },
          {
            question: "Où Spark Memos stocke-t-il mes données ?",
            answer:
              "Spark Memos stocke vos données dans le stockage local de votre téléphone. Vous pouvez également activer la synchronisation iCloud pour conserver vos données sur tous vos appareils.",
          },
        ],
        [
          {
            question: "Spark Memos est-il disponible sur Android ?",
            answer:
              "Spark Memos est actuellement disponible uniquement sur iOS.",
          },
          {
            question: "Comment puis-je commencer ?",
            answer:
              "Vous pouvez télécharger l'application depuis l'App Store, puis commencer en créant votre premier mémo.",
          },
        ],
      ],
    },
  },
};

export default dictionary;
