<script>
  import "../app.css";
</script>

<header>
    <nav class="p-3 bg-teal-300">
        <a href="/">Layout</a>
        <a href="/Chart">Chart</a>
        <a href="/Map">Map</a>
    </nav>
</header>

<main>
    <slot />
</main>


<footer>
    <h6 class="p-3 bg-yellow-300">Footer</h6>
</footer>