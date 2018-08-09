var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  //Mode button event listeners
  for(var i=0; i< modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selectedDifficulty");
      modeButtons[1].classList.remove("selectedDifficulty");
      this.classList.add("selectedDifficulty");
      this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
      reset();
    });
  }

  // Populate squares with colors and watch for win or lose
  for (var i = 0; i < squares.length; i++) {
    // Add click listeners to squares
    squares[i].addEventListener("click", function(){ 
      // Grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // Compare color to pickedColor
      // Correct behavior
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!"
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      }
      // Lose behavior
      else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again."
      }
    });
  }
  reset();
}




function reset(){
  // generate all new colors
  colors = generateRandomColors(numberOfSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  resetButton.textContent = "New Colors";
  // Change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  // change colors of squares
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  // Reset h1 and message
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = ""
}



// Reset board using button
resetButton.addEventListener("click", function(){
  reset();
});

colorDisplay.textContent = pickedColor;




function changeColors (color){
  // Loop through all squares
  for (var i = 0; i < colors.length; i++) {
    // Change each color to match given color
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  // Make an array
  var arr = [];
  // repeat num times;
  for (var i = 0; i < num; i++) {
    // Get random color and push into arr
    arr.push(randomColor());
  }
  // Return arr
  return arr;
}


function randomColor(){
  // Pick a red from 0-255
  var r = Math.floor(Math.random() * 256);
  // Pick a green from 0-255
  var g = Math.floor(Math.random() * 256);
  // Pick a blue from 0-255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
};