var whackBoxes = document.getElementsByClassName('whack-boxes');
var timeRemaining = [];
var score = [''];

function randomBox() {
 	var selection = Math.floor(Math.random() * 9);
 	var returnedValue = $(whackBoxes[selection]);
 		return returnedValue 		
};

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
function endOfAnimation() {
	setInterval(function(){
	randomBox().removeClass('fade-in');
	},200);
};


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

function runGame() {
	gameTimer();
	moleAnimation();	
	checkIfMatch();
	endOfAnimation();
};

function  resetGame() {
	timeRemaining = [];
	score = ['']; 
	$('#score').text("Your Score: 0");
	runGame();
}
$('.whack-boxes').click(function() {
	$(this).addClass('clicked');
	console.log(this);
});

$('#gameStart').click(function() {
	runGame();
});

$('#gameReset').click(function() {
	resetGame();
})


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

function updateGradient(){
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndexes[0]];
var c0_1 = colors[colorIndexes[1]];
var c1_0 = colors[colorIndexes[2]];
var c1_1 = colors[colorIndexes[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('.gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 ){
    step %= 1;
    colorIndexes[0] = colorIndexes[1];
    colorIndices[2] = colorIndexes[3];
    
    colorIndexes[1] = ( colorIndexes[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndexes[3] = ( colorIndexes[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);