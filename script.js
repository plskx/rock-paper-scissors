let playerScore = 0;
let computerScore = 0;

const paraPlayerScore = document.querySelector(".player-score");
const paraComputerScore = document.querySelector(".computer-score");

const heading = document.querySelector(".score-heading");

const hiddenEl = document.querySelector(".hidden");
const btnReset = document.querySelector(".btn-reset");

const buttons = document.querySelectorAll(".btn");

function computer() {
  let picks = ["rock", "paper", "scissors"];
  return picks[Math.floor(Math.random() * 3)];
}

function playRound(e) {
  playerSelection = e.target.name;
  computerSelection = computer();

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

  if (playerScore === 5 || computerScore === 5) {
    // disable button
    hiddenEl.classList.remove("hidden");
    buttons.forEach((button) => {
      button.disabled = true;
    });
    console.log("55");
    return;
  }
}

function resetGame() {
  // enable the button again
  buttons.forEach((button) => {
    button.disabled = false;
  });

  heading.textContent = "Score";
  hiddenEl.classList.add("hidden");

  playerScore = 0;
  computerScore = 0;

  paraPlayerScore.textContent = `Player: ${playerScore}`;
  paraComputerScore.textContent = `Computer: ${computerScore}`;
}

btnReset.addEventListener("click", resetGame);
buttons.forEach((btn) => btn.addEventListener("click", playRound));
