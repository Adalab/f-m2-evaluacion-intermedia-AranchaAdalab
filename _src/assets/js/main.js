'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const feedback = document.querySelector('.feedback');
const counter = document.querySelector('.counter');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  
  console.log('> ' + getRandomNumber(100));

function showNumber() {
    console.log (input.value);
    return input.value;
}

button.addEventListener('click', showNumber);

if (showNumber () < getRandomNumber()) {
    feedback.innerHTML = 'demasiado bajo';
} else if (showNumber () > getRandomNumber()) {
    feedback.innerHTML = 'demasiado alto';
} else if (showNumber () === getRandomNumber()){
    feedback.innerHTML = '¡HAS GANADO CAMPEONA!';
}

const numberInput = showNumber(input.value);
const randomNumber = getRandomNumber ();

if (numberInput < getRandomNumber()) {
    feedback.innerHTML = 'demasiado bajo';
}
