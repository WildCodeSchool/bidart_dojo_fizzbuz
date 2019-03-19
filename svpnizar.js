let num = 4;

const a = (num) => {
    let result = "";
    if (num % 3 === 0 && num % 5 === 0) {
        result = "fizzbuzz";
    }
    else if (num % 3 === 0) {
        result = "fizz";
    }
    else if (num % 5 === 0) {
        result = "buzz";
    }
    else {
        result = num;
    }
    return result ;
}
console.log(a(num));
