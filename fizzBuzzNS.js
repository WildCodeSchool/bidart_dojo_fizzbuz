function fizz(multiple){
    if(multiple %3 === 0 && multiple %5 === 0){
        console.log("fizzbuzz");
    }
    else if (multiple %3 === 0){
        console.log("fizz");
    }
    else if (multiple %5 === 0){
        console.log("buzz");
    } else {
        console.log(multiple);
        
    }
}
fizz(8);
fizz(3);
fizz(5);
fizz(15);
