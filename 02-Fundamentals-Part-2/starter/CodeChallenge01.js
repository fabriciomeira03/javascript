

const dolphins = (44, 23, 71) / 3; 
const koalas = (65, 54, 49) / 3;
const dolphins2 = (65, 54, 49) / 3;
const koalas2 = (23, 34, 27) / 3;


function calcAverage (dolphins, koalas, dolphins2, koalas2) {
    return calcAverage / 4;
}

console.log()


//Professors answer:

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log (calcAverage (3, 4, 5)); //here used random numbers, becaue we now here supposed to be 4, the middle one as the average between the 3 numbers. se we now are good to go and proceed.


//Test1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log (scoreDolphins, scoreKoalas);

const checkwinner = function(avgDolphins, avgKoalas) {
    
    if (avgDolphins >= 2 * avgKoalas) {
    consolelog(`Dolphins win (${avgDolphins} vs ${avgKoalas}))`);
    } else if (avgKoalas >=2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
    }

checkwinner(scoreDolphins, scoreKoalas);
checkwinner(576, 111);


// arrow function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


//'calcAverage' is isolated of the rest of the code. them we can use for our own purpose. it's important internalize this aspect of functions, and only then, we can really be abl to start to see the potention of functions everywhere in our code.



