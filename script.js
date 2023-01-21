function randomNumber () {
    return Math.floor(Math.random() * 3)
}

function getComputerChoice () {
    let returnedNumber = randomNumber();
    if (returnedNumber === 0) {
        return 'Rock';
    } else if (returnedNumber === 1) {
        return 'Paper';
    } else if (returnedNumber === 2) {
        return 'Scissors';
    } else {
        console.log('Uh-oh, something went wrong with the computer picking a hand...');
    }
}

function getPlayerChoice () {
    let pickedHand = prompt('It\s game time! Pick rock, paper, or scissors!');
    return pickedHand.charAt(0).toUpperCase() + pickedHand.slice(1).toLowerCase();
}

function rpsRound (playerHand, computerHand) {
    var result;
    switch (true) { // Using switch(true) is a great alternative to if ... else
        case playerHand === 'Rock' && computerHand === 'Rock':
            console.log(`It was a tie! Both you and the computer picked ${playerHand}`);
            return result = 'tie';
        case playerHand === 'Rock' && computerHand === 'Paper':
            console.log(`You lost! ${computerHand} beats ${playerHand}`);
            return result = 'loss';
        case playerHand === 'Rock' && computerHand === 'Scissors':
            console.log(`You won! ${playerHand} beats ${computerHand}`);
            return result = 'win';
        case playerHand === 'Paper' && computerHand === 'Rock':
            console.log(`You won! ${playerHand} beats ${computerHand}`);
            return result = 'win';
        case playerHand === 'Paper' && computerHand === 'Paper':
            console.log(`It was a tie! Both you and the computer picked ${playerHand}`);
            return result = 'tie';
        case playerHand === 'Paper' && computerHand === 'Scissors':
            console.log(`You lost! ${computerHand} beats ${playerHand}`);
            return result = 'loss';
        case playerHand === 'Scissors' && computerHand === 'Rock':
            console.log(`You lost! ${computerHand} beats ${playerHand}`);
            return result = 'loss';
        case playerHand === 'Scissors' && computerHand === 'Paper':
            console.log(`You won! ${playerHand} beats ${computerHand}`);
            return result = 'win';
        case playerHand === 'Scissors' && computerHand === 'Scissors':
            console.log(`It was a tie! Both you and the computer picked ${playerHand}`);
            return result = 'tie';
        default:
            console.log('Uh-oh, something went wrong while trying to read the results of the round...')
    }
}

function game () {
    let computerScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
        let round = rpsRound(getPlayerChoice(), getComputerChoice());
        if (round === 'win') {
            playerScore++;
        } else if (round === 'loss') {
            computerScore++;
        } else {
            playerScore++;
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log('Congrats! You won this game!');
    } else {
        console.log(`Tough luck! You lost this game...
        The final score was: ${playerScore} - ${computerScore}`);
    }
}

game();