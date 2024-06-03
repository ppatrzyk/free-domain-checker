<script lang="ts">
    import Keyword from "./Keyword.svelte";

    let fieldSet: HTMLElement;

    function addKeyword(): void {
        let _keyword: Keyword = new Keyword({target: fieldSet});
    }

</script>

<style>
    .keyword {
        width: 100%;
    }
</style>

<form action="/meanings">
    <fieldset id="field-set" bind:this={ fieldSet }>
        <Keyword/>
    </fieldset>

    <div class="grid">
        <div>
            <button class="keyword secondary" on:click={ addKeyword }>Add keyword</button>
        </div>
        <div>
            <button class="keyword primary" type="submit" value="Proceed">Proceed</button>
        </div>
    </div>
</form>
