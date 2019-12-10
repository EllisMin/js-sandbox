// Encapsulation; ability to hide data implementation

var test = (function() {
  var x = 23;
  var add = function(a) {
    return x + a;
  };
  return {
    publicTest: function(b) {
      console.log(add(b));
    }
  };
})();

/**
 * On Console:
 * User don't have access to
 *   - test.x
 *   - test.add
 * 
 * But HAS ACCESS BY
 *   - test.publicTest(someNum)
 */
