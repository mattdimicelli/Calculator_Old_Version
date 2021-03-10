// Initialize variables
let operatorToUse = "";
let currentValue = "0";
let previousNum = "noNumberYet"; //this inital value is a placeholder
let previousOperator = "";
let result;
let btnPressedBeforeEqualsWasNumber; //flag variable
let lastBtnPressedWasEquals; // flag variable

//Set display to initially show 0
const display = document.querySelector(".display");
updateDisplay(currentValue);

//Selectors for the different buttons with event listeners
const btnDecimalPoint = document.querySelector(".point");
btnDecimalPoint.addEventListener("click", decimalPointAction);

const btn0 = document.querySelector(".zero");
btn0.addEventListener("click", zeroAction);

const btn1 = document.querySelector(".one");
btn1.addEventListener("click", oneAction);

const btn2 = document.querySelector(".two");
btn2.addEventListener("click", twoAction);

const btn3 = document.querySelector(".three");
btn3.addEventListener("click", threeAction);

const btn4 = document.querySelector(".four");
btn4.addEventListener("click", fourAction);

const btn5 = document.querySelector(".five");
btn5.addEventListener("click", fiveAction);

const btn6 = document.querySelector(".six");
btn6.addEventListener("click", sixAction);

const btn7 = document.querySelector(".seven");
btn7.addEventListener("click", sevenAction);

const btn8 = document.querySelector(".eight");
btn8.addEventListener("click", eightAction);

const btn9 = document.querySelector(".nine");
btn9.addEventListener("click", nineAction);

const btnPlus = document.querySelector(".plus");
btnPlus.addEventListener("click", plusAction);

const btnMinus = document.querySelector(".minus");
btnMinus.addEventListener("click", minusAction);

const btnTimes = document.querySelector(".times");
btnTimes.addEventListener("click", timesAction);

const btnDividedBy = document.querySelector(".dividedBy");
btnDividedBy.addEventListener("click", divideAction);

const btnBackspace = document.querySelector(".backspace");
btnBackspace.addEventListener("click", backspaceAction);

const btnEquals = document.querySelector(".equals");
btnEquals.addEventListener("click", equalsAction);

const keyup = document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "0":
      btn0.classList.remove("border");
      break;
    case "1":
      btn1.classList.remove("border");
      break;
    case "2":
      btn2.classList.remove("border");
      break;
    case "3":
      btn3.classList.remove("border");
      break;
    case "4":
      btn4.classList.remove("border");
      break;
    case "5":
      btn5.classList.remove("border");
      break;
    case "6":
      btn6.classList.remove("border");
      break;
    case "7":
      btn7.classList.remove("border");
      break;
    case "8":
      btn8.classList.remove("border");
      break;
    case "9":
      btn9.classList.remove("border");
      break;
    case ".":
      btnDecimalPoint.classList.remove("border");
      break;
    case "=":
      btnEquals.classList.remove("border");
      break;
    case "/":
      btnDividedBy.classList.remove("border");
      break;
    case "*":
      btnTimes.classList.remove("border");
      break;
    case "-":
      btnMinus.classList.remove("border");
      break;
    case "+":
      btnPlus.classList.remove("border");
      break;
    case "Enter":
      btnEquals.classList.remove("border");
      break;
    case "Escape":
      clear.classList.remove("border");
      break;
    case "Backspace":
      btnBackspace.classList.remove("border");
      break;
    case "Delete":
      clear.classList.remove("border");
      break;
  }
});

const keyboard = document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "0":
      btn0.classList.add("border");
      zeroAction();
      break;
    case "1":
      btn1.classList.add("border");
      oneAction();
      break;
    case "2":
      btn2.classList.add("border");
      twoAction();
      break;
    case "3":
      btn3.classList.add("border");
      threeAction();
      break;
    case "4":
      btn4.classList.add("border");
      fourAction();
      break;
    case "5":
      btn5.classList.add("border");
      fiveAction();
      break;
    case "6":
      btn6.classList.add("border");
      sixAction();
      break;
    case "7":
      btn7.classList.add("border");
      sevenAction();
      break;
    case "8":
      btn8.classList.add("border");
      eightAction();
      break;
    case "9":
      btn9.classList.add("border");
      nineAction();
      break;
    case ".":
      btnDecimalPoint.classList.add("border");
      decimalPointAction();
      break;
    case "=":
      btnEquals.classList.add("border");
      equalsAction();
      break;
    case "/":
      btnDividedBy.classList.add("border");
      divideAction();
      break;
    case "*":
      btnTimes.classList.add("border");
      timesAction();
      break;
    case "-":
      btnMinus.classList.add("border");
      minusAction();
      break;
    case "+":
      btnPlus.classList.add("border");
      plusAction();
      break;
    case "Enter":
      btnEquals.classList.add("border");
      equalsAction();
      break;
    case "Escape":
      clear.classList.add("border");
      clearAction();
      break;
    case "Backspace":
      btnBackspace.classList.add("border");
      backspaceAction();
      break;
    case "Delete":
      clear.classList.add("border");
      clearAction();
      break;
  }
});
//The clear button clears the display and "resets" the calculator
const clear = document.querySelector(".clear");
clear.addEventListener("click", clearAction);
function zeroAction() {
  resetAfterEquals();
  if (currentValue != "0") {
    //Only adds a "zero" to the display if there isn't
    currentValue += "0"; //one there already.. Avoids displaying "00"
    updateDisplay(currentValue);
  }
  btnPressedBeforeEqualsWasNumber = true;
  lastBtnPressedWasEquals = false;
}
function oneAction() {
  resetAfterEquals();
  if (currentValue === "0") {
    //changes the display to "1" if there's only a "0" there
    currentValue = "1";
    updateDisplay(currentValue);
  } else {
    currentValue += "1"; //Adds "1" to the display if there's more than just a "0"
    updateDisplay(currentValue);
  }
  btnPressedBeforeEqualsWasNumber = true;
  lastBtnPressedWasEquals = false;
}
function twoAction() {
  resetAfterEquals();
  if (currentValue === "0") {
    currentValue = "2";
    updateDisplay(currentValue);
  } else {
    currentValue += "2";
    updateDisplay(currentValue);
  }
  btnPressedBeforeEqualsWasNumber = true;
  lastBtnPressedWasEquals = false;
}
function threeAction() {
  resetAfterEquals();
  if (currentValue === "0") {
    currentValue = "3";
    updateDisplay(currentValue);
  } else {
    currentValue += "3";
    updateDisplay(currentValue);
  }
  btnPressedBeforeEqualsWasNumber = true;
  lastBtnPressedWasEquals = false;
}
function fourAction() {
  resetAfterEquals();
  if (currentValue === "0") {
    currentValue = "4";
    updateDisplay(currentValue);
  } else {
    currentValue += "4";
    updateDisplay(currentValue);
  }
  btnPressedBeforeEqualsWasNumber = true;
  lastBtnPressedWasEquals = false;
}
function fiveAction() {
  resetAfterEquals();
  if (currentValue === "0") {
    currentValue = "5";
    updateDisplay(currentValue);
  } else {
    currentValue += "5";
    updateDisplay(currentValue);
  }
  btnPressedBeforeEqualsWasNumber = true;
  lastBtnPressedWasEquals = false;
}
function sixAction() {
  resetAfterEquals();
  if (currentValue === "0") {
    currentValue = "6";
    updateDisplay(currentValue);
  } else {
    currentValue += "6";
    updateDisplay(currentValue);
  }
  btnPressedBeforeEqualsWasNumber = true;
  lastBtnPressedWasEquals = false;
}
function sevenAction() {
  resetAfterEquals();
  if (currentValue === "0") {
    currentValue = "7";
    updateDisplay(currentValue);
  } else {
    currentValue += "7";
    updateDisplay(currentValue);
  }
  btnPressedBeforeEqualsWasNumber = true;
  lastBtnPressedWasEquals = false;
}
function eightAction() {
  resetAfterEquals();
  if (currentValue === "0") {
    currentValue = "8";
    updateDisplay(currentValue);
  } else {
    currentValue += "8";
    updateDisplay(currentValue);
  }
  btnPressedBeforeEqualsWasNumber = true;
  lastBtnPressedWasEquals = false;
}
function nineAction() {
  resetAfterEquals();
  if (currentValue === "0") {
    currentValue = "9";
    updateDisplay(currentValue);
  } else {
    currentValue += "9";
    updateDisplay(currentValue);
  }
  btnPressedBeforeEqualsWasNumber = true;
  lastBtnPressedWasEquals = false;
}
function plusAction() {
  operatorToUse = "+";
  showCalculationSoFar(operatorToUse); //prints the result of the calculation SO FAR (even though the user hasn't hit "equals") to the display
  btnPressedBeforeEqualsWasNumber = false;
  lastBtnPressedWasEquals = false;
}
function minusAction() {
  operatorToUse = "-";
  showCalculationSoFar(operatorToUse);
  btnPressedBeforeEqualsWasNumber = false;
  lastBtnPressedWasEquals = false;
}
function timesAction() {
  operatorToUse = "*";
  showCalculationSoFar(operatorToUse);
  btnPressedBeforeEqualsWasNumber = false;
  lastBtnPressedWasEquals = false;
}
function divideAction() {
  operatorToUse = "/";
  showCalculationSoFar(operatorToUse);
  btnPressedBeforeEqualsWasNumber = false;
  lastBtnPressedWasEquals = false;
}
function backspaceAction() {
  if (currentValue.length > 1) {
    currentValue = currentValue.slice(0, -1);
    updateDisplay(currentValue);
  }
}
function equalsAction() {
  //only does a calculation if the user hit a number (as opposed to an operator) before hitting equals,
  // and only if there are two numbers to "calcuate" (eg. add, subtract, divide, multiply ,etc)
  if (
    btnPressedBeforeEqualsWasNumber === true &&
    previousNum != "noNumberYet"
  ) {
    let result = operate(previousNum, currentValue, operatorToUse);
    if (isNaN(result)) {
      //if the user does something WEIRD, show error message
      updateDisplay("**ERROR ERROR DOES NOT COMPUTE**");
    } else if (isFinite(result) === false) {
      //if the user divides a number by 0, for example
      updateDisplay("**ERROR ERROR DOES NOT COMPUTE**");
    } else {
      updateDisplay(result);
    }
  }
  lastBtnPressedWasEquals = true;
}
function decimalPointAction() {
  resetAfterEquals();
  btnPressedBeforeEqualsWasNumber = false;
  lastBtnPressedWasEquals = false;
  if (currentValue.includes(".") === false) {
    currentValue += ".";
    updateDisplay(currentValue);
  }
}
function clearAction() {
  currentValue = "0";
  operatorToUse = "";
  previousNum = "noNumberYet";
  previousOperator = "";
  btnPressedBeforeEqualsWasNumber = "";
  updateDisplay(currentValue);
  lastBtnPressedWasEquals = false;
}
function highlightButton(btn) {}
//updateDisplay() prints the results of the calculations and the operands to the display
function updateDisplay(currentValue) {
  let numberValue = Number(currentValue);
  if (Number.isInteger(numberValue) === false) {
    display.textContent = numberValue.toFixed(102 + 2);
  } else {
    display.textContent = currentValue;
  }
}
//prints the result of the calculation SO FAR (even though the user hasn't hit "equals") to the display
function showCalculationSoFar(operatorToUse) {
  if (previousNum === "noNumberYet") {
    previousNum = currentValue;
    currentValue = "0";
    previousOperator = operatorToUse;
  } else {
    let result = operate(previousNum, currentValue, previousOperator);
    if (isNaN(result)) {
      updateDisplay("**ERROR ERROR DOES NOT COMPUTE**");
    } else if (isFinite(result) === false) {
      updateDisplay("**ERROR ERROR DOES NOT COMPUTE**");
    } else {
      updateDisplay(result);
      previousOperator = operatorToUse;
      currentValue = "0";
      previousNum = result;
    }
  }
}
// "Resets" the calculator, only if the equals button was the last button that the user hit.  This
// allows to enter a new (second), unrelated calculation, without getting the
// values from the first calculation mixed in.
function resetAfterEquals() {
  if (lastBtnPressedWasEquals === true) {
    currentValue = "0";
    operatorToUse = "";
    previousNum = "noNumberYet";
    previousOperator = "";
    btnPressedBeforeEqualsWasNumber = "";
  }
}
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
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}
