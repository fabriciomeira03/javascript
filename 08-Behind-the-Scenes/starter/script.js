'use strict';

//HOW SCOPING WORKS. A real code is not confunsed like that. It's just to study.


/*
function calcAge (birthYear) {
    const age = 2037 - birthYear;

    function printAge () {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
        var millenial = true;
        const str = `You're a millenial, ${firstName}`;
        console.log(str);
    }
    // console.log(str);
    console.log(millenial);
    }

    printAge();
    return age;
}
//calcAge is defined in a global scope because it is in top level code.

const firstName = 'Jonas';
calcAge(1991);

*/


//variables declared with 'var' are function scoped. they're not block scoped, they 


///////////////////////// 
// VARIABLE ENVIRONMENT

// Hoisting: makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of their scope".


//console.log(me);
//console.log(job);
//console.log(year);

/*
var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//Functions
console.log(addDecl (2, 3));
console.log(addExpr (2, 3)); //use 'const'. this cause erro
console.log(addArrow (2, 3));

function addDecl(a,b) {
    return a + b;
}

const addExpr = function(a,b) {
    return a + b;
};

const addArrow = (a, b) => a + b;
*/



//////////////////////////////////////////
// this. keyword in practice

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },
};
jonas.calcAge();
//'this' will call the jonas object

const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge; //simple applying the 'calcAge' of jonas to matilda. it's called method borrowing.
matilda.calcAge();

const f = jonas.calcAge;



//////////////////////////////////////////
// REGULAR FUNCTIONS vs ARROW FUNCTIONS




//////////////////////////////////////////
// PRIMITIVES VS OBJECTS (Primitive vs Reference Types)

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);
*/


let lastName = 'Williams';
let oldLastName = lastName;
console.log(lastName); //williams
lastName = 'Davis'; //davis
console.log(lastName, oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
//looks like it's copying the entire object. when in fact it's just copying the reference, which then points to the same object.
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

