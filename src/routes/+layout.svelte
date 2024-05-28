<script lang="ts">
    // import {  } from "";
    import "@picocss/pico";
</script>

<style>
    #main {
        max-width: 1024px;
    }
</style>

<main id="main" class="container">
    <nav>
        <ul>
            <li><strong><a href="/">Home</a></strong></li>
        </ul>
    </nav>
    <slot></slot>
</main>
