// ES6: Let & const
// const name = "Ellis";
// name = "John"; // Error in console

function someFcn() {
  let name = "Ellis"; // use left for things that may change
  const year = 1996; // const can't change
  console.log(name + " and year: " + year);
}

someFcn();

// ES 5: Scope of var
function someFcn2(someBool) {
  if (someBool) {
    //console.log(name); // prints out undefined instead of error

    var name = "Ellis";
    var year = 1990;
  }
  // has access to var inside the same function
  console.log(name + " and year: " + year);
}

someFcn2(true);

// ES 6: Scope of let & const
function someFcn3(someBool) {
  // let and const are only accessible in the same block
  if (someBool) {
    //console.log(name); // prints out error instead of undefined
    let name = "Ellis";
    const year = 1990;
  }
  //   console.log(name + " and year: " + year); // cause error because of scope
}
someFcn3(true);

var i = 20;
for (var i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i); // prints 3 not 20

let j = 20;
for (let j = 0; j < 3; j++) {
  console.log(j);
}
console.log(j); // prints 20
