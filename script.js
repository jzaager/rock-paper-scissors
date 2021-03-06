
// Rock, paper, scissors buttons & event listeners
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);

// Player and computer "weapon" choices text
const playerChoice = document.getElementById('player-choice');
const computerSelect = document.getElementById('computer-select');

// Winner and restart button
const printWinner = document.getElementById('print-winner');
const newBtn = document.createElement('button');
newBtn.addEventListener('click', resetScore);

// Score
let playerScore = 0;
let computerScore = 0;
const playerPoints = document.getElementById('player-score');
const computerPoints = document.getElementById('computer-score');

function gameOver(winner){
  printWinner.textContent = `${winner} won!`; 
  newBtn.classList = 'play-again';
  newBtn.textContent = 'Play again?';
  printWinner.appendChild(newBtn);
  return;
}

function resetScore(){
  playerChoice.textContent = '';
  computerSelect.textContent = '';
  printWinner.textContent = '';
  playerScore = 0;
  computerScore = 0;
  playerPoints.textContent = '0';
  computerPoints.textContent = '0';
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
function playRound(e, computerSelection) {

  if (playerScore > 4 || computerScore > 4)
    return;
  
  else {
    playerChoice.textContent = '';
    computerSelect.textContent = '';
    playerSelection = e.target.id.toUpperCase();
    computerSelection = computerChoice();
    
    playerChoice.textContent += `Player Chose: ${playerSelection}`;
    computerSelect.textContent += `Computer Chose: ${computerSelection}`;
    
    if ((playerSelection == "ROCK" && computerSelection == "PAPER") ||
        (playerSelection == "PAPER" && computerSelection == "SCISSORS") ||
        (playerSelection == "SCISSORS" && computerSelection == "ROCK")) {
          ++computerScore;
          computerPoints.textContent = computerScore;
          
          if (computerScore > 4){
            return gameOver("Computer"); 
          } 

          return printWinner.textContent = "Computer wins!";
        }
      
    else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
        (playerSelection == "PAPER" && computerSelection == "ROCK") ||
        (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {
          ++playerScore;
          playerPoints.textContent = playerScore;
          
          if (playerScore > 4){
            return gameOver("Player");
          }
          
          return printWinner.textContent = "Player wins!";
        }
      
    else if (playerSelection === computerSelection)
      return printWinner.textContent = "It's a tie!";
  }
}