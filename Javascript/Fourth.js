//Operators & Expressions
let a = 10; //Here, a is an operand and + is an operator.
let b = 5;
let result = a + b; //Together, variable, values and operand to make an expression
console.log(result); //15

//1)Arithmetic Operator
/**
 * 1) + - Addition
 * 2) - - Subtraction
 * 3) * - Multiplication
 * 4) / - Division (To get Quotient)
 * 5) % - Modulus (To get Remainder)
 * 6) ** - Exponentiation 2**3 => 8 => 2*2*2
 */

//2)Assignment Operator
let balance = 1000;

balance += 500;
console.log(balance); //1500

balance -= 100;
console.log(balance); //1400  

balance *= 10;
console.log(balance); //14000

//Comparison Operator
//When it is Loose it doesn't care about the type. When it is Strict it only cares about the type.
//1)==  -> Loose Equality
console.log(5=="5"); //True here, Loose Equality does not compare the type.

//2)===  -> Strict Equality
console.log(5==="5"); //False here, Strict Equality compares the datatypes.

//3)!=  -> Loose Inequality
console.log(5!="5");  //False Here, Loose Inequality not compare the type so it is false. because, number 5 is equal to String 5. In here, it says not equal that's why it is false.

//4)!==  ->Strict Inequality
console.log(5!=="5"); //True Here,

//Logical Operator
//1)&& - AND (When both conditions true it returns True.)
//2)|| - OR  (Any one condition will be true among the two conditions then, only it returns true.)
//3)! - NOT  (Reverse a Boolean Value.)

//Real world Example (Login Validation)
let username = "Sarabesh";
let password = "Ajay123";

if(username === "Sarabesh" && password === "Ajay123"){
    console.log("Login Successful");
}
else{
    console.log("Login Failed.");
}

//Important Javascript Behaviour
//Here && returns first falsy value or the last value if all are truthy.
console.log("Java" && "Javascript"); //Javascript
console.log("" && "Java"); //""

//Here || returns first truthy value or the last value if all are falsy.
console.log("Java" || "Javascript"); //Java
console.log("" || "Java"); //Java


//Unary Operator - It works with only one operand
//1)Unary Plus (+) - Converts a value into a number when possible
console.log(+"5"); //5
console.log(+"Ajay"); //NaN
console.log(+true); //1
console.log(+false); //0

//2)Unary Minus (-) - Converts a value into a number and makes it negative.
let number = "10"
console.log(-number); //-10