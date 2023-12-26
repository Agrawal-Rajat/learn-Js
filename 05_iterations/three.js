// for-of loop

// for (const iterator of object) {
    
// }

// yaha iterator bas ek variable ka kaam kar rha ha iska, naam kuch bhi ho sakta hai 
// yaha object se matlab js ke objects se nahi hai, yaha object matalb kiss chiz ko iterate karna hai, jaise yaha arrayss, objects, strings etc jo bhi iterable hote hai vo ho sakte hai

// const numbers = [1, 2, 3, 4, 5]
// for (const num of numbers) {
//     console.log(num);
// }

// it also works on strings 

// const greeting = "hello world"
// for (const greet of greeting) {
//     if(greet == " "){
//         continue
//     }
//     console.log(greet);
// }

//Maps 
// it is used to store key-value pairs
// no unique key-value pair is stored, even if we add it later
// it is a object 
// key-value pairs are stroed in an object 

const map = new Map()
map.set(1, 'a')
map.set(2, 'b')
map.set(3, 'c')
//console.log(map);

// for of loop on map
// for (const cd of map) {
//     console.log(cd); // this will print the array of ekch key-value pair
// }

// to print key value pair separately
// for (const [key, value] of map) {
//     console.log(`${key} and is ${value}`); // this will print like 1 and is a 
// }

//for of loop on objects 

const myObj = {
    'game' : 'NFS',
    'game2' : 'spiderman'
}

// for (const [key, val] of myObj) {
//     console.log(key, val); // this will throw error as myObj is non-iterable
// }

// this means that for-of loop cannot be genrally used in case of objects, as objects are non iterable but we can make objects iterable which we will learn later.
//now to there is one loop present which can be used to iterate through the objects, which is discussed in the next file- four.js