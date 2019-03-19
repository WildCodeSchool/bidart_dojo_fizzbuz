#!/usr/bin/env node



// const fizzbuzz = (numb) => {
//     let result = "";

//     if (numb % 3 === 0 && numb % 5 === 0) {
//         result = "fizzbuzz";
//     }

//     else if (numb % 5 === 0) {
//         result = "buzz";
//     }

//     else if (numb % 3 === 0) {
//         result = "fizz";
//     }

//     else {
//         result = numb;
//     }

//     return result;
// }

// const fizzbuzz = (numb) => {
//     let result = "";

//     if (numb % 3 === 0) {
//         result += "fizz";
//     }

//     if (numb % 5 === 0) {
//         result += "buzz";
//     }

//     if (result == "") {
//         result = numb;
//     }

//     return result;
// }



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



process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdout.write("please enter number: ");
process.stdin.on('data', (numb) => {

    console.log(fizzbuzz(numb));

    process.exit();
})
