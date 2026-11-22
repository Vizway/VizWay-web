// Validerar sidinnehåll, systemsidor och webbplatsens identitet vid bygget.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pageMetadata = z.object({
   title: z.string().min(1),
   description: z.string().min(1),
   email: z.email().optional(),
});

const pages = defineCollection({
   loader: glob({ base: './src/content/pages', pattern: '*.md' }),
   schema: pageMetadata.extend({
      heroAccent: z.string().min(1).optional(),
   }),
});

const systems = defineCollection({
   loader: glob({ base: './src/content/systems', pattern: '*.md' }),
   schema: pageMetadata.pick({ title: true, description: true }).extend({
      status: z.enum(['fardig', 'utveckling', 'ide']),
      example: z.boolean().default(false),
   }),
});

const site = defineCollection({
   loader: glob({ base: './src/content/site', pattern: 'identitet.yaml' }),
   schema: z.object({
      name: z.string().min(1),
      slogan: z.string().min(1),
   }),
});

export const collections = { pages, systems, site };
