<script>
  import { onMount, onDestroy } from "svelte";
  import {
    countries,
    tenMostPopulated,
    fetchCountries,
  } from "../../store/countryDataStore";
  import CountryTable from "./CountryTable.svelte";
  import PolarAreaChart from "./PolarAreaChart.svelte";

  let chartData;

  const unsubscribe = tenMostPopulated.subscribe(value => {
    chartData = value
  });

  onMount(() => {
    fetchCountries();
  });

  onDestroy(() => {
    unsubscribe();
  });
</script>

<section class="main-page chart-page">
  <div class="grid grid-cols-12 grid-rows-3 grid-flow-col gap-4 pt-5">
    <div
      class="md:col-start-2 md:col-span-7 md:row-start-1 row-start-3 col-start-1 col-span-full"
    >
      <CountryTable countryData={countries} />
    </div>
    <div
      class="md:col-start-9 md:col-span-4 col-start-1 md:row-start-1 row-start-1 col-span-full"
    >
      <PolarAreaChart {chartData} />
    </div>
  </div>
</section>

<style>
  .chart-page .grid {
    max-height: calc(100vh - 5em);
  }
</style>
