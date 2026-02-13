import { Language } from "@/dictionaries";

export const comparisonSlugs = ["flomo", "notion", "apple-notes"] as const;

export type ComparisonSlug = (typeof comparisonSlugs)[number];

type CopyLocale = "en" | "zh";

export type ComparisonTableRow = {
  category: string;
  feature: string;
  spark: string;
  competitor: string;
  sparkOnly?: boolean;
};

export type ComparisonScenario = {
  title: string;
  sparkFlow: string[];
  competitorFlow: string[];
  outcome: string;
};

export type ComparisonMigrationStep = {
  title: string;
  description: string;
};

export type ComparisonFaq = {
  question: string;
  answer: string;
};

export type ComparisonPageContent = {
  slug: ComparisonSlug;
  competitorName: string;
  badge: string;
  title: string;
  description: string;
  lastUpdated: string;
  summary: Array<{ label: string; value: string }>;
  sparkOnlyTitle: string;
  sparkOnlyDescription: string;
  sparkOnlyFeatures: Array<{ title: string; description: string }>;
  matrixTitle: string;
  matrixDescription: string;
  matrixRows: ComparisonTableRow[];
  scenarioTitle: string;
  scenarioDescription: string;
  scenarios: ComparisonScenario[];
  migrationTitle: string;
  migrationDescription: string;
  migrationSteps: ComparisonMigrationStep[];
  faqTitle: string;
  faq: ComparisonFaq[];
  conclusion: string;
  cta: string;
  cardTitle: string;
  cardDescription: string;
  seoTitle: string;
  seoDescription: string;
};

export type ComparisonLocaleContent = {
  index: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: Array<{ title: string; description: string }>;
    openPageLabel: string;
    seoTitle: string;
    seoDescription: string;
  };
  footer: {
    title: string;
    allComparisons: string;
    sparkVsTemplate: string;
  };
  table: {
    featureColumn: string;
    sparkColumn: string;
    competitorColumn: string;
    sparkOnlyBadge: string;
  };
  scenarioLabels: {
    sparkFlow: string;
    competitorFlow: string;
    outcome: string;
  };
  common: {
    backToAll: string;
    migrationPrefix: string;
    faqEyebrow: string;
    ctaTitle: string;
  };
  pages: Record<ComparisonSlug, ComparisonPageContent>;
};

const comparisonContent = {
  zh: {
    index: {
      eyebrow: "竞品对比",
      title: "用真实工作流，看清星火记和常见竞品的差异",
      description:
        "我们把日常高频场景拆成可执行流程，逐项对比 Flomo、Notion、Apple Notes。重点不是堆功能，而是验证“捕捉速度、回顾效率、隐私控制”这三件最影响长期坚持的核心能力。",
      highlights: [
        {
          title: "结构化对比矩阵",
          description: "从采集、组织、回顾、隐私、定价 5 大维度做逐项评估。",
        },
        {
          title: "突出星火记独有能力",
          description:
            "明确标出“无账号即可用、本地优先+可选 iCloud、快速回顾”等差异化能力。",
        },
        {
          title: "给出迁移路径",
          description: "不是只说优点，还给你从现有工具迁移到星火记的具体步骤。",
        },
      ],
      openPageLabel: "查看详细对比",
      seoTitle: "星火记竞品对比",
      seoDescription:
        "查看星火记与 Flomo、Notion、Apple Notes 的详细功能与场景对比，快速选择更适合灵感捕捉的工具。",
    },
    footer: {
      title: "竞品对比",
      allComparisons: "全部对比",
      sparkVsTemplate: "星火记 vs {name}",
    },
    table: {
      featureColumn: "能力项",
      sparkColumn: "星火记",
      competitorColumn: "竞品表现",
      sparkOnlyBadge: "星火记独有",
    },
    scenarioLabels: {
      sparkFlow: "星火记流程",
      competitorFlow: "竞品流程",
      outcome: "效果差异",
    },
    common: {
      backToAll: "返回对比总览",
      migrationPrefix: "步骤",
      faqEyebrow: "常见问题",
      ctaTitle: "想要更快、更轻、更可控的灵感捕捉体验？",
    },
    pages: {
      "flomo": {
        slug: "flomo",
        competitorName: "Flomo",
        badge: "灵感速记对比",
        title: "星火记 vs Flomo：同样是速记，为什么体验差距会越用越大",
        description:
          "Flomo 在碎片想法记录上很常见，但当你开始需要图片/链接混合记录、离线稳定输入、按主题做回顾时，星火记会更接近“可长期执行的个人知识入口”。",
        lastUpdated: "2026-02-13",
        summary: [
          { label: "更适合谁", value: "需要长期沉淀灵感、并持续回顾的人" },
          { label: "上手成本", value: "星火记更低，打开即可记" },
          { label: "离线可靠性", value: "星火记更强（本地优先）" },
          { label: "差异关键", value: "无账号即用 + 快速回顾 + 多类型备忘" },
        ],
        sparkOnlyTitle: "星火记独有价值（Flomo 当前不具备）",
        sparkOnlyDescription:
          "以下能力不是“参数更高”，而是会直接改变你每天是否愿意继续记、继续复盘。",
        sparkOnlyFeatures: [
          {
            title: "无账号即可开始记录",
            description:
              "安装后立即写，不需要先完成注册和服务绑定，减少捕捉前阻力。",
          },
          {
            title: "本地优先存储 + 可选 iCloud",
            description:
              "先保证本机可用与隐私可控，再按需开启多设备同步，节奏由你决定。",
          },
          {
            title: "跨 App 分享扩展一键入库",
            description:
              "把网页、图片、文本从任意 App 直接送进星火记，减少复制粘贴中断。",
          },
          {
            title: "快速回顾模式",
            description:
              "对灵感进行高频“二次阅读”，避免记录完就沉底。",
          },
        ],
        matrixTitle: "功能与工作流对比矩阵",
        matrixDescription:
          "我们按“捕捉-整理-回顾-隐私-成本”完整链路评估，而不是只看单一记笔记入口。",
        matrixRows: [
          {
            category: "采集",
            feature: "打开即记，无需先登录",
            spark: "支持，首次打开即可创建第一条备忘",
            competitor: "通常需要先登录或完成服务绑定",
            sparkOnly: true,
          },
          {
            category: "采集",
            feature: "分享扩展保存文本/图片/链接",
            spark: "支持，从任意 App 一步保存",
            competitor: "跨 App 采集能力较弱，流程更依赖手动整理",
            sparkOnly: true,
          },
          {
            category: "采集",
            feature: "多类型备忘（文本/图片/链接）",
            spark: "内建支持并统一管理",
            competitor: "以文字流为主，多媒体组织深度有限",
          },
          {
            category: "整理",
            feature: "按集合组织灵感",
            spark: "支持自定义集合与长期归档",
            competitor: "更偏时间流浏览，主题化组织弹性较弱",
          },
          {
            category: "回顾",
            feature: "快速回顾机制",
            spark: "支持高频复盘，适合每日回看",
            competitor: "缺少专门的快回顾入口",
            sparkOnly: true,
          },
          {
            category: "隐私",
            feature: "本地优先 + 可选云同步",
            spark: "默认本地存储，可选开启 iCloud",
            competitor: "主要依赖云端账号体系",
            sparkOnly: true,
          },
          {
            category: "隐私",
            feature: "无需账号即可长期使用",
            spark: "支持",
            competitor: "通常不支持",
            sparkOnly: true,
          },
          {
            category: "个性化",
            feature: "主题自定义",
            spark: "支持",
            competitor: "可定制空间较小",
          },
          {
            category: "成本",
            feature: "定价选项",
            spark: "免费版 + 订阅 + 终身买断",
            competitor: "以订阅为主，选择较少",
          },
        ],
        scenarioTitle: "真实使用场景对比",
        scenarioDescription: "下面三个场景最容易暴露“记得快”和“用得久”之间的差异。",
        scenarios: [
          {
            title: "通勤路上突然有想法",
            sparkFlow: [
              "解锁手机 -> 打开星火记",
              "输入一句话并补一张图",
              "保存后自动进入待回顾队列",
            ],
            competitorFlow: [
              "打开应用 -> 进入记录页",
              "以文本为主记录，附加素材需额外处理",
              "后续回顾依赖手动翻时间流",
            ],
            outcome: "星火记更容易把“瞬时灵感”变成“后续可复用素材”。",
          },
          {
            title: "从社交媒体收藏资料",
            sparkFlow: [
              "在目标 App 点击分享",
              "选择星火记扩展",
              "文本/链接/图片直接入库到指定集合",
            ],
            competitorFlow: [
              "复制链接或截图",
              "切回应用手动粘贴",
              "后续再手动分类",
            ],
            outcome: "星火记显著减少应用切换与信息丢失。",
          },
          {
            title: "每周做一次灵感复盘",
            sparkFlow: [
              "进入快速回顾",
              "按集合回看本周记录",
              "标记下一步行动",
            ],
            competitorFlow: [
              "按时间线逐条翻看",
              "筛选与复盘动作依赖手工",
              "难以形成固定复盘节奏",
            ],
            outcome: "星火记更容易建立“记录 -> 提炼 -> 执行”的闭环。",
          },
        ],
        migrationTitle: "从 Flomo 迁移到星火记的建议路径",
        migrationDescription:
          "先平滑迁移高频输入，再逐步升级你的整理与回顾习惯，不需要一次性重做所有历史内容。",
        migrationSteps: [
          {
            title: "先迁移未来 14 天的新记录",
            description: "先把日常新增内容切到星火记，快速感受采集效率差异。",
          },
          {
            title: "建立 3 个核心集合",
            description: "建议从“工作洞察 / 生活灵感 / 待验证想法”开始，避免初期分类过细。",
          },
          {
            title: "启用分享扩展",
            description: "把信息入口从“复制粘贴”升级为“一键入库”。",
          },
          {
            title: "固定每周一次快速回顾",
            description: "每次 10 分钟，筛出可执行想法，形成真实产出。",
          },
        ],
        faqTitle: "Flomo 用户最常问的问题",
        faq: [
          {
            question: "我已经在 Flomo 记了很多内容，还值得切换吗？",
            answer:
              "值得。你可以先从新内容开始切换，历史内容按主题分批迁移，不需要一次做完。",
          },
          {
            question: "星火记会不会太重，不像速记工具？",
            answer:
              "不会。星火记的核心仍是“秒开秒记”，只是额外提供了回顾和组织能力，方便你长期坚持。",
          },
          {
            question: "离线时记录会受影响吗？",
            answer:
              "不会。星火记采用本地优先方式，离线创建和编辑都可正常进行。",
          },
        ],
        conclusion:
          "如果你已经从“随手记”走到“希望沉淀和复用”，星火记会比 Flomo 更适合长期使用。",
        cta: "下载星火记，体验真正可持续的灵感管理",
        cardTitle: "星火记 vs Flomo",
        cardDescription: "从速记到复盘，比较两者在长期使用上的关键差异。",
        seoTitle: "星火记 vs Flomo 对比",
        seoDescription:
          "详细对比星火记与 Flomo 在采集速度、离线能力、回顾效率和隐私控制上的差异。",
      },
      "notion": {
        slug: "notion",
        competitorName: "Notion",
        badge: "移动捕捉效率对比",
        title: "星火记 vs Notion：当你只想“快速记下一个想法”",
        description:
          "Notion 适合团队协作和系统化文档，但在“手机上的瞬时灵感捕捉”这件事上，星火记更轻更快。两者并不是替代关系，而是入口效率的不同。",
        lastUpdated: "2026-02-13",
        summary: [
          { label: "更适合谁", value: "重视移动端捕捉速度的个人用户" },
          { label: "记录阻力", value: "星火记更低（减少页面结构负担）" },
          { label: "离线与隐私", value: "星火记更可控（本地优先）" },
          { label: "差异关键", value: "轻量输入闭环 vs 重型工作区结构" },
        ],
        sparkOnlyTitle: "星火记独有价值（Notion 不提供）",
        sparkOnlyDescription:
          "当你在电梯口、地铁里、会议间隙记录一条想法时，这些差异会非常明显。",
        sparkOnlyFeatures: [
          {
            title: "无账号即可直接使用",
            description: "不需要先创建工作区或账号，降低即刻输入门槛。",
          },
          {
            title: "本地优先，离线记录更稳",
            description: "即使网络波动，也不会打断输入与保存。",
          },
          {
            title: "快速回顾用于二次提炼",
            description: "把“收集箱”变成“行动清单”，避免灵感被遗忘。",
          },
          {
            title: "专注灵感捕捉的交互模型",
            description: "优先保证输入路径短，不把页面结构编辑压力前置到第一步。",
          },
        ],
        matrixTitle: "功能与工作流对比矩阵",
        matrixDescription:
          "如果你的目标是“先抓住想法，再慢慢整理”，星火记会更符合移动端真实场景。",
        matrixRows: [
          {
            category: "采集",
            feature: "打开即写，不创建工作区",
            spark: "支持，直达输入",
            competitor: "通常需先进入账号与工作区上下文",
            sparkOnly: true,
          },
          {
            category: "采集",
            feature: "分享扩展快速入库",
            spark: "支持文本/图片/链接一键保存",
            competitor: "可实现但步骤更重，入口分散",
          },
          {
            category: "采集",
            feature: "多类型备忘统一管理",
            spark: "原生支持并保持轻量",
            competitor: "能力强但配置成本更高",
          },
          {
            category: "整理",
            feature: "轻量集合管理",
            spark: "适合个人灵感归档",
            competitor: "偏数据库与页面系统",
          },
          {
            category: "回顾",
            feature: "快速回顾入口",
            spark: "支持",
            competitor: "缺少专门快回顾机制",
            sparkOnly: true,
          },
          {
            category: "隐私",
            feature: "本地优先存储策略",
            spark: "支持，可选 iCloud",
            competitor: "以云端工作区为主",
            sparkOnly: true,
          },
          {
            category: "隐私",
            feature: "无需账号长期使用",
            spark: "支持",
            competitor: "通常不支持",
            sparkOnly: true,
          },
          {
            category: "个性化",
            feature: "主题定制",
            spark: "支持",
            competitor: "界面个性化空间有限",
          },
          {
            category: "成本",
            feature: "付费选择",
            spark: "免费 + 订阅 + 终身",
            competitor: "以订阅方案为主",
          },
        ],
        scenarioTitle: "真实使用场景对比",
        scenarioDescription: "当记录发生在碎片时间，流程长度会直接决定你是否真正写下来。",
        scenarios: [
          {
            title: "会议中临时冒出一个想法",
            sparkFlow: [
              "打开星火记直接输入",
              "保存并打到目标集合",
              "会后进入快速回顾补充细节",
            ],
            competitorFlow: [
              "打开 Notion 并定位页面/数据库",
              "创建条目并选择字段",
              "会后再补齐结构",
            ],
            outcome: "星火记把输入动作压缩到最短，降低“没来得及记”的概率。",
          },
          {
            title: "阅读文章时想保存关键段落",
            sparkFlow: [
              "分享到星火记",
              "自动保存链接与摘要",
              "后续按集合统一回顾",
            ],
            competitorFlow: [
              "复制到 Notion 页面",
              "再处理页面结构和排版",
              "后续回顾常被文档噪音干扰",
            ],
            outcome: "星火记更适合做“输入层”，Notion 更适合做“整理层”。",
          },
          {
            title: "每周梳理行动项",
            sparkFlow: [
              "快速回顾本周灵感",
              "筛选可执行条目",
              "导出到任务系统执行",
            ],
            competitorFlow: [
              "在多个页面中查找碎片记录",
              "手工抽取重点",
              "整合成本更高",
            ],
            outcome: "星火记更容易持续形成固定周回顾习惯。",
          },
        ],
        migrationTitle: "从 Notion 迁移到星火记的建议路径",
        migrationDescription: "最有效的方式是“保留 Notion 做知识整理，新增星火记做移动捕捉入口”。",
        migrationSteps: [
          {
            title: "明确分工",
            description: "星火记负责输入，Notion 负责整理与输出，不强行二选一。",
          },
          {
            title: "先迁移高频捕捉场景",
            description: "把会议速记、通勤灵感、阅读摘录优先切到星火记。",
          },
          {
            title: "启用每周回顾",
            description: "每周固定将星火记中的高价值条目回填到 Notion 项目页。",
          },
          {
            title: "逐步收敛模板依赖",
            description: "减少“先选模板再记录”，让记录先发生。",
          },
        ],
        faqTitle: "Notion 用户最常问的问题",
        faq: [
          {
            question: "我已经在 Notion 里有完整系统，还需要星火记吗？",
            answer:
              "如果你在手机上经常“想记但来不及记”，星火记作为输入层能显著降低遗漏，再把高价值内容回填到 Notion。",
          },
          {
            question: "会不会造成信息分散？",
            answer:
              "不会。建议按“输入层/整理层”分工：星火记采集，Notion沉淀，流程更清晰。",
          },
          {
            question: "离线情况下能不能可靠记录？",
            answer:
              "可以。星火记本地优先，网络恢复后再按需同步。",
          },
        ],
        conclusion:
          "Notion 适合组织复杂信息；星火记擅长抓住第一时间的想法。两者配合时，星火记是更高效的移动入口。",
        cta: "立即用星火记建立你的“高捕捉率”输入系统",
        cardTitle: "星火记 vs Notion",
        cardDescription: "面向移动端灵感输入，比较轻量记录与重型工作区的效率差异。",
        seoTitle: "星火记 vs Notion 对比",
        seoDescription:
          "比较星火记与 Notion 在移动输入效率、离线能力、回顾机制与隐私控制上的差异。",
      },
      "apple-notes": {
        slug: "apple-notes",
        competitorName: "Apple Notes",
        badge: "原生备忘录替代方案",
        title: "星火记 vs Apple Notes：同样能记，为什么星火记更适合灵感管理",
        description:
          "Apple Notes 是通用型笔记工具，覆盖面广；星火记专注“灵感捕捉 -> 快速回顾 -> 持续输出”链路，在高频记录场景里更聚焦。",
        lastUpdated: "2026-02-13",
        summary: [
          { label: "更适合谁", value: "希望把灵感转化为行动的人" },
          { label: "记录体验", value: "星火记更轻、更少界面负担" },
          { label: "回顾机制", value: "星火记有专门快速回顾入口" },
          { label: "差异关键", value: "灵感工作流深度，而非通用文档能力" },
        ],
        sparkOnlyTitle: "星火记独有价值（Apple Notes 不提供）",
        sparkOnlyDescription:
          "如果你不是只想“存一条笔记”，而是希望“后面还会用到它”，这些差异很关键。",
        sparkOnlyFeatures: [
          {
            title: "快速回顾模式",
            description: "专门面向灵感复盘，不需要在大量文档中手工筛选。",
          },
          {
            title: "灵感导向的集合组织",
            description: "围绕“想法主题”而非通用文档目录，结构更贴合创作和思考。",
          },
          {
            title: "更可控的主题定制",
            description: "通过主题调整建立长期视觉习惯，提升持续使用意愿。",
          },
          {
            title: "买断选项",
            description: "提供终身方案，适合长期使用者控制订阅成本。",
          },
        ],
        matrixTitle: "功能与工作流对比矩阵",
        matrixDescription: "Apple Notes 能做很多事，星火记更强调把“灵感效率”做到极致。",
        matrixRows: [
          {
            category: "采集",
            feature: "快速输入路径",
            spark: "输入流程更聚焦，减少非必要操作",
            competitor: "功能覆盖更广，但输入路径更通用",
          },
          {
            category: "采集",
            feature: "分享扩展保存内容",
            spark: "支持文本/图片/链接直达集合",
            competitor: "支持分享，但入库后组织与回顾更依赖手工",
          },
          {
            category: "采集",
            feature: "多类型备忘统一管理",
            spark: "针对灵感材料做轻量管理",
            competitor: "以通用文档方式承载",
          },
          {
            category: "整理",
            feature: "集合管理",
            spark: "灵感主题化组织更清晰",
            competitor: "文件夹模式更偏通用笔记管理",
          },
          {
            category: "回顾",
            feature: "快速回顾入口",
            spark: "支持，适合高频复盘",
            competitor: "暂无专门的灵感快回顾机制",
            sparkOnly: true,
          },
          {
            category: "个性化",
            feature: "主题定制深度",
            spark: "支持更明确的视觉个性化",
            competitor: "样式调节范围有限",
            sparkOnly: true,
          },
          {
            category: "隐私",
            feature: "本地优先 + 可选同步",
            spark: "支持，可按需开启 iCloud",
            competitor: "支持本地/云，但策略更偏系统级配置",
          },
          {
            category: "成本",
            feature: "付费方案弹性",
            spark: "免费 + 订阅 + 终身买断",
            competitor: "系统自带，无独立付费模型",
          },
        ],
        scenarioTitle: "真实使用场景对比",
        scenarioDescription: "当你每天都有大量碎片想法时，回顾能力比“能不能记”更重要。",
        scenarios: [
          {
            title: "一天记录 20 条碎片想法",
            sparkFlow: [
              "快速写入并分配集合",
              "用快速回顾筛出重点",
              "标记下一步执行",
            ],
            competitorFlow: [
              "逐条记录到笔记",
              "后续在通用列表中检索",
              "复盘效率依赖手工整理",
            ],
            outcome: "星火记更容易从“记录很多”过渡到“产出更多”。",
          },
          {
            title: "创作前集中回看素材",
            sparkFlow: [
              "按集合进入目标主题",
              "快速浏览最近素材",
              "即时提炼成提纲",
            ],
            competitorFlow: [
              "在文件夹里逐个打开笔记",
              "手动比对相关内容",
              "上下文切换更多",
            ],
            outcome: "星火记减少检索成本，保持思路连续。",
          },
          {
            title: "为不同项目维护灵感池",
            sparkFlow: [
              "每个项目单独集合",
              "跨类型素材统一沉淀",
              "周期性回顾推进项目",
            ],
            competitorFlow: [
              "依靠通用文件夹划分",
              "回顾机制不够聚焦",
              "容易变成静态存档",
            ],
            outcome: "星火记更适合“持续推进型”的个人创作流程。",
          },
        ],
        migrationTitle: "从 Apple Notes 迁移到星火记的建议路径",
        migrationDescription: "不需要全量替换。先把“灵感输入与复盘”迁到星火记，保留通用文档在 Notes。",
        migrationSteps: [
          {
            title: "分场景迁移",
            description: "把“灵感类、创意类、阅读摘录类”内容先迁入星火记。",
          },
          {
            title: "建立项目集合",
            description: "按项目或主题建集合，保证后续回顾时一眼定位。",
          },
          {
            title: "启用每周复盘",
            description: "固定节奏回看集合，清理无效信息，保留可执行条目。",
          },
          {
            title: "保留 Notes 做通用文档",
            description: "将工具分层：Notes 负责存档，星火记负责灵感驱动。",
          },
        ],
        faqTitle: "Apple Notes 用户最常问的问题",
        faq: [
          {
            question: "我已经在系统备忘录里记录很多内容，切换成本高吗？",
            answer:
              "可以按场景渐进迁移，不需要一次搬完。先迁“新产生的灵感”，成本最低。",
          },
          {
            question: "Apple Notes 已经够用了，为什么还需要星火记？",
            answer:
              "如果你只做通用记事，Notes 足够；如果你希望持续回顾并转化灵感，星火记更有优势。",
          },
          {
            question: "两者可以并行使用吗？",
            answer:
              "可以。最推荐的方式是：星火记负责高频输入与回顾，Notes负责通用资料归档。",
          },
        ],
        conclusion:
          "Apple Notes 是好用的通用工具；星火记是更专注的灵感系统。若目标是“记录后有产出”，星火记更合适。",
        cta: "下载星火记，建立你的灵感闭环",
        cardTitle: "星火记 vs Apple Notes",
        cardDescription: "比较通用笔记与灵感工作流工具在持续产出上的差异。",
        seoTitle: "星火记 vs Apple Notes 对比",
        seoDescription:
          "详细比较星火记与 Apple Notes 在灵感采集、回顾机制、主题定制与长期效率上的差异。",
      },
    },
  },
  en: {
    index: {
      eyebrow: "Comparisons",
      title: "See How Spark Memos Differs From Popular Alternatives",
      description:
        "These pages compare Spark Memos with Flomo, Notion, and Apple Notes across real capture workflows. We focus on what matters for long-term usage: capture speed, review consistency, and privacy control.",
      highlights: [
        {
          title: "Structured matrix",
          description: "Each page covers capture, organization, review, privacy, and pricing in one place.",
        },
        {
          title: "Spark-only capabilities",
          description:
            "We clearly call out no-signup usage, local-first storage, optional iCloud sync, and quick review.",
        },
        {
          title: "Migration guidance",
          description: "Every comparison includes a practical path to move without disrupting your existing setup.",
        },
      ],
      openPageLabel: "Open full comparison",
      seoTitle: "Spark Memos Comparisons",
      seoDescription:
        "Compare Spark Memos with Flomo, Notion, and Apple Notes across features and real workflows.",
    },
    footer: {
      title: "Compare",
      allComparisons: "All comparisons",
      sparkVsTemplate: "Spark Memos vs {name}",
    },
    table: {
      featureColumn: "Capability",
      sparkColumn: "Spark Memos",
      competitorColumn: "Competitor",
      sparkOnlyBadge: "Spark-only",
    },
    scenarioLabels: {
      sparkFlow: "Spark flow",
      competitorFlow: "Competitor flow",
      outcome: "Outcome",
    },
    common: {
      backToAll: "Back to all comparisons",
      migrationPrefix: "Step",
      faqEyebrow: "FAQ",
      ctaTitle: "Want a faster, lighter, and more controllable capture workflow?",
    },
    pages: {
      "flomo": {
        slug: "flomo",
        competitorName: "Flomo",
        badge: "Quick capture comparison",
        title: "Spark Memos vs Flomo: Why the gap grows over time",
        description:
          "Flomo is popular for quick thoughts, but Spark Memos is stronger when you need mixed media capture, reliable offline entry, and repeatable review habits.",
        lastUpdated: "2026-02-13",
        summary: [
          { label: "Best for", value: "People who want durable idea capture with regular review" },
          { label: "Setup friction", value: "Lower on Spark Memos" },
          { label: "Offline reliability", value: "Stronger on Spark Memos" },
          { label: "Key difference", value: "No-signup + quick review + multi-type memos" },
        ],
        sparkOnlyTitle: "Spark-only value (not available in Flomo)",
        sparkOnlyDescription:
          "These are not minor parameter differences. They directly change whether you can keep the habit for months.",
        sparkOnlyFeatures: [
          {
            title: "Use without account setup",
            description: "Capture starts immediately without registration or service binding.",
          },
          {
            title: "Local-first storage + optional iCloud",
            description: "Keep control on-device first, then enable sync only when needed.",
          },
          {
            title: "Cross-app share extension",
            description: "Save text, links, and images from any app in one step.",
          },
          {
            title: "Quick review mode",
            description: "Turn captured ideas into reusable insights instead of a passive backlog.",
          },
        ],
        matrixTitle: "Feature and workflow matrix",
        matrixDescription:
          "This matrix evaluates the full chain: capture, organize, review, privacy, and cost.",
        matrixRows: [
          {
            category: "Capture",
            feature: "Start writing without login",
            spark: "Yes, first memo can be created immediately",
            competitor: "Typically requires login or account binding",
            sparkOnly: true,
          },
          {
            category: "Capture",
            feature: "Share extension for text/image/link",
            spark: "Yes, one-step capture from any app",
            competitor: "Cross-app capture is more limited",
            sparkOnly: true,
          },
          {
            category: "Capture",
            feature: "Multi-type memo support",
            spark: "Text, image, and link in one system",
            competitor: "Mostly text-centric",
          },
          {
            category: "Organize",
            feature: "Collection-based organization",
            spark: "Flexible custom collections",
            competitor: "More timeline-oriented",
          },
          {
            category: "Review",
            feature: "Quick review workflow",
            spark: "Built in for frequent review",
            competitor: "No dedicated quick review flow",
            sparkOnly: true,
          },
          {
            category: "Privacy",
            feature: "Local-first strategy",
            spark: "On-device first, optional iCloud sync",
            competitor: "Primarily cloud account-based",
            sparkOnly: true,
          },
          {
            category: "Privacy",
            feature: "Long-term usage without account",
            spark: "Supported",
            competitor: "Usually not supported",
            sparkOnly: true,
          },
          {
            category: "Personalization",
            feature: "Theme customization",
            spark: "Supported",
            competitor: "Limited customization",
          },
          {
            category: "Pricing",
            feature: "Plan flexibility",
            spark: "Free + subscription + lifetime",
            competitor: "Mostly subscription plans",
          },
        ],
        scenarioTitle: "Real-world scenarios",
        scenarioDescription: "The difference appears when capture volume increases and review becomes mandatory.",
        scenarios: [
          {
            title: "A sudden idea while commuting",
            sparkFlow: [
              "Unlock and open Spark Memos",
              "Write a note and attach an image",
              "It enters the review queue automatically",
            ],
            competitorFlow: [
              "Open app and go to record screen",
              "Mostly text entry, media needs extra handling",
              "Review later through timeline scrolling",
            ],
            outcome: "Spark Memos better converts fast capture into reusable material.",
          },
          {
            title: "Save materials from social apps",
            sparkFlow: [
              "Tap Share in source app",
              "Choose Spark Memos extension",
              "Content lands in the target collection directly",
            ],
            competitorFlow: [
              "Copy links or take screenshots",
              "Switch app and paste manually",
              "Classify later by hand",
            ],
            outcome: "Spark Memos reduces context switching and data loss risk.",
          },
          {
            title: "Weekly idea review",
            sparkFlow: [
              "Open Quick Review",
              "Review by collection",
              "Mark actionable items",
            ],
            competitorFlow: [
              "Scroll timeline manually",
              "Filter and review by hand",
              "Harder to keep a consistent routine",
            ],
            outcome: "Spark Memos makes review habits easier to maintain.",
          },
        ],
        migrationTitle: "Migration plan from Flomo to Spark Memos",
        migrationDescription:
          "Move high-frequency inputs first, then gradually improve organization and review habits.",
        migrationSteps: [
          {
            title: "Move only new notes for the next 14 days",
            description: "Feel the capture speed difference before migrating historical content.",
          },
          {
            title: "Create 3 core collections",
            description: "Start with simple buckets like Work, Life, and Experiments.",
          },
          {
            title: "Enable share extension",
            description: "Replace copy-paste loops with one-step capture.",
          },
          {
            title: "Set a weekly quick review",
            description: "A 10-minute routine is enough to produce clear next actions.",
          },
        ],
        faqTitle: "Common questions from Flomo users",
        faq: [
          {
            question: "I already have many notes in Flomo. Is switching worth it?",
            answer:
              "Yes. Start with new content first, then migrate historical notes gradually by topic.",
          },
          {
            question: "Will Spark Memos feel too heavy for quick capture?",
            answer:
              "No. Capture is still instant, with additional review capabilities when you need them.",
          },
          {
            question: "Can I capture reliably while offline?",
            answer:
              "Yes. Spark Memos is local-first, so capture and edits work offline.",
          },
        ],
        conclusion:
          "If your goal has moved from quick capture to long-term reuse, Spark Memos is the stronger fit.",
        cta: "Download Spark Memos and build a sustainable idea workflow",
        cardTitle: "Spark Memos vs Flomo",
        cardDescription: "Compare fast capture tools by long-term review and organization outcomes.",
        seoTitle: "Spark Memos vs Flomo",
        seoDescription:
          "Detailed comparison of Spark Memos and Flomo across capture speed, offline reliability, review workflow, and privacy control.",
      },
      "notion": {
        slug: "notion",
        competitorName: "Notion",
        badge: "Mobile capture efficiency",
        title: "Spark Memos vs Notion: When you just need to capture an idea now",
        description:
          "Notion is excellent for structured docs and team workflows. Spark Memos is optimized for instant mobile capture and repeatable review.",
        lastUpdated: "2026-02-13",
        summary: [
          { label: "Best for", value: "Individuals who prioritize fast mobile capture" },
          { label: "Entry friction", value: "Lower on Spark Memos" },
          { label: "Offline control", value: "Stronger on Spark Memos" },
          { label: "Key difference", value: "Capture-first flow vs workspace-first flow" },
        ],
        sparkOnlyTitle: "Spark-only value (not available in Notion)",
        sparkOnlyDescription:
          "These differences are most visible in elevators, transit, and meeting transitions.",
        sparkOnlyFeatures: [
          {
            title: "No account required to start",
            description: "You can capture immediately without workspace setup.",
          },
          {
            title: "Local-first reliability",
            description: "Unstable network does not interrupt capture and save.",
          },
          {
            title: "Quick review for extraction",
            description: "Review loops help turn captured notes into actionable items.",
          },
          {
            title: "Capture-centric interaction model",
            description: "The first step is writing, not formatting structure.",
          },
        ],
        matrixTitle: "Feature and workflow matrix",
        matrixDescription:
          "If your primary goal is capture-first and organize-later, Spark Memos fits mobile behavior better.",
        matrixRows: [
          {
            category: "Capture",
            feature: "Write instantly without workspace setup",
            spark: "Yes, direct input",
            competitor: "Usually requires account/workspace context",
            sparkOnly: true,
          },
          {
            category: "Capture",
            feature: "Share extension capture",
            spark: "One-step save for text/image/link",
            competitor: "Possible but heavier and more fragmented",
          },
          {
            category: "Capture",
            feature: "Multi-type memo management",
            spark: "Native and lightweight",
            competitor: "Powerful but higher setup overhead",
          },
          {
            category: "Organize",
            feature: "Lightweight collections",
            spark: "Optimized for personal idea buckets",
            competitor: "Database/page system oriented",
          },
          {
            category: "Review",
            feature: "Dedicated quick review",
            spark: "Built in",
            competitor: "No dedicated quick review mode",
            sparkOnly: true,
          },
          {
            category: "Privacy",
            feature: "Local-first strategy",
            spark: "On-device first with optional iCloud",
            competitor: "Mainly cloud workspace based",
            sparkOnly: true,
          },
          {
            category: "Privacy",
            feature: "Use without account",
            spark: "Supported",
            competitor: "Usually not supported",
            sparkOnly: true,
          },
          {
            category: "Personalization",
            feature: "Theme customization",
            spark: "Supported",
            competitor: "Limited customization",
          },
          {
            category: "Pricing",
            feature: "Flexible plans",
            spark: "Free + subscription + lifetime",
            competitor: "Primarily subscription",
          },
        ],
        scenarioTitle: "Real-world scenarios",
        scenarioDescription: "In fragmented time slots, flow length directly impacts capture rate.",
        scenarios: [
          {
            title: "An idea appears in the middle of a meeting",
            sparkFlow: [
              "Open Spark Memos and type",
              "Save into the right collection",
              "Review and expand after meeting",
            ],
            competitorFlow: [
              "Open Notion and locate page/database",
              "Create an entry and set properties",
              "Finish structure later",
            ],
            outcome: "Spark Memos minimizes friction in the first capture moment.",
          },
          {
            title: "Save highlights while reading",
            sparkFlow: [
              "Share to Spark Memos",
              "Auto-save link and key text",
              "Review in one collection later",
            ],
            competitorFlow: [
              "Copy into a Notion page",
              "Adjust structure and layout",
              "Review mixed with page noise",
            ],
            outcome: "Spark Memos works better as an input layer; Notion excels as an organization layer.",
          },
          {
            title: "Weekly action extraction",
            sparkFlow: [
              "Run quick review",
              "Pick actionable notes",
              "Push next steps to task tool",
            ],
            competitorFlow: [
              "Search across multiple pages",
              "Extract key points manually",
              "Higher integration overhead",
            ],
            outcome: "Spark Memos makes review cadence easier to sustain.",
          },
        ],
        migrationTitle: "Migration plan from Notion to Spark Memos",
        migrationDescription:
          "The best setup is layered: Spark Memos for capture, Notion for deep organization.",
        migrationSteps: [
          {
            title: "Define tool roles",
            description: "Spark Memos for input, Notion for structured output.",
          },
          {
            title: "Move high-frequency capture first",
            description: "Start with meetings, commuting notes, and reading snippets.",
          },
          {
            title: "Run weekly review and feed back",
            description: "Send high-value notes from Spark Memos into Notion projects.",
          },
          {
            title: "Reduce template-first behavior",
            description: "Make capture happen first, structure second.",
          },
        ],
        faqTitle: "Common questions from Notion users",
        faq: [
          {
            question: "I already built a full system in Notion. Do I still need Spark Memos?",
            answer:
              "If you often miss ideas on mobile, Spark Memos as an input layer can significantly reduce drop-off.",
          },
          {
            question: "Will this fragment my information?",
            answer:
              "Not if roles are clear: Spark Memos captures, Notion consolidates.",
          },
          {
            question: "Is capture reliable offline?",
            answer: "Yes. Spark Memos is local-first and can sync later.",
          },
        ],
        conclusion:
          "Notion organizes complexity well. Spark Memos captures speed well. For mobile-first idea intake, Spark Memos is the better entry point.",
        cta: "Use Spark Memos to build a high-capture-rate input system",
        cardTitle: "Spark Memos vs Notion",
        cardDescription:
          "Compare a capture-first app with a workspace-first tool for mobile idea workflows.",
        seoTitle: "Spark Memos vs Notion",
        seoDescription:
          "Compare Spark Memos and Notion across mobile capture speed, offline reliability, review loops, and privacy control.",
      },
      "apple-notes": {
        slug: "apple-notes",
        competitorName: "Apple Notes",
        badge: "Native notes alternative",
        title: "Spark Memos vs Apple Notes: Same device, different outcomes",
        description:
          "Apple Notes is a broad general-purpose notebook. Spark Memos is purpose-built for idea capture, fast review, and repeatable execution.",
        lastUpdated: "2026-02-13",
        summary: [
          { label: "Best for", value: "People turning ideas into weekly output" },
          { label: "Capture feel", value: "Lighter and more focused on Spark Memos" },
          { label: "Review model", value: "Dedicated quick review in Spark Memos" },
          { label: "Key difference", value: "Idea workflow depth vs general documentation" },
        ],
        sparkOnlyTitle: "Spark-only value (not available in Apple Notes)",
        sparkOnlyDescription:
          "If your goal is not just storage but follow-through, these capabilities matter most.",
        sparkOnlyFeatures: [
          {
            title: "Quick review mode",
            description: "Review ideas rapidly without manual filtering across long document lists.",
          },
          {
            title: "Idea-centric collection model",
            description: "Organize around idea themes, not generic document folders.",
          },
          {
            title: "Deeper theme personalization",
            description: "Use visual customization to build a consistent review habit.",
          },
          {
            title: "Lifetime purchase option",
            description: "A long-term cost control option for heavy daily users.",
          },
        ],
        matrixTitle: "Feature and workflow matrix",
        matrixDescription:
          "Apple Notes can do many things. Spark Memos is narrower but stronger for high-frequency idea loops.",
        matrixRows: [
          {
            category: "Capture",
            feature: "Fast idea entry path",
            spark: "More focused with fewer non-essential steps",
            competitor: "More general-purpose editing flow",
          },
          {
            category: "Capture",
            feature: "Share extension intake",
            spark: "Text/image/link goes straight to target collection",
            competitor: "Share is available, but review organization is more manual",
          },
          {
            category: "Capture",
            feature: "Multi-type memo handling",
            spark: "Lightweight handling for mixed media ideas",
            competitor: "Handled as general notes/documents",
          },
          {
            category: "Organize",
            feature: "Collection model",
            spark: "Idea-theme centric",
            competitor: "Folder centric",
          },
          {
            category: "Review",
            feature: "Quick review entry",
            spark: "Built in",
            competitor: "No dedicated quick-review mode",
            sparkOnly: true,
          },
          {
            category: "Personalization",
            feature: "Theme customization depth",
            spark: "Broader options",
            competitor: "More limited styling range",
            sparkOnly: true,
          },
          {
            category: "Privacy",
            feature: "Local-first + optional sync",
            spark: "Supported with optional iCloud",
            competitor: "Supported via system-level setup",
          },
          {
            category: "Pricing",
            feature: "Pricing flexibility",
            spark: "Free + subscription + lifetime",
            competitor: "Built-in app, no standalone pricing model",
          },
        ],
        scenarioTitle: "Real-world scenarios",
        scenarioDescription: "When you capture many small ideas daily, review efficiency becomes the bottleneck.",
        scenarios: [
          {
            title: "Capture 20 idea fragments in one day",
            sparkFlow: [
              "Quickly capture into collections",
              "Use quick review to filter",
              "Mark actionable outputs",
            ],
            competitorFlow: [
              "Store as notes",
              "Search and filter manually later",
              "Review depends on manual discipline",
            ],
            outcome: "Spark Memos better turns volume into decisions.",
          },
          {
            title: "Gather materials before writing",
            sparkFlow: [
              "Open the target collection",
              "Review recent entries quickly",
              "Convert to writing outline",
            ],
            competitorFlow: [
              "Open notes one by one in folders",
              "Manually compare related pieces",
              "Higher context-switch cost",
            ],
            outcome: "Spark Memos keeps momentum during creative work.",
          },
          {
            title: "Maintain idea pools for multiple projects",
            sparkFlow: [
              "One collection per project",
              "Store mixed media in one place",
              "Review periodically to push progress",
            ],
            competitorFlow: [
              "Use generic folder split",
              "No review-specialized flow",
              "Easy to become static archive",
            ],
            outcome: "Spark Memos fits ongoing project-driven ideation better.",
          },
        ],
        migrationTitle: "Migration plan from Apple Notes to Spark Memos",
        migrationDescription:
          "No full replacement needed. Move idea capture/review first and keep generic docs in Notes.",
        migrationSteps: [
          {
            title: "Migrate by scenario",
            description: "Move idea capture, snippets, and creative drafts first.",
          },
          {
            title: "Create project collections",
            description: "Group notes by project/theme for faster retrieval.",
          },
          {
            title: "Run a weekly review loop",
            description: "Keep only actionable notes and clean out dead entries.",
          },
          {
            title: "Keep Notes for general archives",
            description: "Use layered tools: Spark Memos for ideation, Notes for broad documentation.",
          },
        ],
        faqTitle: "Common questions from Apple Notes users",
        faq: [
          {
            question: "I have a lot of notes in Apple Notes. Is migration expensive?",
            answer:
              "Use progressive migration. Start with new ideas first, then move high-value historical content.",
          },
          {
            question: "Apple Notes already works for me. Why switch?",
            answer:
              "If your goal is simple storage, keep Apple Notes. If your goal is repeatable idea-to-output workflow, Spark Memos is stronger.",
          },
          {
            question: "Can I use both together?",
            answer:
              "Yes. Use Spark Memos for capture/review and Apple Notes for generic archives.",
          },
        ],
        conclusion:
          "Apple Notes is broad and capable. Spark Memos is focused and execution-oriented. For idea workflows, focus usually wins.",
        cta: "Download Spark Memos and build your capture-to-output loop",
        cardTitle: "Spark Memos vs Apple Notes",
        cardDescription:
          "Compare general note-taking with a purpose-built idea capture and review workflow.",
        seoTitle: "Spark Memos vs Apple Notes",
        seoDescription:
          "Detailed comparison of Spark Memos and Apple Notes on capture flow, review mechanisms, personalization, and long-term output efficiency.",
      },
    },
  },
} satisfies Record<CopyLocale, ComparisonLocaleContent>;

function resolveCopyLocale(locale: Language): CopyLocale {
  return locale === "zh" ? "zh" : "en";
}

export function isComparisonSlug(slug: string): slug is ComparisonSlug {
  return (comparisonSlugs as readonly string[]).includes(slug);
}

export function getComparisonIndexPath(locale: Language) {
  return `/${locale}/compare`;
}

export function getComparisonPath(locale: Language, slug: ComparisonSlug) {
  return `/${locale}/compare/${slug}`;
}

export function getComparisonLocaleContent(locale: Language) {
  return comparisonContent[resolveCopyLocale(locale)];
}

export function getComparisonPages(locale: Language) {
  const content = getComparisonLocaleContent(locale);
  return comparisonSlugs.map((slug) => content.pages[slug]);
}

export function getComparisonPage(locale: Language, slug: ComparisonSlug) {
  return getComparisonLocaleContent(locale).pages[slug];
}

export function getFooterComparisonLabel(locale: Language, competitorName: string) {
  const template = getComparisonLocaleContent(locale).footer.sparkVsTemplate;
  return template.replace("{name}", competitorName);
}
