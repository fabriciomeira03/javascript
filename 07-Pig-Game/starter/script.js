'use strict';

//Selecting elements 
const Player0El = document.querySelector('.player--0');
const Player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

/*Starting conditions
score0El.textcontent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;
*/

let scores, currentScore, activePlayer, playing;

//Initialization
const init = function () {
    
    score0El.textcontent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textcontent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textcontent = 0;
    Player0El.classList.remove('player--winner');
    Player1El.classList.remove('player--winner');
    Player0El.classList.add('player--active');
    Player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
    document.getElementById (`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    //reasign the activeplayer.
    currentScore = 0;  
    Player0El.classList.toggle('player--active'); 
    Player1El.classList.toggle('player--active'); 
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if(playing) {
   

    //1. Generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. Check for rolled 1
    if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  

     //add dice to current score
    //when the dice is not at 1 it's added to the current score.
    //whenever player rolls 1 we lose all the score & enter the 'else' block switching to next player round.
    } else {
        switchPlayer();
    }
}

});

btnHold.addEventListener('click', function() { 
    if(playing) {
//1. Add current score to active player's score;
//what's happening here is: scores[1] = scores [1] + currentScore;
scores[activePlayer] += currentScore;
document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

//2. Check if player's score is >= 100
if (scores[activePlayer] >= 20) {

//finish the game
    playing = false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add ('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove ('player--active');

} else {
    //Switch to the next player
switchPlayer();
    }
}
 });


 //Resetting the game
 btnNew.addEventListener('click', init);