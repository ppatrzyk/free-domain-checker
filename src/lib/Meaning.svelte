<script lang="ts">
    import type { SynsetRow } from "./db";

    export let keyword: string;
    export let keywordSynsets: Array<SynsetRow>;

</script>

<label for={ keyword }>
    { keyword }
    <select name={ keyword } aria-label="Select desired meaning" required>
        <option selected disabled value="">
            Select desired meaning
        </option>
        {#each keywordSynsets as synset}
        <option value={ synset.synsetid }>{ synset.definition }</option>
        {/each}
    </select>
</label>
