// Hämtar lokaliserad Markdown och kopplar systemöversättningar till ursprungsposterna.
import { getCollection, getEntry, render } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Locale } from './i18n';

export interface LocalizedSystem {
   id: string;
   data: CollectionEntry<'systems'>['data'];
   entry: CollectionEntry<'systems' | 'systemsEn'>;
}

// Avbryt bygget med ett tydligt fel om en fast sida saknar innehåll.
export async function loadPage(id: 'start' | 'system' | 'om' | 'kontakt', locale: Locale) {
   const collection = locale === 'en' ? 'pagesEn' : 'pages';
   const entry = await getEntry(collection, id);
   if (!entry) {
      throw new Error(`Sidan ${id} saknar en Markdown-fil för språket ${locale}.`);
   }
   const { Content } = await render(entry);
   return { ...entry.data, Content };
}


// Lokaliserar systemtexter med samma identifierare, status, kategori och ordning.
export async function loadSystems(locale: Locale): Promise<LocalizedSystem[]> {
   const originals = await getCollection('systems');
   if (locale === 'sv') {
      return originals.map(entry => ({ id: entry.id, data: entry.data, entry }));
   }

   const translations = new Map((await getCollection('systemsEn')).map(entry => [entry.id, entry]));
   const projects = originals.map(({ id, data }) => {
      const entry = translations.get(id);
      if (!entry) {
         throw new Error(`Systemet ${id} saknar en engelsk fil i src/content/en/systems.`);
      }
      translations.delete(id);
      return { id, entry, data: { ...data, ...entry.data, flow: entry.data.flow } };
   });
   if (translations.size) {
      throw new Error(`Svenska systemposter saknas för ${[...translations.keys()].join(', ')}.`);
   }
   return projects;
}


// Bygger detaljsidor med samma systemidentifierare för båda språken.
export async function getSystemPaths(locale: Locale) {
   return (await loadSystems(locale)).map(project => ({
      params: { id: project.id },
      props: { project },
   }));
}
