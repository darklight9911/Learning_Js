const accountId = 144553 //cant be changed
let accountEmail = "mini@gmail.com"//understands scope,prefer to use it
var accountPassword = "12345"//dont understand scope,changes if declared inside a scope
accountCity = "dhaka"//possible but not recommended
let accountState //undefined
console.log(accountId)
console.table([accountEmail,accountPassword,accountCity,accountState])