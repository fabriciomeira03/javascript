'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);


// SPLICE
//splice mutate the original array, it extract, expel from it.

console.log(arr.splice(2));
console.log(arr.splice(-1));


//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'h', 'i', 'f'];
console.log(arr2.reverse());
console.log(arr2);
console.log([...arr, ...arr2]); 


//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN


// --------- AT method -----------------

const array = [23, 11, 64];
console.log(array[0]);
console.log(array.at(0));

//getting the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); //way easier !


// --------- Looping arrays: for each -----------------


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//let's loop in order to print a msg for each movement in this bank account.


for (const movement of movements) {
  if(movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}


//.forEach method
console.log('---- FOR EACH -----')
movements.forEach(function(movement) {
  if(movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}) //'forEach' is a higher order function, which requires a callback order to tell it what to do. 
  //we can give to it the name we want, but we decided to call 'movement'.






// -------- .forEach with Maps and Sets -------------

//MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
//above it's an array for arrays (that are inside)
//'USD' is the --key--, 'Unite States Dollar' is the --value--

currencies.forEach(function(value, key, map) {

})
//similar to the array where the 1st parameter is the current element; 2nd index and the 3rd is the entire array


//SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
})







