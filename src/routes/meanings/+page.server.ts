
import { getSynsets } from '$lib/db';
import type { SynsetRow, Synsets } from '$lib/db';
import type { ServerLoadEvent } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load(event: ServerLoadEvent) {
    // console.log(event);
    let search: URLSearchParams = event.url.searchParams as URLSearchParams;
    let keywords: Array<string> = search.getAll("keyword");
    let synsets: Synsets = await getSynsets(keywords);
    return {
        synsets: synsets
    }
}