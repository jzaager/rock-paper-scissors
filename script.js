/* Rock, Paper, Scissors!
==============================
* A game to be played entirely in the console (for now)
* Choose Rock, Paper, or Scissors and see if you can 
* beat the computer! Good luck!
*/


let playerWeapon;

// Prompt player for choice of weapon and store it in weapon variable as UPPERCASE
function playerChoice() 
{
  let input = prompt("Rock, Paper, or Scissors?");
  playerWeapon = input.toUpperCase();

  if (playerWeapon === "ROCK" || playerWeapon === "PAPER" || playerWeapon === "SCISSORS")
  {
    return playerWeapon;
  }

  // THIS ONLY WORKS ONCE - CHANGE TO WHILE LOOP
  // If playerWeapon != R, P, or S, continue prompting
  else 
  {
    input = prompt("Rock, Paper, or Scissors?");
    playerWeapon = input.toUpperCase();
  }
  return playerWeapon;
}

function computerChoice()
{
  let n = Math.floor((Math.random() * 3) + 1);
  let computerWeapon = (n === 1) ? "ROCK"
    : (n === 2) ? "PAPER"
    : "SCISSORS";
  return computerWeapon;
}


// Compare Player choice and CPU choice 

function playRound(computerChoice, playerChoice)
{
  playerChoice = playerChoice();
  console.log("Player chooses: " + playerChoice)
  computerChoice = computerChoice();
  console.log("Computer chooses: " + computerChoice)
  let message = "";

   
  if (playerChoice == "ROCK" && computerChoice == "PAPER")
  {
    message = "Computer wins!";
  }
  else if (playerChoice == "ROCK" && computerChoice == "SCISSORS")
  {
    message = "Player wins!";
  }
  else if (playerChoice == "PAPER" && computerChoice == "ROCK")
  {
    message = "Player wins!";
  }
  else if (playerChoice == "PAPER" && computerChoice == "SCISSORS")
  {
    message = "Computer wins!";
  }
  else if (playerChoice == "SCISSORS" && computerChoice == "ROCK")
  {
    message = "Computer wins!";
  }
  else if (playerChoice == "SCISSORS" && computerChoice === "PAPER")
  {
    message = "Player wins!";
  }
  // WHY IS THIS TRUE???
  else if (playerChoice == computerChoice)
  {
    message = "It's a tie!"
  }
  /*else
  {
    message = "It's a tie!";
  }
  */
  return message;
}

/*
Run the Round function 5 times
  (for let i = 0; i < 5; i++)

        */