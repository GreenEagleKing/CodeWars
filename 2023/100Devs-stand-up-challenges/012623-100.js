// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

// parameter - number, integer, positive?neg
// console log every number from 1 to the parameter number, if it is /3 log "fizz", if it is /5 log "buzz", if both 3 and 5 print Fizz Buzz

function fizzBuzz(num) {
    for(let i = 1; i <= num; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("Fizz Buzz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else {
            console.log(i)
        }
    }
   
}

// test

console.log(fizzBuzz(15)) // 1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz