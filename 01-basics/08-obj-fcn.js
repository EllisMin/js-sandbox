// method inside obj
var person = {
  name: "Ellis",
  birthYear: 2000,

  calcAge: function() {
    // Setting up a new property
    this.age = 2019 - this.birthYear; // this obj
  }
};

console.log(person.calcAge());

// var age = person.calcAge();
// person.age = age;

// Above is same as
// person.age = person.calcAge();

// You can just do all in the obj with this


console.log(person);
