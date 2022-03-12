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
let choice = computerPlay();

let input = prompt("Rock, paper, or scissors?")
let playerSelection = input.toLowerCase();

function playRound(computerPlay, playerSelection) {
    if (choice == playerSelection) { 
        return "Tie!"
    } else if (choice == "rock" && playerSelection == "paper") {
        return "You win! Paper beats rock"
    } else if (choice == "paper" && playerSelection == "paper") {
        return "You lose! Paper beats rock"
    } else if (choice == "scissors" && playerSelection == "rock") {
        return "You lose! Rock beats scissors"
    } else if (choice == "rock" && playerSelection == "scissors") {
        return "You win! Rock beats scissors"
    } else if (choice == "paper" && playerSelection == "scissors") {
        return "You win! Scissors beats paper"
    } else if (choice == "scissors" && playerSelection == "paper") {
        return "You lose! Scissors beats paper"
    };
};

console.log(playRound(computerPlay, playerSelection));