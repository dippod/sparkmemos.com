import "server-only";

const dictionaries = {
  en: () => import("./en.ts").then((module) => module.default),
  zh: () => import("./zh.ts").then((module) => module.default),
  ja: () => import("./ja.ts").then((module) => module.default),
  de: () => import("./de.ts").then((module) => module.default),
  es: () => import("./es.ts").then((module) => module.default),
  fr: () => import("./fr.ts").then((module) => module.default),
  it: () => import("./it.ts").then((module) => module.default),
  ko: () => import("./ko.ts").then((module) => module.default),
};

export const languageLabels = {
  en: "English",
  zh: "中文",
  ja: "日本語",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  ko: "한국어",
};

export type Language = keyof typeof languageLabels;

export const dictionaryKeys = Object.keys(dictionaries) as Language[];
export const defaultLanguage: Language = "en";

export function isLanguage(locale: string): locale is Language {
  return locale in dictionaries;
}

export async function getDictionary(locale = "en") {
  if (!(locale in dictionaries)) {
    throw new Error(`Dictionary for locale '${locale}' not found.`);
  }

  return dictionaries[locale as keyof typeof dictionaries]();
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
