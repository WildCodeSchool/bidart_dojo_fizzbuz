process.argv.forEach(nmb => {
  function fn(nombreInput) {
    return nombreInput % 3 === 0 && nombreInput % 5 === 0
      ? "fizzbuzz"
      : nombreInput % 3 === 0
      ? "fizz"
      : nombreInput % 5 === 0
      ? "buzz"
      : nombreInput;
  }
  for (nmb; nmb <= 100; nmb++) {
    console.log(fn(nmb));
  }
});
