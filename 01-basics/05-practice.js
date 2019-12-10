// John scored 89 120 103
// Mike scored 116 94 123

var johnAvg = (89 + 120 + 103) / 3;
var markAvg = (116 + 94 + 123) / 3;
var max = -1;
var winner;
if (johnAvg > markAvg) {
  console.log("john won");
  winner = "john";
  max = johnAvg;
} else if (johnAvg < markAvg) {
  console.log("mark won");
  winner = "mark";
  max = markAvg;
} else if (johnAvg === markAvg) {
  console.log("tied");
  max = johnAvg;
} else {
  throw new Error("shouldn't be here");
}

console.log("\n\nRound2:");
var ellisAvg = (97, 134, 105) / 3;
if (max < ellisAvg) {
  console.log("ellis won");
} else if (max > ellisAvg) {
  console.log(winner + " won");
} else if (max === ellisAvg) {
  console.log("all tied");
} else {
  throw new Error("shouldn't be here");
}
