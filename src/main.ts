import { fetchCountries } from "./services/apiService";
import { Country } from "./models/Country";
const container = document.getElementById("container")!;

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

async function renderCountries() {

  const countries = await fetchCountries();

  countries.forEach((country) => {
    const card = createCountryCard(country);
    container.appendChild(card);
  });
}

renderCountries();
