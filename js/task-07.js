const textInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

textInput.addEventListener("input", (event) => {
    text.style.fontSize = `${event.currentTarget.value}px`;
});

