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

// calculator functionalities
const keys = calculator.querySelector(".keys");
const operation = document.getElementById("c-operation");
const display = document.getElementById("c-result");
const operators = ["+", "-", "×", "÷"];

keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const operatedNum = operation.textContent;
    const displayedNum = display.textContent;

    if (!action) {
      if (operatedNum === "0") {
        operation.textContent = keyContent;
      } else {
        operation.textContent = operatedNum + keyContent;
      }
    }

    if (action === "decimal") {
      if (!operatedNum.includes(".")) {
        operation.textContent = operatedNum + ".";
      }
    }

    if (
      action === "add" ||
      action === "substract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      let lastChar = operatedNum.substr(operatedNum.length - 1);

      if (!operators.some((str) => str.includes(lastChar))) {
        switch (action) {
          case "add":
            operation.textContent = operatedNum + "+";
            break;
          case "substract":
            operation.textContent = operatedNum + "-";
            break;
          case "multiply":
            operation.textContent = operatedNum + "×";
            break;
          case "divide":
            operation.textContent = operatedNum + "÷";
            break;
        }
      }
    }

    if (action === "calculate") {
      let fixedOperation = operatedNum
        .replaceAll("×", "*")
        .replaceAll("÷", "/");
      display.textContent = eval(fixedOperation);
    }
    if (action === "clear") {
      operation.textContent = "0";
      display.textContent = "0";
    }

    if (action === "delete") {
      if (operation.textContent.length !== 1) {
        operation.textContent = operatedNum.replace(/.$/, "");
      } else {
        operation.textContent = "0";
      }
    }
  }
});
