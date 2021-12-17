let current = 0

let displayValue = ''

const numpad = document.querySelectorAll('#numpad > button');
    numpad.forEach((button) => {
        button.addEventListener('click', function () {
            displayValue += this.textContent
            updateDisplay()
        });
    });

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
    return current /= num
}

function multiply (current, num) {
    return current *= num
}

