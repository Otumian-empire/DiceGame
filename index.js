/* Global variables */

var dice_images, dice_score, game_title, high_score;
var hscore,roll_dice, chances_left,cleft, current_score;
var cscore, re_play, img;

// Images for the dice
dice_images = [
    './img/dice-1.png', './img/dice-2.png',
    './img/dice-3.png', './img/dice-4.png',
    './img/dice-5.png', './img/dice-6.png',
];

// This represents the individual values 
// from a dice when rolled
dice_score = [1, 2, 3, 4, 5, 6];

// selecting all img tags
img = document.getElementsByTagName('img');

// to manipulate the game title
game_title = document.getElementById('game-title');

// to manipulate the high score after each game
high_score = document.getElementById('high-score');

// to flag when the dice should roll
roll_dice = document.getElementById('roll-dice');

// to manipulate the life of the player or 
// the number of times the dice can be rolled
chances_left = document.getElementById('chances-left');

// to manipulate the current score
current_score = document.getElementById('current-score');;

// These are default values when ever the pages reloads
// initializing cscore and hscore and cleft
cscore = 0;
current_score.innerText = "Current score: " + cscore;

hscore = 0;
high_score.innerText = "High score: " + hscore;

cleft = 5;
chances_left.innerText = "Chances left: " + cleft;

/* Functions */
function rollDice() {

    // get and set random numbers to the elements in dice_score
    getRandomNumbers();

    // change the dice images after a roll
    changeImage();

    // get the current score
    currentScore();
    current_score.innerText = "Current score: " + cscore;

    // get high score
    highScore();
    high_score.innerText = "High score: " + hscore;

    // chances left
    chancesLeft();
    chances_left.innerText = "Chances left: " + cleft;
    
}

function getRandomNumbers() {
    for (var i = 0; i < dice_score.length; ++i) {
        dice_score[i] = Math.floor(Math.random() * 6) + 1;
    }
}

function changeImage() {
    for (var a = 0; a < img.length; ++a) {
        img[a].src = dice_images[dice_score[a] - 1];
    }
}

function currentScore() {
    for (var b = 0; b < dice_score.length; ++b) {
        cscore += dice_score[b];
    }
}

function highScore() {
    if (cscore >= hscore) {
        hscore = cscore;
    }
}

function chancesLeft() {
    if (cleft > 1) {
        cleft -= 1;
    } else {
        replay();
    }
}

function replay() {
    alert("Alert Game Over!!");

    // set high score, hscore = cscore 
    // if cscore is greater than hscore
    // hscore = cscore;
    highScore();
    high_score.innerText = "High score: " + hscore;

    // set all dice score to 0
    dice_score = [1, 2, 3, 4, 5, 6];

    // change the dice image
    changeImage();

    // set the current score. cscore = 0
    cscore = 0;
    current_score.innerText = "Current score: " + cscore;

    // chances left
    cleft = 5;
    chances_left.innerText = "Chances left: " + cleft;
}
