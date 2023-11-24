// strings can be declared from both double and single quotes

let name = " Rajat";
let repoCount = "50"
console.log(name + repoCount); // its not generally recomeneded

//String interpolation

console.log(`The name is ${name} and my repocount is ${repoCount}`); // this is enclosed within back ticks and varibales are directly called using ${variable name}

// string methods can be used simultaneoulsy in the above methods so it is recommended

// declaring a string 

const gameName = new String("emperorrajat") // did the same thing
console.log(gameName);

// strings are key-value pairs which means we can access them using their keys, which are starting from 0

console.log(gameName[0]); //returns e

//prototype is contains all the string objects 

console.log(gameName.length); //these are all the string funtions
console.log(gameName.toUpperCase()); // EMPERORRAJAT
console.log(gameName); // emperorrajat
// remember the original stirng is not changed here, still the gameName remians same as we declared there cause string is primitve which is stored in stack memory which creates the copy of the value
const newSub = gameName.substring(0,4) // start included but end is excluded
console.log(newSub); //empe

// if we give negative values in sub string it will ignore it and start from the 0 index

const another = gameName.slice(0,2) //slice can take negative values
console.log(another); // em
 // read about various string methods