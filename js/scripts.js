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

let num1 = 3
let operator = "+"
let num2 = 5


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

operate('/', 2, 3)