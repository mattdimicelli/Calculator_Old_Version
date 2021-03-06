function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
  }
}

let displayValue = "";
const display = document.querySelector(".display");

const btn0 = document.querySelector(".zero");
btn0.addEventListener("click", () => {
  displayValue += "0";
  updateDisplay(displayValue);
});
const btn1 = document.querySelector(".one");
btn1.addEventListener("click", () => {
  displayValue += "1";
  updateDisplay(displayValue);
});
const btn2 = document.querySelector(".two");
btn2.addEventListener("click", () => {
  displayValue += "2";
  updateDisplay(displayValue);
});
const btn3 = document.querySelector(".three");
btn3.addEventListener("click", () => {
  displayValue += "3";
  updateDisplay(displayValue);
});
const btn4 = document.querySelector(".four");
btn4.addEventListener("click", () => {
  displayValue += "4";
  updateDisplay(displayValue);
});
const btn5 = document.querySelector(".five");
btn5.addEventListener("click", () => {
  displayValue += "5";
  updateDisplay(displayValue);
});
const btn6 = document.querySelector(".six");
btn6.addEventListener("click", () => {
  displayValue += "6";
  updateDisplay(displayValue);
});
const btn7 = document.querySelector(".seven");
btn7.addEventListener("click", () => {
  displayValue += "7";
  updateDisplay(displayValue);
});
const btn8 = document.querySelector(".eight");
btn8.addEventListener("click", () => {
  displayValue += "8";
  updateDisplay(displayValue);
});
const btn9 = document.querySelector(".nine");
btn9.addEventListener("click", () => {
  displayValue += "9";
  updateDisplay(displayValue);
});
function updateDisplay(displayValue) {
  display.textContent = displayValue;
}
