// Creating function constructor(like a class in java) and Inheritance

// Creating object literal
var ellis = {
  name: "Ellis",
  age: 22
};

// Function constructor; use capital letter
var Person = function(name, age) {
  this.name = name;
  this.age = age;
  // Adding a function to function constructor
  this.showAge = function() {
    console.log(this.age);
  };
};

// inheritance to be used in objects that inherits Person
Person.prototype.showName = function() {
  console.log(this.name);
};
Person.prototype.lastName = "Min";

// instantiate
var john = new Person("John", 10);
var mark = new Person("mark", 18);

john.showAge();

// Accessing inherited function
mark.showName();
john.showName();

console.log(john.lastName);
console.log(mark.lastName);

/*
  On console, typing:
  - john: gives variables assigned to john as well as prototype
  - Person.prototyped: shows inherited var/function
  - .john.__proto__ === Person.prototype: returns true
*/

/* Verifying prototype chain on console: */

// hasOwnProperty() is a prototype of an OBJECT which Person inherits from
// prototype chain allows john to access not only Person but object's prototype as well
console.log(john.hasOwnProperty("age")); // returns true

// returns false b/c lastName's Person's property
console.log(john.hasOwnProperty("lastName"));

console.log(john instanceof Person); // true since john inherits from Person

// These are also possible through prototype chain (or inheritance)
// arr.length, arr.map(), arr.sort(), ...