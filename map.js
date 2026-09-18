const myNumers =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumers.map( (num) => {return num + 10})
console.log(newNums);

const newNums1 = myNumers
    .map( (num) => num * 10)
    .map( (num) => num + 1)
    .filter( (num) => num >= 40)
console.log(newNums1);


//+++++++++++++++++++++++++++++++++++++++++++ Reduce +++++++++++++++++++++++++++++++++++++++++++++

const score = [1, 2, 3]

const myscore =score.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval
}, 0)
console.log(myscore);

const myTotal = score.reduce( (acc, curr) => acc + curr, 0)
console.log(myTotal);

//++++++++++++++++++++++++++++++ Shopping Cart +++++++++++++++++++++++++++++++++++++++

const shoppingCart = [
    {
        itemName: "JS course",
        price: 2999
    },
    {
        itemName: "Python course",
        price: 3000
    },
    {
        itemName: "Mobile development course",
        price: 5999
    },
    {
        itemName: "Data science course",
        price: 12999
    }
];

const priceToPay = shoppingCart.reduce(
    (total, item) => total + item.price,
    0
);

console.log(priceToPay); // 24997