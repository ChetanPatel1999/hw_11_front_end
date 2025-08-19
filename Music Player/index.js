let song = document.querySelector("#song");
let progress = document.querySelector("#progress");
let ctrlIcon = document.querySelector("#ctrl-icon");
let updateTimer;
song.onloadedmetadata = () => {
    progress.value = song.currentTime;
    progress.max = song.duration;
}

ctrlIcon.onclick = () => {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
        clearInterval(updateTimer);
    }
    else {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
        updateTimer = setInterval(() => {
            progress.value = song.currentTime;
        }, 1000)
    }
}
progress.onchange = () => {
    song.play();
    song.currentTime = progress.value;
    clearInterval(updateTimer);
    updateTimer = setInterval(() => {
        progress.value = song.currentTime;
    }, 1000)
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}
