// If else method

let number = process.argv[2] // entrer le paramètre dans la console process.argv[]

let fizzbuzz = number => {
  if (number % 3 == 0 && number % 5 == 0) {
    return 'fizzbuzz'
  } else if (number % 3 == 0) {
    return 'fizz'
  } else if (number % 5 == 0) {
    return 'buzz'
  } else {
    return number
  }
}
console.log(fizzbuzz (number));

// Switch case method

/*let fizzbuzz = number => {
  switch (true) {
    case number % 3 == 0 && number % 5 == 0:
      return 'fizzbuzz'
      break
    case number % 5 == 0:
      return 'buzz'
      break
    case number % 3 == 0:
      return 'fizz'
      break
    default:
      return number
  }
}
/*



// Test de 1 à 100:

/* function test () {
  for (let i = 1; i < 100; i++) {
    console.log(fizzbuzz(i))
  }
}

test()
*/
