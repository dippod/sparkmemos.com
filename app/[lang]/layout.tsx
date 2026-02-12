import { Fraunces, Manrope } from "next/font/google";
import clsx from "clsx";

import "../globals.css";
import { getAlternateLanguages } from "@/lib/metadata";
import { getAbsoluteUrl, getOgAlternateLocales, getOgLocale } from "@/lib/seo";
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
    applicationName: METADATA.brandName,
    title: {
      template: dict.titleTemplate,
      default: dict.defaultTitle,
    },
    description: dict.defaultDescription,
    keywords: dict.defaultKeywords,
    creator: METADATA.creatorName,
    publisher: METADATA.brandName,
    authors: [{ name: METADATA.creatorName, url: METADATA.sameAs[0] }],
    referrer: "origin-when-cross-origin",
    category: "productivity",
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    itunes: {
      appId: METADATA.appId,
    },
    openGraph: {
      type: "website",
      url: getAbsoluteUrl(dict.urls.home, dict.baseUrl),
      title: dict.websiteName,
      description: dict.defaultDescription,
      siteName: dict.websiteName,
      locale: getOgLocale(locale),
      alternateLocale: getOgAlternateLocales(locale),
      images: [
        {
          url: METADATA.socialBannerPath,
          width: 1200,
          height: 630,
          alt: dict.defaultTitle,
        },
      ],
    },
    twitter: {
      title: dict.websiteName,
      description: dict.defaultDescription,
      site: METADATA.twitterHandle,
      creator: METADATA.twitterHandle,
      card: "summary_large_image",
      images: [METADATA.socialBannerPath],
    },
    alternates: {
      languages: await getAlternateLanguages((dict) => dict.urls.home),
    },
    other: {
      "apple-itunes-app": `app-id=${METADATA.appId}, app-argument=${METADATA.appStoreLink}`,
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
