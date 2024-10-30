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
let displayValue;

const one = document.querySelector('#one'); //for 1
one.addEventListener('click', () => {
    arrForScreen.push(1);
    displayValue = +(arrForScreen.join(''));
    screen.textContent = displayValue;
})

const two = document.querySelector('#two'); //for 2
two.addEventListener('click', () => {
    arrForScreen.push(2);
    displayValue = +(arrForScreen.join(''));
    screen.textContent = displayValue;
})


//Reloads
    //Keep typing numbers --> 
        //stores inside the var firstOperand
    //Press any Operators 
        //stops storing inside the var firstOperand
            //firstOperand = displayValue;
            //displayValue = null;
        //stores the value of the operator
            //operator.textContent = button pressed as string;    
    //Type other numbers
        //stores inside the var secondOperand
            //secondOperand = displayValue;
    //type equal
        //let solution = operate(firstOperand, secondOperand, operator)
        //Show Solution on the display
            //screen.textContent = solution;