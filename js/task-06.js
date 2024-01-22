'use strict';

const validationInput = document.querySelector('#validation-input');

// const validationAttribute = validationInput.getAttribute('data-length');

const validationAttribute = parseInt(
  validationInput.getAttribute('data-length') || '0',
  10
);

const doValidation = () => {
  if (validationInput.value.length === validationAttribute) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
};

validationInput.addEventListener('blur', doValidation);
