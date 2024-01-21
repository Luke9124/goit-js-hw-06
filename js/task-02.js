'use strict';
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientList = document.getElementById('ingredients');

const newFragment = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const newListItem = document.createElement('li');

  newListItem.textContent = ingredient;

  newListItem.classList.add('item');

  newFragment.appendChild(newListItem);
});

ingredientList.appendChild(newFragment);
