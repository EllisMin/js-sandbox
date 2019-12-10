// Arrays

// Initialization
var arr1 = ["a", "b", "c"];
// var arr2 = new Array(1, 2, 3); // Not common
var arr2 = [1, 2, 3];
console.log(arr1, arr2);

// Mutate
arr1[1] = "e";
console.log(arr1);

// When index is out of bound, it will resize & add
arr1[4] = "z";

console.log(arr1);

// Can take different data types
var arr3 = ["a", "b", 123, false];
console.log(arr3);

// Add last
arr3.push("new elmt");
console.log(arr3);

// Add first
arr3.unshift("firstelmt");
console.log(arr3);

// remove last
arr3.pop();
arr3.pop();
console.log(arr3);

// Remove first
arr3.shift();
console.log(arr3);

// access
console.log(arr3.indexOf("b")); // return -1 on not found
