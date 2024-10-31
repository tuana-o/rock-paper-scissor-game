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



function getHumanChoice() {
    return prompt("What's your choice");
}

console.log(getHumanChoice())