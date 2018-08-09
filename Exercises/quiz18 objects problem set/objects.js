// Store movies
var movieDB = [
	{
		title: "In Bruges",
		hasWatched: true,
		rating: 4.5
	},
	{
		title: "Frozen",
		hasWatched: true,
		rating: 4.5
	},
	{
		title: "Mad Max Fury Road",
		hasWatched: true,
		rating: 5
	},
	{
		title: "Okja",
		hasWatched: true,
		rating: 4
	},
	{
		title: "Titanic",
		hasWatched: false,
		rating: 4.5
	}
];

// Print movies blurbs
movieDB.forEach(function(movieDB){
	var printBuffer = "You have ";
	if (movieDB.hasWatched) {
		printBuffer+= "watched ";
	} else {
		printBuffer+= "not seen ";
	}
	printBuffer+= "\"" + movieDB.title + "\"" + " - ";
	printBuffer+= movieDB.rating + " stars";
	console.log(printBuffer);
});