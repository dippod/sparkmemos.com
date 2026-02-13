import clsx from "clsx";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import type { Metadata } from "next";
import { ArrowLeft, Sparkles } from "lucide-react";

import { AppStoreLink } from "@/components/AppStoreLink";
import {
  getComparisonIndexPath,
  getComparisonLocaleContent,
  getComparisonPage,
  getComparisonPath,
  isComparisonSlug,
} from "@/constants/comparisons";
import { METADATA } from "@/constants/metadata";
import { defaultLanguage, getDictionary, isLanguage } from "@/dictionaries";
import { getAlternateLanguages } from "@/lib/metadata";
import { getAbsoluteUrl, getLanguageTag, getOgAlternateLocales, getOgLocale } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = isLanguage(lang) ? lang : defaultLanguage;

  if (!isComparisonSlug(slug)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);
  const page = getComparisonPage(locale, slug);
  const pageUrl = getAbsoluteUrl(getComparisonPath(locale, slug), dictionary.baseUrl);

  return {
    title: page.seoTitle,
    description: page.seoDescription,
    keywords: [...dictionary.defaultKeywords, page.competitorName, "comparison", "Spark Memos"],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "article",
      url: pageUrl,
      title: page.seoTitle,
      description: page.seoDescription,
      siteName: dictionary.websiteName,
      locale: getOgLocale(locale),
      alternateLocale: getOgAlternateLocales(locale),
      images: [
        {
          url: METADATA.socialBannerPath,
          width: 1200,
          height: 630,
          alt: page.seoTitle,
        },
      ],
    },
    twitter: {
      title: page.seoTitle,
      description: page.seoDescription,
      site: METADATA.twitterHandle,
      creator: METADATA.twitterHandle,
      card: "summary_large_image",
      images: [METADATA.socialBannerPath],
    },
    alternates: {
      canonical: pageUrl,
      languages: await getAlternateLanguages((_dict, lang) => getComparisonPath(lang, slug)),
    },
  };
}

export default async function ComparisonDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = isLanguage(lang) ? lang : defaultLanguage;

  if (!isComparisonSlug(slug)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);
  const copy = getComparisonLocaleContent(locale);
  const page = getComparisonPage(locale, slug);
  const pageUrl = getAbsoluteUrl(getComparisonPath(locale, slug), dictionary.baseUrl);
  const compareIndexUrl = getAbsoluteUrl(getComparisonIndexPath(locale), dictionary.baseUrl);
  const languageTag = getLanguageTag(locale);

  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
      <Script id={`compare-jsonld-${locale}-${slug}`} type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${pageUrl}#webpage`,
              url: pageUrl,
              name: page.seoTitle,
              description: page.seoDescription,
              inLanguage: languageTag,
              isPartOf: {
                "@type": "WebSite",
                name: dictionary.websiteName,
                url: getAbsoluteUrl(dictionary.urls.home, dictionary.baseUrl),
              },
            },
            {
              "@type": "FAQPage",
              "@id": `${pageUrl}#faq`,
              mainEntity: page.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${pageUrl}#breadcrumb`,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: dictionary.websiteName,
                  item: getAbsoluteUrl(dictionary.urls.home, dictionary.baseUrl),
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: copy.index.eyebrow,
                  item: compareIndexUrl,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: page.cardTitle,
                  item: pageUrl,
                },
              ],
            },
          ],
        })}
      </Script>

      <section className="glass-panel relative overflow-hidden rounded-[2.5rem] px-6 py-10 sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-ember-500/15 blur-3xl" />
        <Link
          href={getComparisonIndexPath(locale)}
          className="inline-flex items-center gap-2 text-sm text-ink-100 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          {copy.common.backToAll}
        </Link>

        <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-ember-300/45 bg-ember-500/15 px-4 py-1 text-xs font-semibold tracking-[0.16em] text-ember-200 uppercase">
          <Sparkles className="h-3.5 w-3.5" />
          {page.badge}
        </p>

        <h1 className="text-display mt-4 max-w-4xl text-balance text-4xl leading-tight text-white sm:text-5xl">
          {page.title}
        </h1>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-ink-100">{page.description}</p>
        <p className="mt-5 text-sm text-ink-200">
          {page.lastUpdated}
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {page.summary.map((item) => (
            <article key={item.label} className="panel-stroke rounded-2xl bg-ink-900/45 p-4">
              <p className="text-xs font-semibold tracking-[0.14em] text-ink-200 uppercase">{item.label}</p>
              <p className="mt-2 text-sm leading-6 text-white">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="glass-panel rounded-[2.5rem] px-6 py-8 sm:px-8 sm:py-10">
          <h2 className="text-display text-3xl text-white sm:text-4xl">{page.sparkOnlyTitle}</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-ink-100">{page.sparkOnlyDescription}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {page.sparkOnlyFeatures.map((feature) => (
              <article key={feature.title} className="product-detail-card rounded-3xl p-5">
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink-100">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="glass-panel overflow-hidden rounded-[2.5rem]">
          <div className="border-b border-ink-200/20 px-6 py-6 sm:px-8">
            <h2 className="text-display text-3xl text-white sm:text-4xl">{page.matrixTitle}</h2>
            <p className="mt-3 max-w-4xl text-base leading-7 text-ink-100">{page.matrixDescription}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead className="bg-ink-900/45 text-xs tracking-[0.14em] text-ink-200 uppercase">
                <tr>
                  <th className="px-4 py-3 sm:px-6">{copy.table.featureColumn}</th>
                  <th className="px-4 py-3 sm:px-6">{copy.table.sparkColumn}</th>
                  <th className="px-4 py-3 sm:px-6">{page.competitorName}</th>
                </tr>
              </thead>
              <tbody>
                {page.matrixRows.map((row) => (
                  <tr
                    key={`${row.category}-${row.feature}`}
                    className={clsx(
                      "border-t border-ink-200/15 align-top",
                      row.sparkOnly && "bg-ember-500/7"
                    )}
                  >
                    <td className="px-4 py-4 sm:px-6">
                      <p className="text-xs font-semibold tracking-[0.12em] text-ink-200 uppercase">
                        {row.category}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">{row.feature}</p>
                      {row.sparkOnly ? (
                        <span className="mt-2 inline-flex rounded-full border border-ember-300/50 bg-ember-500/15 px-2.5 py-1 text-[11px] font-semibold tracking-[0.12em] text-ember-200 uppercase">
                          {copy.table.sparkOnlyBadge}
                        </span>
                      ) : null}
                    </td>
                    <td className="px-4 py-4 text-sm leading-7 text-ink-50 sm:px-6">{row.spark}</td>
                    <td className="px-4 py-4 text-sm leading-7 text-ink-100 sm:px-6">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="glass-panel rounded-[2.5rem] px-6 py-8 sm:px-8 sm:py-10">
          <h2 className="text-display text-3xl text-white sm:text-4xl">{page.scenarioTitle}</h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-ink-100">{page.scenarioDescription}</p>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {page.scenarios.map((scenario) => (
              <article key={scenario.title} className="product-detail-card rounded-3xl p-5">
                <h3 className="text-lg font-semibold text-white">{scenario.title}</h3>

                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-ember-200 uppercase">
                      {copy.scenarioLabels.sparkFlow}
                    </p>
                    <ul className="mt-2 space-y-1 text-sm leading-7 text-ink-50">
                      {scenario.sparkFlow.map((step) => (
                        <li key={step}>• {step}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[0.12em] text-ink-200 uppercase">
                      {copy.scenarioLabels.competitorFlow}
                    </p>
                    <ul className="mt-2 space-y-1 text-sm leading-7 text-ink-100">
                      {scenario.competitorFlow.map((step) => (
                        <li key={step}>• {step}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-4 rounded-2xl border border-ink-200/25 bg-ink-900/40 p-3 text-sm leading-7 text-white">
                  <span className="mr-2 text-ember-200">{copy.scenarioLabels.outcome}:</span>
                  {scenario.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_21rem]">
        <div className="glass-panel rounded-[2.5rem] px-6 py-8 sm:px-8 sm:py-10">
          <h2 className="text-display text-3xl text-white sm:text-4xl">{page.migrationTitle}</h2>
          <p className="mt-3 max-w-4xl text-base leading-7 text-ink-100">{page.migrationDescription}</p>

          <ol className="mt-6 space-y-3">
            {page.migrationSteps.map((step, index) => (
              <li key={step.title} className="panel-stroke rounded-2xl bg-ink-900/45 p-4">
                <p className="text-sm font-semibold text-white">
                  {copy.common.migrationPrefix} {index + 1}. {step.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-ink-100">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <aside className="glass-panel rounded-[2.5rem] p-6">
          <p className="text-xs font-semibold tracking-[0.14em] text-ink-200 uppercase">
            {copy.common.faqEyebrow}
          </p>
          <h2 className="text-display mt-3 text-3xl text-white">{page.faqTitle}</h2>
          <div className="mt-5 space-y-3">
            {page.faq.map((item) => (
              <article key={item.question} className="faq-card rounded-2xl p-4">
                <h3 className="text-sm font-semibold text-white">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-ink-100">{item.answer}</p>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="mt-8">
        <div className="cta-shell rounded-[2.5rem] px-6 py-8 sm:px-8 sm:py-10">
          <p className="text-sm text-ink-100">{copy.common.ctaTitle}</p>
          <h2 className="text-display mt-3 max-w-4xl text-3xl text-white sm:text-4xl">{page.conclusion}</h2>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <AppStoreLink />
            <span className="text-sm text-ink-100">{page.cta}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
