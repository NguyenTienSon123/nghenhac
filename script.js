// Hàm phát nhạc
function playSong(src) {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = src;
    audioPlayer.play();
}
