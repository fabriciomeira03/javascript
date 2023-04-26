'use strict';

//REFACTORING means change the code without change the way it works. Eliminate what? duplicated parts of code.

//sometimes a good refactoing technic is to create functions(). we can call the function in all the places where we had a duplicated code, we can call over & over.

//example with '.message':
/*

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

now whenever i want, i just call the function from with:

displayMessage('No Number!); 

or 

displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');

*/


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Math.random gives random number between 0 and 1.
//to get number between 1 to 20, i must * 20
//then use Math.trunc to get rid of decimals

document.querySelector('.check').addEventListener('click', function() { 
//line 20. only interested in 'check' class.
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);

//what we did? we selected .check (with querySelector), then added an eventListener and that event is the function we wrote.

//ATENTION !! we do not call the function, in this case, the javascript engine will do that.

//FUNCTION is just a value, and as that, we can pass it to another function with another value, just like any other value, like a string.


//when there's no input
if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
}

//when player wins
else if (guess === secretNumber) {
    document.querySelector ('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber; //deixa nº como icógnita. por isso desloquei para cá

    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
//if the current score is greater than highscore that will become the new highscore. that's why we set our highscore variable.


//background color change. manipulate the css
document.querySelector('body').style.backgroundColor = '#60b347';
document.querySelector ('.number').style.width = '30rem';


//wrong guess
} else if(guess !== secretNumber ) {
    document.querySelector('.message').textContent = guess > secretNumber ? 'Number is too high!' : 'Number is too low!'
    score--;
    document.querySelector('.score').textContent = score;
} else {
    document.querySelector('.message').textContent = 'You lost the game'
    document.querySelector('.score').textContent = 0;
}
});

document.querySelector('.again').addEventListener('click', function() {
//handler function or anonymous function because it doesn't have a name.
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    //background color change. manipulate the css
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector ('.number').style.width = '15rem';
});
