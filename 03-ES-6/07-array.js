// Arrays in ES6

const boxes = document.querySelectorAll(".box");

// ES5
// Converting into array
var boxArr = Array.prototype.slice.call(boxes);
boxArr.forEach(function(cur) {
  cur.style.background = "black";
});

// ES6
// Converting into array in ES6 with from()
const boxArr2 = Array.from(boxes);
boxArr2.forEach(cur => {
  cur.style.border = "10px grey solid";
});

// ES5: Traverse DOM element
for (var i = 0; i < boxArr.length; i++) {
  if (boxArr[i].className === "box box-2") continue;
  boxArr[i].style.transform = "translateY(200px)";
}

// ES6: Traverse DOM element
for (const cur of boxArr2) {
  if (cur.className.includes("-2")) continue;
  cur.style.color = "#fff";
  cur.innerHTML = "excluding 2nd element";
}

// ES5: Accessing Array
var ages = [12, 15, 22, 10];
var findAdult = ages.map(function(cur) {
  return cur >= 18;
});
// Array of boolean
console.log(findAdult);
console.log(`Returned array of boolean: ${findAdult}`);
// get index of adult
console.log(`Index of adult: ${findAdult.indexOf(true)}`);
// get value of adult
console.log(`Value of adult: ${ages[findAdult.indexOf(true)]}`);

// ES6: Accessing Array
// get index of adult
const foundAdultIndex = ages.findIndex(cur => cur >= 18);
// get value of adult
const foundAdultVal = ages.find(cur => cur >= 18);
