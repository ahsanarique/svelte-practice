<script>
  import { onMount } from "svelte";
  import { Chart } from "chart.js/auto";

  export let chartData;
  let polarAreaChart;

  onMount(() => {
    console.log(chartData);

    const ctx = document.getElementById("population-chart").getContext("2d");

    polarAreaChart = new Chart(ctx, {
      type: "polarArea",

      data: {
        labels: chartData.map((country) => country.name.common),
        datasets: [
          {
            data: chartData.map((country) => country.population),
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              // Add more background colors as needed
            ],
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        // Add more chart options as needed
      },
    });
  });
</script>

<div class="p-2 country-chart bg-white">
  <canvas id="population-chart" width="400" height="400" />
</div>
