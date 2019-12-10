// Closures

function someFcn(arg1) {
  var msg = "print this message";

  // Returning fcn has access to argument & var! This is Closure.
  return function() {
    console.log(msg);
    console.log("print number: " + arg1);
  };
}

var storeFcn = someFcn(22);
// has access even after outer function has returned
storeFcn();

someFcn(11)();

// Challenge: convert below fcn by using closure

// function interviewQuestions(job) {
//     if (job === "designer") {
//       return function(name) {
//         console.log(name + ", can you explain what UX design is?");
//       };
//     } else if (job === "teacher") {
//       return function(name) {
//         console.log(name + ", what subject do you teach?");
//       };
//     } else {
//       return function(name) {
//         console.log(name + "'s job not found");
//       };
//     }
//   }

// This is a better way of doing it
function interviewQuestions(job) {
  return function(name) {
    if (job === "designer") {
      console.log(name + ", can you explain what UX design is?");
    } else if (job === "teacher") {
      console.log(name + ", what subject do you teach?");
    } else {
      console.log(name + "'s job not found");
    }
  };
}

interviewQuestions("designer")("mark");
