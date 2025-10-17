// Fade-in sections on scroll
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.15
  }
);

fadeEls.forEach(el => observer.observe(el));

// Character carousel
const charWrapper = document.getElementById('charWrapper');
const charSlides = charWrapper.children;
let charIndex = 0;

function setActiveChar() {
  Array.from(charSlides).forEach((slide, i) => {
    slide.classList.toggle('active', i === charIndex);
  });
}

function updateChar() {
  charWrapper.style.transform = `translateX(-${charIndex * 100}%)`;
  setActiveChar();
}

document.getElementById('charNext').addEventListener('click', () => {
  charIndex = (charIndex + 1) % charSlides.length;
  updateChar();
});

document.getElementById('charPrev').addEventListener('click', () => {
  charIndex = (charIndex - 1 + charSlides.length) % charSlides.length;
  updateChar();
});

setActiveChar();

// Gameplay carousel
const gameWrapper = document.getElementById('gameWrapper');
const gameSlides = gameWrapper.children;
let gameIndex = 0;

function setActiveGame() {
  Array.from(gameSlides).forEach((slide, i) => {
    slide.classList.toggle('active', i === gameIndex);
  });
}

function updateGame() {
  gameWrapper.style.transform = `translateX(-${gameIndex * 100}%)`;
  setActiveGame();
}

document.getElementById('gameNext').addEventListener('click', () => {
  gameIndex = (gameIndex + 1) % gameSlides.length;
  updateGame();
});

document.getElementById('gamePrev').addEventListener('click', () => {
  gameIndex = (gameIndex - 1 + gameSlides.length) % gameSlides.length;
  updateGame();
});

setActiveGame();
