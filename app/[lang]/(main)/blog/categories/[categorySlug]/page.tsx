import { posts, categories } from "@/.velite";
import Link from "next/link";
import { Language, getDictionary } from "@/dictionaries";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { getAlternateLanguages } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language; categorySlug: string }>;
}): Promise<Metadata> {
  const { lang, categorySlug } = await params;
  const dictionary = await getDictionary(lang);
  const category = categories.find((category) => category.slug === categorySlug);

  if (!category) {
    notFound();
  }

  return {
    metadataBase: new URL(dictionary.baseUrl),
    title: category.name[lang],
    description: category.description?.[lang],
    keywords: dictionary.defaultKeywords,
    openGraph: {
      type: "website",
      url: new URL(category.permalink[lang], dictionary.baseUrl).href,
      title: category.name[lang],
      description: category.description?.[lang],
      siteName: dictionary.websiteName,
      locale: lang,
      images: "/social-banner.png",
    },
    twitter: {
      title: category.name[lang],
      description: category.description?.[lang],
      site: "@noobnooc",
      card: "summary_large_image",
    },
    alternates: {
      canonical: new URL(category.permalink[lang], dictionary.baseUrl).href,
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
    lang: Language;
    categorySlug: string;
  }>;
}) {
  const { lang, categorySlug } = await params;
  const category = categories.find((entry) => entry.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const publishedPosts = getPublishedPosts(lang, category.slug);
  const dictionary = await getDictionary(lang);

  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
      <section className="glass-panel rounded-3xl px-6 py-8 sm:px-8 sm:py-10">
        <Link
          href={dictionary.urls.blog}
          className="mb-5 inline-flex items-center gap-2 text-sm text-ink-100 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          {dictionary.labels.blog}
        </Link>
        <h1 className="text-display text-4xl text-white sm:text-5xl">{category.name[lang]}</h1>
        <p className="mt-4 max-w-3xl text-lg text-ink-100">{category.description?.[lang]}</p>
      </section>

      <ul className="mt-8 space-y-4">
        {publishedPosts.map((post) => (
          <li key={post.slug} className="panel-stroke rounded-2xl bg-ink-900/55 p-5 sm:p-6">
            <div className="mb-3 flex items-center gap-2 text-xs text-ink-200">
              <CalendarDays className="h-4 w-4" />
              <time dateTime={post.date}>
                {Intl.DateTimeFormat(lang, {
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
