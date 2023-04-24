// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude = function (temps) {

    let max = temps[0];
        //we assume that first element of the array is the maximum. so make sense start with 0.
    let min = temps[0];
    for(let i = 0; i < temps.length; i++) {
        const curTemp= temps[i];
        //let's start with "counter 'i'"
        if(temps[i] > max) max = temps[i];
        //how to read this last sentence: if temps at position i is greater than the current maximum value, then (after parenteses), the maximum value will become the maximum value.
        //it make sense because if the current value in the array is greater than the maximum, well, this value should become the maximum.
        if(temps[i] < min) min = temps[i];
    }
    console.log(max);
}
calcTempAmplitude([3, 7, 4, 9, 1, 8]);
*/

/////// EXAMPLE 2 OF THE SAME PROBLEM
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude = function (temps) {

    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i < temps.length; i++) {
        const curTemp= temps[i];
        //since we're using this so much, let's creater a variable for that.
        if(typeof curTemp !== 'number') continue;
        //read as: if currentTemperature is different from a number, then continue.
       
        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
        //what i had to correct? i changed the variable, but left the position like curTemp[i], so...
    }
    console.log(max, min);
};
calcTempAmplitude([3, 7, 4, 1, 8]);
calcTempAmplitude(temperatures);
*/


///// PROBLEM 2: 
//Function should now receive 2 arrays of temperature

//a) Understanding the problem:
// - with 2 arrays, do we need to implement functionality twice? NO. The solution is to merge the two arrays in the beginning.

//b) Breaking up into sub-problems
// - How to merge 2 arrays

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude = function (temps) {

    let max = temps[0];
    let min = temps[0];

    for(let i = 0; i < temps.length; i++) {
        const curTemp= temps[i];
        //since we're using this so much, let's creater a variable for that.
        if(typeof curTemp !== 'number') continue;
        //read as: if currentTemperature is different from a number, then continue.
       
        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
        //what i had to correct? i changed the variable, but left the position like curTemp[i], so...
    }
    console.log(max, min);
};
calcTempAmplitude([3, 7, 4, 1, 8]);
calcTempAmplitude(temperatures);
