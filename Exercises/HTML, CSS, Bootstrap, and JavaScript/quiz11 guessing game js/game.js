// Create a secretNumber
var secretNumber = 4

// Ask user for guess
var guess = prompt("Guess a number");


// Check if guess is correct
if(Number(guess) === secretNumber) {
	alert("Correct!");
}


// Check if guess is higher that secretNumber
else if (Number(guess)>secretNumber) {
	alert("Too high. Guess again!");
}

else {
	alert("Too low. Guess again!");
}