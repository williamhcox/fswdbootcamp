// Creating dummy arrays
var megaArray = [[1,3,6,"a","c"], [1,1,1,1,2], [3,3,3], [7,9,25]];
// Initialize array choice variable
var chosenArray;
// Initialize all actions for program
var possibleActions = ["printReverse", "isUniform", "sumArray", "max", "chooseArray", "listActions", "listArrays", "quit"];
// Initialize chosen action variable
var chosenAction;
// Initialize the searchResult variable
var searchResult;
// Initialize the sumResult varaible
var sumResult;
// Initialize theMax variable
var theMax;

// Function that takes array and spits out in reverse via console log
function printReverse (chosenArray) {
	chosenArray.forEach(function(arrayItem, i) {
		console.log(chosenArray[chosenArray.length-(i+1)]);
	})
}

// Function that determines if array has all uniform inputs
function isUniform (chosenArray) {
	searchResult=true;
	chosenArray.forEach(function(arrayItem,i) {
		if (chosenArray[0] !== chosenArray[i]) {
			searchResult = false;
		}
	});
	return searchResult;
}

// Function that accepts array of numbers and returns sum of contained numbers
function sumArray (chosenArray) {
	sumResult = 0;
	chosenArray.forEach (function (arrayItem, i) {
		sumResult += arrayItem;
	});
	console.log(sumResult);
	return sumResult;
}

// Function that accepts array of numbers and returns max number in array.
function max (chosenArray) {
	theMax = 0;
	chosenArray.forEach(function (arrayItem, i) {
		if (arrayItem > theMax) {
			theMax = arrayItem;
		}
	});
	return theMax;
}

// Function that lists in console all actions using forEach
function listActions () {
	possibleActions.forEach(function(listAction, i) {
		console.log(i + ": " + listAction);
	});
}

// Function that lists in console all arrays in megaArray using forEach
function listArrays () {
	megaArray.forEach(function(listArray, i) {
		console.log(i + ": " + listArray);
	});
}

// Function that prompts user for array to be targeted
function chooseArray () {
	listArrays();
	chosenArray = megaArray[prompt("Which array would you like to work with? Input index # only")];
}

function chooseAction() {
	listActions ();
	chosenAction = possibleActions[prompt("What would you like to do? Type action index # only please.")];

	if (chosenAction === "printReverse") {
		printReverse(chosenArray);
	}
	else if (chosenAction === "isUniform") {
		isUniform(chosenArray);
	}
	else if (chosenAction === "sumArray") {
		sumArray(chosenArray);
	}
	else if (chosenAction === "max") {
		max(chosenArray);
	}
	else if (chosenAction === "chooseArray") {
		chooseArray();
	}
	else if (chosenAction === "listActions") {
		listActions();
	}
	else if (chosenAction === "listArrays") {
		listArrays(chosenArray);
	}
	if (chosenAction !== "quit") {
		chooseAction();
	}

}

// Run initial choice selection
chooseArray();
chooseAction();