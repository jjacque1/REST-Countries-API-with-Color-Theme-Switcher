import { fetchCountries } from "./services/apiService.js";
const container = document.getElementById("container");
const regionFilter = document.getElementById("region-filter");
const searchInput = document.getElementById("search-input");
let allCountries = [];
//======================CARD CREATION=====================================
function createCountryCard(country) {
    const card = document.createElement("div");
    card.className = "country-card";
    card.innerHTML = `<img src="${country.flags.png}" alt="${country.flags.alt || country.name.common} flag">
    <div class="card-body">
      <h2>${country.name.common}</h2>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Capital:</strong> ${country.capital?.[0] ?? "N/A"}</p>
    </div>`;
    return card;
}
//===============RENDERING LIST==================
function renderList(countries) {
    container.innerHTML = "";
    countries.forEach((country) => {
        const card = createCountryCard(country);
        container.appendChild(card);
    });
}
//================SEARCH FILTER BY NAME===============
function filterBySearch(countries, searchValue) {
    const term = searchValue.toLowerCase().trim();
    if (!term)
        return countries;
    return countries.filter((country) => country.name.common.toLowerCase().includes(term));
}
//=====================REGION FILTER==========================
function filterByRegion(countries, regionValue) {
    if (!regionValue)
        return countries;
    return countries.filter((country) => country.region === regionValue);
}
//======================COMBINING BOTH=================================
function applyFilters() {
    let filtered = [...allCountries];
    filtered = filterBySearch(filtered, searchInput.value);
    filtered = filterByRegion(filtered, regionFilter.value);
    renderList(filtered);
}
//=========================WIRING EVERYTHING=============================
async function renderCountries() {
    allCountries = await fetchCountries();
    renderList(allCountries);
    searchInput.addEventListener("input", applyFilters);
    regionFilter.addEventListener("change", applyFilters);
}
renderCountries();
//# sourceMappingURL=main.js.map