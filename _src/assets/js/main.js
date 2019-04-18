'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('.btn');
const feedback = document.querySelector('.feedback');
const counter = document.querySelector('.counter');
const popup = document.querySelector('.popup');
const reset = document.querySelector('.reset');
const span = 'Escribe un número y dale a <span class="attempt">Prueba</span>';
let randomNumber = getRandomNumber (100);

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
    feedback.innerHTML = 'Más de dos cifras no es buena idea';
  } else if (numberInput === randomNumber){
    feedback.innerHTML = '¡HAS GANADO!';
  }
  i = i+1;
  counter.innerHTML = i;
}

function myFunction(event) {
  const x = event.keyCode;
  if (x === 13) {
    showNumber();
  }
}

button.addEventListener('click', showNumber);
document.addEventListener('keydown', myFunction);

function resetAll() {
  input.value = '';
  i = 0;
  counter.innerHTML = i;
  feedback.innerHTML = span;
  randomNumber = getRandomNumber(100);
  console.log(randomNumber);
}

reset.addEventListener('click', resetAll);

console.log(`-- ${randomNumber}`);