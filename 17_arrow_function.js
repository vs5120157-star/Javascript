const user = {
    username: "Vikas",
    price: 99,

    WelcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
        
    }

}
user.WelcomeMessage ()
user.username = "Sam"
user.WelcomeMessage()
// console.log(this);  output:    {}

function chai()  {
    let username = "Vikas Kumar"
    console.log(this.username);

}
chai()

const tea = () => {
    let username = "Vikas"
    console.log(this);
}
tea()

const addtwo = (num1, num2) => {
    return num1 + num2
}
console.log(addtwo(3, 4));

const addtwo1 = (num1, num2) => num1 + num2
const addtwo2 =(num1, num2) => (num1 + num2)
const obj = (num1, num2) => ({username: "Vikas Kumar"})

console.log(addtwo1(3, 5));
console.log(addtwo2(3, 6));
console.log(obj(3, 5));

// const myArray = [2, 3, 4, 5, 6]

// myArray.forEach()