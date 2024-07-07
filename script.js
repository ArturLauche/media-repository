const videoPlayer = document.getElementById('video-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const seekSlider = document.getElementById('seek-slider');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');
const muteBtn = document.getElementById('mute-btn');
const volumeHighIcon = document.getElementById('volume-high-icon');
const volumeMuteIcon = document.getElementById('volume-mute-icon');
const volumeSlider = document.getElementById('volume-slider');
const fullscreenBtn = document.getElementById('fullscreen-btn');

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    } else {
        videoPlayer.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }
});

// Seek functionality
videoPlayer.addEventListener('timeupdate', () => {
    const percentage = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    seekSlider.value = percentage;
    currentTime.textContent = formatTime(videoPlayer.currentTime);
});

seekSlider.addEventListener('input', () => {
    const time = (seekSlider.value / 100) * videoPlayer.duration;
    videoPlayer.currentTime = time;
});

// Mute/Unmute functionality
muteBtn.addEventListener('click', () => {
    if (videoPlayer.muted) {
        videoPlayer.muted = false;
        volumeHighIcon.classList.remove('hidden');
        volumeMuteIcon.classList.add('hidden');
        volumeSlider.value = videoPlayer.volume;
    } else {
        videoPlayer.muted = true;
        volumeHighIcon.classList.add('hidden');
        volumeMuteIcon.classList.remove('hidden');
        volumeSlider.value = 0;
    }
});

// Volume control functionality
volumeSlider.addEventListener('input', () => {
    videoPlayer.volume = volumeSlider.value;
    if (volumeSlider.value === '0') {
        videoPlayer.muted = true;
        volumeHighIcon.classList.add('hidden');
        volumeMuteIcon.classList.remove('hidden');
    } else {
        videoPlayer.muted = false;
        volumeHighIcon.classList.remove('hidden');
        volumeMuteIcon.classList.add('hidden');
    }
});

// Fullscreen functionality
fullscreenBtn.addEventListener('click', () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        videoPlayer.requestFullscreen();
    }
});

// Helper function to format time
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Update duration when video metadata is loaded
videoPlayer.addEventListener('loadedmetadata', () => {
    duration.textContent = formatTime(videoPlayer.duration);
});
