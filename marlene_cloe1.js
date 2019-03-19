/* Écrire un programme qui renvoie :
1 - "fizz" dans le cas où le nombre passé en paramètre est un multiple de 3
2 - "buzz" dans le cas où le nombre passé en paramètre est un multiple de 5
3 - "fizzbuzz" dans le cas où le nombre passé est à la fois un multiple de 3 et de 5
4 - Le nombre dans le cas où ce dernier n’est ni un multiple de 3 ni un multiple de 5

Ecrire la fonction sans le if et le else */

function fizzBuzz(num) {
    switch (true) {
        case (num % 3 === 0) && (num % 5 === 0):
            return "fizzbuzz";  
        case num % 3 === 0:
            return "fizz";
        case num % 5 === 0:
            return "buzz";
        default:
            return num; 
    }
}

let resultat = fizzBuzz(num);
console.log(resultat)





