<script>
  import MountainSticker from "./MountainSticker.svelte";
</script>

<section class="main-page layout-page">
  <div class="grid md:grid-cols-12 grid-rows-6 grid-cols-4 grid-flow-col">
    <div class="md:col-span-2 row-span-3 col-span-4 bg-blue-400"></div>
    <div class="md:col-start-3 md:col-span-4 md:row-span-5 row-span-3 col-start-1 col-span-4 bg-rose-100"></div>
    <div class="md:col-span-2 row-span-2 col-span-4 bg-teal-400"></div>
    <div class="md:col-span-6 row-span-1 col-span-4 bg-fuchsia-400"></div>
    <div class="md:col-start-7 md:col-span-6 row-span-2 col-start-1 col-span-4 bg-cyan-400"></div>
    <div class="md:col-start-7 md:col-span-4 md:row-span-4 md:row-start-3 row-start-4 row-span-3 col-start-1 col-span-4 bg-yellow-100">
      <MountainSticker />
    </div>
    <div class="md:col-start-11 md:col-span-2 row-span-4 col-start-1 col-span-4 bg-emerald-400"></div>
  </div>
</section>
