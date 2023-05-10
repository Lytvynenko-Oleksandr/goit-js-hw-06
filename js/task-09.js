const changeColorBtnEl = document.querySelector('.change-color');
const nameColorForBodyEl = document.querySelector('.color');

changeColorBtnEl.addEventListener('click', () => { 
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  nameColorForBodyEl.textContent = newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
