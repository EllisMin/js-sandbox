/// Rest Parameters (...)

// ES5

function someFcn(limit) {
  //   console.log(arguments);
  // args contain each argument although it isn't specified in the function param
  var args = Array.prototype.slice.call(arguments, 1); // 1 excludes first elmt
  args.forEach(function(cur) {
    console.log(cur >= limit);
  });
}
// Flexible with # arguments
someFcn(20, 10, 20, 30);
// someFcn(15, 17, 40, 50);

// ES6
console.log("\n\nES6");
function someFcn2(limit, ...args) {
  args.forEach(cur => console.log(cur >= limit));
}
someFcn2(20, 15, 17, 40, 50, 11, 23);
