// Obj

// Object Literal in curly braces
var person = {
  name: "Ellis",
  bornIn: 2000,
  family: ["John", "Mary"]
};

// Access
console.log(person);
console.log(person["name"]);
console.log(person.name);
console.log(person.family); // Returns array
console.log(person.family[1]); // Mary

// can be useful
var x = "bornIn";
console.log(person[x]);

// mutate
person.family[1] = "kevin";
console.log(person.family);

// Other way to initialize; new object syntax
var mark = new Object();
mark.firstName = "somename";
mark["lastName"] = "someLName";
mark.bornIn = 1900;
console.log(mark);
