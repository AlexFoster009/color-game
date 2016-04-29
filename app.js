
var colors = [];


var squares = document.querySelectorAll('.square');
var pickedColor;
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('reset');
var modeButtons = document.getElementsByClassName("mode");
var colors = generateRandomColors(numSquares);
var numSquares = 6;
colorDisplay.textContent = pickedColor;

init();


function init(){

	//mode buttons event listeners
	for(var i = 0; i < modeButtons.length; i++){

	modeButtons[i].addEventListener("click", function(){

		modeButtons[0].classList.remove('selected');
		modeButtons[1].classList.remove('selected');

		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares =6;
		reset();
		//figure out how many squares to show
		//pick new colors
		//update page to reflect changes
	});

}

for (var i = 0; i < squares.length; i++){

		//add click listeners to squares
		squares[i].addEventListener("click" ,function(){


			//grab color of clicked square
			var clickedColor = this.style.background;

			//compare clicked color with picked color
			if(clickedColor === pickedColor){

				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again!";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {

				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}


		});
}

reset();
}


function reset(){

	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor()
	//change color dispaly to match picked color
	colorDisplay.textContent = pickedColor;
	//change color of squares.
	for(var i = 0; i < squares.length; i++){

		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {

			squares[i].style.display = "none";
		}

		
	}
	h1.style.background = "steelblue";
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";

}
//reset game and generate new colors.

resetButton.addEventListener("click", function(){
	reset();
});




function changeColors(color){

	//loop through al lsquares and change each color to match given color

	for(var i = 0; i < squares.length; i++){

		squares[i].style.background = color;
	}

}

function pickColor(){

	var random = Math.floor(Math.random() * colors.length);

	return colors[random];
}
function generateRandomColors(num){


	//make an array
	var arr = []
	//add num random colors to array

	//repeat num times
	for (var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
		return arr;
}


function randomColor(){

	//pick a "red" from 0 -255
	var red = Math.floor(Math.random() * 256);
	//pick a "green" from 0 -255
	var green = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 -255
	var blue = Math.floor(Math.random() * 256);

	return "rgb(" + red + ", " + green + ", " + blue + ")";

}