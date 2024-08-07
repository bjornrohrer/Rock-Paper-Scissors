let computerChoice;

let userChoice = prompt("Rock, Paper or Scissors", "")[
  ("rock", "paper", "scissors")
];

function gameLogic() {
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
