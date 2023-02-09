function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes");

const handleClick = () => {
  console.log("click event listener callback");
};

createButton.addEventListener('amount', () => {
  boxes.addEventListener("click", handleClick);
}); 

destroyButton.addEventListener('click', () => {
  boxes.removeEventListener("click", handleClick);
}); 



