/*==============================
 *    Rock, Paper, Scissors!
 *==============================
 *
 * A game to be played entirely in the console (for now)
 * Choose Rock, Paper, or Scissors and see if you can 
 * beat the computer! Good luck!
 */

let playerWeapon;

// Prompt player for choice of weapon and store it in playerWeapon as UPPERCASE
function playerChoice() 
{
  const input = prompt("Rock, Paper, or Scissors?");
  playerWeapon = input.toUpperCase();

  if (playerWeapon === "ROCK" || playerWeapon === "PAPER" || playerWeapon === "SCISSORS")
    return playerWeapon;

  else
    return playerChoice();
}

// Computer selects 1, 2, or 3 randomly, returns ROCK, PAPER, or SCISSORS
function computerChoice()
{
  const n = Math.floor((Math.random() * 3) + 1);
  const computerWeapon = (n === 1) ? "ROCK"
    : (n === 2) ? "PAPER"
    : "SCISSORS";
  return computerWeapon;
}

// Compare Player choice and CPU choice and declare winner
function playRound(playerChoice, computerChoice)
{
  playerChoice = playerChoice();
  console.log("Player chooses: " + playerChoice)

  computerChoice = computerChoice();
  console.log("Computer chooses: " + computerChoice)
  
  let message = "";
   
  if ((playerChoice == "ROCK" && computerChoice == "PAPER") ||
      (playerChoice == "PAPER" && computerChoice == "SCISSORS") ||
      (playerChoice == "SCISSORS" && computerChoice == "ROCK"))
    message = "Computer wins!";

  else if ((playerChoice == "ROCK" && computerChoice == "SCISSORS") ||
      (playerChoice == "PAPER" && computerChoice == "ROCK") ||
      (playerChoice == "SCISSORS" && computerChoice == "PAPER"))
    message = "Player wins!";

  else if (playerChoice === computerChoice)
    message = "It's a tie!";
    
  console.log(message);
  return message;
}

function game()
{
  let playerScore = 0;
  let computerScore = 0;
  let finalWinner;

  // Loop through game until player or computer reach score of 5 
  for (let i = 0; playerScore < 5 || computerScore < 5; i++)
  {
    let play = playRound(playerChoice, computerChoice);
  
    if (play === "Player wins!")
      playerScore++;

    else if (play === "Computer wins!")
      computerScore++;

    if (playerScore == 5)
    {
      finalWinner = "Player is the champion!";
      console.log("Player Score: " + playerScore);
      console.log("Computer Score is: " + computerScore);
      return finalWinner;
    }

    if (computerScore == 5)
    {
      finalWinner = "Computer is the champion!";
      console.log("Player Score: " + playerScore);
      console.log("Computer Score is: " + computerScore);
      return finalWinner;
    }
    console.log("Player Score: " + playerScore);
    console.log("Computer Score is: " + computerScore);
    console.log("\n");
  }
}