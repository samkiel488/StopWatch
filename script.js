let secondsElapsed = 0;
let interval = null;
const time = document.getElementById('time');
const click = document.querySelector(".click");


function padStart(value) {
    return String(value).padStart(2, "0");
}

function setTime(){
    const hours = Math.floor(secondsElapsed / 3600);
const minutes = Math.floor(secondsElapsed / 60);
const seconds = secondsElapsed % 60;
    time.innerHTML = `${padStart(hours)}:${padStart(minutes)}:${padStart(seconds)}`;
}

function timer(){
    secondsElapsed++;
    setTime()
}

function startClock() {
    if (interval) stopClock()
    interval = setInterval(timer, 1000)
    click.style.animation = "pulse 1s infinite";
        document.getElementById("click").textContent = "🎉 StopWatch is running..."
}

function stopClock() {
    clearInterval(interval) 
    
    document.getElementById("click").textContent = "Why na, abeg allow me to keep running 🙏😌"
    click.style.animation = "none";
}

function resetClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()

    document.getElementById("click").textContent = "You just clicked on reset, as such everything boils down to 0"

}

// After here js is for counter

const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

increasebtn.onclick = function()    {
    count++;
    countlabel.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}

decreasebtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}

// For Switching between counter and stopwatch

const StopWatch = document.getElementById('StopWatch');
const stop = document.querySelector('.stop');
const Counter = document.getElementById('Counter');
const counter = document.getElementById('counter');

Counter.onclick = function() {
        counter.style.display = "block";
        Counter.style.color = "purple";
        StopWatch.style.color = "white";
        stop.style.display = "none";
}

StopWatch.onclick = function() {
    counter.style.display = "none";
    Counter.style.color = "white";
    StopWatch.style.color = "purple";
    stop.style.display = "block";
}

function addAnimation() {
    const timeDisplay = document.getElementById('time');
    timeDisplay.classList.add('pulse-animation');
}