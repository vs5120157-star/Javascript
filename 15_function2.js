function calculateCartPrice(...num1){
    return num1
}
function calculateCartPrice1(num2){
    return num2
}

console.log(calculateCartPrice(200, 400, 500));
console.log(calculateCartPrice1(100, 400, 600))

const user = {
    username: "Vikas Kumar",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 300, 400, 500]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]));