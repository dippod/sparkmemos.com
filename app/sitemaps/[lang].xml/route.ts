import { NextRequest } from "next/server";
import { posts, categories } from "@/.velite";
import {
  Language,
  defaultLanguage,
  dictionaryKeys,
  getDictionary,
} from "@/dictionaries";
import { getCategoryLastmodIso, getLatestContentDateIso } from "@/lib/seo";

function xhtmlLink(rel: "alternate", href: string, hrefLang: string) {
  return `\n    <xhtml:link rel="${rel}" hreflang="${hrefLang}" href="${href}" />`;
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ lang?: string | string[] }> }
) {
  const { lang } = await params;
  const resolvedLang = Array.isArray(lang) ? lang[0] : lang;
  if (!resolvedLang || !dictionaryKeys.includes(resolvedLang as Language)) {
    return new Response("Not found", { status: 404 });
  }

  const locale = resolvedLang as Language;
  const dictionaries = await Promise.all(
    dictionaryKeys.map(async (lang) => ({
      lang,
      dictionary: await getDictionary(lang),
    }))
  );
  const currentEntry = dictionaries.find((entry) => entry.lang === locale);
  const current = currentEntry?.dictionary;
  if (!current) return new Response("Not found", { status: 404 });

  const allLocales = dictionaries.map(({ lang, dictionary }) => ({
    lang,
    baseUrl: dictionary.baseUrl,
    urls: dictionary.urls,
  }));
  const defaultLocaleEntry = allLocales.find((entry) => entry.lang === defaultLanguage);
  const localeLastmod = getLatestContentDateIso(locale);

  const urlsetOpen = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`;
  const urlsetClose = `\n</urlset>`;

  const altFor = (paths: Record<string, string>) => {
    const links = allLocales
      .map(({ lang, baseUrl }) => {
        const path = paths[lang];

        if (!path) {
          return "";
        }

        return xhtmlLink("alternate", new URL(path, baseUrl).href, lang);
      })
      .join("");
    const defaultPath = paths[defaultLanguage];

    if (!defaultLocaleEntry || !defaultPath) {
      return links;
    }

    return `${links}${xhtmlLink(
      "alternate",
      new URL(defaultPath, defaultLocaleEntry.baseUrl).href,
      "x-default"
    )}`;
  };

  const pages = [] as string[];

  // Home
  pages.push(
    `\n  <url>\n    <loc>${
      new URL(current.urls.home, current.baseUrl).href
    }</loc>${altFor(
      Object.fromEntries(
        allLocales.map(({ lang, urls }) => [lang, urls.home])
      ) as Record<string, string>
    )}\n    <lastmod>${localeLastmod}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>`
  );

  // Blog index
  pages.push(
    `\n  <url>\n    <loc>${
      new URL(current.urls.blog, current.baseUrl).href
    }</loc>${altFor(
      Object.fromEntries(
        allLocales.map(({ lang, urls }) => [lang, urls.blog])
      ) as Record<string, string>
    )}\n    <lastmod>${localeLastmod}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>`
  );

  // Terms & Privacy
  pages.push(
    `\n  <url>\n    <loc>${
      new URL(current.urls.terms, current.baseUrl).href
    }</loc>${altFor(
      Object.fromEntries(
        allLocales.map(({ lang, urls }) => [lang, urls.terms])
      ) as Record<string, string>
    )}\n    <lastmod>${localeLastmod}</lastmod>\n    <changefreq>yearly</changefreq>\n    <priority>0.4</priority>\n  </url>`
  );
  pages.push(
    `\n  <url>\n    <loc>${
      new URL(current.urls.privacy, current.baseUrl).href
    }</loc>${altFor(
      Object.fromEntries(
        allLocales.map(({ lang, urls }) => [lang, urls.privacy])
      ) as Record<string, string>
    )}\n    <lastmod>${localeLastmod}</lastmod>\n    <changefreq>yearly</changefreq>\n    <priority>0.4</priority>\n  </url>`
  );

  // Posts for the current lang, with alternates
  posts
    .filter((p) => !p.draft && p.lang === locale)
    .forEach((p) => {
      const group = posts.filter((i) => i.slug === p.slug);
      const map = Object.fromEntries(
        group.map((g) => [g.lang, g.permalink])
      ) as Record<string, string>;
      const lastmod = new Date(p.updated || p.date).toISOString();
      pages.push(
        `\n  <url>\n    <loc>${
          new URL(p.permalink, current.baseUrl).href
        }</loc>${altFor(
          map
        )}\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`
      );
    });

  // Categories for the current lang, with alternates
  categories.forEach((c) => {
    const localeCountKey = locale as keyof typeof c.count;

    if (c.count[localeCountKey] === 0) {
      return;
    }

    const map = Object.fromEntries(
      allLocales.map(({ lang }) => {
        const key = lang as keyof typeof c.permalink;
        return [lang, c.permalink[key]] as const;
      })
    ) as Record<string, string>;
    const localePathKey = locale as keyof typeof c.permalink;
    const lastmod = getCategoryLastmodIso(locale, c.slug);
    pages.push(
      `\n  <url>\n    <loc>${
        new URL(c.permalink[localePathKey], current.baseUrl).href
      }</loc>${altFor(
        map
      )}\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.6</priority>\n  </url>`
    );
  });

  const xml = `${urlsetOpen}${pages.join("")}${urlsetClose}`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
