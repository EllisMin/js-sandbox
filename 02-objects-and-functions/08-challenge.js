// challenge: quiz in console

// Using IFFE here to prevent overwriting when
// other people include this code to their project

(function() {
  // fcn constructor
  var Question = function(text, answers, corAns) {
    this.text = text;
    this.answers = answers;
    this.corAns = corAns;
  };

  var questions = [];
  var randNum;
  var score;

  function displayQuestion() {
    if (questions.length > 0) {
      randNum = Math.floor(Math.random() * questions.length) + 0;
      q = questions[randNum];
      var userIn = prompt(q.text + "\n" + q.answers);

      if (userIn === q.corAns) {
        score++;
        console.log("Correct Answer! Score: " + score);
      } else if (userIn === "exit") {
        throw new SomeError("Exiting game");
      } else {
        console.log("Wrong Answer! Score: " + score);
      }
      // Remove index @randNum
      // questions.splice(randNum, 1);
    }
  }

  // Using prototype
  /*
  Question.prototype.displayQuestion = function() {
    console.log(this.text + "\n" + this.answers);
  };
  Question.prototype.checkAnswer  = function(ans){
      if(ans === this.corAns) {
          console.log("Correct Answer");
      } else {
          console.log("Wrong Answer");
      }
  }
  questions[randNum].displayQuestion();
  questions[randNum].checkAnswer(userIn);*/

  setUp();
  while (questions.length > 0) {
    displayQuestion();
  }

  function setUp() {
    var q1 = new Question("question1: answer is 0", ["0: aa", "1: bb"], "0");
    var q2 = new Question("question2: answer is 1", ["0: aa", "1: bb"], "1");
    questions.push(q1, q2);
    score = 0;
  }
})();
