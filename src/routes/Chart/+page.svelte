<script>
  import { onMount } from "svelte";
  import { countries } from "../../store/countryDataStore";
  import CountryTable from "../../components/chart/CountryTable.svelte";
  import PolarAreaChart from "../../components/chart/PolarAreaChart.svelte";

  async function fetchCountries() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      countries.set(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  onMount(() => {
    fetchCountries();
  });
</script>

<section class="main-page chart-page">
  <div class="container mx-auto">
    <div
      class="grid grid-cols-12 md:grid-rows-3 grid-rows-2 grid-flow-col pt-5"
    >
      <div
        class="md:col-start-1 md:col-span-7 md:row-start-1 row-start-2 col-start-1 col-span-full"
      >
        <div class="mx-2">
          <CountryTable countryData={countries} />
        </div>
      </div>
      <div
        class="md:col-start-8 md:col-span-5 col-start-1 md:row-start-1 row-start-1 col-span-full"
      >
        <div class="mx-2">
          <PolarAreaChart chartData={countries} />
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .chart-page .grid {
    max-height: calc(100vh - 5em);
  }
</style>
