// if statements 

// >, <, >=, <=, !=
// ===, !== it also checks datatype 

// const isUserLoggedIn = true;
// if(2 == '2'){
//     console.log("Yes"); // printed yes 
// }

// if(2 === "2"){
//     console.log("yes");
// }
// else{
//     console.log("No"); // printed yes as it checks the datatype also
// }

// const score = 32;
// if(score == 32){
//     const money = 250;
//     console.log(`the money is ${money}`); // this will be printed
// }
// console.log(`the money is ${money}`); // this will throw an error as money is only defined in the above scope but not in a local scope

// const balance = 500;
// if(balance == 500) console.log("yes"); // this is called implicit scope, this is generally recommended only for single line, do not forget to add the semicolon at the last.
// // but multiple lines can be added using comma 
// if(balance == 500) console.log("Hi"), console.log("yes");


// const balance = 1000;
// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else{
//     console.log("less than 1200");
// }

//nesting of if
const userLoggedIn = true;
const debitCard = true;
// if(userLoggedIn){
//     if(debitCard){
//         console.log("Processing payment");
//     }
//     else{
//         console.log("debit card failed");
//     }
// }
// else{
//     console.log("please login");
// }

// if(userLoggedIn && debitCard){
//     console.log("Make payment");
// }
// && statements will be only executed if both the statements are true
// || statemets will be only executed if any one of the two astatemts is/are true







