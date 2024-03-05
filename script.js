function getComputerChoice(){

  let randomNum = Math.random();

  if (randomNum < 1/3){
    return "rock";
  }else if(randomNum < 2/3){ // If the number is less than 2/3 but more than 1/3
    return "paper";
  }else{ // If the number is more than or equal to 2/3
     return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  // your code here!
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  if(playerChoice === computerChoice){
    return "Tie!!";
  }else if(
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ){
    return `You Win! ${playerChoice} beats ${computerChoice}`;
  } else{
    return`You Lose! ${computerChoice} beat ${playerChoice}`;
  }
}


function playGame(){
  let win = 0;
  let lose = 0;
  let tie = 0;

  for (let i = 0; i < 5; i++){
    let playerInput = prompt("Choose your move: ");
    let comptuerInput = getComputerChoice();

    let outcome = playRound(playerInput, comptuerInput);
    console.log(outcome);

    if(outcome.includes("Win")) {
      win++;
    } else if (outcome.includes("Lose")) {
      lose++;
    } else {
      tie++;
    }
 }

 if (win > lose){
    console.log("You are the final Winner!");
  }else if (lose > win){
    console.log("You are the final Loser!");
  }else{
    console.log("No one is Winner or Loser!");
  }
}

