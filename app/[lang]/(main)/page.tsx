import { CallToAction } from "@/components/CallToAction";
import { Faqs } from "@/components/Faqs";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";
import { Reviews } from "@/components/Reviews";
import { SecondaryFeatures } from "@/components/SecondaryFeatures";
import { METADATA } from "@/constants/metadata";
import { defaultLanguage, getDictionary, isLanguage } from "@/dictionaries";
import type { Metadata } from "next";
import { getAlternateLanguages } from "@/lib/metadata";
import { getAbsoluteUrl, getLanguageTag } from "@/lib/seo";
import Script from "next/script";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLanguage(lang) ? lang : defaultLanguage;
  const dict = await getDictionary(locale);

  return {
    alternates: {
      canonical: new URL(dict.urls.home, dict.baseUrl).href,
      languages: await getAlternateLanguages((d) => d.urls.home),
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLanguage(lang) ? lang : defaultLanguage;
  const dict = await getDictionary(locale);
  const faqItems = dict.homeSections.faq.items.flat();
  const homeUrl = getAbsoluteUrl(dict.urls.home, dict.baseUrl);
  const logoUrl = getAbsoluteUrl(METADATA.logoPath, dict.baseUrl);
  const languageTag = getLanguageTag(locale);

  return (
    <div className="space-y-1 pb-2">
      <Script id={`home-jsonld-${locale}`} type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${homeUrl}#organization`,
              name: dict.websiteName,
              url: homeUrl,
              logo: logoUrl,
              sameAs: METADATA.sameAs,
            },
            {
              "@type": "WebSite",
              "@id": `${homeUrl}#website`,
              url: homeUrl,
              name: dict.websiteName,
              inLanguage: languageTag,
              publisher: {
                "@id": `${homeUrl}#organization`,
              },
            },
            {
              "@type": "MobileApplication",
              "@id": `${homeUrl}#app`,
              name: dict.appName,
              description: dict.defaultDescription,
              applicationCategory: "ProductivityApplication",
              operatingSystem: "iOS",
              inLanguage: languageTag,
              downloadUrl: METADATA.appStoreLink,
              url: homeUrl,
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: METADATA.appStoreLink,
              },
            },
            {
              "@type": "FAQPage",
              "@id": `${homeUrl}#faq`,
              mainEntity: faqItems.map((item) => ({
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
              "@id": `${homeUrl}#breadcrumb`,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: dict.websiteName,
                  item: homeUrl,
                },
              ],
            },
          ],
        })}
      </Script>
      <Hero dict={dict} />
      <PrimaryFeatures dict={dict} />
      <SecondaryFeatures dict={dict} />
      <CallToAction dict={dict} />
      <Reviews dict={dict} />
      <Pricing dict={dict} />
      <Faqs dict={dict} />
    </div>
  );
}
