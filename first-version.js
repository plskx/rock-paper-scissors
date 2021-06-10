function computer() {
  let picks = ["rock", "paper", "scissors"];
  return picks[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "draw";
  }

  if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return "computer win";
    } else {
      return "you win";
    }
  }

  if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      return "computer win";
    } else {
      return "you win";
    }
  }

  if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return "computer win";
    } else {
      return "you win";
    }
  }
}

function game() {
  let scoreUser = 0;
  let scoreComputer = 0;

  for (let i = 0; i < 5; i++) {
    let player = prompt("rock-paper-scissors");
    let comp = computer();
    console.log(`${player} vs ${comp}`);
    console.log(playRound(player, comp));
  }
}

game();
