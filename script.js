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