function portfolioImageClick (portfolioItemName) {
    portfolioItemName = portfolioItemName.toLowerCase();

    if (portfolioItemName === "hangman") {
        window.open('https://noel3740.github.io/Word-Guess-Game/', '_blank');
    }
    else if (portfolioItemName === "rpggame") {
        window.open('https://noel3740.github.io/unit-4-game/', '_blank');
    }
}