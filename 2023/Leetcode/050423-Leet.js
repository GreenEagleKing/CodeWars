// Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// array of integers, pos only
// move 0's to end of array

// loop through array
// for each element
// if element === 0
// splice 0 (remove)
// push 0 to end of array

function moveZeros(nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
    }
  }
  return nums
}

console.log(moveZeros([0, 1, 0, 3, 12]), [1, 3, 12, 0, 0])
console.log(moveZeros([0]), [0])
console.log(moveZeros([1]), [1])
