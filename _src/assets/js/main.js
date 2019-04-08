'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const feedback = document.querySelector('.feedback');
const counter = document.querySelector('.counter');
const randomNumber = getRandomNumber (100);
let i = 0;
counter.innerHTML = i;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
console.log('>', randomNumber);

function showNumber() {
    const numberInput = parseInt(input.value);
    console.log (numberInput);
    if (numberInput < randomNumber) {
        feedback.innerHTML = 'demasiado bajo';
    } else if (numberInput > randomNumber) {
        feedback.innerHTML = 'demasiado alto';
    } else if (numberInput === randomNumber){
        feedback.innerHTML = '¡HAS GANADO CAMPEONA!';
    }
    i = i+1;
    counter.innerHTML = i;
}


button.addEventListener('click', showNumber);

