//Basic Function
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a /b;

//Operate Function
function operate(firstOperand, secondOperand, operator) {
    return (operator === '+') ? add(firstOperand, secondOperand):
     (operator === '-') ? subtract(firstOperand, secondOperand):
     (operator === '*') ? multiply(firstOperand, secondOperand):
     (operator === '/') ? divide(firstOperand, secondOperand):
     null;
}

//Buttons
const one = document.querySelector('#one'); 
const two = document.querySelector('#two'); 

//Variables
let firstOperand;
let operator;
let secondOperand;

//Write on Screen
let pressedEquals = false;
let pressedOperator = false;

const screen = document.querySelector('.screen');

let operandArray = [];
let operandValue; //type -> number

if (!pressedOperator) {

    one.addEventListener('click', () => {
        operandArray.push(1);
        operandValue = +(operandArray.join(''));
        screen.textContent = operandValue;

        firstOperand = operandValue;
    })

    two.addEventListener('click', () => {
        operandArray.push(2);
        operandValue = +(operandArray.join(''));
        screen.textContent = operandValue;

        secondOperand = operandValue;
    })
}

//When any operator is clicked
//for add +
let operatorRef = document.querySelector('#add');

operatorRef.addEventListener('click', () => {

    operandValue = null;
    pressedOperator = true;

    //stores the value of the operator
    operator = '+' // operatorRef.value;
    screen.textContent = '+' ;

    console.log(operandValue);
    console.log(pressedOperator);
    console.log(operator);
})

//type equal
const equals = document.querySelector('#equals')

equals.addEventListener('click', () => {
    //stores inside the var secondOperand
    // secondOperand = operandValue;
    let solution = operate(firstOperand, secondOperand, '+');
    //Show Solution on the display
    console.log(operate);

    screen.textContent = '';
    // screen.textContent = solution;
})

   
