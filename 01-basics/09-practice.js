var obj1 = {
  bills: [124, 48, 268, 180, 42],
  tips: [],
  total: [],
  calcTips: function() {
    for (var i = 0; i < this.bills.length; i++) {
      var mult;
      var bill = this.bills[i];
      if (bill < 50) {
        mult = 0.2;
      } else if (bill < 200) {
        mult = 0.15;
      } else {
        mult = 0.1;
      }
      var tip = bill * mult;
      this.tips.push(tip);
      this.total.push(tip + bill);
    }
  }
};

// Extra
var obj2 = {
  bills: [77, 475, 110, 45],
  tips: [],
  total: [],
  calcTips: function() {
    for (var i = 0; i < this.bills.length; i++) {
      var mult;
      var bill = this.bills[i];
      if (bill < 100) {
        mult = 0.2;
      } else if (bill < 300) {
        mult = 0.1;
      } else {
        mult = 0.25;
      }
      var tip = bill * mult;
      this.tips.push(tip);
      this.total.push(tip + bill);
    }
  }
};

function calcAvg(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum += tips[i];
  }
  return sum / tips.length;
}

obj1.calcTips();
obj2.calcTips();

// console.log(calcAvg(obj1.tips));
// console.log(calcAvg(obj2.tips));

// Add to property
obj1.average = calcAvg(obj1.tips);
obj2.average = calcAvg(obj2.tips);

console.log(obj1, obj2);
