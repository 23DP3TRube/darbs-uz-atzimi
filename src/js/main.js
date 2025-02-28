document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            } else {
                console.warn(`Element with ID '${targetId}' not found.`);
            }
        });
    });

    function getRandomFitnessFact() {
        const fitnessFacts = [
            "Regulāra fiziskā aktivitāte uzlabo garastāvokli.",
            "Treniņi var palīdzēt uzlabot miega kvalitāti.",
            "Veselīgs uzturs ir svarīgs fitnesa mērķu sasniegšanai.",
            "Stiepšanās pirms treniņa samazina traumu risku.",
            "Dzerot pietiekami daudz ūdens, tu uzlabo savu sniegumu."
        ];
        const randomIndex = Math.floor(Math.random() * fitnessFacts.length);
        const factElement = document.getElementById('random-fitness-fact');
        if (factElement) {
            factElement.innerText = fitnessFacts[randomIndex];
        }
    }

    function getCatFact() {
        fetch('https://catfact.ninja/fact')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Tīkla kļūda");
                }
                return response.json();
            })
            .then(data => {
                const factElement = document.getElementById('random-cat-fact');
                if (factElement) {
                    factElement.innerText = data.fact;
                } else {
                    console.warn("Element #random-cat-fact nav atrasts.");
                }
            })
            .catch(error => {
                console.error('Kļūda, iegūstot kaķu faktu:', error);
                const factElement = document.getElementById('random-cat-fact');
                if (factElement) {
                    factElement.innerText = "Neizdevās iegūt kaķu faktu.";
                }
            });
    }

    function loadNewFacts() {
        getRandomFitnessFact();
        getCatFact();
    }

    loadNewFacts();

    // Ensure buttons exist before adding event listeners
    const fitnessButton = document.getElementById('load-fitness-fact');
    if (fitnessButton) {
        fitnessButton.addEventListener('click', getRandomFitnessFact);
    }

    const catButton = document.getElementById('load-cat-fact');
    if (catButton) {
        catButton.addEventListener('click', getCatFact);
    }
});
