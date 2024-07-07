// dark theme things
const toggle = document.getElementById("toggle");
const calculator = document.getElementById("calculator-app");

let currentTheme = localStorage.getItem("theme") || ""; // dark

if (currentTheme === "dark") {
  calculator.classList.add("dark");
  toggle.checked = true;
}

function handleTheme() {
  calculator.classList.toggle("dark");
  currentTheme = toggle.checked ? "dark" : "light";

  localStorage.setItem("theme", currentTheme);
}
// end of dark theme things
