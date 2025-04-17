// Typing animation
const phrases = ["@supeeerkydst", "a Developer", "building cool things"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false, isEnd = false;

function loop() {
  isEnd = false;
  document.querySelector(".typed-text").innerHTML = currentPhrase.join('');

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      document.querySelector(".typed-text").innerHTML = currentPhrase.join('');
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (200 - 100) + 100;
  const time = isEnd ? 1000 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();

// Theme toggle
const toggleButton = document.getElementById("toggle-mode");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

