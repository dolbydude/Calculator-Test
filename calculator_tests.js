// Test for inputing digits
QUnit.test("Add digits test", function (assert) {
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
    allClear();
});
// Test adding one, then two decimals
QUnit.test("Add decimal test", function (assert) {
    addDigit('0');
    addDecimal();
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
    allClear();
});
//US1: As a user, I want to be able to press a button and change the sign of the current number that I have inputted into the calculator.
QUnit.test("Change Sign", function (assert) {
    addDigit('2');
    changeSign();
    assert.equal(document.getElementById("screen").value, "-2", "Passed - Expected -2");
    allClear();
});
//US2: As a user I want to be able to press a button and change the inputed number on the calculator's screen to change to a percentage.
QUnit.test("Add decimal test", function (assert) {
    addDigit('50');
    percentage();
    assert.equal(document.getElementById("screen").value, "0.5", "Passed - Expected 0.5");
    allClear();
});
//US3: As a user, I want to be able to calculate the inverse of a number simply by pressing a button.
QUnit.test("Inverse number test", function (assert) {
    addDigit(2)
    inverse();
    assert.equal(document.getElementById("screen").value, "0.5", "Passed - Expected 0.5");
    allClear();
});
//US4: As a user I want to be able to calculate the factorial of a number by simply pressing a button.
QUnit.test("Calculating Factorial", function (assert) {
    addDigit('5');
    factorial();
    assert.equal(document.getElementById("screen").value, "120", "Passed - Expected 120");
    allClear();
});
//US5: As a user I want to be able to calculate the square root of a number by simply pressing a button.
QUnit.test("Square root test", function (assert) {
    addDigit('36');
    squareRoot();
    assert.equal(document.getElementById("screen").value, "6", "Passed - Expected 6");
    allClear();
});
//US6: As a user I want to be able to calculate the square of a number by simply pressing a button.
QUnit.test("Square a Number", function (assert) {
    addDigit('3');
    square();
    assert.equal(document.getElementById("screen").value, "9", "Passed - Expected 9");
    allClear();
});
//US7: As a user who sometimes makes mistakes when pressing buttons on the keypad, I want to be able to press a button that clears my current input, but not the stored procedure.
QUnit.test("Clear input test", function (assert) {
    addDigit('5555');
    clears();
    assert.equal(document.getElementById("screen").value, "0", "Passed - Expected 0");
    allClear();
});
//US8: Bug Alert! There is a bug in the calculator app! As a careless user I want to be told that I just tried to divide by zero, which I should be told is not allowed.
QUnit.test("divide by zero error test", function (assert) {
    addDigit('5555');
    storeOperator('/');
    addDigit('0');
    calculate();
    assert.equal(document.getElementById("screen").value, "Divide By Zero Error", "Passed - Expected Divide By Zero Error");
    allClear();
});
//US9: Bug Alert! As an easily confused user I don't want to be able to type numbers into the screen that causes some of the numbers to disappear off the screen, thus confusing me about what I actually typed.
QUnit.test("Screen containment function test", function (assert) {
    addDigit('999999999999999999');
    addDigit('555');
    assert.equal(document.getElementById("screen").value, "999999999999999999", "Passed - Expected 999999999999999999");
    allClear();
});
//US10: As a user I want to be able to have trig functions.
QUnit.test("Screen containment function test", function (assert) {
    addDigit('0');
    sin();
    assert.equal(document.getElementById("screen").value, "0", "Passed - Expected 0");
    allClear();
    addDigit('0');
    cos();
    assert.equal(document.getElementById("screen").value, "1", "Passed - Expected 1");
    allClear();
    addDigit('0');
    tan();
    assert.equal(document.getElementById("screen").value, "0", "Passed - Expected 0");
    allClear();
});
