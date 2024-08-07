const computerOptions = ["rock", "paper", "scissors"];

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * computerOptions.lenght);
  return computerOptions[randomNumber];
}

let userChoice = prompt("Rock, Paper or Scissors", "")[
  ("rock", "paper", "scissors")
];

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
  }
}
