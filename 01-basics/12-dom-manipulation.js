// DOM manipulation

// Method 1) textContent() gets the content of all elements
//  including <script> and <style> elements

document.querySelector(".box-1").textContent = "text-1 (innerText)";

// Method 2) innerText() only shows "human-readable" elements
document.querySelector(".box-2").innerHTML =
  "<em>" + "text-2 (innerHTML)" + "</em>";

// Using a var
var x = document.querySelector(".box-3");
x.innerHTML = "text-3 (var)";

// Selecting by ID (faster than querySelector); exclude '#'
document.getElementById("box").innerHTML = "text-4 (getElementByID)";

// Or by class name (returns an array); exclude '.'
document.getElementsByClassName("box-4")[0].innerHTML =
  "text-5 (getElementsByClassName)";
