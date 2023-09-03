<script>
  import { onMount, onDestroy } from "svelte";
  import { Chart } from "chart.js/auto";

  export let chartData;
  let polarChartData = [];
  let ctx;
  let chartCanvas;

  const unsubscribe = chartData.subscribe((value) => {
    const sortedByPopulation = value.sort(
      (a, b) => b.population - a.population
    );

    polarChartData = sortedByPopulation.slice(0, 10);
  });

  const updateCanvas = () => {
    ctx = chartCanvas.getContext("2d");

    let polarAreaChart = new Chart(ctx, {
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
  };

  onMount(() => {
    updateCanvas();
  });

  onDestroy(unsubscribe);
</script>

<div class="p-2 country-chart bg-white">
  <canvas bind:this={chartCanvas} width="400" height="400" />
</div>
