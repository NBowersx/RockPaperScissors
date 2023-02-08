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
 round(playerChoice,computerChoice);
console.log("your score "+playerScore +" computers score " +computerScore)

function round(playerChoice,computerChoice)
    if (playerChoice =='paper' && computerChoice == "rock" || 
    playerChoice =='rock' && computerChoice == "scissors" || 
    playerChoice =='scissors' && computerChoice == "paper"){
        playerScore++
    }
    if (computerChoice =='paper' && playerChoice == "rock" || 
    computerChoice =='rock' && playerChoice == "scissors" || 
    computerChoice =='scissors' && playerChoice == "paper"){
    computerScore++
    }
else if (playerChoice == computerChoice){
}