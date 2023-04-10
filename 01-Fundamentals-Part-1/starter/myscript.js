
/*     
     let js = 'amazing';
      if (js === 'amazing') alert ('Javascript is FUN!');

console.log (40+8+23-10);

let firstName = 'Jonas';
 this creates a fix variable

console.log(firstName);
console.log(firstName);
console.log(firstName);
/*this is usefull because if i want to change the variable, i can do it just in one place
--------------
this a the great advantage of variables
-------------


let firstNamePerson have in mind that this writting form is standard in javascript 

let myFirstJob = 'Prorammer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher'

/*the first two variables are the correct form 

console.log(myFirstJob);

//Boolean example
let javascrtiptIsFun = true;
//console.log(javascriptIsFun);


//console.log (typeof true); 
console.log (typeof javascriptIsFun); 
//console.log (typeof 23); 
//console.log (typeof 'Jonas'); 


javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);
//we just assigned a new value without use 'let'
//example of dynamic typing
//it's like put a phone in a box, then change it to another object

let year;
console.log(year);
console.log (typeof year);

year = 1991;
console.log (typeof year);

let age = 30;
age = 31;

const birthYear = 1991;
 // wrong - birthYear = 1990;

 var job = 'programmer';
 job = 'teacher';
 //work similarly as let


 lastName = 'Meira';
 console.log(lastName);
 //terrible idea write like that. avoid.


//-------------OPERATORS -------------------
const ageJonas = 2023 - 1986;
const ageSarah = 2023 - 1985;
console.log (ageJonas, ageSarah);

console.log (ageJonas * 2, ageJonas / 10, 2 ** 3);

let x = 10 + 5; // 15
x += 10; //x = x + 10 = 25
x += 4; // x = x * 4 = 100
x++; // x = x + 1
x--; //opposite of x++ (sum one, here diminish one)
console.log(x);


//Comparison operators
console.log(ageJonas > ageSarah);
// >, <, >=, <=


//--------- OPERATORS PRECEDENCE --------


//------- STRINGS AND TEMPLATE LITERALS ------
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm" + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);


const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log (jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiplelines use this kind of n');

console.log(`String 
multiple 
lines`);


//--- TAKING DECISIONS: if / else statements ---
const age = 15;


if (age >= 18) {
      console.log('Sarah can start driving license');
} else {
      const yearsLeft = 18 - age;
      console.log(`Sarah is too young. Wait another ${yearsLeft} years ; )`);
}




const birthYear = 2012;
let century;
if (birthYear <= 2000) {
      century = 20;
} else {
      century = 21;
}
console.log(century);


//--- Type Conversion and Coercion ---

//--- Truthy and FALSE values ---

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));


const money = 0;
if (money) {
      console.log("Don't spend it all ; )");
} else {
      console.log('You should get a job!');
}


let height = 0;
if (height) {
      console.log('YAY! Height is defined');
} else {
      console.log('Height is UNDEFINED')
}


// --- EQUALITY OPERATORS: == VS === (comparison)
*/


// --- LOGICAL OPERATORS

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision); //&& means AND
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(shouldDrive) {
      console.log('Sarah is able to drive!');
} else {
      console.log('Someone else should drive...');
}