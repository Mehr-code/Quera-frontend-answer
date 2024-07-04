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

const numbersContainer = document.getElementById("numbers-container");

function creatSpan(numbers) {
  numbers.forEach((el) => {
    const span = document.createElement("span");
    span.textContent = `${el}`;
    numbersContainer.appendChild(span);
  });
}

creatSpan(numbers);

const btn = document.getElementById("submit-btn");

function func1() {
  const item = document.getElementById("item-input").value;
  const count = document.getElementById("count-input").value;
  let index = numbers.indexOf(Number(item));
  for (let i = 0; i < count; i++) {
    const temp = numbers[index + 1];
    numbers[index + 1] = numbers[index];
    numbers[index] = temp;
    index++;
  }
  numbersContainer.innerHTML = "";
  creatSpan(numbers);
}

btn.addEventListener("click", func1);
