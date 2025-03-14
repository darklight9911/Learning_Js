//immediately invoked function expression
//IIFE
(function(){
    console.log('IIFE syntex');
})();//semicolon must be there

//IIFE is a function that is executed immediately after it is created
//IIFE is a design pattern that is used to avoid polluting the global scope
//IIFE is used to create a private scope
//IIFE is used to create a closure,module pattern,private vaialbles

//IIFE with name = named iife
(function chai(){
    console.log('IIFE with name');
})();
//IIFE with arrow function
( () => {
    console.log('IIFE with arrow function');
}
)();
//IIFE with parameters
( (a,b) => {
    console.log('IIFE with parameters',a+b);
}
)(10,20);
//IIFE with return value
let sum = ( (a,b) => {
    return a+b;
}
)(10,20);

console.log('IIFE with return value',sum);

//if we have only one line of code then we can remove curly braces and return keyword   