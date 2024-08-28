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

function addVariable(variable) {
    let display = document.getElementById('calculator-display');
    display.value += variable;
}

function performCalculation() {
    let display = document.getElementById('calculator-display');
    try {
        display.value = eval(convertExpression(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function convertExpression(expression) {
    return expression
        .replace(/sin\(/g, 'Math.sin(')
        .replace(/cos\(/g, 'Math.cos(')
        .replace(/tan\(/g, 'Math.tan(')
        .replace(/log\(/g, 'Math.log10(')
        .replace(/ln\(/g, 'Math.log(')
        .replace(/sqrt\(/g, 'Math.sqrt(')
        .replace(/\^/g, '**');
}

function plotGraph() {
    let expression = document.getElementById('calculator-display').value;
    let domainStart = parseFloat(document.getElementById('domain-start').value);
    let domainEnd = parseFloat(document.getElementById('domain-end').value);

    let xValues = [];
    let yValues = [];
    let numPoints = 5000;
    let deltaX = (domainEnd - domainStart) / numPoints;

    for (let i = 0; i <= numPoints; i++) {
        let x = domainStart + i * deltaX;
        let y;
        try {
            y = eval(convertExpression(expression.replace(/x/g, `(${x})`)));
        } catch (error) {
            y = NaN;
        }
        xValues.push(x);
        yValues.push(y);
    }

    let canvasContext = document.getElementById('graph-canvas').getContext('2d');
    new Chart(canvasContext, {
        type: 'line',
        data: {
            labels: xValues,
            datasets: [{
                label: 'f(x)',
                data: yValues.map((y, i) => ({ x: xValues[i], y })),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'x'
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'f(x)'
                    }
                }
            }
        }
    });
}
