let current = 0

let displayValue = document.querySelector('.number').textContent

function updateDisplay () {
    const numpad = document.querySelectorAll('#numpad > button');
        numpad.forEach((button) => {
            button.addEventListener('click', () => {
                document.querySelector('.number').textContent = button.textContent
            });
        });
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

updateDisplay();