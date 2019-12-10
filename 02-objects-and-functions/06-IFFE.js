// IIFE (pronounced: E-Fi); Immediately Invoked Function Expressions

// Function declaration
function highScore() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
highScore();

// IIFE
// gets invoked immediately. Also used in private members (upcoming)
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// having argument
(function(moreChance) {
  var score = Math.random() * 10;

  console.log(score >= 5 - moreChance);
})(5);
