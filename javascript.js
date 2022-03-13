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
// this function randomly selects rock, paper, or scissors and returns it in lowercase

function playerChoice() {
    let input = prompt()
    let playerSelection = input.toLowerCase();
    return playerSelection;
};
//this function allows the player to choose rock, paper or scissors and returns it in lowercase

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
// this function plays a round of rock paper scissors and returns the result

function game() {
    for (let i = 0; i < 5; i++) {
        let choice = computerPlay();
        let playerSelection = playerChoice();
        console.log(playRound(choice, playerSelection));
    }
}

/* I call the computerPlay and playerChoice functions here and assign the results to variables to play the game
the 'for' loop plays five games and prints the result in the console after each game */

game();
// just gotta call the game function 