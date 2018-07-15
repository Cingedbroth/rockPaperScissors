let options = ["Rock", " Paper", " Scissors"];
let computerSelection = options[Math.floor(Math.random()*3)];
let playerSelection;
do {
playerSelection = prompt("Which path shall you choose? " + options);
} while (options.indexOf(playerSelection)<0);
let result = "You: " + playerSelection + ", Computer: " + computerSelection + ".";
if (playerSelection === computerSelection){
    result += " No One Wins This Round";
} else {
    let victory = " You are most thoughtful, my liege";
    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        result += victory;
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        result += victory;
    }else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        result += victory;
    }else {
        result += " The result of losing is Death";
    }
}

console.log(result);