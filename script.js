//Function to output random rock/paper/scissor as computer's choice
function getComputerChoice() {
    let random = Math.floor(Math.random()*(3 - 1 + 1) + 1); //function to get numbers between 1 and 3
    if (random === 1) {
        return 'rock'
    }
    else if (random === 2) {
        return 'paper'
    }
    else {
        return 'scissor'
    }
}


//Function to output user's choice of rock/paper/scissor
function getHumanChoice() {
    let choice = prompt("What's your choice").toLowerCase();
    while (choice != "rock" && choice != "paper" && choice != "scissor") {
        choice = prompt("Please pick either rock/paper/scissor!").toLowerCase();
    }
    return choice
}



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let compareChoice = humanChoice.localeCompare(computerChoice);
    if (compareChoice === 1) {
        humanScore++;
        console.log(`Human won!\n Score is Human${humanScore}:${computerScore}Computer`);
    }
    else if (compareChoice === -1) {
        computerScore++;
        console.log(`Computer won!\n Score is Human${humanScore}:${computerScore}Computer`);
    }
    else {
        console.log(`No one won!\n Score is Human${humanScore}:${computerScore}Computer`);
    }
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);