'use strict';
console.log('main.js');

// Nusitaikyti

const h1El = document.querySelector('h1');
const btn1El = document.getElementById('bnt1');
const btn2El = document.getElementById('bnt2');
const btnSpanEl = btn1El.querySelector('span');
const cardUlEl = document.querySelector('.card');
// boolean velevele
let largeStyleOn = false;

console.log('cardUlEl ===', cardUlEl);
cardUlEl.addEventListener('mousedown', (event) => {
  console.log('paspaudziau', event.target);
  // tai ant ko paspaudem === event.target
  const el = event.target;
  const elTextColor = el.textContent;
  el.style.fontWeight = 'bold';
  // el.style.border = '1px dashed tomato';
  el.style.backgroundColor = elTextColor;
  el.style.color = 'white';
});

// 1. nusitaikyti i mygtuka
// 2. uzdeti event listeneri
btn1El.addEventListener('click', () => {
  // 3. iskviesti konsole log
  console.log('paspaudei');
  toggleStyles();
});

btn2El.addEventListener('click', () => {
  // uzdeti klase
  // h1El.classList.add('largeEl');
  // uzdeti jei nera, nuimti jei yra
  h1El.classList.toggle('largeEl');
  // ar to kia klase yra
  const yra = h1El.classList.contains('largeEl');
  console.log('yra ===', yra);
});

console.log('h1El ===', h1El);

function toggleStyles() {
  if (largeStyleOn) {
    h1El.style.marginBottom = '0.3em';
    h1El.style.fontSize = '35px';
    h1El.style.fontWeight = 'bold';
    btnSpanEl.textContent = 'large';
    largeStyleOn = false;
    return;
  }

  h1El.style.marginBottom = '0.3em';
  h1El.style.fontSize = '100px';
  h1El.style.fontWeight = 'normal';
  btnSpanEl.textContent = 'small';
  largeStyleOn = true;
}