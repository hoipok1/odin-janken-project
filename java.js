let userScore = 0;
let computerScore = 0;
let userChoice;
let computerChoice;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const userChoice_span = document.getElementById("user-choice");
const computerChoice_span = document.getElementById("computer-choice");

function computerPlay(){
    let computerMove = ["rock","paper","scissor"];
    const randomMove = Math.floor(Math.random()*3);
    if (randomMove === 0){computerChoice = "rock"}
    if (randomMove === 1){computerChoice = "paper"}
    if (randomMove === 2){computerChoice = "scissor"}
    computerChoice_span.innerHTML = computerChoice;
    return computerMove[randomMove];
}

const computerSelection = computerPlay()
console.log(computerSelection);
const playerSelection = prompt("Choose rock,paper,or scissor");

function playerOne (playerSelection){
    let playerOne = playerSelection.trim().toLowerCase();
    if( playerOne === "rock" || 
        playerOne === "paper" || 
        playerOne === "scissor"){
        userChoice_span.innerHTML = userChoice = playerOne;   
        return (playerOne);
        }
        else{ 
           alert("Your move is invalid")
        }
    }       
const playerMove = playerOne(playerSelection)

function results(playerMove,computerSelection){
        
    if(playerMove === computerSelection){
        alert("IT'S A TIE")} 
        
        
        if(playerMove ==="rock" && computerSelection ==="scissor"){
            alert("USER WINS");
            userScore++
        }
        if(playerMove ==="paper" && computerSelection ==="rock"){
            alert("USER WINS");
            userScore++
        } 
        if(playerMove ==="scissor" && computerSelection ==="paper"){
            alert("USER WINS");
            userScore++
        }
        

        if(playerMove ==="paper" && computerSelection ==="scissor"){
            alert("USER LOSES");
                
            }
        if(playerMove ==="scissor" && computerSelection ==="rock"){
            alert("USER LOSES");
                
            } 
        if(playerMove ==="rock" && computerSelection ==="paper"){
            alert("USER LOSES");
                 
            }
    }   
    
    console.log(results(playerMove,computerSelection));
    
