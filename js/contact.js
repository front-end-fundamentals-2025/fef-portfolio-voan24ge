const inputElement = document.getElementsByClassName("input-text");
const buttonElement = document.getElementById("send-button");
const mainElement = document.querySelector("main");

buttonElement.addEventListener("click", submition);

function submition() {
  // clear previous content
  while (mainElement.firstChild) {
    mainElement.removeChild(mainElement.firstChild);
  }
  // create success message
  const paragraphElement = document.createElement("p");
  paragraphElement.innerText = "Your message is successfully sent!";
  paragraphElement.classList.add("submit-style");

  // create return button
  const newButton = document.createElement("button");
  newButton.innerText = "Return to the previous page";
  newButton.classList.add("return-button-style");

  newButton.addEventListener("click", function (event) {
    // the next function was suggested by ChatGPT: https://chatgpt.com/c/67b72486-4d5c-800b-a2b5-b233461c140c
    window.location.href = "contact.html";
  });

  // append elements to main
  mainElement.appendChild(paragraphElement);
  mainElement.appendChild(newButton);
}
