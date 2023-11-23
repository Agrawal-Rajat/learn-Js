// console.log(2 >= 1); 
// console.log(2 <= 1);
// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// theese all returns in boolean i.e. true and false

// console.log("2" > 1); // returns true
// console.log(2 < "1"); // return false

// such ouputs are sometime unpredictable so it is advised to check whether the datatype of the object is same or not before comparing

// console.log(null > 0) // returns false
// console.log(null == 0) // returns false
// console.log(null >= 0) //returns true

// the == works differnetly as compared to >=, <=, >,< as the comparisons convert the null to number i.e. 0 i.e. why we get ture in the third case

// yaha null ke jagah agar undefined rakh de toh koi farak nahi padega hume false hee milega

console.log("2" == 2); // returns true
console.log("2" === 2); // returns false

// === this is strict check, it check the data type as well as the value