import { fetchCountries } from "./services/apiService.js";
const container = document.getElementById("container");
const regionFilter = document.getElementById("region-filter");
const searchInput = document.getElementById("search-input");
const toggleBtn = document.getElementById("toggle-btn");
const modal = document.getElementById("country-modal");
const modalBody = document.getElementById("modal-body");
const modalCloseBtn = document.getElementById("modal-close");
let allCountries = []; // Stores the full list of countries from the API so it can be reuse for filtering.
//======================CARD CREATION=====================================
/**
 * Function Creates a single country card element.
 * Takes a Country object and returns a <div> element containing the country's info.
 */
function createCountryCard(country) {
    const card = document.createElement("div"); // Create a new <div>
    card.className = "country-card"; // Add the CSS class for styling
    // Build the inner HTML for the card using template literals.
    // Includes: flag image, country name, population, region, and capital.
    card.innerHTML = `
    <div class="card-body">
    <img src="${country.flags.png}" alt="${country.flags.alt || country.name.common} flag">
      <h2>${country.name.common}</h2>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Capital:</strong> ${country.capital?.[0] ?? "N/A"}</p>
    </div>`;
    //open modal when the card is clicked
    card.addEventListener("click", () => {
        openCountryModal(country);
    });
    return card; // Return the finished card so it can be added to the DOM
}
//===============RENDERING LIST==================
/**
 * Renders a list of Country objects into the container.
 * Clears previous results and appends new cards.
 */
function renderList(countries) {
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
function filterBySearch(countries, searchValue) {
    const term = searchValue.toLowerCase().trim(); // Normalize search text
    if (!term)
        return countries; // If search box is empty → return full list
    // Keep only countries whose names include the search term
    return countries.filter((country) => country.name.common.toLowerCase().includes(term));
}
//=====================REGION FILTER==========================
/**
 * Filters countries by the selected region.
 * If no region selected, returns the full array.
 */
function filterByRegion(countries, regionValue) {
    if (!regionValue)
        return countries; // No region selected → return all
    // Keep only countries with matching region value
    return countries.filter((country) => country.region === regionValue);
}
//======================THEME TOGGLE=================================
function setupThemeToggle() {
    if (!toggleBtn)
        return;
    toggleBtn.addEventListener("click", () => {
        // Toggle the "dark-mode" class on the <body>
        const isDark = document.body.classList.toggle("dark-mode");
        // Update button text + icon
        if (isDark) {
            toggleBtn.innerHTML = `<i class="fa-regular fa-sun"></i> Light Mode`;
        }
        else {
            toggleBtn.innerHTML = `<i class="fa-regular fa-moon"></i> Dark Mode`;
        }
    });
}
//========================MODAL OPEN================================
function openCountryModal(country) {
    // Convert languages object → comma-separated list
    const languageList = country.languages
        ? Object.values(country.languages).join(", ")
        : "N/A";
    // Convert currencies object → list of currency names
    const currencyList = country.currencies
        ? Object.values(country.currencies)
            .map((currencyDetails) => currencyDetails.name)
            .join(", ")
        : "N/A";
    // Borders array → comma-separated list
    const borderCountryCodes = country.borders?.length
        ? country.borders.join(", ")
        : "None";
    // Write modal content
    modalBody.innerHTML = `
    <div class="modal-flag">
      <img src="${country.flags.png}" alt="${country.flags.alt || country.name.common} flag" />
    </div>

    <div class="modal-info">
      <h2>${country.name.common}</h2>

      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Sub Region:</strong> ${country.subregion ?? "N/A"}</p>
      <p><strong>Capital:</strong> ${country.capital?.[0] ?? "N/A"}</p>
      <p><strong>Currencies:</strong> ${currencyList}</p>
      <p><strong>Languages:</strong> ${languageList}</p>
      <p><strong>Borders:</strong> ${borderCountryCodes}</p>
    </div>
  `;
    // Show modal
    modal.classList.add("open");
}
//======================MODAL CLOSE================================
function closeCountryModal() {
    modal.classList.remove("open");
}
// Close modal when clicking the "Back" button
if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeCountryModal);
}
// Close modal when clicking on the dark backdrop (outside content)
if (modal) {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeCountryModal();
        }
    });
}
//======================COMBINING BOTH=================================
/**
 * Runs the search filter AND region filter together.
 * Always starts from the full original dataset (allCountries).
 */
function applyFilters() {
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
    // set up dark / light mode toggle
    setupThemeToggle();
}
renderCountries(); // Start the entire application
//# sourceMappingURL=main.js.map