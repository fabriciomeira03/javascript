'use strict';

/*

//***** MAIN SQUARE AT THE TOP OF PAGE
console.log(document.querySelector('.message').textContext);
document.querySelector('.message') .textContent = 'Correct Number!';

document.querySelector('.number').textContent = 11;
document.querySelector('.score').textContent = 10


//**** CHECK NUMBER SQUARE
console.log(document.querySelector('.guess').value);
//to access we must know the element. so we must go to the html file and see what is the element.
//BIG take and difference: the imput field must be accessed with the ".value" as the end shows.
document.querySelector('.guess').value = 23;

*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

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
    document.querySelector ('.message').textContent = 'Corret Number!';
    document.querySelector('.number').textContent = secretNumber; //deixa nº como icógnita. por isso desloquei para cá

//background color change. manipulate the css
document.querySelector('body').style.backgroundColor = '#60b347';

document.querySelector ('.number').style.width = '30rem';

//when guess is too high
} else if (guess > secretNumber) {
    if(score > 1) {
        document.querySelector('.message').textContent = 'Number is too high';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'You lost the game'
        document.querySelector('.score').textContent = 0;
    }

//when guess is too low
} else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Number is too low';
    score--;
    document.querySelector('.score').textContent = score;
}
});


