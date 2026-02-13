import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { ArrowRight, BarChart3, ShieldCheck, Sparkles } from "lucide-react";

import {
  getComparisonIndexPath,
  getComparisonLocaleContent,
  getComparisonPages,
  getComparisonPath,
} from "@/constants/comparisons";
import { defaultLanguage, getDictionary, isLanguage } from "@/dictionaries";
import { getAlternateLanguages } from "@/lib/metadata";
import { getAbsoluteUrl, getLanguageTag, getOgAlternateLocales, getOgLocale } from "@/lib/seo";
import { METADATA } from "@/constants/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLanguage(lang) ? lang : defaultLanguage;
  const dictionary = await getDictionary(locale);
  const copy = getComparisonLocaleContent(locale);
  const comparePath = getComparisonIndexPath(locale);
  const compareUrl = getAbsoluteUrl(comparePath, dictionary.baseUrl);

  return {
    title: copy.index.seoTitle,
    description: copy.index.seoDescription,
    keywords: [
      ...dictionary.defaultKeywords,
      "comparison",
      "Flomo",
      "Notion",
      "Apple Notes",
      "Spark Memos",
    ],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      url: compareUrl,
      title: copy.index.seoTitle,
      description: copy.index.seoDescription,
      siteName: dictionary.websiteName,
      locale: getOgLocale(locale),
      alternateLocale: getOgAlternateLocales(locale),
      images: [
        {
          url: METADATA.socialBannerPath,
          width: 1200,
          height: 630,
          alt: copy.index.seoTitle,
        },
      ],
    },
    twitter: {
      title: copy.index.seoTitle,
      description: copy.index.seoDescription,
      site: METADATA.twitterHandle,
      creator: METADATA.twitterHandle,
      card: "summary_large_image",
      images: [METADATA.socialBannerPath],
    },
    alternates: {
      canonical: compareUrl,
      languages: await getAlternateLanguages((_dict, lang) => getComparisonIndexPath(lang)),
    },
  };
}

export default async function ComparisonIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLanguage(lang) ? lang : defaultLanguage;
  const dictionary = await getDictionary(locale);
  const copy = getComparisonLocaleContent(locale);
  const pages = getComparisonPages(locale);
  const compareUrl = getAbsoluteUrl(getComparisonIndexPath(locale), dictionary.baseUrl);
  const languageTag = getLanguageTag(locale);

  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
      <Script id={`compare-index-jsonld-${locale}`} type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${compareUrl}#collection`,
              url: compareUrl,
              name: copy.index.seoTitle,
              description: copy.index.seoDescription,
              inLanguage: languageTag,
              isPartOf: {
                "@type": "WebSite",
                name: dictionary.websiteName,
                url: getAbsoluteUrl(dictionary.urls.home, dictionary.baseUrl),
              },
            },
            {
              "@type": "ItemList",
              "@id": `${compareUrl}#list`,
              itemListElement: pages.map((page, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: page.cardTitle,
                url: getAbsoluteUrl(getComparisonPath(locale, page.slug), dictionary.baseUrl),
              })),
            },
          ],
        })}
      </Script>

      <section className="glass-panel relative overflow-hidden rounded-[2.5rem] px-6 py-10 sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-ember-500/15 blur-3xl" />
        <p className="inline-flex items-center gap-2 rounded-full border border-ember-300/45 bg-ember-500/15 px-4 py-1 text-xs font-semibold tracking-[0.16em] text-ember-200 uppercase">
          <Sparkles className="h-3.5 w-3.5" />
          {copy.index.eyebrow}
        </p>
        <h1 className="text-display mt-4 max-w-4xl text-balance text-4xl leading-tight text-white sm:text-5xl">
          {copy.index.title}
        </h1>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-ink-100">{copy.index.description}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {copy.index.highlights.map((highlight, index) => {
            const icon =
              index === 0 ? (
                <BarChart3 className="h-5 w-5" />
              ) : index === 1 ? (
                <ShieldCheck className="h-5 w-5" />
              ) : (
                <Sparkles className="h-5 w-5" />
              );

            return (
              <article key={highlight.title} className="panel-stroke rounded-3xl bg-ink-900/45 p-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-ink-200/30 bg-ink-200/10 text-ember-200">
                  {icon}
                </div>
                <h2 className="mt-4 text-lg font-semibold text-white">{highlight.title}</h2>
                <p className="mt-2 text-sm leading-7 text-ink-100">{highlight.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        {pages.map((page) => (
          <article
            key={page.slug}
            className="product-detail-card rounded-[2rem] p-6 sm:p-7"
          >
            <p className="text-xs font-semibold tracking-[0.16em] text-ink-200 uppercase">
              {page.competitorName}
            </p>
            <h2 className="text-display mt-3 text-2xl text-white">{page.cardTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-ink-100">{page.cardDescription}</p>
            <Link
              href={getComparisonPath(locale, page.slug)}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink-200/35 px-4 py-2 text-sm font-semibold text-ink-50 hover:border-ink-200/55 hover:text-white"
            >
              {copy.index.openPageLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
