'use strict';
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const defaultText = nameOutput.innerHTML;

const changeTextSpam = () => {
  if (nameInput.value !== '') {
    nameOutput.innerHTML = nameInput.value;
  } else {
    nameOutput.innerHTML = defaultText;
  }
};

textInput.addEventListener('input', changeTextSpam);
