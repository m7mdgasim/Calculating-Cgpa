const formElement = document.querySelector("form");

function formExtract(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.dir(formData.get("usernumber"));
}

formElement.addEventListener("submit", formExtract);
