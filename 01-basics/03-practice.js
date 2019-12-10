var markBMI, johnBMI;

var markWeight = prompt('Mark weight');
var markHeight = prompt('Mark height');
var johnWeight = prompt('John weight');
var johnHeight = prompt('John height');

markBMI = markWeight / (markHeight * markHeight);
johnBMI = johnWeight / (johnHeight * johnHeight);

console.log("Mark's BMI: " + markBMI);
console.log("John's BMI: " + johnBMI);

var markHigherBMI = markBMI > johnBMI;
// escape with \
console.log("mark's higher? " + markHigherBMI);
