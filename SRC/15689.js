const input = document.getElementById("color_input");
const box = document.getElementById("color_preview");

input.addEventListener("input", () => {
  const value = input.value;
  const validHex = /^[0-9A-Fa-f]+$/;

  if ((value.length !== 3 && value.length !== 6) || !validHex.test(value)) {
    box.style.backgroundColor = "#000";
  } else {
    box.style.backgroundColor = `#${value}
    `;
  }
});
