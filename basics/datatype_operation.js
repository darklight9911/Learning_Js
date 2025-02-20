let value = 3
let negvalue = -value
console.log(negvalue)//-3
console.clear()

let str1 = "hi"
let str2 = 'mini'
let str = str1 + " " + str2
console.log(str)// hi mini
console.log(str + 2 + 1)// hi mini21
console.log(2 + 1 + " " + str)// 3 hi mini
console.clear()

console.log(+" ")// dont
console.clear()

let num1, num2, num3 
num1 = num2 = num3 = 2 + 2// not recommanded
console.log(num3)
console.log(num1++)// 4
console.log(++num1)//6 -> n++ = 5 then ++n = 6
num2++
console.log(num2)//5
console.clear()


// *comparison*
// datatype should be similar


//avoid these
console.log(2 != 1) // true
console.log( null > 0)// false
console.log( null == 0)//false
console.log( null >= 0)// true -> first conversion then comparison
//avoid these
console.log( undefined > 0)// false
console.log( undefined == 0)//false
console.log( undefined >= 0)// false
//avoid these
console.log("2" === 2)// false
console.log("2" == 2)// true
console.clear()

// ***summery***
// primitive (call by value) -> string, number, boolen, null, undefined, symbol, bigint
// non-premitive/ reference type -> array, objects, funtions [direct allocation]

//stack (premitive)
// heap (non-premitive) 

//array-> 
const alpha = ["a", "b", "c", "abc"]
//object ->
let myObj = { name : "mini", age : 21 }
// function() ->
const myFunc = function(){ 
    console.log("hello")
    //return 1-> hello \n 1
}
console.log(myFunc)//[Function: myFunc]
console.log(myFunc())//hello \n undefined[return type not defined]
