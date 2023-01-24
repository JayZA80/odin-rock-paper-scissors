let computerScore = 0;
let playerScore = 0;

let rockBtn = document.getElementById('rockBtn');
let paperBtn = document.getElementById('paperBtn');
let scissorsBtn = document.getElementById('scissorsBtn');
let scoreMsg = document.getElementById('scoreMsg');
let pScore = document.getElementById('pScore');
let cpuScore = document.getElementById('cpuScore');

const btnList = [rockBtn, paperBtn, scissorsBtn];

btnList.map(el => {
    el.addEventListener('click', () => {
        game(el.innerText)
    })
})

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
        alert('Uh-oh, something went wrong with the computer picking a hand...');
    }
}

function rpsRound (playerHand, computerHand) {
    var result;
    switch (true) { // Using switch(true) is a great alternative to if ... else
        case playerHand === 'Rock' && computerHand === 'Rock':
            scoreMsg.innerText = `It was a tie! Both you and the computer picked ${playerHand}`;
            return result = 'tie';
        case playerHand === 'Rock' && computerHand === 'Paper':
            scoreMsg.innerText = `You lost! ${computerHand} beats ${playerHand}`;
            return result = 'loss';
        case playerHand === 'Rock' && computerHand === 'Scissors':
            scoreMsg.innerText = `You won! ${playerHand} beats ${computerHand}`;
            return result = 'win';
        case playerHand === 'Paper' && computerHand === 'Rock':
            scoreMsg.innerText = `You won! ${playerHand} beats ${computerHand}`;
            return result = 'win';
        case playerHand === 'Paper' && computerHand === 'Paper':
            scoreMsg.innerText = `It was a tie! Both you and the computer picked ${playerHand}`;
            return result = 'tie';
        case playerHand === 'Paper' && computerHand === 'Scissors':
            scoreMsg.innerText = `You lost! ${computerHand} beats ${playerHand}`;
            return result = 'loss';
        case playerHand === 'Scissors' && computerHand === 'Rock':
            scoreMsg.innerText = `You lost! ${computerHand} beats ${playerHand}`;
            return result = 'loss';
        case playerHand === 'Scissors' && computerHand === 'Paper':
            scoreMsg.innerText = `You won! ${playerHand} beats ${computerHand}`;
            return result = 'win';
        case playerHand === 'Scissors' && computerHand === 'Scissors':
            scoreMsg.innerText = `It was a tie! Both you and the computer picked ${playerHand}`;
            return result = 'tie';
        default:
            alert('Uh-oh, something went wrong while trying to read the results of the round...')
    }
}

function game (choice) {
    let round = rpsRound(choice, getComputerChoice());
    if (round === 'win') {
        playerScore++;
        pScore.innerText = playerScore;
    } else if (round === 'loss') {
        computerScore++;
        cpuScore.innerText = computerScore;
    } else {
        playerScore++;
        computerScore++;
        pScore.innerText = playerScore;
        cpuScore.innerText = computerScore;
    }
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            alert('Congrats! You won this game!');
            location.reload();
        } else if (computerScore > playerScore) {
            alert(`Tough luck! You lost this game...`);
            location.reload();
        } else {
            alert('UNBELIEVABLE! IT WAS A TIE WITH 5 POINTS EACH!');
            location.reload();
        }
    }
}