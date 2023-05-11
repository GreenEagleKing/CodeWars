// Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// array of numbers/integers, two of which add up to the target which is also an integer, is only one match, integers only
// array of two numbers which add to target only

// two loops, outer and inner
// if add loop i current value to loop j current value === target
// return index of numbers

function twoSum(nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 1; i <= nums.length; j++) {
      if (nums[i] + nums[j] === target && nums[i] !== nums[j]) {
        return [i, j]
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9), [0, 1])
console.log(twoSum([3, 2, 4], 6), [1, 2])
console.log(twoSum([3, 3], 6), [0, 1])
