const display = document.querySelector("#display");
const dot = document.querySelector("#point");
const equals = document.querySelector("#calculate");
const clear = document.querySelector("#clear");
const backspace = document.querySelector("#del");
const nums = [
    document.querySelector("#num0"),
    document.querySelector("#num1"),
    document.querySelector("#num2"),
    document.querySelector("#num3"),
    document.querySelector("#num4"),
    document.querySelector("#num5"),
    document.querySelector("#num6"),
    document.querySelector("#num7"),
    document.querySelector("#num8"),
    document.querySelector("#num9"),
];

const opCodes = {
    add: document.querySelector("#opAdd"),
    sub: document.querySelector("#opSub"),
    mul: document.querySelector("#opMul"),
    div: document.querySelector("#opDiv"),
};

function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    }
    return;
}

/**
 * 
 * @param {String} operator The math operation to be used
 * @param {Number} op1 The first operand
 * @param {Number} op2 The second operand
 */
function operate(operator, op1, op2) {
   switch(operator) {
    case "+":
        add(op1, op2);
        break;
    case "-":
        subtract(op1, op2);
        break;
    case "*":
        multiply(op1, op2);
        break;
    case "/":
        divide(op1, op2);
        break;
   } 
}

for (let i = 0; i < 10; i++) {
    nums[i].addEventListener('click', () => {
        display.textContent += i;
    });
}