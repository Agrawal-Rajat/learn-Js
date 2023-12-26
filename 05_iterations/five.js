// for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach(function(val) {
//     console.log(val); // returns the array elements 
// })
 
//call back function dena hota hai foreach() ke andar. callback function mei bas naam nahi hota hai function ka so function() yaha bracket ke andar koi bhi name de sakte hai, phir brcket ke baad curly brackets jiske andar kaam karnege function(anything){}

// now using arrow funtion

// coding.forEach((item) => {
//     // jaise normal arrow function mei se bas naam aur = hata do, name = () => {} so just remove, () => {}
//     console.log(item); // prints the array elements 
// } )

//creating function separartely 
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) // also did the same thing, yaad rakhna function ka refernece dena hai, usse execute nahi kar dena hai matab printMe aisa not printMe()


// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr); // this will print array item, its index and array list i.e. 
//     // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// })

// using for each loop for iterating through array of objects
const myCoding = [
    {
    languageName : "javascript",
    languageFileName : "js"
    },
    {
    languageName : "java",
    languageFileName : "java"
    },
    {
    languageName : "python",
    languageFileName : "py"
    },
    {
    languageName : "c++",
    languageFileName : "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageFileName); // prints the langaugeFileName  
})
