import { METADATA } from "@/constants/metadata";

const dictionary = {
  baseUrl: "https://sparkmemos.com",
  websiteName: "Spark Memos",
  appName: "Spark Memos",
  appSummary: "빠르게 영감을 포착하세요.",
  titleTemplate: "%s - Spark Memos",
  defaultTitle: "Spark Memos - 빠르게 영감을 포착하세요.",
  defaultDescription:
    "이동 중에 영감을 포착하기 위한 완벽한 도구입니다! 어디서든 빠르게 생각, 아이디어, 창의성을 기록할 수 있습니다. 또는 나중에 읽기, 일기 쓰기, 심지어 하루 일정을 정리하는 데 사용할 수 있습니다. 직관적인 인터페이스로 통찰력을 쉽게 추적하고 정리할 수 있습니다.",
  defaultKeywords: [
    "Spark Memos",
    "Tana",
    "Tana Capture",
    "Flomo",
    "iOS",
    "App",
    "iOS App",
    "짧은 메모",
    "영감",
    "메모 작성",
    "일기",
    "나중에 읽기",
    "빠른 메모",
    "영감 포착",
    "아이디어 저널",
    "모바일 메모 작성",
    "창의성 도구",
    "생각 정리기",
    "즉석 메모",
    "브레인스토밍 앱",
    "이동 중 글쓰기",
    "생산성 도구",
  ],
  urls: {
    home: "/ko",
    blog: "/ko/blog",
    terms: "/ko/terms",
    privacy: "/ko/privacy",
  },
  labels: {
    features: "기능",
    reviews: "리뷰",
    pricing: "가격",
    faq: "자주 묻는 질문",
    terms: "이용 약관",
    privacy: "개인정보 보호정책",
    download: "다운로드",
    userTerms: "사용자 약관",
    privacyPolicy: "개인정보 보호정책",
    downloadTheApp: "앱 다운로드",
    scanTheQrCode: "QR 코드를 스캔하여 App Store에서 앱을 다운로드하세요.",

    blog: "블로그",
  },
  blog: {
    title: "Spark Memos 블로그",
    description: "Spark Memos에 대해 더 자세히 알아보려면 블로그를 읽어보세요.",
    toc: "목차",
    categories: "카테고리",
    tags: "태그",
  },
  homeSections: {
    hero: {
      title: "빠르게 영감을 포착하세요.",
      description:
        "이동 중에 영감을 포착하기 위한 완벽한 도구입니다! 어디서든 빠르게 생각, 아이디어, 창의성을 기록할 수 있습니다. 또는 나중에 읽기, 일기 쓰기, 심지어 하루 일정을 정리하는 데 사용할 수 있습니다.",
    },
    primaryFeatures: {
      title: "빠르게 영감을 포착하세요. 지금 바로 시도해보세요.",
      description:
        "이동 중에 영감을 포착하기 위한 완벽한 도구입니다! 어디서든 빠르게 생각, 아이디어, 창의성을 기록할 수 있습니다. 또는 나중에 읽기, 일기 쓰기, 심지어 하루 일정을 정리하는 데 사용할 수 있습니다. 직관적인 인터페이스로 통찰력을 쉽게 추적하고 정리할 수 있습니다.",
      inspiration: {
        title: "빠르게 영감을 포착하세요",
        description:
          "앱을 열고, 생각을 입력하고, 저장하세요. 정말 간단합니다. 메모에 이미지와 링크도 추가할 수 있습니다.",
      },
      collections: {
        title: "한 곳에서 생각을 모으세요",
        description:
          "메모를 컬렉션으로 정리하여 모든 것을 깔끔하게 유지할 수 있습니다.",
      },
      sync: {
        title: "iCloud 동기화",
        description:
          "메모는 휴대폰의 로컬 저장소에 저장됩니다. iCloud 동기화를 활성화하여 모든 기기에서 데이터를 유지할 수도 있습니다.",
      },
    },
    secondaryFeatures: {
      title: "지금이 시작할 때입니다.",
      description:
        "Spark Memos를 사용하면 빠르게 영감을 포착하고 모든 것을 한 곳에 보관할 수 있습니다.",
      types: {
        title: "다양한 유형의 메모",
        description:
          "텍스트, 이미지 또는 링크로 메모를 만들어 모든 생각을 한 곳에 보관하세요.",
      },
      collections: {
        title: "맞춤 컬렉션",
        description: "메모를 컬렉션으로 정리하여 생각을 체계적으로 유지하세요.",
      },
      share: {
        title: "공유 확장",
        description:
          "공유 확장을 사용하면 모든 앱에서 링크, 텍스트 또는 이미지를 저장할 수 있습니다.",
      },
      theme: {
        title: "맞춤 테마",
        description:
          "맞춤 테마로 앱을 자신의 스타일에 맞게 커스터마이즈할 수 있습니다.",
      },
      review: {
        title: "빠른 검토",
        description: "메모를 빠르게 검토하여 생각을 정리할 수 있습니다.",
      },
      privacy: {
        title: "개인정보 우선",
        description:
          "메모는 휴대폰의 로컬 저장소에 저장됩니다. iCloud 동기화를 활성화하여 모든 기기에서 데이터를 유지할 수도 있습니다.",
      },
    },
    callToAction: {
      title: "지금 다운로드하여 시작하세요",
      description:
        "App Store에서 다운로드 후 바로 시작할 수 있습니다. 로그인이나 가입이 필요 없습니다.",
    },
    reviews: {
      title: "모든 사람이 Spark Memos로 습관을 바꾸고 있습니다.",
      description: "사용자들의 의견을 확인해보세요.",
    },
    pricing: {
      title: "정액 가격, 관리 수수료 없음.",
      description:
        "앞서 나가려는 한 사람이든 세계를 정복하려는 대기업이든, 우리는 당신을 위한 플랜을 가지고 있습니다.",
      monthlyLabel: "월간",
      annuallyLabel: "연간",
      plans: [
        {
          name: "Freemium",
          featured: false,
          price: { Monthly: "₩0", Annually: "₩0" },
          description:
            "지금 바로 앱을 경험해보고 싶으신가요? 무료로 시작하세요.",
          button: {
            label: "무료로 시작하기",
            href: METADATA.appStoreLink,
          },
          features: ["5개의 컬렉션 제한", "무제한 메모"],
          logomarkClassName: "fill-stone-300",
        },
        {
          name: "Premium",
          featured: true,
          price: { Monthly: "₩3,300", Annually: "₩14,000" },
          description: "앱을 구독하여 지속적인 업데이트와 지원을 받으세요.",
          button: {
            label: "구독하기",
            href: METADATA.appStoreLink,
          },
          features: [
            "Freemium의 모든 기능",
            "iCloud 동기화",
            "무제한 컬렉션",
            "테마 커스터마이제이션",
          ],
          logomarkClassName: "fill-stone-500",
        },
        {
          name: "Lifetime",
          featured: false,
          price: { Monthly: "₩66,000", Annually: "₩66,000" },
          description:
            "한 번 구매로 평생 사용하세요. 모든 기능과 업데이트를 평생 동안 이용할 수 있습니다.",
          button: {
            label: "지금 구매하기",
            href: METADATA.appStoreLink,
          },
          features: ["iCloud 동기화", "무제한 컬렉션", "테마 커스터마이제이션"],
          logomarkClassName: "fill-orange-500",
        },
      ],
    },
    faq: {
      title: "자주 묻는 질문",
      description: "질문이 있으시면 언제든 문의해 주세요.",
      items: [
        [
          {
            question: "Spark Memos로 무엇을 할 수 있나요?",
            answer:
              "이동 중에 영감을 포착하는 데 사용할 수 있습니다! 어디서든 빠르게 생각, 아이디어, 창의성을 기록할 수 있습니다. 또는 나중에 읽기, 일기 쓰기, 심지어 하루 일정을 정리하는 데 사용할 수 있습니다. 직관적인 인터페이스로 통찰력을 쉽게 추적하고 정리할 수 있습니다.",
          },
          {
            question: "어떤 종류의 메모를 만들 수 있나요?",
            answer:
              "텍스트 메모, 이미지, 인용구, 링크, 심지어 음성 녹음도 할 수 있습니다. 또한 메모를 컬렉션으로 정리하여 모든 것을 깔끔하게 유지할 수 있습니다.",
          },
        ],
        [
          {
            question: "Spark Memos를 오프라인에서 사용할 수 있나요?",
            answer:
              "네, Spark Memos를 오프라인에서 사용할 수 있습니다. 인터넷 연결 없이 메모를 생성, 편집, 삭제할 수 있습니다. 온라인 상태가 되면 변경 사항이 동기화됩니다.",
          },
          {
            question: "Spark Memos는 내 데이터를 어디에 저장하나요?",
            answer:
              "Spark Memos는 휴대폰의 로컬 저장소에 데이터를 저장합니다. iCloud 동기화를 활성화하여 모든 기기에서 데이터를 유지할 수도 있습니다.",
          },
        ],
        [
          {
            question: "Spark Memos는 안드로이드에서 사용할 수 있나요?",
            answer: "Spark Memos는 현재 iOS에서만 사용 가능합니다.",
          },
          {
            question: "어떻게 시작할 수 있나요?",
            answer:
              "App Store에서 앱을 다운로드한 후 첫 번째 메모를 작성하여 시작할 수 있습니다.",
          },
        ],
      ],
    },
  },
};

export default dictionary;
