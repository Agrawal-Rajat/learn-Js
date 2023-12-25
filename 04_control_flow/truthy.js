// const userEmail = "Rajat@hfhf"
// if(userEmail){
//     console.log("yes"); // will print yes in case of an non empty string as we consider non empty string ture
// }
// else{
//     console.log("no"); // will print no in case of an empty string as an empty string is considered to be false
//}

// but ek empty array true hota hai, lets see whats happening out there

//falsy values
// false, 0, -0, BigInt 0n, "", Null, undefined, NaN
// except above, all the values are truthy values
//some truthy values are - "0", "false", " ", [], {}, 
//function(){} 

// nullish coalescing operator (&&) -- null , undefined
// let val1;
// val1 = 3 ?? 45 
// console.log(val1); // 3 will be printed
// val1 = null ?? 45 
// console.log(val1); // 45 will be printed
// val1 = undefined ?? 45 
// console.log(val1); // 45 will be printed

// ternery operator ?
// synatx -- > condition ? true : false

// const price = 100
// price >= 80 ? console.log("yes") : console.log("no"); // print yes
 