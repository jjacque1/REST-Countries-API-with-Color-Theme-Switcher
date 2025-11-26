import { fetchCountries } from "./services/apiService.js";
import type { Country } from "./models/Country";

const container = document.getElementById("container")!;
const regionFilter = document.getElementById("region-filter")!;
const searchInput = document.getElementById("search-input")!;

let allCountries: Country[] = []; // Stores the full list of countries from the API so it can be reuse for filtering.

//======================CARD CREATION=====================================

/**
 * Function Creates a single country card element.
 * Takes a Country object and returns a <div> element containing the country's info.
 */

function createCountryCard(country: Country): HTMLElement {
  const card = document.createElement("div"); // Create a new <div>

  card.className = "country-card"; // Add the CSS class for styling

  // Build the inner HTML for the card using template literals.
  // Includes: flag image, country name, population, region, and capital.
  card.innerHTML = `
    <div class="card-body">
    <img src="${country.flags.png}" alt="${
    country.flags.alt || country.name.common
  } flag">
      <h2>${country.name.common}</h2>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Capital:</strong> ${country.capital?.[0] ?? "N/A"}</p>
    </div>`;

  return card; // Return the finished card so it can be added to the DOM
}

//===============RENDERING LIST==================

/**
 * Renders a list of Country objects into the container.
 * Clears previous results and appends new cards.
 */

function renderList(countries: Country[]): void {
  container.innerHTML = ""; // Clear all existing country cards

  // Loop through each country and append a new card element to the container
  countries.forEach((country) => {
    const card = createCountryCard(country); // Build card
    container.appendChild(card); // Add to page
  });
}

//================SEARCH FILTER BY NAME===============

/**
 * Filters the country list by the search input.
 * Returns only countries whose names include the typed search value.
 */

function filterBySearch(countries: Country[], searchValue: string): Country[] {
  const term = searchValue.toLowerCase().trim(); // Normalize search text

  if (!term) return countries; // If search box is empty → return full list

  // Keep only countries whose names include the search term
  return countries.filter((country) =>
    country.name.common.toLowerCase().includes(term)
  );
}

//=====================REGION FILTER==========================

/**
 * Filters countries by the selected region.
 * If no region selected, returns the full array.
 */

function filterByRegion(countries: Country[], regionValue: string): Country[] {
  if (!regionValue) return countries; // No region selected → return all

  // Keep only countries with matching region value
  return countries.filter((country) => country.region === regionValue);
}

//======================COMBINING BOTH=================================

/**
 * Runs the search filter AND region filter together.
 * Always starts from the full original dataset (allCountries).
 */

function applyFilters(): void {
  let filtered = [...allCountries]; // Start with the full list

  filtered = filterBySearch(filtered, searchInput.value); // Apply search filter based on text input
  filtered = filterByRegion(filtered, regionFilter.value); // Apply region filter based on dropdown selection

  renderList(filtered); // Re-render the filtered results to the page
}

//=========================WIRING EVERYTHING=============================

/**
 * Fetches countries on page load, renders them, and wires the filter events.
 */

async function renderCountries() {
  allCountries = await fetchCountries(); // Fetch from API and save full list

  renderList(allCountries); // Display all countries on initial page load

  searchInput.addEventListener("input", applyFilters); // Whenever the user types, update results
  regionFilter.addEventListener("change", applyFilters); // Whenever the region dropdown changes, update results
}

renderCountries(); // Start the entire application
