    <script>

        let playerPoints = 0;
        let compPoints = 0;


        function computerPlay() {
            //Computer chooses an option
            var options = [
                "rock",
                "paper",
                "scissors"
            ];

            let randomChoice = options[Math.floor(Math.random() * options.length)];
            let computerSelection = randomChoice;
            return computerSelection;
        }

        function getPlayerSelection() {
            //Allow player to choose
            let playerSelection = prompt("Rock, Paper or Scissors?...", "Type here...").toLowerCase();
            return playerSelection;
        }


        function gameRound(playerSelection, computerSelection) {
            //Compare player and computer selections and reeturn winner
            alert("Computer chose... " + (computerSelection));

            switch (computerSelection) {
                case "rock":
                    if (playerSelection == computerSelection) {
                        return "Draw!";
                    } else if (playerSelection == "scissors") {
                        compPoints += 1;
                        return "You lose! Rock beats Scissors!";
                    } else if (playerSelection == "paper") {
                        playerPoints += 1;
                        return "You win! Paper beats Rock";
                    } else {
                        return "Invalid input. Try again!";
                    }
                    break;

                case "paper":
                    if (playerSelection == computerSelection) {
                        return "Draw!";
                    } else if (playerSelection == "scissors") {
                        playerPoints += 1;
                        return "You win! Scissors beats Paper!";
                    } else if (playerSelection == "rock") {
                        compPoints += 1;
                        return "You lose! Paper beats Rock";
                    } else {
                        return "Invalid input. Try again!";
                    }
                    break;

                case "scissors":
                    if (playerSelection == computerSelection) {
                        return "Draw!";
                    } else if (playerSelection == "paper") {
                        compPoints += 1;
                        return "You lose! Scissors beats Paper!";
                    } else if (playerSelection == "rock") {
                        playerPoints += 1;
                        return "You win! Scissors beats Rock";
                    } else {
                        return "Invalid input. Try again!";
                    }
            }
        }

        function game() {
            //Play 5 rounds and give the final score
            for (let roundNumber = 0; roundNumber < 5; roundNumber++) {
                console.log(gameRound(getPlayerSelection(), computerPlay()));
            }
            let score = "Computer " + compPoints + "-" + playerPoints + " Player";
            return score;
        }
        console.log(game());
        //game();
    </script>