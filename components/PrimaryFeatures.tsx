import Image from "next/image";
import {
  ChartNoAxesCombined,
  Cloud,
  FolderKanban,
  SearchCheck,
  Share2,
  WandSparkles,
} from "lucide-react";

import { Container } from "@/components/Container";
import { getLatestFeatures } from "@/constants/latestFeatures";
import { Dictionary, Language } from "@/dictionaries";

import activityScreenshot from "@/public/screenshots/activity.webp";
import collectionsScreenshot from "@/public/screenshots/collections.webp";
import searchScreenshot from "@/public/screenshots/search.webp";
import memoReviewScreenshot from "@/public/screenshots/memo-review.webp";

const featureIcons = [
  WandSparkles,
  FolderKanban,
  SearchCheck,
  ChartNoAxesCombined,
  Cloud,
  Share2,
] as const;

function FeaturePreview({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="mt-4 rounded-xl border border-ink-200/20 bg-ink-800/55 p-3">
        <div className="mb-2 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-ember-300/80" />
          <span className="h-2 w-2 rounded-full bg-amber-300/70" />
          <span className="h-2 w-2 rounded-full bg-ink-200/50" />
        </div>
        <div className="space-y-1.5">
          <div className="h-2 rounded-full bg-ink-200/20" />
          <div className="h-2 w-4/5 rounded-full bg-ink-200/20" />
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="mt-4 flex flex-wrap gap-2">
        {["Ideas", "Reading", "Work"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-ink-200/25 bg-ink-800/45 px-2.5 py-1 text-[11px] text-ink-100"
          >
            {tag}
          </span>
        ))}
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="mt-4 rounded-xl border border-ink-200/20 bg-ink-800/55 p-3">
        <div className="flex items-center gap-2 rounded-lg border border-ink-200/20 bg-ink-900/50 px-2.5 py-1.5 text-xs text-ink-100">
          <span className="text-ink-200">⌕</span>
          <span className="truncate">voice memo ideas</span>
        </div>
      </div>
    );
  }

  if (index === 3) {
    return (
      <div className="mt-4 flex items-end gap-1.5">
        {[30, 52, 42, 66, 58, 74].map((height, barIndex) => (
          <span
            key={barIndex}
            className="w-3 rounded-t bg-gradient-to-t from-ember-500/80 to-amber-300/70"
            style={{ height: `${height / 3}px` }}
          />
        ))}
      </div>
    );
  }

  if (index === 4) {
    return (
      <div className="mt-4 flex items-center gap-2 text-xs text-ink-100">
        <span className="h-2 w-2 rounded-full bg-emerald-300" />
        <span>iPhone</span>
        <span className="h-px flex-1 bg-ink-200/25" />
        <span>iPad</span>
        <span className="h-2 w-2 rounded-full bg-emerald-300" />
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-xl border border-ink-200/20 bg-ink-800/55 p-3">
      <div className="mb-2 h-2 w-2/3 rounded-full bg-ink-200/20" />
      <div className="h-2 w-1/2 rounded-full bg-ink-200/20" />
    </div>
  );
}

export function PrimaryFeatures({ dict }: { dict: Dictionary }) {
  const lang = (dict.urls.home.split("/")[1] as Language) || "en";
  const features = getLatestFeatures(lang);

  return (
    <section id="features" className="py-12 sm:py-24">
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="inline-flex rounded-full border border-ember-300/45 bg-ember-500/15 px-4 py-1 text-xs font-semibold tracking-[0.18em] text-ember-200 uppercase">
            {dict.labels.features}
          </p>
          <h2 className="text-display mt-4 text-balance text-3xl leading-tight text-white sm:text-5xl">
            {dict.homeSections.primaryFeatures.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-100">
            {dict.homeSections.primaryFeatures.description}
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-stretch">
          <ol className="grid gap-4 sm:grid-cols-2 lg:h-full">
            {features.map((feature, index) => {
              const Icon = featureIcons[index] ?? WandSparkles;
              return (
                <li key={feature.title} className="glass-panel rounded-3xl p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex rounded-lg border border-ember-300/40 bg-ember-400/10 p-2 text-ember-200">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-semibold tracking-[0.2em] text-ink-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-semibold leading-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink-100">{feature.description}</p>

                  <FeaturePreview index={index} />
                </li>
              );
            })}
          </ol>

          <aside className="glass-panel relative h-full overflow-visible rounded-3xl p-4 sm:p-5">
            <div className="relative h-full min-h-[46rem]">
              <figure className="panel-stroke absolute left-1/2 top-[3%] z-30 w-[50%] -translate-x-1/2 rotate-[1deg] overflow-hidden rounded-2xl bg-ink-900/55 shadow-[0_14px_34px_rgba(20,10,6,0.35)]">
                <Image
                  src={searchScreenshot}
                  alt="Spark Memos search screen"
                  className="aspect-[9/19] h-full w-full object-cover object-top"
                  priority
                />
              </figure>

              <figure className="panel-stroke absolute left-[-9%] top-[26%] z-20 w-[40%] -rotate-[7deg] overflow-hidden rounded-2xl bg-ink-900/55 shadow-[0_12px_28px_rgba(20,10,6,0.28)]">
                <Image
                  src={collectionsScreenshot}
                  alt="Spark Memos collection view"
                  className="aspect-[9/19] h-full w-full object-cover object-top"
                />
              </figure>

              <figure className="panel-stroke absolute right-[-9%] top-[33%] z-10 w-[40%] rotate-[6deg] overflow-hidden rounded-2xl bg-ink-900/55 shadow-[0_12px_28px_rgba(20,10,6,0.28)]">
                <Image
                  src={activityScreenshot}
                  alt="Spark Memos analytics screen"
                  className="aspect-[9/19] h-full w-full object-cover object-top"
                />
              </figure>

              <figure className="panel-stroke absolute right-[-1%] top-[56%] z-40 w-[36%] -rotate-[4deg] overflow-hidden rounded-2xl bg-ink-900/55 shadow-[0_14px_32px_rgba(20,10,6,0.3)]">
                <Image
                  src={memoReviewScreenshot}
                  alt="Spark Memos memo review screen"
                  className="aspect-[9/19] h-full w-full object-cover object-top"
                />
              </figure>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
