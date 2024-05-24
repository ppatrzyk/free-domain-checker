<script lang="ts">

    import { onMount } from 'svelte';
    import Combination from './Combination.svelte';
    export let keywordSyns: Record<string, Array<string>>;

    onMount(() => {
        let combinationsUl: HTMLElement = document.getElementById("combinations") as HTMLElement;
        Object.entries(keywordSyns).forEach(([keyword, synonyms]) => {
            // todo combinations between synonyms logic here
            synonyms.forEach(word => {
                let url:string = `${word}.com`;
                let props = {url: url};
                let _combination: Combination = new Combination({target: combinationsUl, props: props});
            })
        });
	});

</script>

<ul id="combinations">

</ul>