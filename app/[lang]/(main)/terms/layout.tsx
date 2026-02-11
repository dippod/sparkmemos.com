import type { Metadata } from "next";
import { getDictionary, Language } from "@/dictionaries";
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
      canonical: new URL(dict.urls.terms, dict.baseUrl).href,
      languages: await getAlternateLanguages((d) => d.urls.terms),
    },
  };
}

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
      <article className="glass-panel prose prose-invert mx-auto max-w-3xl rounded-3xl px-6 py-8 sm:px-8 sm:py-10">
        {children}
      </article>
    </main>
  );
}
