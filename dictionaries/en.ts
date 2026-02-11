import { METADATA } from "@/constants/metadata";

const dictionary = {
  baseUrl: "https://sparkmemos.com",
  websiteName: "Spark Memos",
  appName: "Spark Memos",
  appSummary: "Quickly capture your inspiration.",
  titleTemplate: "%s - Spark Memos",
  defaultTitle: "Spark Memos - Quickly capture your inspiration.",
  defaultDescription:
    "The perfect tool for capturing your inspiration on the go! You can quickly jot down your thoughts, ideas, and creativity wherever you are. Or use it for later reading, journaling, or even organizing your day. The intuitive interface makes it easy to keep track of your insights and stay organized.",
  defaultKeywords: [
    "Spark Memos",
    "Tana",
    "Tana Capture",
    "Flomo",
    "iOS",
    "App",
    "iOS App",
    "Short Note",
    "Inspiration",
    "Note-taking",
    "Diary",
    "Read Later",
    "Quick Notes",
    "Inspiration Capture",
    "Idea Journal",
    "Mobile Note-Taking",
    "Creativity Tool",
    "Thought Organizer",
    "Instant Memos",
    "Brainstorming App",
    "On-the-Go Writing",
    "Productivity Tool",
  ],
  urls: {
    home: "/en",
    blog: "/en/blog",
    terms: "/en/terms",
    privacy: "/en/privacy",
  },
  labels: {
    features: "Features",
    reviews: "Reviews",
    pricing: "Pricing",
    faq: "FAQs",
    terms: "Terms",
    privacy: "Privacy",
    download: "Download",
    userTerms: "User Terms",
    privacyPolicy: "Privacy Policy",
    downloadTheApp: "Download the app",
    scanTheQrCode: "Scan the QR code to download the app from the App Store.",

    blog: "Blog",
  },
  blog: {
    title: "Spark Memos Blog",
    description: "Read our blog to learn more about Spark Memos.",
    toc: "Table of Contents",
    categories: "Categories",
    tags: "Tags",
  },
  homeSections: {
    hero: {
      title: "Quickly capture your inspiration.",
      description:
        "The perfect tool for capturing your inspiration on the go! You can quickly jot down your thoughts, ideas, and creativity wherever you are. Or use it for later reading, journaling, or even organizing your day.",
    },
    primaryFeatures: {
      title: "Quickly capture your inspiration. Try it right now.",
      description:
        "The perfect tool for capturing your inspiration on the go! You can quickly jot down your thoughts, ideas, and creativity wherever you are. Or use it for later reading, journaling, or even organizing your day. The intuitive interface makes it easy to keep track of your insights and stay organized.",
      inspiration: {
        title: "Quickly capture your inspiration",
        description:
          "Open the app, type your thoughts, and hit save. It’s that easy. You can even add images and links to your memos.",
      },
      collections: {
        title: "Collect your thoughts in one place",
        description:
          "You can organize your memos into collections to keep everything tidy.",
      },
      sync: {
        title: "iCloud Sync",
        description:
          "Your memos are stored in the local storage of your phone. You can also enable iCloud sync to keep your data across all your devices.",
      },
    },
    secondaryFeatures: {
      title: "Now is the time to get started.",
      description:
        "With Spark Memos, you can quickly capture your inspiration and keep everything in one place.",
      types: {
        title: "Multi-type Memos",
        description:
          "Create memos with text, images, or links to keep all your thoughts in one place.",
      },
      collections: {
        title: "Custom Collections",
        description:
          "Organize your memos in collections to keep your thoughts in order.",
      },
      share: {
        title: "Share Extension",
        description:
          "With the share extension, you can save any link, text, or image from any app.",
      },
      theme: {
        title: "Custom Theme",
        description:
          "You can customize the app to match your style with custom themes.",
      },
      review: {
        title: "Quickly Review",
        description:
          "You can quickly review your memos to keep your thoughts in order.",
      },
      privacy: {
        title: "Privacy First",
        description:
          "Your memos are stored in the local storage of your phone. You can also enable iCloud sync to keep your data across all your devices.",
      },
    },
    callToAction: {
      title: "Download now to get started",
      description:
        "You can get started immediately after downloaded from App Store. No sing in or sign up needed.",
    },
    reviews: {
      title: "Everyone is changing their habits with Spark Memos.",
      description: "See what our users have to say.",
    },
    pricing: {
      title: "Flat pricing, no management fees.",
      description:
        "Whether you’re one person trying to get ahead or a big firm trying to take over the world, we’ve got a plan for you.",
      monthlyLabel: "Monthly",
      annuallyLabel: "Annually",
      plans: [
        {
          name: "Freemium",
          featured: false,
          price: { Monthly: "$0", Annually: "$0" },
          description:
            "You want experience the app right now. Get started for free.",
          button: {
            label: "Get started for free",
            href: METADATA.appStoreLink,
          },
          features: ["5 Collections limited", "Unlimited memos"],
          logomarkClassName: "fill-stone-300",
        },
        {
          name: "Premium",
          featured: true,
          price: { Monthly: "$1.9", Annually: "$9.9" },
          description:
            "Subscribe the app to receive continuous updates and support.",
          button: {
            label: "Subscribe",
            href: METADATA.appStoreLink,
          },
          features: [
            "All Freemium features",
            "iCloud Sync",
            "Unlimited Collections",
            "Theme Customization",
          ],
          logomarkClassName: "fill-stone-500",
        },
        {
          name: "Lifetime",
          featured: false,
          price: { Monthly: "$49", Annually: "$49" },
          description:
            "Buy once, use forever. Get all the features and updates for a lifetime.",
          button: {
            label: "Buy now",
            href: METADATA.appStoreLink,
          },
          features: [
            "iCloud sync",
            "Unlimited collections",
            "Theme customization",
          ],
          logomarkClassName: "fill-orange-500",
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      description: "If you have any questions, please feel free to contact us.",
      items: [
        [
          {
            question: "What can I do with Spark Memos?",
            answer:
              "You can use it to capture you inspiration on the go! You can quickly jot down your thoughts, ideas, and creativity wherever you are. Or use it for later reading, journaling, or even organizing your day. The intuitive interface makes it easy to keep track of your insights and stay organized.",
          },
          {
            question: "What kind of memos can I create?",
            answer:
              "You can take down text memos, images, quotes, links, and even audio recordings. You can also organize your memos into collections to keep everything tidy.",
          },
        ],
        [
          {
            question: "Can I use Spark Memos offline?",
            answer:
              "Yes, you can use Spark Memos offline. You can create, edit, and delete memos without an internet connection. Your changes will be synced once you're back online.",
          },
          {
            question: "Where Spark Memos store my data?",
            answer:
              "Spark Memos stores your data in the local storage of your phone. You can also enable iCloud sync to keep your data across all your devices.",
          },
        ],
        [
          {
            question: "Is Spark Memos available on Android?",
            answer: "Spark Memos is currently available on iOS only.",
          },
          {
            question: "How do I get started?",
            answer:
              "You can download the app from the App Store then get started by creating your first memo.",
          },
        ],
      ],
    },
  },
};

export default dictionary;
