const headerElement = document.getElementById("header");
const inputElement = document.getElementById("input");
const buttonElement = document.getElementById("button");

if (localStorage.text) {
  headerElement.innerText = localStorage.text;
} else {
  headerElement.innerText = "Change this text";
}

buttonElement.addEventListener("click", function (e) {
  let text = inputElement.value;
  headerElement.innerText = text;
  localStorage.text = text;
});
