'use strict';

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault;

  const emailInput = this.elements.email;
  const passwordInput = this.elements.password;

  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    return alert('All fields should be filled in');
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(formData);
  this.reset();
});
