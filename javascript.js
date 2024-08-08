const computerOptions = ["rock", "paper", "scissors"];

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[randomNumber];
}

const userChoice = prompt("Rock, Paper or Scissors", "").toLowerCase();

function gameLogic() {
  const computerChoice = generateComputerChoice();

  if (userChoice === "rock" && computerChoice === "scissors") {
    alert("You won");
  } else if (userChoice === "paper" && computerChoice === "rock") {
    alert("You won");
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    alert("You won");
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    alert("You lost");
  } else if (userChoice === "rock" && computerChoice === "paper") {
    alert("You lost");
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    alert("You lost");
  } else {
    alert("draw");
  }

  scoreTracker();
}

function scoreTracker() {
  let userScore = 0;
  let computerScore = 0;

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === " scissors" && computerChoice === "paper")
  ) {
    userScore++;
  } else {
    computerScore++;
  }

  console.log(`Score :You ${userScore} - ${computerScore} Computer`);
}

gameLogic();
