let timer;
let seconds = 0;
let isRunning = false;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

function updateDisplay() {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    display.textContent = `${hours}:${minutes}:${secs}`;
}

startButton.addEventListener("click", () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
});

stopButton.addEventListener("click", () => {
    isRunning = false;
    clearInterval(timer);
});

resetButton.addEventListener("click", () => {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    updateDisplay();
});

// Initialize display
updateDisplay();
