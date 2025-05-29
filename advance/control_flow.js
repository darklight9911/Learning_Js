//logic control flow

//if else

//=== is strict equality operator(checks type and value)
//== is loose equality operator(checks only value)

//!== is strict not equal operator (checks type and value)
//!= is loose not equal operator(checks only value)

//short hand if else

//condition?true:false
//if condition is true then true block will execute otherwise false block will execute

//example
if(10>5) console.log('10 is greater than 5');//donT use comma seperated multiple console logs
else console.log('5 is greater than 10');
//10 is greater than 5

//switch
switch (expression) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code block
}
//example
const month = 3;
switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('Invalid month');
}
//if we dont use brak statement then all the cases will be executed except the default case

//truthy and falsy values
//falsy values
//0,-0,0n -> Bigint, "",undefined,null,NaN
//all other values are truthy:" ",[],{},function(){}

const emptyObj = {};
if(Object.keys(emptyObj).length === 0) {
    console.log('Object is empty');
}

//nullish coalescing operator
//?? is nullish coalescing operator
//it returns the right side value if the left side value is null or undefined
//otherwise it returns the left side value
//example
const a = null;
const b = 10;
const c = a ?? b;
//console.log(c); //10
//example 

const d = undefined;
const e = 10;
const f = d ?? e ?? 20;
//console.log(f); //10
//it returns 10 because a is undefined and b is 10
//example

const ag = 0;
const bh = 10;
const ci = ag ?? bh; 
//console.log(ci); //0
//it will return 0 because 0 is not null or undefined
//example   

const aj = 0;
const bk = 10;
const cl = aj || bk;
//console.log(cl); //10 because 0 is falsy value 
//example  

const am = 0;
const bn = 10;
const co = am && bn;
//console.log(co); //0 
//example

const ap = 10;
const bq = 20;   
const cr = ap && bq && 30;
//console.log(cr); //30
//it will return the last truthy value
//if all are falsy then it will return the *first falsy* value
//if all are truthy then it will return the *last truthy* value

//example

const as = 10;
const bt = 20;
const cu = as || bt || 30;
//console.log(cu); //10
//it will return the first truthy value
//if all are falsy then it will return the last falsy value
//if all are truthy then it will return the first truthy value


//ternary operator
//condition?true:false

