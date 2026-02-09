import 'server-only';

const dictionaries = {
  en: () => import('@/lang/en.json').then((m) => m.default),
  nl: () => import('@/lang/nl.json').then((m) => m.default),
  pt: () => import('@/lang/pt.json').then((m) => m.default),
} as const;

export type Locale = keyof typeof dictionaries;

/** Locales suportados na URL (proxy): en, nl, pt. */
export const urlLocales = ['en', 'nl', 'pt'] as const;
export type UrlLocale = (typeof urlLocales)[number];

export function hasLocale(lang: string): lang is UrlLocale {
  return urlLocales.includes(lang as UrlLocale);
}

export async function getDictionary(urlLang: UrlLocale) {
  return dictionaries[urlLang]();
}
