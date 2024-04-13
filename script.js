function calculate() {
    let colonies = parseFloat(document.getElementById('colonies').value);
    let dilution = parseFloat(document.getElementById('dilution').value);

    if (isNaN(colonies) || isNaN(dilution)) {
        document.getElementById('result').innerText = 'Wprowadź poprawne wartości';
        return;
    }

    let result = colonies * dilution;
    document.getElementById('result').innerText = 'Liczba jednostek kolonii bakterii: ' + result.toFixed(2);
}
