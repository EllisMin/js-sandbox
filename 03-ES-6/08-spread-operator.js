// Spread Operator (...)

function addNums(a, b, c, d) {
  return a + b + c + d;
}

// ES5
var arr = [20, 30, 40, 50];
var sum = addNums.apply(null, arr);
console.log(sum);

// ES6
const sum2 = addNums(...arr);
console.log(sum2);

// Combining arrays with spread operator
const firstArr = [1, 2, "three"];
const secondArr = [4, "five"];
const combined = [...firstArr, "new elmt", ...secondArr];
console.log(combined);

// spread operator on DOM
const title = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const all = [title, ...boxes];

console.log(all); ///

// Modifying element with div, h1
Array.from(all).forEach(cur => {
  console.log(cur); ///
  cur.style.color = "#fff";
});
