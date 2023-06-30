//   Reverse String

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// array of string, modify array in place
// array of same strings in reverse order

// use two pointer approach
// one left at start of array and one right at end of array
// loop over the array until the left pointer > right pointer which means you have got to the middle/end of the array
// create a hold variable to store the left value while they are swapped
// left value = right value
// right value = hold
// left++
//right--

const reverseString = (s) => {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    let hold = s[left]
    s[left] = s[right]
    s[right] = hold
    left++
    right--
  }
  return s
}

console.log(reverseString(["h", "e", "l", "l", "o"])) // ["o", "l", "l", "e", "h"]
console.log(reverseString(["H", "a", "n", "n", "a", "h"])) // ["h","a","n","n","a","H"]
