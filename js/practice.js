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

const headingElement = document.getElementById("main-heading");
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

const ulElement = document.getElementById("list");

const liElement = document.createElement("li");
liElement.style.color = "purple";
liElement.innerText = "List item";
liElement.classList.add("bold");

ulElement.appendChild(liElement);

/* Adding several elements */

/*const ulElement = document.getElementById("list"); */

/* for (let i = 0; i < 3; i++) {
	let liElement = document.createElement("li");
	liElement.innerText = "List item";
	ulElement.appendChild(liElement);
} */

/* Removing several elements */

let liElements = document.getElementsByClassName("list-item");

while (liElements.length > 0) {
  liElements[0].remove();
}

/* Event listeners: click & mouseover */

/*const headingElement = document.getElementById("heading"); */
const paragraphElement = document.getElementById("paragraph");

headingElement.addEventListener("click", changeColor);

function changeColor() {
  headingElement.style.color = "blue";
}

paragraphElement.addEventListener("mouseover", function () {
  this.style.backgroundColor = "lightgrey";
});

paragraphElement.addEventListener("mouseout", function () {
  this.style.backgroundColor = "white";
});
