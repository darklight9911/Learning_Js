function sayMyName(name) {
  console.log("hi " + name);
}
sayMyName('mini'); //mini

function addTwonumbers(num1, num2) {
  console.log(num1 + num2);
}
addTwonumbers(2, 3); //5
addTwonumbers(5, "5"); //55
addTwonumbers(5, "mini"); //5mini
addTwonumbers(3, null); //3
addTwonumbers(3, undefined); //NaN
addTwonumbers(3, true); //4
addTwonumbers(3, false); //3
addTwonumbers(3, {}); //3[object Object]
addTwonumbers(3, []); //3
addTwonumbers(3, [2]); //32
addTwonumbers(3, [2, 3]); //32,3


const result = addTwonumbers(3, 4);
console.log(result); //undefined=>because addTwonumbers function is not returning anything


function addTwonumbers(num1, num2) {
    // let result = (num1 + num2);
    // return result;
    return num1+num2;
}
const result1 = addTwonumbers(3, 4); //7
console.log(result1); //7

function loginUsermsg(usrname){
    if(usrname === undefined){//if(!usrname)
        console.log("Please provide username");
        return;
    }
    return `Hi ${usrname}, welcome to our website`;
}
console.log(loginUsermsg("mini"));//Hi mini, welcome to our website

//console.log(loginUsermsg());//Hi undefined, welcome to our website
console.log(loginUsermsg());//Please provide username
console.log(loginUsermsg("")); //Hi , welcome to our website


//default parameters
function loginUsermsg(usrname = "mini"){
    return `Hi ${usrname}, welcome to our website`;
}
console.log(loginUsermsg());//Hi mini, welcome to our website
console.clear();

//passing multiple arguments
function calculateCartprice(...num1){//rest operator
    return num1;
}
console.log(calculateCartprice(2,3,4,5));//[ 2, 3, 4, 5 ]

function calculateCartprice(num,...num1){//rest operator
    return num1;//not first one
}
console.log(calculateCartprice(2,3,4,5));//[ 3, 4, 5 ]

//handling objects
const user = {
    usrname:"mini",
    price: 199
}
function handleObject(anyobject){

    console.log(`Username is ${anyobject.usrname} and price is ${anyobject.price}`);    

}
handleObject(user);//Username is mini and price is 199
//alternative
handleObject({usrname:"mini2", price:299});//Username is mini2 and price is 299
console.clear();

const myarray = [1,2,3,4,5,6,7,8,9,10];
function sumArray(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray(myarray));//55     
console.clear();

const myarr = [100,200,300,400,500];
function return2ndValue(getarray){
    return getarray[1];
}
console.log(return2ndValue(myarr));//200
//alternative
console.log(return2ndValue([100,200,300,400,500]));//200
console.clear();    

