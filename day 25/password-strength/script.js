const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strangthText");

passwordInput.addEventListener("input", () => {
  const val = passwordInput.value;
  let strength = 0;

  if (val.length > 5) strength++;
  if (val.match(/[A-Z]/)) strength++;
  if (val.match(/[a-z]/)) strength++;
  if (val.match(/[0-9]/)) strength++;
  if (val.match(/[\W_]/)) strength++;

  // actual work
  if (strength === 0) {
    strengthBar.style.width = "0";
    strengthBar.style.backgroundColor = "#ccc";
    strengthText.textContent = "Strength: -";
  } else if (strength === 1) {
    strengthBar.style.width = "33%",
    strengthBar.style.backgroundColor = "#dc3545";
    strengthText.textContent = "Strength: Weak";
  } else if( strength === 2 || strength === 3) {
    strengthBar.style.width = "66%",
    strengthBar.style.backgroundColor = "#ffc107";
    strengthText.textContent = "Strength: Medium";
  } else { 
    strengthBar.style.width = "100%",
    strengthBar.style.backgroundColor = "#288745";
    strengthText.textContent = "Strength: Strong";
  }
});
