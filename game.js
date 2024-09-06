// Game Variables
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Elements from HTML
const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');

// Function to handle guess checking
function checkGuess() {
    let userGuess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(userGuess)) {
        message.textContent = "Please enter a valid number!";
    } else if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts!`;
        message.style.color = "#28a745";
    } else if (userGuess > randomNumber) {
        message.textContent = "Too high! Try again.";
        message.style.color = "#ffc107";
    } else {
        message.textContent = "Too low! Try again.";
        message.style.color = "#ffc107";
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
}

// Event Listener for Guess Submission Button
submitGuess.addEventListener('click', checkGuess);

// Event Listener for Enter Key Press
guessInput.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});
