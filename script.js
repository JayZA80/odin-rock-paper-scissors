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
// Turn the player input into an all lower case string
// Capitalize the first letter of the input
// Return the player's choice
// Create a function to play a single round of RPS
// Initialize a variable to store the result
// Run function for the computer to play
// Prompt user for their hand
// If the player chose rock and the computer chose rock, return the result as a tie
// If the player chose rock and the computer chose paper, return the result as a loss
// If the player chose rock and the computer chose scissors, return the result as a win
// If the player chose paper and the computer chose rock, return the result as a win
// If the player chose paper and the computer chose paper, return the result as a tie
// If the player chose paper and the computer chose scissors, return the result as a loss
// If the player chose scissors and the computer chose rock, return the result as a loss
// If the player chose scissors and the computer chose paper, return the result as a win
// If the player chose scissors and the computer chose scissors, return the result as a tie
// If something went wrong, let the player know
// Return the result of the round
// Write a function to play a 5 round game
// Keep track of how many times the computer won
// Keep track of how many times the player won
// Write a loop that lasts 5 iterations
// Play one round
// If the player won, increase their score
// If the player lost, increase the computer's score
// If it was a tie, increase both the player's and the computer's score
// After the loop ends, show who wo