//--- ACTIVATING STRICT MODE
// it's used to write secure javascript code.

'use strict'; 
// activate for the entire script. professor just doesn't see the point in use this strict mode to write certain block of the code, for instance.

let hasDriversLicense = false;
const passTest = true;

/*
if (passTest) hasDriverLicense = true; //this error msg tells us what is wrong. with strict mode we can find easier the error
if (hasDriversLicense) console.log('I can drive');
*/



//--- FUNCTIONS
// function is a piece of code we can use as much as we want 

function logger() {
    console.log('My name is Fabricio');
}

//calling / running / invoking the function (all the same)

logger();
logger();
logger();

/*
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice win ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); 
//see that this const brings back a value to the 'function' above. ****
console.log(appleJuice);
*/

// --- FUNCTION DECLARATION vs EXPRESSIONS

function calcAge1(birthYeah) {
    return 2023 - birthYeah
}

const age1 = calcAge1(1986); 
console.log(age1);


const calcAge2 = function (birthYeah) {
    return 2028 - birthYeah;
}

const age2 = calcAge2(1986);
console.log(age1, age2);



// -- ARROW FUNCTIONS

//there's actually a 3rd type of function that was added to javascript in ES6. the difference is that is 'shorter and faster to write'.

const calcAge3 = birthYeah => 2023 - birthYeah;
// it's faster because we don't need { } and the return is implicitly.

const age3 = calcAge3(1986);
console.log(age3);

//const yearsUntilRetirement = birthYeah => {
const yearsUntilRetirement = (birthYeah, firstName) => {

    const age = 2023 - birthYeah;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`
}   

console.log (yearsUntilRetirement (1986, 'Jonas'));
console.log (yearsUntilRetirement (1979, 'Bob'));





// FUNCTIONS CALLING OTHER FUNCTIONS

function cutFruitPieces (fruit) {
    return fruit * 4;
}
function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces (apples);
    const orangePieces = cutFruitPieces (oranges);
    // here we have a function calling another function


    const juice = `Juice with ${applePieces} pece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

//now let's think the juice need another machine that cut the fruits in smaller pieces to feed the juice machine.

console.log (fruitProcessor (2, 3));