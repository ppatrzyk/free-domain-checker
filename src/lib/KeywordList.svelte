<script lang="ts">
    import Keyword from "./Keyword.svelte";

    function addKeyword(): void {
        let fieldSet: HTMLElement = document.getElementById("field-set") as HTMLElement;
        let _keyword: Keyword = new Keyword({target: fieldSet});
    }

</script>

<button on:click={ addKeyword }>
    Add keyword
</button>

<form action="/meanings">
    <fieldset id="field-set">
        <Keyword/>
    </fieldset>

    <input type="submit" value="Proceed"/>

</form>
