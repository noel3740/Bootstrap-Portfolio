function portfolioImageClick (portfolioItemName) {
    portfolioItemName = portfolioItemName.toLowerCase();

    switch(portfolioItemName) {
        case "hangman": 
            window.open('https://noel3740.github.io/Word-Guess-Game/', '_blank');
            break;
        case "rpggame":
            window.open('https://noel3740.github.io/Word-Guess-Game/', '_blank');
            break;
        case "triviagame":
            window.open('https://noel3740.github.io/TriviaGame/', '_blank');
            break;
    }
}