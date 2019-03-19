const fizzbuzz = (numb) => {
    let result = "";

    result = (numb % 3 === 0 && numb % 5 === 0) ?
        "fizzbuzz"
        : (numb % 5 === 0) ?
            "buzz"
            : (numb % 3 === 0) ?
                "fizz" : numb;
    return result;
}

for (let i = 1; i < 100; i++) {
    console.log(`i= ${i}, result = ${fizzbuzz(i)}`);
}


process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdout.write("please enter number: ");
process.stdin.on('data', (numb) => {

    console.log(fizzbuzz(numb));

    process.exit();
})