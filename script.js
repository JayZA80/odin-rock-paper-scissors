// Create function to return a number
function randomNumber () {
// Get a random number between 1 and 3
// Round random number DOWN to the nearest integer
// Return the created number
    return Math.floor(Math.random() * 3)
}
// Create a function for the computer to play RPS
function getComputerChoice () {
// Use the function to get a number between 1 and 3
    let returnedNumber = randomNumber();
// If the returned number is 0, the computer picks rock
    if (returnedNumber === 0) {
        return 'Rock';
    }
// Else if the returned number is 1, the computer picks paper
    else if (returnedNumber === 1) {
        return 'Paper';
    }
// Else if the returned number is 2, the computer picks scissors
    else if (returnedNumber === 2) {
        return 'Scissors';
    }
// Else, tell the player if the computer couldn't pick a hand
    else {
        console.log('Uh-oh, something went wrong with the computer picking a hand...');
    }
}
// Create a function to prompt the player for their hand to play
function getPlayerChoice () {
// Prompt the player to pick a hand
    let pickedHand = prompt('It\s game time! Pick rock, paper, or scissors!');
// Capitalize the first letter of the player input
// Turn the rest of the characters in the player input into an all lower case string
// Combine the two returned strings
// Return the new String
    return pickedHand.charAt(0).toUpperCase() + pickedHand.slice(1).toLowerCase();
}
// Create a function to play a single round of RPS with the picked hands as parameters
function rpsRound (playerHand, computerHand) {
// Initialize a variable to store the rounds result
    var result;
    switch (true) { // Using switch(true) is a great alternative to if ... else
// If the player chose rock and the computer chose rock, return the result as a tie
        case playerHand === 'Rock' && computerHand === 'Rock':
            console.log(`It was a tie! Both you and the computer picked ${playerHand}`);
            return result = 'tie';
// If the player chose rock and the computer chose paper, return the result as a loss
        case playerHand === 'Rock' && computerHand === 'Paper':
            console.log(`You lost! ${computerHand} beats ${playerHand}`);
            return result = 'loss';
// If the player chose rock and the computer chose scissors, return the result as a win
        case playerHand === 'Rock' && computerHand === 'Scissors':
            console.log(`You won! ${playerHand} beats ${computerHand}`);
            return result = 'win';
// If the player chose paper and the computer chose rock, return the result as a win
        case playerHand === 'Paper' && computerHand === 'Rock':
            console.log(`You won! ${playerHand} beats ${computerHand}`);
            return result = 'win';
// If the player chose paper and the computer chose paper, return the result as a tie
        case playerHand === 'Paper' && computerHand === 'Paper':
            console.log(`It was a tie! Both you and the computer picked ${playerHand}`);
            return result = 'tie';
// If the player chose paper and the computer chose scissors, return the result as a loss
        case playerHand === 'Paper' && computerHand === 'Scissors':
            console.log(`You lost! ${computerHand} beats ${playerHand}`);
            return result = 'loss';
// If the player chose scissors and the computer chose rock, return the result as a loss
        case playerHand === 'Scissors' && computerHand === 'Rock':
            console.log(`You lost! ${computerHand} beats ${playerHand}`);
            return result = 'loss';
// If the player chose scissors and the computer chose paper, return the result as a win
        case playerHand === 'Scissors' && computerHand === 'Paper':
            console.log(`You won! ${playerHand} beats ${computerHand}`);
            return result = 'win';
// If the player chose scissors and the computer chose scissors, return the result as a tie
        case playerHand === 'Scissors' && computerHand === 'Scissors':
            console.log(`It was a tie! Both you and the computer picked ${playerHand}`);
            return result = 'tie';
// If something went wrong, let the player know
        default:
            console.log('Uh-oh, something went wrong while trying to read the results of the round...')
    }
}
// Write a function to play a 5 round game
function game () {
// Keep track of how many times the computer won
    let computerScore = 0;
// Keep track of how many times the player won
    let playerScore = 0;
// Write a loop that lasts 5 iterations
    for (let i = 0; i < 5; i++) {
// Play one round
        let round = rpsRound(getPlayerChoice(), getComputerChoice());
// If the player won, increase their score
        if (round === 'win') {
            playerScore++;
// If the player lost, increase the computer's score
        } else if (round === 'loss') {
            computerScore++;
// If it was a tie, increase both the player's and the computer's score
        } else {
            playerScore++;
            computerScore++;
        }
    }
// If the player's score is higher than the computer's score, the player won the game
    if (playerScore > computerScore) {
        console.log('Congrats! You won this game!');
// Else, the computer won the game
    } else {
        console.log(`Tough luck! You lost this game...
        The final score was: ${playerScore} - ${computerScore}`);
    }
}
game();