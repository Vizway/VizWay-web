// Validerar sidinnehåll, systemsidor och webbplatsens identitet vid bygget.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const textMetadata = z.object({
   title: z.string().min(1),
   description: z.string().min(1),
});

const pageMetadata = textMetadata.extend({
   heroAccent: z.string().min(1).optional(),
   signature: z.string().min(1).optional(),
});

const systemText = textMetadata.extend({
   flow: z.array(z.string().min(1)).min(2).optional(),
});

const pages = defineCollection({
   loader: glob({ base: './src/content/pages', pattern: '*.md' }),
   schema: pageMetadata.extend({ email: z.email().optional() }),
});

const pagesEn = defineCollection({
   loader: glob({ base: './src/content/en/pages', pattern: '*.md' }),
   schema: pageMetadata,
});

const systems = defineCollection({
   loader: glob({ base: './src/content/systems', pattern: '*.md' }),
   schema: systemText.extend({
      status: z.enum(['fardig', 'utveckling', 'ide']),
      category: z.enum(['tillampningar', 'teknik']).default('tillampningar'),
      order: z.number().int().nonnegative().default(100),
      example: z.boolean().default(false),
   }),
});

const systemsEn = defineCollection({
   loader: glob({ base: './src/content/en/systems', pattern: '*.md' }),
   schema: systemText,
});

const label = z.string().min(1);
const ui = defineCollection({
   loader: glob({ base: './src/content/ui', pattern: '{sv,en}.yaml' }),
   schema: z.object({
      language: label,
      skip: label,
      mainNavigation: label,
      sitemap: label,
      homeLink: label,
      darkTheme: label,
      explore: label,
      email: label,
      contactPending: label,
      systemKicker: label,
      allSystems: label,
      readSystem: label,
      projectSteps: label,
      example: label,
      navigation: z.object({ home: label, system: label, about: label, contact: label }),
      categories: z.object({ tillampningar: label, teknik: label }),
      statuses: z.object({ fardig: label, utveckling: label, ide: label }),
   }),
});

const site = defineCollection({
   loader: glob({ base: './src/content/site', pattern: 'identitet.yaml' }),
   schema: z.object({
      name: z.string().min(1),
      slogan: z.string().min(1),
   }),
});

export const collections = { pages, pagesEn, systems, systemsEn, ui, site };
