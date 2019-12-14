// Block & IFFE

// Block: works like IFFE
{
  const a = 1;
  let b = 2;
  var d = 3;
}

// console.log(a + b); // Error
// console.log(c); // Accessible since d is a var


// IFFE in ES5
(function() {
    var c = 1;
})

