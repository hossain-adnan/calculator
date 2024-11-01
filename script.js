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

        firstOperand = operandValue;
    })
} 

if (pressedOperator) {
    one.addEventListener('click', () => {
        operandArray.push(1);
        operandValue = +(operandArray.join(''));
        screen.textContent = operandValue;

        secondOperand = operandValue;

        // console.log(operandArray);
        // console.log(operandValue);
        console.log(secondOperand);
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
    pressedOperator = true;
    operandArray = [];
    operator = '+';
    console.log(operator);
    screen.textContent = '+' ;
})

//type equal
const equals = document.querySelector('#equals')

equals.addEventListener('click', () => {
    console.log(`first: ${firstOperand}`);
    console.log(`second: ${secondOperand}`);
    console.log(`operator: ${operator}`);

    let solution = operate(firstOperand, secondOperand, operator);
    //Show Solution on the display
    screen.textContent = solution;

})

   
