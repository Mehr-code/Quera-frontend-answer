const CHANGE_TYPE = {
  UP: "UP",
  DOWN: "DOWN",
};
const ERROR_TYPE = {
  NOT_FOUND: "NOT_FOUND",
  NOT_POSSIBLE: "NOT_POSSIBLE",
  INVALID_INPUT: "INVALID_INPUT",
};
let numbers = [4, 6, 10, 23, 0, 24, 30, 2];

// فضایی که قراره اعداد در قالب اِسپن قرار بگیره
const numbersContainer = document.getElementById("numbers-container");

// تابع ای برای ساختن لیست اعداد در تگ اِسپن
function creatSpan(numbers) {
  numbers.forEach((el) => {
    const span = document.createElement("span");
    span.textContent = `${el}`;
    numbersContainer.appendChild(span);
  });
}

// تابع برای اینکه بفهمم جهت جا به جایی کدام سمت است
function whichDirection() {
  // انتخاب تمام رادیو باتن ها
  const radios = document.getElementsByName("type");
  let selectedValue;
  // گرفتن مقدار رادیو باتن کلیک شده
  for (const radio of radios) {
    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }
  }
  if (selectedValue === "DOWN") {
    return true;
  }
}
// تابع جا به جایی اعداد
function swappingNumbers(item, count) {
  let index = numbers.indexOf(Number(item));
  for (let i = 0; i < count; i++) {
    const temp = numbers[index + 1];
    numbers[index + 1] = numbers[index];
    numbers[index] = temp;
    index++;
  }
}
// لیست اعداد را بساز با آرایه ی نامبرز
creatSpan(numbers);
// انتخاب دکمه سابمیت
const btn = document.getElementById("submit-btn");

// تابع اصلی برای جا به جایی اعداد
function func1() {
  // گرفتن عدد در قالب آیتم
  const item = document.getElementById("item-input").value;
  // چقد جا به جا بشه
  const count = document.getElementById("count-input").value;
  // در کدام جهت جا به جا کنیم
  if (whichDirection()) {
    numbers = numbers.reverse();

    // فراخواندن تابع جا به جایی
    swappingNumbers(item, count);

    numbers = numbers.reverse();
  } else {
    swappingNumbers(item, count);
  }

  // پاک کردن فضای اعداد برای دوباره گذاشتن اظلاعات پس از جابه جایی
  numbersContainer.innerHTML = "";
  creatSpan(numbers);
}

// هنگامی که سابمیت کلیک شد تابع اصلی جا به جایی را فرا بخوان
btn.addEventListener("click", func1);
