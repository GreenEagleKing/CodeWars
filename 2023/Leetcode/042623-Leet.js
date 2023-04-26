//   Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// array of integers only, all appear twice accept 1
// return the value that appears once

// sort the array
// loop through each value
// if the current indexof === current lastindexof
// return that value

function singleNumber(nums) {
  let array = nums.sort()

  for (let i = 0; i <= nums.length; i++) {
    if (array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
      return array[i]
    }
  }
}

console.log(singleNumber([2, 2, 1]), 1)
console.log(singleNumber([1]), 1)
console.log(singleNumber([4, 2, 1, 2, 1]), 4)
