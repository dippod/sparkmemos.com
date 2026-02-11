import {
  Layers,
  NotebookText,
  Palette,
  ScanSearch,
  Share2,
  ShieldCheck,
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
    return (
      <div className="mt-4 rounded-xl border border-ink-200/20 bg-ink-900/45 p-3">
        <div className="flex gap-1.5">
          {[
            "h-8 w-6 bg-ember-300/45",
            "h-8 w-6 bg-amber-300/35",
            "h-8 w-6 bg-ink-200/25",
          ].map((cls, visualIndex) => (
            <span key={visualIndex} className={`${cls} rounded-md`} />
          ))}
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="mt-4 flex flex-wrap gap-2">
        {["Notes", "Ideas", "Inbox"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-ink-200/25 bg-ink-900/45 px-2.5 py-1 text-[11px] text-ink-100"
          >
            {tag}
          </span>
        ))}
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="mt-4 flex items-center gap-2 text-xs text-ink-100">
        <span className="rounded-md border border-ink-200/25 bg-ink-900/45 px-2 py-1">Safari</span>
        <span>→</span>
        <span className="rounded-md border border-ember-300/35 bg-ember-400/10 px-2 py-1 text-ember-200">
          Spark Memos
        </span>
      </div>
    );
  }

  if (index === 3) {
    return (
      <div className="mt-4 flex items-center gap-2">
        {[
          "bg-[#f59e0b]",
          "bg-[#ea580c]",
          "bg-[#c2410c]",
          "bg-[#fb923c]",
        ].map((color, colorIndex) => (
          <span key={colorIndex} className={`h-5 w-5 rounded-full ${color}`} />
        ))}
      </div>
    );
  }

  if (index === 4) {
    return (
      <div className="mt-4 rounded-xl border border-ink-200/20 bg-ink-900/45 p-3">
        <div className="flex items-end gap-1.5">
          {[22, 36, 28, 44, 34].map((height, barIndex) => (
            <span
              key={barIndex}
              className="w-2.5 rounded-t bg-gradient-to-t from-ember-500/80 to-amber-300/75"
              style={{ height: `${height / 2}px` }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-xl border border-ink-200/20 bg-ink-900/45 p-3">
      <div className="flex items-center gap-2 text-xs text-ink-100">
        <span className="h-2 w-2 rounded-full bg-emerald-300" />
        <span>Local</span>
        <span className="h-px flex-1 bg-ink-200/25" />
        <span>iCloud</span>
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
              className="panel-stroke rounded-2xl bg-ink-900/55 p-5 transition hover:-translate-y-1 hover:border-ink-200/45"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="mb-4 inline-flex rounded-xl border border-ember-300/40 bg-ember-400/10 p-2.5 text-ember-200">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-100">{feature.description}</p>
              <DetailVisual index={index} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
