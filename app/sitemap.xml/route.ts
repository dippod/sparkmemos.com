import { dictionaryKeys, getDictionary } from "@/dictionaries";
import { getLatestContentDateIso } from "@/lib/seo";

export async function GET() {
  const locales = await Promise.all(
    dictionaryKeys.map(async (lang) => ({
      lang,
      dictionary: await getDictionary(lang),
    }))
  );

  const items = locales
    .map(({ lang, dictionary }) => {
      const loc = new URL(`/sitemaps/${lang}.xml`, dictionary.baseUrl).href;
      const lastmod = getLatestContentDateIso(lang);
      return `\n  <sitemap>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </sitemap>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${items}\n</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
