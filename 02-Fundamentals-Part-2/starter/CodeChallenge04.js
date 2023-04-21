
/*
const calcTip = function (bills) {
    return bills >= 50 && bills <=300 ? bills * 0.15 : bills * 0.2
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
*/

////// Professor answer:

const calcTip = function (bills) {
    return bills >= 50 && bills <=300 ? bills * 0.15 : bills * 0.2
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]); // why it's a "const"? we're not mutating because we are creating a new one every loop.
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);




//no mater how many bills we have, the loop will calc it anyway

//a LOOP have 3 parts. the loop keeps running while condition is TRUE.

//rep ++ (it means rep + rep + 1)

//Form 01
for(let rep = 1; rep <= 10; rep ++) {
    console.log(`Lifting weights repetition ${rep}`);
}