import { obj } from "./data.js";
document.querySelector(".btn").addEventListener("click", () => {
  const inPut = document.querySelector(".input").value.split("");
  let result = document.querySelector(".result");
  let num = 0;
  inPut.forEach((element) => {
    if (obj.hasOwnProperty(element)) {
      num += Number(obj[element]);
    }
  });
  result.textContent = num;
});
