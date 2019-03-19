/* Écrire un programme qui renvoie :
1 - "fizz" dans le cas où le nombre passé en paramètre est un multiple de 3
2 - "buzz" dans le cas où le nombre passé en paramètre est un multiple de 5
3 - "fizzbuzz" dans le cas où le nombre passé est à la fois un multiple de 3 et de 5
4 - Le nombre dans le cas où ce dernier n’est ni un multiple de 3 ni un multiple de 5

tester tous les nombres < 100 */


for (let i=0; i < 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz");
    } else if (i % 3 === 0){
        console.log("fizz")
    } else if (i % 5 === 0){
        console.log("buzz")
    } else {
        console.log(i)
    }
    console.log(i);
}
