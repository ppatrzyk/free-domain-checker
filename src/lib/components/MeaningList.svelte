<script lang="ts">

    import { onMount } from 'svelte';
    import Meaning from "./Meaning.svelte";
    import type { Synsets, SynsetRow } from '$lib/db';
    export let keywords: Array<string>;
    export let synsets: Synsets;

    let fieldSet: HTMLElement;

    onMount(() => {
        keywords.forEach(keyword => {
            let keywordSynsets: Array<SynsetRow> = synsets[keyword];
            let props = {keyword: keyword, keywordSynsets: keywordSynsets}
            let _meaning: Meaning = new Meaning({target: fieldSet, props: props});
        });
	});

</script>

<form action="/combinations">
    <fieldset id="field-set" bind:this={ fieldSet }>
        
    </fieldset>

    <input type="submit" value="Proceed"/>
</form>