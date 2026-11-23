// Hämtar gränssnittstexter och tar fram motsvarande adress för varje språk.
import { getEntry } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { getRelativeLocaleUrl } from 'astro:i18n';

export const languages = [
   { locale: 'sv', name: 'Svenska' },
   { locale: 'en', name: 'English' },
] as const;
export type Locale = (typeof languages)[number]['locale'];
export type Ui = CollectionEntry<'ui'>['data'];


// Ger en sida rätt språkprefix med samma sökväg på båda språken.
export function localizePath(locale: Locale, pathname: string) {
   return getRelativeLocaleUrl(locale, pathname.replace(/^\/en(?=\/|$)/, ''));
}


// Använder samma språkpar för språkval och länkar i sidans metadata.
export function getLanguageLinks(pathname: string) {
   return languages.map(({ locale, name }) => ({ locale, name, href: localizePath(locale, pathname) }));
}


// Stoppar bygget om ett språks gränssnittstexter saknas.
export async function loadUi(locale: Locale): Promise<Ui> {
   const entry = await getEntry('ui', locale);
   if (!entry) {
      throw new Error(`Gränssnittstexterna i src/content/ui/${locale}.yaml saknas.`);
   }
   return entry.data;
}
