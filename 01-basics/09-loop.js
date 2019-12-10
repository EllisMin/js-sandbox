// Loop

var arr = ["Ellis", 1999, false, "Min"];

for (var i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== "string") {
    continue;
  } else {
    console.log(arr[i]);
  }
}
