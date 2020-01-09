const game = () => {
    let pScore = 0;
    let cScore = 0;
    // start the game
    const startGame = () => {

        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');
        const scoreScreen = document.querySelector('.score');
        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            matchScreen.classList.add("fadeIn");
            scoreScreen.classList.add("fadeIn");
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = '';
            });
        });
        // Computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(Option => {
            Option.addEventListener("click", function () {
                // Computer choise
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoise = computerOptions[computerNumber];
                // Animation delay
                setTimeout(() => {
                    //here call the compare
                    compareHands(this.textContent, computerChoise);

                    //Update Images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoise}.png`;
                }, 2000);

                // Animation

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;

    }

    const compareHands = (playerChoice, computerChoise) => {
        //Update Text
        const winner = document.querySelector('.winner');
        // check for tie
        if (playerChoice === computerChoise) {
            winner.textContent = 'It is a Tie';
            return;
        }

        //check for rock

        if (playerChoice === 'rock') {
            if (computerChoise === 'scissors') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;

            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        // Check for Paper
        if (playerChoice === 'paper') {
            if (computerChoise === 'scissors') {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;

            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }

        // check Scissors

        if (playerChoice === 'scissors') {
            if (computerChoise === 'rock') {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;

            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
        // here we call compare hands

    }

    //Claa all the inner function
    startGame();
    playMatch();

};

game();