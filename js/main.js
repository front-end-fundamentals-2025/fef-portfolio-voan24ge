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
