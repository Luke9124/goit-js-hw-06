'use strict';
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

const decrease = () => {
  counterValue -= 1;
  value.innerHTML = counterValue;
};

const increase = () => {
  counterValue += 1;
  value.innerHTML = counterValue;
};

btnDecrement.addEventListener('click', decrease);
btnIncrement.addEventListener('click', increase);
