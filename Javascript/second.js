//Javascript Data Types
/**
 * Primitive Data Types
 * 1)Number
 * 2)String
 * 3)Boolean
 * 4)Undefined
 * 5)Null
 * 6)Symbol
 * 7)BigInt
 * 
 * Non-Primitive Data Types
 * 1)Object
 * 2)Array
 * 3)Function
 */

//String - It is used to store text. And it supports three ways of writing strings
let firstName = "Sarabesh"; //This is double quotes string
let city = 'Chennai'; //This is single quotes string
let message = `Welcome to JavaScript`; //This is backtick string. It is also called Template Literal

console.log(firstName);
console.log(city);
console.log(message);

//In talking about backticks we can directly insert variables inside the string.
console.log(`His first Name is ${firstName} and he lives in ${city}`);


//Next Datatype Number it covers both Integer and decimal values.
let numb1 = 102;
let numb2 = 100.6;
console.log(numb1);
console.log(numb2);
//if you want to know what type of data that we stored in a variable we have to use typeof Operator.
console.log(typeof numb1);
console.log(typeof numb2); //Both are Number Datatype.

//Some special numeric values
let a = Infinity;
let b = -Infinity;
let c = NaN;

console.log(typeof a); //If we print infinity is what typeof it shows number.
console.log(typeof b); //number.
console.log(typeof c); //Even, NaN is also a Number. when we use typeof

//UnDefined - when we declare a variable but if we don't assign value means then, javascript itself assigns undefined. let us take a example,
let lastName;
console.log(lastName); //when we put typeof it also shows undefined.

//Null - It simply represnts intentional absence of any value. it represent nothing or empty value.
let FName = null;
console.log(FName); //Null
console.log(typeof FName); //When we use typeof it shows object. It is a bug in javascript. It should have been null but it shows object. It is a known bug in javascript.

//BigInt - Regular Number type cannot safely represent every large Integer.
let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber); //123456789012345678901234567890n the n at the end of the number indicates that it is a BigInt.
console.log(typeof bigNumber); //bigint

//Symbol - It used to create unique identifiers
let id1 = Symbol("id1");
let id2 = Symbol("id2");

console.log(id1 === id2); //false because both are unique identifiers even though they have the same description.

//Non-Primitive Data Types
//1.Object - An object stores data in key-value pairs.
let employee = {
    name: "Sarabesh",
    age:23,
    role: "Java Developer"
}

console.log(employee);
console.log(typeof employee); //object
//we can also access individual values in object using dot notation and we can also modify object values.

//2.Array - It stores multiple values in a single variable.
let skills = ["Java", "MySQL", "Spring Boot", "Microservices"];
console.log(skills);
console.log(typeof skills); //object. In javascript array is also an object. It is a known bug in javascript.
console.log(skills[1]); //we can also access individual values in array using index number. We can also modify an array element
//we can also add new element to array
skills.push("Javascript");
skills.push("ReactJS");
console.log(skills);

//Function - A function is a block of code designed to perform a particular task. 
function welcome(){
    console.log("Hello Sarabesh");
}
welcome(); //we can call a function using function name followed by parenthesis. It will execute the code inside the function.
console.log(typeof welcome); //function. It is a special type of object in javascript.


