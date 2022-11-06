const quoteButtoon = document.querySelector('.new-quote');
quoteButtoon.addEventListener('click', getQuote);

const endpoint = 'https://api.chucknorris.io/jokes/random';

async function getQuote () {
    //console.log('test click worked');
    let text = await fetch(endpoint);
    let response = await text.text();
    
    let json_response = JSON.parse(response);
    //console.log(json_response);
    console.log(json_response['message']);
     //.then(text => text.text());

    displayQuote(json_response['message']);
}

function displayQuote (x) {
   // const quoteBox = document.querySelector9('#js-quote-text');
   // console.log ('dislpay qupte working');
   //const textMessage = document.createTextNode(x); 

    //quoteBox.appendChild(textMessage); 


    document.getElementById('js-quote-text').textContent = x;
}

var dogPic = <img src = {endpoint}></img>;
getQuote();


