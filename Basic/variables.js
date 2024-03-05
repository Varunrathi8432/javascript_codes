const accountId = 4554345
let accountEmail = "varunrathi8432@gmail.com"
var accountPassword = "1234321"
/*
var is not good for use because of block scope and function scope
so use let
*/

accountcity = "Jodhpur"

// accountId = 12342678; // Not valid to change const variable

console.log(accountId);

accountPassword="0987890"

console.table([accountId,accountEmail,accountPassword,accountcity])