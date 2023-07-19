const button = document.querySelector("#quoteBtn");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const quoteApi = "https://dummy-apis.netlify.app/api/quote";

function renderQuote() {
  fetch(quoteApi)
    .then((response) => {
      return response.json();
    })
    .then((quoteData) => {
      quote.innerText = quoteData.quote;
      author.innerText = quoteData.author;
    });
}
button.addEventListener("click", renderQuote);
