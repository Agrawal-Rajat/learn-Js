//const obs = ["js", "cpp", "java", "python"]
// const var1 = obs.forEach((item) => {
//     //console.log(item);
//     return item;
// })
//console.log(var1); // it wil print undefined, as it will not return anything, so if we want to return something, we have to use filter.. 

// filter()
const myObs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const var1 = myObs.filter((item) => item > 4)
// console.log(var1); // it will print all the items greater than 5 

// filter() also takes call back function wihtin it 

// ye function for each se bhi ho sakta hai par vo kuch return nahi karta hai 

// const var1 = myObs.filter((item) => {
//     item > 4;
// })
// console.log(var1); // it will print[] as we havent returned anything, jab {} hum scope lagate hai tab hume return likhna padta hai 

// const var1 = myObs.filter((item) => {
//     return item > 4;
// })
// console.log(var1);

//now doing the same thing using for each
//  myObs.forEach((item) => {
//     if(item > 4){
//         console.log(item); // it will print same but no in array format
//     }
//  })

// using filter to filter out the results that we want in the array of objects 
const books = [
    {
        bookName : "harry porter",
        publishDate : 1999,
        edition : 2023
    },
    {
        bookName : "2 states",
        publishDate : 2000,
        edition : 2022
    },
    {
        bookName : "witch craft",
        publishDate : 1976,
        edition : 2012
    },
    {
        bookName : "money power",
        publishDate : 2002,
        edition : 2023
    }
]

// now geeting those book records which are published after 2000
//const myBooks = books.filter( (bks) => bks.publishDate >= 2000)
//console.log(myBooks);

// now getting those books whose edition are of 2023
const myBooks = books.filter( (bks) => {return bks.edition === 2023})
console.log(myBooks);