// fizzbuzz sans if/else avec parametre a rentrer dans la console


process.stdin.resume()
process.stdin.setEncoding('utf8')


console.log('Enter a number')
process.stdin.on('data', (number) => {
    switch (true) {
        case number % 3 == 0 && number % 5 == 0 :
            console.log('fizzbuzz');
            break;
        case number % 5 == 0 :
            console.log('buzz');
            break;
        case number % 3 == 0 :
            console.log('fizz');
            break;
        default :
            console.log(number);
    }
    process.exit()
})

