import { Fraunces, Manrope } from "next/font/google";
import clsx from "clsx";

import "../globals.css";
import { getAlternateLanguages } from "@/lib/metadata";
import { METADATA } from "@/constants/metadata";
import { defaultLanguage, getDictionary, isLanguage } from "@/dictionaries";
import { Metadata } from "next";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const themeScript = `(() => {
  try {
    const stored = localStorage.getItem("theme");
    const theme =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";
    document.documentElement.setAttribute("data-theme", theme);
  } catch {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();`;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isLanguage(lang) ? lang : defaultLanguage;
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL(dict.baseUrl),
    title: {
      template: dict.titleTemplate,
      default: dict.defaultTitle,
    },
    description: dict.defaultDescription,
    keywords: dict.defaultKeywords,
    itunes: {
      appId: METADATA.appId,
    },
    openGraph: {
      type: "website",
      url: new URL(dict.urls.home, dict.baseUrl).href,
      title: dict.websiteName,
      description: dict.defaultDescription,
      siteName: dict.websiteName,
      locale,
      images: "/social-banner.png",
    },
    twitter: {
      title: dict.websiteName,
      description: dict.defaultDescription,
      site: "@WeeloneHQ",
      card: "summary_large_image",
      images: "/social-banner.png",
    },
    alternates: {
      languages: await getAlternateLanguages((dict) => dict.urls.home),
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLanguage(lang) ? lang : defaultLanguage;
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={clsx(
        "bg-[#120b08] text-ink-100 antialiased",
        manrope.variable,
        fraunces.variable,
      )}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
