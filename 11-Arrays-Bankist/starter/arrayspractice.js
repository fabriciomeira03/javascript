'use strict';

//Exercise 01. Calculate the total of all accounts in a bank.


//create accounts variables. get all this movements in one big array and filter the deposits to add them all together. we basically want to create a new array out of the accounts array (one that have the movements)
//const bankDepositSum = accounts.map(acc => acc.movements).flat();  ------ older & largerform.
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);


//Exercise02: how many accounts with at least 1000 usd

