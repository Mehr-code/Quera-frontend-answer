let horizontalLines = [
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
];
let verticalLines = [
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
];

// استفاده از دام کانتت لودد جای لود که باعث سریع تر شدن کار میشود
document.addEventListener("DOMContentLoaded", () => {
  // نوبت اولیه بازی
  let currentPlayer = "blue";

  // انتخاب و نمایش دادن نوبت بازیکن
  const playerTurnElement = document.getElementById("player_turn");
  playerTurnElement.textContent = currentPlayer;

  // Add event listeners to all horizontal lines
  const horizontalLines = document.querySelectorAll(".horizontal_line");

  horizontalLines.forEach((line, index) => {
    line.addEventListener("click", () =>
      handleLineClick(line, "horizontal", index)
    );

    line.addEventListener("mouseenter", () =>
      handleMouseEnter(line, "horizontal", index)
    );
    line.addEventListener("mouseleave", () =>
      handleMouseLeave(line, "horizontal", index)
    );
  });

  // Add event listeners to all vertical lines
  const verticalLines = document.querySelectorAll(".vertical_line");
  verticalLines.forEach((line, index) => {
    line.addEventListener("click", () =>
      handleLineClick(line, "vertical", index)
    );
  });

  function locLine(index) {
    let i = 0;
    while (index > i * 7) {
      i++;
    }
    let gruop = i;
    index = index % 7;
    return [index, gruop];
  }

  function handleLineClick(line, type, index) {
    let [num, gruop] = locLine(index);
    if (type === "horizontal") {
      if (!horizontalLines[gruop][num]) {
        line.classList.add(`${currentPlayer}`);
        horizontalLines[gruop][num] = true;
      }
    } else if (type === "vertical") {
      if (!verticalLines[gruop][num]) {
        line.classList.add(`${currentPlayer}`);
        verticalLines[gruop][num] = true;
      }
    }

    const boxCompleted = checkForBoxCompletion(type, index);
    if (!boxCompleted) {
      currentPlayer = currentPlayer === "blue" ? "red" : "blue";
    }
    updateStatus();
  }
  function handleMouseEnter(line, type, index) {
    let [num, gruop] = locLine(index);
    if (type === "horizontal") {
      if (!horizontalLines[gruop][num]) {
        line.classList.add(`${currentPlayer}`);
      }
    } else if (type === "vertical") {
      if (!verticalLines[gruop][num]) {
        line.classList.add(`${currentPlayer}`);
      }
    }

    updateStatus();
  }

  function handleMouseLeave(line, type, index) {
    let [num, gruop] = locLine(index);
    if (type === "horizontal") {
      if (!horizontalLines[gruop][num]) {
        line.classList.remove(`${currentPlayer}`);
      }
    } else if (type === "vertical") {
      if (!verticalLines[gruop][num]) {
        line.classList.remove(`${currentPlayer}`);
      }
    }

    updateStatus();
  }
  function checkForBoxCompletion(type, index) {
    // Check for box completion logic based on the line clicked (horizontal or vertical)
    // and the index of the line.
    // This is a simplified version; you can expand it to match your specific game rules.

    // Let's assume each box is identified by a set of 4 lines
    // and you can check if those 4 lines are all active to determine if the box is completed.

    // Return true if a box is completed, otherwise false.
    // Update the color of the box based on the current player.

    // For simplicity, we assume here that no box is completed.
    return false;
  }

  function updateStatus() {
    playerTurnElement.textContent = currentPlayer;
  }
});
