import { writable } from "svelte/store";

export const countries = writable([]);

export async function fetchCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    countries.set(data);
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
