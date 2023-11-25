// decalring a number
const balance = new Number(32) //this is an object creation
// console.log(typeof balance); //object
// console.log(balance);

// console.log(balance.toString()); // converted to string
// console.log(typeof balance.toString()); // string
 
// console.log(balance.toFixed(2)); //32.00 --> upto 2 decimal places

const anotherNumber = 44.54535
// console.log(anotherNumber.toPrecision(2)); //45
// console.log(typeof anotherNumber.toPrecision()); // returns a stirng

const num2 = 56234828
// console.log(num2.toLocaleString()); //56,234,828
// it put commas as per the international system

// console.log(num2.toLocaleString('en-IN')); //5,62,34,828
//this put commas according to indian standard, also dont put space between en-IN 

//maths libraray is default in javacript

console.log(Math); //it is an object which have many functions in it , one can see it from writing the same in the browser console

console.log(Math.abs(-2)); // 2
console.log(Math.abs(2)); // 2

console.log(Math.round(23.7)); //24
console.log(Math.ceil(23.2)); // 24 as it always go for upper value
console.log(Math.floor(23.9)); // 23 as it always go for lower value
console.log(Math.max(2,4,12,67,3)); // 67
console.log(Math.random()); // generates a random value between 0 and 1

console.log((Math.random()*10) + 1) //genertes a random number from 1 to..

const min = 10
const max = 20
console.log(Math.floor((Math.random() * (max - min + 1)) + min));
// returns a random integer between 10 and 20