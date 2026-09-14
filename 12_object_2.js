const tinderUser =new Object()
const tinderUser1 = {}

console.log(tinderUser1);

tinderUser.id = "123abc"
tinderUser.name = "Vikas Kumar"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "vikas@example.com" ,
    fullname: {
        userfullname: {
            firstname: "Vikas",
            lastname: "Kumar"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}
const obj4 = Object.assign({}, obj1, obj2, obj3)
console.log(obj2);
console.log(obj4);

// use formate

const obj5 = {...obj1, ...obj2}
console.log(obj5);

const user = [
    {
    id:1,
    email: "vikas2example.com"
    },

    {
    id:1,
    email: "vikas2example.com"
    },

    {
    id:1,
    email: "vikas2example.com"
    }
]
user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));