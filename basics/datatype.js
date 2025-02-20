"use strict"//treat all js code as newer version

//alert("Stop!")//dont use here bcz its not browser
//alert(3 + 3)//not right

let name = "mini"
let age = 21
let ifExists = false

// number -> 2^53
// bigint also is here
// null = standalone value(empty) or undefined = not assigned
// symbol = unique
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id == anotherid)// false
console.log(id)// Symbol(123)
console.log(anotherid)// Symbol(123)

// bigint
const bignum = 847457681438205474n

// object 

console.log(typeof null)//null is an object
console.log(undefined)


//   *conversion*

// to number
let score = "99"
console.log(typeof score)
let numScore = Number(score)
console.log(typeof numScore)
console.log(numScore)//99

let sScore = "99zxkdhjm"
let numsScore = Number(sScore)
console.log(typeof numsScore)
console.log(numsScore)// NaN -> not a number

let number = Number(null)
console.log(typeof number)
console.log(number)//0

let value = undefined
let number1 = Number(value)
console.log(typeof number1)
console.log(number1)//NaN


let number2 = Number(true)
console.log(typeof number2)
console.log(number2)//1

let number3 = Number(false)
console.log(typeof number3)
console.log(number3)//0

console.clear()

// to boolean

let isLoggedin = 1
let bool = Boolean(isLoggedin)
console.log(bool)// true

let bool1 = Boolean("")
console.log(bool1)//false

let bool2 = Boolean("mini")
console.log(bool2)//true

console.clear()

// to string

let string = String(33)
console.log(typeof string)//33
console.clear()
