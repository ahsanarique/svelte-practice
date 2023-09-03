<script>
  export let countryData;
</script>

<div class="p-2 country-table bg-white">
  {#if $countryData.length > 0}
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
        {#each $countryData as country (country.name.common)}
          <tr>
            <td>
              <figure class="flag-image">
                <img src={country.flags.png} alt={country.name.common} />
              </figure>
            </td>
            <td>{country.name.common}</td>
            <td>{country.cioc || "-"}</td>
            <td>{country.status || "-"}</td>
            <td> Currencies </td>
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

<style>
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
