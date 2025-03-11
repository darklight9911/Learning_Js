let a = 10
const b = 20
var c = 30
console.log(a, b, c); //10 20 30

//{}= scope

if(true){
    let a = 40;
    const b = 50;
    var c = 60;//or c = 60
    console.log(a, b, c);//40 50 60
}
//a and b are not changed because they are block scoped
//c is changed because var is function scoped
console.log(a, b, c);//10 20 60

//function scope        
function test(){
    let a = 70;
    const b = 80;
    var c = 90;
    console.log(a, b, c);//70 80 90
}
test();
console.log(a, b, c);//10 20 60


//nasted scope
 function one(){
    const usrname = "mini";
    function two(){
        const usrname = "mini2";
        function three(){
            const usrname = "mini3";
            console.log(usrname);//mini3
        }
        three();
        console.log(usrname);//mini2
    }
    two();
    console.log(usrname);//mini     
 }
  one();//mini3 mini2 mini
//child scope can access parent scope but parent scope cannot access child scope
//if we remove const from inner function then it will access parent scope
//if we remove const from parent function then it will access global scope
console.clear();

//global scope
 if(true){
    const usrname = "mini";
    if(usrname === "mini"){
        const website = "mini.com";
        console.log(usrname + website);//minimini.com
    }
    //console.log(website);//ReferenceError: website is not defined
    console.log(usrname);//mini
 }
 console.clear();


 //interesing example

function addone(num){
    return num+1;
}
addone(2);//3

const addtwo = function(num){//expression=addtwo
    return num+2;
}
addtwo(2);//4




