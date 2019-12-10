console.log("BB");

// Name convention: firstWord
var firstName = "John";
var age = 25;

// Type Coercion; converting value from one type to another
console.log(firstName + age);

var job, isMarried;
job = "teacher";
isMarried = true;

console.log(firstName + " is " + age + " and is married: " + isMarried);

// var mutation
age = "twenty five";

console.log(firstName + " is " + age + " and is married: " + isMarried);

/* Popups */

// alert
alert(firstName + " is " + age + " and is married: " + isMarried);

// prompt
var lastName = prompt("type in last name");
console.log(firstName + " " + lastName);
