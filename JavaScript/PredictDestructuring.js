// Problem 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
console.log(randomCar) // output = 'Tesla'
console.log(otherRandomCar)// output = 'Mercedes'

// Problem 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
console.log(name);  // no output
console.log(otherName);//output = 'Elon'

//Problem 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
console.log(password);// output = 12345
console.log(hashedPassword);// undefined

//Problem 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;

console.log(first == second);// output = false ( 2 != 5)
console.log(first == third);// output = true ( 2 == 2)

//Problem 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;

console.log(key);// output = 'value'
console.log(secondKey);// output = [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);// output = 1
console.log(willThisWork);// output = 5.










