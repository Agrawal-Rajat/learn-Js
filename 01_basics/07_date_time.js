const myDate = new Date() // object creation
//console.log(myDate.toString()); 

//console.log(myDate.toLocaleString()); //Sat Nov 25 2023 04:40:29 GMT+0000 (Coordinated Universal Time)

//console.log(myDate.toDateString()); //11/25/2023, 4:40:29 AM

//console.log(typeof myDate); // object 

// decalring a specific date

let myOwnDate = new Date(2023,4,23)
//console.log(myOwnDate.toDateString());

//javascript mei month 0 se start hota hai which means may ke liye hum 4 likhnege 5 nahi

let createDate = new Date("2023-01-16")
//console.log(createDate.toDateString());
//here month will start from 01 only this is YYYY-MM-DD format
//also it can be as MM-DD-YYYY

//creating time stamps

let myTimeStamp = Date.now() // can also use new Date
// console.log(myTimeStamp) //1700888417675 ms
// console.log(createDate.getTime()); //1673827200000 ms

//console.log(Math.floor(Date.now() /1000));
//returns current time in seconds 

let newDate = new Date()
// console.log(newDate.getDay()); // 6
// console.log(newDate.getMonth() + 1); // 11
// console.log(newDate.getTime()); // 1700888956299ms

console.log(newDate.toLocaleString('default', {
    weekday : "long",
    
}));
