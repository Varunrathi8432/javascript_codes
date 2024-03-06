const name="Varun"
const lastname="Rathi"
const age=21
// console.log(name + lastname + " years " + age) // this method is old to console

console.log(`My name is ${name} ${lastname} and my age is ${age}`) // this method is new to console

const newname=new String('Varun-Rathi')

// console.log(newname.toLowerCase())
// console.log(newname[0])

// console.log(newname.__proto__)
// console.log(newname.length)

// console.log(newname.charAt(5))
// console.log(newname.indexOf('R'))

const newstring=newname.substring(0,4)
console.log(newstring)

const anotherstring=newname.slice(-6,11)
console.log(newname)
console.log(anotherstring)

const string="    Varun   "
console.log(string.trim())

const url="https://varun.com/varun%20rathi"
console.log(url.replace("%20","-"))

console.log(url.includes("varun"))
console.log(url.split("/"))
