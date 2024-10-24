// Basic Function
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const devide = (a, b) => a / b;

//Variables
let firstNumber;
let operator;
let secondNumber;

//Operate Function
function operate(firstNumber, secondNumber, operator) {
    if (operator === '+') return add(firstNumber, secondNumber);
    if (operator === '-') return subtract(firstNumber, secondNumber);
    if (operator === '*') return multiply(firstNumber, secondNumber);
    if (operator === '+') return add(firstNumber, secondNumber);
}

console.log(operate(3, 3, '+'));