// 8 kyu Square(n) Sum

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// array of numbers, pos/neg, numbers only
//single integer



function squareSum(numbers){
    return numbers.reduce((acc, c) => acc + c**2, 0)
}

console.log(squareSum([1,2,2])) // 9