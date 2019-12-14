// Arrow Functions

const years = [1983, 1830, 1922, 1990];

// ES 5
var ages5 = years.map(function(e) {
  return new Date().getFullYear() - e;
});

console.log(ages5);

// ES 6 : Return as call back functions with arrow function
let ages6 = years.map(e => new Date().getFullYear() - e);
console.log(ages6);

// More example
ages6 = years.map(
  (e, i) => `Age element ${i}: ${new Date().getFullYear() - e}.`
);
console.log(ages6);

// More example: return with block, {}, statement
ages6 = years.map((e, i) => {
  const year = new Date().getFullYear();
  const age = year - e;
  return `Age element ${i}: ${age}.`;
});
console.log(ages6);
