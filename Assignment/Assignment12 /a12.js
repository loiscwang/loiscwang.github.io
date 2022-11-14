const output = document.querySelector('.output'); 
let outputInt = parseInt(output.textContent);
//console.log(outputInt);


const plussButton = document.querySelector ('.plus-button').addEventListener('click',plus);
const resetButton = document.querySelector ('.reset-button').addEventListener('click',reset);
const submitButton = document.querySelector ('.submit-button').addEventListener('click',submit);

function submit () {
    alert(output.textContent);
}

function reset () {
    //const resetValue = 0000000000;
    if (outputInt < 9999999999) {
        outputInt = 0000000000;
        output.textContent = outputInt; 
    }
}

function plus () {
    if (outputInt < 9999999999) {
        outputInt += 1;
        output.textContent = outputInt; 
    }
}
