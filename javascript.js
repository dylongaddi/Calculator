let current = 0
let num = 0
let displayValue = ''
let operator = ''

//controls for displaying numbers
const numpad = document.querySelectorAll('.number');
    numpad.forEach((button) => {
        button.addEventListener('click', function () {
            displayValue += parseInt(this.textContent)
            updateDisplay();
            if (operator === 'add' || operator === 'subtract' || operator === 'multiply' || operator === 'divide') {
                getNum();
            } else {
                getCurrent();
            }
        });
    });

const operators = document.querySelectorAll('.operator');
    operators.forEach((operator) => {
        operator.addEventListener('click', chooseOperator)

    });

function getCurrent() {
    current = parseInt(displayValue)
}

function getNum() {
    num 
}

function chooseOperator () {
    if (this.textContent === '+') {
        operator = 'add'
    }
}

console.log(operator)

function updateDisplay () {
    document.getElementById('displayNumber').textContent = displayValue
}




//function for choosing operator and calling operating functions
function operate (operator, current, num) {
    if (operator === 'add') {
        return add(current, num);
    } else if (operator === 'subtract') {
        return subtract(current, num);
    } else if (operator === 'divide') {
        return divide (current, num);
    } else if (operator === 'multiply') {
        return multiply (current, num);
    }
}
    

//functions for operating numbers
function add (current, num) {
    return current += num
}

function subtract(current, num) {
    return current -= num
}

function divide (current, num) {
    if (num === 0) {
        return 'ERROR- CANNOT DIVIDE BY ZERO'
    } else {
    return current /= num
    }
}

function multiply (current, num) {
    return current *= num
}

