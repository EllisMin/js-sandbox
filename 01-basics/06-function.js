// function; accessible from console

function calcAge(arg) {
  return 2019 - arg;
}

var age1 = calcAge(1995);
var age2 = calcAge(1994);

console.log(age1, age2);

/* Function Declaration vs Function Expression*/

// Function Declaration (Statement)
// Loads BEFORE any code is executed
function foo(arg1, arg2) {}

// Function Expression; gives immediate result
// Loaded when the interpreter reaches this line of code

// Useful as arguments to other functions
// OR as IIFE(Immediately Invoked Function Expressions)
var foo = function(arg1, arg2) {
  return 33;
};

console.log(foo(-1, -1));
