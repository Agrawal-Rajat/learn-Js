const user = {
    username : "Rajat",
    price : 999,
    welcomeMessage : function(){
        console.log(`my name is ${this.username}`)  // this keyword refers to the current context
        console.log(this); //  it will print the object 
    }
}

//user.welcomeMessage()

// user.welcomeMessage() // my name is Rajat
// user.username = "Garvit"
// user.welcomeMessage() // my name is Garvit

//console.log(this) // this will return empty object as here it is a stand alone, but if we did the sam ething in browser we will get window as a global object

function chai(){
    let username = "Rajat"
    //console.log(this)
    console.log(this.username); // it will return undefined
}
//chai() // this will print many values, it means this ke andar bhaut kuch toh rakha hu hai jiski hum access kar sakte hai

//chai()

//delcaring function as arrow functions
// syntax of arrow function
// const coffee = () => {

// }

const coffee = () => {
    let name = "Rajat"
    console.log(this); // empty object  
   // console.log(this.name); //undefined
}

//coffee()

//implicit return arrow function

//const add = (num1, num2) => num1 + num2
//console.log(add(3, 4));
// isme hum curly brackets hata lete hai, aur return statements bhi hata dete hai kyuki isme one line mei hamara statement aajata hai 


//const add = (num1, num2) => (num1 + num2)
//console.log(add(3, 5));

//agar curly bracket lagayenge toh return likhne ki jarurat hai, par parenthis hai toh return statement nahi laygayenge 

//agar return keyword use karte hai toh explicit return 
//agar return keyword use nahi karte hai toh implicit return


//agar hum object ko return karvana chiaye 
// const add = (num1, num2) => {username : "Rajat"}
// console.log(add(3, 4)); // undefined

const add = (num1, num2) => ({username : "Rajat"})
console.log(add(3, 4)); // { username: 'Rajat' }

// to return a object we have to wrap it inside the parenthesis











