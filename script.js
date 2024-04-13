function chooseCalculator() {
    let choice = prompt("Wybierz opcję:\n1. Obliczanie z takim samym rozcieńczeniem\n2. Obliczanie z różnymi rozcieńczeniami");

    if (choice === "1") {
        calculateSameDilution();
    } else if (choice === "2") {
        calculateDifferentDilutions();
    } else {
        alert("Nieprawidłowy wybór. Wybierz opcję 1 lub 2.");
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
    document.getElementById('result').innerText = `Liczba jednostek kolonii bakterii: ${result.toFixed(2)}`;
}

function calculateDifferentDilutions() {
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

chooseCalculator();
