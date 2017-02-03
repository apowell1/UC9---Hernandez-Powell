// Test for inputing digits
QUnit.test( "Add digits test", function( assert ) {
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
    allClear();
});

// Test adding one, then two decimals
QUnit.test( "Add decimal test", function( assert ) {
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
    allClear();
});

//US1: As a user, I want to be able to press a button and change the sign of the current number that I have inputted into the calculator.
QUnit.test( "Change the sign of the number test", function( assert ){
    addDigit('2');
    changeSign();
    assert.equal(document.getElementById("screen").value, "-2", "Passed - Expected -2");
    allClear();
});

//US2: As a user I want to be able to press a button and change the inputed number on the calculator's screen to change to a percentage.
QUnit.test( "Percentage test", function( assert ) {
    addDigit('2');
    percentage();
    assert.equal(document.getElementById("screen").value, "0.02", "Passed - Expected 0.02");
    allClear();
});

//US3: As a user, I want to be able to calculate the inverse of a number simply by pressing a button.
QUnit.test( "Calculate the Inverse of a Numer", function( assert ){
   addDigit('4');
    inverse();
    assert.equal(document.getElementById("screen").value, "0.25", "Passed - Expected 0.25");
    allClear();
});

//US4: As a user I want to be able to calculate the factorial of a number by simply pressing a button.
QUnit.test( "Factorial test", function( assert ) {
    addDigit('4');
    factorial();
    assert.equal(document.getElementById("screen").value, "24", "Passed - Expected 24");
    allClear();
});

//US5: As a user I want to be able to calculate the square root of a number by simply pressing a button.
QUnit.test( "Square Root Test", function ( assert ){
    addDigit('16');
    squareRoot();
    assert.equal(document.getElementById("screen").value, "4", "Passed - Expected 4");
    allClear();
});

//US6: As a user I want to be able to calculate the square of a number by simply pressing a button.
QUnit.test( "Square test", function( assert ) {
    addDigit('4');
    square();
    assert.equal(document.getElementById("screen").value, "16", "Passed - Expected 16");
    allClear();
});

//US7: As a user who sometimes makes mistakes when pressing buttons on the keypad, I want to be able to press a button that clears my current input, but not the stored procedure.
QUnit.test( "Clear Current Input Test", function (assert ){
   addDigit('1');
    partClear();
    assert.equal(document.getElementById("screen").value, "0", "Passed - Expected 0");
    allClear();
});

//US8: Bug Alert! There is a bug in the calculator app! As a careless user I want to be told that I just tried to divide by zero, which I should be told is not allowed.
QUnit.test( "Divide by zero test", function( assert ) {
    addDigit('6');
    storeOperator('/');
    addDigit('0');
    calculate();
    assert.equal(document.getElementById("screen").value, "CANNOT DIVIDE BY 0", "Passed - Expected CANNOT DIVIDE BY 0");
    allClear();
});

//US9: Bug Alert! As an easily confused user I don't want to be able to type numbers into the screen that causes some of the numbers to disappear off the screen, thus confusing me about what I actually typed.
QUnit.test( "Overload test", function( assert ) {
    addDigit('555555555555555555555');
    addDigit('1');
    assert.equal(document.getElementById("screen").value, "OVERLOAD ERROR", "Passed - Expected OVERLOAD ERROR");
    allClear();
});

//US10: Challenge: Add trig functions - make sure that you include a DEGREE mode and a RADIAN mode!
QUnit.test( "Trig test", function( assert ) {
    addDigit('90');
    sineDegrees();
    assert.equal(document.getElementById("screen").value, "1", "Passed - Expected 1");
    allClear();
});

//US11: Extra Challenge: Add the ability to store a number in memory with a "m+", "m-", "mr" and "mc".


//US12: Super Challenge: Add the ability to represent and calculate with complex numbers such as the square root of -1.
QUnit.test( "Imaginary number test", function( assert ) {
    addDigit('-1');
    squareRoot();
    assert.equal(document.getElementById("screen").value, "i", "Passed - Expected i");
    allClear();
});

//US13: Super Duper Challenge: Add the ability to work with exponents!
