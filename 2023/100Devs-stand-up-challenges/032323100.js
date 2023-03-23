// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)

// sort two integers
// create array to store divisible integers
//loop to lowest integer
// if int1 % n === 0 and int2 % === 0
// add n to array
// when complete sort array and return highest number

// THIS CODE IS TOO SLOW

function divisor(int1, int2) {
  const arr = [int1, int2]
  const highestInt = Math.max(...arr)
  let divArr = []

  for (let i = highestInt; i >= 0; i--) {
    if (arr[0] % i === 0 && arr[1] % i === 0) {
      divArr.push(i)
    }
  }
  return divArr[0]
}

console.log(divisor(30, 12), 6)
console.log(divisor(8, 9), 1)
console.log(divisor(1, 1), 1)

// RECURSION METHOD

function divisor(x, y) {
  return y == 0 ? x : divisor(y, x % y)
}

console.log(divisor(30, 12), 6)
console.log(divisor(8, 9), 1)
console.log(divisor(1, 1), 1)
