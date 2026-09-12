// Dates
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

// formate (yyyy, mm, dd)
let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());

// formate (yyyy, mm, dd, time, sec)
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate1.toLocaleString());

// format yyyy-mm-dd
let myCreatedDate2 = new Date("2023-01-13")
console.log(myCreatedDate2.toLocaleString());


// formate mm-dd-yyyy
let myCreatedDate3 = new Date("01-13-2023")
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `4{newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
})