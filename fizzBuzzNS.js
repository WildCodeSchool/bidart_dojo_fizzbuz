function fizz(multiple){
    if(multiple %3 === 0 && multiple %5 === 0){
        return "fizzbuzz";
    }
    else if (multiple %3 === 0){
        return "fizz";
    }
    else if (multiple %5 === 0){
        return "buzz";
    } else {
        return multiple;
    }
}

//tester sans if/else

function fizz(multiple) {
    return multiple % 3 === 0 && multiple % 5 === 0 ? "fizzbuzz" : multiple % 3 === 0 ? "fizz" : multiple % 5 === 0 ? "buzz" : multiple;

}

function main() {
    console.log('fizz(3) === "fizz" :', fizz(3) === "fizz");
    console.log('fizz(4) === "fizz" :', fizz(4) === 4);

    console.log('fizz(35) === "fizz" :', fizz(35) === "buzz");

    console.log('fizz(70) === "fizz" :', fizz(70) === "buzz");

    console.log('fizz(69) === "fizz" :', fizz(69) === "fizz");

    console.log('fizz(30) === "fizz" :', fizz(30) === "fizzbuzz");

    console.log('fizz(45) === "fizz" :', fizz(45) === "fizzbuzz");
}

main();





