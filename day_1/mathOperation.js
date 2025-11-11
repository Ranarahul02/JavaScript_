let num = new Number(20)

// console.log(num); // it is an object

let num1 = 10.64543;

// console.log(num1.toString()); // it convert number to string

// console.log(num1.toFixed(1)); // it convert number to fixed point notation with given decimal places

// console.log(num1.toPrecision(2)); // it convert number to fixed point notation with given total number of significant digits

// console.log(Math.random())

// console.log(Math.floor(Math.random() * 10)); // it give random number between 0 to 9

// console.log(Math.floor((Math.random() * 10)+1)); // it give random number between 1 to 10

// console.log(Math.ceil(4.2)); // it round up the number

// console.log(Math.floor(4.8)); // it round down the number

// console.log(Math.round(4.5)); // it round to nearest integer

// console.log(Math.max(2,5,8,1,4)); // it give maximum number from given numbers

// console.log(Math.min(2,5,8,1,4)); // it give minimum number from given numbers

// console.log(Math.sqrt(16)); // it give square root of given number

// console.log(Math.abs(-7)); // it give absolute value

// console.log(Math.pow(2,3)); // it give power value (2^3)    

// console.log(Math.log(10)); // it give natural logarithm of given number

let min = 90
let max = 100

console.log(Math.floor((Math.random()*(max-min+1))+min))

// it give random number between given range (90 to 100)