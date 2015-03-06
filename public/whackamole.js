var whackBoxes = document.getElementsByClassName('whack-boxes');
var timeRemaining = [];
var score = [''];

// function that returns a random div
function randomBox() {
 	var selection = Math.floor(Math.random() * 9);
 	var returnedValue = $(whackBoxes[selection]);
 		return returnedValue 		
};

// animates the moles by adding class fade-in and when game is over changes timer text to say game over
//, also stops the game from running
function moleAnimation() {
	var random = randomBox();
	var beginAnimate = setInterval(function() {
	randomBox().addClass('fade-in');
	},1500 / score.length);
	
	setInterval(function() {
	if(timeRemaining.length == 31){
		clearInterval(beginAnimate);
		$('#timer').text("Game Over!")
		};
  	},50);
};

// ends the animation by removing class fade-in
function endOfAnimation() {
	setInterval(function(){
	randomBox().removeClass('fade-in');
	},200);
};

// this is what keeps the and displays game time remaining
function gameTimer() {		
	var timer = 30;
	var i = 30;
	var gameTime = setInterval(function(){ 
	$('#timer').text('Time Remaining: ' + i);
			i--;	
			timeRemaining.push(i);
	if (i == 0 - 1) {
		clearInterval(gameTime);
	}
		},1000);	
};


// checks if classes on both click and the box match and if they do adds one to the score
function checkIfMatch () {
	setInterval(function() {
	if ($('div').hasClass('whack-boxes bigEntrance fade-in clicked')) {
		console.log('both are matched');
		$('div').removeClass('clicked fade-in');
		var i = 0;
		$('#score').text("Your Score: " + score.length);
		i++;
		score.push(i);
	};
		},200);	
};

//function that starts the game
function runGame() {
	gameTimer();
	moleAnimation();	
	checkIfMatch();
	endOfAnimation();
};

//function that enables the game to be restarted
function  resetGame() {
	timeRemaining = [];
	score = ['']; 
	$('#score').text("Your Score: 0");
	runGame();
}
//add class clicked to whack-boxes when they are clicked
$('.whack-boxes').click(function() {
	$(this).addClass('clicked');
	console.log(this);
});

//if this button is pressed the game will run
$('#gameStart').click(function() {
	runGame();
});

//if the buttin is pressed the game will restart
$('#gameReset').click(function() {
	resetGame();
});


// for gradient background
var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;

var colorIndexes = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

//function that runs gradient background
function updateGradient(){
  
  if ( $===undefined ) return;
 // adds color array to color index
var colorI0 = colors[colorIndexes[0]];
var colorI1 = colors[colorIndexes[1]];
var colorI2 = colors[colorIndexes[2]];
var colorI3 = colors[colorIndexes[3]];

//assigns colors that are to be run
var istep = 1 - step;
var red1 = Math.round(istep * colorI0[0] + step * colorI1[0]);
var green1 = Math.round(istep * colorI0[1] + step * colorI1[1]);
var blue1 = Math.round(istep * colorI0[2] + step * colorI1[2]);
var color1 = "rgb("+red1+","+green1+","+blue1+")";

var red2 = Math.round(istep * colorI2[0] + step * colorI3[0]);
var green2 = Math.round(istep * colorI2[1] + step * colorI3[1]);
var blue2 = Math.round(istep * colorI2[2] + step * colorI3[2]);
var color2 = "rgb("+red2+","+green2+","+blue2+")";

//changes the background by adding css
 $('.gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
//places colors into empty string, then adds them to the css
  step += gradientSpeed;
  if ( step >= 1 ){
    step %= 1;
    colorIndexes[0] = colorIndexes[1];
    colorIndices[2] = colorIndexes[3];
    
    colorIndexes[1] = ( colorIndexes[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndexes[3] = ( colorIndexes[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

//interval that keeps the function running
setInterval(updateGradient,10);