// Function returning function

function interviewQuestions(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + ", can you explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log(name + ", what subject do you teach?");
    };
  } else {
    return function(name) {
      console.log(name + "'s job not found");
    };
  }
}

// the var stores function
var teacherQ = interviewQuestions("teacher");
var designerQ = interviewQuestions("designer");
var engineerQ = interviewQuestions("engineer");

teacherQ("Ellis");
designerQ("John");
designerQ("name1");
designerQ("name2");
engineerQ("Mark");

// doing at once
interviewQuestions("professor")("Sam");
