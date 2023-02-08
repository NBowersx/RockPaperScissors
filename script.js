let playerChoice = prompt("please enter rock paper or scissors").toLowerCase()
let computerChoice = Math.floor(Math.random()*3)
 if(computerChoice === 0){
  computerChoice = "rock";
 }
 if(computerChoice === 1){
    computerChoice = "paper";
 }
 else if (computerChoice === 2){
   computerChoice = "scissors";
 }