function sayname(){
    console.log("V");
    console.log("i");
    console.log("k");
    console.log("a");
    console.log("s");
}
sayname()
// sayname refrence

// function addtwonumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addtwonumbers(3, 4)
// addtwonumbers(3, "4")
// addtwonumbers(3, "a")
// addtwonumbers(3, null)
// const result = addtwonumbers(3, 4)
// console.log("Result:", result);
function addtwonumbers(number1, number2){
    // let result = number1 + number2

    // consoel.log("Vikas"); ye print hoga

    // return result

    // console.log("Vikas"); ye print nahi hoga
    return number1 + number2
}
const result = addtwonumbers(3, 5)
console.log("Results:", result);

function loginusermessage(username ="sam"){

    if(username === undefined){
        console.log("Please enter a username");
        return
    }


    return `${username} just logged in`
}

console.log(loginusermessage("Vikas"));
console.log(loginusermessage());


function loginusermessage1(username = "sam")
{
    if(!username){
        console.log("Please enter a username");
    }

    return `${username} just logged in`
}

console.log(loginusermessage1("Vikas"));
console.log(loginusermessage1());