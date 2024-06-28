const btn = document.getElementById("btn");
const avatar = document.getElementById("avatar");
btn.addEventListener("click", () => {
  const value = btn.textContent.trim();
  btn.textContent = value === "Show!" ? "Hide!" : "Show!";
  avatar.classList.toggle("w3-hide");
});
