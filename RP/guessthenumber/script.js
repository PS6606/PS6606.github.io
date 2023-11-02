function checkGuess() {
  var guessInput = document.getElementById("guessInput");
  var guess = guessInput.value;
  var randomNumber = Math.floor(Math.random() * 10) + 1;

  if (guess == randomNumber) {
    document.getElementById("message").innerHTML = "Congratulations! You guessed the correct number.";
  } else {
    document.getElementById("message").innerHTML = "Sorry, the correct number was " + randomNumber + ". Try again!";
  }
}
