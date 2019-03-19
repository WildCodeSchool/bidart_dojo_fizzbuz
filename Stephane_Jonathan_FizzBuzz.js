// Fonction ternaire
const fizzbuzz_one = num =>
  num % 3 === 0 && num % 5 === 0
    ? 'fizzbuzz'
    : num % 5 === 0
    ? 'buzz'
    : num % 3 === 0
    ? 'fizz'
    : num;

// fonction if/else
function fizzbuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else {
    return num;
  }
}
// fonction switch
function fizzbuzz_switch(num) {
  switch (true) {
    case num % 3 === 0 && num % 5 === 0:
      return 'fizzbuzz';
      break;
    case num % 3 === 0:
      return 'fizz';
      break;
    case num % 5 === 0:
      return 'buzz';
      break;
    default:
      return num;
      break;
  }
}

let args = process.argv.slice(2);
if (args > 1) {
  console.log(`Argument : ${fizzbuzz_switch(args)}`);
} else {
  for (let i = 1; i <= 100; i++) {
    console.log(fizzbuzz_switch(i));
  }
}
