'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

/*
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainMenu]];
  }
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
//breakets because we're destructuring the array. it's like "unpacking" the array

const [x, y, z] = arr;
console.log(x, y, z);

let [main, ,  secondary] = restaurant.categories; //'restaurant.categories' is the array which we want to abstract.

console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); 


// NESTED DESTRUCTURING
const nested = [2, 4 [5, 6]]; 
//const [i, ,j] = nested;  (old way)
const [i, , [j, k]] = nested;
console.log(i, j, k);


//switch this two variables without desturcturing.
const temp = main;
main = secondary;
secondary = temp; 
console.log(main, secondary);


//same example with destructuring
[main, secondary] = [secondary, main]
console.log(main, secondary);

//Default values
const [p, q, r] = [8, 9]; //here positions only in [0] and [1]
console.log(p, q, r);

//Default values
const [p=1, q=1, r=1] = [8, 9];
console.log(p, q, r);

//default values are usefull for when we've got data from API  

*/

////////////// Destructuring Objects ///////////////////////

/*

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
    
    order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainMenu]];
    },

    orderDelivery: function (obj) {
      console.log(obj);
    },
  
    orderDelivery: function ({starterIndex, mainIndex, time, address}) {
      console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
      console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    }
};

restaurant.orderDelivery ({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const {name, openingHours, categories} = restaurant;
//3 variables based in the restaurant object.
console.log(name, openingHours, categories);

//Default variables (important set them when get data from 3rd party and doesn't know how the code is)

const {
  name: restaurantName, 
  openingHours: hours, 
  categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu,starters);


//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 }; 
({a, b} = obj); //destructuring here

//Nested objects
const {fri: {open: o, close: c}} = openingHours;
console.log(fri);
console.log(o, c);

*/

// /////////////////// The Spread Operator //////////////////

//the spread operator takes all the elements from the array and also doesn't create new variables. As consequence, we can only use it in places where we otherwise write values separated by commas ******************

/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

//new menu example:
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
//new array adding to existing array. we can see that on the breakets


//Coppy array example:
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays (or more)
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);


// Iterables: are arrays, strings, maps, sets. but NOT objects
const str = 'jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
console.log();
//multiple values separated by comma are usually only expected when we pass arguments into a function or when we build a new array ****************



//Real world example
const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Let's make pasta! Ingredient 2?"), prompt("Let's make pasta! Ingredient 3?")];
console.log(ingredients); //this is just a prompt msg to select ingredients

restaurant.orderPasta(...ingredients);



// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

*/

// ////////////// REST PATTERNS & PARAMETERS ////////////////

//spread operator is to expand an array into individual elements. the REST PATTERN use a very similar syntax, however, to collect multiple elements and condense it into an array. it's the OPPOSITE of the spread.

/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainIndex[mainIndex]];
  },

      openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherINgredients);
  },
    
},
};

// SPREAD, because on RIGHT side of = 
const arr = [1, 2, ...[3, 4]];

//REST syntax because is on the left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //the 'rest element' must be the last element.

const [pizza,  , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays); //we took saturday and all variables BEFORE. ********************************


// Functions
//again: REST take all the numbers and packs them into an array
const add = function (...numbers) {
let sum = 0;
for(let i = 0; i < numbers.length; i++) sum += numbers[i];
console.log(sum);
 };

  add(2, 3);
  add(5, 3, 7, 2);
  add(8, 2, 5, 3, 2, 1, 4);

  const x = [23, 5, 7];
  add(...x);


  //restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); //the first argument was stored at line 216 in "mainIngredient", and them all the remaining argument was passed were stored into the array (...otherIngredients) by the REST syntax ******
 //restaurant.orderPizza('mushrooms');




 //////// Short Circuiting (&& and ||) ///////////////////

 //until now we just used && or || to combine boolean values. but it goes far beyond that.

console.log(3 || 'Jonas');
console.log(' ' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; //ternary operator

const guests2 = restaurant.numGuests || 10; 
console.log(guests2); //easier than use ternary operator


// Now lets see the AND operator
//it works exactly the opposite of || operator

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza ('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
//with the "if" here we're just checking if the method 'restaurant.orderPizza' exist. and if does exist, we want to call it. ********


//RESUME:
// OR operator: will return the first truthy value of all the operants, or the last of them if all the others are falsy

// AND operator: return the first falsy value or the last one of them is all the others are truthy.

//PRACTICAL EXAMPLES: we can use OR operators to set default values and && operators to execute code in the second operant (??) if the first one is true.




// ------- NULISH VALUE ---------------
//null and undefined (not 0 or '')


const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); //only if 'restaurant.numGuests' was null or undefined the second operand would be executed.



// -------- LOOPING FOR ARRAYS --------------


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];


for (const item of menu) console.log(item);


// old way
//for (const item of menu.entries()) {
//  console.log(item);
//  console.log(`${item[0] + 1} ${item[1]}`);
//}

//new way. destructuring
for (const [i, el] of menu.entries()) {
console.log(`${i + 1}: ${el}`);
}

// console.log(menu.entries);

//order(starterIndex, mainIndex);



// -------- Enhanced Object Literals --------------


if (restaurant.openingHours && restaurant.openingHours.mon);
//console.log(restaurant.openingHours.mon.open);

// ------------- WITH Optional Chaining ------------------
console.log(restaurant.openingHours.mon?.open); 
//only if monday existits, then the open property will be read, otherwise, won't be read. if not read (because it doesn't exist), "undefined" will be returned.

console.log(restaurant.openingHours?.mon?.open);
//it's better to prevent bugs and erros


//Real and practical example ---- with optional chaining ---
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days) {

const open = restaurant.openingHours[day]?.open ?? 'closed';
console.log(`On ${day}, we open at ${open}`);
}




//Methods (still about optional chaining and Nullish coalescing)
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto)?.(0,1) ?? 'Method does not exist';

//Arrays
const users = [{name: 'Jonas', email: 'hello@jonas.io'}];
console.log(users); //meaning of line: only if exists give the name. Test if the value on the left exists.

//using the IF we would need write like:
if (users.length > 0 ) console.log(users[0].name); else console.log('user array empty');

*/
// ------------- SETS ------------------

/*
const orderSet = new Set ([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
console.log(orderSet);
orderSet.clear();

//Practical example
//in real world, the common use of set is to remove duplicate values of arrays. Example:

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
//const staffUnique = new set (Staff);
const staffUnique = [...new Set (staff)];
console.log(staffUnique);

//the conversion from a set to array is easy because they're both ineretables. Remember from ealier that the ...spread operator works in all inheretables. So that includes "Sets"

console.log(new Set ('Jonasschmedtmann').size);

//Resume: "Set" are not intended do substitute "arrays". Whenever need store values in order and might continue to duplicate, always use arrays. Otherwise, use "Set" to unique values.


/*
// ---- Maps: fundamentals -----

//MAP is a data structured used to map values to keys.
//Data is stored in key value pairs in maps. 
//Difference between MAPS and OBJECTS:
//maps the keys can have any type (object, arrays, other maps, open margin to great and advance things)
//object the keys are always strings


const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy')
console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open : D')
.set(false, 'We are closed : (')

console.log(rest.get('name'));
console.log(rest.get('true'));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));


console.log(rest.has('categories'));
rest.delete(2);
rest.set([1, 2], 'Test')
console.log(rest);
console.log(rest.size);
//rest.clear()

console.log(rest.get([1, 2]));
//line 452 and line 447 are NOT the same object. even though we wrote in the same way, they're not the same.

//the key is the object in memory t line 447. 
//to it work, we need creater an array 1, 2 and use the same array to read the value of the map.

//so instead of the above, look below:
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));

*/

/*

// ---- MAP ITERATION ----

const question = new Map([
['question', 'what is the best programming language in the world?'],
[1, 'C'],
[2, 'Java'],
[3, 'Javascript'],
['correct', 3],
[true, 'Correct!'],
[false, 'Try again!']
]);
console.log(question);


//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openinghours));
console.log(hoursMap);
//it's a good trick to remember whenever you need a map when you already have an object.

//Quiz app
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer'));
//we need convert to a number (from 1 to 3 as described above)

console.log(question.get(question.get('correct') === answer));


//Sometimes we need convert a MAP back to an ARRAY
//we do it by building a new array and unpacking with spread operator
console.log([...question]); //reference line 468 

*/


// ---- Working with Strings (part 1) ---- 

//Methods: comparing strings with arrays. STRINGS also have methods. Some of them are quite similar to the array methods. One of them is the .indexOf();

/* 

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.indexOf(r)); //return position 6
console.log(airline.lastIndexOf(r)); //return position 10
console.log(airline.slice(4)); //return letter A
console.log(airline.slice(4, 7)); //the length here will be 3 (7 minus 4)

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

//this doesn't mutate strings. They're primitive, so can't be changed (it's impossible actually)


//EXERCISE for example

const checkMiddleSeat = function(seat) {
  //B and E are middle seats
  const s = seat.slice(-1)
  if(s === 'B' || s === 'E')
  console.log('You got the middle seat ');
  else console.log('You got lucky');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String ('jonas'));

//We know that strings are  just primitives. So why they have methods? Should methods only be available on objects, such as arrays? That's true, however, here is how this works.

//when we call a method on a string, Javascript - behind the scenes - convert that string primitive to a string object with the same object, and then in that object the method is called (process called boxing)

*/


// ---- Working with Strings (part 2) ---- 

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());


// Fix capitalization in name (we could do it as a function too)
const passenger = 'jOnAS'; //must fix to Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase () + passengerLower.slice(1);
console.log(passengerCorrect);



//Comparing emails

const email = 'hello@jonas.io';
const loginEmail = '    Hello@Jonas.io \n';
//converting e-mails that still valid

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

//what happened? we called to lower case, stored in the variable and called trim method. We could do this all in one step.


//in just one step:
const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);
console.log(email === normalizeEmail);


//Replacing example 1
const priceGB = '288, 97§';
const priceUS = priceGB.replace('§', '$').replace (',', '.');
console.log(priceUS);



//Replacing example 2
const announcement = 'All passangers come to boarding door 23. Boarding door 23!'
console.log(announcement.replace('door', 'gate'));
//console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate')); //g for global


//Booleans
const plane2 = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
} //the if to check


// Practice exercise
const checkBaggage = function (items) {

    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
      console.log('NOT allowed on board');
    } else {
      console.log('Welcome aboard');
    }
}

checkBaggage('I have a laptiome, some Food ad a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//consider the person likes to use upprecase for some reason.

// *** when we receive input from a user, the best thing to do is always start putting everything in lowercase becauseit makes a lot easier to compare to something. ***




// ---- Working with Strings (part 3) ---- 

// works with Split and Join combination (powerfull).
// also, review trim method as well