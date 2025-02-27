// Funkcija, lai iegūtu nejaušu fitnesa faktu
function getRandomFitnessFact() {
    const fitnessFacts = [
        "Regulāra fiziskā aktivitāte uzlabo garastāvokli.",
        "Treniņi var palīdzēt uzlabot miega kvalitāti.",
        "Veselīgs uzturs ir svarīgs fitnesa mērķu sasniegšanai.",
        "Stiepšanās pirms treniņa samazina traumu risku.",
        "Dzerot pietiekami daudz ūdens, tu uzlabo savu sniegumu."
    ];
    const randomIndex = Math.floor(Math.random() * fitnessFacts.length);
    document.getElementById('random-fitness-fact').innerText = fitnessFacts[randomIndex];
}

// Funkcija, lai iegūtu kaķu faktu
function getCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('random-cat-fact').innerText = data.fact;
        })
        .catch(error => {
            console.error('Kļūda, iegūstot kaķu faktu:', error);
            document.getElementById('random-cat-fact').innerText = "Neizdevās iegūt kaķu faktu.";
        });
}

// Funkcija, lai ielādētu jaunus faktus
function loadNewFacts() {
    getRandomFitnessFact();
    getCatFact();
}

// Izsauciet funkcijas, kad lapa tiek ielādēta
window.onload = function() {
    loadNewFacts();
};

// Pievienojiet notikumu klausītājus pogām
document.getElementById('load-fitness-fact').addEventListener('click', getRandomFitnessFact);
document.getElementById('load-cat-fact').addEventListener('click', getCatFact);