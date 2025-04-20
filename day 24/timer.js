let startTime = 0;
let interval;
let running = false;

function formatTime(ms) {
  const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
  const miliseconds = String(Math.floor((ms % 1000) / 100)).padStart(2, "0");

  return `
    ${minutes}: ${seconds}: ${miliseconds}
  `;
}

function startTimer() {
  if (!running) {
    running = true;
    const start = Date.now() - startTime;
    interval = setInterval(() => {
      startTime = Date.now() - start;
      document.getElementById('display').textContent = formatTime(startTime)
    }, 10);
  }
}

function pauseTimer() {
  if(running) {
    running = false;
    clearInterval(interval)
  }
}

function resetTimer() {
  pauseTimer();
  startTime = 0;
  document.getElementById('display').textContent = "00:00:00"
}