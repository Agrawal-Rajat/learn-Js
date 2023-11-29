function sayMyName(){
    console.log("RAJAT");
}

//sayMyName //  ye hogya funtion ka refernece
sayMyName() // ye hogya function ka execution

function addTwoNumbers(a,b){
    console.log(a + b);
}
// thing inside the parenthesis are called parameters
addTwoNumbers(2, 3) //5
addTwoNumbers(2, "3") //23
addTwoNumbers("3", 2) //32
addTwoNumbers(3, "a") //3a
addTwoNumbers(3, null) //3

//const result = addTwoNumbers(5, 3)
//console.log("result is ", result); //undefined
// as this function is not returning something , its just printing so it will not be stored in result


function subtarctNumber(a, b){
    // let ans = a - b
    // return ans
    return a - b // can also return like this 
    console.log("rajat"); // this line will never be executed as return ke baad koi bhi line execute nahi hoti 
}

const result = subtarctNumber(5, 3)
// console.log(result);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

loginUserMessage("rajat") // ye return karega par print nahi kyuki isse hume siirf rturn karne ko bola hai function mei

// console.log(loginUserMessag("rajat"));  // this will print the message

// console.log(loginUserMessage()); // agar koi value hee pass nahi ki ho toh aata hai undefined -- undefined just logged in


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("write username again");
//         return // this will prevent execution of other lines further
//     }
//     return `${username} just logged in`
// }

// !username is equilvalent to username === undefined and by defalut undefined is false and !false is true. so we can replace !username over there within parenthesis

// we can bydefault give a vlaue if no value is passed at the time of execution

function loginUserMessage(username = "sam"){
    return `${username} just logged in`
}

//console.log(loginUserMessage()); //sam just logged in

// now samjo ki hume no. of parameters pata nahi hai aur chate hai ki add jaise jaise hote jaise vaise handle ho jaye

function price(...a){ //  this is called rest operator, the difference between spread and rest only depend on usecase but the syntax is same
    return a
}

//console.log(price(100,200,300)); // returns an array of all a


// passing objects in a function
const user = {
    name: "Rajat",
    email : 'agrawal21rajat@gmail.com'
}

function handleObject(anyobject){
    return `the name is ${anyobject.name} and the email is ${anyobject.email}`
}

//console.log(handleObject(user));
console.log(handleObject({
    name : "garvit",
    email : "garvit@gmail.com"
}));

// passing array inside the function
const myArray = [200,300,400,500]

function handleArray(anyarray){
    return `the first element of array is ${anyarray[0]} and the last element of the array is ${anyarray[anyarray.length - 1]}`
}

//console.log(handleArray(myArray));
console.log(handleArray([111,121,131,141,151]));



