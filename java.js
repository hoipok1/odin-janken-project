let userScore = 0;
let computerScore = 0;
let userChoice;
let computerChoice;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const userChoice_span = document.getElementById("user-choice");
const computerChoice_span = document.getElementById("computer-choice");
const result_span = document.getElementById("result")

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



function playerOne (){
    let playerSelection = prompt("Choose rock,paper,or scissor");
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
const playerMove = playerOne()



function results(playerMove,computerSelection){
            
    if(playerMove === computerSelection){
        result = "IT'S A TIE"} 
        
        
        if(playerMove ==="rock" && computerSelection ==="scissor"){
            result = "USER WINS"
            userScore++
            userScore_span.innerHTML = userScore;
        }
        if(playerMove ==="paper" && computerSelection ==="rock"){
            result = "USER WINS"
            userScore++
            userScore_span.innerHTML = userScore;
        } 
        if(playerMove ==="scissor" && computerSelection ==="paper"){
            result = "USER WINS"
            userScore++
            userScore_span.innerHTML = userScore;
        }
        

        if(playerMove ==="paper" && computerSelection ==="scissor"){
            result = "USER LOSES"
            computerScore++
            computerScore_span.innerHTML = computerScore;     
            }
        if(playerMove ==="scissor" && computerSelection ==="rock"){
            result = "USER LOSES"
            computerScore++
            computerScore_span.innerHTML = computerScore;     
            } 
        if(playerMove ==="rock" && computerSelection ==="paper"){
            result = "USER LOSES"
            computerScore++
            computerScore_span.innerHTML = computerScore;     
            }
            
            result_span.innerHTML = result;    
             
        }
         
    console.log(results(playerMove,computerSelection));