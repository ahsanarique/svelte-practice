<script>
  import { onMount, onDestroy, afterUpdate } from "svelte";
  import Map from "ol/Map";
  import View from "ol/View";
  import TileLayer from "ol/layer/Tile";
  import OSM from "ol/source/OSM";

  let map;
  
  function initializeMap() {
    const baseLayer = new TileLayer({
      source: new OSM(),
    });

    map = new Map({
      target: "map-container",
      layers: [baseLayer],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }

  onMount(() => {
    initializeMap();

    return () => initializeMap();
  });

</script>

<section class="main-page map-page">
  <div id="map-container" />
</section>

<style>
  .map-page {
    height: calc(100vh - 48px);
  }
  #map-container {
    width: 100%;
    height: 100%;
  }
</style>
