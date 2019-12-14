// Inheritance
// ES5
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.someFcn = function() {
  console.log("AA"); ///
};

// Athlete inherits from Person. i.e. Athlete's prototype is Person
function Athlete(name, age, job, medals) {
  // Inheriting constructor from Person
  Person.call(this, name, age);

  this.job = job;
  this.medals = medals;
}
// Inheriting prototype function from Person
Athlete.prototype = Object.create(Person.prototype);

// This has to come after inheritance from Person ^
Athlete.prototype.athleteFcn = function() {
  console.log("Athlete exclusive function"); ///
};

var basketBallPlayer = new Athlete("john", 18, "basketball", "bronze");
console.log(basketBallPlayer);
basketBallPlayer.someFcn();
basketBallPlayer.athleteFcn();

// ES6: PREFERRED!
class Car {
  constructor(brand, model = "no model specified") {
    this.brand = brand;
    this.model = model;
  }
  someFcn() {
    console.log("CC"); ///
  }
}
// Inheriting a class
class RaceCar extends Car {
  constructor(brand, model, engine) {
    // Inherit constructor attributes from Car
    super(brand, model);
    this.engine = engine;
  }
  raceCarFcn() {
    console.log("Race Car exclusive fcn"); ///
  }
}

var superCar = new RaceCar("hyundai", "sonata", "v6");
// Calling inherited function
superCar.someFcn();
// Function for race cars
superCar.raceCarFcn();
