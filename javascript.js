const computerOptions = ["rock", "paper", "scissors"];

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * computerOptions.length);
  return computerOptions[randomNumber];
}

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");

buttonRock.addEventListener("click", () => {
  gameLogic();
});

buttonPaper.addEventListener("click", () => {
  gameLogic();
});

buttonScissors.addEventListener("click", () => {
  gameLogic();
});

function gameLogic(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = generateComputerChoice();
  let result = "";

  if (userChoice === "rock" && computerChoice === "scissors") {
    result = "You win";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    result = "You Win";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    result = "You win";
  } else if (userChoice === computerChoice) {
    result = "It's a tie";
  } else {
    result = "Computer wins";
  }
}
