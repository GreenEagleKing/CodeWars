// 6 kyu Sum of Digits / Digital Root

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// integer, non-neg, no string, no funny buisness
// return single integer

// if n length is greater than 1 integer
// then n split 
// return split n added together

function digitalRoot(n) {
    let num = n.toString().split("").map(Number)
        let sum = num.reduce((acc, c) => {
            return num = acc + c
        })
  
}

console.log(digitalRoot(132189)) // 1 + 3 + 2 + 1 + 8 + 9 = 24 > 2 + 4 = 6
console.log(digitalRoot(16)) // 1 + 6 = 7


function digital_root(n) {
    return (n - 1) % 9 + 1;
  }