// prompt user for number
let number = prompt("Enter any number between 1 to 100");
// check if number is bewtween 1 to 100
if (number > 0 && number <= 100) {
 
  switch (true) {
    case (number >= 60 && number <= 69):
      console.log("You received a D");
      break;
    case (number >= 70 && number <= 79):
      console.log("You received a C");
      break;
    case (number >= 80 && number <= 89):
      console.log("You received a B");
      break;
    case (number >= 90 && number <= 100):
      console.log("You received a A");
      break;
    default:
      console.log("You received an F");
     
  }
} else {
  alert("Only number between 1 to 100 is accepted");
}
