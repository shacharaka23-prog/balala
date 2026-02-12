const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const container = document.querySelector('.container');

let noClickCount = 0;
let avoidMode = false;
let yesBtnScale = 1;
let moveOnClick = false;

yesBtn.addEventListener('click', () => {
  container.innerHTML = `
    <h1 style="color:#e75480; font-size:2.5rem; margin-bottom:30px;">
      ngerti kok kangen kan hahahaha! 🎉
    </h1>
 
      akhirnya balikan! 💕
    </div>
  `;
  document.body.style.background = "linear-gradient(135deg, #ffb6c1, #ffe4e1)";
});

noBtn.addEventListener('click', () => {
  noClickCount++;
  yesBtnScale += 0.3;
  yesBtn.style.transform = `scale(${yesBtnScale})`;

  if (noClickCount === 1) {
    noBtn.textContent = "serius ?";
  } else if (noClickCount === 2) {
    noBtn.textContent = "mana bisa";
  } else if (noClickCount === 3) {
    noBtn.textContent = "coba tekan aku kalo serius";
    avoidMode = true;
    moveOnClick = true;
  } else if (moveOnClick) {
    // Setelah berhasil ditekan, tombol akan berpindah posisi acak setiap kali ditekan
    moveNoButton();
  }
});

noBtn.addEventListener('mouseover', () => {
  if (avoidMode) {
    moveNoButton();
  }
});

function moveNoButton() {
  const containerRect = container.getBoundingClientRect();
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  const maxX = containerRect.width - btnWidth;
  const maxY = containerRect.height - btnHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}
