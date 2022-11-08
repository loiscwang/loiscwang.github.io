const minusButton = document.querySelector ('.minus-button').addEventListener('click',check);
const plussButton = document.querySelector ('.plus-button').addEventListener('click',plus);
const resetButton = document.querySelector ('.reset-button').addEventListener('click',reset);
const submitButton = document.querySelector ('.submit-button').addEventListener('click',submit);



const output = document.querySelector('.output'); 


function check() {
    console.log ('test');
}

function submit () {
    alert(output.textContent);
}

function reset () {
    //const resetValue = 0000000000;
    output.textContent = '0000000000'; 
}

function plus () {

output.textContent = output.textContent + 1
}


/* const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');

button.addEventListener('click', updateOutput);

function updateOutput() {
    output.textContent = phone_content.value;
    alert(phone_content.value);
} */