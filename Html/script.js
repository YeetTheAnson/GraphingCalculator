function clearDisplay() {
    document.getElementById('calculator-display').value = '';
}

function deleteLastCharacter() {
    let display = document.getElementById('calculator-display');
    display.value = display.value.slice(0, -1);
}

function addNumber(number) {
    let display = document.getElementById('calculator-display');
    display.value += number;
}

function addOperator(operator) {
    let display = document.getElementById('calculator-display');
    display.value += operator;
}

function performCalculation() {
    let display = document.getElementById('calculator-display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
