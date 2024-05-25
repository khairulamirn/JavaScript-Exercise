const getQuote = document.querySelector('#quote');
const theAuthor = document.querySelector('#author');
const api_url ="https://api.quotable.io/random";



async function getquote(url) {
    const response = await fetch(url);
    let data = await response.json();
    getQuote.innerHTML = data.content;
    theAuthor.innerHTML = data.author;
}

getquote(api_url);

function openTwitter() {
    window.open("https://twitter.com/intent/tweet?text=" + getQuote.innerHTML + "  --- by" + theAuthor.innerHTML, "Tweet Window");
}