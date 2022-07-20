function computerPlay(){
    let computerMove = ["rock","paper","scissor"];
    const randomMove = Math.floor(Math.random()*3);
    let computer = randomMove === 1 ? "rock":
    randomMove === 2 ? "paper":
    randomMove === 3 ? "scissor":{
    }
    return computerMove[randomMove];
}

const computerSelection = computerPlay()
console.log(computerSelection);
const playerSelection = prompt("Choose rock,paper,or scissor");
if (playerSelection){
    let playerOne = playerSelection.trim().toLowerCase();
    if( playerOne === "rock" || 
        playerOne === "paper" || 
        playerOne === "scissor"){
            
        }
        else{ 
           alert("Your move is invalid");
       }
       
    }       

function results(playerSelection,computerSelection){
        
        if(playerSelection === computerSelection);{
        result = ("IT'S A TIE")}
    
        if(playerSelection ==="rock" && computerSelection ==="scissor"){
            result = ("USER WINS")
        }
        if(playerSelection ==="paper" && computerSelection ==="rock"){
            result = ("USER WINS")
        } 
        if(playerSelection ==="scissor" && computerSelection ==="paper"){
             result = ("USER WINS")}
        
        
        if(playerSelection ==="paper" && computerSelection ==="scissor"){
                result = ("USER LOSES")
            }
        if(playerSelection ==="scissor" && computerSelection ==="rock"){
                result = ("USER LOSES")
            } 
        if(playerSelection ==="rock" && computerSelection ==="paper"){
                 result = ("USER LOSES")}
     
                return(result);
    }   
    
console.log(results(playerSelection,computerSelection));
