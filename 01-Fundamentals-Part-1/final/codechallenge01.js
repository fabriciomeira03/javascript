// -------- CHALLENGE: write in method a summary that return a string where i can summarize the data about Jonas.



const jonas = {
    firstName: 'Jonas',
    lastName: 'Meira',
    birthYear: 1986,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
},


const jonas = [
    'Jonas',
    'Meira',
    2023 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
    
];


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
