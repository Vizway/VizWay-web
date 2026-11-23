// Samlar webbplatsens huvudlänkar för sidhuvud och sidfot.
import { localizePath } from './i18n';
import type { Locale, Ui } from './i18n';

export const sitePaths = {
   home: '/',
   system: '/system/',
   about: '/om/',
   contact: '/kontakt/',
} as const;

const navigation = [
   'home',
   'system',
   'about',
   'contact',
] as const;


// Hämtar länktexter och adresser i samma ordning i båda menyerna.
export function getSiteLinks(locale: Locale, labels: Ui['navigation']) {
   return navigation.map(key => ({ href: localizePath(locale, sitePaths[key]), label: labels[key], key }));
}
