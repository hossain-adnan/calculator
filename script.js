//Variables
let firstOperand;
let operator;
let secondOperand;
let operandArray = [];
let operandValue; //type -> number

let pressedOperator = false;
let pressedEquals = false;

//Write on Screen
const screen = document.querySelector('.screen');

//Number is clicked
const numbers = document.querySelectorAll('.number');  

numbers.forEach(number => number.addEventListener('click', (e) => {
    if(pressedEquals === true){
        operandArray = [];
        // firstOperand = null;
    }

    operandArray.push(e.target.value);
    operandValue = +(operandArray.join(''));

    screen.textContent = operandValue;

    if (pressedOperator === false) {
        firstOperand = operandValue;
    } else {
        secondOperand = operandValue;
        pressedOperator = false;
    }
}))

//Operator is clicked
let operatorRef = document.querySelectorAll('.operator');

operatorRef.forEach(element => element.addEventListener('click', (e) => {
    pressedOperator = true; //Use function
    operandArray = [];
    operandValue = null;

    operator = e.target.value;
    console.log(operator);
    screen.textContent = operator;
}));

//Equal is pressed
const equals = document.querySelector('#equals')

equals.addEventListener('click', () => {
    console.log(`firstOperand: ${firstOperand}`);
    console.log(`secondOperand: ${secondOperand}`);
    console.log(`operator: ${operator}`);
    console.log(`screen: ${screen.textContent}`)

    pressedEquals = true;

    let solution = operate(firstOperand, secondOperand, operator);
    //Show Solution on the display
    screen.textContent = solution;

})

// AC
const autoClear = document.querySelector('#ac');
autoClear.addEventListener('click', () => {
    firstOperand = null;
    secondOperand = null;
    screen.textContent = '';
})

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
