// Even check
function isEven(num){
	// Return true if even
	if(num%2===0) {
		return true;
	}
	// Return false if not even
	else {
		return false;
	}
}

// Factorial
// function factorial(num) {
// 	var total = 1;
// 	for (var i = 2; i <= num; i++) {
// 		total*=i;
// 	}
// 	return total;
// }

// Fact2rial
function factorial2(num) {
	var result = 1;
	for (var i = 1; i <= num; i++) {
		result*=i;
	}
	return result;
}

//KebabToSnake - take str and repl all -'s' with _'s
function kebabToSnake(stringin) {
	// Replace all - with _
	var fixedStringin = stringin.replace(/-/g, "_");
	// Return kebab
	return fixedStringin;
}