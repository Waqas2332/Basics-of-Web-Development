const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const c_password = document.getElementById("c_password");

function showError(input, errorMessage) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = errorMessage;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

function checkPassword(password1, password2) {
  if (password1.value !== password2.value) {
    showError(password2, "Passwords do not match");
  }
}

// event listener
form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkRequired([username, email, password, c_password]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkPassword(password, c_password);
});
