
let result;
function calculate(operator) {
    let num1 = parseFloat(document.querySelector('#id_num1').value);
    let num2 = parseFloat(document.querySelector('#id_num2').value);

    if (operator == '+') {
        result = num1 + num2;
    }
    else if (operator == '-') {
        result = num1 + num2;
    }
    else if (operator == '*') {
        result = num1 * num2;
    }
    else {
        result = num2 == 0 ? 'Division by zero is not possible' : num1/num2;
    }
    document.querySelector('#id_result').innerHTML = `<h1>${result}</h1>`
}
