const accountId = 24132
let accountEmail = "vikas@example.com"
var accountPassword = "12345"
accountCity = "New York"
let accountState;

// accountId = 2 not allowed because it is a constant variable

accountEmail = "vikas.updated@example.com"
accountPassword = "123456"
accountCity = "Los Angeles"

console.log(accountId)

/*
prefer not use var
because it is function scoped and can be redeclared and updated.
*/

console.log([accountId, accountEmail, accountPassword, accountCity, accountState]);
// run karne ki command
// C:\javascript>node 01_basics/01_variable.js

// lecture 4 commplete and lecture 9 is in progress