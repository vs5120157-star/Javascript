// Singleton

//Object literals

const mySym = Symbol("key1")
const jsuser = {
    name: "Vikas Kumar",
    "full name": "Vikas",
    [mySym]: "mykey1",
    age: 21,
    email: "vikas@example.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Saturday"]
    }

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser.mySym);
console.log(typeof jsuser.mySym);
console.log(jsuser[mySym]);

jsuser.email = "vikasku@example.com"
// Object.freeze(jsuser)
jsuser.email = "vikas@gpt.com"
console.log(jsuser);

jsuser.greeting = function(){
    console.log("Hello Js user");
}

jsuser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greeting);
console.log(jsuser.greeting2());