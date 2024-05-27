
import { getSynsets } from '$lib/db';
import type { SynsetRow, Synsets } from '$lib/db';
import type { ServerLoadEvent } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load(event: ServerLoadEvent) {
    let search: URLSearchParams = event.url.searchParams as URLSearchParams;
    let keywords: Array<string> = search.getAll("keyword");
    // todo validate dupes, empty etc
    let synsets: Synsets = await getSynsets(keywords);
    // todo check if all keywords found, redirect back
    return {
        keywords: keywords,
        synsets: synsets
    }
}