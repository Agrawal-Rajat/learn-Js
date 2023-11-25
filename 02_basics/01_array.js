
// declaring arrays 
const myArr = [2, 3, 4, 56, 7]
const myArr2 = new Array(1,2,3,4,5)
const myArr3 = [44,56,73,542,33]

const name = ["rajat","aadi","sanjana","tani"]
const surname = ["agrawal","patil","thakur","singh"]
//javascript arrays are resizeable and can contain elements of different datatypes

// when we copy a array it creates a shallow copy

//shallow copy of an object is a copy whose properties share the same reference

//Deep copy of an object is a copy whose properties do NOT share the same reference

// console.log(myArr[0]);
// console.log(myArr);
// console.log(myArr2);

//array methods

// myArr.push(6) // add element to end of array
// console.log(myArr);
// myArr.pop() // removes the last element 
// console.log(myArr);
// myArr.unshift(6) // add elemnet to start of array
// console.log(myArr);
// myArr.shift() // removes the first element 
// console.log(myArr);

// console.log(myArr.includes(9)); // returns ture if it has the element 

// console.log(myArr.indexOf(90)); // returns -1 in the case of no such element 

// const newArr = myArr.join() // newArr all values are converted to string seperated by commas
// console.log(typeof myArr); // object
// console.log(typeof newArr); // string

// console.log(myArr); //[ 2, 3, 4, 56, 7 ]
// const myn1 = myArr.slice(1,3) 
// console.log(myn1); // [ 3, 4 ]
// console.log(myArr); //[ 2, 3, 4, 56, 7 ]

// const myn2 = myArr.splice(1,3)
// console.log(myn2); // [ 3, 4, 56 ]
// console.log(myArr); // [ 2, 7 ]

// slice jo hai vo start ko include karke end ko exclude karke ek subarray return karta hai bina asli array mei gadbad kiye

//splie on the other hand , start aur end dono ko include karke ek subarray return karta hai aur asli array mei se vo sari values ko delete kar deta hai, toh ab asli array mei sirf unn value ke alava jo values hogi vahi bachi hogi

// myArr.push(myArr2)
// console.log(myArr); // it does not merge but return a array inside array
// console.log(myArr2);

// const ans = name.concat(surname) // this craetes a new array dont modifies the original array

// console.log(ans); // elements of surname is added at the last of the name array, it is merged 

// spread operator
//this ... spread operator spreads  the value of the array as a seperate elements, remember it as a glass which falls down and glass particles spreads all aorund 
// const allName = [...myArr, ...myArr2]
// console.log(allName);
//it did the same thing as second array elements are added at the last of the first array

const myArr4 = [1, 2, 3, [2,3,4,5], 34, 56, [34,23, 44, 55, [23, 44]], 33]

const ans = myArr4.flat(Infinity) // flat method se array ke andar jo array hota hai uske elements ko vo bhahar nikal leta hai aur as a normal elements spread kar deta hai, parenthesis ke andar hum depth decide karte hai ki kitne array tak spread karna hai jaise yaha 2 se kaam ho jata , varna infinity bhi likh sakte hai without inverted commas
// console.log(ans);

console.log(Array.isArray("Rajat")) // returns false as rajat is not an array 

console.log(Array.from("Rajat")); // makes a array from rajat, [ 'R', 'a', 'j', 'a', 't' ]
console.log(Array.from(2)); //returns empty array

console.log(Array.from({name : "Rajat"})); // returns an empty array, in this we have to tell ki keys ko ya value ko, kisko leke array banaye

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
// it returns [ 100, 200, 300 ]
//.of method returns a new array from set of elements 


