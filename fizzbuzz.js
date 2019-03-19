process.stdin.resume()
process.stdin.setEncoding('utf8')


console.log('Enter a number')
process.stdin.on('data', (number) => {
    if (number < 100) { 
        if (number % 3 === 0 && number % 5 === 0) {
            console.log('fizzbuzz');

        } else if (number % 5 === 0) {
            console.log('buzz');

        } else if (number % 3 === 0) {
            console.log('fizz');
        } else {
            console.log(number);
        }
    } else{
        console.log('Your number must be <100')
    }    
    process.exit()
})





