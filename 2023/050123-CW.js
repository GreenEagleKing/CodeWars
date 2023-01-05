// 7 kyu Beginner Series #3 Sum of Numbers

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it.

// pos/neg integers, 
// sum of integers between a,b

// sort a and b so lowest is a
// for loop from a to b 
// add 1 to count each iteration until reach b
// return count

function getSum( a,b ) {
    let arr = [a,b]
    arr.sort((a, b) => a - b)
    console.log(arr)
    let count = 0
    for(let i = arr[0]; i < arr[1]; i++) {
        return count += arr[0] + 1
    }
    return count
}

console.log(getSum(1,0)) // 1
console.log(getSum(-1,0)) // -1
console.log(getSum(2,1)) // 3
console.log(getSum(-150,-252)) // -20703
console.log(getSum(5,2)) // 3

// answer
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }

  console.log(getSum(2,1)) // 2
  console.log(getSum(5,2)) // 3