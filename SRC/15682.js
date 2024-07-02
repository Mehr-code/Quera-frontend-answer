const box = document.getElementById("square");

const rect = box.getBoundingClientRect();
let topBox = rect.top + window.scrollY;
let leftBox = rect.left + window.scrollX;

function moveBox(e) {
  let move = 1;
  if (e.shiftKey) {
    move = 10;
  }
  switch (e.key) {
    case "ArrowUp":
      topBox -= move;
      break;

    case "ArrowDown":
      topBox += move;
      break;

    case "ArrowLeft":
      leftBox -= move;
      break;

    case "ArrowRight":
      leftBox += move;
      break;

    default:
      return;
  }

  box.style.top = `${topBox}px`;
  box.style.left = `${leftBox}px`;
}

document.addEventListener("keydown", moveBox);
