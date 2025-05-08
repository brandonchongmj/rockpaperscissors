
function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 1/3) {
        return "rock";
    } else if (randomNumber < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice());
console.log(getComputerChoice());

function getHumanChoice() {
    const userInput = prompt("Please enter your choice: rock, paper, or scissors");
    return userInput;
  }
  
  // Test the function
  const humanChoice = getHumanChoice();
  console.log(`You chose: ${humanChoice}`);