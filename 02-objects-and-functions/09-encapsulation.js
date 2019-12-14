// Encapsulation; ability to hide data implementation

var test = (function() {
  var x = 23;
  var add = function(a) {
    return x + a;
  };

  return {
    // Uses closure; has access to add and x
    publicTest: function(b) {
      console.log(add(b));
    }
  };
})();
// ^ () makes the function to be called before code execution


/**
 * On Console:
 * User don't have access to
 *   - test.x
 *   - test.add
 * 
 * But HAS ACCESS BY
 *   - test.publicTest(someNum)
 */
