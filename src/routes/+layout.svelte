<script lang="ts">
    // import {  } from "";
    import "@picocss/pico";
</script>

<style>
    #main {
        max-width: 1024px;
    }
</style>

<svelte:head>
	<title>Free domain checker</title>
</svelte:head>

<main id="main" class="container">
    <nav>
        <ul>
            <li><strong><a href="/">Free domain checker</a></strong></li>
        </ul>
    </nav>
    <slot></slot>
</main>
