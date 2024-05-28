<script lang="ts">
    import CombinationList from "$lib/CombinationList.svelte";

    /** @type {import('./$types').PageData} */
	export let data;

</script>

<h1>Step 3: domain possibilities</h1>
<CombinationList synsetids={ data.synsetids } terms={ data.terms } />
