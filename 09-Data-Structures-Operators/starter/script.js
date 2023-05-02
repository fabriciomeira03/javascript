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
//const [i, ,] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

/*
//switch this two variables without desturcturing.
const temp = main;
main = secondary;
secondary = temp; 
console.log(main, secondary);



//same example with destructuring
[main, secondary] = [secondary, main]
console.log(main, secondary);

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
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu,starters);


//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({a, b} = obj);

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

//spread operator is to expand an array into individual elements. the REST PATTERN use the exactly same syntax, however, to collect multiple elements and condense it into an array. it's the OPPOSITE of the spread.

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainMenu]];
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


  restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); //the first argument was stored at line 216 in "mainIngredient", and them all the remaining argument was passed were stored into the array (...otherIngredients) by the REST syntax ******
 restaurant.orderPizza('mushrooms');




 //////// Short Circuiting (&& and ||) ///////////////////

 //until now we just used && or || to combine boolean values. but it goes far beyond that.