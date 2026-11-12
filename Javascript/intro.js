//var let const concepts
//A variable is a container to store data.
let name = "ajay";
let age = 23;
//here, let is used as a keyword to declare a variable.
//To print the value we have to use console.log() function.
console.log(name);
console.log(age);

//var is the older way of declaring variables in javascript.

//There are some interesting behaviours in var concept.
//1.Redeclare a variable
var firstName = "Sarabesh";
var firstName = "Baskaran";
console.log(firstName); //It prints Baskaran.

//2.We can reassign a variable
var lastName = "Suresh";
lastName = "Rohith";
console.log(lastName); //It prints Rohith.
//Reassigning means changing the existing value of the variable.

//3.var has function scope. but, var does not respect normal block boundaries such as {}
if(true){
    var city = "Mayiladuthurai";
}
console.log(city); //It prints Mayiladuthurai. It is because var has function scope. It does not respect normal block boundaries such as {}.

//let was introduced in ES6. it solves some problems associated with var.
//1.you cannot redeclare a variable using let keyword.
let salary = 10000;
//let salary = 20000; -> It throws an error. It is because we cannot redeclare a variable using let keyword.
console.log(salary); //It prints 10000.

//2.you can reassign a variable using let keyword.
let property = "solid";
property = "liquid"; //It is valid. Because we can reassign a value to a variable without using let keyword.
console.log(property); //It prints liquid.

//Redeclaration - Declaring the same variable again.
//Reassignment - changing the value of an existing variable.

//3.let has block scope
if(true){
    let country = "India";
}
//console.log(country); -> It throws an error. It is because let has block scope. It respects normal block boundaries such as {}.

//const is fixed value. so, we cannot able to change it.
//1.You cannot redeclare a variable
//2.You cannot reassign a variable
//3.You must intialize a value to the variable when it is const.


//Important concept: const with objects
const user = {
    name: "Sarabesh",
    age: 23
};

user.age = 25; //here, in const we can reassign a value of the variable

console.log(user);

//Scope - It determines where a variable can be accessed in our program.
//1.Global Scope - A variable declared outside of a function and blocks.
var things = "Global Scope";
function myFunction(){
    console.log(things);

}
myFunction();

console.log(things);

//2.Function Scope - A variable declared inside a function is only accessible within that function.
function display(){
    let soap = "Hamam";
    console.log(soap);
}
display();
console.log(soap); // It gives error.

//Block Scope - It is important when working with let and const. It is a section of code enclosed within curly brackets {}.
/*

{
This is a block scope
}

*/
