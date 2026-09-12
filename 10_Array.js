// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["Ironman", "hulk"]
console.log(myArr[4]);
console.log(myHeors["hulk"]);

// Array method

// Add the array value
myArr.push(6)
console.log(myArr);

// pop last value ko delete kar deta hai
myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(4));

const newArr = myArr.join()
console.log(newArr);
console.log(myArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);