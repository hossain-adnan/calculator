//Variables
let firstOperand;
let operator;
let secondOperand;
let operandArray = [];
let operandValue; //type -> number
let solution;

let pressedOperator = false;
let pressedEquals = false;

//Write on Screen
const screen = document.querySelector('.screen');

//Number is clicked
const numbers = document.querySelectorAll('.number');  

numbers.forEach(number => number.addEventListener('click', (e) => {

    // if(pressedEquals === true){
    //     operandArray = []; // line 62
    // }

    operandArray.push(e.target.value);
    operandValue = +(operandArray.join(''));

    screen.textContent = operandValue;

    if (pressedOperator === false) {
        firstOperand = operandValue;
    } else {
        secondOperand = operandValue;
        // pressedOperator = false; 
    }
}))

// Negative sign
const sign = document.querySelector('#sign');
sign.addEventListener('click', () => {
    if(solution != null) {
        solution = solution * (-1);
        firstOperand = solution;
        screen.textContent = firstOperand;
    }else if(secondOperand != null) {
        secondOperand = secondOperand * (-1);
        screen.textContent = secondOperand;
    } else {
        firstOperand = firstOperand * (-1);
        screen.textContent = firstOperand;
    }
})

//Operator is clicked
let operatorRef = document.querySelectorAll('.operator');

operatorRef.forEach(element => element.addEventListener('click', (e) => {
    pressedOperator = true;
    operandArray = [];
    operandValue = null;

    if(firstOperand === null){
        firstOperand = solution;
    }

    operator = e.target.value;
    console.log(operator);
    screen.textContent = screen.textContent + operator;
}));

//Equal is pressed
const equals = document.querySelector('#equals');

equals.addEventListener('click', () => {
    console.log(`firstOperand: ${firstOperand}`);
    console.log(`secondOperand: ${secondOperand}`);
    console.log(`operator: ${operator}`);

    pressedEquals = true;
    operandArray = []; // Debug not showing more than 1 digit line 21

    let solutionStr = (operate(firstOperand, secondOperand, operator)).toFixed(2);
    let solutionNum = parseFloat(solutionStr);
    // let solutionString = initialSolution.toString();

    if (solutionStr.replace('.', '').length > 6) { 
        solution = solutionNum.toExponential(3);
    } else if (!Number.isInteger(solutionNum)) {
        solution = solutionNum;
    } else {
        solution = Math.trunc(solutionNum);
    }
    //Show Solution on the display
    screen.textContent = solution;
    console.log(`screen: ${screen.textContent}`);

    pressedOperator = false; //Undo any operator pressed 
    firstOperand = null;
    secondOperand = null;
});

// AC button
const autoClear = document.querySelector('#ac');
autoClear.addEventListener('click', () => {
    firstOperand = null;
    operator = null;
    secondOperand = null;
    operandArray = [];
    operandValue = null;
    solution = null;
    pressedOperator = false;
    pressedEquals = false;

    screen.textContent = '';
})

//Percentage
const percentage = document.querySelector('#percentage')
percentage.addEventListener('click', () => {
    let percent = (+(screen.textContent)/100);
    screen.textContent = percent;
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
