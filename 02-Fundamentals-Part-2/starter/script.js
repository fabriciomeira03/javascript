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

-------------------------------------- */ 
/*
// REVIEWING FUNCTIONS

const calcAge = function (year) {
    return 2023 - year;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = 2023 - birthYear;
    const retirement = 65 - age;

    if (retirement > 0) {
         console.log (`${firstName} retires in ${age} years`);
        return retirement;
       

    } else {
        console.log (`${firstName} has already retired ; )`);
        return -1;
    }

    // why it didnt work? because the "return" immediately returns de function, so it ends before the console.log get executed. that's why i moved the order, putting the console.log before the return.

    return retirement
    //return `${firstName} retires in ${retirement} years`;
}


console.log (yearsUntilRetirement (1986, 'Fabrício')); 
console.log (yearsUntilRetirement (1950, 'Mike')); //return -8, which means it's already retired for this period of time. because of that we need use "if...else"

-------------------------------------- */ 
/*
//----- INTRODUCTION TO ARRAYS
const friends1 = 'Michael';
const friends2 = 'Steven';
const friends3 = 'Peter';

//instead let's do better and work with arrays

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);


const years = new Array (1991, 1986, 2008, 2023);
console.log(friends [0]);
console.log(friends [2]);

console.log(friends.length);


friends[2] = 'Jay';
console.log(friends);
//2 got replaced for Jay.
//array always can be changed and mutate, even though they are declared with const.


const fabricio = ['Fabricio', 'Meira', 2023 - 1986, 'student', friends];
console.log(fabricio);


/* ------------------------------------ */ 


//----- BASIC ARRAYS METHODS

const friends = ['Michael', 'Steven', 'Peter'];

const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John'); //add elements
console.log(friends);

//removing elements
friends.pop(); //last name will be removed
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // remove first element
console.log(friends);

console.log (friends.indexOf('Steven')); //this should return the value 1, because it's where Steven is located in the list.
console.log (friends.indexOf('Bob'));




friends.push(23); //"push" adds element to the end of the array
console.log(friends.includes('Steven'));
console.log(friends.includes ('Bob'));
//"includes" return true for steven and false to bob (doesn't exist this element).
console.log(friends.includes ('23'));
//returned false because it's not doing type coersion. 23 is different of '23'


if (friends.includes('Steven')) {
    console.log('Only if you have a friend called Steven, you will return as true.')
}









