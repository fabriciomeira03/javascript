

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator ('?' meaning)

//syntax of '?':    condition ? true : false 
//it's like if...else  
// it's called ternary operator 