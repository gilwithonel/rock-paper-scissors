function computerPlay() {
    let compChoice = (Math.floor(Math.random() * 3))
    if (compChoice == 0) {
        return "rock"
    } else if (compChoice == 1) {
        return "paper"
    } else {
        return "scissors"
    };
}
// let choice = computerPlay();

function playerChoice() {
    let input = prompt()
    let playerSelection = input.toLowerCase();
    return playerSelection;
};

function playRound(choice, playerSelection) {
    if (choice == playerSelection) { 
        return "Tie!"
    } else if (choice == "rock" && playerSelection == "paper") {
        return "You win! Paper beats rock"
    } else if (choice == "paper" && playerSelection == "rock") {
        return "You lose! Paper beats rock"
    } else if (choice == "scissors" && playerSelection == "rock") {
        return "You win! Rock beats scissors"
    } else if (choice == "rock" && playerSelection == "scissors") {
        return "You lose! Rock beats scissors"
    } else if (choice == "paper" && playerSelection == "scissors") {
        return "You win! Scissors beats paper"
    } else if (choice == "scissors" && playerSelection == "paper") {
        return "You lose! Scissors beats paper"
    };
};

function game() {
    for (let i = 0; i < 5; i++) {
        let choice = computerPlay();
        let playerSelection = playerChoice();
        console.log(playRound(choice, playerSelection));
    }
}

game();