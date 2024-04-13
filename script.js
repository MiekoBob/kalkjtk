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
    let coloniesInput = document.createElement('input');
    coloniesInput.type = 'number';
    coloniesInput.placeholder = 'Podaj liczbę kolonii wyrosłych';
    coloniesInput.className = 'input-field';
    document.getElementById('inputsContainer').appendChild(coloniesInput);

    let calculateButton = document.createElement('button');
    calculateButton.textContent = 'Oblicz';
    calculateButton.className = 'calculate-button';
    calculateButton.addEventListener('click', function() {
        let colonies = parseInt(coloniesInput.value);

        if (isNaN(colonies)) {
            alert("Wprowadź prawidłową liczbę kolonii.");
            return;
        }

        let result = colonies * smallestDilution;
        document.getElementById('result').innerText = `Wynik: ${result.toExponential(5)}`;
    });
    document.getElementById('inputsContainer').appendChild(calculateButton);
}

function calculateDifferentDilutions() {
    let differentDilutions = parseInt(prompt("Podaj ilość różnych rozcieńczeń (od 1 do 3):"));
    if (isNaN(differentDilutions) || differentDilutions < 1 || differentDilutions > 3) {
        alert("Wprowadź prawidłową ilość różnych rozcieńczeń (od 1 do 3).");
        return;
    }

    let totalColonies = 0;
    let totalPlates = 0;

    for (let i = 1; i <= differentDilutions; i++) {
        let dilution = Math.pow(10, i);
        let colonies = parseInt(prompt(`Podaj sumę kolonii w płytkach z rozcieńczeniem R${dilution}:`));
        if (isNaN(colonies)) {
            alert("Wprowadź prawidłową sumę kolonii.");
            return;
        }
        let plates = parseInt(prompt(`Podaj liczbę płytek z rozcieńczeniem R${dilution}:`));
        if (isNaN(plates)) {
            alert("Wprowadź prawidłową liczbę płytek.");
            return;
        }
        totalColonies += colonies;
        totalPlates += plates;
    }

    let result = totalColonies / totalPlates;
    document.getElementById('result').innerText = `Wynik: ${result.toExponential(5)}`;
}
