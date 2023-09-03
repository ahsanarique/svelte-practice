import { writable } from "svelte/store";

export const countries = writable([]);
export const tenMostPopulated = writable([]);

export async function fetchCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const sortedByPopulation = data.sort((a, b) => b.population - a.population);
    countries.set(data);
    tenMostPopulated.set(sortedByPopulation.slice(0, 10));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
