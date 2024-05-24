
import type { ServerLoadEvent } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load(event: ServerLoadEvent) {
    // console.log(event);
    let search: URLSearchParams = event.url.searchParams as URLSearchParams;
    let keywordSyns: Record<string, Array<string>> = {};
    for (let [keyword, meaning] of search.entries()) {
        // todo query db here for synonyms
        keywordSyns[keyword] = ["syn1", "syn2", "syn3"];
    }
    return {
        keywordSyns: keywordSyns
    }
}