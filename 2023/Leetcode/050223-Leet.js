// Plus One

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// array of single digits only, in most to least significant, e.g.123 or 4321
// return an array of single digits, add one to whole number and split

//loop in reverse
// if the digit is < 9 => digits = digit + 1
// return digit
//else digit = 0
// digits.unshift(1) // adds one to front of array because number has been passed over
//return digits

function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1
      return digits
    } else {
      digits[i] = 0
    }
  }
  digits.unshift(1)
  return digits
}

console.log(plusOne([1, 2, 3]), [1, 2, 4])
console.log(plusOne([4, 3, 2, 1]), [4, 3, 2, 2])
console.log(plusOne([9]), [1, 0])
console.log(plusOne([9, 9]), [1, 0, 0])
