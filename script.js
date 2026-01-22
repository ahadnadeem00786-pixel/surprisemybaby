const heartsContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement('span');
  heart.innerHTML = '💗';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (3 + Math.random() * 3) + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);

// ✅ BUTTON WORKS NOW
const enterBtn = document.getElementById('enterBtn');

enterBtn.addEventListener('click', () => {
  alert("Welcome to her world 💖✨");
});
