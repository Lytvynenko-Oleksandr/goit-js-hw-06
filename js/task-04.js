const counterValue = document.querySelector('#value');
let countCounter = 0;

const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');

incrementBtnEl.addEventListener('click', () => {
    countCounter += 1;
    counterValue.textContent = countCounter;
    
});

decrementBtnEl.addEventListener('click', () => {
    countCounter -= 1;
    counterValue.textContent = countCounter;
});