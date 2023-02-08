let playerScore = 0, computerScore = 0;
while (playerScore< 5 && computerScore < 5){

    
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
console.log(computerChoice)

//getting the players selection
let playerChoice = prompt("please enter rock paper or scissors").toLowerCase()
console.log(playerChoice)


round(playerChoice,computerChoice);
console.log("your score "+playerScore +" computers score " +computerScore)
}
function round(playerChoice,computerChoice){
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
}
if (playerScore == 5 || computerScore ==5){
        console.log("game is over"); 
    }

    /**buttons not typing
     * listener event that calls round
     * div for results
     * console logs into doms