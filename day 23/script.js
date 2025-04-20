const checkBox = document.getElementById("agreeCheckbox");
const submitBtn = document.getElementById("submitBtn");

checkBox.addEventListener("change", function () {
  if(checkBox.checked) {
    submitBtn.disbled = false;
    submitBtn.classList.add("enabled");
  } else {
    submitBtn.disbled = true;
    submitBtn.classList.remove("enabled");
  }
})