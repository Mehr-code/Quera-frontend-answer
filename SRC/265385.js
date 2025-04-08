const box = document.getElementById("moving-box");
const button = document.getElementById("toggle-animation");

let isAnimating = false;
let direction = 1; // 1 برای جلو، -1 برای عقب
let position = 0;
let intervalId = null;

const maxDistance = 300;
const duration = 2000; // میلی‌ثانیه
const fps = 60;
const step = maxDistance / (duration / (1000 / fps)); // چقدر هر بار حرکت کنه

function animate() {
  intervalId = setInterval(() => {
    position += step * direction;

    if (position >= maxDistance || position <= 0) {
      direction *= -1; // برعکس کن
    }

    box.style.left = position + "px";
  }, 1000 / fps);
}

button.addEventListener("click", () => {
  if (!isAnimating) {
    animate();
    button.textContent = "Pause Animation";
  } else {
    clearInterval(intervalId);
    button.textContent = "Start Animation";
  }

  isAnimating = !isAnimating;
});
