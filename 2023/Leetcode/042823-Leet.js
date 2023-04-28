// Plus One

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// array of single digits only, in most to least significant, e.g.123 or 4321
// return an array of single digits, add one to whole number and split

// join the array into a string
// add one to the string
// split the string into single digits and return

// does not pass all tests
function plusOne(digits) {
  let str = digits.join("")
  let num = parseInt(str)
  num++
  let result = Array.from(String(num), Number)
  return result
}

console.log(
  plusOne([[6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]]),
  [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]
)
console.log(plusOne([1, 2, 3]), [1, 2, 4])
console.log(plusOne([4, 3, 2, 1]), [4, 3, 2, 2])
console.log(plusOne([9]), [1, 0])

// Go over this again
function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i++]
    console.log(i)
    if (digits[i] > 9) {
      digits[i] = 0
    } else {
      return digits
    }
  }
  digits.unshift(1)
  return digits
}

console.log(plusOne([1, 2, 3]), [1, 2, 4])
console.log(plusOne([4, 3, 2, 1]), [4, 3, 2, 2])
console.log(plusOne([9]), [1, 0])
console.log(
  plusOne([[6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]]),
  [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]
)
