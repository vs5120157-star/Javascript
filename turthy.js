const userEmail = "Vikas.ai"

if (userEmail) {
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}

// falsy value
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// truthy value
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.leys("Array is empty");
    }

const empobj = {}

if (Object.keys(empobj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");


