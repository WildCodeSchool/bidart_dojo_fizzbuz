/* 
Écrire un programme qui renvoie :
1 - "fizz" dans le cas où le nombre passé en paramètre est un multiple de 3
2 - "buzz" dans le cas où le nombre passé en paramètre est un multiple de 5
3 - "fizzbuzz" dans le cas où le nombre passé est à la fois un multiple de 3 et de 5
4 - Le nombre dans le cas où ce dernier n’est ni un multiple de 3 ni un multiple de 5

Rentrer le paramètre dans la console : stdin/stdout ou argv
 */

function multiple (num){
        if (num % 3 === 0 && num % 5 === 0){
            return "fizzbuzz";
        } else if (num % 3 === 0){
            return "fizz";
        } else if (num % 5 === 0){
            return "buzz";
        } else {
            return num;
        }
    }

let arg = process.argv.slice(2);

console.log(multiple(arg));