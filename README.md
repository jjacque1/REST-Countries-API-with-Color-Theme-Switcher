# Title

Frontend Mentor - REST Countries API with color theme switcher

## The challenge

This project is a TypeScript application that fetches real country data from the REST Countries API, displays each country in a responsive UI, supports dynamic search and region filtering, includes an interactive country details modal, and allows users to switch between light and dark themes.

## Project Goal

TypeScript fundamentals

DOM manipulation using TypeScript

Object-oriented structuring of data

Asynchronous API requests

Error handling

Responsive web design

## Getting Started

Base URL:

"https://restcountries.com/v3.1/all"

"https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,subregion,currencies,languages,borders"

Fields Used:

name
population
region
capital
flags
subregion
currencies
languages
borders

## Project Requirement

1. API Integration

   - Fetches all countries using an async/await API service.
   - Handles errors using try/catch.
   - Returns only the selected fields from the API

2. TypeScript Models

   - A Country model defines the shape of every country object.
   - Ensure type throughout the project.

3. UI Features

   - Country cards rendered dynamically from API data.
   - Responsive grid layout for desktop/tablet/mobile.
   - Search bar to filter countries by name.
   - Dropdown filter to filter by region.
   - Click any country to open a modal with expanded details.

4. Modal System

   - Each modal displays:
     Flag

   Name

   Population

   Region

   Subregion

   Capital

   Currencies

   Languages

   Border countries

5. Dark / Light Theme Switcher
   Toggle button updates:

   Background colors

   Text colors

   Inputs & dropdowns

   Buttons

   Country cards

## Testing and Validation

1. Inside apiService.ts, fetchCountries() logs the raw API response.

2. Compile TypeScript with npx tsc

3. Run Project with Live Server 

4. Test Error Handling => Break the API URL on purpose with wrong url

5. Ensure clear error message prints in the console


## Challenges 

One of the biggest challenges in this project was working with deeply nested and inconsistently structured data from the REST Countries API. Properties like languages, currencies, and borders were objects or arrays with varying structures, which made it difficult to convert them into clean, readable strings for the modal. Another challenge involved configuring TypeScript  ensuring that imports, exports, and module resolution behaved correctly. I also struggled initially with organizing the project into a maintainable folder structure and keeping the compiled JavaScript files aligned with their TypeScript sources. Through reading API documentation, experimenting with different TypeScript settings, and simplifying my approach to DOM rendering and event handling, I was able to resolve these issues. Breaking problems into smaller steps and converting complex API objects manually with beginner-friendly loops made the data much easier to work with. In the end, careful debugging, incremental testing, and adjusting my architecture helped the project come together smoothly.


## Reflection

Working on this project allowed me to apply TypeScript and front-end development concepts in a deeper, more practical way. I gained a much stronger understanding of how TypeScript’s type system helps structure real data coming from an API, especially when dealing with complex objects like countries, languages, currencies, and borders. I also learned how helpful interfaces are for shaping API responses and preventing common runtime errors. Building reusable functions for filtering, rendering, and opening modals reinforced the importance of clean separation of concerns. Implementing dark mode taught me how simple UI state changes can be handled with class toggling, while creating the modal helped me practice DOM manipulation and event-driven programming. Overall, this project strengthened my confidence in working with asynchronous operations, API-driven UI updates, and TypeScript-based project organization. It also showed me how planning, breaking tasks into steps, and testing each feature individually leads to a smoother and more maintainable development process.



## Acknowledgement

https://restcountries.com/

https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca

https://ps-lms.vercel.app/curriculum/se/410/lesson-3

https://perscholas.instructure.com/courses/2978/pages/module-5-the-document-object-model

https://perscholas.instructure.com/courses/2978/assignments/577957?module_item_id=2378283

https://www.w3schools.com/jsref/jsref_tolocalestring_number.asp

https://www.google.com/search?q=as+htmlelement+typescript&sca_esv=8d6b71ab7ddbac70&sxsrf=AE3TifM3Ui7hLk2cGCA5P5jxTF5BT4517g%3A1764217276614&source=hp&ei=vNEnabT7IqqvwbkP0LmtMA&iflsig=AOw8s4IAAAAAaSffzEuycnl24HmBABM9xVZ521wIYmEX&oq=as+HTMLElement&gs_lp=Egdnd3Mtd2l6Ig5hcyBIVE1MRWxlbWVudCoCCAAyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkibGlDtC1jtC3ABeACQAQCYAa8BoAGvAaoBAzAuMbgBAcgBAPgBAvgBAZgCAqACwwGoAgrCAg0QIxiABBgnGIoFGOoCwgIHECMYJxjqAsICDRAuGIAEGCcYigUY6gKYAxDiAwQYACBd4gMEGAAgXuIDBBgAIF_iAwQYACBg4gMEGAAgYeIDBBgAIGLxBeQ8e-FCyj27kgcDMS4xoAfeBbIHAzAuMbgHswHCBwUyLTEuMcgHEQ&sclient=gws-wiz

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

https://www.w3schools.com/jsref/jsref_includes_array.asp

https://www.google.com/search?q=.includes+typescript&sca_esv=8d6b71ab7ddbac70&sxsrf=AE3TifMQBvRWVd7rdY1otlm5lLbS8H4KuA%3A1764217377950&ei=IdInadnfOcXfwN4Pla2wkAk&oq=.includes&gs_lp=Egxnd3Mtd2l6LXNlcnAiCS5pbmNsdWRlcyoCCAEyBRAAGIAEMgoQABiABBgUGIcCMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI8CRQog5Yog5wAngBkAEAmAFEoAFEqgEBMbgBAcgBAPgBAfgBApgCA6ACfagCEMICDRAjGIAEGCcYigUY6gLCAgcQIxgnGOoCwgINEC4YgAQYJxiKBRjqAsICFxAAGIAEGJECGLQCGOcGGIoFGOoC2AEBmAMk4gMEGAAgXeIDBBgAIF7iAwQYACBf4gMEGAAgYOIDBBgAIGHiAwQYACBi8QVoew7P3woFVboGBggBEAEYAZIHATOgB4sHsgcBMbgHTsIHBTMtMi4xyAcy&sclient=gws-wiz-serp

https://www.google.com/search?q=.filter+typescript&sca_esv=8d6b71ab7ddbac70&sxsrf=AE3TifMfAHWeo-B48suwxrKQBxWR-bJ4-g%3A1764217431408&ei=V9InacrhGKurp84PmMz22QM&oq=.filter&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgBIgcuZmlsdGVyKgIIATIFEAAYgAQyChAAGIAEGBQYhwIyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIOEAAY5AYYiwMY3QbYAQIyDhAAGOQGGIsDGN0G2AECMg4QABjkBhiLAxjdBtgBAkiP6AFQntQBWJ7UAXACeACQAQCYAZwBoAGcAaoBAzAuMbgBAcgBAPgBAfgBApgCA6ACwQGoAhDCAg0QIxiABBgnGIoFGOoCwgIHECMYJxjqAsICDRAuGIAEGCcYigUY6gLCAhcQABiABBiRAhi0AhjnBhiKBRjqAtgBAZgDDOIDBBgBIF3iAwQYASBe4gMEGAAgX-IDBBgAIGDiAwQYACBh4gMEGAAgYvEFFgfP3sCuRry6BgYIARABGAG6BgQIAhgekgcDMi4xoAf6DLIHAzAuMbgHpAHCBwUyLTEuMsgHIA&sclient=gws-wiz-serp

https://www.w3schools.com/jsref/jsref_filter.asp

https://www.google.com/search?q=.join+typescript&sca_esv=8d6b71ab7ddbac70&sxsrf=AE3TifO9PIjI8ovepym23AktDHhyVxTZUQ%3A1764217502049&ei=ntInadPVAvC4wN4P7urUsAM&oq=.join&gs_lp=Egxnd3Mtd2l6LXNlcnAiBS5qb2luKgIIADIKEAAYgAQYFBiHAjIFEAAYgAQyBRAAGIAEMgUQABiABDIIEAAYgAQYsQMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjjFFD4CVj4CXABeACQAQCYAVagAVaqAQExuAEByAEA-AEB-AECmAICoAJxqAIQwgINECMYgAQYJxiKBRjqAsICBxAjGCcY6gLCAg0QLhiABBgnGIoFGOoCwgIXEAAYgAQYkQIYtAIY5wYYigUY6gLYAQGYAxXiAwQYACBd4gMEGAAgXuIDBBgAIF_iAwQYACBg4gMEGAAgYeIDBBgAIGLxBVsbk4shCHZPugYGCAEQARgBkgcBMqAH6AayBwExuAdcwgcFMi0xLjHIBxc&sclient=gws-wiz-serp

https://www.w3schools.com/jsref/jsref_join.asp

https://www.google.com/search?q=+Object.values&sca_esv=8d6b71ab7ddbac70&sxsrf=AE3TifPdf4_4y-EgKWSUwZTx2e8u4793Qg%3A1764217555221&ei=09InadGmDbG-p84PjIHV8Ag&ved=0ahUKEwiR3L3FvpGRAxUx38kDHYxAFY4Q4dUDCBM&uact=5&oq=+Object.values&gs_lp=Egxnd3Mtd2l6LXNlcnAiDiBPYmplY3QudmFsdWVzMgsQABiABBiRAhiKBTILEAAYgAQYkQIYigUyCxAAGIAEGJECGIoFMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgsQABiABBiRAhiKBUiCEVDeC1jeC3ACeACQAQCYAY0BoAGNAaoBAzAuMbgBA8gBAPgBAfgBApgCA6ACqgGoAhDCAg0QIxiABBgnGIoFGOoCwgIHECMYJxjqAsICDRAuGIAEGCcYigUY6gLCAhcQABiABBiRAhi0AhjnBhiKBRjqAtgBAZgDEOIDBBgAIF3iAwQYACBe4gMEGAAgX-IDBBgAIGDiAwQYACBh4gMEGAAgYvEF8lY7CgxEoOi6BgYIARABGAGSBwMyLjGgB7gHsgcDMC4xuAeSAcIHBTItMi4xyAcZ&sclient=gws-wiz-serp

https://www.w3schools.com/jsref/jsref_object_values.asp

https://www.youtube.com/watch?v=tYdlt9q6Iug

https://www.w3schools.com/react/react_es6_spread.asp

https://www.google.com/search?q=spread+operator+in+javascript&sca_esv=8d6b71ab7ddbac70&sxsrf=AE3TifMThNtPAnRWFWFN8lzPG2JVlkx6fg%3A1764217992061&ei=iNQnaaLAA-iKwbkP6b6rsAI&oq=spre&gs_lp=Egxnd3Mtd2l6LXNlcnAiBHNwcmUqAggAMgoQABiABBhDGIoFMgoQABiABBhDGIoFMggQABiABBixAzIOEC4YgAQYxwEYjgUYrwEyChAAGIAEGEMYigUyCxAuGIAEGLEDGIMBMgoQABiABBhDGIoFMgoQABiABBhDGIoFMhAQABiABBixAxhDGIMBGIoFMggQABiABBixA0jqQFC1CliQGnAFeAGQAQGYAbgBoAHOB6oBAzMuNbgBAcgBAPgBAZgCDKACnQeoAhDCAg0QIxiABBgnGIoFGOoCwgIHECMYJxjqAsICFxAAGIAEGJECGLQCGOcGGIoFGOoC2AEBwgIKECMYgAQYJxiKBcICBBAjGCfCAg4QABiABBixAxiDARiKBcICCxAAGIAEGLEDGIMBwgIKEC4YgAQYQxiKBcICFhAuGIAEGLEDGNEDGEMYgwEYxwEYigXCAg0QABiABBixAxhDGIoFwgIOEC4YgAQYsQMY0QMYxwHCAggQLhiABBixA8ICDhAuGIAEGLEDGIMBGIoFwgIPEAAYgAQYsQMYgwEYChgLwgIMEAAYgAQYsQMYChgLwgIPEC4YgAQY0QMYxwEYChgLwgIMEC4YgAQYsQMYChgLwgIPEC4YgAQYsQMYgwEYChgLmAMO4gMEGAAgXeIDBBgAIF7iAwQYACBf4gMEGAAgYOIDBBgAIGHiAwQYACBi8QXAGPMECS4AcboGBggBEAEYAZIHAzcuNaAHoFiyBwMyLjW4B_kGwgcGMi0xMS4xyAc_&sclient=gws-wiz-serp



## My Solution


