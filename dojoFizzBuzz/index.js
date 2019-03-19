//Écrire un programme qui renvoie :
//1 - "fizz" dans le cas où le nombre passé en paramètre est un multiple de 3
//2 - "buzz" dans le cas où le nombre passé en paramètre est un multiple de 5
//3 - "fizzbuzz" dans le cas où le nombre passé est à la fois un multiple de 3 et de 5
//4 - Le nombre dans le cas où ce dernier n’est ni un multiple de 3 ni un multiple de 5

// EXERCICE 1

//function fizzBuzz(num){
 //       if( num % 5 === 0 && num % 3 === 0) {
 //           return("fizzbuzz");

 //       } else if (num % 3 === 0){
 //           return("fizz");

 //       } else if (num % 5 === 0){
 //           return ("buzz");

//        } else {
//            return(num);
//        }
//}


//console.log(fizzBuzz(15))

//EXERCICE 2

//function fizzBuzz(num){
  //  for (num=0; num <= 100; num++){
 //       if( num % 5 === 0 && num % 3 === 0) {
//            return("fizzbuzz");

//        } else if (num % 3 === 0){
//            return("fizz");

//        } else if (num % 5 === 0){
//            return ("buzz");

//        } else {
 //           return(num);
 //       }
 //   }

//}

//EXERCICE 3

//let num =   0;
//switch(true){
  //  case num % 5 === 0 && num % 3 === 0 :
  //  console.log("fizzbuzz");
  //  break;

  //  case num % 3 === 0:
  //  console.log("fizz")
  //  break;

  //  case num % 5 === 0:
  //  console.log ("buzz")
  //  break;

  //  default :
  //  console.log (num)
//}

// EXERCICE 4

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stout.write("please enter number: ");
process.stdin.on(`data`, (numb) => {
    console.log(fizzbuzz(numb));
    process.exit();
})





