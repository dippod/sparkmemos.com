import {
  CheckCircle2,
  Cloud,
  FolderKanban,
  Image as ImageIcon,
  Link2,
  Layers,
  LockKeyhole,
  Mic,
  NotebookText,
  Palette,
  ScanSearch,
  Share2,
  ShieldCheck,
  SunMedium,
  Type,
} from "lucide-react";

import { Container } from "@/components/Container";
import { Dictionary } from "@/dictionaries";

function getFeatures(dict: Dictionary) {
  return [
    {
      name: dict.homeSections.secondaryFeatures.types.title,
      description: dict.homeSections.secondaryFeatures.types.description,
      icon: NotebookText,
    },
    {
      name: dict.homeSections.secondaryFeatures.collections.title,
      description: dict.homeSections.secondaryFeatures.collections.description,
      icon: Layers,
    },
    {
      name: dict.homeSections.secondaryFeatures.share.title,
      description: dict.homeSections.secondaryFeatures.share.description,
      icon: Share2,
    },
    {
      name: dict.homeSections.secondaryFeatures.theme.title,
      description: dict.homeSections.secondaryFeatures.theme.description,
      icon: Palette,
    },
    {
      name: dict.homeSections.secondaryFeatures.review.title,
      description: dict.homeSections.secondaryFeatures.review.description,
      icon: ScanSearch,
    },
    {
      name: dict.homeSections.secondaryFeatures.privacy.title,
      description: dict.homeSections.secondaryFeatures.privacy.description,
      icon: ShieldCheck,
    },
  ];
}

function DetailVisual({ index }: { index: number }) {
  if (index === 0) {
    const typeItems = [
      { label: "Text", icon: Type },
      { label: "Image", icon: ImageIcon },
      { label: "Audio", icon: Mic },
      { label: "Link", icon: Link2 },
    ] as const;

    return (
      <div className="grid grid-cols-4 gap-2">
        {typeItems.map((item) => (
          <span
            key={item.label}
            className="rounded-xl border border-ink-200/20 bg-ink-900/45 p-2 text-center"
          >
            <item.icon className="mx-auto h-3.5 w-3.5 text-ember-200" />
            <span className="mt-1 block text-[10px] text-ink-100">{item.label}</span>
          </span>
        ))}
      </div>
    );
  }

  if (index === 1) {
    const collections = [
      { name: "Reading", count: 24 },
      { name: "Ideas", count: 18 },
      { name: "Inbox", count: 7 },
    ] as const;

    return (
      <div className="rounded-2xl border border-ink-200/20 bg-ink-900/45 p-3">
        <div className="space-y-2">
          {collections.map((collection) => (
            <div
              key={collection.name}
              className="flex items-center justify-between rounded-xl border border-ink-200/20 bg-ink-900/45 px-2.5 py-1.5"
            >
              <span className="inline-flex items-center gap-1.5 text-xs text-ink-100">
                <FolderKanban className="h-3.5 w-3.5 text-ember-200" />
                {collection.name}
              </span>
              <span className="rounded-full border border-ink-200/25 bg-ink-900/55 px-1.5 py-0.5 text-[10px] text-ink-200">
                {collection.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="rounded-2xl border border-ink-200/20 bg-ink-900/45 p-3">
        <div className="flex items-center justify-between gap-2 text-[11px] text-ink-100">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200/25 bg-ink-900/55 px-2 py-1">
            <Share2 className="h-3 w-3 text-ink-200" />
            Safari
          </span>
          <span className="text-ember-200">Share</span>
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-ember-300/35 bg-ember-400/10 px-2 py-1 text-ember-200">
            Spark Memos
          </span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-ink-200/20">
          <span className="block h-full w-2/3 rounded-full bg-ember-500/80" />
        </div>
      </div>
    );
  }

  if (index === 3) {
    return (
      <div className="rounded-2xl border border-ink-200/20 bg-ink-900/45 p-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            {[
              "bg-[#f59e0b]",
              "bg-[#ea580c]",
              "bg-[#c2410c]",
              "bg-[#fb923c]",
            ].map((color, colorIndex) => (
              <span key={colorIndex} className={`h-5 w-5 rounded-full ${color}`} />
            ))}
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-ink-200/25 bg-ink-900/55 px-2 py-1 text-[11px] text-ink-100">
            <SunMedium className="h-3 w-3 text-ember-200" />
            Warm
          </span>
        </div>
        <div className="mt-2 flex gap-1.5">
          <span className="h-1.5 w-1/3 rounded-full bg-[#f59e0b]/70" />
          <span className="h-1.5 w-1/3 rounded-full bg-[#ea580c]/65" />
          <span className="h-1.5 w-1/3 rounded-full bg-[#fb923c]/60" />
        </div>
      </div>
    );
  }

  if (index === 4) {
    return (
      <div className="rounded-2xl border border-ink-200/20 bg-ink-900/45 p-3">
        <div className="space-y-2">
          {["Unread memos", "Saved links", "Daily recap"].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-xl border border-ink-200/20 bg-ink-900/45 px-2.5 py-1.5"
            >
              <span className="inline-flex items-center gap-1.5 text-xs text-ink-100">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
                {item}
              </span>
              <span className="text-[10px] text-ink-200">2 min</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-ink-200/20 bg-ink-900/45 p-3">
      <div className="space-y-2">
        <div className="flex items-center justify-between rounded-xl border border-ink-200/20 bg-ink-900/45 px-2.5 py-1.5">
          <span className="inline-flex items-center gap-1.5 text-xs text-ink-100">
            <LockKeyhole className="h-3.5 w-3.5 text-emerald-300" />
            Local encryption
          </span>
          <span className="text-[11px] font-semibold text-emerald-300">On</span>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-ink-200/20 bg-ink-900/45 px-2.5 py-1.5">
          <span className="inline-flex items-center gap-1.5 text-xs text-ink-100">
            <Cloud className="h-3.5 w-3.5 text-ink-200" />
            iCloud sync
          </span>
          <span className="text-[11px] font-semibold text-ink-200">Private</span>
        </div>
      </div>
    </div>
  );
}

export function SecondaryFeatures({ dict }: { dict: Dictionary }) {
  const features = getFeatures(dict);

  return (
    <section id="secondary-features" className="pb-8 pt-12 sm:pb-12 sm:pt-20">
      <Container>
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-ink-200/40 bg-ink-200/10 px-4 py-1 text-xs font-semibold tracking-[0.18em] text-ink-100 uppercase">
            Product details
          </p>
          <h2 className="text-display mt-4 text-balance text-3xl text-white sm:text-4xl">
            {dict.homeSections.secondaryFeatures.title}
          </h2>
          <p className="mt-4 text-lg text-ink-100">
            {dict.homeSections.secondaryFeatures.description}
          </p>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <li
              key={feature.name}
              className="product-detail-card flex h-full flex-col rounded-[2rem] p-6"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="detail-icon-shell inline-flex rounded-2xl p-2.5 text-ember-200">
                  <feature.icon className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-ink-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-100">{feature.description}</p>
              <div className="detail-visual-shell mt-auto pt-4">
                <DetailVisual index={index} />
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
