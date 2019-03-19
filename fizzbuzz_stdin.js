function fizzBuzz(number) {
switch (true) {
case number % 3 === 0 && number % 5 === 0:
return "fizzbuzz"
case number % 3 === 0:
return "fizz"
case number % 5 === 0:
return "buzz"
default:
return number
}
}
process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data', function (chunk) {
process.stdout.write('->: ' + fizzBuzz(chunk))
})