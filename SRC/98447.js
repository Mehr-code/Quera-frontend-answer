// استفاده از دام کانتت لودد جای لود که باعث سریع تر شدن کار میشود
document.addEventListener("DOMContentLoaded", () => {
  // نمایش خط های افقی با آرایه
  let horizontalArray = [
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
  ];

  // نمایش خط های عمودی با آرایه
  let verticalArray = [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
  ];

  // نوبت اولیه بازی
  let currentPlayer = "blue";

  // انتخاب و نمایش دادن نوبت بازیکن
  const playerTurnElement = document.getElementById("player_turn");
  playerTurnElement.textContent = currentPlayer;

  // انتخاب تمامی خط های افقی در قالب یک متغیر
  const horizontalLines = document.querySelectorAll(".horizontal_line");
  // ... به ازای هر خط افقی
  horizontalLines.forEach((line, index) => {
    // اگر کلیکی رخ داد تابع هندل کلیک را صدا بزن
    line.addEventListener("click", () =>
      handleLineClick(line, "horizontal", index)
    );

    // اگر موس آمد روی خط تابع هندل موس اینتر را صدا بزن
    line.addEventListener("mouseenter", () =>
      handleMouseEnter(line, "horizontal", index)
    );

    // اگر موس از خط رفت تابع هندل موس لیو را صدا بزن
    line.addEventListener("mouseleave", () =>
      handleMouseLeave(line, "horizontal", index)
    );
  });

  // انتخاب تمامی خط های عمودی در قالب یک متغیر
  const verticalLines = document.querySelectorAll(".vertical_line");
  verticalLines.forEach((line, index) => {
    line.addEventListener("click", () =>
      handleLineClick(line, "vertical", index)
    );

    // اگر موس آمد روی خط تابع هندل موس اینتر را صدا بزن
    line.addEventListener("mouseenter", () =>
      handleMouseEnter(line, "horizontal", index)
    );

    // اگر موس از خط رفت تابع هندل موس لیو را صدا بزن
    line.addEventListener("mouseleave", () =>
      handleMouseLeave(line, "horizontal", index)
    );
  });

  // تابع لوکیشن خط بر اساس ایندکس که ردیف و شماره خط را میبابد
  function locLine(index, type) {
    if (type === "horizontal") {
      const row = Math.floor(index / 7);
      index = index % 7;
      return [index, row];
    } else if (type === "vertical") {
      const row = Math.floor(index / 8);
      index = index % 8;
      return [index, row];
    }
  }

  // این تابع خطی که کلیک شده را بررسی میکند
  function handleLineClick(line, type, index) {
    // لوکیشن خط را پیدا میکند
    let [num, row] = locLine(index, type);

    // اگر خط افقی باشد
    if (type === "horizontal") {
      if (!horizontalArray[row][num]) {
        lineChanger(line, row, num);
        horizontalArray[row][num] = `${currentPlayer === "blue" ? "X" : "O"}`;
      }
    }
    // اگر خط عمودی باشد
    else if (type === "vertical") {
      if (!verticalArray[row][num]) {
        lineChanger(line, row, num);
        verticalArray[row][num] = `${currentPlayer === "blue" ? "X" : "O"}`;
      }
    }

    const boxCompleted = checkForBoxCompletion(type, index);
    if (!boxCompleted) {
      currentPlayer = currentPlayer === "blue" ? "red" : "blue";
    }
    updateStatus();
  }
  // تابع برای وقتی که موس روی خط آمد
  function handleMouseEnter(line, type, index) {
    // لوکیشن خط شناسایی میشه
    let [num, row] = locLine(index, type);
    // توابع برای عوض کردن رنگ خط ها
    if (type === "horizontal") {
      if (!horizontalArray[row][num]) {
        line.classList.add(`${currentPlayer}`);
      }
    } else if (type === "vertical") {
      if (!verticalArray[row][num]) {
        line.classList.add(`${currentPlayer}`);
      }
    }

    updateStatus();
  }

  function handleMouseLeave(line, type, index) {
    // لوکیشن خط شناسایی میشه
    let [num, row] = locLine(index, type);

    // توابع برای عوض کردن رنگ خط ها
    if (type === "horizontal") {
      if (!horizontalArray[row][num]) {
        line.classList.remove(`${currentPlayer}`);
      }
    } else if (type === "vertical") {
      if (!verticalArray[row][num]) {
        line.classList.remove(`${currentPlayer}`);
      }
    }

    updateStatus();
  }

  // تابع عوض کردن رنگ خط
  function lineChanger(line) {
    line.classList.add(`${currentPlayer}`);
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
