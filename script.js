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

//Recieves user choice when clicking
const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", function() {
    playGame('rock');
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", function() {
    playGame('paper');
});

const scissorButton = document.querySelector("#scissor");
scissorButton.addEventListener("click", function() {
    playGame('scissors');
});

//Disables all buttons for 5s after clicking
const button = document.querySelectorAll("button[type='button']")
function disableButton() {
    button.forEach(button => {
        button.disabled = true;
    });

    setTimeout(function() {
        button.forEach(button => {
            button.disabled = false;});
    }, 5000);
}
button.forEach(button => {
    button.addEventListener("click", disableButton);
});


let humanScore = 0;
let computerScore = 0;

function updateScore() {

    const score = document.querySelector(".score");
    score.textContent = `${computerScore} : ${humanScore}`

    score.classList.add("pop");

    setTimeout(function() {
        score.classList.remove("pop");
    }, 3000);

}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a Tie! No one won")
    }

    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') || 
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        setTimeout(function() {
            humanScore++;
            updateScore();
        }, 1000);
        console.log("You win!");
    }

    else {
        setTimeout(function() {
            computerScore++;
            updateScore();
        }, 1000);        
        console.log("You lose!");
    }

    updateScore();
}

function changeHand(humanChoice, computerChoice) {
    const changeHumanHand = document.querySelector(".userHand");
    const changeComputerHand = document.querySelector(".aiHand");

    if (humanChoice === 'paper') {
        changeHumanHand.src = "./images/paper-user.png";
    }
    else if (humanChoice === 'scissors') {
        changeHumanHand.src = "./images/scissor-user.png";
    }
    else {
        changeHumanHand.src = "./images/rock-user.png";
    }

    if (computerChoice === 'paper') {
        changeComputerHand.src = "./images/paper-ai.png";
        }
    else if (computerChoice === 'scissors') {
        changeComputerHand.src = "./images/scissor-ai.png";
    }
    else {
        changeComputerHand.src = "./images/rock-ai.png";
    }

    setTimeout(function () {
        changeComputerHand.src = "./images/rock-ai.png";
        changeHumanHand.src = "./images/rock-user.png";
    }, 5000);
}

function showWinner() {
    
}



function playGame(humanSelection) {
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    changeHand(humanSelection, computerSelection);
    // popoutWinner();
    
    console.log(`Score: You ${humanScore}:${computerScore} Computer`)
    
    if (humanScore === 5) {
        alert("And that's game!\nYou won! Congratulations! Play again?")
        humanScore = 0;
        computerScore = 0;
    }
    if (computerScore === 5) {
        alert("And that's game!\nYou lost! Try again?")
        humanScore = 0;
        computerScore = 0;
    }
}
