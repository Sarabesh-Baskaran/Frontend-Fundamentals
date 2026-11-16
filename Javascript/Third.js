//Type Conversion - Converting one Datatype into another.
let age = "23"; //Here we store 23 as a string.
//If we want to convert it into Number.
let convertAge = Number(age);
console.log(convertAge); //23
console.log(typeof convertAge); //number
//Explicit and Implicit Type Conversion. Type conversion two types.
//Explicit Type Conversion is you have to manually convert it from one type to another.
//Convert a value into a string
let numb = 19;
let convertNumb = String(numb);
console.log(convertNumb); //19
console.log(typeof convertNumb); //string

let value = "hello";
let convertvalue = number(value);
console.log(convertvalue); //NaN
console.log(typeof convertvalue); //number

//Boolean
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean("hello")); //true
console.log(Boolean("")); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false

//Falsy values in javascript
//1)false
//2)0
//3)"" (empty string)
//4)null
//5)undefined
//6)NaN
//7)0n
//8)-0

//The Truthy Values are "0", "false", [], and .

//Implicit Type Conversion it Javascript automatically converts data types when evaluating expressions
let result = "10" + 20;

console.log(result); //1020
console.log(typeof result); //String
//Because when JavaScript uses + with a string, it performs string concatenation in this example.

//It converts 20 into "20" and combines both strings.

let result1 = "10" - 20;
console.log(result1); //-10
//Because, subtraction is a numeric process
console.log(typeof [])