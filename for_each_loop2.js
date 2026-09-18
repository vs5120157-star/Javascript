// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num >4)
// console.log(newNums);

// const newNums1 = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNums1);

// const newNums2 = []
// myNums.forEach( (num) => {
//     if (num >4) {
//         newNums2.push(num)
//     }
// })
// console.log(newNums2);

//+++++++++++++++++++++++++++++++ Book Example +++++++++++++++++++++++++++++++++++++++++++

const books = [
    { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
    { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
    { title: "Book Three", genre: "Science", publish: 1999, edition: 2007 },
    { title: "Book Four", genre: "History", publish: 1992, edition: 2006 },
    { title: "Book Five", genre: "Science", publish: 1886, edition: 2009 },
];

const Books = books.filter(book => book.genre === "Science");
console.log(Books);

const Books1 = books.filter(book => book.publish >= 2008);
console.log(Books1);
