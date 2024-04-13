function calculate() {
    let calculatorType = document.getElementById('calculatorType').value;

    if (calculatorType === "different") {
        calculateDifferentDilutions();
    } else if (calculatorType === "same") {
        calculateSameDilution();
    }
}

function calculateSameDilution() {
    let colonies = parseInt(prompt("Podaj liczbę kolonii wyrosłych:"));
    if (isNaN(colonies)) {
        alert("Wprowadź prawidłową liczbę kolonii.");
        return;
    }

    let dilution = parseInt(prompt("Podaj współczynnik rozcieńczenia:"));
    if (isNaN(dilution)) {
        alert("Wprowadź prawidłowy współczynnik rozcieńczenia.");
        return;
    }

    let result = colonies * dilution;
   document.getElementById('calculateButton').addEventListener('click', calculate);
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
    document.getElementById('calculateButton').addEventListener('click', calculate);
}
