<script lang="ts">

    import { onMount } from 'svelte';
    import Combination from './Combination.svelte';
    import type { Terms, TermRow } from './db';
    export let terms: Terms;
    export let synsetids: Array<number>;

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
        // todo how to maintain ordering
        let combineParam: Array<Array<string>> = [];
        synsetids.forEach(synsetid => {
            let termrows: Array<TermRow> = terms[synsetid];
            let currentTerms = termrows.map(r => r.lemma.replace(/(\s|\.)/g, ''));
            combineParam.push(currentTerms);
        })
        // todo tld extensions to choose in ui
        combineParam.push([".com", ]);
        let combinations: Array<string> = combine(combineParam);
        combinations.sort((a, b) => {
            return (a.length - b.length)
        }).forEach(url => {
            let props = {url: url};
            let _combination: Combination = new Combination({target: combinationsUl, props: props});
        })
	});

</script>

<ul id="combinations">

</ul>