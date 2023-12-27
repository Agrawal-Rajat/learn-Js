//map method
const myNums = [23, 34, 45, 55, 55, 66, 63]

// if we want to add 10 to each number, by using map method 
// const newNum = myNums.map((num) => num + 10)
// console.log(newNum)

//chaining --> we can add multiple methods 
const newNum = myNums
                .map( (num) => num * 10) 
                .map( (num) => num + 1)
                .filter ( (num) => num >= 500)

console.log(newNum);

// at each method the value taken is that which is updated by bove method, it is not necessary to use num everywhere, each method can have perimeter of any name as just they are denoting the elements 

    