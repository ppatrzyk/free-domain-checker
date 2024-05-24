<script lang="ts">

    import { onMount } from 'svelte';
    import Meaning from "./Meaning.svelte";
    export let keywordDefs: Record<string, Array<string>>;

    onMount(() => {
        let fieldSet: HTMLElement = document.getElementById("field-set") as HTMLElement;
        Object.entries(keywordDefs).forEach(([keyword, meanings]) => {
            let props = {keyword: keyword, meanings: meanings}
            let _meaning: Meaning = new Meaning({target: fieldSet, props: props});
        });
	});

</script>

<form action="/combinations">
    <fieldset id="field-set">
        
    </fieldset>

    <input type="submit" value="Proceed"/>
</form>