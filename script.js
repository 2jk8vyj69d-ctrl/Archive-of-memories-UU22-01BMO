const music = document.getElementById('music');
const btn = document.getElementById('musicBtn');

btn.addEventListener('click', async () => {
  try {
    if (music.paused) {
      await music.play();
      btn.textContent = '♫ Pause our song';
    } else {
      music.pause();
      btn.textContent = '♫ Play our song';
    }
  } catch (e) {
    alert('Нажми ещё раз: браузер иногда блокирует музыку до первого клика.');
  }
});
