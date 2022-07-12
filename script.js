/*==============================
 *    Rock, Paper, Scissors!
 *==============================
 *
 * A game to be played entirely in the console (for now)
 * Choose Rock, Paper, or Scissors and see if you can 
 * beat the computer! Good luck!
 */

/* let playerWeapon;

// Prompt player for choice of weapon and store it in playerWeapon as UPPERCASE
let playerChoice = function() 
{
  const input = prompt("Rock, Paper, or Scissors?");
  playerWeapon = input.toUpperCase();

  if (playerWeapon === "ROCK" || playerWeapon === "PAPER" || playerWeapon === "SCISSORS")
    return playerWeapon;
  else
    return playerChoice();
} */

// ROCK
const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', playRound);

// PAPER
const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', playRound);

// SCISSORS
const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', playRound);

playerChoice = document.getElementById('player-choice');
computerSelect = document.getElementById('computer-select');
printWinner = document.getElementById('print-winner');

let playerScore = 0;
let computerScore = 0;
const playerPoints = document.getElementById('player-score');
const computerPoints = document.getElementById('computer-score');

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
function playRound(e, computerSelection) {
  playerChoice.textContent = '';
  computerSelect.textContent = '';

  playerSelection = e.target.id.toUpperCase();
  computerSelection = computerChoice();

  playerChoice.textContent += `Player Chose: ${playerSelection}`;
  computerSelect.textContent += `Computer Chose: ${computerSelection}`;

  if (playerScore === 5) {
    // TODO: ADD PLAY AGAIN? BUTTON
    
    return printWinner.textContent = "Player wins!";
  }

  if (computerScore === 5) {

    return printWinner.textContent = "Computer wins!";
  }
    
   
  if ((playerSelection == "ROCK" && computerSelection == "PAPER") ||
      (playerSelection == "PAPER" && computerSelection == "SCISSORS") ||
      (playerSelection == "SCISSORS" && computerSelection == "ROCK")) {
        computerScore++;
        computerPoints.textContent = computerScore;
        return printWinner.textContent = "Computer wins!";
      }
    
  else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
      (playerSelection == "PAPER" && computerSelection == "ROCK") ||
      (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {
        playerScore++;
        playerPoints.textContent = playerScore;;
        return printWinner.textContent = "Player wins!";
      }
    
  else if (playerSelection === computerSelection)
    return printWinner.textContent = "It's a tie!";
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