// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

// input number whole, positive, no funny buis
// print every number from 1 to the number, unless /2 fizz, /3 buzz, /2/3 fizzbuzz

// for loop
// modulus to check for remainder of 0 for /2,/3
// console.log fizzbuzz if it is % 3 === 0 && % 2 === 0
// console.log fizz if it is % 2 === 0
// console.log buzz if it is % 3 === 0
// else console log number

const fizzBuzz = (num) => {
    for(let i = 1; i <= num; i++) {
        if(i % 2 === 0 && i % 3 === 0) {
            console.log('fizzbuzz')
        } else if(i % 2 === 0) {
            console.log('fizz')
        } else if (i % 3 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}

console.log(fizzBuzz(10), '=>', 1,'fizz','buzz','fizz',5,'fizzbuzz',7,'fizz', 'buzz', 'fizz')