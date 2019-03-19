// Écrire un programme qui renvoie :
// 1 - "fizz" dans le cas où le nombre passé en paramètre est un multiple de 3
// 2 - "buzz" dans le cas où le nombre passé en paramètre est un multiple de 5
// 3 - "fizzbuzz" dans le cas où le nombre passé est à la fois un multiple de 3 et de 5
// 4 - Le nombre dans le cas où ce dernier n’est ni un multiple de 3 ni un multiple de 5
'use strict';

function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "fizzbuzz";
    }
    else if (number % 3 === 0) {
        return "fizz";
    } else if (number % 5 === 0) {
        return "buzz";
    } else {
        return number;
    }
}

// console.log(fizzBuzz(15));
// console.log(fizzBuzz(15));
// console.log(fizzBuzz(15));
// console.log(fizzBuzz(15));

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof fizzBuzz, "function");
assert.strictEqual(fizzBuzz(3), 'fizz');
assert.strictEqual(fizzBuzz(5), 'buzz');
assert.strictEqual(fizzBuzz(15), 'fizzbuzz');
assert.strictEqual(fizzBuzz(17), '17');
// End of tests */;

