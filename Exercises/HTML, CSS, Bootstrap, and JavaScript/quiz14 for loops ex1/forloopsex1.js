console.log("Print all #s between -10 and 19");
for (var i = -10; i < 20; i++) {
	console.log(i);
}

console.log("Print all even #s between 10 and 40");
for (var i = 10; i < 40; i+=2) {
	console.log(i);
}

console.log("Print all odd #s between 300 and 333");
for (var i = 300; i < 333; i++) {
	if (i%2===1) {
		console.log(i);
	}
}

console.log("Print all #s between 5 and 60 divisible by 5 and 3");
for (var i = 5; i < 60; i++) {
	if (i%5===0 && i%3===0) {
		console.log(i);
	}
}