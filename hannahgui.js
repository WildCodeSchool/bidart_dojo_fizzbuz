function ezpz(number){
    if (number%3 !=0){
    return('fizz');
    } else if (number%5 !=0){
    return('buzz');
    } else if ((i % 3 === 0 )||(i % 5 === 0)||(i % 3 === 0 && i % 5 === 0)){
    sum = sum + i;
    return('fizzbuzz');
    } else {
    return(number)
    }
    }
    console.log(number);


    
    const number = number;
    switch (number){
        case (number%3 !=0):
            console.log('Fizz');
            break;
        case (number%5 !=0):
            console.log('Buzz');
            break;
        case ((i % 3 === 0)||(i % 5 === 0)||(i % 3 === 0 && i % 5 === 0)):
            console.log('fizzbuzz');
            break;
        case(number):
            console.log(number);
            break;            
    }

    function ezpz(number){
        for (number=0; number<100; number++){
            if (number%3 !=0){
            return('fizz');
            } else if (number%5 !=0){
            return('buzz');
            } else if ((i % 3 === 0 )||(i % 5 === 0)||(i % 3 === 0 && i % 5 === 0)){
            sum = sum + i;
            return('fizzbuzz');
            } else {
            return(number)
            }
            }
    }
        console.log(number);
    
    // stdin / stdout
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
    


    
