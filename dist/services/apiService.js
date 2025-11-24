"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCountries = fetchCountries;
const URL = "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,subregion,currencies,languages,borders";
async function fetchCountries() {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`API request failed, status: ${response.status}`);
        }
        const countries = await response.json();
        console.log("Fetched countries (raw from API):", countries);
        return countries;
    }
    catch (error) {
        console.error("Error fetching countries:", error);
        throw error;
    }
}
//# sourceMappingURL=apiService.js.map