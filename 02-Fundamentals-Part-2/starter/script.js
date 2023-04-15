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

/*
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
*/

/* ------------------------------------ */ 

/*

//----- ARRAYS
//----- Dot vs Bracket Notation

const fabricio = {
    firstName: 'Fabricio',
    lastName: 'Meira',
    age: 2023 - 1986,
    job: 'student',
    friends: ['Fulano', 'Ciclano', 'Beltrano']
};

console.log(fabricio);
console.log(fabricio.lastName);
console.log(fabricio['lastName']);

const nameKey = 'Name';
console.log(fabricio['first' + nameKey]);
console.log(fabricio['last' + nameKey]);
//use this last structure is more common than we might think, reason why it's important to know.


const interestedIn = prompt('What do you want to know about Fabricio? Choose between firstName, lastName, age, job and friends');
//remember: this will return a string that should be stored into some variable.
console.log(interestedIn);
console.log(fabricio[interestedIn]);

// "undefined" is the return on console when we try to access a properpty in an object that does not exist. <--------------


if (fabricio[interestedIn]) {
    console.log(fabricio[interestedIn]);
} else {
    console.log('Wrong request. Choose between firstName, lastName, age, job and friends')
}

fabricio.location = 'Brasil';
fabricio['twitter'] = '@fabriciomeira03';
console.log(fabricio);


// Challenge
//"Jonas has 3 friends, and his best friend is Michael"

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmit',
    bestFriend: 'Michael',
    friends: ['Abel', 'Cain', 'Michael']
}

console.log(jonas);
const whichOne = prompt('Which one is the best friend of Jonas?') //i could use "if..else" as well.
console.log(jonas.bestFriend);


//Professor's answer:

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
//length is a property available in all array's


/* ------------------------------------ */ 

/*
// ----- OBJECT METHODS

//objects, just like arrays, can hold diferent types of data. They can even hold objects inside objects. Going further....functions are just another type of value, so we can create a key value pair in which the value is a function. 
//it means that we can add functions to objects....let's see how.

//this last form is better, because we don't repeat over and over the year, instead, we just access the data from jonas property.
const jonas = {
    firstName: 'Jonas',
    lastName: 'Meira',
    birthYear: 1986,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    /*-----------------------------------------
//form 1)
    calcAge: function(birthYear) {
        return 2023 - birthYear;
    }


//form 2)
    calcAge: function() {
        console.log(this);
        return 2023 - this.birthYear;
    }



//form 3)
    calcAge: function() {
        this.age = 2023 - this.birthYear;
        return;
    }
};



//below, is how we did before. it's just a different syntax. because below the "calcAge" is just a regular variable. 

//above, "calcAge" is a property of 'jonas' object, that's why we used the : instead of = 

//any function that is attached to an object is called a "method". 

console.log(jonas.age);



// -------- CHALLENGE: write in method a summary that return a string where i can summarize the data about Jonas.



const jonas = {
    firstName: 'Jonas',
    lastName: 'Meira',
    birthYear: 1986,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
},


//My answer:

console.log(`${jonas.firstName}, surname ${jonas.lastName}, was born in ${jonas.birthYear} and today work as a ${jonas.job} and have friends like ${jonas.friends}. He talks more with ${jonas.friends[2]}`);


//Professor answer:

calcage: function (){
    this.age = 2023 - birthYear;
    return this.age;
},

getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a': 'no'} driver's license.`
}

console.log(jonas.getSummary()); 



//friend.push(23);
//we have an array and on there we call a method, just like we did in this last part of the notes. It means that arrays are actually also objects, they're just a special kind of objects.
//they have functions (methods) that we can use to manipulate them, such as: push, pop, shift, unshift and many more. 



// --------- ITERATION: the for LOOP

//Alow us to automate repetitive tasks. It's common for all program languages.

console.log('Lifting weights repetition 1');

//a LOOP have 3 parts. the loop keeps running while condition is TRUE.

//rep ++ (it means rep + rep + 1)


//Form 01
for(let rep = 1; rep <= 10; rep ++) {
    console.log(`Lifting weights repetition ${rep}`);
}


//Form 02
for(let rep = 1; rep <= 10; rep ++) {
    console.log('Lifting weights repetition 1');
}

----------------------------------------------*/


// ---- LOOPING ARRAYS, BREAKING AND CONTINUING

const jonasArray = [
    'Jonas',
    'Meira',
    2023 - 1986,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// console.log(jonas[0]);
// console.log(jonas[1]);
// console.log(jonas[2]);
// console.log(jonas[3]);
// console.log(jonas[4]);
// jonas[5] doesn't exist. will not appear

//Form 01
for (let i = 0; i < 5 ; i++) {
    console.log(jonasArray[i]);
}


//Form 02. Better with length because it catches all the elements.
for (let i = 0; i < jonasArray.length ; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);
}


const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}

console.log(ages);

//we cannot do 2023 - years because the return will be NaN, because indeed 'years' is not a number. Instead, javascript does 2037 - 1991 for instance.


// ------ CONTINUE AND BREAK

console.log('---- ONLY STRINGS----');
for (let i = 0; i < jonasArray.length ; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}


console.log('---- BREAK WITH NUMBER');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
}

//the most important part of this chapter is to know how we can loop through arrays using this kind of logic. it's really important.