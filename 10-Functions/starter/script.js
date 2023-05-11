'use strict';


/*
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



*/
//-------------- Function accepting callback functions  --------------------

/*

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
/*
transformer('Javascript is the best!', oneWord);
*/
/*
//RECAP: 
//JS uses callbacks all the time.

const high5 = function() {
    console.log('HIGHFIVE !');
};

document.body.addEventListener('click', high5); //'high5' is the callback function  and 'addEventListener' is the highorder function. 
                                               //'high5' is the callback function  and 'addEventListener' is the highorder function. 

['Jonas', 'Martha', 'Adam'].forEach(high5);



// ---------------- Creating a function that returns a new function -----------------
//it's the opposite of the last class
//Beggining to understand 'closures'

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

//our first function greet (line 139) return a new function that's stored in the variable 'greeterHey' (line 139) and this variable is now just a function that we can call using the () syntax

greet('Hello') ('Jonas');
//all in one sentence example


*/
/*
// ---------------- Call and apply methods -----------------

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    booking: [],
    //book: function() {}
    book(flightNumber, name) {
        console.log(`${name} booked a set on ${this.airline} flight ${this.iataCode} ${flightNumber}`); //'this.' word is going to the object itself.
        this.bookings.push({flight: `${this.iataCode} ${flightNumber}`, name});
    },
};

lufthansa.book(239, 'Jonas Shmed');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

*/


/*
const euroWings = {
    name: 'EuroWings',
    iataCode: 'EW',
    booking: [],
};


const book = lufthansa.book;

//Does NOT work
//book(23, 'Sarah Williams');

//let's try to use this function to make a new book (line 188). An error will happen if stay like this. why? because this 'book' is not the 'book' from line 158 anymore. it's a copy of 'lufthansa.book' but it's not a method anymore, it's a function. As result, the "this." keyword is now pointing to 'undefined'...causing the error. --------------------------------------------------------------------------------------------------------

//if we want book a lufthansa flight, the 'this.' keyword should point to lufthansa.
//if we want book a euroWings flight, the 'this.' keyword should point to euroWings.

//how to do that? there are 3 functions to do that: call, apply and bind.

book.call(euroWings, 23, 'Sarah Williams');
console.log(euroWings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    name: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}


//Apply method (not much used in modern javascript)
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss)

book.call(swiss, ...flightData) //better and modern.

*/



// ---------------- The Bind Method -----------------

//Recap: last class we had the euroWings object. Then we used book.call to use the book function with the euroWings set with the 'this.' keyword.

/*
const bookEW = book.bind(euroWings);
//this will not call the book function. Instead, will create a new function 
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23); //this will set in stone. Then it's just work with the names. This method is called 'parcial application'. 
bookEW23('Jonas Schmed');
bookEW23('Martha Cooper');
*/

/*
//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    
    this.planes++ //essentially will add a new plane whenever this button is clicked.
    console.log(this.planes)
};
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
*/

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//VAT means 'value after tax'
//addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));


const addTaxRate = function(rate) {
    return function(value) {
        return value + value * rate;
        }
}

const addVAT2 = addTaxRate(.023);
console.log(addVAT(100));
console.log(addVAT(23));



// ---------------- Immediately Invoked Function Expressions (IIFE) ------------------------------

//only executed once.

const runOnce = function () {
    console.log('This will never run again');
}

runOnce();

// IIFE
(function() {
    console.log('This will never run again');
}) ();
//we trick javascript by wrapping the function with parentesis


(() => console.log('This will ALSO never run again')) ();


//functio create scopes. One scope does not have access to variables from a inner scope.
//the inner scope have access to outside, but the global scope can't access it (anything inside scope)




// ---------------- CLOSURES ------------------------------
//Closure makes a function remember all the variables that existed at the function birthplace, essentially. 
//The function was gonne, already executed, but the closure can get back at it.

const secureBooking = function() {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker(); //no need of argument, since there's no list of parameters
booker();
booker();

console.dir(booker);


// -----------

let f;

const g = function () {
    const a = 23;
    f = function () { 
        console.log(a * 2);
    }
}

const h = function() {
    const b = 777;
    f = function () { 
        console.log(b * 2);
    }   
}
g();
f();
console.dir(f);

//Re-assigning f function
h();
f();
console.dir(f);

