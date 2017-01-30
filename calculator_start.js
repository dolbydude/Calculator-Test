var current_input = "0";
var memory = "0";
var operator = 0;
var div_by_zero_error = "Divide By Zero Error";
var mode = "DEG";
/**
 * Helper function for displaying the current input
 */
function displayCurrentInput() {
    document.getElementById('screen').value = current_input;
}
/**
 * Adds a digit to the current input
 */
function addDigit(dig) {
    if (current_input.length < 18) {
        if ((eval(current_input) == 0) && (current_input.indexOf(".") == -1)) {
            current_input = dig;
        }
        else {
            current_input = current_input + dig;
        }
    }
    displayCurrentInput();
}
/**
 * Adds a decimal to the current input
 */
function addDecimal() {
    if (current_input.length == 0) {
        //no leading ".", use "0."
        current_input = "0.";
    }
    else {
        // First make sure one doesn't exist
        if (current_input.indexOf(".") == -1) {
            current_input = current_input + ".";
        }
    }
    displayCurrentInput();
}
/**
 * Clears everything.
 */
function allClear() {
    current_input = "0";
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
/**
 * Stores the last operator pushed for multiply, divide, add, or subtract.
 */
function storeOperator(op) {
    if (op.indexOf("*") > -1) {
        operator = 1;
    }; //codes for *
    if (op.indexOf("/") > -1) {
        operator = 2;
    }; // slash (divide)
    if (op.indexOf("+") > -1) {
        operator = 3;
    }; // sum
    if (op.indexOf("-") > -1) {
        operator = 4;
    }; // difference
    memory = current_input; //store value
    current_input = "0";
}
/**
 * Calculate using operator, the memory and what is current
 */
function calculate() {
    if (operator == 1) {
        current_input = eval(memory) * eval(current_input);
    };
    if (operator == 2) {
        if (eval(current_input) != 0) {
            current_input = eval(memory) / eval(current_input);
        }
        else {
            current_input = div_by_zero_error;
        }
    }
    if (operator == 3) {
        current_input = eval(memory) + eval(current_input);
    };
    if (operator == 4) {
        current_input = eval(memory) - eval(current_input);
    };
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
/**
 * Change the sign of the current input
 */
function changeSign() {
    current_input = current_input * (-1);
    displayCurrentInput();
}
/**
 * Clear the current input back to 0
 */
function clears() {
    current_input = "0";
    displayCurrentInput();
}
/**
 * Change the current input to a percentage
 */
function percentage() {
    current_input = current_input / 100;
    displayCurrentInput();
}
/**
 * Calculate the factorial of the current input
 */
function factorial() {
    for (i = current_input; i > 1; i--) {
        current_input = current_input * (i - 1);
    }
    displayCurrentInput();
}
/**
 * Calculate the square of the current input
 */
function square() {
    current_input = Math.pow(current_input, 2);
    displayCurrentInput();
}
/**
 * Calculate the square root of the current input
 */
function squareRoot() {
    current_input = Math.sqrt(current_input);
    displayCurrentInput();
}
/**
Calculate the inverse of the current input
*/
function inverse() {
    current_input = 1 / current_input;
    displayCurrentInput();
}
/**
Uses the current input in a sin function
*/
function sin() {
    current_input = Math.sin(current_input);
    displayCurrentInput();
}
/**
uses current input in cosine function
*/
function cos() {
    current_input = Math.cos(current_input);
    displayCurrentInput();
}
/**
uses curent input in tan function
*/
function tan() {
    current_input = Math.tan(current_input);
    displayCurrentInput();
}
/**
changes calculator mode to degree mode
*/
function rad() {
    if (mode == "DEG") {
        //convert current input
        current_input = current_input / 57.2958;
    }
    mode = "RAD";
    displayCurrentInput();
}
/**
changes calculator mode to radian mode
*/
function deg() {
    if (mode == "RAD") {
        //convert current input
        current_input = current_input * 57.2958;
    }
    mode = "DEG";
    displayCurrentInput();
}
