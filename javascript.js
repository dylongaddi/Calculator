let firstNum = 0;
let secondNum = 0;
let displayValue = '';
let operator = '';
let solution = '';
let stringFirstNum = ''
let stringSecondNum = ''

//controls for displaying numbers
const numpad = document.querySelectorAll('.number');
    numpad.forEach((button) => {
        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = 'grey'
        });
        button.addEventListener('mouseout', function () {
            button.style.backgroundColor = 'white'
        })
        button.addEventListener('click', function displayNumbers () {
            displayValue += parseFloat(this.textContent);
            updateDisplay();
            if (operator === ' + ' || operator === ' - ' || operator === ' x ' || operator === ' ÷ ') {
                getSecondNum();
            } else {
                getFirstNum();
            }
        });
    });

//controls for choosing operator
const operators = document.querySelectorAll('.operator');
    operators.forEach((button) => {
        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = 'grey'
        });
        button.addEventListener('mouseout', function () {
            button.style.backgroundColor = 'lightblue'
        })
        button.addEventListener('click', function chooseOperator () {
            resetDisplay();
            operator = this.innerHTML;
            document.getElementById('displayOperator').textContent = operator
    });
});

document.getElementById('equals').onclick = displaySolution;
document.getElementById('delete').addEventListener('click', deleteNum)
document.getElementById('clear').onclick = clearDisplay;;

function displaySolution() {
    if (operator === '') {
        return;
    } else {
        displayValue = operate(operator, firstNum, secondNum);
        updateDisplay();
        operator = '';
        firstNum = parseFloat(displayValue);
        solution = displayValue;
        document.getElementById('equalsSign').textContent = '=';
        clearDisplayVariables();
        secondNum = 0
    }
}



function deleteNum () {
    if (displayValue.length > 1) {
    document.getElementById('displayNumber').textContent = displayValue.slice(0, -1)
    displayValue = displayValue.slice(0, -1)
        if (!(secondNum === 0)) {
            deleteSecondNum();
        } else if (secondNum === 0) {
            deleteFirstNum();
        }
    }
}

function deleteSecondNum() {
    document.getElementById('secondNum').textContent = displayValue
    secondNum = parseFloat(displayValue)
}

function deleteFirstNum() {
    document.getElementById('firstNum').textContent = displayValue
    firstNum = parseFloat(displayValue)
}


function clearDisplayVariables () {
    document.getElementById('firstNum').textContent = solution.toString();
    document.getElementById('secondNum').textContent = ''
    document.getElementById('equalsSign').textContent = ''
    document.getElementById('displayOperator').textContent = ''
}

function clearDisplay() {
    resetDisplay();
    firstNum = 0
    secondNum = 0
    stringFirstNum = ''
    stringSecondNum = ''
    operator = ''
    document.getElementById('displayNumber').textContent = 0
    document.getElementById('firstNum').textContent = ''
    document.getElementById('secondNum').textContent = ''
    document.getElementById('equalsSign').textContent = ''
    document.getElementById('displayOperator').textContent = ''
}

function getFirstNum() {
    firstNum = parseFloat(displayValue)
    stringFirstNum = firstNum.toString();
    document.getElementById('firstNum').textContent = stringFirstNum;
}

function getSecondNum() {
    secondNum = parseFloat(displayValue)
    stringSecondNum = secondNum.toString();
    document.getElementById('secondNum').textContent = stringSecondNum;
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
    let solution = firstNum += secondNum
    return solution.toString();
}

function subtract(firstNum, secondNum) {
    let solution = firstNum -= secondNum
    return solution.toString();
}

function divide (firstNum, secondNum) {
    if (secondNum === 0) {
        return 'ERROR- CANNOT DIVIDE BY ZERO'
    } else {
        let solution = firstNum /= secondNum
        return solution.toString();
    }
}

function multiply (firstNum, secondNum) {
    let solution = firstNum *= secondNum
    return solution.toString();
}

