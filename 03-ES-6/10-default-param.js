// Default parameters

// ES5: Setting default param
function Person(name, age) {
  // Setting default val
  age === undefined ? (this.age = -1) : (this.age = age);
  this.name = name;
}
// Person.prototype.someFcn = function() {
//   console.log("AA"); ///
// };

var ellis = new Person("Ellis");
var someone = new Person("John", 33);
console.log(ellis);
console.log(someone);

// ES6L Setting default param
function Car(brand, model = "no model specified") {
  this.model = model;
  this.brand = brand;
}

var car1 = new Car("honda", "accord");
var car2 = new Car("honda");
console.log(car1);
console.log(car2);


// ellis.someFcn();