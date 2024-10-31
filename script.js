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
        return 'scissors'
    }
}

//Function to output user's choice of rock/paper/scissor
function getHumanChoice() {
    let choice = prompt("What's your choice").toLowerCase();
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("Please pick either rock/paper/scissors!").toLowerCase();
    }
    return choice
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a Tie! No one won")
    }

    else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        console.log("You lose! Paper beats Rock")
    }

    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        console.log("You win! Rock beats Scissors")
    }

    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        console.log("You lose! Scissors beats Paper")
    }

    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        console.log("You win! Paper beats Rock")
    }

    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        console.log("You lose! Rock beats Scissors")
    }

    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        console.log("You win! Scissors beats Paper")
    }

    console.log(`Score: You ${humanScore}:${computerScore} Computer`)
    console.log(humanChoice)
    console.log(computerChoice)
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);