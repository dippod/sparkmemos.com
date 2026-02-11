import { METADATA } from "@/constants/metadata";

const dictionary = {
  baseUrl: "https://sparkmemos.com",
  websiteName: "Spark Memos",
  appName: "Spark Memos",
  appSummary: "Erfassen Sie schnell Ihre Inspiration.",
  titleTemplate: "%s - Spark Memos",
  defaultTitle: "Spark Memos - Erfassen Sie schnell Ihre Inspiration.",
  defaultDescription:
    "Das perfekte Werkzeug, um Ihre Inspiration unterwegs festzuhalten! Sie können Ihre Gedanken, Ideen und Kreativität überall schnell notieren. Oder nutzen Sie es zum späteren Lesen, Tagebuchschreiben oder sogar zur Organisation Ihres Tages. Die intuitive Benutzeroberfläche macht es einfach, Ihre Erkenntnisse im Auge zu behalten und organisiert zu bleiben.",
  defaultKeywords: [
    "Spark Memos",
    "Tana",
    "Tana Capture",
    "Flomo",
    "iOS",
    "App",
    "iOS App",
    "Kurze Notiz",
    "Inspiration",
    "Notizen",
    "Tagebuch",
    "Später lesen",
    "Schnellnotizen",
    "Inspirationserfassung",
    "Ideenjournal",
    "Mobile Notizen",
    "Kreativitätswerkzeug",
    "Gedankenorganisator",
    "Sofortige Memos",
    "Brainstorming-App",
    "Schreiben unterwegs",
    "Produktivitätswerkzeug",
  ],
  urls: {
    home: "/de",
    blog: "/de/blog",
    terms: "/de/terms",
    privacy: "/de/privacy",
  },
  labels: {
    features: "Funktionen",
    reviews: "Bewertungen",
    pricing: "Preise",
    faq: "Häufig gestellte Fragen",
    terms: "Nutzungsbedingungen",
    privacy: "Datenschutz",
    download: "Herunterladen",
    userTerms: "Nutzungsbedingungen",
    privacyPolicy: "Datenschutzrichtlinie",
    downloadTheApp: "App herunterladen",
    scanTheQrCode:
      "Scannen Sie den QR-Code, um die App aus dem App Store herunterzuladen.",

    blog: "Blog",
  },
  blog: {
    title: "Spark Memos Blog",
    description:
      "Lesen Sie unseren Blog, um mehr über Spark Memos zu erfahren.",
    toc: "Inhaltsverzeichnis",
    categories: "Kategorien",
    tags: "Schlagworte",
  },
  homeSections: {
    hero: {
      title: "Erfassen Sie schnell Ihre Inspiration.",
      description:
        "Das perfekte Werkzeug, um Ihre Inspiration unterwegs festzuhalten! Sie können Ihre Gedanken, Ideen und Kreativität überall schnell notieren. Oder nutzen Sie es zum späteren Lesen, Tagebuchschreiben oder sogar zur Organisation Ihres Tages.",
    },
    primaryFeatures: {
      title:
        "Erfassen Sie schnell Ihre Inspiration. Probieren Sie es jetzt aus.",
      description:
        "Das perfekte Werkzeug, um Ihre Inspiration unterwegs festzuhalten! Sie können Ihre Gedanken, Ideen und Kreativität überall schnell notieren. Oder nutzen Sie es zum späteren Lesen, Tagebuchschreiben oder sogar zur Organisation Ihres Tages. Die intuitive Benutzeroberfläche macht es einfach, Ihre Erkenntnisse im Auge zu behalten und organisiert zu bleiben.",
      inspiration: {
        title: "Erfassen Sie schnell Ihre Inspiration",
        description:
          "Öffnen Sie die App, tippen Sie Ihre Gedanken ein und speichern Sie. So einfach ist das. Sie können Ihren Notizen sogar Bilder und Links hinzufügen.",
      },
      collections: {
        title: "Sammeln Sie Ihre Gedanken an einem Ort",
        description:
          "Sie können Ihre Notizen in Sammlungen organisieren, um alles übersichtlich zu halten.",
      },
      sync: {
        title: "iCloud-Synchronisation",
        description:
          "Ihre Notizen werden im lokalen Speicher Ihres Telefons gespeichert. Sie können auch die iCloud-Synchronisation aktivieren, um Ihre Daten auf allen Ihren Geräten zu behalten.",
      },
    },
    secondaryFeatures: {
      title: "Jetzt ist der richtige Zeitpunkt, um loszulegen.",
      description:
        "Mit Spark Memos können Sie schnell Ihre Inspiration erfassen und alles an einem Ort aufbewahren.",
      types: {
        title: "Multi-Typ-Notizen",
        description:
          "Erstellen Sie Notizen mit Text, Bildern oder Links, um alle Ihre Gedanken an einem Ort zu behalten.",
      },
      collections: {
        title: "Benutzerdefinierte Sammlungen",
        description:
          "Organisieren Sie Ihre Notizen in Sammlungen, um Ihre Gedanken in Ordnung zu halten.",
      },
      share: {
        title: "Teilen-Erweiterung",
        description:
          "Mit der Teilen-Erweiterung können Sie jeden Link, Text oder jedes Bild aus jeder App speichern.",
      },
      theme: {
        title: "Benutzerdefiniertes Design",
        description:
          "Sie können die App mit benutzerdefinierten Designs an Ihren Stil anpassen.",
      },
      review: {
        title: "Schnelle Überprüfung",
        description:
          "Sie können Ihre Notizen schnell überprüfen, um Ihre Gedanken in Ordnung zu halten.",
      },
      privacy: {
        title: "Datenschutz an erster Stelle",
        description:
          "Ihre Notizen werden im lokalen Speicher Ihres Telefons gespeichert. Sie können auch die iCloud-Synchronisation aktivieren, um Ihre Daten auf allen Ihren Geräten zu behalten.",
      },
    },
    callToAction: {
      title: "Jetzt herunterladen und loslegen",
      description:
        "Sie können sofort nach dem Download aus dem App Store loslegen. Keine Anmeldung oder Registrierung erforderlich.",
    },
    reviews: {
      title: "Jeder ändert seine Gewohnheiten mit Spark Memos.",
      description: "Sehen Sie, was unsere Benutzer zu sagen haben.",
    },
    pricing: {
      title: "Pauschale Preise, keine Verwaltungsgebühren.",
      description:
        "Ob Sie eine Einzelperson sind, die vorankommen möchte, oder ein großes Unternehmen, das die Welt erobern will, wir haben einen Plan für Sie.",
      monthlyLabel: "Monatlich",
      annuallyLabel: "Jährlich",
      plans: [
        {
          name: "Freemium",
          featured: false,
          price: { Monthly: "0 €", Annually: "0 €" },
          description:
            "Sie möchten die App sofort ausprobieren. Starten Sie kostenlos.",
          button: {
            label: "Kostenlos starten",
            href: METADATA.appStoreLink,
          },
          features: ["Auf 5 Sammlungen begrenzt", "Unbegrenzte Notizen"],
          logomarkClassName: "fill-stone-300",
        },
        {
          name: "Premium",
          featured: true,
          price: { Monthly: "1,99 €", Annually: "9,99 €" },
          description:
            "Abonnieren Sie die App, um kontinuierliche Updates und Support zu erhalten.",
          button: {
            label: "Abonnieren",
            href: METADATA.appStoreLink,
          },
          features: [
            "Alle Freemium-Funktionen",
            "iCloud-Synchronisation",
            "Unbegrenzte Sammlungen",
            "Design-Anpassung",
          ],
          logomarkClassName: "fill-stone-500",
        },
        {
          name: "Lifetime",
          featured: false,
          price: { Monthly: "59,99 €", Annually: "59,99 €" },
          description:
            "Einmal kaufen, für immer nutzen. Erhalten Sie alle Funktionen und Updates für ein Leben lang.",
          button: {
            label: "Jetzt kaufen",
            href: METADATA.appStoreLink,
          },
          features: [
            "iCloud-Synchronisation",
            "Unbegrenzte Sammlungen",
            "Design-Anpassung",
          ],
          logomarkClassName: "fill-orange-500",
        },
      ],
    },
    faq: {
      title: "Häufig gestellte Fragen",
      description:
        "Wenn Sie Fragen haben, zögern Sie bitte nicht, uns zu kontaktieren.",
      items: [
        [
          {
            question: "Was kann ich mit Spark Memos machen?",
            answer:
              "Sie können es verwenden, um Ihre Inspiration unterwegs festzuhalten! Sie können Ihre Gedanken, Ideen und Kreativität überall schnell notieren. Oder nutzen Sie es zum späteren Lesen, Tagebuchschreiben oder sogar zur Organisation Ihres Tages. Die intuitive Benutzeroberfläche macht es einfach, Ihre Erkenntnisse im Auge zu behalten und organisiert zu bleiben.",
          },
          {
            question: "Welche Art von Notizen kann ich erstellen?",
            answer:
              "Sie können Textnotizen, Bilder, Zitate, Links und sogar Audioaufnahmen erstellen. Sie können Ihre Notizen auch in Sammlungen organisieren, um alles übersichtlich zu halten.",
          },
        ],
        [
          {
            question: "Kann ich Spark Memos offline verwenden?",
            answer:
              "Ja, Sie können Spark Memos offline verwenden. Sie können Notizen ohne Internetverbindung erstellen, bearbeiten und löschen. Ihre Änderungen werden synchronisiert, sobald Sie wieder online sind.",
          },
          {
            question: "Wo speichert Spark Memos meine Daten?",
            answer:
              "Spark Memos speichert Ihre Daten im lokalen Speicher Ihres Telefons. Sie können auch die iCloud-Synchronisation aktivieren, um Ihre Daten auf allen Ihren Geräten zu behalten.",
          },
        ],
        [
          {
            question: "Ist Spark Memos für Android verfügbar?",
            answer: "Spark Memos ist derzeit nur für iOS verfügbar.",
          },
          {
            question: "Wie fange ich an?",
            answer:
              "Sie können die App aus dem App Store herunterladen und dann mit der Erstellung Ihrer ersten Notiz beginnen.",
          },
        ],
      ],
    },
  },
};

export default dictionary;
