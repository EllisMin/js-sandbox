// Classes

// ES5
var Person = function(name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.someFcn = function() {
  console.log("AA"); ///
};

var ellis = new Person("ellis", 20);
ellis.someFcn();

// ES6; similar to Java
// NOTE: brand and model have access to public without getter methods
class Car {
  constructor(brand, model = "no model specified") {
    this.brand = brand;
    this.model = model;
  }
  someFcn() {
    console.log("BB"); ///
  }

  // static class
  static hello() {
    console.log("HEY"); ///
  }
}
// Has to initialize before class Car
var car1 = new Car("honda");
car1.someFcn();

// prototype also available
Car.prototype.someFcn2 = function() {
  console.log("CC"); ///
};
car1.someFcn2();

// Calling static class
Car.hello();

/**
 * Note: class isn't really using inheritance like var Person does with prototype
 *
 */
