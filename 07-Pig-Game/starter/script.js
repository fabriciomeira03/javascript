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

//Starting conditions
score0El.textcontent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {

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
    //switch to next player
    document.getElementById (`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    //reasign the activeplayer.
    currentScore = 0;  
    Player0El.classList.toggle('player--active'); 
    Player1El.classList.toggle('player--active'); 
}
});