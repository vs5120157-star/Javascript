// Primitive datatypes
// 7 types: string, number, bigint, boolean, undefined, symbol, null

const score  = 100;
const scoreValue = 100.5
const isLogged = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 345678457688987n


// reference (non primitive) types
// objects, array, functions

const heros =["ironman", "spiderman", "hulk"]
let myObj = {
    name: "tony",
    age: 45,
}

const myFunction = function(){
    console.log("hello world")
}
console.log(typeof bigNumber);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof isLogged);
console.log(typeof userEmail);
console.log(typeof outsideTemp);
console.log(typeof anotherId);
console.log(typeof myObj);