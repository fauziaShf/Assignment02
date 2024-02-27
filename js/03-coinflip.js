// Generate a Random number
let coinFlip = Math.round(Math.random());
let result;
let choice = prompt("Select heads or tails");

// Check random number is Heads or Tails
if (coinFlip < 1) {
  result = "heads";
} else {
  result = "tails";
}

// Condition for 'win or lose'

if (result == "heads" && choice == "heads") {
  window.alert("The flip was heads and you chose heads...you win!");
} else if (result == "heads" && choice == "tails") {
  window.alert("The flip was heads but you chose tails...you lose!");
} else if (result == "tails" && choice == "heads") {
  window.alert("The flip was tails but you chose heads...you lose!");
} else if (result == "tails" && choice == "tails") {
  window.alert("The flip was tails and you chose tails...you win!");
}
