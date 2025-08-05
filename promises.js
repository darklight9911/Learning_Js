const promiseOne = new Promise(function(resolve, reject) {
    //do something asynchronous
    // DB calls ,cryptography, etc.
    setTimeout(function(){
        console.log('Promise One ');
        resolve();
    }, 1000);
});
promiseOne.then(function() {
    console.log('Promise One Resolved');
});
//using arrow function and chaining
new Promise((resolve, reject)=> {
    setTimeout(()=> {
        console.log('Promise Two');
        resolve();
    }, 2000);
})
.then(()=> {
    console.log('Promise Two Resolved');
});
//passing data to next then
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise Three');
        resolve({user:'dark',pass:'1234'});//can pass array or object
    }, 3000);
}).then((data) => {
    console.log(data);
});

//chaining promises with error handling
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise Four');
        let error = false; //simulate an error
        if(!error){
            resolve(['apple', 'banana', 'orange']);
        } else {
            reject('Promise Four Rejected');  //cathing error is important for debugging  
        }
    }, 4000);
})
.then((data) => {
    console.log("first then:",data);//(3) ['apple', 'banana', 'orange']
    return data[1]; //returning data to next then
})
.then((data) => {
    console.log("second then:",data);//banana
})
.catch((error) => {
    console.error(error); //catching error in console only reject msg will be shown in terminal
});
//using finally
promiseFour.finally(() => {
    console.log('Finally promise Four Resolved/Rejected'); //this will always execute
});


//using async/await with promises
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise Five');
        let error = false;
        if(error){
            reject('Promise Five Rejected');
        }
        //resolving with data   
        resolve({user:'light',pass:'1234'});
    }, 5000);
}).then((data) => {
    console.log(data.user); //light
    return data.pass; //returning data to next then
})
.then((data) => {
    console.log(data); //1234
    return data; //returning data to async function as a value of response
})

async function asyncFunction() {
    //using async/await to handle promises
    console.log('Async Function Started');//executes first at terminal because of async/await
    try {
        const response = await promiseFive;//awaiting promiseFive to resolve
        //response will be the resolved value of promiseFive
        console.log('Response from Promise Five:', response);//response = 1234, will be undefined if promiseFive is rejected or no data returned/resolved
    } catch (error) {
        console.error('Async Function Error:', error);//error = rejection message
    } finally {
        console.log('Async Function Finally Block');
    }
}
asyncFunction(); //calling async function to see the result


//using Promise.all to run multiple promises in parallel
const promiseSix = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise Six');
        resolve('Data from Promise Six');
    }, 6000);
});

const promiseSeven = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise Seven');
        resolve('Data from Promise Seven');
    }, 7000);
});

Promise.all([promiseSix, promiseSeven])
.then((results) => {
    console.log('All Promises Resolved:', results);// array of all resolved values
})
.catch((error) => {
    console.error('Error in Promise.all:', error);
});

//fetching data from API using async/await
async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');//fetching data from API,tooks 2 seconds so using async/await
        const data = await response.json();//fetching data from API,tooks 2 seconds so using async/await
        console.log('All Users:', data); //dummy data from API
    } catch (error) {
        console.error('Error fetching users:', error);
    }  
    finally {
        console.log('Fetch Users Function Finally Block');
    } 
}
getAllUsers(); //will execute earlier than other promises because of async/await
//also there is no settimeout in this function so it will execute immediately after calling the function

//fetching data from API using then/catch/finally

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {return response.json()})
.then((data) => {console.log('All Users:', data);})
.catch((error) => {console.error('Error fetching users:', error);})
.finally(() => {console.log('Fetch Users Finally Block');});

//global method: fetch() --> microtask queue / priority queue -->call stack , event loop --> microtask queue > macrotask queue
//microtask queue is for promises and macrotask queue is for setTimeout, setInterval, etc.
//so promises will execute before setTimeout, setInterval, etc. in the event loop

//so if you want to execute something after all promises are resolved then use Promise.all or async/await
//if you want to execute something after all macrotasks are resolved then use setTimeout or setInterval
//if you want to execute something after all microtasks are resolved then use Promise.resolve().then() or async/await
//if you want to execute something after all macrotasks and microtasks are resolved then use setTimeout(() => {}, 0) or setInterval(() => {}, 0)

//fetch : data(empty) , onfulfilled: data = networks request(response / error), onrejected: data = error
//then : onfulfilled: data, onrejected: error
//catch : onrejected: error
