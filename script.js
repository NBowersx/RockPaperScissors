let playerScore = 0, computerScore = 0;
const button = document.querySelectorAll('button')
button.forEach(button =>{
button.addEventListener('click', round)
})




function round(e,computerChoice){
computerChoice = Math.floor(Math.random()*3)
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
    playerChoice= e.target.id
    console.log(playerChoice)
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
    
    score.innerHTML= "PLAYER-"+playerScore +" COMPUTER-" +computerScore
    result.innerHTML= ` You played ${playerChoice} the computer played ${computerChoice}`;
    if (playerChoice == computerChoice){
    }
    if (playerScore == 5 || computerScore ==5){
        
        console.log("game is over"); 
    }
}
