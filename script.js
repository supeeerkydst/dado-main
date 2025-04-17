// Typing animation
const phrases = ["@supeeerkydst", "a Developer", "building across realities"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false, isEnd = false;

function loop() {
  isEnd = false;
  document.querySelector(".typed-text").innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j > 0) {
      currentPhrase.pop();
      j--;
    }

    if (j === phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
  }

  const speed = isEnd ? 1500 : isDeleting ? 60 : 100;
  setTimeout(loop, speed);
}

loop();

// Theme toggle
const toggleButton = document.getElementById("toggle-mode");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
