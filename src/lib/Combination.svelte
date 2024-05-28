<script lang="ts">

    import { onMount } from 'svelte';

    export let url;
    let resultCell: HTMLElement;

    async function checkWhois(url:string) {
        let params:string = new URLSearchParams({addr: url}).toString();
        let apiUrl = `https://scraper.run/whois?${params}`;
        let response = await fetch(apiUrl);
        let content: string;
        let tagName: string;
        if (response.ok) {
            let data = await response.json();
            content = ("domain" in data) ? "registered" : "free";
            tagName = ("domain" in data) ? "s" : "strong";
        } else {
            content = "failed to check";
            tagName = "s";
        }
        let result = document.createElement(tagName);
        result.innerText = content;
        resultCell.setAttribute("aria-busy", "false");
        resultCell.replaceChildren(result);
    }

    onMount(() => {
        checkWhois(url)
	});
</script>

<tr>
    <th scope="row">{ url }</th>
    <td aria-busy="true" bind:this={ resultCell } >Checking...</td>
</tr>