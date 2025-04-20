const form = document.querySelector("#registerForm");

form.addEventListener("submit", function validateForm(event) {
  event.preventDefault();

  let username = document.querySelector("#username");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  let usernameError = document.querySelector("#usernameError");
  let emailError = document.querySelector("#emailError");
  let passwordError = document.querySelector("#passwordError");

  username.classList.remove("error");
  email.classList.remove("error");
  password.classList.remove("error");

  usernameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  let valid = true;

  if (username.value.trim() === "") {
    username.classList.add("error");
    usernameError.textContent = "Username is required";
    valid = false;
  } else if (username.value.length < 3) {
    username.classList.add("error");
    usernameError.textContent = "Username must be at least 3 characters long";
    valid = false;
  }

  if (email.value.trim() === "") {
    email.classList.add("error");
    emailError.textContent = "Email is required";
    valid = false;
  }

  if (password.value.trim() === "") {
    password.classList.add("error");
    passwordError.textContent = "Password is required";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
