function fizz(m){
    return m%3 === 0 && m%5 === 0 ? "fizzbuzz" : m%3 === 0 ? "fizz" : m%5 === 0 ? "buzz" : m;
}
for(i=0; i < 100; i++){
    console.log(fizz(i));
}

