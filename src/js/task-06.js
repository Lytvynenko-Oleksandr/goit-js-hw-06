const validationInputEl = document.querySelector('#validation-input');
const validInputLengthEl = validationInputEl.getAttribute('data-length');

validationInputEl.addEventListener('blur', (event) => {
    const enteredInputValueLengthEL = event.target.value.length;

    if (enteredInputValueLengthEL === Number(validInputLengthEl)) {
        validationInputEl.classList.add('valid');
        validationInputEl.classList.remove('invalid');
    } else { 
        validationInputEl.classList.add('invalid');
        validationInputEl.classList.remove('valid');
    };
 });