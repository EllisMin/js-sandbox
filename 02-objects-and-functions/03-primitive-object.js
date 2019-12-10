// Primitive vs object

/**
 * vars containing primitives hold data inside of var itself
 * vars containing objects doesn't contain obj but reference to it (points to it)
 */

var a = 1;
var b = a;
a = 3;
console.log(a); // 3
console.log(b); // 1

var obj1 = {
  x: 1
};
var obj2 = obj1;
obj1.x = 5;
console.log(obj1.x); // 5
console.log(obj2.x); // 5; also changes as obj1 change since obj2 holds obj, not primitive

// function
var i = 10;
var obj3 = {
  someStr: "string"
};

function update(a, b) {
  a = 20;
  b.someStr = "modified string";
}

update(i, obj3);

// i doesn't change
// when arg is passed, it creates a simple copy, so it won't affect i
console.log(i);

// someStr changes b/c the object doesn't get passed, but a REFERENCE pointer
console.log(obj3.someStr);
