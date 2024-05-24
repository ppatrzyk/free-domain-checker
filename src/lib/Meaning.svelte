<script lang="ts">
    export let keyword;
    export let meanings;
</script>

<label for={ keyword }>
    { keyword }
    <select name={ keyword } aria-label="Select desired meaning" required>
        <option selected disabled value="">
            Select desired meaning
        </option>
        {#each meanings as meaning}
        <option value={ meaning }>{ meaning }</option>
        {/each}
    </select>
</label>
