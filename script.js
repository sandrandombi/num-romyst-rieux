// script.js
document.addEventListener("DOMContentLoaded", function() {
    const guessInput = document.getElementById("guess-input");
    const button= document.getElementById("button");
    const résultatMessage = document.getElementById("résultat message");
    const resetButton = document.getElementById("reset-button");

    let nombreMystère = generateRandomNumber();
    let attempts = 0;

    buttonutton.addEventListener("click", function() {
        const utilisateur = parseInt(guessInput.value);
        attempts++;

        if (isNaN(utilisateur)) {
            résultatMessage.textContent = "Veuillez entrer un nombre valide.";
            return;
        }

        if (utilisateur < nombreMystère) {
            résultatMessage.textContent = "Trop petit !";
        } else if (utilisateur > nombreMystère ){
            résultatMessage.textContent = "Trop grand !";
        } else {
            //résultattMessage.textContent = "Gagné! Vous avez trouvé le nombre mystère(${mysteriousNumber}) en ${attempts} tentatives."; 
            résultatMessage.textContent = "Gagné! Vous avez trouvé le nombre mystère(${nombre mystère}) en ${attempts} tentatives.";   
        }

    });

    resetButton.addEventListener("click", function() {
        nombreMystère = generateRandomNumber();
        attempts = 0;
        guessInput.value = '';
        résultatMessage.textContent = '';
    });

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }
});
