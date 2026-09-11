// num and math.js

const score= 300
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));  // point ke baad two no

const otherNumaber = 23.8966
console.log(otherNumaber.toPrecision(4));

const hundred =1000000
console.log(hundred.toLocaleString('en-IN'));


//+++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));  // mianly more use
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(4, 3, 6, 7));
console.log(Math.max(4, 3, 6, 7));

console.log(Math.random())
console.log(Math.random()*10 + 1);
console.log((Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.random() * (max - min + 1));
console.log(Math.floor(Math.random() * (max - min + 1)) + min);