<script lang="ts">

    import { onMount } from 'svelte';
    import Combination from './Combination.svelte';
    import type { Terms, TermRow } from './db';
    export let terms: Terms;

    // https://stackoverflow.com/a/57015870
    function combine([head, ...[headTail, ...tailTail]]) {
        if (!headTail) return head
        let combined = headTail.reduce((acc, x) => {
            return acc.concat(head.map(h => `${h}${x}`))
        }, [])
        return combine([combined, ...tailTail])
    }

    onMount(() => {
        let combinationsUl: HTMLElement = document.getElementById("combinations") as HTMLElement;
        console.log(terms)
        // todo how to maintain ordering
        let combineParam: Array<Array<string>> = [];
        Object.entries(terms).forEach(([_synsetid, termrows]) => {
            // todo dots remove
            // return c.replace(/\s/g, '')
            let currentTerms = termrows.map(r => r.lemma);
            combineParam.push(currentTerms);
        });
        // todo tld extensions
        combineParam.push([".com", ]);
        let combinations: Array<string> = combine(combineParam);
        combinations.forEach(url => {
            let props = {url: url};
            let _combination: Combination = new Combination({target: combinationsUl, props: props});
        })
	});

</script>

<ul id="combinations">

</ul>