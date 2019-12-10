// this keyword scope
console.log(this); // Logs the window object

var a = 10; // === window.a
// console.log(window.a);

someFcn();

function someFcn() {
  console.log(this); // this points to global object (window)
}

var p1 = {
  name: "ellis",
  fcn: function() {
    console.log(this); // Points to p object
    console.log(this.name);

    function innerFcn() {
      console.log(this); // Points to global object!
    }
    innerFcn();
  }
};

p1.fcn();

var p2 = {
  name: "john"
};

// Setting a new attribute of p1's function to p2
p2.fcn = p1.fcn;

// now this points to p2 object instead of p1. innerFcn still points to window
p2.fcn();
