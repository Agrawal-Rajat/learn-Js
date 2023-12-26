//if we wanna to loop thorugh objects we have a special loop called for in loop 
//forin loops can also be used for other things also

const myObjects = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby'
}
// for (const key in myObjects) {
//     console.log(key); // this will print all the keys in the obejct i.e. js, cpp, rb
// }

// for (const key in myObjects) {
//     console.log(myObjects[key]); // this will print all the key values in the object, i.e. javascript, c++, ruby
// }

// using for in loops in array

// const myArr = ['rj', 'dj', 'pj', 'cj']
// for (const key in myArr) {
//     console.log(key); // this will print the indexes of the array
// }

// for (const key in myArr) {
//     console.log(myArr[key]); // this will print the valye of the indexes of the array, i.e. rj, dj.....
// }

// using for in loop for maps 
const map = new Map()
map.set(1, 'a')
map.set(2, 'b')
map.set(3, 'c')
// for (const key in map) {
//     console.log(key); // this will not throw an error but not will print anything as maps cant be iterable from for in loops 
// }