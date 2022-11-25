// 7 kyu JavaScript Array Filter

// filter out odd numbers from array


function getEvenNumbers(numbersArray){
    return numbersArray.filter(element => element % 2 === 0)
  }

console.log(getEvenNumbers([2,3,5,6])) // [2,4,6]

// 7 kyu Largest pair sum in array

// Given a sequence of numbers, find the largest pair sum in the sequence.

// array of integers, minimum of 2 nums in array
// sum of the highest 2 values

// sort the array from high to low
// slice first 2 values
// add values together


function largestPairSum (numbers) {
    let pair = numbers.sort((a,b) => b - a)
    return pair[0] + pair[1]
  }

console.log(largestPairSum([10,14,2,23,19])) // 23+19=42
console.log(largestPairSum([99,2,2,8,22])) // 99+22 = 121