// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.


// number, integers, whole number only
// return integer of the F(n) result

// creating array of [0,1]
// loop until num is same
// take the 2 previous values in the array and sum them
// add each new value to array

function fibonacci(num) {
    let a = 0
    let b = 1
    let next;

    for(let i = 2; i < num; i++) {
        next = a + b
        a = b
        b = next
    }
    return next
}

console.log(fibonacci(2), 1)
console.log(fibonacci(4), 3)
console.log(fibonacci(5), 5)
console.log(fibonacci(7), 8)
