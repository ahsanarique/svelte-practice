<script>
  import { afterUpdate, onDestroy, beforeUpdate } from "svelte";
  import { Chart } from "chart.js/auto";
  import { countries } from "../../store/countryDataStore";

  let polarChartData = [];

  let polarAreaChart;

  const unsubscribe = countries.subscribe((value) => {
    const sortedByPopulation = value.sort(
      (a, b) => b.population - a.population
    );

    polarChartData = sortedByPopulation.slice(0, 10);
  });

  const updateCanvas = () => {
    const ctx = document.getElementById("polar-area-chart")
      ? document.getElementById("polar-area-chart").getContext("2d")
      : "";

    if (polarChartData.length > 0 && ctx) {
      polarAreaChart = new Chart(ctx, {
        type: "polarArea",

        data: {
          labels: polarChartData.map((country) => country.name.common),
          datasets: [
            {
              data: polarChartData.map((country) => country.population),
              backgroundColor: [
                "#5eead4",
                "#67e8f9",
                "#93c5fd",
                "#a5b4fc",
                "#c4b5fd",
                "#f0abfc",
                "#f9a8d4",
                "#fda4af",
                "#fdba74",
                "#fca5a5",
              ],
            },
          ],
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  };

  beforeUpdate(() => {
    if(polarAreaChart) {
      polarAreaChart.destroy();
    }
  })

  afterUpdate(() => {
    updateCanvas();
  });

  onDestroy(unsubscribe);

  onDestroy(() => {
    if (polarAreaChart) {
      polarAreaChart.destroy()
    }
  })
</script>

<div class="p-2 country-chart bg-white">
  {#if polarChartData.length > 0}
    <canvas id="polar-area-chart" width="400" height="400" />
  {/if}
</div>
