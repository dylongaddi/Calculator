let current = 0
let num = 0
let displayValue = ''
let operator = ''

//controls for displaying numbers
const numpad = document.querySelectorAll('.number');
    numpad.forEach((button) => {
        button.addEventListener('click', function () {
            displayValue += Number(this.textContent)
            updateDisplay();
            if (operator === ' + ' || operator === ' - ' || operator === ' x ' || operator === ' ÷ ') {
                getNum();
            } else {
                getCurrent();
            }
        });
    });


const operators = document.querySelectorAll('.operator');
    operators.forEach((button) => {
        button.addEventListener('click', function () {
            resetDisplay();
            operator = this.innerHTML
    });
});
    


function displaySolution() {
    
}


function getCurrent() {
    current = parseInt(displayValue)
}

function getNum() {
    num = parseInt(displayValue)
}

function updateDisplay () {
    document.getElementById('displayNumber').textContent = displayValue
}

function resetDisplay() {
    displayValue = ''
}



//function for choosing operator and calling operating functions
function operate (operator, current, num) {
    if (operator === ' + ') {
        return add(current, num);
    } else if (operator === ' - ') {
        return subtract(current, num);
    } else if (operator === ' ÷ ') {
        return divide (current, num);
    } else if (operator === ' x ') {
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

