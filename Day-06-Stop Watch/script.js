// Select Elements
const timer = document.getElementById("timer");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const lap = document.getElementById("lap");
const lapList = document.getElementById("lapList");

// Stopwatch Variables
let hours = 0;
let minutes = 0;
let seconds = 0;

let interval = null;
let lapCount = 1;

// Start Stopwatch
function startTimer() {

    // Prevent multiple intervals
    if (interval !== null) {
        return;
    }

    interval = setInterval(function () {

        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();

    }, 1000);

}

// Pause Stopwatch
function pauseTimer() {

    clearInterval(interval);
    interval = null;

}

// Reset Stopwatch
function resetTimer() {

    clearInterval(interval);
    interval = null;

    hours = 0;
    minutes = 0;
    seconds = 0;

    lapCount = 1;

    lapList.innerHTML = "";

    updateDisplay();

}

// Update Timer Display
function updateDisplay() {

    let displayHours = String(hours).padStart(2, "0");
    let displayMinutes = String(minutes).padStart(2, "0");
    let displaySeconds = String(seconds).padStart(2, "0");

    timer.textContent =
        `${displayHours}:${displayMinutes}:${displaySeconds}`;

}

// Add Lap
function addLap() {

    // Don't add lap if timer hasn't started
    if (hours === 0 && minutes === 0 && seconds === 0) {
        return;
    }

    const li = document.createElement("li");

    li.textContent =
        `Lap ${lapCount} - ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    lapList.appendChild(li);

    lapCount++;

}

// Event Listeners
start.addEventListener("click", startTimer);

pause.addEventListener("click", pauseTimer);

reset.addEventListener("click", resetTimer);

lap.addEventListener("click", addLap);

// Show initial value
updateDisplay();