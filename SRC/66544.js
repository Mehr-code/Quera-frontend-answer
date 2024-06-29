// انتخاب تگ اچ2 برای نمایش وضعیت فعلی
const statusDisplay = document.querySelector(".game--status");

// تعیین بازیکن اولیه
let currentPlayer = "X";

// تعیین وضعیت فعلی خانه‌های بازی در قالب یک آرایه
let gameState = ["", "", "", "", "", "", "", "", ""];

// تعیین وضعیت فعال بودن بازی
let gameActive = true;

// شرایط برد بازی با توجه به شماره خانه ها در هر عضو موجود در آرایه
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// تابعی که پیام نوبت بازیکن فعلی را برمی‌گرداند
const currentPlayerTurn = () => `نوبت ${currentPlayer} است`;

// نمایش پیام نوبت بازیکن فعلی
statusDisplay.innerHTML = currentPlayerTurn();

// تابعی که خانه کلیک شده را به‌روزرسانی می‌کند
function handleCellPlayed(clickedCell, clickedCellIndex) {
  // بروز رسانی خانه بازی شده در آرایه
  gameState[clickedCellIndex] = currentPlayer;
  // نمایش علامت بازیکن در خانه کلیک شده
  clickedCell.innerHTML = currentPlayer;
  // بررسی برنده شدن بازیکن
  checkForWinner();
}

// تابعی که نوبت بازیکن را تغییر می‌دهد
function handlePlayerChange() {
  // تغییر بازیکن فعلی
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  // نمایش پیام نوبت بازیکن جدید
  statusDisplay.innerHTML = currentPlayerTurn();
}

// تابعی که هنگام کلیک بر روی خانه‌ها اجرا می‌شود
function handleCellClick(clickedCellEvent) {
  // تگ خانه ای که در آن کلیک شده
  const clickedCell = clickedCellEvent.target;

  // بدست آوردن دیتا سِل ایندکس تگ
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute("data-cell-index")
  );

  // بررسی وضعیت خانه کلیک شده و فعال بودن بازی
  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
  }

  // به‌روزرسانی خانه کلیک شده
  handleCellPlayed(clickedCell, clickedCellIndex);

  // تغییر نوبت بازیکن در صورتی که بازی فعال باشد
  if (gameActive) {
    handlePlayerChange();
  }
}

// تابعی که بازی را بازنشانی می‌کند
function handleRestartGame() {
  // تنظیم بازیکن به X
  currentPlayer = "X";
  // بازنشانی وضعیت خانه‌ها
  gameState = ["", "", "", "", "", "", "", "", ""];
  // فعال کردن بازی
  gameActive = true;
  // نمایش پیام نوبت بازیکن فعلی
  statusDisplay.innerHTML = currentPlayerTurn();
  // پاک کردن علامت‌های خانه‌ها
  document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
}

// تابعی که بررسی می‌کند آیا بازیکن برنده شده است یا خیر
function checkForWinner() {
  let roundWon = false;

  // بررسی شرایط برد
  for (let i = 0; i < winningConditions.length; i++) {
    const winCondition = winningConditions[i];
    let a = gameState[winCondition[0]];
    let b = gameState[winCondition[1]];
    let c = gameState[winCondition[2]];

    // از این دور حلقه فور بگذر و برو دور بعدی و خط های بعدی رو اجرا نکن
    if (a === "" || b === "" || c === "") {
      continue;
    }
    // بررسی شرایط برد
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  // نمایش پیام برنده شدن بازیکن
  if (roundWon) {
    statusDisplay.innerHTML = `داشمون ${currentPlayer} برد!`;
    gameActive = false;
    return;
  }

  // بررسی مساوی شدن بازی
  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    statusDisplay.innerHTML = "داور برد!";
    gameActive = false;
    return;
  }
}

// افزودن رویداد کلیک به خانه‌ها
document
  .querySelectorAll(".cell")
  .forEach((cell) => cell.addEventListener("click", handleCellClick));

// افزودن رویداد کلیک به دکمه بازنشانی بازی
document
  .querySelector(".game--restart")
  .addEventListener("click", handleRestartGame);
