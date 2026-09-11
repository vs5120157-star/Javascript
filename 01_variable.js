const accountid = 24132
let accountemail = "vikas@example.com"
var accountpassword = "12345"
accountcity = "New York"
let accountstate;

// accountid = 2 not allowed because it is a constant variable

accountemail = "vikas.updated@example.com"
accountpassword = "123456"
accountcity = "Los Angeles"

console.log(accountid)

/*
prefer not use var
because it is function scoped and can be redeclared and updated.
*/

console.log([accountid, accountemail, accountpassword, accountcity, accountstate]);
// run karne ki command
// C:\javascript>node 01_basics/01_variable.js