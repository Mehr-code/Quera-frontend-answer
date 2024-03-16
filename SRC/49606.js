const grey = document.querySelector("#grey");
const white = document.querySelector("#white");
const blue = document.querySelector("#blue");
const yellow = document.querySelector("#yellow");
const body = document.querySelector("body");

grey.addEventListener("click", function () {
  body.style.backgroundColor = "grey";
});
white.addEventListener("click", function () {
  body.style.backgroundColor = "white";
});
blue.addEventListener("click", function () {
  body.style.backgroundColor = "blue";
});
yellow.addEventListener("click", function () {
  body.style.backgroundColor = "yellow";
});
