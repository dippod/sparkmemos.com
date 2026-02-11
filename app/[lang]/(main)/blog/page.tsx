import { posts, categories } from "@/.velite";
import Link from "next/link";
import { Language, getDictionary } from "@/dictionaries";
import { Metadata } from "next";
import { ArrowRight, CalendarDays } from "lucide-react";
import { getAlternateLanguages } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return {
    metadataBase: new URL(dictionary.baseUrl),
    title: dictionary.blog.title,
    description: dictionary.blog.description,
    keywords: dictionary.defaultKeywords,
    openGraph: {
      type: "website",
      url: new URL(dictionary.urls.blog, dictionary.baseUrl).href,
      title: dictionary.blog.title,
      description: dictionary.blog.description,
      siteName: dictionary.websiteName,
      locale: lang,
      images: "/social-banner.png",
    },
    twitter: {
      title: dictionary.blog.title,
      description: dictionary.blog.description,
      site: "@noobnooc",
      card: "summary_large_image",
    },
    alternates: {
      canonical: new URL(dictionary.urls.blog, dictionary.baseUrl).href,
      languages: await getAlternateLanguages((dict) => dict.urls.blog),
    },
  };
}

function getPublishedPosts(lang: string) {
  return posts
    .sort((p1, p2) => new Date(p2.date).getTime() - new Date(p1.date).getTime())
    .filter((post) => !post.draft && post.lang === lang);
}

export default async function PostsPage({
  params,
}: {
  params: Promise<{
    lang: Language;
  }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const publishedPosts = getPublishedPosts(lang);

  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
      <section className="glass-panel rounded-3xl px-6 py-8 sm:px-8 sm:py-10">
        <p className="inline-flex rounded-full border border-ember-300/45 bg-ember-500/15 px-4 py-1 text-xs font-semibold tracking-[0.18em] text-ember-200 uppercase">
          {dictionary.labels.blog}
        </p>
        <h1 className="text-display mt-4 text-balance text-4xl text-white sm:text-5xl">
          {dictionary.blog.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-ink-100">{dictionary.blog.description}</p>
      </section>

      <div className="mt-8 grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <section className="space-y-4" aria-label="Blog posts">
          {publishedPosts.map((post) => (
            <article key={post.slug} className="panel-stroke rounded-2xl bg-ink-900/55 p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-xs text-ink-200">
                <CalendarDays className="h-4 w-4" />
                <time dateTime={post.date}>
                  {Intl.DateTimeFormat(lang, {
                    dateStyle: "medium",
                  }).format(new Date(post.date))}
                </time>
              </div>
              <Link href={post.permalink} className="group inline-flex items-start gap-2">
                <h2 className="text-display text-2xl leading-tight text-white group-hover:text-ember-200">
                  {post.title}
                </h2>
                <ArrowRight className="mt-1 h-4 w-4 text-ember-200 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
              </Link>
              <p className="mt-3 text-base leading-7 text-ink-100">{post.description}</p>
            </article>
          ))}
        </section>

        <aside className="glass-panel rounded-2xl p-5 lg:sticky lg:top-24">
          <h2 className="text-sm font-semibold tracking-[0.14em] text-ink-100 uppercase">
            {dictionary.blog.categories}
          </h2>
          <ol className="mt-4 space-y-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={category.permalink[lang]}
                  className="flex items-center justify-between rounded-xl border border-transparent px-3 py-2 text-sm text-ink-100 hover:border-ink-200/35 hover:bg-ink-200/10 hover:text-white"
                >
                  <span>{category.name[lang]}</span>
                  <span className="text-xs text-ink-300">{category.count[lang]}</span>
                </Link>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </main>
  );
}
