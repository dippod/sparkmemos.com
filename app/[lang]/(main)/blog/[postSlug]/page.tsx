import { posts } from "@/.velite";
import { notFound } from "next/navigation";
import Link from "next/link";
import { defaultLanguage, getDictionary, isLanguage, languageLabels } from "@/dictionaries";
import { Metadata } from "next";
import clsx from "clsx";
import { ArrowLeft, CalendarDays, Languages } from "lucide-react";
import Script from "next/script";
import { METADATA } from "@/constants/metadata";
import {
  getAbsoluteUrl,
  getLanguageTag,
  getOgAlternateLocales,
  getOgLocale,
} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; postSlug: string }>;
}): Promise<Metadata> {
  const { lang, postSlug } = await params;
  const locale = isLanguage(lang) ? lang : defaultLanguage;
  const dictionary = await getDictionary(locale);

  const post = posts.find((post) => post.lang === locale && post.slug === postSlug);

  if (!post) {
    notFound();
  }

  const allLanguages = posts.filter((entry) => entry.slug === postSlug);
  const postUrl = getAbsoluteUrl(post.permalink, dictionary.baseUrl);
  const postImage = post.cover?.src ?? METADATA.socialBannerPath;
  const languageAlternates = Object.fromEntries(
    allLanguages.map((entry) => [
      entry.lang,
      getAbsoluteUrl(entry.permalink, dictionary.baseUrl),
    ])
  ) as Record<string, string>;
  const defaultEntry = allLanguages.find((entry) => entry.lang === defaultLanguage);

  if (defaultEntry) {
    languageAlternates["x-default"] = getAbsoluteUrl(
      defaultEntry.permalink,
      dictionary.baseUrl
    );
  }

  return {
    metadataBase: new URL(dictionary.baseUrl),
    title: post.title,
    description: post.description || post.title,
    keywords: [...dictionary.defaultKeywords, ...(post.keywords || [])],
    authors: [{ name: METADATA.creatorName, url: METADATA.sameAs[0] }],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "article",
      url: postUrl,
      title: post.title,
      description: post.description || post.title,
      siteName: dictionary.websiteName,
      locale: getOgLocale(locale),
      alternateLocale: getOgAlternateLocales(locale),
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [METADATA.creatorName],
      section: post.categories[0],
      tags: post.tags,
      images: [
        {
          url: postImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      title: post.title,
      description: post.description || post.title,
      site: METADATA.twitterHandle,
      creator: METADATA.twitterHandle,
      card: "summary_large_image",
      images: [postImage],
    },
    alternates: {
      canonical: postUrl,
      languages: languageAlternates,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ lang: string; postSlug: string }>;
}) {
  const { lang, postSlug } = await params;
  const locale = isLanguage(lang) ? lang : defaultLanguage;
  const dictionary = await getDictionary(locale);

  const post = posts.find((entry) => entry.lang === locale && entry.slug === postSlug);

  const otherLanguages = posts.filter(
    (entry) => entry.slug === postSlug && entry.lang !== locale
  );

  if (!post) {
    notFound();
  }
  const homeUrl = getAbsoluteUrl(dictionary.urls.home, dictionary.baseUrl);
  const blogUrl = getAbsoluteUrl(dictionary.urls.blog, dictionary.baseUrl);
  const postUrl = getAbsoluteUrl(post.permalink, dictionary.baseUrl);
  const articleImageUrl = getAbsoluteUrl(
    post.cover?.src ?? METADATA.socialBannerPath,
    dictionary.baseUrl
  );
  const languageTag = getLanguageTag(locale);

  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
      <Script id={`blog-post-jsonld-${locale}-${post.slug}`} type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              "@id": `${postUrl}#article`,
              headline: post.title,
              description: post.description || post.title,
              datePublished: post.date,
              dateModified: post.updated || post.date,
              inLanguage: languageTag,
              image: [articleImageUrl],
              mainEntityOfPage: postUrl,
              articleSection: post.categories,
              keywords: post.keywords?.join(", "),
              author: {
                "@type": "Person",
                name: METADATA.creatorName,
                sameAs: METADATA.sameAs[0],
              },
              publisher: {
                "@type": "Organization",
                name: dictionary.websiteName,
                url: homeUrl,
                logo: {
                  "@type": "ImageObject",
                  url: getAbsoluteUrl(METADATA.logoPath, dictionary.baseUrl),
                },
              },
              isPartOf: {
                "@type": "Blog",
                "@id": `${blogUrl}#blog`,
                name: dictionary.blog.title,
                url: blogUrl,
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${postUrl}#breadcrumb`,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: dictionary.websiteName,
                  item: homeUrl,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: dictionary.labels.blog,
                  item: blogUrl,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: post.title,
                  item: postUrl,
                },
              ],
            },
          ],
        })}
      </Script>

      <article className="mx-auto max-w-4xl">
        <header className="py-8 sm:py-12">
          <Link
            href={dictionary.urls.blog}
            className="mb-5 inline-flex items-center gap-2 text-sm text-ink-100 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {dictionary.labels.blog}
          </Link>
          <h1 className="text-display text-balance text-4xl leading-tight text-white sm:text-5xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-ink-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-200/35 px-3 py-1.5 font-medium">
              <CalendarDays className="h-4 w-4" />
              {Intl.DateTimeFormat(locale, {
                dateStyle: "medium",
              }).format(new Date(post.date))}
            </span>

            {otherLanguages.length > 0 ? (
              <div className="inline-flex items-center gap-2 rounded-full border border-ink-200/35 px-3 py-1.5 font-medium">
                <Languages className="h-4 w-4" />
                <div className="flex gap-2">
                  {otherLanguages.map((entry) => (
                    <Link
                      key={entry.lang}
                      href={entry.permalink}
                      className="text-ink-50 underline-offset-4 hover:text-white hover:underline"
                    >
                      {languageLabels[entry.lang]}
                    </Link>
                  ))}
                </div>
              </div>
            ) : undefined}
          </div>

          {post.description ? (
            <p className="mt-6 text-lg leading-8 text-ink-100">{post.description}</p>
          ) : null}
        </header>

        <section className="glass-panel rounded-[2.5rem] px-6 py-8 sm:px-10 sm:py-12 shadow-sm">
          <div
            className={clsx(
              "prose prose-invert max-w-none",
              "prose-headings:text-display prose-headings:tracking-tight",
              "prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl",
              "prose-p:leading-8"
            )}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </section>
      </article>
    </main>
  );
}
