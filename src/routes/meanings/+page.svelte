<script lang="ts">
    
    import MeaningList from "$lib/MeaningList.svelte";

    /** @type {import('./$types').PageData} */
	export let data;

</script>

<h1>Step 2: choose meaning</h1>
<MeaningList synsets={ data.synsets } />
