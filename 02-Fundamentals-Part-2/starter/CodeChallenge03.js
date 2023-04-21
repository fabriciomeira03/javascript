

const BMIMark = function(marks) {
    return marks[1] / marks[2] ** 2;
    console.log(BMIMark);
}
const BMIJohn = function(johns) {
    return johns[1] / (johns[2] * johns[2]);
    console.log(BMIJohn);
}



const marks = ['Mark Miller', '78kg', '1.69m tall'];
const johns = ['John Smith', '92kg', '1.95m tall'];

console.log(BMIMark, BMIJohn);


// Professor answer:

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.92,
    calcBMI: function () {
        this.bmi = this.mass / this.height **2;
        return this.bmi;
    }
};

mark.calcBMI();
console.log(mark.bmi);

john.calcBMI();
console.log(john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than John ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than John ${mark.fullName}'s BMI (${mark.bmi})`);
}


//in script, for further review, look for OBJECT METHODS lecture;

//we don't need repeat ourselfes like here, but we will learn better ahead about object oriented methods.


