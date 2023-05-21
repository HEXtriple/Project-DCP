var form = document.getElementById("contact-form");
var name = form.elements["name"];
var email = form.elements["email"];
var subject = form.elements["subject"];
var message = form.elements["message"];

function validateEmail(email) {
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}

function showError(field, message) {
  var error = document.createElement("span");
  error.className = "error";
  error.textContent = message;

  field.parentNode.appendChild(error);
}

function removeError(field) {
  var lastChild = field.parentNode.lastChild;

  if (lastChild.tagName === "SPAN" && lastChild.className === "error") {
    field.parentNode.removeChild(lastChild);
  }
}

form.addEventListener("button", function (event) {
  event.preventDefault();

  var valid = true;

  removeError(name);
  removeError(email);
  removeError(subject);
  removeError(message);

  if (name.value.trim() === "") {
    showError(name, "Du måste ange ditt namn.");
    valid = false;
  }

  if (email.value.trim() === "" || !validateEmail(email.value)) {
    showError(email, "Du måste ange en giltig e-postadress.");
    valid = false;
  }

  if (subject.value.trim() === "") {
    showError(subject, "Du måste ange ett ärende.");
    valid = false;
  }

  if (message.value.trim() === "") {
    showError(message, "Du måste ange ett meddelande.");
    valid = false;
  }

  if (valid) {
    alert("Formuläret är giltigt och kan skickas.");
  }
});
