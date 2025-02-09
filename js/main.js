const redButton = document.getElementById("red-button");
const blueButton = document.getElementById("blue-button");
const purpleButton = document.getElementById("purple-button");
const bodyElement = document.querySelector("body");

redButton.addEventListener("click", function (event) {
  bodyElement.style.backgroundColor = "#811331";
});

blueButton.addEventListener("click", function (event) {
  bodyElement.style.backgroundColor = "#0F52BA";
});

purpleButton.addEventListener("click", function (event) {
  bodyElement.style.backgroundColor = "#702963";
});

const headingElement = document.getElementById("heading");
const inputElement = document.getElementById("input-name");
const buttonElement = document.getElementById("enter-button");

buttonElement.addEventListener("click", function (element) {
  let enteredName = inputElement.value;

  if (enteredName !== "") {
    headingElement.innerText = "Hello " + enteredName + "!";
  } else {
    headingElement.innerText = "What's your name?";
  }
});
