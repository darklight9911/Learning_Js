// Dates
 let myDate = new Date();
 console.log(myDate); // current date 7 time : 2025-02-24T17:17:06.754Z
 console.log(typeof myDate); // object

 console.log(myDate.toString());// Wed Feb 24 2025 17:17:06 GMT+0000 (Coordinated Universal Time)
 console.log(myDate.toDateString());// Wed Feb 24 2025
 console.log(myDate.toTimeString());// 17:17:06 GMT+0000 (Coordinated Universal Time)
 console.log(myDate.toLocaleString());// 2/24/2025, 10:17:06 PM
 console.log(myDate.toLocaleDateString());// 2/24/2025
 console.log(myDate.toLocaleTimeString());//    10:17:06 PM

 console.log(myDate.getFullYear());// 2025
 console.log(myDate.getMonth()+1);// 1 [ months start from 0]
 console.log(myDate.getDate());// 24
 console.log(myDate.getDay());// 2
 console.log(myDate.getHours());// 22
 console.log(myDate.getMinutes());// 17
 console.log(myDate.getSeconds());// 6
 console.log(myDate.getMilliseconds());// 754

 console.log(myDate.getTime());// 1770002226754(miliseconds)
 console.log(myDate.getTimezoneOffset());// -60

//  console.log(myDate.setFullYear(2022));
//  console.log(myDate.setMonth(11));
//  console.log(myDate.setDate(25));
//  console.log(myDate.setHours(12));
//  console.log(myDate.setMinutes(30));
//  console.log(myDate.setSeconds(45));
//  console.log(myDate.setMilliseconds(500));
 


 //let myeDate = new Date(2024, 1, 24); //months start from 0 : 1 = February, 2/24/2024, 12:00:00 AM
 //let myeDate = new Date("2024-1-24"); // 1/24/2024, 12:00:00 AM
//  let myeDate = new Date("2024/1/24"); // 1/24/2024, 12:00:00 AM
 let myeDate = new Date(2024, 1, 24, 12,10,20);//2/24/2024, 12:10:20 PM
 console.log(myeDate.toLocaleString()); // 2/24/2024, 12:00:00 AM

 

 let myTimetamp = Date.now();// miliseconds
console.log(myTimetamp); // 1645736826754
console.log(myeDate.getTime()); // 1695755020000
console.log(new Date(myTimetamp).toLocaleString()); // 2/24/2022, 5:20:26 PM
let toseconds = Math.floor(myTimetamp / 1000);
console.log(toseconds); // 1645736826

console.clear();

let newdate = new Date();
newdate.toLocaleDateString('default', {weekday: 'long'}); // Wednesday
newdate.toLocaleDateString('default', {month: 'long'}); // February
newdate.toLocaleDateString('default', {day: 'numeric'}); // 24
newdate.toLocaleDateString('default', {year: 'numeric'}); // 2025
newdate.toLocaleDateString('default', {hour: 'numeric'}); // 10
newdate.toLocaleDateString('default', {minute: 'numeric'}); // 17
newdate.toLocaleDateString('default', {second: 'numeric'}); // 6
newdate.toLocaleDateString('default', {timeZoneName: 'short'}); // GMT+0 
newdate.toLocaleDateString('default', {timeZoneName: 'long'}); // Coordinated Universal Time

