// declaring object using constructor
// const tinder = new Object()
// console.log(tinder); // returns a singleton object, no differnece in output of a single ton aur literal object

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Tarun"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

//declaring object inside an object
 const regularUser = {
    email : "rajat@google.com",
    fullname : {
        userFullName : {
            firstName : "Rajat",
            LastName : "Agrawal"
        }
    } 
 }
//  console.log(regularUser.fullname.userFullName.firstName); // rajat

 // combining objects 
 const obj1 = {
    1 : "a",
    2 : "b"
 }

 const obj2 = {
    3 : "c",
    4 : "d"
 }

 //const obj3 = {obj1, obj2} // this will not combine instead return object inside object

 //const obj4 = Object.assign(obj1, obj2) 
 //console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//console.log(obj3);
 const obj5 = Object.assign({}, obj1, obj2)
 //console.log(obj1); // now obj1 is not a source so values will not be copied in obj1 
 
 //console.log(obj5); // it will print the same thing as the obj4 but this is generally recommended syntax 

// agar hum ek empty array nahi denge {},  toh iska matlab hai ki sari values obj1 mei jaa rhi hai 
// toh empty array dene se na vo target ban jata hai toh baki sari values usme chali jati hai
// for more read on docs about assign 

const obj6 = {...obj1, ...obj2} // spread operator is mostly used to merge the two objects 
//console.log(obj6);
// array of objects 
const users = [
   {
      id : 1,
      email : "ah@gmail.com" 
   },
   {

   }, 
   {

   }
]

// so we can access it as 
users[0].email // as this is array but at index 0 it is object so we can accesss via further using dot

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // gives all keys of the object, it returns all keys in an array 

// console.log(Object.values(tinderUser)); // returns all the values of the object as an array

// console.log(Object.entries(tinderUser)); // returns all the key value pairs as an array where the 0 index is key and 1 index is array 

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // returns true as this property exists

// console.log(tinderUser.hasOwnProperty('isLogged')); // returns false as this property do not exists

const course = {
   courseName : "JEE Advanced",
   price : "999",
   courseInstructor : "Rajat"
}

//destructuring

console.log(course.courseInstructor); // ab gara hume course instructor print karna ho baar baar toh itna bade kyu likhe, instead use 

// const {courseInstructor} = course
// console.log(courseInstructor); // this will print the same 

// even if we feel the name is tooo long we can ourself give a name
const {courseInstructor : instructor} = course
console.log(instructor); // this will also print the same name i.e. Rajat

// API AND JSON

// jabhi bhi hum api call karte hai toh vo json format mei hota hai pehle vo xml mei hota tha 
//json is nothing but it looks like a object

//json 
{
   "name" : "Rajat",
   "coursename" : "JEE Advanced",
   "price" : "free"
}

// json can also be array of objects
[
   {},
   {},
   {},
]

//we will learn more about json and api later








