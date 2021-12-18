let firstNum = 0;
let secondNum = 0;
let displayValue = '';
let operator = '';

//controls for displaying numbers
const numpad = document.querySelectorAll('.number');
    numpad.forEach((button) => {
        button.addEventListener('click', function () {
            displayValue += Number(this.textContent);
            updateDisplay();
            if (operator === ' + ' || operator === ' - ' || operator === ' x ' || operator === ' ÷ ') {
                getSecondNum();
            } else {
                getFirstNum();
            }
        });
    });


const operators = document.querySelectorAll('.operator');
    operators.forEach((button) => {
        button.addEventListener('click', function () {
            resetDisplay();
            operator = this.innerHTML;
    });
});
    


function displaySolution() {
    
}


function getFirstNum() {
    firstNum = parseInt(displayValue)
}

function getSecondNum() {
    secondNum = parseInt(displayValue)
}

function updateDisplay () {
    document.getElementById('displayNumber').textContent = displayValue
}

function resetDisplay() {
    displayValue = ''
}



//function for choosing operator and calling operating functions
function operate (operator, firstNum, secondNum) {
    if (operator === ' + ') {
        return add(firstNum, secondNum);
    } else if (operator === ' - ') {
        return subtract(firstNum, secondNum);
    } else if (operator === ' ÷ ') {
        return divide (firstNum, secondNum);
    } else if (operator === ' x ') {
        return multiply (firstNum, secondNum);
    }
}
    

//functions for operating numbers
function add (firstNum, secondNum) {
    return firstNum += secondNum
}

function subtract(firstNum, secondNum) {
    return firstNum -= secondNum
}

function divide (firstNum, secondNum) {
    if (secondNum === 0) {
        return 'ERROR- CANNOT DIVIDE BY ZERO'
    } else {
    return firstNum /= secondNum
    }
}

function multiply (firstNum, secondNum) {
    return firstNum *= secondNum
}

