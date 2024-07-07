function toggleFullscreen() {
        if (!document.fullscreenElement) {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }

    function updateSeekBar() {
        seekBar.value = (video.currentTime / video.duration) * 100;
    }

    function seek() {
        const time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
    }

    function updateVolume() {
        video.volume = volumeBar.value;
    }

    playPauseButton.addEventListener('click', togglePlayPause);
    muteButton.addEventListener('click', toggleMute);
    fullscreenButton.addEventListener('click', toggleFullscreen);
    seekBar.addEventListener('change', seek);
    volumeBar.addEventListener('change', updateVolume);
    video.addEventListener('timeupdate', updateSeekBar);
});
