'use strict';

//Exercise 01. Calculate the total of all accounts in a bank.


//create accounts variables. get all this movements in one big array and filter the deposits to add them all together. we basically want to create a new array out of the accounts array (one that have the movements)
//const bankDepositSum = accounts.map(acc => acc.movements).flat();  ------ older & largerform.
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

/*
//Exercise02: how many accounts with at least 1000 usd
const numDeposits1000 = accounts
    .flatMap(acc => acc.movements) //counting deposits
    .filter(mov => mov >= 1000).length;

console.log(numDeposits1000);
*/


// ----- below, the same thing using reduce
const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);

console.log(numDeposits1000);

/*
// 3.
const sums = accounts   
    .flatMap(acc => acc.movements).reduce((sums, cur) => { cur > 0 ? sums.deposits += cur : sums.withdrawls += cur;
        return sums;
    
}, {deposits: 0, withdrawls: 0}) //can be empty as aswell. this object here, in the callback function above (ternary operator. it is simply "sums", which is our accumulator ---- the last part of deposits/withdrawls are always the accumulator data)

console.log(sums);
*/



// 3.1 - same as above DESTRUCTURED
const {deposits, withdrawls} = accounts

//const sums = accounts   
    .flatMap(acc => acc.movements)
    .reduce((sums, cur) => {sums [cur > 0 ? 'deposits' : 'withdrawls'] += cur;
    return sums;
    },
    
{deposits: 0, withdrawls: 0}); //can be empty as aswell. this object here, in the callback function above (ternary operator. it is simply "sums", which is our accumulator ---- the last part of deposits/withdrawls are always the accumulator data)
    
console.log(deposits, withdrawls);



//4. this is a nice tittle -> This Is a Nice Title

const convertTitleCase = function(title) {
    const expections = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
    const titleCase = title
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1));
        
    return titleCase;

}
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));



