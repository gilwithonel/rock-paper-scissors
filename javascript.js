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

let input = prompt("Rock, paper, or scissors?")
let playerSelection = input.toLowerCase();
console.log(playerSelection);