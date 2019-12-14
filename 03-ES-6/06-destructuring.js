// Destructuring

// ES5
var arr = ["first", "second"];
var first = arr[0];
var second = arr[1];

// ES6
// Destructuring array
const [name, age] = ["ellis", 26];
console.log(name);
console.log(age);

// More
const obj = {
  fName: "Ellis",
  lName: "Min"
};

// Destructuring Object
const { fName, lName } = obj;
console.log(fName);
console.log(lName);

// Changing name
const { fName: a, lName: b } = obj;
console.log(a);
console.log(b);

// Function returning array
function calcAgeAndRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}
// Destructuring returned array
const [ageRetire, retirement] = calcAgeAndRetirement(1993);
console.log(age);
console.log(retirement);


