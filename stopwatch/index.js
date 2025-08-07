let displayTimer = document.querySelector(".display-timer")
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let msec = 0;
let secs = 0;
let mins = 0;
let timerId = null;

function setTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }
    let msecstr = msec < 10 ? `0${msec}` : msec;
    let secstr = secs < 10 ? `0${secs}` : secs;
    let minsstr = mins < 10 ? `0${mins}` : mins;

    displayTimer.innerHTML = `${minsstr} : ${secstr} : ${msecstr}`;
}

start.addEventListener("click", () => {
    if (timerId !== null) {
        clearInterval(timerId);

    }
    timerId = setInterval(setTimer, 10);
})

stop.addEventListener("click", () => {
    clearInterval(timerId);

})

reset.addEventListener("click", () => {
    clearInterval(timerId);
    msec = secs = mins = 0;
    displayTimer.innerHTML = `00 : 00 : 00`;

})

