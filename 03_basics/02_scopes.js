//{} this is called as scope whether it is written within function, loops, condtional statements but dont confuse it with object

// everything written or declared inside is called block scope or local scope
// everything written or declared outside is called global scope 

// if(true){
//     let a = 20
//     const b = 30
//     var c = 40
// }
//console.log(c); // this will print 40
// console.log(b); // this will give error
// console.log(a); // this will give error

let a = 30;
if(true){
    let a = 20
    var c = 40
   // console.log(`value of block scope a is ${a}`); // 20
}

//console.log(`value of global scope a is ${a}`); //30

// we dont use var because of its scope behaviour as it do not follow block scope


function one(){
    const username = "Rajat"

    function two(){
        const website = "youtube"
        console.log(username); // this will be printed kyui username two ke liye toh global variable hai na 
    }
    //console.log(website); // this cant be accessed kyuki website one ke liye toh ek block variable hai jo vo access nahi kar sakta 
 //   two()
}

one() // this will print nothing as function two is not called, to print Rajat two must be un commented

if(true){
    const username = "Rajat"
    if(username === "Rajat"){
        const website = " youtube"
       // console.log(username + website);
    }
   // console.log(website); // this cant be accessed 
}

//console.log(username); // not defined cant be accessed

console.log(addOne(5)) // returns 6 , NO error
//this is a fucntion
function addOne(num){
    return num + 1
}


console.log(addTwo(5)); // throws error
// this is also a function but also expression 
const addTwo = function(num){
    return num + 2
}

