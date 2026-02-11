import { Language } from "@/dictionaries";

export interface LatestFeature {
  title: string;
  description: string;
}

const latestFeaturesByLanguage: Record<Language, LatestFeature[]> = {
  en: [
    {
      title: "Capture in Seconds",
      description: "Save ideas, notes, links, quotes, images, and audio before they disappear.",
    },
    {
      title: "Organize with Collections",
      description: "Group related memos into collections and keep your workspace clean.",
    },
    {
      title: "Search and Filter Fast",
      description: "Use powerful search to quickly find the exact memo you need.",
    },
    {
      title: "Analytics and Activity",
      description: "See your writing rhythm, review volume, and daily memo activity.",
    },
    {
      title: "Sync Across Devices",
      description: "Enable iCloud sync to keep your memos available across your Apple devices.",
    },
    {
      title: "Share and Export",
      description: "Share from other apps and export your memo data when you need it.",
    },
  ],
  zh: [
    {
      title: "秒记灵感",
      description: "支持文本、链接、引用、图片、音频，灵感出现就能立刻记下。",
    },
    {
      title: "合集整理",
      description: "用合集把内容按主题归档，信息结构更清晰。",
    },
    {
      title: "快速搜索与筛选",
      description: "通过搜索快速定位目标内容，减少翻找时间。",
    },
    {
      title: "统计与活动分析",
      description: "查看记录节奏、复习情况和按日期的活跃度。",
    },
    {
      title: "多设备同步",
      description: "开启 iCloud 同步后，可在多台 Apple 设备访问笔记。",
    },
    {
      title: "分享与导出",
      description: "支持从其它 App 分享到 Spark Memos，也支持数据导出。",
    },
  ],
  ja: [
    {
      title: "すばやく記録",
      description: "テキスト、リンク、引用、画像、音声をすぐに保存できます。",
    },
    {
      title: "コレクション整理",
      description: "メモをテーマごとに整理して、見つけやすく管理できます。",
    },
    {
      title: "高速検索と絞り込み",
      description: "必要なメモをすばやく検索して見つけられます。",
    },
    {
      title: "分析とアクティビティ",
      description: "記録のリズムや日次アクティビティを可視化できます。",
    },
    {
      title: "デバイス間同期",
      description: "iCloud同期でAppleデバイス間のメモを揃えられます。",
    },
    {
      title: "共有と書き出し",
      description: "他アプリからの共有保存とデータ書き出しに対応します。",
    },
  ],
  de: [
    {
      title: "Schnell erfassen",
      description: "Speichere Text, Links, Zitate, Bilder und Audio in Sekunden.",
    },
    {
      title: "Mit Sammlungen organisieren",
      description: "Ordne Memos thematisch und halte deinen Workspace strukturiert.",
    },
    {
      title: "Schnelle Suche & Filter",
      description: "Finde jedes Memo mit leistungsstarker Suche in kurzer Zeit.",
    },
    {
      title: "Analytics & Aktivität",
      description: "Behalte Schreibrhythmus und tägliche Aktivität im Blick.",
    },
    {
      title: "Geräteübergreifende Synchronisation",
      description: "Nutze iCloud-Sync, damit deine Memos auf allen Apple-Geräten verfügbar sind.",
    },
    {
      title: "Teilen & Exportieren",
      description: "Übernimm Inhalte aus anderen Apps und exportiere deine Daten bei Bedarf.",
    },
  ],
  es: [
    {
      title: "Captura en segundos",
      description: "Guarda texto, enlaces, citas, imágenes y audio en cuanto aparece la idea.",
    },
    {
      title: "Organiza con colecciones",
      description: "Agrupa notas por tema para mantener todo más claro y ordenado.",
    },
    {
      title: "Búsqueda y filtros",
      description: "Encuentra cualquier nota rápidamente con una búsqueda potente.",
    },
    {
      title: "Analíticas y actividad",
      description: "Sigue tu ritmo de escritura y tu actividad diaria de notas.",
    },
    {
      title: "Sincronización entre dispositivos",
      description: "Activa iCloud para mantener tus notas en todos tus dispositivos Apple.",
    },
    {
      title: "Compartir y exportar",
      description: "Guarda desde otras apps y exporta tus datos cuando lo necesites.",
    },
  ],
  fr: [
    {
      title: "Capture rapide",
      description: "Enregistrez texte, liens, citations, images et audio en quelques secondes.",
    },
    {
      title: "Organisation par collections",
      description: "Classez vos mémos par thème pour une vue claire et structurée.",
    },
    {
      title: "Recherche et filtres",
      description: "Retrouvez rapidement chaque mémo avec une recherche efficace.",
    },
    {
      title: "Analyses d'activité",
      description: "Suivez votre rythme d'écriture et l'activité quotidienne.",
    },
    {
      title: "Synchronisation multi-appareils",
      description: "Activez iCloud pour accéder à vos mémos sur vos appareils Apple.",
    },
    {
      title: "Partage et export",
      description: "Capturez depuis d'autres apps et exportez vos données à tout moment.",
    },
  ],
  it: [
    {
      title: "Cattura rapida",
      description: "Salva testo, link, citazioni, immagini e audio in pochi secondi.",
    },
    {
      title: "Organizza con raccolte",
      description: "Raggruppa i memo per tema per mantenere tutto ordinato.",
    },
    {
      title: "Ricerca e filtri rapidi",
      description: "Trova subito il memo giusto con una ricerca potente.",
    },
    {
      title: "Analisi attività",
      description: "Monitora ritmo di scrittura e attività quotidiana dei memo.",
    },
    {
      title: "Sincronizzazione tra dispositivi",
      description: "Con iCloud sync i tuoi memo restano disponibili su dispositivi Apple.",
    },
    {
      title: "Condivisione ed esportazione",
      description: "Salva da altre app ed esporta i dati quando serve.",
    },
  ],
  ko: [
    {
      title: "빠른 캡처",
      description: "텍스트, 링크, 인용, 이미지, 오디오를 바로 기록할 수 있습니다.",
    },
    {
      title: "컬렉션 정리",
      description: "주제별 컬렉션으로 메모를 체계적으로 정리할 수 있습니다.",
    },
    {
      title: "검색과 필터",
      description: "강력한 검색으로 원하는 메모를 빠르게 찾을 수 있습니다.",
    },
    {
      title: "활동 분석",
      description: "기록 패턴과 일별 활동을 한눈에 확인할 수 있습니다.",
    },
    {
      title: "기기 간 동기화",
      description: "iCloud 동기화로 Apple 기기에서 같은 메모를 사용할 수 있습니다.",
    },
    {
      title: "공유 및 내보내기",
      description: "다른 앱에서 바로 저장하고, 필요할 때 데이터를 내보낼 수 있습니다.",
    },
  ],
};

export function getLatestFeatures(lang: Language): LatestFeature[] {
  return latestFeaturesByLanguage[lang] ?? latestFeaturesByLanguage.en;
}
