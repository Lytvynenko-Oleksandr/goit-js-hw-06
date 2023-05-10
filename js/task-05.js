const textInputEl = document.querySelector('#name-input');
const textOutputEl = document.querySelector('#name-output');

textInputEl.addEventListener('input', event => { 
    const inputValue = event.target.value;
    textOutputEl.textContent = inputValue === '' ? 'Anonymous' : inputValue;
});