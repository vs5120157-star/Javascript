// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
console.log(element);
}


// table for 1 to 10

for (let j = 1; j <= 10; j++){
    console.log(`Outer loop value: ${j}`);
    for(let k = 1; k <= 10; k++){
        // console.log(`Inner loop value ${k} and inner loop ${j}`);
        console.log(j + '*' + k + '=' +j*k);
    }
}

let myArray = ["Ironman", "Hulk", "Thor"]
console.log(myArray.length);
for(let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// Key Word
// break and continue

for (let index1 = 1; index1 <= 20; index1++) {
    if (index1 == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of index is ${index1}`);
}

for (let index2 = 1; index2 <= 20; index2++) {
    if (index2 == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of index is ${index2}`);
}
