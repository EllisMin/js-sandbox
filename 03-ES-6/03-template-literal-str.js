// Template Literals with Strings

let fName = "Ellis";
let lName = "Min";
const year = 1990;

function calcAge(year) {
  return new Date().getFullYear() - year;
}
console.log(calcAge(year));

// ES5
console.log("this is " + fName + " " + lName);

// ES6: Template literals: use back ticks(``)
console.log(`this is ${fName} ${lName}`);

const n = `${fName} ${lName}`;

// Some str functions
console.log(n.startsWith("e")); // false; case sensitive
console.log(n.endsWith("in"));
console.log(n.includes("is M"));

// Repeat
console.log(`${fName} `.repeat(5));
