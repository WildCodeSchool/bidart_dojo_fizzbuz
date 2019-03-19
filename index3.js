process.stdin.resume();
process.stdin.setEncoding("utf8");

console.log("Enter a number: ");
process.stdin.on("data", num => {
  while (num % 3 == 0) {
    console.log("fizz");
    break;
  }
  while (num % 5 == 0) {
    console.log("buzz");
    break;
  }
  while (num % 3 != 0 && num % 5 != 0) {
    console.log(num);
    break;
  }
  process.exit();
});
