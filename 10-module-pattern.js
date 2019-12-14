// Module pattern; architecture

var budgetController = (function() {
  var x = 23;
  var add = function(a) {
    return x + a;
  };
  return {
    publicTest: function(b) {
      return add(b);
    }
  };
})();

var UIController = (function() {
  // code
})();

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
  var z = budgetCtrl.publicTest(11);

  return {
    anotherPublic: function() {
      console.log(z);
    }
  };
})(budgetController, UIController);

// Check on console with: controller.anotherPublic()
