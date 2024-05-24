
import type { ServerLoadEvent } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load(event: ServerLoadEvent) {
    // console.log(event);
    let search: URLSearchParams = event.url.searchParams as URLSearchParams;
    let keywords: Array<string> = search.getAll("keyword");
    // todo remove duplicates or validate earlier?
    let keywordDefs: Record<string, Array<string>> = {};
    // todo query db here
    keywords.forEach(keyword => {
        keywordDefs[ keyword ] = ["meaning1", "meaning2"];
    })
    return {
        keywordDefs: keywordDefs
    }
}