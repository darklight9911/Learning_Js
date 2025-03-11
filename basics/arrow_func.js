//arrow function
const addthree = num => num+3;//implicit return
addthree(2);//5

const addfour = (num1, num2) => num1+num2; //implicit return
addfour(2, 3);//5

const addfive = (num1, num2) => {
    return num1+num2;//explicit return
}
addfive(2, 3);//5
console.clear();

//this keyword

//this refers to the object that is executing the current function
//if we use this keyword inside a function then it will refer to the global object
//if we use this keyword inside a method then it will refer to the object that is executing the current method
const user = {
    usrname: "mini",
    age: 20,
    welcome: function(){
        console.log(`Hi ${this.usrname}, welcome to our website`);
        console.log(this);//{ usrname: 'mini', age: 20, welcome: [Function: welcome] }  
    }
}
user.welcome();//Hi mini, welcome to our website { usrname: 'mini', age: 20, welcome: [Function: welcome] } 
user.usrname = "mini jain";
user.welcome();//Hi mini jain, welcome to our website { usrname: 'mini jain', age: 20, welcome: [Function: welcome] } 

console.log(this);//{}
console.clear();

//global object in browser is window object

function chai(){
    console.log(this);
}
chai();
/*  <ref *1> Object [global] {
    global: [Circular *1],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    structuredClone: [Function: structuredClone],
    atob: [Function: atob],
    btoa: [Function: btoa],
    performance: [Getter/Setter],
    fetch: [Function: fetch],
    crypto: [Getter],
    navigator: [Getter]
  }
*/
//this keyword refers to the global object

//arrow function with this keyword

const chaai = () => {
    let a = 10;
    // console.log(this);
    console.log(this.a);
}
// chaai();//{}
chaai();//undefined

const add2 = (num1, num2) => (num1+num2);//implicit return
console.log(add2(2, 3));//5

const add3 = (num1, num2) => ({username: "mini"});//error
console.log(add3(2, 3));//{username: "mini"}

// const arr = [1, 2, 3, 4, 5];
// arr.forEach(function(){});
// arr.forEach(function() => {});
// arr.forEach(() => {});



