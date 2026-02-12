import { posts, categories } from "@/.velite";
import Link from "next/link";
import Script from "next/script";
import { defaultLanguage, getDictionary, isLanguage } from "@/dictionaries";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { getAlternateLanguages } from "@/lib/metadata";
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
  params: Promise<{ lang: string; categorySlug: string }>;
}): Promise<Metadata> {
  const { lang, categorySlug } = await params;
  const locale = isLanguage(lang) ? lang : defaultLanguage;
  const dictionary = await getDictionary(locale);
  const category = categories.find((category) => category.slug === categorySlug);

  if (!category) {
    notFound();
  }
  const categoryUrl = getAbsoluteUrl(category.permalink[locale], dictionary.baseUrl);
  const categoryName = category.name[locale];
  const categoryDescription = category.description?.[locale] || dictionary.blog.description;

  return {
    metadataBase: new URL(dictionary.baseUrl),
    title: categoryName,
    description: categoryDescription,
    keywords: [...dictionary.defaultKeywords, categoryName],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      url: categoryUrl,
      title: categoryName,
      description: categoryDescription,
      siteName: dictionary.websiteName,
      locale: getOgLocale(locale),
      alternateLocale: getOgAlternateLocales(locale),
      images: [
        {
          url: METADATA.socialBannerPath,
          width: 1200,
          height: 630,
          alt: categoryName,
        },
      ],
    },
    twitter: {
      title: categoryName,
      description: categoryDescription,
      site: METADATA.twitterHandle,
      creator: METADATA.twitterHandle,
      card: "summary_large_image",
      images: [METADATA.socialBannerPath],
    },
    alternates: {
      canonical: categoryUrl,
      languages: await getAlternateLanguages((dict, _lang) => category.permalink[_lang]),
    },
  };
}

function getPublishedPosts(lang: string, category: string) {
  return posts
    .sort((p1, p2) => new Date(p2.date).getTime() - new Date(p1.date).getTime())
    .filter(
      (post) =>
        !post.draft && post.lang === lang && post.categories.includes(category)
    );
}

export default async function CategoryPostsPage({
  params,
}: {
  params: Promise<{
    lang: string;
    categorySlug: string;
  }>;
}) {
  const { lang, categorySlug } = await params;
  const locale = isLanguage(lang) ? lang : defaultLanguage;
  const category = categories.find((entry) => entry.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const publishedPosts = getPublishedPosts(locale, category.slug);
  const dictionary = await getDictionary(locale);
  const homeUrl = getAbsoluteUrl(dictionary.urls.home, dictionary.baseUrl);
  const blogUrl = getAbsoluteUrl(dictionary.urls.blog, dictionary.baseUrl);
  const categoryUrl = getAbsoluteUrl(category.permalink[locale], dictionary.baseUrl);
  const languageTag = getLanguageTag(locale);

  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
      <Script id={`blog-category-jsonld-${locale}-${category.slug}`} type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${categoryUrl}#category`,
              name: category.name[locale],
              description: category.description?.[locale] || dictionary.blog.description,
              url: categoryUrl,
              inLanguage: languageTag,
              isPartOf: {
                "@type": "Blog",
                "@id": `${blogUrl}#blog`,
                name: dictionary.blog.title,
                url: blogUrl,
              },
            },
            {
              "@type": "ItemList",
              "@id": `${categoryUrl}#post-list`,
              itemListElement: publishedPosts.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: post.title,
                url: getAbsoluteUrl(post.permalink, dictionary.baseUrl),
              })),
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${categoryUrl}#breadcrumb`,
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
                  name: category.name[locale],
                  item: categoryUrl,
                },
              ],
            },
          ],
        })}
      </Script>
      <section className="glass-panel rounded-3xl px-6 py-8 sm:px-8 sm:py-10">
        <Link
          href={dictionary.urls.blog}
          className="mb-5 inline-flex items-center gap-2 text-sm text-ink-100 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          {dictionary.labels.blog}
        </Link>
        <h1 className="text-display text-4xl text-white sm:text-5xl">{category.name[locale]}</h1>
        <p className="mt-4 max-w-3xl text-lg text-ink-100">{category.description?.[locale]}</p>
      </section>

      <ul className="mt-8 space-y-4">
        {publishedPosts.map((post) => (
          <li key={post.slug} className="panel-stroke rounded-2xl bg-ink-900/55 p-5 sm:p-6">
            <div className="mb-3 flex items-center gap-2 text-xs text-ink-200">
              <CalendarDays className="h-4 w-4" />
              <time dateTime={post.date}>
                {Intl.DateTimeFormat(locale, {
                  dateStyle: "medium",
                }).format(new Date(post.date))}
              </time>
            </div>
            <Link href={post.permalink} className="text-display text-2xl leading-tight text-white hover:text-ember-200">
              {post.title}
            </Link>
            <p className="mt-3 text-base leading-7 text-ink-100">{post.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
