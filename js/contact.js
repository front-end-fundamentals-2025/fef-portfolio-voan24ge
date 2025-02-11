const inputElement = document.getElementsByClassName("input-text");
const buttonElement = document.getElementById("send-button");
const mainElement = document.querySelector("main");

buttonElement.addEventListener("click", submition);

function submition() {
  const paragraphElement = document.createElement("p");
  paragraphElement.innerText = "Your message is successfully sent!";
  paragraphElement.classList.add("submit-style");

  mainElement.appendChild(paragraphElement);

  while (mainElement.firstChild) {
    mainElement.removeChild(mainElement.firstChild);
  }

  mainElement.appendChild(paragraphElement);
}
