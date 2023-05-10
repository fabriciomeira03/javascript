'use strict';


//-------------- DEFAULT PARAMETERS --------------------

const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
    //Above, ES6 form to set default

    //ES5 form of short circuiting.
    //numPassengers = numPassengers || 1;
    //price = price || 199;
    //whenever what comes before short circuiting is falsy (which undefined is), it will return the default assigned.

const booking = {
    flightNum,
    numPassengers,
    price,
};

console.log(booking);
bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', 7);



//-------------- HOW PASS ARGUMENTS INTO FUNCTIONS: Value vs Reference  --------------------


const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmed',
    passport: 2345467452
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 2345467452) {
        alert('Check in')
    } else {
        alert('Wrong number')
    }
}

checkIn(flight, jonas);

console.log(flight);
console.log(jonas);


const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000000000);
}

newPassport(jonas);
console.log(jonas); //example of problems manipulating different functions with the same object.
checkIn(flight, jonas);

//javascript only pass by value (and not reference, even though sometimes might look like it). Some languages, like C++  where you can pass reference to any value instead of the value itself. This works even with primitives, so you could pass the reference to the value and then the original value outside the function would be changed (this is pass by reference).

//once again, javascript does not have pass by reference. 



//-------------- Function accepting callback functions  --------------------



//LOW level function (or order) 01
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase(); //this function work anywhere in our code and takes one string to return a new one without any spaces in it.
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split('');
    return [first.toUpperCase(), ...others].join('');
    //first let's split the string by the empty string. Then let's destructure it in the first word, and then the other words. Then return the new array with the upper case. we spread the others in the array and then join.
}

// *** this two functions will be passed later into another function. ***


//LOW level function (or order) 02
const transformer = function (str, fn) {
    //this is a higher order function (last class was about it)
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`); // inside of the 'transformer' function the 'upperFirstWord' is now called 'fn'. ********* so 'fn' and then we pass the string 'str'.

    console.log(`Transformed by: ${fn.name}`); //last class we saw functions have methods and properties. one of them is the 'name' property. 
                                          //this 'fn' take the function of the 'transformer' (higher order), and gets by an input and then we can read the name property.
}

transformer('Javascript is the best!', upperFirstWord); //we're not calling this function here, only passing it.


/*Console will return this:

Original string: Javascript is the best!
script.js:91 Transformed string: Javascript is the best!
script.js:93 Transformed by: upperFirstWord

*/

transformer('Javascript is the best!', oneWord);


//RECAP: 
//JS uses callbacks all the time.

const high5 = function() {
    console.log('HIGHFIVE !');
};

document.body.addEventListener('click', high5); //'high5' is the callback function  and 'addEventListener' is the highorder function. 
                                               //'high5' is the callback function  and 'addEventListener' is the highorder function. 

['Jonas', 'Martha', 'Adam'].forEach(high5);