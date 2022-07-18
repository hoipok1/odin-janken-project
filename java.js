function computerPlay(){
    let computerMove = ["rock","paper","scissor"];
    const randomMove = Math.floor(Math.random()*3);

    return computerMove[randomMove];
}
console.log(computerPlay());

const computerSelection = computerPlay()
const playerSelection = prompt("Choose rock,paper,or scissor");
if (playerSelection){
    let playerOne = playerSelection.trim().toLowerCase();
    if( playerOne === "rock" || 
        playerOne === "paper" || 
        playerOne === "scissor");
       else{
           alert("Your move is invalid")
       }
    }       

function playRound(playerSelection,computerSelection){
    switch(playerSelection + computerSelection){
        case (playerSelection ==="rock" && computerSelection ==="scissor"):
        case (playerSelection ==="paper" && computerSelection ==="rock"):
        case (playerSelection ==="scissor" && computerSelection ==="paper"):         
            console.log("USER WINS")
            break;
        
        case (playerSelection ==="rock" && computerSelection ==="paper"):
        case (playerSelection ==="paper" && computerSelection ==="scissor"):
        case (playerSelection ==="scissor" && computerSelection ==="rock"):
            console.log("USER LOSES")
            break;
        
        case (playerSelection === computerSelection):
            console.log("USER TIES")
            break;    
    }   
};