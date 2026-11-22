// Hämtar och renderar Markdown för webbplatsens fasta sidor.
import { getEntry, render } from 'astro:content';


// Avbryt bygget med ett tydligt fel om en fast sida saknar innehåll.
export async function loadPage(id: 'start' | 'system' | 'om' | 'kontakt') {
   const entry = await getEntry('pages', id);
   if (!entry) {
      throw new Error(`Sidan ${id} saknar en Markdown-fil i src/content/pages.`);
   }
   const { Content } = await render(entry);
   return { ...entry.data, Content };
}
