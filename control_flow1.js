// if
// operator <, >, <=, >=, ==, !=, ===, !==

const isUserloggedIn = true
if (2 == "2"){
    console.log("executed");
    
}

const temperature = 41
if (temperature ===41){
    console.log("less than 50");
}
else{
console.log("temperature is greater than 50");
}

const score = 200
if (score > 100){const power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`user power: ${power}`);

const balance = 1000
if (balance < 500) {
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}
else if(balance < 900){
    console.log("less than 900");
}
else {
    console.log("less than 1200");
    
}

const userLoggedIn = true
const debitCard = true
const loggedInFormGoogle = false
const loggedFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFormGoogle || loggedFromEmail) {
    console.log("User logged in");
}