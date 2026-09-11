const name = "Vikas Kumar"
const repoCount = 50

//console.log(name + repoCount + "Value");  not use syntax

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
// good syntax
const gameName =new String('Vikas-kumar')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('k'));
const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,5)
console.log(anotherString);

const newString1 = "Shyam"
console.log(newString1);
console.log(newString1.trim());

const url = "https://vikas.com/vikas%20choudhary"
console.log(url.replace('%20', '_'));
console.log(url.includes('vikas'));
console.log(gameName.split('_'));