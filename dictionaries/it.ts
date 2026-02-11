import { METADATA } from "@/constants/metadata";

const dictionary = {
  baseUrl: "https://sparkmemos.com",
  websiteName: "Spark Memos",
  appName: "Spark Memos",
  appSummary: "Cattura rapidamente la tua ispirazione.",
  titleTemplate: "%s - Spark Memos",
  defaultTitle: "Spark Memos - Cattura rapidamente la tua ispirazione.",
  defaultDescription:
    "Lo strumento perfetto per catturare la tua ispirazione in movimento! Puoi annotare rapidamente i tuoi pensieri, idee e creatività ovunque tu sia. Oppure usalo per la lettura successiva, la scrittura di un diario o anche per organizzare la tua giornata. L'interfaccia intuitiva rende facile tenere traccia delle tue intuizioni e rimanere organizzato.",
  defaultKeywords: [
    "Spark Memos",
    "Tana",
    "Tana Capture",
    "Flomo",
    "iOS",
    "App",
    "iOS App",
    "Nota breve",
    "Ispirazione",
    "Presa di appunti",
    "Diario",
    "Lettura successiva",
    "Note rapide",
    "Cattura dell'ispirazione",
    "Diario delle idee",
    "Presa di appunti mobile",
    "Strumento di creatività",
    "Organizzatore di pensieri",
    "Promemoria istantanei",
    "App per il brainstorming",
    "Scrittura in movimento",
    "Strumento di produttività",
  ],
  urls: {
    home: "/it",
    blog: "/it/blog",
    terms: "/it/terms",
    privacy: "/it/privacy",
  },
  labels: {
    features: "Caratteristiche",
    reviews: "Recensioni",
    pricing: "Prezzi",
    faq: "FAQ",
    terms: "Termini",
    privacy: "Privacy",
    download: "Scarica",
    userTerms: "Termini utente",
    privacyPolicy: "Politica sulla privacy",
    downloadTheApp: "Scarica l'app",
    scanTheQrCode: "Scansiona il codice QR per scaricare l'app dall'App Store.",

    blog: "Blog",
  },
  blog: {
    title: "Blog di Spark Memos",
    description: "Leggi il nostro blog per saperne di più su Spark Memos.",
    toc: "Indice dei contenuti",
    categories: "Categorie",
    tags: "Tag",
  },
  homeSections: {
    hero: {
      title: "Cattura rapidamente la tua ispirazione.",
      description:
        "Lo strumento perfetto per catturare la tua ispirazione in movimento! Puoi annotare rapidamente i tuoi pensieri, idee e creatività ovunque tu sia. Oppure usalo per la lettura successiva, la scrittura di un diario o anche per organizzare la tua giornata.",
    },
    primaryFeatures: {
      title: "Cattura rapidamente la tua ispirazione. Provalo subito.",
      description:
        "Lo strumento perfetto per catturare la tua ispirazione in movimento! Puoi annotare rapidamente i tuoi pensieri, idee e creatività ovunque tu sia. Oppure usalo per la lettura successiva, la scrittura di un diario o anche per organizzare la tua giornata. L'interfaccia intuitiva rende facile tenere traccia delle tue intuizioni e rimanere organizzato.",
      inspiration: {
        title: "Cattura rapidamente la tua ispirazione",
        description:
          "Apri l'app, digita i tuoi pensieri e salva. È così semplice. Puoi anche aggiungere immagini e link ai tuoi promemoria.",
      },
      collections: {
        title: "Raccogli i tuoi pensieri in un unico posto",
        description:
          "Puoi organizzare i tuoi promemoria in collezioni per mantenere tutto ordinato.",
      },
      sync: {
        title: "Sincronizzazione iCloud",
        description:
          "I tuoi promemoria sono memorizzati nella memoria locale del tuo telefono. Puoi anche abilitare la sincronizzazione iCloud per mantenere i tuoi dati su tutti i tuoi dispositivi.",
      },
    },
    secondaryFeatures: {
      title: "Ora è il momento di iniziare.",
      description:
        "Con Spark Memos, puoi catturare rapidamente la tua ispirazione e tenere tutto in un unico posto.",
      types: {
        title: "Promemoria multi-tipo",
        description:
          "Crea promemoria con testo, immagini o link per tenere tutti i tuoi pensieri in un unico posto.",
      },
      collections: {
        title: "Collezioni personalizzate",
        description:
          "Organizza i tuoi promemoria in collezioni per mantenere i tuoi pensieri in ordine.",
      },
      share: {
        title: "Estensione di condivisione",
        description:
          "Con l'estensione di condivisione, puoi salvare qualsiasi link, testo o immagine da qualsiasi app.",
      },
      theme: {
        title: "Tema personalizzato",
        description:
          "Puoi personalizzare l'app per adattarla al tuo stile con temi personalizzati.",
      },
      review: {
        title: "Revisione rapida",
        description:
          "Puoi rivedere rapidamente i tuoi promemoria per mantenere i tuoi pensieri in ordine.",
      },
      privacy: {
        title: "Privacy al primo posto",
        description:
          "I tuoi promemoria sono memorizzati nella memoria locale del tuo telefono. Puoi anche abilitare la sincronizzazione iCloud per mantenere i tuoi dati su tutti i tuoi dispositivi.",
      },
    },
    callToAction: {
      title: "Scarica ora per iniziare",
      description:
        "Puoi iniziare immediatamente dopo aver scaricato dall'App Store. Non è necessario accedere o registrarsi.",
    },
    reviews: {
      title: "Tutti stanno cambiando le loro abitudini con Spark Memos.",
      description: "Guarda cosa hanno da dire i nostri utenti.",
    },
    pricing: {
      title: "Prezzi fissi, nessuna commissione di gestione.",
      description:
        "Che tu sia una persona che cerca di andare avanti o una grande azienda che cerca di conquistare il mondo, abbiamo un piano per te.",
      monthlyLabel: "Mensile",
      annuallyLabel: "Annuale",
      plans: [
        {
          name: "Freemium",
          featured: false,
          price: { Monthly: "0 €", Annually: "0 €" },
          description: "Vuoi provare l'app subito. Inizia gratuitamente.",
          button: {
            label: "Inizia gratuitamente",
            href: METADATA.appStoreLink,
          },
          features: ["Limitato a 5 collezioni", "Promemoria illimitati"],
          logomarkClassName: "fill-stone-300",
        },
        {
          name: "Premium",
          featured: true,
          price: { Monthly: "1,99 €", Annually: "9,99 €" },
          description:
            "Abbonati all'app per ricevere aggiornamenti e supporto continui.",
          button: {
            label: "Abbonati",
            href: METADATA.appStoreLink,
          },
          features: [
            "Tutte le funzionalità Freemium",
            "Sincronizzazione iCloud",
            "Collezioni illimitate",
            "Personalizzazione del tema",
          ],
          logomarkClassName: "fill-stone-500",
        },
        {
          name: "Lifetime",
          featured: false,
          price: { Monthly: "59,99 €", Annually: "59,99 €" },
          description:
            "Acquista una volta, usa per sempre. Ottieni tutte le funzionalità e gli aggiornamenti per tutta la vita.",
          button: {
            label: "Acquista ora",
            href: METADATA.appStoreLink,
          },
          features: [
            "Sincronizzazione iCloud",
            "Collezioni illimitate",
            "Personalizzazione del tema",
          ],
          logomarkClassName: "fill-orange-500",
        },
      ],
    },
    faq: {
      title: "Domande frequenti",
      description: "Se hai domande, non esitare a contattarci.",
      items: [
        [
          {
            question: "Cosa posso fare con Spark Memos?",
            answer:
              "Puoi usarlo per catturare la tua ispirazione in movimento! Puoi annotare rapidamente i tuoi pensieri, idee e creatività ovunque tu sia. Oppure usalo per la lettura successiva, la scrittura di un diario o anche per organizzare la tua giornata. L'interfaccia intuitiva rende facile tenere traccia delle tue intuizioni e rimanere organizzato.",
          },
          {
            question: "Che tipo di promemoria posso creare?",
            answer:
              "Puoi creare promemoria di testo, immagini, citazioni, link e persino registrazioni audio. Puoi anche organizzare i tuoi promemoria in collezioni per mantenere tutto ordinato.",
          },
        ],
        [
          {
            question: "Posso usare Spark Memos offline?",
            answer:
              "Sì, puoi usare Spark Memos offline. Puoi creare, modificare ed eliminare promemoria senza una connessione internet. Le tue modifiche verranno sincronizzate una volta tornato online.",
          },
          {
            question: "Dove Spark Memos memorizza i miei dati?",
            answer:
              "Spark Memos memorizza i tuoi dati nella memoria locale del tuo telefono. Puoi anche abilitare la sincronizzazione iCloud per mantenere i tuoi dati su tutti i tuoi dispositivi.",
          },
        ],
        [
          {
            question: "Spark Memos è disponibile su Android?",
            answer: "Spark Memos è attualmente disponibile solo su iOS.",
          },
          {
            question: "Come posso iniziare?",
            answer:
              "Puoi scaricare l'app dall'App Store e poi iniziare creando il tuo primo promemoria.",
          },
        ],
      ],
    },
  },
};

export default dictionary;
