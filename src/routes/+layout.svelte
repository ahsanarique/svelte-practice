<script>
  import "../app.css";
</script>

<header>
  <nav class="p-3 bg-teal-300 text-center">
    <a href="/" class="px-2 font-bold hover:underline">Layout</a>
    <a href="/Chart" class="px-2 font-bold hover:underline">Chart</a>
    <a href="/Map" class="px-2 font-bold hover:underline">Map</a>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>
  <h6 class="p-3 bg-yellow-300 text-center">Footer</h6>
</footer>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
