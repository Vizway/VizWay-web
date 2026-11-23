// Bygger båda språken statiskt på VizWays publika adresser.
import { defineConfig } from 'astro/config';

export default defineConfig({
   site: 'https://vizway.se/',
   trailingSlash: 'always',
   i18n: {
      defaultLocale: 'sv',
      locales: ['sv', 'en'],
      routing: {
         prefixDefaultLocale: false,
         redirectToDefaultLocale: false,
      },
   },
});
