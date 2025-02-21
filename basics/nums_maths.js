const score = 400
console.log(score)
//console.log(typeof score)
const balance = new Number(100)
console.log(balance)//[Number: 100]
console.log(balance.toString().length)
console.log(balance.valueOf())
console.log(balance.toFixed(2))
console.log(balance.toPrecision(3))//range(1-21),rest value will be in exponential form
console.log(balance.toExponential(3))
//for cp
console.log(Number.MAX_VALUE)//max value of number in js
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY)//infinity
console.log(Number.NEGATIVE_INFINITY)//-infinity
console.log(Number.NaN)//NaN
console.log(Number.EPSILON)//smallest difference between two representable numbers
console.log(Number.MAX_SAFE_INTEGER)//max safe integer
console.log(Number.MIN_SAFE_INTEGER)//min safe integer
console.log(Number.isFinite(Infinity))//false


const hundred = 1000000
console.log(hundred.toLocaleString())//comma separated value in US format
console.log(hundred.toLocaleString('en-IN'))//comma separated value in English format

console.clear()

//Math Object
console.log(Math) //Object [Math] {}

console.log(Math.PI) //3.141592653589793
console.log(Math.E) //2.718281828459045
console.log(Math.abs(-100)) //100
console.log(Math.round(1.9)) //2
console.log(Math.ceil(1.1)) //top value 2
console.log(Math.floor(1.9)) //bottom value 1
console.log(Math.pow(2, 3)) //8
console.log(Math.sqrt(9)) //3
console.log(Math.cbrt(8)) //2
console.log(Math.min(1, 2, 3, 4, 5)) //1
console.log(Math.max(1, 2, 3, 4, 5)) //5
console.clear()

console.log(Math.random()) //random value between 0 and 1
console.log(Math.random() * 10)//random value between 0 and 9.999999999999999
console.log(Math.floor(Math.random() * 10)) //random value between 0 and 9
console.log(Math.floor(Math.random() * 10) + 1) //random value between 1 and 10
console.clear()

//formula to get random value between min and max; range = max - min + 1
//Math.floor(Math.random() * (max - min + 1)) + min
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) //random value between 10 and 20