
/* Thoughts:

ARRAY with maximum temperatures 
need to appear in given days (FUNCTION for that)

DATA1: [17, 21, 23]
DATA2: [12, 5, -5, 0, 4]



const temps = [17, 21, 23, 12, 5, -5, 0, 4];
const temp = function (printForecast) {

   let days = temps[0];

   for (let i = 0; i < temps.length; i++);
}

console.log(`The forecast fo the wheather is ${printForecast} days`);

*/


//Professors answer:
/*
1) UNDERSTANDING:
    - array transformed to string, separeted by ... (three dots);
    - temperatures ok we know are coming from the array, but what about the "days"? What is the X days? it's the current index of arrays + one, two and three;
    - see...the difference of days to the forecast are a few days, count it (17, 21, 23). Answer: index + 1;

2) Breaking up into sub-problems:
    - the main issue will be transform the array into string because it's essnecialy what we will have to do.
    - transform each element to string with Celsius
    - String needs to contain day (index + 1) 
    - Add .... between elements, also START & END of string.
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

//console.log(`...${data1[0]}ºC ... ${data1[1]}ºC ...${data1[2]}ºC ...`); 
//we could do that in a hard mode, but that's not what we actually want.

const printForecast = function(arr) {
    //Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

    // with an array with multiple functions in it, we must use a LOOP.

    let str = ''; 
    //instead of starting with 0, we're going to use the equivalent of 0, but for strings, which is the empty string.
    for (i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}ºC... in ${i + 1} days`;
        //note: the current index is "i"
    }
    console.log('...' + str);
};
printForecast(data1);
