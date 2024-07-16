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
  if (leftList == false) {
    return;
  } else {
    allToTheRight.classList.add("disabled");
    checkToRight.classList.add("disabled");
    allToTheLeft.classList.remove("disabled");
    checkToLeft.classList.remove("disabled");
    Array.prototype.push.apply(rightList, leftList);
    leftList = [];
    clearDom();
    renderDom(leftList, rightList);
  }
});

// تابع دکمه چک خورده ها به سمت راست
checkToRight.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".left-side .box");

  boxes.forEach(function (el) {
    if (el.firstElementChild.checked) {
      const id = el.firstElementChild.id;
      leftList.forEach(function (el) {
        if (el.id === id) {
          rightList.push(el);
          let index = leftList.indexOf(el);
          leftList.splice(index, 1);
        }
      });
    }
  });
  if (leftList == false) {
    allToTheLeft.classList.remove("disabled");
    checkToLeft.classList.remove("disabled");
    allToTheRight.classList.add("disabled");
    checkToRight.classList.add("disabled");
  }
  clearDom();
  renderDom(leftList, rightList);
});

// تابع دکمه چک خورده ها به سمت راست
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
