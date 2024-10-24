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
    return (operator === '+') ? add(firstNumber, secondNumber):
     (operator === '-') ? subtract(firstNumber, secondNumber):
     (operator === '*') ? multiply(firstNumber, secondNumber):
     (operator === '/') ? devide(firstNumber, secondNumber):
     null;
}

