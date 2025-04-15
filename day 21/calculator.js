let display = document.getElementById("display");

let currentInput = "";
let operator = "";
let previousInput = "";

function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function setOperator(operations) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculateResult();
  }
  operator = operations;
  previousInput = currentInput;
  currentInput = "";
}

function calculateResult() {
  if(currentInput === "" || previousInput === "") return;

  let result = '';
  switch(operator) {
    case "+": 
      result = parseFloat(previousInput) + parseFloat(currentInput);
      console.log(result);
      break;
    case "-":
      result = parseFloat(previousInput) - parseFloat(currentInput);
      break;
    case "*":
      result = parseFloat(previousInput) * parseFloat(currentInput);
      break;
    case "/":
      if (currentInput === "0") {
        alert("Cannot divide by zero");
        return;
      }
      result = parseFloat(previousInput) / parseFloat(currentInput);
      break;
    default: 
      console.log("opeator not provided or something missing");
      break;
  }
  display.value = result;
  previousInput = result;
  currentInput = "";
  opertor = "";
}

function clearDisplay() {
  currentInput = "";
  operator = "";
  previousInput = "";
  display.value = "";
}