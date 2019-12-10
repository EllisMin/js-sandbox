var bills = [124, 48, 268];

var tips = [];
var total = [];

calc(bills[0]);
calc(bills[1]);
calc(bills[2]);

console.log(tips, total);

function calc(bill) {
  var multiplier;
  if (bill < 50) multiplier = 0.2;
  else if (bill < 200) multiplier = 0.15;
  else multiplier = 0.1;

  var tip = bill * multiplier;
  tips.push(tip);
  total.push(tip + bill);
}
