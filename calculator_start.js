/** TODO:
* 1. Add these new functions: percentage, inverse, factorial, square and square root
* 2. Bootstrap it to make it pretty!
* 3. User can only type numbers in the display (30 max!), and the numbers are right aligned.
* 4. Fix divide by 0 errors!
* 5. Add the ability to clear the current input, but not memory.
* 6. Challenge: Add trig functions (in radian AND degree mode)
* 7. Extra Challenge: Add mc, m+, m-, mr butons that work!
* 8. Super Challenge: Add ( and ) buttons that work!
* 9. Super Duper Challenge: Add exponents (negatives too!)
*/

var current_input = "0";
var memory = "0";
var operator = 0;
var max_length = 20;
var mem = "0";

/**
* Helper function for displaying the current input
*/
function displayCurrentInput() {
    document.getElementById('screen').value = current_input;
}

/**
* Adds a digit to the current input
* @param {number} Digit that user wants to add to what is the current input
*/
function addDigit(dig) {
    if ((eval(current_input) == 0) && (current_input.indexOf(".") == -1)) {
        current_input = dig;
    } else if (current_input.length > maxLength) {
        currentInput = "OVERLOAD ERROR";
    } else {
        currentInput = currentInput + dig;
    }
    displayCurrentInput();
}

/**
* Adds a decimal to the current input
*/
function addDecimal() {
    if (currentInput.length == 0) {
        // no leading ".", use "0."
        currentInput = "0.";
    } else {
        // First make sure one doesn't exist
        if (currentInput.indexOf(".") == -1) {
            currentInput = currentInput + ".";
        }
    }
    displayCurrentInput();
}

/**
* Clears current input, operator, memory, and stored memory
*/
function allClear() {
    currentInput = "0";
    operator = 0;                // clear operator
    memory = "0";                  // clear memory
    displayCurrentInput();
    mem = "0";                      // clear other memory (m-, m+, etc.)
}

/**
* Stores the last operator pushed for multiply, divide, add, or subtract
*/
function storeOperator(op) {
    if (op.indexOf("*") > -1) { operator = 1; };       //codes for *
    if (op.indexOf("/") > -1) { operator = 2; };       // slash (divide)
    if (op.indexOf("+") > -1) { operator = 3; };       // sum
    if (op.indexOf("-") > -1) { operator = 4; };       // difference
    if (op.indexOf("x^y") > -1) { operator = 5; }; // exponent
    memory = currentInput;                 // store value
    currentInput = "";
    displayCurrentInput();
}

/**
* Calculates using operator, the memory and current input
*/
function calculate() {
    if (operator == 1) { currentInput = eval(memory) * eval(currentInput); };
    if (operator == 2) {
    if (currentInput == 0) {
        currentInput = "CANNOT DIVIDE BY 0";
    } else { currentInput = eval(memory) / eval(currentInput); } };
    if (operator == 3) { currentInput = eval(memory) + eval(currentInput); };
    if (operator == 4) { currentInput = eval(memory) - eval(currentInput); };
    if (operator == 5) { currentInput = Math.pow(eval(memory), currentInput); };
    operator = 0;                // clear operator
    memory    = "0";              // clear memory
    displayCurrentInput();
}

/**
* Change the sign of the current input
*/
function changeSign() {
    var input = document.getElementById('screen').value;
    var pm = input * -1;
    currentInput = pm;
    displayCurrentInput();
}

/**
* Clear the current input back to 0
*/
function partClear() {
    currentInput = "0";
    displayCurrentInput();
}

/**
* Change the current input to a percentage
*/
function percentage() {
   var input =  document.getElementById('screen').value;
   var percent = input/100;
   currentInput = percent;
   displayCurrentInput();
}

/**
* Calculate the factorial of the current input
*/
function factorial() {
    var input = document.getElementById('screen').value;
    var x = input;
    for (i = input-1; i > 1; i--) {
        x = x*i;
    }
    currentInput = x;
    displayCurrentInput();
}

/**
* Calculate the square of the current input
*/
function square() {
    var input = document.getElementById('screen').value;
    var square = Math.pow(input, 2);
    currentInput = square;
    displayCurrentInput();
}

/**
* Calculate the square root of the current input
*/
function squareRoot() {
    var input = document.getElementById('screen').value;
    if (input <0) {
        input = input*(-1);
        var sqare = Math.sqrt(input);
        var newSqare = sqare + "i"
        currentInput = newSqare;
    } else {
        var sqare = Math.sqrt(input);
        currentInput = sqare;
    }
    displayCurrentInput();
}

/**
* Calculate the inverse of the current input
*/
 function inverse() {
     var input = document.getElementById('screen').value;
     var inverse = 1/input;
     currentInput = inverse;
     displayCurrentInput();
}

/**
* Calculate the sine of the current input in radians
*/
function sine() {
    currentInput = Math.sin(currentInput);
    displayCurrentInput();
}

/**
* Calculate the cosine of a number in radians
*/
function cosine() {
    currentInput = Math.cos(currentInput);
    displayCurrentInput();
}

/**
* Calculate the tangent of a number in radians
*/
function tangent() {
    currentInput = Math.tan(currentInput);
    displayCurrentInput();
}

/**
* Calculate the sine of a number in degrees
*/
function sineDegrees() {
    currentInput = Math.sin(currentInput * Math.PI/180);
    displayCurrentInput();
}

/**
* Calculate the cosine of a number in degrees
*/
function cosineDegrees() {
    currentInput = Math.cos(currentInput * Math.PI/180);
    displayCurrentInput();
}

/**
* Calculate the tangent of a number in degrees
*/
function tangentDegrees() {
    currentInput = Math.tan(currentInput * Math.PI/180);
    displayCurrentInput();
}

/**
* Stores current input in memory
*/
function ms() {
    var input = document.getElementById('screen').value;
    mem = input;
    currentInput = "0";
    displayCurrentInput();
}

/**
* Clears stored memory
*/
function mc() {
    mem = 0;
}

/**
* Recalls value stored in memory
*/
function mr () {
    currentInput = mem;
    displayCurrentInput();
}

/**
* Adds screen value to memory value
*/
function mPlus() {
    currentInput = eval(mem) + eval(currentInput);
    displayCurrentInput();
}

/**
* Subtracts screen value from memory value
*/
function mMinus() {
    currentInput = eval(mem) - eval(currentInput);
    displayCurrentInput();
}



