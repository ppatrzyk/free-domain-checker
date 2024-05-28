<script lang="ts">

    let currentElement: HTMLElement;
    function destroy(): void {
        currentElement.remove();
    }

</script>

<fieldset role="group" bind:this={ currentElement }>
    <input name="keyword" placeholder="keyword" required minlength="1" />
    <button on:click={ destroy }>delete</button>
</fieldset>
