
/* ///// My answer:

const calcTip1 = (a) => (a * 0.15);
const calcTip2 = (a) => (a * 0.20);

if (calcTip1 >= 50 && calcTip2 <= 300 ? a * 0.15 : a * 0.20) {
    console.log()
} else {

}

const bills = ['125', '555', '44'];
*/


/////////////////// Professors answer:

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(`The bill was ${bills} and the tip was ${tips}`);

const totals = [bills[0] + tips[0], bills[1] + tips[1] + bills[2], tips[2]]; 

console.log(bills, tips, totals);


/* Example with arrow function
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
*/

