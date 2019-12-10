// First class function; passing fn as argument

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
function doOtherMath(a) {
  return a / 2;
}

var arrCopy = copyArr(A, doSomeMath);
console.log(arrCopy);

var arrCopy2 = copyArr(A, doOtherMath);
console.log(arrCopy2);
