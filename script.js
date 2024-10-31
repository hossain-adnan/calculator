//Basic Function
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a /b;

//Variables
let firstOperand;
let operator;
let secondOperand;

//Operate Function
function operate(firstOperand, secondOperand, operator) {
    return (operator === '+') ? add(firstOperand, secondOperand):
     (operator === '-') ? subtract(firstOperand, secondOperand):
     (operator === '*') ? multiply(firstOperand, secondOperand):
     (operator === '/') ? divide(firstOperand, secondOperand):
     null;
}

//Write on Screen
const screen = document.querySelector('.screen');
let arrForScreen = [];
let displayValue; //type -> number


const equals = document.querySelector('#equals')

equals.addEventListener('click', () => {
    //stores inside the var secondOperand
    // secondOperand = displayValue;
    let solution = operate(1, 2, '+');
    //Show Solution on the display
    console.log(operate);
    screen.textContent = solution;
})

const one = document.querySelector('#one'); //for 1
one.addEventListener('click', () => {
    arrForScreen.push(1);
    displayValue = +(arrForScreen.join(''));
    screen.textContent = displayValue;
})

//Type other numbers for the secondOperand
const two = document.querySelector('#two'); //for 2
two.addEventListener('click', () => {
    arrForScreen.push(2);
    displayValue = +(arrForScreen.join(''));
    screen.textContent = displayValue;
})

//When any operator is clicked
let operatorRef = document.querySelector('.add'); //for add +
operatorRef.addEventListener('click', () => {

    //stops storing inside the var firstOperand
    firstOperand = displayValue;
    displayValue = null;

    //stores the value of the operator
    operator.textContent = '+' // operatorRef.value;
    screen.textContent = '+' ;

    // //Type other numbers for the secondOperand
    // const two = document.querySelector('#two'); //for 2
    // two.addEventListener('click', () => {
    //     arrForScreen.push(2);
    //     displayValue = +(arrForScreen.join(''));
    //     screen.textContent = displayValue; })
})

    //type equal

   
