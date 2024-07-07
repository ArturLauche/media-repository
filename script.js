document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('custom-video');
    const playPauseButton = document.getElementById('play-pause');
    const muteButton = document.getElementById('mute');
    const fullScreenButton = document.getElementById('full-screen');
    const seekBar = document.getElementById('seek-bar');

    playPauseButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = 'Pause';
        } else {
            video.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    muteButton.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
            muteButton.textContent = 'Mute';
        } else {
            video.muted = true;
            muteButton.textContent = 'Unmute';
        }
    });

    fullScreenButton.addEventListener('click', () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen(); // Firefox
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen(); // Chrome and Safari
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen(); // IE/Edge
        }
    });

    video.addEventListener('timeupdate', () => {
        const value = (100 / video.duration) * video.currentTime;
        seekBar.value = value;
    });

    seekBar.addEventListener('input', () => {
        const time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
    });
});
