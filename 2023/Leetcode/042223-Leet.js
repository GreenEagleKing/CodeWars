// Rotate the Array

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// nums array of integers only, pos and neg, in order, k is a integer only pos
// the nums array with the last k number of array integers moved to the front

// loop through array
// each number split to the back of the array
// return arr

const rotate = function (nums, k) {
  const len = nums.length
  k = k % len

  let end = nums.splice(len - k)

  nums.splice(0, 0, ...end)
  return nums
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3), [5, 6, 7, 1, 2, 3, 4])
console.log(rotate([-1, -100, 3, 99], 2), [3, 99, -1, -100])
