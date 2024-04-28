function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".change-color");
const bgc = document.querySelector(".color");

button.addEventListener('click', function () {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  bgc.textContent = `Color: ${randomColor}`;
});
