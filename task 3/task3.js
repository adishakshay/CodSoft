let displayValue = '0';
let operator = '';
let firstOperand = null;

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  operator = '';
  firstOperand = null;
  updateDisplay();
}

function appendNumber(number) {
  if (displayValue === '0' || operator === '=') {
    displayValue = number;
    operator = '';
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function setOperator(op) {
  if (firstOperand === null) {
    firstOperand = parseFloat(displayValue);
  } else if (operator !== '') {
    calculateResult();
  }

  operator = op;
  displayValue = operator;
  updateDisplay();
}

function calculateResult() {
  const secondOperand = parseFloat(displayValue.slice(1));
  let result;

  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = firstOperand / secondOperand;
      break;
    default:
      result = secondOperand;
  }

  displayValue = result.toString();
  operator = '=';
  updateDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
  updateDisplay();
});
