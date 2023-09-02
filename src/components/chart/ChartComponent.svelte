<script>
  import { onMount } from "svelte";
  import { countries, fetchCountries } from "../../store/countryDataStore";

  onMount(() => {
    fetchCountries();
  });
</script>

<section class="main-page chart-page">
  <div class="grid grid-cols-12 grid-rows-3 grid-flow-col gap-4 pt-5">
    <div
      class="md:col-start-2 md:col-span-7 md:row-start-1 row-start-3 col-start-1 col-span-full"
    >
      <div class="p-2 country-table bg-white">
        {#if $countries.length > 0}
          <table>
            <thead>
              <tr>
                <th>Flag</th>
                <th>Name</th>
                <th>CIOC</th>
                <th>UN Member Status</th>
                <th>Currencies</th>
                <th>Population</th>
                <th>Languages</th>
              </tr>
            </thead>
            <tbody>
              {#each $countries as country (country.name.common)}
                <tr>
                  <td>
                    <figure class="flag-image">
                      <img src={country.flags.png} alt={country.name.common} />
                    </figure>
                  </td>
                  <td>{country.name.common}</td>
                  <td>{country.cioc || "-"}</td>
                  <td>{country.status || "-"}</td>
                  <td>
                    Currencies
                  </td>
                  <td>{country.population.toLocaleString() || "-"}</td>
                  <td> Languages </td>
                </tr>
              {/each}
            </tbody>
          </table>
        {:else}
          <p>Loading...</p>
        {/if}
      </div>
    </div>
    <div
      class="md:col-start-9 md:col-span-4 col-start-1 md:row-start-1 row-start-1 col-span-full"
    >
      <div class="p-2 country-chart bg-white" />
    </div>
  </div>
</section>

<style>
  .chart-page .grid {
    max-height: calc(100vh - 5em);
  }
  .country-table {
    max-height: calc(100vh - 5em);
    max-width: 100%;
    overflow: auto;
  }

  .country-table table {
    width: 100%;
    min-width: 720px;
  }

  .country-table table tr {
    border-bottom: 1px solid black;
  }

  .country-table table th,
  .country-table table td {
    text-align: center;
    width: 10em;
    padding: 0.4em;
  }

  .flag-image {
    max-width: 5em;
  }

  .flag-image img {
    max-width: 100%;
    object-fit: contain;
  }
</style>
