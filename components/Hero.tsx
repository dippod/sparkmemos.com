import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Search,
  Sparkles,
} from "lucide-react";

import { AppStoreLink } from "@/components/AppStoreLink";
import { Container } from "@/components/Container";
import { PhoneFrame } from "@/components/PhoneFrame";
import { getLatestFeatures } from "@/constants/latestFeatures";
import { Dictionary, Language } from "@/dictionaries";

import overviewScreenshot from "@/public/screenshots/overview.webp";

function HeroFeatureVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="mt-3 flex flex-wrap gap-1.5">
        {["Text", "Image", "Audio"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-ink-200/30 bg-ink-900/45 px-2.5 py-1 text-[11px] text-ink-100"
          >
            {item}
          </span>
        ))}
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="mt-3 rounded-lg border border-ink-200/25 bg-ink-900/45 p-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-ember-300/80" />
          <span className="h-2 w-2 rounded-full bg-amber-300/70" />
          <span className="h-2 w-2 rounded-full bg-ink-200/50" />
        </div>
        <div className="mt-2 space-y-1.5">
          <div className="h-1.5 w-4/5 rounded-full bg-ink-200/25" />
          <div className="h-1.5 w-3/5 rounded-full bg-ink-200/25" />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-3 rounded-lg border border-ink-200/25 bg-ink-900/45 p-2.5">
      <div className="flex items-center gap-2 rounded-md border border-ink-200/20 bg-ink-900/60 px-2 py-1 text-[11px] text-ink-100">
        <span>⌕</span>
        <span className="truncate">voice memo ideas</span>
      </div>
      <div className="mt-2 h-1.5 w-2/3 rounded-full bg-ink-200/25" />
    </div>
  );
}

export function Hero({ dict }: { dict: Dictionary }) {
  const lang = (dict.urls.home.split("/")[1] as Language) || "en";
  const latestFeatures = getLatestFeatures(lang);
  const featureIcons = [Sparkles, Search, BarChart3] as const;

  return (
    <section className="pb-16 pt-10 sm:pb-24 sm:pt-16">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_28rem] xl:grid-cols-[minmax(0,1fr)_32rem]">
          <div className="animate-fade-in-up">
            <p className="mb-4 inline-flex rounded-full border border-ember-300/45 bg-ember-500/15 px-4 py-1 text-xs font-semibold tracking-[0.18em] text-ember-200 uppercase">
              Spark Memos
            </p>
            <h1 className="text-display text-balance text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {dict.homeSections.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink-100 sm:text-xl">
              {dict.homeSections.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AppStoreLink />
              <Link
                href={dict.urls.blog}
                className="rounded-full border border-ink-200/35 px-5 py-2.5 text-sm font-semibold tracking-wide text-ink-100 hover:border-ink-200/65 hover:bg-ink-100/10 hover:text-white"
              >
                {dict.labels.blog}
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {latestFeatures.slice(0, 3).map((feature, index) => {
                const Icon = featureIcons[index] ?? Sparkles;

                return (
                  <article key={feature.title} className="panel-stroke rounded-2xl bg-ink-900/45 p-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex rounded-lg border border-ember-300/40 bg-ember-400/10 p-2 text-ember-200">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-xs font-semibold tracking-[0.18em] text-ink-200">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-3 text-sm font-semibold text-white">{feature.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-ink-100">{feature.description}</p>
                    <HeroFeatureVisual index={index} />
                  </article>
                );
              })}
            </div>
          </div>

          <div
            className="animate-fade-in-up flex justify-center lg:pt-6"
            style={{ animationDelay: "180ms" }}
          >
            <PhoneFrame className="w-full max-w-[320px] drop-shadow-[0_28px_60px_rgba(5,8,16,0.58)]">
              <Image
                className="h-full w-full object-contain"
                src={overviewScreenshot}
                alt="Spark Memos overview screen"
                priority
              />
            </PhoneFrame>
          </div>
        </div>
      </Container>
    </section>
  );
}
