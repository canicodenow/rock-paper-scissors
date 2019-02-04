let playerPoints = 0;
let compPoints = 0;
let roundNumber = document.querySelector('#round-number');
let commentary = document.querySelector('#commentary');
let score = document.querySelector('#score');
let currentRound = 1;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', game);
});

function computerPlay() {
    //Computer chooses an option
    var options = [
        "Rock",
        "Paper",
        "Scissors"
    ];

    let randomChoice = options[Math.floor(Math.random() * options.length)];
    let computerSelection = randomChoice;
    return computerSelection;
}


function gameRound(playerSelection, computerSelection) {
    alert("Computer chose... " + (computerSelection) + "... and you chose..." + (playerSelection));
    //Compare player and computer selections and return winner
    switch (computerSelection) {
        case "Rock":
            if (playerSelection == computerSelection) {
                commentary.innerHTML = "Draw! Pick again";
            } else if (playerSelection == "Scissors") {
                commentary.innerHTML = "You lose! Rock blunts Scissors. Pick again"
                compPoints += 1;
            } else if (playerSelection == "Paper") {
                commentary.innerHTML = "You win! Paper wraps Rock. Pick again"
                playerPoints += 1;
            }
            break;

        case "Paper":
            if (playerSelection == computerSelection) {
                commentary.innerHTML = "Draw! Pick again";
            } else if (playerSelection == "Scissors") {
                commentary.innerHTML = "You win! Scissors cut Paper. Pick again"
                playerPoints += 1;
            } else if (playerSelection == "Rock") {
                commentary.innerHTML = "You lose! Paper wraps Rock. Pick again"
                compPoints += 1;
            }
            break;

        case "Scissors":
            if (playerSelection == computerSelection) {
                commentary.innerHTML = "Draw! Pick again";
            } else if (playerSelection == "Paper") {
                commentary.innerHTML = "You lose! Scissors cut Paper. Pick again"
                compPoints += 1;
            } else if (playerSelection == "Rock") {
                commentary.innerHTML = "You win! Rock blunts Scissors. Pick again"
                playerPoints += 1;
            }
    }
    //console.log(result);
    currentRound++;
    console.log(playerPoints, compPoints);

}

function game(e){
        let playerSelection = e.target.id;
        let computerSelection = computerPlay();
        gameRound(playerSelection, computerSelection);
        changeScore();
        changeRound(currentRound);
}

function changeScore() {
    score.innerHTML = `You ${playerPoints}-${compPoints} Computer`;
}

function changeRound(currentRound) {
    roundNumber.innerHTML = `Current round: ${currentRound}`;
    if (currentRound == 6) {
        endGame();
    }
}

function endGame(currentRound) {
    commentary.innerHTML = "Game over! Five rounds played";
    if (playerPoints > compPoints) {
        roundNumber.innerHTML = "You won!";
    } else if (compPoints > playerPoints) {
        roundNumber.innerHTML = "You lost!";
    } else {
        roundNumber.innerHTML = "It's a draw!";
    }
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.removeEventListener('click', game);
    });
}