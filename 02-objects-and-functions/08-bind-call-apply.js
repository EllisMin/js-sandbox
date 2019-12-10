// Bind, call, apply

var ellis = {
  name: "Ellis",
  age: 22,
  job: "teacher",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          ", I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old. Have a nice " +
          timeOfDay
      );
    } else if (style === "informal") {
      console.log(
        "Sup, I'm " +
          this.name +
          ", " +
          this.age +
          ", and I'm a " +
          this.job +
          ". Have a good " +
          timeOfDay
      );
    }
  }
};

var emily = {
  name: "Emily",
  age: 31,
  job: "designer"
};

ellis.presentation("formal", "morning");

// Bind: returns a fcn
var ellisInformal = ellis.presentation.bind(ellis, "informal");
ellisInformal("evening");
ellisInformal("night");

var emilyFormal = ellis.presentation.bind(emily, "formal");
emilyFormal("morning");

// Call method; method borrowing
ellis.presentation.call(emily, "informal", "afternoon");

// Apply
ellis.presentation.apply(emily, ["informal", "evening"]);

// More; from 04-fn-in-fn.js
var A = [3, 1, 2, 3];

function copyArr(arr, fn) {
  var arrCopy = [];
  for (var i = 0; i < arr.length; i++) {
    arrCopy.push(fn(arr[i]));
  }
  return arrCopy;
}

// fcn passed into copyArr
function doSomeMath(a) {
  return a * 3;
}
function doOtherMath(addition, a) {
  return a * 2 + addition;
}

var arrCopy = copyArr(A, doSomeMath);
console.log(arrCopy);

// first arg has to be this for bind()
var usingBind = copyArr(arrCopy, doOtherMath.bind(this, 100));
console.log(usingBind);
