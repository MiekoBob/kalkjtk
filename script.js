document.getElementById('calculateButton').addEventListener('click', calculate);

function calculate() {
    let calculatorType = document.getElementById('calculatorType').value;

    if (calculatorType === "different") {
        calculateDifferentDilutions();
    } else if (calculatorType === "same") {
        let smallestDilution = parseInt(prompt("Podaj najmniejsze użyte rozcieńczenie (10 lub 100):"));
        if (isNaN(smallestDilution) || (smallestDilution !== 10 && smallestDilution !== 100)) {
            alert("Najmniejsze rozcieńczenie może być 10 lub 100.");
            return;
        }
        calculateSameDilution(smallestDilution);
    }
}

function calculateSameDilution(smallestDilution) {
    let coloniesInput = parseInt(prompt("Podaj liczbę kolonii wyrosłych:"));
    if (isNaN(coloniesInput)) {
        alert("Wprowadź prawidłową liczbę kolonii.");
        return;
    }

    let dilutionInput = parseInt(prompt("Podaj współczynnik rozcieńczenia:"));
    if (isNaN(dilutionInput)) {
        alert("Wprowadź prawidłowy współczynnik rozcieńczenia.");
        return;
    }

    let result = coloniesInput * dilutionInput;
    alert(`Wynik: ${result}`);
}

function calculateDifferentDilutions() {
    let numberOfDilutions = parseInt(prompt("Podaj ilość różnych rozcieńczeń (od 2 do 3):"));
    if (isNaN(numberOfDilutions) || numberOfDilutions < 1 || numberOfDilutions > 3) {
        alert("Wprowadź prawidłową ilość różnych rozcieńczeń (od 2 do 3).");
        return;
    }

    let smallestDilution = parseInt(prompt("Podaj najmniejsze użyte rozcieńczenie (10 lub 100):"));
    if (isNaN(smallestDilution) || (smallestDilution !== 10 && smallestDilution !== 100)) {
        alert("Najmniejsze rozcieńczenie może być 10 lub 100.");
        return;
    }

    let totalColonies = 0;
    let totalPlates = 0;

    // Rozpoczynamy iterację od najmniejszego użytego przez użytkownika rozcieńczenia
    for (let i = smallestDilution; i <= Math.pow(smallestDilution, numberOfDilutions); i *= 10) {
        let colonies = parseInt(prompt(`Podaj sumę kolonii w płytkach z rozcieńczeniem R${i}:`));
        if (isNaN(colonies)) {
            alert("Wprowadź prawidłową sumę kolonii.");
            return;
        }
        totalColonies += colonies;
        if (i > 1000) { break; }
    }

    totalColonies = totalColonies * smallestDilution;

    let divisor = 0;

    for (let i = 1; i <= numberOfDilutions; i++) {
        let dilution = i * Math.pow(10, i);
        let plates = parseInt(prompt(`Podaj liczbę płytek z rozcieńczeniem R${i * Math.pow(10, i) / i }:`));
        if (isNaN(plates)) {
            alert("Wprowadź prawidłową liczbę płytek.");
            return;
        }
        plates = plates * (smallestDilution / (smallestDilution * (i * Math.pow(10, i - 1) / i)));
        divisor = divisor + plates;
    }

    let result = totalColonies / divisor;
    document.getElementById('result').innerText = `Wynik: ${result.toExponential(5)}`;
}
