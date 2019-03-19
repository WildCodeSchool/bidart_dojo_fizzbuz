// Écrire un programme qui renvoie :
// 1 - "fizz" dans le cas où le nombre passé en paramètre est un multiple de 3
// 2 - "buzz" dans le cas où le nombre passé en paramètre est un multiple de 5
// 3 - "fizzbuzz" dans le cas où le nombre passé est à la fois un multiple de 3 et de 5
// 4 - Le nombre dans le cas où ce dernier n’est ni un multiple de 3 ni un multiple de 5

// ES5

// for (let nombreInput = 0; nombreInput <= 60; nombreInput++) {
//   if (nombreInput % 3 === 0 && nombreInput % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (nombreInput % 5 === 0) {
//     console.log("buzz");
//   } else if (nombreInput % 3 === 0) {
//     console.log("fizz");
//   } else {
//     console.log(nombreInput);
//   }
// }

// ES6

function fn(nombreInput) {
  return nombreInput % 3 === 0 && nombreInput % 5 === 0
    ? "fizzbuzz"
    : nombreInput % 3 === 0
    ? "fizz"
    : nombreInput % 5 === 0
    ? "buzz"
    : nombreInput;
}

for (let nmb = 0; nmb <= 100; nmb++) {
  console.log(fn(nmb));
}
