'use strict';

const fontSizeControl = document.getElementById('font-size-control');

const textSpan = document.getElementById('text');

const newFontSize = () => {
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
};

newFontSize();

fontSizeControl.addEventListener('input', newFontSize);

// fontSizeControl.addEventListener('input', () => {
//   textSpan.style.fontSize = `${fontSizeControl.value}px`;
// });
