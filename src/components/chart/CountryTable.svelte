<script>
  export let countryData;
</script>

<div class="country-table bg-white">
  {#if $countryData.length > 0}
    <table>
      <thead class="sticky top-0 bg-slate-200">
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
            <td>
              {country.currencies
                ? Object.values(country.currencies)
                    .map(({ name }) => name)
                    .join(", ")
                : "-"}
            </td>
            <td>{country.population.toLocaleString() || "-"}</td>
            <td
              >{country.languages
                ? Object.values(country.languages).join(", ")
                : "-"}
            </td>
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
    --slate-50: #f8fafc;
    --slate-300: #cbd5e1;

    max-height: calc(100vh - 5em);
    max-width: 100%;
    overflow: auto;
  }

  .country-table table {
    width: 100%;
    min-width: 720px;
  }

  .country-table table tr {
    border-bottom: 1px solid var(--slate-300);
  }

  .country-table table th,
  .country-table table td {
    text-align: center;
    width: 10em;
    padding: 0.4em;
  }

  .country-table tbody tr:nth-child(even) {
    background: var(--slate-50);
  }

  .flag-image {
    max-width: 100%;
    display: flex;
  }

  .flag-image img {
    max-width: 5em;
    object-fit: contain;
    margin: auto;
  }
</style>
