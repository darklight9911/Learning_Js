//array
const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);

//array methods
//push() - add an element to the end of an array
arr.push(6);
console.log(arr);   // [1, 2, 3, 4, 5, 6]
arr.push(7, 8, 9);
console.log(arr);   // [1, 2, 3, 4, 5, 6, 7, 8, 9]
//pop() - remove an element from the end of an array
arr.pop();
console.log(arr);   // [1, 2, 3, 4, 5, 6, 7, 8]

//shift() - remove an element from the beginning of an array
arr.shift();
console.log(arr);   // [2, 3, 4, 5, 6, 7, 8]
//unshift() - add an element to the beginning of an array
arr.unshift(1);
console.log(arr);   // [1, 2, 3, 4, 5, 6, 7, 8]
arr.unshift(0, -1, -2);
console.log(arr);   // [0, -1, -2, 1, 2, 3, 4, 5, 6, 7, 8]
console.clear();
//splice() - add or remove elements from an array
//splice(start, deleteCount, item1, item2, ...)
//start - index at which to start changing the array
//deleteCount - number of elements to remove from the array
//item1, item2, ... - elements to add to the array
//splice() -> non-primitive data type
console.log(arr); //[ 0, -1,-2, 1, 2, 3, 4, 5, 6, 7, 8 ]
const arr2 = arr.splice(2,6);
console.log(arr);   // [ 0, -1, 6, 7, 8 ]
console.log(arr2) // [ -2, 1, 2, 3, 4, 5 ]

console.log(arr.includes(3)); // true
console.log(arr.indexOf(3)); // 5
console.log(arr.indexOf(30)); // -1
console.log(arr.lastIndexOf(3)); // 5
console.clear();

//slice() - returns a section of an array without extracted/rest elemens from the original array
//slice(start, end) -> non-primitive data type
//start - index at which to begin extraction
//end - index at which to end extraction
//end is not included
console.log(arr); 
let slicedArr = arr.slice(2, 5);
console.log(slicedArr); // [-2, 1, 2]
console.log(typeof arr.join()); // string
console.log(arr.join()); // 0,-1,-2,1,2,3,4,5,6,7,8
console.log(arr.join('')); // 0-1-212345678
console.clear();

const marvel = ['thor', 'ironman','spiderman']
const dc = ['batman', 'superman', 'wonderwoman']
//concat
const combined = marvel.concat(dc);//concat() - merge two (generally)or more arrays
console.log(combined); // [ 'thor', 'ironman', 'spiderman', 'batman', 'superman
console.log(marvel); // [ 'thor', 'ironman', 'spiderman' ]
// marvel.push(dc);
// console.log(marvel); // [ 'thor', 'ironman', 'spiderman', [ 'batman', 'superman', 'wonderwoman' ] ]

//spread operator
const combined2 = [...marvel, ...dc];//can add more arrays in between
console.log(combined2); // [ 'thor', 'ironman', 'spiderman', 'batman', 'superman
console.clear();

//reverse
marvel.reverse();
console.log(marvel); // [ 'spiderman', 'ironman', 'thor' ]
console.clear();

//flat(depth) - returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(arr3.flat(2)); // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr3.flat(Infinity)); // [ 1, 2, 3, 4, 5, 6 ] //preferable
console.clear();

console.log(Array.isArray(arr3)); // true
console.log(Array.isArray('hello')); // false

console.log(Array.from("mini")); // [ 'm', 'i', 'n', 'i' ]
console.log(Array.from({name: 'mini'})); // [] ->not defined which property to take
//asked in interview
console.log(Array.from({name: 'mini', length: 3})); // [ undefined, undefined, undefined ]
console.clear();

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]