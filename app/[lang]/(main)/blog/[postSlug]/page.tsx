import { posts } from "@/.velite";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary, Language, languageLabels } from "@/dictionaries";
import { Metadata } from "next";
import clsx from "clsx";
import { ArrowLeft, CalendarDays, Languages } from "lucide-react";
import Script from "next/script";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language; postSlug: string }>;
}): Promise<Metadata> {
  const { lang, postSlug } = await params;
  const dictionary = await getDictionary(lang);

  const post = posts.find((post) => post.lang === lang && post.slug === postSlug);

  if (!post) {
    notFound();
  }

  const allLanguages = posts.filter((entry) => entry.slug === postSlug);

  return {
    metadataBase: new URL(dictionary.baseUrl),
    title: post.title,
    description: post.description || post.title,
    keywords: dictionary.defaultKeywords,
    openGraph: {
      type: "article",
      url: new URL(post.permalink, dictionary.baseUrl).href,
      title: post.title,
      description: post.description || post.title,
      siteName: dictionary.websiteName,
      locale: lang,
      images: post.cover?.src ?? "/social-banner.png",
    },
    twitter: {
      title: post.title,
      description: post.description || post.title,
      site: "@noobnooc",
      card: "summary_large_image",
      images: "/social-banner.png",
    },
    alternates: {
      canonical: new URL(post.permalink, dictionary.baseUrl).href,
      languages: Object.fromEntries(
        allLanguages.map((entry) => [
          entry.lang,
          new URL(entry.permalink, dictionary.baseUrl).href,
        ])
      ),
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ lang: Language; postSlug: string }>;
}) {
  const { lang, postSlug } = await params;
  const dictionary = await getDictionary(lang);

  const post = posts.find((entry) => entry.lang === lang && entry.slug === postSlug);

  const otherLanguages = posts.filter(
    (entry) => entry.slug === postSlug && entry.lang !== lang
  );

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
      <Script id="ld-json" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description || post.title,
          datePublished: post.date,
          dateModified: post.updated || post.date,
          inLanguage: lang,
          image: post.cover?.src
            ? new URL(post.cover.src, dictionary.baseUrl).href
            : new URL("/social-banner.png", dictionary.baseUrl).href,
          mainEntityOfPage: new URL(post.permalink, dictionary.baseUrl).href,
          publisher: {
            "@type": "Organization",
            name: dictionary.websiteName,
            url: dictionary.baseUrl,
          },
        })}
      </Script>

      <article className="mx-auto max-w-4xl">
        <header className="glass-panel rounded-3xl px-6 py-8 sm:px-8 sm:py-10">
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
            <span className="inline-flex items-center gap-2 rounded-full border border-ink-200/35 px-3 py-1.5">
              <CalendarDays className="h-4 w-4" />
              {Intl.DateTimeFormat(lang, {
                dateStyle: "medium",
              }).format(new Date(post.date))}
            </span>

            {otherLanguages.length > 0 ? (
              <div className="inline-flex items-center gap-2 rounded-full border border-ink-200/35 px-3 py-1.5">
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
            <p className="mt-5 text-base leading-7 text-ink-100 sm:text-lg">{post.description}</p>
          ) : null}
        </header>

        <section className="glass-panel mt-6 rounded-3xl px-6 py-8 sm:px-8 sm:py-10">
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
