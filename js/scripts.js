let displayValue = ''; // current value of the display

let display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

const add = (a, b) => {
    console.log(a+b)
    return a + b
}

const subtract = (a, b) => {
    console.log(a-b)
    return a - b
}

const multiply = (a, b) => {
    console.log(a*b)
    return a * b
}

const divide = (a, b) => {
    console.log(a/b)
    return b === 0 ? 0 : a / b
}

let firstOperand = null
let operator = null
let waitingForSecondOperand = false

const operate = (operator, num1, num2) => {
    switch (operator) {
        case "+":
            return add(num1, num2)
        case "-":
            return ubtract(num1, num2)
        case "*":
            return multiply(num1, num2)
        case "/":
            return divide(num1, num2)
        default:
            console.log("hi")
    }
}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        // clear button 
        if (button.textContent === "ac") {
            firstOperand = null
            operator = null
            waitingForSecondOperand = false
            displayValue = ''
            display.textContent = 0
        } else if (button.textContent === "=") { //equal button
            console.log("equals")
        } else {
            
        }
    })
})




