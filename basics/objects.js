//singleton object -> object with only one instance
//singleton object is an object that is used to create a namespace for the methods and properties
//created by constructor function
//object.crteate() -> non-primitive data type
//Object.create(proto, [propertiesObject])
//proto - object to use as a prototype
//propertiesObject - optional object whose enumerable own properties

//literal object -> object created using object literal syntax

const mySymbol = Symbol('mykey');

const Jsuser = {
    name:"mini",
    'fullname': "mini jain",
    age: 20,
    isActive: true,
    [mySymbol]: "secret",//symbol deceives the object
    //method
    login: function(){
        console.log("mini has logged in");
    },
    //method
    logout: function(){
        console.log("mini has logged out");
    },
    //isloggedin: false
    lastLoginDays: ["mon", "tue", "wed"]   
}

console.log(Jsuser);/*{
    name: 'mini',
    fullname: 'mini jain',
    age: 20,
    isActive: true,
    login: [Function: login],
    logout: [Function: logout],
    lastLoginDays: [ 'mon', 'tue', 'wed' ],
    [Symbol(mykey)]: 'secret'//important
  }*/
console.log(Jsuser.name);//mini
console.log(Jsuser["age"]);//20
console.log(Jsuser["fullname"]);//mini jain
Jsuser.login();//mini has logged in
Jsuser.logout();//mini has logged out
Jsuser.lastLoginDays.push("thu");
console.log(Jsuser.lastLoginDays);//[ 'mon', 'tue', 'wed', 'thu' ]

console.log(Jsuser[mySymbol]);//secret
console.log(Jsuser.mySymbol);//undefined



Jsuser.greetings = function(){
    console.log("hello");
}
console.log(Jsuser.greetings());//hello

Jsuser.greetings2 = function(){
    console.log(`Hi ${this.name}`);//this keyword refers to the object
}
console.log(Jsuser.greetings2());//Hi mini 


Object.freeze(Jsuser);//freeze() - prevents the object from being modified

Jsuser.name = "mini jain";
console.log(Jsuser.name);//mini

console.clear();

//singleton object

const tinderUSER = new Object()//singleton object
//const tinderUSER = {}//literal object

tinderUSER.Id = "mini123";
tinderUSER.name = "mini";
tinderUSER.age = 20;
tinderUSER.isActive = true; 
tinderUSER.login = function(){
    console.log("mini has logged in");
}
tinderUSER.logout = function(){
    console.log("mini has logged out");
}
tinderUSER.lastLoginDays = ["mon", "tue", "wed"];

console.log(tinderUSER);//{ Id: 'mini123', name: 'mini', age: 20, isActive: true, login: [Function], logout: [Function], lastLoginDays: [ 'mon', 'tue', 'wed' ] }

const regularUSER = {
    email: "mini@gmail.com",
    fullname: {
        userfullname: {
            firstName: "mini",
            lastName: "jain"
        }
    }
}
console.log(regularUSER.fullname);//{ userfullname: { firstName: 'mini', lastName: 'jain' } }
console.log(regularUSER.fullname.userfullname.firstName);//mini
console.log(regularUSER.fullname.userfullname.lastName);//jain

const obj1 = {1:"a", 2:"b", 3:"c"};
const obj2 = {4:"d", 5:"e", 6:"f"};
const obj3 = {obj1,obj2};
console.log(obj3);//{ obj1: { '1': 'a', '2': 'b', '3': 'c' }, '4': 'd', '5': 'e', '6': 'f' }
const obj4 = {...obj1, ...obj2};//spread operator(preferred)
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }  -> spread operator

const obj5 = Object.assign({}, obj1, obj2);//optional object->assign(target,source)
console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj6 = Object.assign({}, obj1, obj2, {7:"g", 8:"h"});
console.log(obj6);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f', '7': 'g', '8': 'h' }
console.clear();

const user = [ //array of objects
    {
        id: '1',
        email:"mini@gmail.com"
    },
    {
        id: '2',
        email:"mini2@gmail.com"
    },
    {
        id: '3',
        email:"mini3@gmail.com"
    },
    {
        id: '4',
        email:"mini4@gmail.com"
    }
]

console.log(user[1].email);//mini2@gmail.com
console.log(user[2].id);//3

console.log(Object.keys(Jsuser));/*[
    'name',
    'fullname',
    'age',
    'isActive',
    'login',
    'logout',
    'lastLoginDays',
    'greetings',
    'greetings2'
  ]*/
console.log(Object.values(Jsuser));/*[
    'mini',
    'mini jain',
    20,
    true,
    [Function: login],
    [Function: logout],
    [ 'mon', 'tue', 'wed', 'thu' ],
    [Function (anonymous)],
    [Function (anonymous)]
  ]*/
console.log(Object.entries(Jsuser));/*[
    [ 'name', 'mini' ],
    [ 'fullname', 'mini jain' ],
    [ 'age', 20 ],
    [ 'isActive', true ],
    [ 'login', [Function: login] ],
    [ 'logout', [Function: logout] ],
    [ 'lastLoginDays', [ 'mon', 'tue', 'wed', 'thu' ] ],
    [ 'greetings', [Function (anonymous)] ],
    [ 'greetings2', [Function (anonymous)] ]
  ]*/
console.clear();


console.log(Jsuser.hasOwnProperty('name'));//true
console.log(Jsuser.hasOwnProperty('email'));//false

//destructuring
const {name, age} = Jsuser;
console.log(name);//mini
console.log(age);//20

const course = {
    title: "javascript",
    price: 1000,
    instructor: "mini",
}
const {instructor : inst} = course
console.log(inst);//mini

const {title, price} = course;
console.log(title);//javascript
console.log(price);//1000
console.clear();
//in react
// const navbar = ({company}) => {//destructuring in function
//     console.log(company);//abc
//     console.log("navbar");//navbar


// }
// navbar(company = "abc")

