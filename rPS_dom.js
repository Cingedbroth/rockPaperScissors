document.title = "DOM Manipulated RPS";


let calls = 0;
function iSuspectToBeLoopingInfititely() {
  calls += 1;
  if (calls > 100) { debugger; }
}

let resultsDiv = document.getElementById("results");
   
let elPlayerScore = document.createElement("p");
    document.resultsDiv.appendChild(elPlayerScore);
let elCompScore = document.createElement("p");
    document.resultsDiv.appendChild(elCompScore);

function computerPlay(){
    const options = ["rock", "paper", "scissors"];
    let computerSelection = options[Math.floor(Math.random()*3)];
    return computerSelection;
}


function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "rock"){
        return("tie");
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        return("lose");
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        return("win");
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return("win");
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        return("tie");
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        return("lose");
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        return("lose");
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return("win");
    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return("tie");
    }
}


function game(playerSelection){
    let playerScore = 0;
    let compScore = 0;
    
    do {
        let computerSelection = computerPlay();
        
    switch (playRound(playerSelection, computerSelection)) {
        case "tie":
            alert("you and your opponent both chose " + computerSelection + ". It's a tie!");
            let elPlayerScore = "Player Score " + playerScore;
            console.log("Computer score " + compScore);
        break;
        case "win":
            playerScore ++;
            alert(`You chose ${playerSelection} and have conquered the ${computerSelection}!`);
            console.log("player score " + playerScore);
            console.log("Computer score " + compScore);
        break;
        case "lose":
            compScore ++;
            alert(`Your ${playerSelection} experienced defeat to a ${computerSelection}`);
            console.log("player score " + playerScore);
            console.log("Computer score " + compScore);
        }
    } while (!(playerScore === 3 || compScore === 3));


    if (playerScore > compScore) {
        alert("You are the reigning Champion!!");
        console.log("Human wins");
    }else if (playerScore < compScore){
        alert("You fought many battles, but ultimately lost the war");
        console.log("computer wins");
        }
    }




let rockBtn = document.getElementById("rock");
    rockBtn.addEventListener("click", function() {
        game("rock");
    }, false);
let paperBtn = document.getElementById("paper");
    paperBtn.addEventListener("click", function(){
        game("paper");
    }, false);
let scissorBtn = document.getElementById("scissors");
    scissorBtn.addEventListener("click", function(){
        game("scissors");
    }, false);



