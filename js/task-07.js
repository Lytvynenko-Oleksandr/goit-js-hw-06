const inputControlEl = document.querySelector('#font-size-control');
const spanTextFontSizeEl = document.querySelector('#text');

inputControlEl.addEventListener('input', event => {
    spanTextFontSizeEl.style.fontSize = `${event.target.value}px`;
 });