"use strict"; // this line will help to treat all js code as newer version

//alert(3 + 3) // this will give error as we are using node js not browser

// let name = " Rajat";
// let Id  = 21;
// let isLoggedIn = false;
// let issue = null;
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// ye lag same rhe hai par hai same nahi, Symbol ka yahi kaam hai ki inhe uniquely identify karna 

// console.log(id == anotherId); // false
// console.log(id === anotherId); //false

const bigNum = 758757544475854457n

//last me n lagane se ye bigInt ban jata hai 

//Non premitive data type
// 1. array
const heros = ["iron man", "caps", "thor"]

//2.object

let obj = {
    name : "Rajat",
    age : 18
}

//3. function
function myFunc() {
    console.log("hello world");
}