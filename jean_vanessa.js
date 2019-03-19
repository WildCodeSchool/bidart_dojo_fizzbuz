/*Écrire un programme qui renvoie :
1 - "fizz" dans le cas où le nombre passé en paramètre est un multiple de 3
2 - "buzz" dans le cas où le nombre passé en paramètre est un multiple de 5
3 - "fizzbuzz" dans le cas où le nombre passé est à la fois un multiple de 3 et de 5
4 - Le nombre dans le cas où ce dernier n’est ni un multiple de 3 ni un multiple de 5*/

//Programme with function:

/*function fizzBuzz (num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return 'fizzbuzz';
    } else if (num % 3 == 0) {
        return 'fizz';
    } else if (num % 5 == 0) {
        return 'buzz';
    } else {
        return num;
    }
}
console.log(fizzBuzz(15));*/


//Programme with for loop:

for (num = 1; num<= 100; num ++) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log('fizzbuzz');
    } else if (num % 3 == 0) {
        console.log('fizz');
    } else if (num % 5 == 0) {
        console.log('buzz');
    } else {
        console.log(num);
    }
}