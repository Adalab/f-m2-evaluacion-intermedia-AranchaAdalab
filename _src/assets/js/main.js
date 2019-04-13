'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const feedback = document.querySelector('.feedback');
const counter = document.querySelector('.counter');
const popup = document.querySelector('.popup');
const randomNumber = getRandomNumber (100);
let i = 0;
counter.innerHTML = i;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function showNumber() {
    const numberInput = parseInt(input.value);
    if (input.value === '') {
        popup.classList.remove('hidden');
        i = i-1;
        counter.innerHTML = i;
    } else {
        popup.classList.add('hidden');
    }
    if (numberInput < randomNumber && numberInput > 0) {
        feedback.innerHTML = 'Demasiado bajo';
    } else if (numberInput < randomNumber && numberInput < 0){
        feedback.innerHTML = 'Los números negativos no molan';
    } else if (numberInput > randomNumber && numberInput < 100) {
        feedback.innerHTML = 'Demasiado alto';
    } else if (numberInput > randomNumber && numberInput > 100){
        feedback.innerHTML = 'Tres cifras no es buena idea';
    } else if (numberInput === randomNumber){
        feedback.innerHTML = '¡HAS GANADO CAMPEONA!';
    } 
    i = i+1;
    counter.innerHTML = i;
}

button.addEventListener('click', showNumber);

button.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
    showNumber;
  }  
});

