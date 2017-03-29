// Test for inputing digits
QUnit.test("Add digits test", function (assert) {
    calculator.addDigit('1');
    calculator.addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
    calculator.allClear();
});
// Test adding one, then two decimals
QUnit.test("Add decimal test", function (assert) {
    calculator.addDecimal();
    calculator.addDigit('2');
    calculator.addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
    calculator.allClear();
});
//US1: As a user, I want to be able to press a button and change the sign of the current number that I have inputted into the calculator.
QUnit.test("Change the sign of the number test", function (assert) {
    calculator.addDigit('2');
    calculator.changeSign();
    assert.equal(document.getElementById("screen").value, "-2", "Passed - Expected -2");
    calculator.allClear();
});
//US2: As a user I want to be able to press a button and change the inputed number on the calculator's screen to change to a percentage.
QUnit.test("Percentage test", function (assert) {
    calculator.addDigit('2');
    calculator.percentage();
    assert.equal(document.getElementById("screen").value, "0.02", "Passed - Expected 0.02");
    calculator.allClear();
});
//US3: As a user, I want to be able to calculate the inverse of a number simply by pressing a button.
QUnit.test("Calculate the Inverse of a Numer", function (assert) {
    calculator.addDigit('4');
    calculator.inverse();
    assert.equal(document.getElementById("screen").value, "0.25", "Passed - Expected 0.25");
    calculator.allClear();
});
//US4: As a user I want to be able to calculate the factorial of a number by simply pressing a button.
QUnit.test("Factorial test", function (assert) {
    calculator.addDigit('4');
    calculator.factorial();
    assert.equal(document.getElementById("screen").value, "24", "Passed - Expected 24");
    calculator.allClear();
});
//US5: As a user I want to be able to calculate the square root of a number by simply pressing a button.
QUnit.test("Square Root Test", function (assert) {
    calculator.addDigit('16');
    calculator.squareRoot();
    assert.equal(document.getElementById("screen").value, "4", "Passed - Expected 4");
    calculator.allClear();
});
//US6: As a user I want to be able to calculate the square of a number by simply pressing a button.
QUnit.test("Square test", function (assert) {
    calculator.addDigit('4');
    calculator.square();
    assert.equal(document.getElementById("screen").value, "16", "Passed - Expected 16");
    calculator.allClear();
});
//US7: As a user who sometimes makes mistakes when pressing buttons on the keypad, I want to be able to press a button that clears my current input, but not the stored procedure.
QUnit.test("Clear Current Input Test", function (assert) {
    calculator.addDigit('1');
    calculator.partClear();
    assert.equal(document.getElementById("screen").value, "0", "Passed - Expected 0");
    calculator.allClear();
});
//US8: Bug Alert! There is a bug in the calculator app! As a careless user I want to be told that I just tried to divide by zero, which I should be told is not allowed.
QUnit.test("Divide by zero test", function (assert) {
    calculator.addDigit('6');
    calculator.storeOperator('/');
    calculator.addDigit('0');
    calculator.calculate();
    assert.equal(document.getElementById("screen").value, "CANNOT DIVIDE BY 0", "Passed - Expected CANNOT DIVIDE BY 0");
    calculator.allClear();
});
//US9: Bug Alert! As an easily confused user I don't want to be able to type numbers into the screen that causes some of the numbers to disappear off the screen, thus confusing me about what I actually typed.
QUnit.test("Overload test", function (assert) {
    calculator.addDigit('555555555555555555555');
    calculator.addDigit('1');
    assert.equal(document.getElementById("screen").value, "OVERLOAD ERROR", "Passed - Expected OVERLOAD ERROR");
    calculator.allClear();
});
//US10: Challenge: Add trig functions - make sure that you include a DEGREE mode and a RADIAN mode!
QUnit.test("Trig test", function (assert) {
    calculator.addDigit('90');
    calculator.sineDegrees();
    assert.equal(document.getElementById("screen").value, "1", "Passed - Expected 1");
    calculator.allClear();
});
//US11: Extra Challenge: Add the ability to store a number in memory with a "m+", "m-", "mr" and "mc".
QUnit.test("Use all memory function test", function (assert) {
    calculator.addDigit('6');
    calculator.ms();
    calculator.mr();
    calculator.mc();
    calculator.ms();
    calculator.mr();
    calculator.mPlus();
    calculator.mMinus();
    assert.equal(document.getElementById("screen").value, "-6", "Passed - Expected -6");
    calculator.allClear();
});
//US12: Super Challenge: Add the ability to represent and calculate with complex numbers such as the square root of -1.
QUnit.test("Imaginary number test", function (assert) {
    calculator.addDigit('-1');
    calculator.squareRoot();
    assert.equal(document.getElementById("screen").value, "i", "Passed - Expected i");
    calculator.allClear();
});
//US13: Super Duper Challenge: Add the ability to work with exponents!
QUnit.test("Use expononets test", function (assert) {
    calculator.addDigit('5');
    calculator.storeOperator('x^y')
    calculator.addDigit('2');
    calculator.calculate();
    assert.equal(document.getElementById("screen").value, "25", "Passed - Expected 25");
    calculator.allClear();
});
