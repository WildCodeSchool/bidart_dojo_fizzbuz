process.stdin.resume();
process.stdin.setEncoding("utf8");

console.log("Press 'Enter' to start: ");

process.stdin.on("data", str => {
  for (let i = 0; i < 100; i++)
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  process.exit();
});
