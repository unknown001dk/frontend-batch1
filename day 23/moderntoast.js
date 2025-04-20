function showToast(message, type) {
  const toast = document.createElement('div');
  toast.classList.add('toast', type)
  toast.textContent = message;
  const container = document.getElementById('toastContainer');
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000)
}