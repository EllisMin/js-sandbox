// truthy and falsy values and equality operators

// These will be evaluated to false
// falsy values: undefined, null, 0, '', NaN

// truthy values: NOT falsy values

var height;
console.log(height);

// height = 0; // may be defined false
height = 22;

// Useful to check variables
if (height || height === 0) {
  console.log('true1');
} else {
  console.log('false1');
}

// Equality operators; converts string to number
if (height == '22') {
  console.log('== operator does type coercion');
} else {
}

// Strict comparison
if (height === '22') {
  console('returns true');
}
