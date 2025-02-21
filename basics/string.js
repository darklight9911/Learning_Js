

const name = "mini"// const name = new String('mini')

const repocount = 50

console.log(name + repocount + " hulo") //dont recommended

console.log(`hello my name is ${name} and my repo count is ${repocount}`)

//new String('mini')[ new keyword is not recommended ist just defines the type of data]

console.log(name[0])
console.log(name.charAt(2))
console.log(name.indexOf('i')) // 1
console.log(name.lastIndexOf('i')) // 2

console.log(name.includes('i')) // true
console.log(name.includes('z')) // false
console.log(name.includes('i', 2)) // true

console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.length)

console.log(name.split('i'))//[ 'm', 'n', '' ]

console.log(name.slice(1, 3))// in Or console.log(name.substring(1, 3))// in
//slice(start, end) -> end not included
//substring(start, end) -> end included
// minus value can be use in slice but not in substring
console.log(name.slice(-3, -1))// in
console.log(name.substring(-3, -1))// mi[starts from 0]
console.log(name.substr(1))// ini
console.log(name.substr(1, 3))//ini

console.log(name.replace('i', 'z'))//mzni
console.log(name.repeat(3)) // miniminimini

console.log(name.trim()) // remove white spaces,'\n' of statring and ending
console.log(name.trimStart()) // remove white spaces from start
console.log(name.trimEnd()) // remove white spaces from end

console.log(name.padStart(10, 'a')) // aaaaaamin
console.log(name.padEnd(10, 'a')) // minaaaaaa
console.log(name.concat(' ', 'hello'))
// console.log(name.concat(' ', 'hello').split(' '))
// console.log(name.concat(' ', 'hello').split(' ').join(' '))
// console.log(name.concat(' ', 'hello').split(' ').join(' ').trim())

console.log(name.startsWith('m')) // true
console.log(name.endsWith('i')) // true
console.log(name.search('i')) // 1
console.log(name.match('i')) // i
// console.log(name.match(/i/g)) // [ 'i', 'i' ]
// console.log(name.match(/i/gi)) // [ 'i', 'i' ]
// console.log(name.match(/z/gi)) // null

console.log(name.charCodeAt(1)) // 105
console.log(String.fromCharCode(105)) // i
console.log(name.charCodeAt(0)) // 109
          

const url = "https://www.google.com/search?q=js+string"

console.log(url.replace('https', 'http'))
// console.log(url.replace(/https/g, 'http'))
console.log(url.replace("=", '----'))
//console.log(url.replace(/https/gi, 'http').replace(/js/g, 'javascript'))

console.log(url.includes('https')) // true
console.log(url.includes('http')) // true
console.log(url.includes('sear')) // true
console.log(url.includes('js')) // true
console.log(url.includes('javascript')) // false
