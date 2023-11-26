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
    1 : "a",
    2 : "b"
 }

 const obj3 = {obj1, obj2} // this will not combine instead return object inside object
console.log(obj3);