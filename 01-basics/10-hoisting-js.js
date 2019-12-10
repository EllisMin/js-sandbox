// Hoisting

someFcn("arg");
// functions get stored in VO(variable object) before the code is executed
// So you can call the function above this line of code
function someFcn(arg) {
  console.log("Inside Fcn1");
}

// Function Expression doesn't work when used above function's declared
// someVar("arg");

var someVar = function(arg) {
  console.log("Inside Fcn2");
};

// Variables
// In creation face, the code scans for var declarations then they're set to UNDEFINED
console.log(foo); // undefined
var foo = 10; // Global variable === Global Execution Context
console.log(foo); // 10

function bar() {
  console.log(foo); // IMPORTANT: Also UNDEFINED
  // Local variable. variable of execution context of bar function
  // which gets popped out of stack
  var foo = 20;
  console.log(foo);
}
bar();
console.log(foo);
 