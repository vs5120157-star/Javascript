// stack (primitive) and heap (reference or non-primitive) memory

let myYouTubeVideo = "Learn JavaScript"
let anothername = myYouTubeVideo
anothername = "Learn Python"
console.log(myYouTubeVideo)
console.log(anothername)

let userOne ={
    email: "userone@example.com",
    upi: "userone@upi"
}

let userTwo = userOne
userTwo.email = "Vikas@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)
