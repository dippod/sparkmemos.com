import { METADATA } from "@/constants/metadata";

const dictionary = {
  baseUrl: "https://sparkmemos.com",
  websiteName: "Spark Memos",
  appName: "Spark Memos",
  appSummary: "素早くインスピレーションをキャプチャ。",
  titleTemplate: "%s - Spark Memos",
  defaultTitle: "Spark Memos - 素早くインスピレーションをキャプチャ。",
  defaultDescription:
    "外出先でインスピレーションをキャプチャするための完璧なツール！どこにいても、思考、アイデア、創造性を素早くメモできます。後で読むためや、日記、さらには1日のスケジュール管理にも使用できます。直感的なインターフェースで、洞察を簡単に追跡し、整理することができます。",
  defaultKeywords: [
    "Spark Memos",
    "Tana",
    "Tana Capture",
    "Flomo",
    "iOS",
    "App",
    "iOS App",
    "ショートノート",
    "インスピレーション",
    "メモ取り",
    "日記",
    "後で読む",
    "クイックノート",
    "インスピレーションキャプチャ",
    "アイデアジャーナル",
    "モバイルメモ取り",
    "創造性ツール",
    "思考整理",
    "インスタントメモ",
    "ブレインストーミングアプリ",
    "外出先での執筆",
    "生産性ツール",
  ],
  urls: {
    home: "/ja",
    blog: "/ja/blog",
    terms: "/ja/terms",
    privacy: "/ja/privacy",
  },
  labels: {
    features: "機能",
    reviews: "レビュー",
    pricing: "価格",
    faq: "よくある質問",
    terms: "利用規約",
    privacy: "プライバシー",
    download: "ダウンロード",
    userTerms: "ユーザー利用規約",
    privacyPolicy: "プライバシーポリシー",
    downloadTheApp: "アプリをダウンロード",
    scanTheQrCode: "QRコードをスキャンしてApp Storeからアプリをダウンロード。",

    blog: "ブログ",
  },
  blog: {
    title: "Spark Memosブログ",
    description: "Spark Memosについてもっと知るには、ブログをお読みください。",
    toc: "目次",
    categories: "カテゴリー",
    tags: "タグ",
  },
  homeSections: {
    hero: {
      title: "素早くインスピレーションをキャプチャ。",
      description:
        "外出先でインスピレーションをキャプチャするための完璧なツール！どこにいても、思考、アイデア、創造性を素早くメモできます。後で読むためや、日記、さらには1日のスケジュール管理にも使用できます。",
    },
    primaryFeatures: {
      title: "素早くインスピレーションをキャプチャ。今すぐ試してみてください。",
      description:
        "外出先でインスピレーションをキャプチャするための完璧なツール！どこにいても、思考、アイデア、創造性を素早くメモできます。後で読むためや、日記、さらには1日のスケジュール管理にも使用できます。直感的なインターフェースで、洞察を簡単に追跡し、整理することができます。",
      inspiration: {
        title: "素早くインスピレーションをキャプチャ",
        description:
          "アプリを開き、思考を入力し、保存するだけです。それほど簡単です。メモに画像やリンクを追加することもできます。",
      },
      collections: {
        title: "思考を一箇所に集める",
        description:
          "メモをコレクションに整理して、すべてを整頓することができます。",
      },
      sync: {
        title: "iCloud同期",
        description:
          "メモはお使いの携帯電話のローカルストレージに保存されます。iCloud同期を有効にして、すべてのデバイス間でデータを保持することもできます。",
      },
    },
    secondaryFeatures: {
      title: "今こそ始める時です。",
      description:
        "Spark Memosを使えば、素早くインスピレーションをキャプチャし、すべてを一箇所に保管できます。",
      types: {
        title: "マルチタイプメモ",
        description:
          "テキスト、画像、またはリンクを含むメモを作成して、すべての思考を一箇所に保管できます。",
      },
      collections: {
        title: "カスタムコレクション",
        description:
          "メモをコレクションに整理して、思考を整理することができます。",
      },
      share: {
        title: "共有拡張機能",
        description:
          "共有拡張機能を使用すると、任意のアプリからリンク、テキスト、または画像を保存できます。",
      },
      theme: {
        title: "カスタムテーマ",
        description:
          "カスタムテーマでアプリをあなたのスタイルに合わせてカスタマイズできます。",
      },
      review: {
        title: "クイックレビュー",
        description: "メモを素早くレビューして、思考を整理することができます。",
      },
      privacy: {
        title: "プライバシー重視",
        description:
          "メモはお使いの携帯電話のローカルストレージに保存されます。iCloud同期を有効にして、すべてのデバイス間でデータを保持することもできます。",
      },
    },
    callToAction: {
      title: "今すぐダウンロードして始めましょう",
      description:
        "App Storeからダウンロードした後、すぐに始めることができます。サインインやサインアップは必要ありません。",
    },
    reviews: {
      title: "みんながSpark Memosで習慣を変えています。",
      description: "ユーザーの声をご覧ください。",
    },
    pricing: {
      title: "定額料金、管理費なし。",
      description:
        "一人で前進しようとしている個人でも、世界を征服しようとしている大企業でも、あなたに合ったプランがあります。",
      monthlyLabel: "月額",
      annuallyLabel: "年額",
      plans: [
        {
          name: "Freemium",
          featured: false,
          price: { Monthly: "¥0", Annually: "¥0" },
          description:
            "今すぐアプリを体験したい方。無料で始めることができます。",
          button: {
            label: "無料で始める",
            href: METADATA.appStoreLink,
          },
          features: ["5コレクション制限", "無制限のメモ"],
          logomarkClassName: "fill-stone-300",
        },
        {
          name: "Premium",
          featured: true,
          price: { Monthly: "¥300", Annually: "¥1,500" },
          description:
            "アプリを購読して、継続的なアップデートとサポートを受けられます。",
          button: {
            label: "購読する",
            href: METADATA.appStoreLink,
          },
          features: [
            "Freemium のすべての機能",
            "iCloud同期",
            "無制限のコレクション",
            "テーマのカスタマイズ",
          ],
          logomarkClassName: "fill-stone-500",
        },
        {
          name: "Lifetime",
          featured: false,
          price: { Monthly: "¥7000", Annually: "¥7000" },
          description:
            "一度購入すれば、永久に使用できます。すべての機能とアップデートを生涯利用できます。",
          button: {
            label: "今すぐ購入",
            href: METADATA.appStoreLink,
          },
          features: [
            "iCloud同期",
            "無制限のコレクション",
            "テーマのカスタマイズ",
          ],
          logomarkClassName: "fill-orange-500",
        },
      ],
    },
    faq: {
      title: "よくある質問",
      description: "ご質問がある場合は、お気軽にお問い合わせください。",
      items: [
        [
          {
            question: "Spark Memosで何ができますか？",
            answer:
              "外出先でインスピレーションをキャプチャするのに使用できます！どこにいても、思考、アイデア、創造性を素早くメモできます。後で読むためや、日記、さらには1日のスケジュール管理にも使用できます。直感的なインターフェースで、洞察を簡単に追跡し、整理することができます。",
          },
          {
            question: "どのような種類のメモを作成できますか？",
            answer:
              "テキストメモ、画像、引用、リンク、さらには音声録音も作成できます。また、メモをコレクションに整理して、すべてを整頓することもできます。",
          },
        ],
        [
          {
            question: "Spark Memosをオフラインで使用できますか？",
            answer:
              "はい、Spark Memosはオフラインで使用できます。インターネット接続なしでメモの作成、編集、削除が可能です。オンラインに戻ると、変更が同期されます。",
          },
          {
            question: "Spark Memosはデータをどこに保存しますか？",
            answer:
              "Spark Memosはお使いの携帯電話のローカルストレージにデータを保存します。iCloud同期を有効にして、すべてのデバイス間でデータを保持することもできます。",
          },
        ],
        [
          {
            question: "Spark MemosはAndroidで利用できますか？",
            answer: "Spark Memosは現在、iOSのみで利用可能です。",
          },
          {
            question: "どのように始めればいいですか？",
            answer:
              "App Storeからアプリをダウンロードし、最初のメモを作成することで始めることができます。",
          },
        ],
      ],
    },
  },
};

export default dictionary;
