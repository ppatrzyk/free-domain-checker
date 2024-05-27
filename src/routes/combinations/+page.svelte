<script lang="ts">
    import CombinationList from "$lib/CombinationList.svelte";

    /** @type {import('./$types').PageData} */
	export let data;

</script>

<h1>Step 3: possibilities listing</h1>
<CombinationList terms={ data.terms } />
