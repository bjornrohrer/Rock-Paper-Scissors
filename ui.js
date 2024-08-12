const computerOptions = ["rock", "paper", "scissors"];

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[randomNumber];
}

function userChoice() {
  const buttonRock = document.querySelector(".rock");
  const buttonPaper = document.querySelector(".paper");
  const buttonScissors = document.querySelector(".scissors");
}

function gameLogic() {
  const userChoice = prompt("Rock, Paper or Scissors", "").toLowerCase();

  const computerChoice = generateComputerChoice();

  let userScore = 0;
  let computerScore = 0;

  if (userChoice === "rock" && computerChoice === "scissors") {
    alert("You won");
    userScore++;
  } else if (userChoice === "paper" && computerChoice === "rock") {
    alert("You won");
    userScore++;
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    alert("You won");
    userScore++;
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    alert("You lost");
    computerScore++;
  } else if (userChoice === "rock" && computerChoice === "paper") {
    alert("You lost");
    computerScore++;
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    alert("You lost");
    computerScore++;
  } else {
    alert("draw");
  }

  console.log(`Score :You ${userScore} - ${computerScore} Computer`);
}
