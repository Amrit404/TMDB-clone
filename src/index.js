//controller
import { fetchPopularMovies, fetchSearchResult } from "./models";
import { renderCards, showSpinner, clearSpinner, submitValue, takeInput, clearFields } from "./view/view"
import { elements } from "./view/base"


async function loadPopularData() {
    showSpinner()
    let { results } = await fetchPopularMovies();
    clearSpinner()
    renderCards(results);
}

loadPopularData();


elements.input.addEventListener("change", takeInput);

let searchResult = "";
let searchApiData = null;
elements.form.addEventListener("submit", async (e) => {
    searchResult = submitValue(e);
    clearFields();
    let { results } = await fetchSearchResult(searchResult.trim());
    renderCards(results);
});
