// Anger visningsordning och svenska statusnamn för systemöversikten.
import type { CollectionEntry } from 'astro:content';

export const systemStatuses = {
   fardig: { label: 'Färdiga system', empty: 'Inga färdiga system visas här just nu.' },
   utveckling: { label: 'Pågående utveckling', empty: 'Inga system under utveckling visas här just nu.' },
   ide: { label: 'Framtida idéer', empty: 'Inga framtida idéer visas här just nu.' },
} satisfies Record<CollectionEntry<'systems'>['data']['status'], { label: string; empty: string }>;
