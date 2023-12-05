let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    // Generate a random integer between 0 and 9 (inclusive)
    return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (number1, number2) => {
    return Math.abs(number1 - number2);
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    // Check if the user's guess is within the range of 0 to 9
    if (humanGuess < 0 || humanGuess > 9) {
        alert("Please enter a number between 0 and 9.");
        return;
    }

    const humanDifference = getAbsoluteDistance(targetNumber, humanGuess);
    const computerDifference = getAbsoluteDistance(targetNumber, computerGuess);

    if (humanDifference <= computerDifference) {
        // Human wins or it's a tie
        return true;
    } else {
        // Computer wins
        return false;
    }
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    } else {
        console.log('Error');
    }

}

const advanceRound = () => {
    currentRoundNumber++;
}



