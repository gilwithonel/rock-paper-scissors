const playBtn = document.querySelectorAll('div.buttons button');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const compPoints = document.querySelector('#compScore');
const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', () => location.reload());

playBtn.forEach(button => {
    button.addEventListener('click', getPlayerChoice)
});

let compChoices = [{choice: 'Rock', value: 0}, {choice: 'Paper', value: 1}, {choice: 'Scissors', value: 2}];
let playerScore = 0;
let compScore = 0;
let playerChoice;

function compPlay() {
    let result = compChoices[Math.floor(Math.random() * compChoices.length)];
    return result;
};

function playRound (playerSelection, compSelection) {
    let roundWinCombo = `${playerSelection}-${compSelection.value}`;
    let playerWinCombo = ['1-0', '0-2', '2-1'];

    if (Number(playerSelection) === compSelection.value) {
        playerPoints.textContent = playerScore
        compPoints.textContent = compScore
        roundResults.textContent = "It's a tie!"
    } else if (playerWinCombo.includes(roundWinCombo)) {
        playerPoints.textContent = ++playerScore
        roundResults.textContent = `You win! ${playerChoice} beats ${compSelection.choice}.`;
    } else {
        compPoints.textContent = ++compScore
        roundResults.textContent = `You lose! ${compSelection.choice} beats ${playerChoice}.`;
    }
    checkWinner();
};

const winnerResults = {
    computer: ["You lost the game to a computer! Womp womp.", 'red'],
    player: ['You beat a computer at a game of chance! I hope you feel good about yourself.', 'green'],
    tie: ['The game is a tie, try again!', 'black']
};

function checkWinner() {
    if (compScore === 5 || playerScore === 5) {
        if (compScore === playerScore) {
            updateWinner('tie')
        } else {
            let win = `${(compScore > playerScore) ? 'computer' : 'player'}`;
            updateWinner(win);
        }
    }
};

function updateWinner(winner) {
    roundResults.textContent = winnerResults[winner][0];
    roundResults.style.color = winnerResults[winner][1];

    playBtn.forEach(button => {
        button.removeEventListener('click', getPlayerChoice);
    });
};

function getPlayerChoice(e) {
    let playerSelection = (e.target.id);
    playerChoice = e.target.textContent;
    playRound(playerSelection, compPlay());
};