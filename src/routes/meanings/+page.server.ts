
import { getSynsets } from '$lib/db';
import type { SynsetRow, Synsets } from '$lib/db';
import type { ServerLoadEvent } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load(event: ServerLoadEvent) {
    let search: URLSearchParams = event.url.searchParams as URLSearchParams;
    let keywords: Array<string> = search.getAll("keyword");
    if (keywords.length !== new Set(keywords).size) {
        throw error(400, `Duplicate keywords`);
    }
    let synsets: Synsets = await getSynsets(keywords);
    let returnedKeys: Array<string> = Object.keys(synsets);
    keywords.forEach(k => {
        if (!returnedKeys.includes(k)) {
            throw error(400, `${k} not found in database`);
        }
    })
    
    return {
        keywords: keywords,
        synsets: synsets
    }
}