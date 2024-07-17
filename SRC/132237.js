// انتخاب طرف چپ
const leftSide = document.querySelector(".left-side");

// انتخاب طرف راست
const rightSide = document.querySelector(".right-side");

// انتخاب دکمه همه به راست
const allToTheRight = document.querySelector(".all-to-right");

// انتخاب دکمه چک خورده به راست
const checkToRight = document.querySelector(".checked-to-right");

// انتخاب دکمه چک خورده به چپ
const checkToLeft = document.querySelector(".checked-to-left");

// انتخاب دکمه همه به چپ
const allToTheLeft = document.querySelector(".all-to-left");

// در حالت اولیه آرایه آیتم های سمت چپ
let leftList = [
  { id: "item1", checked: false, title: "PHP" },
  { id: "item2", checked: false, title: "Python" },
  { id: "item3", checked: false, title: "Ruby" },
  { id: "item4", checked: false, title: "C++" },
];

// در حالت اولیه آرایه های سمت راست
let rightList = [
  { id: "item5", checked: false, title: "HTML" },
  { id: "item6", checked: false, title: "Css" },
  { id: "item7", checked: false, title: "JavaScript" },
  { id: "item8", checked: false, title: "Java" },
];

// رندر کردن آرایه ها در سایت
renderDom(leftList, rightList);

// تابع رندر کردن آرایه ها در سایت
function renderDom(leftListToRender, rightListToRender) {
  leftListToRender.forEach((item) => {
    leftSide.innerHTML += `<div class="box">
        <input type="checkbox" class="input-box" id="${item.id}" />
        <label for="${item.id}">${item.title}</label>
        </div>`;
  });

  rightListToRender.forEach((item) => {
    rightSide.innerHTML += `<div class="box">
          <input type="checkbox" class="input-box" id="${item.id}" />
          <label for="${item.id}">${item.title}</label>
          </div>`;
  });

  registerEvents();
}

// Clear Dom
function clearDom() {
  document.querySelectorAll(".side").forEach((el) => {
    el.innerHTML = "";
  });
}

// Event
function registerEvents() {}

// تابع دکمه همه به سمت راست
allToTheRight.addEventListener("click", () => {
  // چک میکنیم که لیست راست چیزی داره که انتقال بدیم؟
  if (leftList == false) {
    return;
  } else {
    // غیز فعال کردن دکمه های به چپ
    allToTheRight.classList.add("disabled");
    checkToRight.classList.add("disabled");
    // برای محکم کاری نوشتم که دکمه های به راست حتما فعال باشه
    allToTheLeft.classList.remove("disabled");
    checkToLeft.classList.remove("disabled");
    // از لیست آرایه چپ میدیم راست
    Array.prototype.push.apply(rightList, leftList);
    // آرایه چپ خالی باید بشه
    leftList = [];
    // خالی کردن باکس ها برای نمایش دادن اطلاعات جدید
    clearDom();
    // نمایش اطلاعات جدید
    renderDom(leftList, rightList);
  }
});

// تابع دکمه علامت دار ها به سمت راست
checkToRight.addEventListener("click", () => {
  // انتخاب آیتم های موجود در باکس سمت چپ
  const items = document.querySelectorAll(".left-side .box");
  // به ازای هر آیتم موجود اول چک میکنیم که علامت دار هست یا نه
  items.forEach(function (el) {
    if (el.firstElementChild.checked) {
      // اگر علامت دار بود، آیدشو میگیریم
      const id = el.firstElementChild.id;
      // به ازای آرایه سمت چپ اگر اون عضو در آرایه آیدی اش با آیدی ما یکی بود
      leftList.forEach(function (el) {
        if (el.id === id) {
          // اون آیتم میره توی باکس راست
          rightList.push(el);
          // ایندکس اش هم میگیریم تا در آرایه هم انتقال صورت بگیره
          let index = leftList.indexOf(el);
          leftList.splice(index, 1);
        }
      });
    }
  });
  // اینجا چک میکنیم که اگر تمامی آیتم های موجود در سمت چپ علامت دار شد
  // باید دکمه های انتقال به راست غیر فعال بشه
  if (leftList == false) {
    allToTheLeft.classList.remove("disabled");
    checkToLeft.classList.remove("disabled");
    allToTheRight.classList.add("disabled");
    checkToRight.classList.add("disabled");
  }

  // خالی کردن باکس ها برای نمایش دادن اطلاعات جدید
  clearDom();
  // نمایش اطلاعات جدید
  renderDom(leftList, rightList);
});

// تابع دکمه چک خورده ها به سمت چپ
checkToLeft.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".right-side .box");

  boxes.forEach(function (el) {
    if (el.firstElementChild.checked) {
      const id = el.firstElementChild.id;
      rightList.forEach(function (el) {
        if (el.id === id) {
          leftList.push(el);
          let index = rightList.indexOf(el);
          rightList.splice(index, 1);
        }
      });
    }
  });
  if (rightList == false) {
    allToTheLeft.classList.add("disabled");
    checkToLeft.classList.add("disabled");
    allToTheRight.classList.remove("disabled");
    checkToRight.classList.remove("disabled");
  }
  clearDom();
  renderDom(leftList, rightList);
});

allToTheLeft.addEventListener("click", () => {
  if (rightList == false) {
    return;
  } else {
    allToTheLeft.classList.add("disabled");
    checkToLeft.classList.add("disabled");
    allToTheRight.classList.remove("disabled");
    checkToRight.classList.remove("disabled");
    Array.prototype.push.apply(leftList, rightList);
    rightList = [];
    clearDom();
    renderDom(leftList, rightList);
  }
});
