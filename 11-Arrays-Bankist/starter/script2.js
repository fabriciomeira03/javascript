'use strict';

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  const accounts = [account1, account2, account3, account4];


//---------- FILTER method --------


const deposits = movements.filter(function(mov) {
    return mov > 0;
    //only deposits movement wich are true for this return will appear as deposit. the other ones will get filtered out. really simple.
});
console.log(movements);
console.log(deposits);


/*
---- similar as above example.

const depositsFor = [];
for(const mov of movements) if(mov > 0) depositsFor.push(mov);
console.log(depositsFor);
*/

const withdrawls = movements.filter(function(mov) {
    return mov < 0;
});


/*
arrow function example:

const withdrawls = movements.filter(mov => mov < 0);
console.log(withdrawls)
*/



//---------- Reduce Method --------

console.log(movements);

//acumulator: it's like a snowball. keep adding at it in the current and futures interations (returns from functions, or callbacks)
const balance = movements.reduce(function(acc, cur, i, arr) {
    console.log(`Iteration ${i}: ${acc}`);
    return acc + cur 
}, 0); //want start the count at 0.

console.log(balance);


/*
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);
*/


//Maximum value
const max = movements.reduce((acc, mov) => {
    if (acc >mov) return acc;
    else return mov;
}, movements[0]);

console.log(max);


//the 'acc' (accumulator) at line 73 was to keep track of the current some. on line 88 'acc' will keep track of the current maximum.



// ------------ The Magic of Chaining Methods -----------------

const eurToUsd = 1.1;

//PIPELINE
const totalDepositsUSD = movements
.filter(mov => mov > 0)
.map(mov => mov * eurToUsd)
.reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);


calcDisplayBalance(account1.movements);

const calcDisplaySummary = function(movements) {
    const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}`;


const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)} EUR`; //math.abs to get rid of minus signal.


} ;


// ---------- FIND Method -------------
//'filter method' returns a new array. 'find method' returns only the elements itself, not an array. 

const firstWithdrawal = movements.find(mov => mov < 0); //this is a boolean, return true or false, right or wrong.
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account); //with 'find method' we can search an array for an specific property.






