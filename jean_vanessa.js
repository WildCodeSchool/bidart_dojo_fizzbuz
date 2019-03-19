/*Écrire un programme qui renvoie :
1 - "fizz" dans le cas où le nombre passé en paramètre est un multiple de 3
2 - "buzz" dans le cas où le nombre passé en paramètre est un multiple de 5
3 - "fizzbuzz" dans le cas où le nombre passé est à la fois un multiple de 3 et de 5
4 - Le nombre dans le cas où ce dernier n’est ni un multiple de 3 ni un multiple de 5*/

//Programme with ternary function as light as possible:

let fizzBuzz=(num)=>{return num%3==0&&num%5==0?'fizzbuzz':num%3==0?'fizz':num%5==0?'buzz':num}

console.log(fizzBuzz(5));


//Programme with for loop and if / else conditions:

/*for (num = 1; num<= 100; num ++) {
    if (num % 3 == 0 && num % 5 == 0) {
        console.log('fizzbuzz');
    } else if (num % 3 == 0) {
        console.log('fizz');
    } else if (num % 5 == 0) {
        console.log('buzz');
    } else {
        console.log(num);
    }
}*/

//Programme with for loop and switch:

/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Please, give a number between 1 and 100:`, (num) => {
    switch (true) {
        // If multiple 3 and 5
        case num % 3 == 0 && num % 5 == 0: 
        console.log('fizzbuzz');
        break;
        // If multiple 3
        case num % 3 == 0 :
        console.log('fizz');
        break;
        // If multiple 5
        case num % 5 == 0:
        console.log('buzz');
        break;
        // // If none
        default :
        console.log(num)
    }
    readline.close();
})*/