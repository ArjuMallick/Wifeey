let currentAudio = null;

// Plays mood songs
function playSong(mood) {
  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = document.getElementById(mood);
  currentAudio.play();
}

// Plays footer song
function playSpecial() {
  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = document.getElementById('special');
  currentAudio.play();
}
