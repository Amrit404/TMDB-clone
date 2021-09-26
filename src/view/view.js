import { elements } from "./base"

function renderCards(arr) {
    console.log(elements);
    let str = "";
    arr
    .filter((item,idx) => idx <=6)
    .forEach((item) => {
        str += `<div class="movie-card">
        <div class="movie-image"></div>
        <h4 class="movie-title">${item.title}</h4>
        <h6>Sep 12, 2013</h6>
        <div class="movie-rating">83%</div>
      </div>`
    });
    elements.cardContainer.innerHTML = str;
}

function showSpinner() {
    elements.spinner.classList.remove('hide');
}

function clearSpinner() {
    elements.spinner.classList.add('hide');
}

let value = "";
function takeInput(e) {
    console.log(e.target.value)
    value = e.target.value;
}

function submitValue(e) {
    e.preventDefault();
    return value;
}

function clearFields() {
    value = "";
    elements.input.value = "";
}

export { renderCards, showSpinner, clearSpinner, submitValue, takeInput, clearFields };