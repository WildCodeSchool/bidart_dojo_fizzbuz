// Écrire un programme qui renvoie :
// 1 - "fizz" dans le cas où le nombre passé en paramètre est un multiple de 3
// 2 - "buzz" dans le cas où le nombre passé en paramètre est un multiple de 5
// 3 - "fizzbuzz" dans le cas où le nombre passé est à la fois un multiple de 3 et de 5
// 4 - Le nombre dans le cas où ce dernier n’est ni un multiple de 3 ni un multiple de 5

function dojoFn(x) {
    return x % 3 === 0 && x % 5 === 0 ? "fizzbuzz" : x % 5 === 0 ? "buzz" : x % 3 === 0 ? "fizz" : x;
}

for (let x = 0; x < 100; x++) {
    dojoFn(x);
}
