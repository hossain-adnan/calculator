
//Variables
let firstOperand;
let operator;
let secondOperand;

let pressedOperator = false;
let pressedEquals = false;

//Write on Screen
const screen = document.querySelector('.screen');

let operandArray = [];
let operandValue; //type -> number

const one = document.querySelector('#one');  
one.addEventListener('click', (e) => {
    operandArray.push(e.target.value);
    operandValue = +(operandArray.join(''));

    screen.textContent = operandValue;

    if (pressedOperator === false) {
        firstOperand = operandValue;
    } else {
        secondOperand = operandValue;
    }
})

//When any operator is clicked
let operatorRef = document.querySelectorAll('.operator');

operatorRef.forEach(element => element.addEventListener('click', (e) => {
    pressedOperator = true; //Use function
    operandArray = [];
    operator = e.target.value;
    console.log(operator);
    screen.textContent = e.target.value;
}));

//type equal
const equals = document.querySelector('#equals')

equals.addEventListener('click', () => {
    console.log(`firstOperand: ${firstOperand}`);
    console.log(`secondOperand: ${secondOperand}`);
    console.log(`operator: ${operator}`);

    let solution = operate(firstOperand, secondOperand, operator);
    //Show Solution on the display
    screen.textContent = solution;

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
