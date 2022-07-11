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
let playerChoice = function() 
{
  const input = prompt("Rock, Paper, or Scissors?");
  playerWeapon = input.toUpperCase();

  if (playerWeapon === "ROCK" || playerWeapon === "PAPER" || playerWeapon === "SCISSORS")
    return playerWeapon;
  else
    return playerChoice();
}

// Computer selects 1, 2, or 3 randomly, returns ROCK, PAPER, or SCISSORS
let computerChoice = function()
{
  const n = Math.floor((Math.random() * 3) + 1);
  const computerWeapon = (n === 1) ? "ROCK"
    : (n === 2) ? "PAPER"
    : "SCISSORS";
  return computerWeapon;
}

let playerScore = 0;
let computerScore = 0;

// Compare Player choice and CPU choice and declare winner
function playRound(a, b) {
  a = playerChoice();
  console.log("Player chooses: " + a);
  b = computerChoice();
  console.log("Computer chooses: " + b);
   
  if ((a == "ROCK" && b == "PAPER") ||
      (a == "PAPER" && b == "SCISSORS") ||
      (a == "SCISSORS" && b == "ROCK")) {
        computerScore++;
        return "Computer wins!";
      }
    
  else if ((a == "ROCK" && b == "SCISSORS") ||
      (a == "PAPER" && b == "ROCK") ||
      (a == "SCISSORS" && b == "PAPER")) {
        playerScore++;
        return "Player wins!";
      }
    
  else if (a === b)
    return "It's a tie!";
}

/* function game()
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
} */