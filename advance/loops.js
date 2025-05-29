// //for LOOP

// const array = [1, 2, 3, 4, 5];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);//1,2,3,4,5
// }
// //for in loop is used to iterate over the elements of an array
// const arr = [1, 2, 3, 4, 5];    
// for (const index in arr) {
//     console.log(index, arr[index]); //0 1, 1 2, 2 3, 3 4, 4 5
// }

// //for in loop is used to iterate over the properties of an object
// const obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };
// for (const key in obj) {
//     console.log(key, obj[key]); //name John, age 30, city New York
// }

// //while loop
// let i = 0;
// while (i < 5) {
//     console.log(i); //0,1,2,3,4
//     i++;
// }
// //do while loop
// let j = 0;
// do {
//     console.log(j); //0,1,2,3,4
//     j++;
// }
// while (j < 5);




// //higher order array loops
const numbers = [1, 2, 3, 4, 5];
// //for of loop
// for (const number of numbers) {
//     console.log(number); //1,2,3,4,5
// }
// const greetings = "Hello World";
// for(const char of greetings) {
//     console.log(char); //H,e,l,l,o, ,W,o,r,l,d
// }
// //forEach loop
// numbers.forEach((number, index) => {
//     console.log(index, number); //0 1, 1 2, 2 3, 3 4, 4 5
// });


//map loop ***
const map =  new Map()
map.set('name', 'John');//key, value
map.set('age', 30);
console.log(map); //Map(2) { 'name' => 'John', 'age' => 30 }
//for of loop
for (const [key, value] of map) {
    console.log(key, value); //name John, age 30
}
//forEach loop
map.forEach((value, key) => {
    console.log(key,":", value); //name : John, age : 30
});
//map is not etarable by for in loop

//for in loop
for (const key in map) {
    console.log(key, map[key]); //name John, age 30
}
//filter loop
const filtered = numbers.filter((number) => number > 2);
console.log(filtered); //3,4,5
//here its used to filter the elements of an array based on a condition
//in filter loop we can use index and it will return the index of the element

//map loop
const mapped = numbers.map((number) => number * 2);
console.log(mapped); //2,4,6,8,10
//here its used to map the elements of an array to a new array based on a condition

//reduce loop
const reduced = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(reduced); //15
//here its used to reduce the elements of an array to a single value based on a condition
//accumulator is the value that is returned from the previous iteration
//currentValue is the value of the current iteration
//and 0 is the initial value of the accumulator



//for objects
const myObject = {
    name: 'John',
    age: 30,
    city: 'New York'
};
console.log(Object.entries(myObject)); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]
//Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

//for of loop *
for (const [key, value] of Object.entries(myObject)) {
    console.log(key, value); //name John, age 30, city New York
}

//here entries is used to convert the object into an array of key value pairs

//for in loop
for (const key in myObject) {
    console.log(key, myObject[key]); //name John, age 30, city New York
}

//forEach loop 
Object.entries(myObject).forEach(([key, value]) => {
    console.log(key, value); //name John, age 30, city New York
});

//foreach loop :there are item,index and array list stored in it


// array of objects
const arrayOfObjects = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Jim', age: 35 },
    { name: 'Jack', age: 40 },
    { name: 'Jill', age: 28 }
];
//forEach loop *
arrayOfObjects.forEach((object, index) => {
console.log(index, object.name, object.age); //0 John 30, 1 Jane 25, 2 Jim 35, 3 Jack 40, 4 Jill 28
});
//filter loop
const filteredObjects = arrayOfObjects.filter((object) => object.age > 30 && object.name === 'Jim');
console.log(filteredObjects); // [ { name: 'Jim', age: 35 } ]


const coding = ["js", "python", "java", "c++"];
//forEach loop *
const values = coding.forEach((item) => {
    console.log(item); // js, python, java, c++
    return item;// returns undefined
    //forEach loop does not return anything
});
console.log(values); //undefined

//filter loop 
const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
mynums.filter((num) => {
    console.log(num); //1,2,3,4,5,6,7,8,9,10
    return num > 5;// return should be used inside scope of filter loop
}
).forEach((num) => {
    console.log(num); //6,7,8,9,10
});
//or **
const filteredNumbers = mynums.filter((num) => num > 5);
console.log(filteredNumbers); //6,7,8,9,10
//or 
const newnums = [];
mynums.forEach((num) => {
    if (num > 5) {
        console.log(num); //6,7,8,9,10
        newnums.push(num);
    }
});
console.log(newnums); //6,7,8,9,10

//chaining filter and map
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredAndMapped = numbersArray
    .filter((number) => number > 5)//6,7,8,9,10
    .map((number) => number * 2);//12,14,16,18,20
console.log(filteredAndMapped); //12,14,16,18,20
//here we are filtering the numbers greater than 5 and then mapping them to double their value

//chaining two map  
const mapped2 = numbersArray
    .map((number) => number * 2)//2,4,6,8,10,12,14,16,18,20
    .map((number) => number + 1);//3,5,7,9,11,13,15,17,19,21
console.log(mapped2); //3,5,7,9,11,13,15,17,19,21
//here we are mapping the numbers to double their value and then mapping them to add 1 to their value

//chaining filter and reduce
const numbersToReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reducedValue = numbersToReduce
    .filter((number) => number > 5) //6,7,8,9,10
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0); //40
console.log(reducedValue); //40
//here we are filtering the numbers greater than 5 and then reducing them to a single value by summing them up
//reduce takes two parameters, the first is a callback function that takes two parameters, the accumulator and the current value, and the second is the initial value of the accumulator, which is 0 in this case.

//array.reduce() method**


//The reduce() method executes the callback function once for each element present in the array, excluding holes in the array.
//The first time the callback is called, the accumulator and currentValue can be one of two values.
//If an initialValue is provided in the call to reduce(), then accumulator will be equal to initialValue and currentValue will be equal to the first value in the array.
//If no initialValue is provided, then accumulator will be equal to the first value in the array and currentValue will be equal to the second.
//The return value of the callback function is assigned to accumulator, and is used in the next call to the callback function.
//The reduce() method does not execute the callback function for empty elements in the array.
//The reduce() method returns a single value: the function's accumulated result.
//The reduce() method can be used to perform a wide variety of operations on arrays, such as summing up values, flattening arrays, or transforming data structures.
//Example of reduce
const numbersToSum = [1, 2, 3, 4, 5];
// array.reduce( (acc,currval) => acc + currval, initialValue);
const sum = numbersToSum.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
}, 0);
console.log(`Sum: ${sum}`); //Sum: 15
// or
const sum2 = numbersToSum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`Sum2: ${sum2}`); //Sum2: 15
 
// for ARRAY OF objects
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay); //Sum: 24996
// or
const priceToPay2 = shoppingCart.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue.price}`);
    return accumulator + currentValue.price;
}, 0);  
console.log(`Price to Pay: ${priceToPay2}`); //Price to Pay: 24996

