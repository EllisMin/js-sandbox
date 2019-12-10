// Ternary operator and switch stmt

var name = 'Ellis';
var age = 18;

// Ternary operator
age >= 21
  ? console.log(name + ' drinks beer')
  : console.log(name + ' drinks juice');

var drink = age >= 21 ? 'beer' : 'juice';
console.log(drink);

// Switch
var job = 'teacher';
switch (job) {
  // multiple cases
  case 'teacher':
  case 'instructor':
    console.log(name + ' teaches kids how to code');
    break; // Without break, it will keep evaluating
  case 'driver':
    console.log(name + ' drives');
    break;

  // else
  default:
    console.log('in default');
}

// switch(true) is a trick to use it just like if/else
switch (true) {
  case 'teacher' === job:
    console.log('aaa');
    break;

  default:
    console.log('bbb');
}
