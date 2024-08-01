let computerChoice;

let userChoice = prompt("Rock, Paper or Scissors", "")[
  ("rock", "paper", "scissors")
];

if (userChoice === "rock" && computerChoice === "scissors") {
  alert("You won");
} else if (userChoice === "paper" && computerChoice === "rock") {
  alert("You won");
} else if (userChoice === "scissors" && computerChoice === "paper") {
  alert("You won");
}
