const quoteButtoon = document.querySelector('.new-quote');
quoteButtoon.addEventListener('click', getQuote);

const endpoint = 'https://official-joke-api.appspot.com/random_joke';

async function getQuote () {
    //console.log('test click worked');
    let text = await fetch(endpoint);
    let response = await text.text();
    
    let json_response = JSON.parse(response);
    //console.log(json_response);
    console.log(json_response['setup']);
     //.then(text => text.text());
    displayQuote(json_response['setup']);

    let answerButton = document.querySelector('.tbutton');
    answerButton.addEventListener('click', getPunchline);
    
    function getPunchline() { 
        console.log(json_response['punchline']);
        displayAnswer(json_response['punchline'])

    }

    displayAnswer()



}

function displayQuote (x) {
   // const quoteBox = document.querySelector9('#js-quote-text');
   // console.log ('dislpay qupte working');
   //const textMessage = document.createTextNode(x); 

    //quoteBox.appendChild(textMessage); 


    document.getElementById('js-quote-text').textContent = x;
}

function displayAnswer (y) {
    // const quoteBox = document.querySelector9('#js-quote-text');
    // console.log ('dislpay qupte working');
    //const textMessage = document.createTextNode(x); 
 
     //quoteBox.appendChild(textMessage); 
 
     document.getElementById('js-answer-text').textContent = y;
 }

getQuote();



