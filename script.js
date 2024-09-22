let playerScore = 0;
let computerScore = 0;

const choices = {
    rock: '<img src="emoji/rock.jpg" alt="Rock">',
    paper: '<img src="emoji/paper.jpg" alt="Paper">',
    scissors: '<img src="emoji/scissors.jpg" alt="Scissors">'
};

function getComputerChoice() {
    const choicesArray = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return " DRAW";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        return "Player Win!";
    } else {
        computerScore++;
        return "Computer Win!";
    }
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();

    // Display choices
    document.getElementById('player-icon-area').innerHTML = choices[playerChoice];
    document.getElementById('computer-icon-area').innerHTML = choices[computerChoice];

    // Determine and display the result
    const result = determineWinner(playerChoice, computerChoice);
    document.getElementById('game-status').innerHTML = result;

    // Update the score
    document.getElementById('player-score').innerHTML = playerScore;
    document.getElementById('computer-score').innerHTML = computerScore;
}

document.getElementById('rock').addEventListener('click', function() {
    playGame('rock');
});

document.getElementById('paper').addEventListener('click', function() {
    playGame('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
    playGame('scissors');
});
