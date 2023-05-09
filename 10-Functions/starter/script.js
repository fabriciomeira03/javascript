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