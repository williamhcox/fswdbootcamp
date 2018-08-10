var	age	=	prompt("What is your age?");
if (age < 0) {
	console.log("Error. Negative age.")
}
if (age%2 != 0) {
	console.log("Your age is odd!")
}
if (age == 21) {
	console.log("Happy 21st birthday!")
}
if (age%age == 0) {
	console.log("Your age is a perfect square!")
}