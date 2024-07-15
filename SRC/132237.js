const leftSide = document.querySelector(".left-side");
const rightSide = document.querySelector(".right-side");

const allToTheRight = document.querySelector(".all-to-right");

const checkToRight = document.querySelector(".checked-to-right");

const checkToLeft = document.querySelector(".checked-to-left");

const allToTheLeft = document.querySelector(".all-to-left");

// InitialValues
let leftList = [
  { id: "item1", checked: false, title: "PHP" },
  { id: "item2", checked: false, title: "Python" },
  { id: "item3", checked: false, title: "Ruby" },
  { id: "item4", checked: false, title: "C++" },
];
let rightList = [
  { id: "item5", checked: false, title: "HTML" },
  { id: "item6", checked: false, title: "Css" },
  { id: "item7", checked: false, title: "JavaScript" },
  { id: "item8", checked: false, title: "Java" },
];

renderDom(leftList, rightList);

// Render Dom
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

checkToRight.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".left-side .box");
  console.log(boxes);
  boxes.forEach(function (el) {
    if (el.firstElementChild.checked) {
      console.log(el.firstElementChild.id);
    }
  });
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
