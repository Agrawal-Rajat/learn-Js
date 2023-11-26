//constructor se banate hai toh single ton object banta hai yaani ki ye apni tarah ka ek hee object hai
//Object.create

// jab literals se banate hai toh single ton object nahi banta hai 

const mySym = Symbol("key1") // declaring symbol
// object literals
const myObj = {
    name : "Rajat", // name ko hum double quotes mei isliye nahi likhte kyuki js maan leta hai ki vo string hee hai par value ko hume likhna padta hai double quotes mei if stirng
    "Surname" : "Agrawal",
    [mySym] : "myKey1", // using a symbol
    age : 18,
    location : "Banglore",
    isLoggedIn : false,
    lastLogginDays : ["Monday", "Saturday"]
}

// Accessing objects
// console.log(myObj); //returns object 
// console.log(myObj.age); //18 
// console.log(myObj["age"]); // 18, yaha inverted comma lagana hai 
// console.log(myObj.Surname);
// console.log(myObj["Surname"]);
// console.log(myObj[mySym]); // printing symbol

// modifying values in object
myObj.name = "Garvit";
// console.log(myObj["name"]);

// freezing the changes in the object 
//Object.freeze(myObj)
myObj.name = "Rajat" // did not modified
// console.log(myObj); 

// using funciton in object

myObj.greeting = function(){
    console.log("Hey this is rajat");
}
console.log(myObj.greeting());

myObj.greeting2 = function(){
    console.log(`hey i am ${this.name}`); // this is used to say that you are accessing this object folowed by the key name 
}
console.log(myObj.greeting2());
