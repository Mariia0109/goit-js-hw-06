const buttonColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  buttonColor.addEventListener('click', () => {
    spanColor.textContent = getRandomHexColor();
    document.body.style.backgroundColor = spanColor.textContent;
});





