// Anger de svenska statusnamnen för projektkort och systemsidor.
import type { CollectionEntry } from 'astro:content';

export const systemStatuses = {
   fardig: 'Färdigt',
   utveckling: 'Under utveckling',
   ide: 'Framtida idé',
} satisfies Record<CollectionEntry<'systems'>['data']['status'], string>;
