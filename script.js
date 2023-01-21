// Create function to return a number
// Get a random number between 1 and 3
// Round random number DOWN to the nearest integer
function getRandomInt () {
    return Math.floor(Math.random() * 3)
}
// Create a function for the computer to play RPS

function getComputerChoice () {
// Use a function to get a number between 1 and 3
    let hand = getRandomInt();
    switch (hand) {
// If the returned number is 0, the computer picks rock
        case 0:
            return 'rock';
// Else if the returned number is 1, the computer picks paper
        case 1:
            return 'paper';
// Else if the returned number is 2, the computer picks scissors
        case 2:
            return 'scissors';
// Else, tell the player if the computer didn't pick a hand
        default:
            console.log('Something went wrong with the Computer')
    }
}
// Create a function to prompt the player for their hand to play
function getPlayerChoice () {
// Turn the player input into an all lower case string
return toLowerCase(prompt('It\s game time! Pick your hand: rock, paper, or scissors?'));
}
// Create a function to play a single round of RPS
function playRound () {
// Run function for the computer to play
    let computerHand = getComputerChoice();
// Prompt user for their hand
    let playerHand = getPlayerChoice();
    switch (plays) {
// If the player chose rock and the computer chose rock, return the result as a tie
        case playerHand === 'rock' && computerHand === 'rock':
            return 'tie';
// If the player chose rock and the computer chose paper, return the result as a loss
        case playerHand === 'rock' && computerHand === 'paper':
            return 'loss';
// If the player chose rock and the computer chose scissors, return the result as a win
        case playerHand === 'rock' && computerHand === 'scissors':
            return 'win';
// If the player chose paper and the computer chose rock, return the result as a win
        case playerHand === 'paper' && computerHand === 'rock':
            return 'win';
// If the player chose paper and the computer chose paper, return the result as a tie
        case playerHand === 'paper' && computerHand === 'paper':
            return 'tie';
// If the player chose paper and the computer chose scissors, return the result as a loss
        case playerHand === 'paper' && computerHand === 'scissors':
            return 'loss';
// If the player chose scissors and the computer chose rock, return the result as a loss
        case playerHand === 'scissors' && computerHand === 'rock':
            return 'loss';
// If the player chose scissors and the computer chose paper, return the result as a win
        case playerHand === 'scissors' && computerHand === 'paper':
            return 'win';
// If the player chose scissors and the computer chose scissors, return the result as a tie
        case playerHand === 'scissors' && computerHand === 'scissors':
            return 'tie';
// If something went wrong, let the player know
        default:
            console.log('Something went wrong this round');
    }
}
// Write a function to play a 5 round game
function game () {
// Keep track of how many times the computer won
    let computerScore = 0;
// Keep track of how many times the player won
    let playerScore = 0;
// Write a loop that lasts 5 iterations
    for (let i = 0; i <= 5; i++) {
// Play one round
        let result = playRound();
// If the player won, increase their score
        if (result === 'win') {
            console.log('You won the round!');
            playerScore++;
// If the player lost, increase the computer's score
        } else if (result === loss) {
            console.log('You lost the round!');
            computerScore++;
// If it was a tie, increase both the player's and the computer's score
        } else {
            console.log('This round was a tie!')
            playerScore++;
            computerScore++;
        }
    }
// After the loop ends, show who won
    if (playerScore > computerScore) {
        console.log('Congrats! You won the game!')
    } else {
        console.log('Luck was not on your side, the computer won the game!')
    }
}

game();