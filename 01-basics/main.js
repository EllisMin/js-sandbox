// Event listener
// clicked is a callback fcn, passed as an argument
// Don't use clicked(). Otherwise, it will be called only once b/f execution.
document.getElementById("btn-1").addEventListener("click", clicked);

function clicked() {
  console.log("btn1 clicked");
}

// Anonymous function; function that's used only once here; has no reusability
// Closures are not formed with anonymous functions
document.getElementById("btn-2").addEventListener("click", function() {
  console.log("btn2 clicked");
});

