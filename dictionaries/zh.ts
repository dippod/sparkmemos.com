import { METADATA } from "@/constants/metadata";

const dictionary = {
  baseUrl: "https://sparkmemos.com",
  websiteName: "星火记",
  appName: "星火记",
  appSummary: "快速捕捉你的灵感。",
  titleTemplate: "%s - 星火记",
  defaultTitle: "星火记 - 快速捕捉你的灵感.",
  defaultDescription:
    "这是一款完美的随时捕捉灵感的工具！无论你身在何处，都可以快速记录下你的想法、创意和灵感。你还可以用它来保存稍后阅读的内容，记日记，甚至是安排你的一天。直观的界面让你轻松跟踪你的见解并保持井井有条。",
  defaultKeywords: [
    "星火记",
    "Tana",
    "Tana Capture",
    "Flomo",
    "iOS",
    "App",
    "iOS App",
    "短笔记",
    "灵感",
    "灵感捕捉",
    "稍后阅读",
    "日记",
    "日程安排",
    "快速笔记",
    "创意工具",
    "想法组织",
    "即时备忘录",
    "头脑风暴应用",
    "移动写作",
    "生产力工具",
  ],
  urls: {
    home: "/zh",
    blog: "/zh/blog",
    terms: "/zh/terms",
    privacy: "/zh/privacy",
  },
  labels: {
    features: "特性",
    reviews: "评价",
    pricing: "价格",
    faq: "常见问题",
    terms: "条款",
    privacy: "隐私",
    download: "下载",
    userTerms: "用户条款",
    privacyPolicy: "隐私政策",
    downloadTheApp: "下载应用",
    scanTheQrCode: "扫描二维码立即从 App Store 下载",

    blog: "博客",
  },
  blog: {
    title: "星火记博客",
    description: "阅读我们的博客，了解更多关于星火记的信息。",
    toc: "目录",
    categories: "分类",
    tags: "标签",
  },
  homeSections: {
    hero: {
      title: "快速捕捉你的灵感。",
      description:
        "这是一款完美的随时捕捉灵感的工具！无论你身在何处，都可以快速记录下你的想法、创意和灵感。你还可以用它来保存稍后阅读的内容，记日记，甚至是安排你的一天。",
    },
    primaryFeatures: {
      title: "快速捕捉你的灵感。立即尝试。",
      description:
        "这是一款完美的随时捕捉灵感的工具！无论你身在何处，都可以快速记录下你的想法、创意和灵感。你还可以用它来保存稍后阅读的内容，记日记，甚至是安排你的一天。直观的界面让你轻松跟踪你的见解并保持井井有条。",
      inspiration: {
        title: "快速捕捉你的灵感",
        description:
          "打开应用，输入你的想法，然后保存。就是这么简单。你甚至可以在备忘录中添加图片和链接。",
      },
      collections: {
        title: "将你的想法集中在一处",
        description: "你可以将备忘录整理成集合，让一切井井有条。",
      },
      sync: {
        title: "iCloud 同步",
        description:
          "你的备忘录存储在手机的本地存储中。你还可以启用 iCloud 同步，以在所有设备上保持数据同步。",
      },
    },
    secondaryFeatures: {
      title: "现在是开始的时候了。",
      description: "使用星火记，你可以快速捕捉灵感并将所有内容集中在一处。",
      types: {
        title: "多类型备忘录",
        description: "创建包含文本、图片或链接的备忘录，将所有想法集中在一处。",
      },
      collections: {
        title: "自定义集合",
        description: "将你的备忘录整理成集合，让你的想法井井有条。",
      },
      share: {
        title: "分享扩展",
        description: "通过分享扩展，你可以从任何应用保存链接、文本或图片。",
      },
      theme: {
        title: "自定义主题",
        description: "你可以使用自定义主题来个性化应用，使其符合你的风格。",
      },
      review: {
        title: "快速回顾",
        description: "你可以快速回顾你的备忘录，保持思路清晰有序。",
      },
      privacy: {
        title: "隐私优先",
        description:
          "你的备忘录存储在手机的本地存储中。你还可以启用 iCloud 同步，以在所有设备上保持数据同步。",
      },
    },
    callToAction: {
      title: "立即开始",
      description: "使用星火记，你可以快速捕捉灵感并将所有内容集中在一处。",
    },
    reviews: {
      title: "每个人都在用星火记改变自己的习惯。",
      description: "看看我们的用户怎么说。",
    },
    pricing: {
      title: "统一定价，无管理费。",
      description:
        "无论你是想要提升自我的个人，还是想要征服世界的大公司，我们都有适合你的方案。",
      monthlyLabel: "按月",
      annuallyLabel: "按年",
      plans: [
        {
          name: "Freemium",
          featured: false,
          price: { Monthly: "¥0", Annually: "¥0" },
          description: "你想立即体验这款应用。现在就免费开始使用吧。",
          button: {
            label: "免费开始使用",
            href: METADATA.appStoreLink,
          },
          features: ["最多5个集合", "无限备忘录"],
          logomarkClassName: "fill-stone-300",
        },
        {
          name: "Premium",
          featured: true,
          price: { Monthly: "¥15", Annually: "¥68" },
          description: "订阅应用以获得持续的更新和支持。",
          button: {
            label: "订阅",
            href: METADATA.appStoreLink,
          },
          features: ["所有 Freemium 功能", "iCloud 同步", "无限集合", "主题自定义"],
          logomarkClassName: "fill-stone-500",
        },
        {
          name: "Lifetime",
          featured: false,
          price: { Monthly: "¥328", Annually: "¥328" },
          description: "一次购买，终身使用。获得所有功能和终身更新。",
          button: {
            label: "立即购买",
            href: METADATA.appStoreLink,
          },
          features: ["iCloud 同步", "无限集合", "主题自定义"],
          logomarkClassName: "fill-orange-500",
        },
      ],
    },
    faq: {
      title: "常见问题",
      description: "如果您有任何问题，请随时与我们联系。",
      items: [
        [
          {
            question: "我可以用星火记做什么？",
            answer:
              "您可以用它随时随地捕捉灵感！无论您在哪里，都可以快速记下您的想法、创意和灵感。您也可以用它来进行稍后阅读、写日记，甚至是安排您的一天。直观的界面使您能够轻松跟踪您的见解并保持组织。",
          },
          {
            question: "我可以创建什么类型的备忘录？",
            answer:
              "您可以记录文本备忘录、图片、引用、链接，甚至是音频录音。您还可以将备忘录整理到集合中，以保持一切整洁有序。",
          },
        ],
        [
          {
            question: "我可以离线使用星火记吗？",
            answer:
              "是的，您可以离线使用星火记。您可以在没有网络连接的情况下创建、编辑和删除备忘录。一旦您重新上线，您的更改将会同步。",
          },
          {
            question: "星火记将我的数据存储在哪里？",
            answer:
              "星火记将您的数据存储在您手机的本地存储中。您还可以启用 iCloud 同步，以在所有设备上保持数据同步。",
          },
        ],
        [
          {
            question: "星火记是否在安卓系统上可用？",
            answer: "星火记目前仅在 iOS 系统上可用。",
          },
          {
            question: "我如何开始使用？",
            answer:
              "您可以从 App Store 下载应用，然后通过创建您的第一个备忘录开始使用。",
          },
        ],
      ],
    },
  },
};

export default dictionary;
