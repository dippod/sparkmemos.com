import "server-only";

import { posts } from "@/.velite";
import { Language, defaultLanguage, dictionaryKeys } from "@/dictionaries";

const OG_LOCALE_MAP: Record<Language, string> = {
  en: "en_US",
  zh: "zh_CN",
  es: "es_ES",
  de: "de_DE",
  fr: "fr_FR",
  it: "it_IT",
  ja: "ja_JP",
  ko: "ko_KR",
};

const LANGUAGE_TAG_MAP: Record<Language, string> = {
  en: "en-US",
  zh: "zh-CN",
  es: "es-ES",
  de: "de-DE",
  fr: "fr-FR",
  it: "it-IT",
  ja: "ja-JP",
  ko: "ko-KR",
};

function latestDateToIso(dates: string[]) {
  if (dates.length === 0) {
    return "2024-01-01T00:00:00.000Z";
  }

  const timestamp = Math.max(...dates.map((date) => new Date(date).getTime()));
  return new Date(timestamp).toISOString();
}

export function getAbsoluteUrl(path: string, baseUrl: string) {
  return new URL(path, baseUrl).href;
}

export function getOgLocale(locale: Language) {
  return OG_LOCALE_MAP[locale];
}

export function getOgAlternateLocales(locale: Language) {
  return dictionaryKeys
    .filter((lang) => lang !== locale)
    .map((lang) => OG_LOCALE_MAP[lang]);
}

export function getLanguageTag(locale: Language) {
  return LANGUAGE_TAG_MAP[locale];
}

export function getLatestContentDateIso(locale?: Language) {
  const dates = posts
    .filter((post) => !post.draft && (!locale || post.lang === locale))
    .map((post) => post.updated || post.date);

  return latestDateToIso(dates);
}

export function getCategoryLastmodIso(locale: Language, categorySlug: string) {
  const dates = posts
    .filter(
      (post) =>
        !post.draft &&
        post.lang === locale &&
        post.categories.includes(categorySlug)
    )
    .map((post) => post.updated || post.date);

  if (dates.length > 0) {
    return latestDateToIso(dates);
  }

  return getLatestContentDateIso(defaultLanguage);
}
