let playerScore = 0;
let computerScore = 0;

const paraPlayerScore = document.querySelector(".player-score");
const paraComputerScore = document.querySelector(".computer-score");
const heading = document.querySelector(".score-heading");

const hiddenEl = document.querySelector('.hidden');
const btnReset = document.querySelector('.btn-reset');

const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => btn.addEventListener("click", playRound));

function computer() {
    let picks = ["rock", "paper", "scissors"];
    return picks[Math.floor(Math.random() * 3)];
}

function playRound(e) {
    playerSelection = e.target.name;
    computerSelection = computer();

    console.log(`player: ${playerSelection}`);
    console.log(`computer: ${computerSelection}`);

    if (playerScore == 5 || computerScore == 5) {
        hiddenEl.classList.remove('hidden')
        return;
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        heading.textContent = "You won!";
    } else if (playerSelection === computerSelection) {
        heading.textContent = "Draw!";
    } else {
        computerScore++;
        heading.textContent = "You lost!";
    }

    // update the score
    paraPlayerScore.textContent = `Player: ${playerScore}`;
    paraComputerScore.textContent = `Computer: ${computerScore}`;
}

// reset 
btnReset.addEventListener('click', () => {
    heading.textContent = "Score";
    hiddenEl.classList.add('hidden');
    playerScore = 0;
    computerScore = 0;
    paraPlayerScore.textContent = `Player: ${playerScore}`;
    paraComputerScore.textContent = `Computer: ${computerScore}`;
})