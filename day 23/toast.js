const toastBtn = document.getElementById("showToast");
const toast = document.getElementById("toast");

toastBtn.addEventListener("click", function() {
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
})