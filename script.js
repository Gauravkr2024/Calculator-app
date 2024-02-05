function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculate() {
    var expression = document.getElementById('result').value;
    var result;

    try {
        result = eval(expression);
    } catch (error) {
        result = 'Error';
    }

    document.getElementById('result').value = result;
}
