process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('Enter a number: ')
process.stdin.on('data', (num) =>  {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log( "fizzbuzz");
  } else if (num % 5 == 0) {
    console.log( "buzz");
  } else if (num % 3 == 0) {
    console.log( "fizz");
  } else {
    console.log(num);
    process.exit()
  }
})


