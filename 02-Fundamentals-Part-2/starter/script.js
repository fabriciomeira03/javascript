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

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice win ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); 
//see that this const brings back a value to the 'function' above. ****
console.log(appleJuice);



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



