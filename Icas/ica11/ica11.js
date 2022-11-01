const quoteButtoon = document.querySelector('new-quote button')
quoteButtoon.addEventListener('click', getQuote)

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

function getQuote () {
    console.log('test click worked');
    let text = fetch(endpoint);
    console.log(text);
}