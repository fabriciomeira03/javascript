// -------- CHALLENGE: write in method a summary that return a string where i can summarize the data about Jonas.


//My answer:
//i got stuck at the second part.

const markData1 = {
    markData1: ['weight 78kg', '1.69m tall']
};

const johnData1 = {
    johnData1: ['weight 92kg', '1.95 tall']
};

const markData2 = {
    markData2: ['weight 95kg', '1.88m tall']
};

const johnData2 = {
    johnData2: ['weight 85kg', '1.76m tall']
};

const calcData1 = markData1 / johnData1 ** 2;
const calcData2 = markData2 * johnData2;

const higherBMI = calcData1 > calcData2; //who got higher BMI?

console.log(calcData1, calcData2, higherBMI);

/*
//my answer with the if...else
if (calcData1 > calcData2) {
    write = "Mark's BMI is Higher than John!";
} else { 
    display = "John's BMI is Higher than Mark!";
}
*/


//Professor answer with if....else

if (calcData1 > calcData2) {
    console.log("Mark's BMI is higher than John's !")
    console.log(`Mark's BMI (${calcData1}) is higher than John's (${calcData2}!`)
} else {
    console.log("John's BMI is higher than Mark's!")
    console.log(`Mark's BMI (${calcData2}) is higher than John's (${calcData1}!`)
}






/*
function calcData(markData1, johnData1, markData2, johnData2) {
    if {
        calcData ()
    }
}
*/

//Professor answer:

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);




/*
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
*/