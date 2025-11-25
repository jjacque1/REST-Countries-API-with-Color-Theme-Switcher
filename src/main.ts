import { fetchCountries } from "./services/apiService.js";
import type { Country } from "./models/Country";

const container = document.getElementById("container")!;
const regionFilter = document.getElementById(
  "region-filter"
) as HTMLSelectElement;
const searchInput = document.getElementById("search-input") as HTMLInputElement;

let allCountries: Country[] = [];

function createCountryCard(country: Country): HTMLElement {
  const card = document.createElement("div");

  card.className = "country-card";

  card.innerHTML = `<img src="${country.flags.png}" alt="${
    country.flags.alt || country.name.common
  } flag">
    <div class="card-body">
      <h2>${country.name.common}</h2>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Capital:</strong> ${country.capital?.[0] ?? "N/A"}</p>
    </div>`;

  return card;
}

function renderList(countries: Country[]): void {
  container.innerHTML = "";

  countries.forEach((country) => {
    const card = createCountryCard(country);
    container.appendChild(card);
  });
}

function filterBySearch(countries: Country[], searchValue: string): Country[] {
  const term = searchValue.toLowerCase().trim();

  if (!term) return countries;

  return countries.filter((country) =>
    country.name.common.toLowerCase().includes(term)
  );
}

function filterByRegion(countries: Country[], regionValue: string): Country[] {
  if (!regionValue) return countries;

  return countries.filter((country) => country.region === regionValue);
}

function applyFilters(): void {
  let filtered = [...allCountries];

  filtered = filterBySearch(filtered, searchInput.value);
  filtered = filterByRegion(filtered, regionFilter.value);

  renderList(filtered);
}

async function renderCountries() {
  allCountries = await fetchCountries();

  renderList(allCountries);

  searchInput.addEventListener("input", applyFilters);
  regionFilter.addEventListener("change", applyFilters);
}

renderCountries();
