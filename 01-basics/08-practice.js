var p1 = {
  name: "john",
  mass: 100,
  height: 1.4,
  // Remember: still need to be called
  calcBMI: function() {
    // Sets up the new property then return it
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};

var p2 = {
  name: "mark",
  mass: 120,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
  height: 0.9
};

// p1.calcBMI();
// p2.calcBMI();

var johnBMI = p1.calcBMI();
var markBMI = p2.calcBMI();

console.log(johnBMI, markBMI); ///

if (markBMI > johnBMI) {
  console.log("mark is higher");
} else if (markBMI > johnBMI) {
  console.log("mark is higher");
} else {
  console.log("They've got the same BMI");
}
