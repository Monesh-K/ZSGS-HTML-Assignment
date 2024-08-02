let milli = 0;
let sec = 0;
let min = 0;
let hrs = 0;
let isRunning = false;
const startbtn = document.getElementById("start");
const resetbtn = document.getElementById("reset");
const lapbtn = document.getElementById("lap");

startbtn.addEventListener("click", startTimer);
resetbtn.addEventListener("click", resetTimer);
lapbtn.addEventListener("click", startLap);

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(updateTime, 10);
    startbtn.textContent = "Pause";
    lapbtn.style.display = "block";
  } else {
    pause();
  }
}

function updateTime() {
  milli++;
  if (milli === 100) {
    milli = 0;
    sec++;
    if (sec === 60) {
      sec = 0;
      min++;
      if (min === 60) {
        min = 0;
        hrs++;
        if (hrs === 24) {
          hrs = 0;
        }
      }
    }
  }
  displayTime();
}

function displayTime() {
  const timer = document.getElementById("timer");
  const time = `${String(hrs).padStart(2, "0")}:
                ${String(min).padStart(2,"0")}:
                ${String(sec).padStart(2, "0")}:
                ${String(milli).padStart(2, "0")}`;
  timer.textContent = time;
}

function pause() {
  clearInterval(interval);
  isRunning = false;
  startbtn.textContent = "Start";
}

function resetTimer() {
  pause();
  milli = 0;
  sec = 0;
  min = 0;
  hrs = 0;
  displayTime();
  lapbtn.style.display = "none";
  const laps = document.getElementById("laps");
  laps.innerHTML = "";
}

function startLap() {
  const laps = document.getElementById("laps");
  const lapTime = `${String(hrs).padStart(2, "0")}:
                    ${String(min).padStart(2,"0")}:
                    ${String(sec).padStart(2, "0")}:
                    ${String(milli).padStart(2, "0")}`;
  const listItem = document.createElement("li");
  listItem.textContent = lapTime;
  laps.appendChild(listItem);
}
