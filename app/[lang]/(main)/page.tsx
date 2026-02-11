import { CallToAction } from "@/components/CallToAction";
import { Faqs } from "@/components/Faqs";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { PrimaryFeatures } from "@/components/PrimaryFeatures";
import { Reviews } from "@/components/Reviews";
import { SecondaryFeatures } from "@/components/SecondaryFeatures";
import { getDictionary, Language } from "@/dictionaries";
import type { Metadata } from "next";
import { getAlternateLanguages } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

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
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="space-y-1 pb-2">
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
