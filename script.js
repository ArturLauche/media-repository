document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("custom-video");
    const playPauseButton = document.getElementById("play-pause");
    const muteUnmuteButton = document.getElementById("mute-unmute");
    const seekBar = document.getElementById("seek-bar");
    const volumeBar = document.getElementById("volume-bar");
    const fullscreenButton = document.getElementById("fullscreen");

    playPauseButton.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = "⏸️";
        } else {
            video.pause();
            playPauseButton.textContent = "▶️";
        }
    });

    muteUnmuteButton.addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            muteUnmuteButton.textContent = "🔊";
        } else {
            video.muted = true;
            muteUnmuteButton.textContent = "🔇";
        }
    });

    seekBar.addEventListener("input", function() {
        const time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
    });

    video.addEventListener("timeupdate", function() {
        const value = (100 / video.duration) * video.currentTime;
        seekBar.value = value;
    });

    volumeBar.addEventListener("input", function() {
        video.volume = volumeBar.value / 100;
    });

    fullscreenButton.addEventListener("click", function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });
});
