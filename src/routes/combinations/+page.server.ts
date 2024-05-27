
import { getTerms, type Terms } from '$lib/db';
import type { ServerLoadEvent } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load(event: ServerLoadEvent) {
    // console.log(event);
    let search: URLSearchParams = event.url.searchParams as URLSearchParams;
    let synsetids: Array<number> = [];
    for (let [_keyword, synsetid] of search.entries()) {
        synsetids.push(Number(synsetid))
    }
    let terms: Terms = await getTerms(synsetids);
    return {
        terms: terms
    }
}