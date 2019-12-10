// Object.create: Another way to use inheritance with
// not popular as using function constructor

var personProto = {
  // allows to inherit directly without using Object.prototype ...
  showAge: function() {
    console.log(this.age);
  }
};

// Instantiate
var john = Object.create(personProto);
john.name = "John";
john.age = 20;

// or instantiate like this
var mark = Object.create(personProto, {
  name: { value: "Mark" },
  age: { value: 12 }
});

// Check
console.log(john);
console.log(mark);

// console.log(john.showAge());
// console.log(mark.showAge());
