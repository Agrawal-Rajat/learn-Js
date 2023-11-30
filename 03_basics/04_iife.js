// immediately invoked function expressions (IIFIE)

//agar hum chhate hai ki humara function turant hee execute ho jaye toh hum iife ka use karte hai

(function chai (){
    // this is a NAMED IFFE
    console.log(`DB CONNECTED`);
})(); // this will immediately invoke the function 
//syntax
// ()() first parenthesisi is for the defination of function and second parenthesis is fo the execution of function

// it returns DB CONNECTED

// global scope ke pollution se problem hoti hai, toh uss global scope ke pollution ya declartion of variable ko hatane ke liey humne iife ka use kiya 

// writing it as arrow function

(() => {
    // THIS IS UN-NAMED IFFE
    console.log(`DB CONNECTED 2`);
})(); //  ye nahi chalega ,error throw karegea aur yahi nahi arrow ke alava normal function jaise likhe toh bhi error throw karega kyuki humen pichla wlaa iife ko end hee nahi kiya hai, islie usse end karne ke liye hum dusre parenthesis ke baad ek semi colon lagaynege 

// ab agar hum chahate hai ki varaible bhi pass kare toh
((name) => {
    // THIS IS UN-NAMED IFFE
    console.log(`DB CONNECTED 2 as ${name}`);
})('Rajat'); // yaha dusre parenthesis mei hum likhenge vo name ki value jo pass karvana chate hai isko hum normal function ki tarah hee dekho usme bhi hum chai("rajat") aise hee toh likhte the at the time of execution







