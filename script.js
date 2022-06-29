/* Rock, Paper, Scissors!
==============================
* A game to be played entirely in the console (for now)
* Choose Rock, Paper, or Scissors and see if you can 
* beat the computer! Good luck!
*/


let playerWeapon;

// Prompt player for choice of weapon and store it in weapon variable
let playerChoice = function() 
{
  let input = prompt("Rock, Paper, or Scissors?");
  // Force the input to uppercase
  playerWeapon = input.toUpperCase();

  if (playerWeapon === "ROCK" || playerWeapon === "PAPER" || playerWeapon === "SCISSORS")
  {
    return playerWeapon;
  }

  else 
  {
    input = prompt("Rock, Paper, or Scissors?");
    playerWeapon = input.toUpperCase();
  }
  return playerWeapon;
}

let computerChoice = function ()
{
  let n = Math.floor((Math.random() * 3) + 1);
  let computerWeapon = (n === 1) ? "ROCK"
    : (n === 2) ? "PAPER"
    : "SCISSORS";
  return computerWeapon;
}
/*
CPU selects R,P,S
  Generate a random number 1, 2, or 3 to represent R,P,S
    Math.floor((Math.random() *  3) + 1))
    If number is 1
      choice = rock
    if number is 2
      choice = paper
    if number is 3
      choice = scissors
    return choice;
/*
Compare Player choice and CPU choice 
switch (true) 
{
  case (playerChoice == rock && compChoice == paper): 
    Message Computer wins!
    break;

  case (playerChoice == rock && compChoice == scissors):
    Message Player wins!
    break;

  case (playerChoice == paper && compChoice == rock):
    Message Player wins!
    break;

  case (playerChoice == paper && compChoice == scissors):
    Message Computer wins!
    break;

  case (playerChoice == scissors && compChoice == rock):
    Message Computer wins!
    break;

  case (playerChoice == scissors && compChoice == paper):
    Message Player wins!
    break;

  default:
    Message It's a tie!
}

Return Message;

Run the Round function 5 times
  (for let i = 0; i < 5; i++)
  


OUTPUT: Player RPS choice + CPU RPS choice
        (round) Player win, CPU win, or Tie

        */