// var c = 300
let a =300
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner: ",a);
    
}

console.log(a);
//console.log(b);
// console.log(c);


function one(){
    const username = "Vikas Kumar"

    function two() {
        const website = "youtube"
        console.log(username);
    }

    // console.log(website); output error

    two ()

}

// one()

if (true){
    const username = "Vikas Kumar"
    if (username === "Vikas Kumar") {
        const website = "youtube"
        console.log(username + " " + website);
    }
    // console.log(website);
}

// console.log(username);

//+++++++++++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));
function addone (num) {
    return num + 1
}
// addone(5)


// console.log(addtwo(5)); output: error
// addtwo(5) output: error
const addtwo = function(num){
    return num + 2
}
addtwo(5)