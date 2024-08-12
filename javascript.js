const computerOptions = ["rock", "paper", "scissors"];

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[randomNumber];
}

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

buttonRock.addEventListener("click", () => {
  gameLogic("rock");
});

buttonPaper.addEventListener("click", () => {
  gameLogic("paper");
});

buttonScissors.addEventListener("click", () => {
  gameLogic("scissors");
});

function gameLogic(userChoice) {
  const computerChoice = generateComputerChoice();
  let result = document.querySelector("#result");

  if (userChoice === "rock" && computerChoice === "scissors") {
    result.textContent = "You win";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    result.textContent = "You win";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    result.textContent = "You win";
  } else if (userChoice === computerChoice) {
    result.textContent = "It's a tie";
  } else {
    result.textContent = "Computer wins";
  }
}
