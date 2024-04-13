function calculate() {
    let numberOfDilutions = parseInt(prompt("Podaj ilość różnych rozcieńczeń (od 1 do 3):"));
    if (numberOfDilutions < 1 || numberOfDilutions > 3 || isNaN(numberOfDilutions)) {
        alert("Nieprawidłowa ilość różnych rozcieńczeń.");
        return;
    }

    let smallestDilution = parseInt(prompt("Podaj najmniejsze używane rozcieńczenie (10 lub 100):"));
    if (smallestDilution !== 10 && smallestDilution !== 100 || isNaN(smallestDilution)) {
        alert("Najmniejsze rozcieńczenie może być tylko 10 lub 100.");
        return;
    }

    let totalColonies = 0;
    let totalPlates = 0;

    for (let i = 1; i <= numberOfDilutions; i++) {
        let dilution = smallestDilution * Math.pow(10, i - 1);
        let platesWithDilution = parseInt(prompt(`Podaj liczbę płytek z rozcieńczeniem R${dilution}:`));
        if (isNaN(platesWithDilution)) {
            alert("Wprowadź prawidłową liczbę płytek.");
            return;
        }
        totalColonies += platesWithDilution * dilution;
        totalPlates += platesWithDilution;
    }

    let result = totalColonies / totalPlates;
    document.getElementById('result').innerText = `Wynik: ${result.toFixed(2)}`;
}
